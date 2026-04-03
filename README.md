# Md. Mehedi Hasan

Personal portfolio and resume website for Md. Mehedi Hasan, built with [Docusaurus](https://docusaurus.io/) and deployed to GitHub Pages.

Live site: <https://mhasan502.github.io/>

## Requirements

- Node.js `>=24.0`
- Yarn `1.22.x`

## Getting Started

Install dependencies:

```bash
yarn
```

Start the local development server:

```bash
yarn start
```

Create a production build:

```bash
yarn build
```

Clear the Docusaurus cache:

```bash
yarn clear
```

## Project Structure

```text
.
|-- .github/workflows/              GitHub Actions workflows
|-- docs/                           Default Docusaurus docs content (currently unused)
|-- blog/                           Blog directory (currently unused)
|-- scripts/
|   `-- update-scholar-citations.mjs
|-- src/
|   |-- components/resume/          Resume and portfolio UI
|   |   |-- data/                   Resume content and scholar metrics
|   |   `-- common/                 Shared UI pieces
|   |-- css/                        Global styles, fonts, overrides
|   |-- pages/index.jsx             Homepage entry
|   `-- theme/                      Theme root and smooth-scroll integration
|-- static/                         Static assets such as images, favicon, robots.txt
|-- docusaurus.config.js            Site configuration
`-- sidebars.js                     Sidebar config for docs if re-enabled
```

## Google Scholar Citation Updates

The repository includes `scripts/update-scholar-citations.mjs`, which updates:

- `src/components/resume/data/scholarMetrics.json`

The script fetches citation counts for the configured Google Scholar author using SerpApi. It requires:

- `SERPAPI_API_KEY` environment variable

Run it manually with:

```bash
yarn update:scholar-citations
```

If the API key is missing or the request fails, the script preserves the existing citation count and exits with an error status.

## Deployment

Deployment is automated through GitHub Actions:

- `.github/workflows/deploy.yml` builds the site on pushes to `main` and deploys it to GitHub Pages
- `.github/workflows/update-scholar-citations.yml` runs on a schedule and on manual dispatch to refresh citation metrics


## Notes

- The `docs/` and `blog/` directories still contain starter Docusaurus content, but both features are disabled in the current config.
- Google Analytics is configured through the `gtag` setting in `docusaurus.config.js`.
- KaTeX and Mermaid support are enabled in the Markdown configuration.
- Site-level metadata, analytics, sitemap behavior, and GitHub Pages settings are configured in `docusaurus.config.js`.
