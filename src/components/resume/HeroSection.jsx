import Heading from "@theme/Heading";
import styles from "@site/src/css/resume.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { LuSparkles } from "react-icons/lu";

import { SiGooglescholar } from "react-icons/si";
import { GoMail } from "react-icons/go";
import { PiArrowElbowDownRight } from "react-icons/pi";
import mehedi_webp from "@site/static/img/mehedi.webp";

const socialLinks = [
  {
    href: "mailto:mhasan502@gmail.com",
    icon: GoMail,
    hover_text: "mhasan502@gmail.com",
  },
  {
    href: "https://github.com/mhasan502",
    icon: FaGithub,
    hover_text: "GitHub",
  },
  {
    href: "https://linkedin.com/in/Mhasan502",
    icon: FaLinkedin,
    hover_text: "LinkedIn",
  },
  {
    href: "https://scholar.google.com/citations?user=1E7N-BoAAAAJ",
    icon: SiGooglescholar,
    hover_text: "Google Scholar",
  },
  {
    href: "https://stackoverflow.com/users/14150890/mhasan502",
    icon: FaStackOverflow,
    hover_text: "Stack Overflow",
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
    <header className={styles.heroBanner}>
      <div className={styles.hero__container}>
        <div className={styles.hero__left}>
          <img className={styles.hero__image} src={mehedi_webp} alt="Picture of Mhasan502" />
          <Heading as="h1" className={styles.hero__title}>
            <span className={styles.hero__title__base}>Md.</span>{" "}
            <span className={styles.hero__title__highlight}>Mehedi Hasan</span>
          </Heading>
          <div className={styles.hero__badge}>
            <LuSparkles className={styles.hero__badge__icon} />
            <span>{siteConfig.tagline}</span>
          </div>
          <ul className={styles.hero__introduction__list}>
            <li>
              <PiArrowElbowDownRight className={styles.hero__bullet__icon} />
              <span className={styles.hero__bullet__text}>
                AI/ML Engineer with <span className={styles.yellow}>{experience.roundedYears}+ years </span> of experience.
              </span>
            </li>
            <li>
              <PiArrowElbowDownRight className={styles.hero__bullet__icon} />
              <span className={styles.hero__bullet__text}>
                Specializing in computer vision, inference systems, MLOps, and LLM applications.
              </span>
            </li>
            <li>
              <PiArrowElbowDownRight className={styles.hero__bullet__icon} />
              <span className={styles.hero__bullet__text}>
                Shipped AI agents, real-time vision model pipelines, optimized GPU inference.
              </span>
            </li>
            <li>
              <PiArrowElbowDownRight className={styles.hero__bullet__icon} />
              <span className={styles.hero__bullet__text}>
                Open Source Contribution: <span className={styles.yellow}>2</span>
              </span>
            </li>
            <li>
              <PiArrowElbowDownRight className={styles.hero__bullet__icon} />
              <span className={styles.hero__bullet__text}>
                Google Scholar Citations: <span className={styles.yellow}>48</span>
              </span>
            </li>
            <li>
              <PiArrowElbowDownRight className={styles.hero__bullet__icon} />
              <span className={styles.hero__bullet__text}>Bachelor in CSE, North South University</span>
            </li>
          </ul>
          <div className={styles.social__links__container}>
            {socialLinks.map(({ href, icon: Icon, hover_text }, idx) => (
              <div key={idx} className={styles.social__link__wrapper}>
                <a
                  className={styles.social__link__item}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={hover_text}
                  aria-label={hover_text}
                  data-tooltip={hover_text}
                >
                  <Icon className={styles.social__icon} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
