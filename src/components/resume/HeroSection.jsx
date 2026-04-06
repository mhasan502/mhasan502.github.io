import styles from "@site/src/css/resume.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {useEffect, useRef, useState} from "react";
import {PiArrowElbowDownRight} from "react-icons/pi";
import mehedi_webp from "@site/static/img/mehedi.webp";
import {socialLinks} from "./data/socialLinks";
import {getExperienceYears} from "./utils/getExperienceYears";
import {HiSparkles, HiOutlineSparkles} from "react-icons/hi2";
import {summarizedAIData} from "./data/summarizedAIData";
import scholarMetrics from "./data/scholarMetrics.json";


export default function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  const experience = getExperienceYears();
  const emailLink = socialLinks.find((item) => item.id === "email")?.href ?? "#";
  const contactEmail = emailLink.replace("mailto:", "");
  const whatsappLink = "https://wa.link/f3urw3";
  const resumeLink = "/files/Resume%20of%20Md.%20Mehedi%20Hasan.pdf";
  const openSourceContributions = 2;
  const [isBadgeBubbleOpen, setIsBadgeBubbleOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentBubbleMessage, setCurrentBubbleMessage] = useState("");
  const [typedBubbleText, setTypedBubbleText] = useState("");
  const badgeWrapperRef = useRef(null);
  const recentBubbleIdsRef = useRef([]);
  const googleScholarCitations = Number.isFinite(scholarMetrics?.citations) ? scholarMetrics.citations : 48;
  const heroStats = [
    {label: "Years Experience", value: `${experience.roundedYears}+`},
    {label: "Scholar Citations", value: `${googleScholarCitations}`},
    {label: "Open Source Contributions", value: `${openSourceContributions}`},
  ];

  useEffect(() => {
    function handlePointerDown(event) {
      if (!badgeWrapperRef.current?.contains(event.target)) {
        setIsBadgeBubbleOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsContactModalOpen(false);
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

  const isBubbleTyping =
    isBadgeBubbleOpen &&
    currentBubbleMessage.length > 0 &&
    typedBubbleText.length < currentBubbleMessage.length;

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
          <h1 className={styles.hero__title}>
            <span className={styles.hero__title__base}>Md.</span>{" "}
            <span className={styles.hero__title__highlight}>Mehedi Hasan</span>
          </h1>
          <p className={styles.hero__subtitle}>
            Creating scalable AI solutions across visual intelligence, high-performance inference, and generative AI.
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
          <div className={styles.hero__cta__group}>
            <button
              type="button"
              className={`${styles.hero__cta} ${styles.hero__cta__primary}`}
              onClick={() => setIsContactModalOpen(true)}
            >
              Contact me
            </button>
            <a className={`${styles.hero__cta} ${styles.hero__cta__secondary}`} href={resumeLink} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
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
            <div className={styles.hero__expertise__list}>
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
                    <HiSparkles className={styles.hero__badge__icon}/>
                  ) : (
                    <HiOutlineSparkles className={styles.hero__badge__icon}/>
                  )}
                  <span className={styles.hero__badge__textWrap}>
                <span className={styles.hero__badge__text}>
                  {isBadgeBubbleOpen ? (
                    isBubbleTyping ? (
                      <span className={styles.hero__badge__loading} aria-label="AI is generating">
                        <span className={styles.hero__badge__dot} aria-hidden="true"/>
                        <span className={styles.hero__badge__dot} aria-hidden="true"/>
                        <span className={styles.hero__badge__dot} aria-hidden="true"/>
                        <span className={styles.hero__badge__dot} aria-hidden="true"/>
                      </span>
                    ) : (
                      "· · · ·"
                    )
                  ) : (
                    siteConfig.tagline
                  )}
                </span>
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
            </div>
          </div>
        </div>
      </div>
      {isContactModalOpen && (
        <div
          className={styles.hero__contactModal}
          role="dialog"
          aria-modal="true"
          aria-label="Contact details"
          onClick={() => setIsContactModalOpen(false)}
        >
          <div
            className={styles.hero__contactModal__content}
            onClick={(event) => event.stopPropagation()}
          >
            <h3 className={styles.hero__contactModal__title}>Contact me</h3>
            <a className={styles.hero__contactModal__link} href={emailLink}>
              <span className={styles.hero__contactModal__linkLabel}>Email:</span>{" "}
              <span className={styles.hero__contactModal__linkValue}>{contactEmail}</span>
            </a>
            <a
              className={styles.hero__contactModal__link}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.hero__contactModal__linkLabel}>WhatsApp:</span>{" "}
              <span className={styles.hero__contactModal__linkValue}>wa.link/f3urw3</span>
            </a>
            <button
              type="button"
              className={styles.hero__contactModal__close}
              onClick={() => setIsContactModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
