import styles from "@site/src/css/resume.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useEffect, useRef, useState } from "react";
import { PiArrowElbowDownRight } from "react-icons/pi";
import mehedi_webp from "@site/static/img/mehedi.webp";
import { socialLinks } from "./data/socialLinks";
import { getExperienceYears } from "./utils/getExperienceYears";
import { HiSparkles, HiOutlineSparkles } from "react-icons/hi2";
import { summarizedAIData } from "./data/summarizedAIData";


export default function HeroSection() {
  const { siteConfig } = useDocusaurusContext();
  const experience = getExperienceYears();
  const emailLink = socialLinks.find((item) => item.id === "email")?.href ?? "#";
  const [isBadgeBubbleOpen, setIsBadgeBubbleOpen] = useState(false);
  const [currentBubbleMessage, setCurrentBubbleMessage] = useState("");
  const [typedBubbleText, setTypedBubbleText] = useState("");
  const badgeWrapperRef = useRef(null);
  const recentBubbleIdsRef = useRef([]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (!badgeWrapperRef.current?.contains(event.target)) {
        setIsBadgeBubbleOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsBadgeBubbleOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isBadgeBubbleOpen) {
      setTypedBubbleText("");
      return;
    }
    if (!currentBubbleMessage) {
      return;
    }

    let index = 0;
    const typingTimer = window.setInterval(() => {
      index += 1;
      setTypedBubbleText(currentBubbleMessage.slice(0, index));
      if (index >= currentBubbleMessage.length) {
        window.clearInterval(typingTimer);
      }
    }, 35);

    return () => window.clearInterval(typingTimer);
  }, [currentBubbleMessage, isBadgeBubbleOpen]);

  function pickRandomBubbleMessage() {
    if (summarizedAIData.length === 0) {
      return "";
    }

    const recentIds = recentBubbleIdsRef.current;
    const candidates = summarizedAIData.filter((item) => !recentIds.includes(item.id));
    const pool = candidates.length > 0 ? candidates : summarizedAIData;
    const nextItem = pool[Math.floor(Math.random() * pool.length)];

    recentBubbleIdsRef.current = [...recentIds, nextItem.id].slice(-5);
    return nextItem.text;
  }


  return (
    <header className={styles.heroBanner}>
      <div className={styles.hero__container}>
        <div className={styles.hero__left}>
          <img className={styles.hero__image} src={mehedi_webp} alt="Picture of Mhasan502" />
          <div className={styles.hero__title}>
            <span className={styles.hero__title__base}>Md.</span>{" "}
            <span className={styles.hero__title__highlight}>Mehedi Hasan</span>
          </div>
          <div className={styles.hero__badge__wrap} ref={badgeWrapperRef}>
            <a
              className={`${styles.hero__badge} ${isBadgeBubbleOpen ? styles.hero__badge__open : ""}`}
              href={emailLink}
              aria-label="Toggle badge message"
              aria-expanded={isBadgeBubbleOpen}
              aria-controls="hero-badge-bubble"
              onClick={(event) => {
                event.preventDefault();
                setIsBadgeBubbleOpen((open) => {
                  if (open) {
                    return false;
                  }
                  setCurrentBubbleMessage(pickRandomBubbleMessage());
                  return true;
                });
              }}
            >
              {isBadgeBubbleOpen ? (
                <HiSparkles className={styles.hero__badge__icon} />
              ) : (
                <HiOutlineSparkles className={styles.hero__badge__icon} />
              )}
              <span className={styles.hero__badge__textWrap}>
                <span className={styles.hero__badge__text}>{isBadgeBubbleOpen ? "· · ·" : siteConfig.tagline}</span>
                <span className={styles.hero__badge__textSizer} aria-hidden="true">{siteConfig.tagline}</span>
              </span>
            </a>
            {isBadgeBubbleOpen && (
              <div id="hero-badge-bubble" className={styles.hero__badge__bubble} role="status" aria-live="polite">
                <span>{typedBubbleText}</span>
                <span className={styles.hero__badge__bubble__cursor} aria-hidden="true">|</span>
              </div>
            )}
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
