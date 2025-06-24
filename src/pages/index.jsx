import Layout from '@theme/Layout';
import HeroSection from '../components/resume/HeroSection';
import Experience from '../components/resume/Experience';
import Publications from "../components/resume/Publications";
import Skills from "../components/resume/Skills";
import Educations from "../components/resume/Educations";


export default function Home() {
  return (
    <Layout title={`Md. Mehedi Hasan`} description="Mhasan502, Mehedi Hasan, AI Engineer, Researcher, and Open Source Contributor.">
      <HeroSection/>
      <main className="resume">
        <Experience/>
        <hr className="divider"/>
        <Publications/>
        <hr className="divider"/>
        <Skills/>
        <hr className="divider"/>
        <Educations/>
      </main>
    </Layout>
  );
}
