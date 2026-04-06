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

function EducationItem({edu}) {
  return (
    <article className={styles.experienceTimeline__card}>
      <div className={styles.experienceTimeline__header}>
        <h3 className={styles.experienceTimeline__title}>{edu.degree}</h3>
        <span className={styles.experienceTimeline__period}>{edu.period}</span>
      </div>
      <p className={styles.experienceTimeline__subline}>{edu.institution}</p>
      <div>
        <BulletList items={edu.details} itemClassName={styles.experienceTimeline__bullet__item}/>
      </div>
    </article>
  );
}

function EducationTimelineContent() {
  return (
    <div className={styles.educationTimeline__list}>
      {educationData.map((edu) => (
        <EducationItem key={edu.id} edu={edu}/>
      ))}
    </div>
  );
}

export default function Education() {
  return (
    <div id="education" className="container">
      <SectionHeader icon={IoSchoolOutline} title="Education" iconSize={28}/>
      <EducationTimelineContent/>
    </div>
  );
}
