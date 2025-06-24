import Heading from "@theme/Heading";
import styles from "@site/src/css/resume.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {useEffect, useState} from "react";
import clsx from "clsx";
import {FaGithub, FaLinkedin, FaStackOverflow} from "react-icons/fa";
import {SiGooglescholar} from "react-icons/si";
import {GoMail} from "react-icons/go";
import mehedi_webp from "@site/static/img/mehedi.webp";

const socialLinks = [
  {
    href: "mailto:mhasan502@gmail.com",
    icon: GoMail,
    label: "Email",
  },
  {
    href: "https://github.com/mhasan502",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/Mhasan502",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://scholar.google.com/citations?user=1E7N-BoAAAAJ",
    icon: SiGooglescholar,
    label: "Google Scholar",
  },
  {
    href: "https://stackoverflow.com/users/14150890/mhasan502",
    icon: FaStackOverflow,
    label: "Stack Overflow",
  },
];


export default function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  const [experience, setExperience] = useState({years: 2});

  useEffect(() => {
    const startDate = new Date(2023, 0, 1);
    const currentDate = new Date();

    const totalMonths = (
      currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth()
    );
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const roundedYears = months >= 5 ? years + 0.5 : years;

    setExperience({years, roundedYears});
  }, []);


  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img className={styles.hero__image} src={mehedi_webp} alt="Picture of Mhasan502"/>
        <Heading as="h1" className={styles.hero__title}>
          Md. Mehedi Hasan
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.hero__introduction}>
          A dedicated and innovative AI Engineer with <span>{experience.roundedYears}+ years</span> of experience in
          developing and deploying sophisticated AI solutions. Specializing in real-time vision inference pipelines,
          with a focus on enhancing surveillance systems, video analysis, and real-time analytics. Additionally
          experienced in building AI Agents and implementing Retrieval-Augmented Generation (RAG) architectures to
          deliver context-aware, intelligent systems for various enterprise applications.
        </p>
        <p className={styles.hero__introduction}>
          With a proven track record across diverse industries—including Ready-Made Garments (RMG), Retail,
          Transportation and Construction Logistics —bringing a unique combination of technical expertise and industry
          insight to each project. Eager to contribute expertise and innovation to a collaborative team. Feel free to
          reach out by email or connect on LinkedIn.
        </p>
        <div className={styles.social__link__section}>
          {socialLinks.map(({href, icon: Icon, label}, idx) => (
            <div className={styles.icon__tooltip}>
              <a key={idx} className={styles.social__link__item} href={href} target="_blank" rel="noopener noreferrer">
                <Icon className={styles.social__icon}/>
              </a>
              <span className={styles.icon__tooltip__text}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}