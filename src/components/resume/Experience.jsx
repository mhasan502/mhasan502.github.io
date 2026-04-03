import styles from "@site/src/css/resume.module.css";
import {IoBriefcaseOutline} from "react-icons/io5";
import { experiencesData } from "./data/experiencesData";
import SectionHeader from "./common/SectionHeader";
import BulletList from "./common/BulletList";

function ExperienceItem({exp, isLast}) {
  return (<div className={styles.timeline__item}>
    <div className={styles.timeline__separator}>
      <div className={styles.timeline__dot}/>
      {!isLast && <div className={styles.timeline__connector}/>}
    </div>

    <div className={styles.timeline__content}>
      <div className={styles.timeline__header}>
        <div className={styles.timeline__header__content}>
          <div className={styles.timeline__action}>
            <p className={styles.timeline__action__title}>
              {exp.title}
            </p>
            <span
              className={styles.timeline__action__period}
            >
                {exp.period}
              </span>
          </div>

          <p className={styles.timeline__organization}>
            {exp.employmentType} · <a href={exp.companyLink} target="_blank" rel="noopener noreferrer">{exp.company}</a>
          </p>
          <p className={styles.timeline__organization__subline}>{exp.address}</p>
          {exp.adviserLine && (<p className={styles.timeline__organization__subline}> {exp.adviserLine} </p>)}
        </div>
      </div>

      <div className={`${styles.timeline__details__wrapper} ${styles.open}`}>
        <BulletList
          items={exp.details}
          itemClassName={`${styles.timeline__bullet__list__items__animated} ${styles.visible}`}
        />
      </div>
    </div>
  </div>);
}

function ExperienceTimelineContent() {
  const visibleExperiences = experiencesData.filter((exp) => !exp.academic);

  return (<div className={styles.timeline__parent}>
    {visibleExperiences.map((exp, idx) => (<ExperienceItem
      key={exp.id}
      exp={exp}
      isLast={idx === visibleExperiences.length - 1}
    />))}
  </div>);
}

export default function Experience() {
  return (<div id="experience" className="container">
    <SectionHeader icon={IoBriefcaseOutline} title="Experience" iconSize={28} />
    <ExperienceTimelineContent/>
  </div>);
}
