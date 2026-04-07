import styles from "@site/src/css/resume.module.css";
import {IoBriefcaseOutline} from "react-icons/io5";
import {experiencesData} from "./data/experiencesData";
import SectionHeader from "./common/SectionHeader";
import BulletList from "./common/BulletList";

function ExperienceItem({exp, isLast}) {
  return (
    <div className={`${styles.timeline__item} ${styles.experienceTimeline__item}`}>
      <div className={`${styles.timeline__separator} ${styles.experienceTimeline__separator}`}>
        <div className={`${styles.timeline__dot} ${styles.experienceTimeline__dot}`}/>
        {!isLast && <div className={`${styles.timeline__connector} ${styles.experienceTimeline__connector}`}/>}
      </div>

      <div className={`${styles.timeline__content} ${styles.experienceTimeline__content}`}>
        <article className={styles.experienceTimeline__card}>
          <div className={styles.experienceTimeline__header}>
            <div className={styles.experienceTimeline__header__content}>
              <h3 className={styles.experienceTimeline__title}>{exp.title}</h3>
              <p className={styles.experienceTimeline__organization}>
                <a
                  href={exp.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.experienceTimeline__organization__link}
                >
                  {exp.company}
                </a>
                <span className={styles.experienceTimeline__employmentType}>{exp.employmentType}</span>
              </p>
              <p className={styles.experienceTimeline__subline}>{exp.address}</p>
              {exp.adviserLine && <p className={styles.experienceTimeline__subline}>{exp.adviserLine}</p>}
            </div>
            <span className={styles.experienceTimeline__period}>{exp.period}</span>
          </div>
          <BulletList
            items={exp.details}
            itemClassName={styles.experienceTimeline__bullet__item}
          />
        </article>
      </div>
    </div>
  );
}

function ExperienceTimelineContent() {
  const visibleExperiences = experiencesData.filter((exp) => !exp.academic);

  return (
    <div className={`${styles.timeline__parent}`}>
      {visibleExperiences.map((exp, idx) => (
        <ExperienceItem
          key={exp.id}
          exp={exp}
          isLast={idx === visibleExperiences.length - 1}
        />
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <div id="experience" className="container">
      <SectionHeader icon={IoBriefcaseOutline} title="Experience" iconSize={28}/>
      <ExperienceTimelineContent/>
    </div>
  );
}
