import Heading from "@theme/Heading";
import styles from "@site/src/css/resume.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { FaGithub, FaLinkedin, FaStackOverflow, FaGlobe } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { GoMail } from "react-icons/go";
import mehedi_webp from "@site/static/img/mehedi.webp";

const socialLinks = [
  {
    href: "mailto:mhasan502@gmail.com",
    icon: GoMail,
    label: "mhasan502@gmail.com",
    hover_text: "Send an email",
  },
  {
    href: "https://github.com/mhasan502",
    icon: FaGithub,
    label: "mhasan502",
    hover_text: "GitHub",
  },
  {
    href: "https://linkedin.com/in/Mhasan502",
    icon: FaLinkedin,
    label: "mhasan502",
    hover_text: "LinkedIn",
  },
  {
    href: "https://scholar.google.com/citations?user=1E7N-BoAAAAJ",
    icon: SiGooglescholar,
    label: "Citations: 39",
    hover_text: "Google Scholar",
  },
  {
    href: "https://stackoverflow.com/users/14150890/mhasan502",
    icon: FaStackOverflow,
    label: "Stack Overflow",
    hover_text: "Visit Stack Overflow",
  },
];


export default function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  const [experience, setExperience] = useState({ years: 3 });

  useEffect(() => {
    const startDate = new Date(2022, 4, 1);
    const currentDate = new Date();

    const totalMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const roundedYears = months >= 5 ? years + 0.5 : years;

    setExperience({ years, roundedYears });
  }, []);


  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("container", styles.hero__container)}>
        <div className={styles.hero__left}>
          <img className={styles.hero__image} src={mehedi_webp} alt="Picture of Mhasan502" />
          <Heading as="h1" className={styles.hero__title}>
            Md. Mehedi Hasan
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <ul className={styles.hero__introduction__list}>
            <li>
              AI Engineer with <span className={styles.highlight}>{experience.roundedYears}+ years </span> of experience.
            </li>
            <li>
              Real-time vision systems expertise
            </li>
            <li>
              AI Agents & RAG implementations
            </li>
            <li>
              Open Source Contribution: <span className={styles.highlight}>2</span>
            </li>
            <li>
              Education: B.Sc. in CSE, North South University
            </li>
          </ul>
        </div>
        <div className={styles.hero__right}>
          <div className={styles.social__links__container}>
            {socialLinks.map(({ href, icon: Icon, label, hover_text }, idx) => (
              <div key={idx} className={styles.social__link__wrapper}>
                <a className={styles.social__link__item} href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className={styles.social__icon} />
                  <span className={styles.social__link__label}>{label}</span>
                </a>
                {hover_text && <span className={styles.social__link__tooltip}>{hover_text}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}