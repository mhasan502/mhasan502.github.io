import Heading from "@theme/Heading";
import styles from "@site/src/css/resume.module.css";
import {IoBriefcaseOutline} from "react-icons/io5";

const experiences = [{
  title: "AI Engineer",
  period: "January 2025 – Present",
  company: "Projsite",
  address: "Stockholm, Sweden",
  companylink: "https://projsite.com/en",
  employmentType: "Full-time",
  adviserLine: "",
  details: [
    "Designed and deployed AI Agent integrated with NoSQL databases to enable real-time, context-aware user interactions.",
    "Analyzed consumer-level behavioral and interaction data to extract actionable insights and continuously improve AI-driven product functionalities.",
    "Built and maintained robust MLOps pipelines for automated model retraining, versioning, and continuous delivery to ensure high-availability and performance of deployed models.",
    "Collaborated with cross-functional remote teams to identify and execute data-driven optimization opportunities.",
    "Developed scalable, production-grade machine learning infrastructure for seamless integration of AI features across Projsite's core products and services.",
  ],
}, {
  title: "Machine Learning Engineer",
  period: "January 2023 – December 2024",
  company: "AlterSense Limited",
  address: "Dhaka, Bangladesh",
  companylink: "https://www.altersense.com/",
  employmentType: "Full-time",
  adviserLine: "Adviser: Dr. Nabeel Mohammed",
  details: [
    "Architected and deployed a real-time ML pipeline processing ~1.1 GB/s of camera streams, integrating Apache Kafka for scalable distributed inference.",
    "Delivered a robust object detection model in noisy environments, achieving an F1 score of 0.722 by addressing data imbalance challenges.",
    "Optimized inference pipelines using TensorRT and NVIDIA Nsight, reducing GPU memory usage by 30% and increasing throughput by 1.7x.",
    "Developed high-performance C++ ingestion modules using concurrency primitives (thread pools, mutexes, condition variables) for efficient streaming.",
    "Built end-to-end data infrastructure (Airflow + data warehouse) to support automated ETL, real-time analytics, and scheduled batch inference.",
    "Designed and scaled a CCTV-based data collection platform, reducing manual effort and improving data acquisition efficiency.",
    "Developed a Temporal Tracking-based automated data collection platform, leveraging CCTV footage to reduce manual effort and optimize data collection.",
  ],
}, {
  title: "Software Development Associate",
  academic: true,
  period: "June 2021 - December 2021",
  company: "ECE Dept, North South University",
  address: "Dhaka, Bangladesh",
  companylink: "https://ece.northsouth.edu/",
  employmentType: "Contract",
  adviserLine: "Supervised by:  Dr. Mohammad Rashedur Rahman,  Mirza Mohammad Lutfe Elahi, and  Silvia Ahmed",
  details: ["Delivered a high-performance website for the ICCIT 2021 Conference, exceeding 30,000+ traffic, and received positive feedback from attendees.", "Conducted a livelihood vulnerability assessment solution for 10,000+ people for post-disaster environment, enabling targeted relief distribution.", "Migrated a legacy PHP project to Django, driving a 20% performance gain and unlocking future scalability.", "Developed and deployed an Android app for precise data collection, reducing errors by 10% and optimizing field operations.",],
}, {
  title: "Undergraduate Teaching Assistant",
  academic: true,
  period: "June 2022 - September 2022",
  company: "ECE Dept, North South University",
  address: "Dhaka, Bangladesh",
  companylink: "https://ece.northsouth.edu/",
  employmentType: "Contract",
  adviserLine: "Worked and collaborated with  Dr. Nabeel Mohammed,  Dr. Sarker Tanveer Ahmed Rumee, and  Sarnali Basak",
  details: ["Conducted tutorial sessions for students needing extra help outside of class hours.", "Graded home-works and assignments.", "Stayed informed about test dates, times, and other course-related deadlines.", "Maintained 04 hours per week per section divided among the assisting faculty members for student consultation.", "Assisted faculty members in their course-related work except for grading quiz/exam papers.",],
},];

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
            {exp.employmentType} · <a href={exp.companylink} target="_blank" rel="noopener noreferrer">{exp.company}</a>
          </p>
          <p className={styles.timeline__organization__subline}>{exp.address}</p>
          {exp.adviserLine && (<p className={styles.timeline__organization__subline}> {exp.adviserLine} </p>)}
        </div>
      </div>

      <div
        className={`${styles.timeline__details__wrapper} ${styles.open}`}
        style={{maxHeight: "1000px"}}
      >
        <ul className={styles.timeline__bullet__list}>
          {exp.details.map((point, i) => (<li
            key={i}
            className={`${styles.timeline__bullet__list__items} ${styles.timeline__bullet__list__items__animated} ${styles.visible}`}
          >
            {point}
          </li>))}
        </ul>
      </div>
    </div>
  </div>);
}

function ExperienceTimelineContent() {
  const visibleExperiences = experiences.filter((exp) => !exp.academic);

  return (<div className={styles.timeline__parent}>
    {visibleExperiences.map((exp, idx) => (<ExperienceItem
      key={idx}
      exp={exp}
      isLast={idx === visibleExperiences.length - 1}
    />))}
  </div>);
}

export default function Experience() {
  return (<div id="experience" className="container">
    <div className={styles.center__container}>
      <IoBriefcaseOutline size="28"/>
      <Heading as="h2">
        Experience
      </Heading>
    </div>
    <ExperienceTimelineContent/>
  </div>);
}
