import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import HeroSection from '../components/resume/HeroSection';
import Experience from '../components/resume/Experience';
import Publications from "../components/resume/Publications";
import Skills from "../components/resume/Skills";
import Education from "../components/resume/Education";
import styles from "@site/src/css/resume.module.css";
import { socialLinks } from "../components/resume/data/socialLinks";

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md. Mehedi Hasan",
  alternateName: ["Mehedi Hasan", "mhasan502"],
  givenName: "Mehedi",
  additionalName: "Md.",
  familyName: "Hasan",
  jobTitle: "AI/ML Engineer",
  description:
    "Md. Mehedi Hasan (also known as Mehedi Hasan, handle mhasan502) is an AI/ML Engineer building production-ready systems for computer vision, real-time inference, and LLM applications.",
  url: "https://mhasan502.github.io/",
  image: "https://mhasan502.github.io/img/mehedi.webp",
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Large Language Models",
    "MLOps",
    "GPU Inference Optimization",
  ],
  sameAs: socialLinks
    .map((link) => link.href)
    .filter((href) => href.startsWith("https://")),
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mehedi Hasan | AI/ML Engineer",
  alternateName: "mhasan502",
  url: "https://mhasan502.github.io/",
  description:
    "Portfolio of Md. Mehedi Hasan (Mehedi Hasan), AI/ML Engineer.",
};


export default function Home() {
  return (
    <Layout
      wrapperClassName="home-page"
      title={`AI/ML Engineer | Mehedi Hasan (Md. Mehedi Hasan)`}
      description="Mehedi Hasan (Md. Mehedi Hasan, aka mhasan502) is an AI/ML Engineer focused on computer vision, high-performance inference, and LLM systems."
    >
      <Head>
        <meta name="author" content="Md. Mehedi Hasan"/>
        <meta name="robots" content="index, follow, max-image-preview:large"/>
        <script type="application/ld+json">
          {JSON.stringify(personStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteStructuredData)}
        </script>
      </Head>
      <div className={styles.resumePage}>
        <HeroSection/>
        <main className={`resume ${styles.resumeMain}`}>
          <Experience/>
          <Skills/>
          <Education/>
          <Publications/>
        </main>
      </div>
    </Layout>
  );
}
