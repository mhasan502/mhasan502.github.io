import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");
const outputPath = resolve(rootDir, "src/components/resume/data/scholarMetrics.json");

const DEFAULT_CITATIONS = 48;
const GS_AUTHOR_ID = "1E7N-BoAAAAJ";
const SERPAPI_API_KEY = process.env.SERPAPI_API_KEY;
const MAX_ATTEMPTS = 3;
const RETRY_DELAY_MS = 1_000;
const RETRYABLE_STATUS_CODES = new Set([408, 425, 429, 500, 502, 503, 504]);

async function readExistingMetrics() {
  try {
    const raw = await readFile(outputPath, "utf8");
    const parsed = JSON.parse(raw);
    if (Number.isFinite(parsed?.citations)) {
      return parsed;
    }
    return { citations: DEFAULT_CITATIONS, source: "fallback-default", status: "stale" };
  } catch {
    return { citations: DEFAULT_CITATIONS, source: "fallback-default", status: "stale" };
  }
}

async function fetchCitationCount() {
  if (!SERPAPI_API_KEY) {
    throw new Error("SERPAPI_API_KEY is missing.");
  }

  const endpoint = new URL("https://serpapi.com/search.json");
  endpoint.searchParams.set("engine", "google_scholar_author");
  endpoint.searchParams.set("author_id", GS_AUTHOR_ID);
  endpoint.searchParams.set("hl", "en");
  endpoint.searchParams.set("api_key", SERPAPI_API_KEY);

  let lastError;
  // ponytail: fixed three-attempt retry; add jitter only if API reliability warrants it.
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(endpoint, {
        headers: { accept: "application/json" },
        signal: AbortSignal.timeout(20_000),
      });

      if (!response.ok) {
        const error = new Error(`SerpApi request failed with status ${response.status}.`);
        error.retryable = RETRYABLE_STATUS_CODES.has(response.status);
        throw error;
      }

      const payload = await response.json();
      const citationRow = payload?.cited_by?.table?.find((row) => row?.citations?.all != null);
      const citations = Number(citationRow?.citations?.all);

      if (!Number.isFinite(citations)) {
        throw new Error("Unable to parse citation count from SerpApi response.");
      }

      return citations;
    } catch (error) {
      lastError = error;
      if (error?.retryable === false || attempt === MAX_ATTEMPTS) {
        throw error;
      }

      const delay = RETRY_DELAY_MS * 2 ** (attempt - 1);
      console.warn(`SerpApi attempt ${attempt} failed. Retrying in ${delay}ms.`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  throw lastError;
}

async function saveMetrics(metrics) {
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(metrics, null, 2)}\n`, "utf8");
}

const existing = await readExistingMetrics();

try {
  const citations = await fetchCitationCount();
  const hasCitationChanged = citations !== existing.citations;
  const wasStale = existing?.status !== "ok";

  if (!hasCitationChanged && !wasStale) {
    console.log(`No citation change detected. Keeping current value: ${citations}.`);
    process.exit(0);
  }

  const next = {
    citations,
    updatedAt: new Date().toISOString(),
    source: "serpapi-google-scholar-author",
    status: "ok",
  };

  await saveMetrics(next);
  console.log(`Updated Google Scholar citations to ${citations}.`);
} catch (error) {
  const fallbackCitations = Number.isFinite(existing?.citations) ? existing.citations : DEFAULT_CITATIONS;
  console.error(
    `Citation update failed. Keeping previous value: ${fallbackCitations}. Reason: ${String(error?.message ?? error)}`,
  );
  process.exit(1);
}
