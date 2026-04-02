import Layout from '@theme/Layout';
import HeroSection from '../components/resume/HeroSection';
import Experience from '../components/resume/Experience';
import Publications from "../components/resume/Publications";
import Skills from "../components/resume/Skills";
import Education from "../components/resume/Education";
import styles from "@site/src/css/resume.module.css";


export default function Home() {
  return (
    <Layout title={`Md. Mehedi Hasan`} description="Mhasan502, Mehedi Hasan, AI Engineer, Researcher, and Open Source Contributor.">
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
