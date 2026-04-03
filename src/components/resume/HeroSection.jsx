import styles from "@site/src/css/resume.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { LuSparkles } from "react-icons/lu";
import { PiArrowElbowDownRight } from "react-icons/pi";
import mehedi_webp from "@site/static/img/mehedi.webp";
import { socialLinks } from "./data/socialLinks";
import { getExperienceYears } from "./utils/getExperienceYears";


export default function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  const experience = getExperienceYears(new Date(2022, 4, 1));


  return (
    <header className={styles.heroBanner}>
      <div className={styles.hero__container}>
        <div className={styles.hero__left}>
          <img className={styles.hero__image} src={mehedi_webp} alt="Picture of Mhasan502" />
          <div className={styles.hero__title}>
            <span className={styles.hero__title__base}>Md.</span>{" "}
            <span className={styles.hero__title__highlight}>Mehedi Hasan</span>
          </div>
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
            {socialLinks.map(({ id, href, icon: Icon, hoverText }) => (
              <div key={id} className={styles.social__link__wrapper}>
                <a
                  className={styles.social__link__item}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={hoverText}
                  aria-label={hoverText}
                  data-tooltip={hoverText}
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
