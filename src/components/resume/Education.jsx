import styles from "@site/src/css/resume.module.css";
import {IoSchoolOutline} from "react-icons/io5";
import { educationData } from "./data/educationData";
import SectionHeader from "./common/SectionHeader";
import BulletList from "./common/BulletList";

function EducationTimelineContent() {
  return (
      <div className={styles.timeline__parent}>
      {educationData.map((edu) => (
        <div className={styles.timeline__item} key={edu.id}>
          <div className={styles.timeline__content}>
            <div className={styles.timeline__action}>
              <h3 className={styles.timeline__action__title}>{edu.degree}</h3>
              <span className={styles.timeline__action__period}>
                {edu.period}
              </span>
            </div>
            <p className={styles.timeline__organization}>{edu.institution}</p>
            <BulletList items={edu.details} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Education() {
  return (
    <div id="education" className="container">
      <SectionHeader icon={IoSchoolOutline} title="Education" />
      <EducationTimelineContent/>
    </div>
  );
}
