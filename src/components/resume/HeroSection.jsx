import styles from "@site/src/css/resume.module.css";
import {PiArrowElbowDownRight} from "react-icons/pi";
import mehedi_webp from "@site/static/img/mehedi.webp";
import {socialLinks} from "./data/socialLinks";
import {getExperienceYears} from "./utils/getExperienceYears";
import scholarMetrics from "./data/scholarMetrics.json";


export default function HeroSection() {
  const experience = getExperienceYears();
  const openSourceContributions = 2;
  const googleScholarCitations = Number.isFinite(scholarMetrics?.citations) ? scholarMetrics.citations : 48;
  const heroStats = [
    {label: "Years Experience", value: `${experience.roundedYears}+`},
    {label: "Scholar Citations", value: `${googleScholarCitations}`},
    {label: "Open Source Contributions", value: `${openSourceContributions}`},
  ];


  return (
    <header className={styles.heroBanner}>
      <div className={styles.hero__container}>
        <div className={styles.hero__left}>
          <div className={styles.hero__title}>
            <span className={styles.hero__title__base}>Md.</span>{" "}
            <span className={styles.hero__title__highlight}>Mehedi Hasan</span>
          </div>
          <p className={styles.hero__subtitle}>
            Building production-ready AI systems across computer vision, high-performance inference, and LLM workflows.
          </p>
          <div className={styles.hero__stats}>
            {heroStats.map((item) => (
              <div key={item.label} className={styles.hero__stat}>
                <span className={styles.hero__stat__value}>{item.value}</span>
                <span className={styles.hero__stat__label}>{item.label}</span>
              </div>
            ))}
          </div>
          <ul className={styles.hero__introduction__list}>
            <li>
              <PiArrowElbowDownRight className={styles.hero__bullet__icon}/>
              <span className={styles.hero__bullet__text}>
                Specialized in computer vision, inference systems, MLOps, and LLM applications.
              </span>
            </li>
            <li>
              <PiArrowElbowDownRight className={styles.hero__bullet__icon}/>
              <span className={styles.hero__bullet__text}>
                Shipped AI agents, real-time vision pipelines, and optimized GPU inference workloads.
              </span>
            </li>
            <li>
              <PiArrowElbowDownRight className={styles.hero__bullet__icon}/>
              <span className={styles.hero__bullet__text}>Bachelor in CSE, North South University</span>
            </li>
          </ul>
          <div className={styles.social__links__container}>
            {socialLinks.map(({id, href, icon: Icon, hoverText}) => (
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
                  <Icon className={styles.social__icon}/>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.hero__right}>
          <div className={styles.hero__image__panel}>
            <img className={styles.hero__image} src={mehedi_webp} alt="Picture of Mhasan502"/>
          </div>
        </div>
      </div>
    </header>
  );
}
