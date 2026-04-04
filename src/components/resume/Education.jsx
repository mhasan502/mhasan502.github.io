import styles from "@site/src/css/resume.module.css";
import {IoSchoolOutline} from "react-icons/io5";
import SectionHeader from "./common/SectionHeader";
import BulletList from "./common/BulletList";

const educationData = [
  {
    id: "nsu-bsc-cse",
    degree: "Bachelor of Science in Computer Science and Engineering",
    period: "Spring 2018 - Summer 2022",
    institution:
      "Department of Electrical and Computer Engineering, North South University",
    details: [
      "CGPA: 3.77 / 4.00 (90-92% marks)",
      "Graduated with Magna Cum Laude.",
      "Thesis Title: Inter-Dataset Critical Evaluation of Common Object Detection Model.",
      "Achieved 2nd Runner Up position in Electrathon 2018 organized by IEEE NSU.",
    ],
  },
];


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
            <BulletList items={edu.details}/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Education() {
  return (
    <div id="education" className="container">
      <SectionHeader icon={IoSchoolOutline} title="Education"/>
      <EducationTimelineContent/>
    </div>
  );
}
