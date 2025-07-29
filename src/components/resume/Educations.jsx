import Heading from "@theme/Heading";
import styles from "@site/src/css/resume.module.css";
import {useColorMode} from "@docusaurus/theme-common";
import {IoSchoolOutline} from "react-icons/io5";

const educationsData = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    period: "Spring 2018 - Summer 2022",
    institution: "Department of Electrical and Computer Engineering, North South University",
    details: [
      "CGPA: 3.77 / 4.00 (90-92% marks)",
      "Graduated with Magna Cum Laude.",
      "Thesis Title: Inter-Dataset Critical Evaluation of Common Object Detection Model.",
      "Achieved 2nd Runner Up position in Electrathon 2018 organized by IEEE NSU."
    ]
  }
]

function EducationTimelineContent() {
  const {colorMode} = useColorMode();
  const dateBackgroundColor = colorMode === "dark" ? "#616161" : "#F1F3F5";

  return (
    <div className={styles.timeline__parent}>
      {educationsData.map((edu, idx) => (
        <div className={styles.timeline__item} key={idx}>
          <div className={styles.timeline__content}>
            <div className={styles.timeline__action}>
              <Heading as="h3" className={styles.timeline__action__title}>{edu.degree}</Heading>
              <span className={styles.timeline__action__period} style={{backgroundColor: dateBackgroundColor}}>
                {edu.period}
              </span>
            </div>
            <p className={styles.timeline__organization}>{edu.institution}</p>
            <ul className={styles.timeline__bullet__list}>
              {edu.details.map((detail, j) => (
                <li key={j} className={styles.timeline__bullet__list__items}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Educations() {
  return (
    <div className="container">
      <div className={styles.center__container}>
        <IoSchoolOutline size="24"/>
        <Heading as="h3">
          Educations
        </Heading>
      </div>
      <EducationTimelineContent/>
    </div>
  );
}
