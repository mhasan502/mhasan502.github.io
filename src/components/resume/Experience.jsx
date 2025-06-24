import Heading from "@theme/Heading";
import styles from "@site/src/css/resume.module.css";
import {useColorMode} from "@docusaurus/theme-common";
import {IoBriefcaseOutline} from "react-icons/io5";

const experiences = [
  {
    title: "AI Engineer",
    period: "January 2025 – Present",
    companyLine: "AI Team, Projsite",
    adviserLine: "",
    details: [
      "Designed and deployed AI Agent integrated with NoSQL databases to enable real-time, context-aware user interactions.",
      "Analyzed consumer-level behavioral and interaction data to extract actionable insights and continuously improve AI-driven product functionalities.",
      "Built and maintained robust MLOps pipelines for automated model retraining, versioning, and continuous delivery to ensure high-availability and performance of deployed models.",
      "Collaborated with cross-functional remote teams to identify and execute data-driven optimization opportunities.",
      "Developed scalable, production-grade machine learning infrastructure for seamless integration of AI features across Projsite’s core products and services.",
    ],
  },
  {
    title: "Artificial Intelligence Engineer",
    period: "May 2024 - January 2025",
    companyLine: "Acote AI Innovation Hub,  Acote Group",
    adviserLine: "Adviser: Dr. Mark Kim",
    details: [
      "Developed an Object Detection model, successfully resolving significant accuracy challenges faced by the previous model in real-world scenarios.",
      "Engineered an automated ETL pipeline using Apache Airflow, streamlining data migration from model outputs to the software backend, significantly improving data accessibility and operational efficiency.",
      "Developed a Temporal Tracking-based automated data collection platform, leveraging CCTV footage to reduce manual effort and optimize data collection.",
    ],
  },
  {
    title: "Machine Learning Engineer - Data Engineering & Deployment",
    period: "May 2024 - May 2025",
    companyLine: "Team Helios, AlterSense Limited",
    adviserLine: "Adviser: Dr. Nabeel Mohammed",
    details: [
      "Architected a real-time ML pipeline to ingest high-throughput camera streams (1.1 GB/s) and stream data into Apache Kafka for scalable processing.",
      "Developed core data ingestion modules in C++, utilizing advanced concurrency techniques (mutexes, condition variables, thread pools) for thread-safe, high-performance streaming.",
      "Designed and deployed a data warehouse solution to store both raw and processed data, facilitating real-time analytics and scheduled batch inference.",
      "Implemented scheduled inference workflows that retrieved data from the warehouse for deeper analysis, ensuring temporal consistency and model robustness.",
      "Built a horizontally and vertically scalable distributed system, ensuring high availability, fault tolerance, and consistent performance under sustained load.",
      "Prioritized architectural principles of scalability, maintainability, and reliability to support ongoing high-load operations and ensure seamless deployments."
    ],
  },
  {
    title: "Junior Machine Learning Engineer",
    period: "January 2023 – April 2024",
    companyLine: "Team Helios, AlterSense Limited",
    adviserLine: "Adviser: Dr. Nabeel Mohammed",
    details: [
      "Optimized multiple surveillance vision models, reducing GPU memory overhead by 10× through performance profiling with NVIDIA Nsight Compute.",
      "Delivered a robust object detection model in noisy environments, achieving an F1 Score of 0.722 by effectively addressing data imbalance challenges.",
      "Employed TensorRT framework to decrease GPU VRAM usage by 30 % and inference speed by 1.7×, enabling deployment on low-spec hardware.",
      "Developed and deployed an end-to-end real-time vision inference pipeline for local servers, utilizing distributed computing platforms for enhanced performance.",
      "Engineered algorithms to automate a couple of manual software workflows on deployed machine learning models, boosting performance and scalability by 25 %.",
      "Provided mentorship and strategic guidance to a junior team member, leading to the successful development of a new feature for an existing product.",
    ],
  },
  {
    title: "Software Development Associate",
    period: "June 2021 - December 2021",
    companyLine: "Department of Electrical and Computer Engineering,  North South University",
    adviserLine: "Supervised by:  Dr. Mohammad Rashedur Rahman,  Mirza Mohammad Lutfe Elahi, and  Silvia Ahmed",
    details: [
      "Delivered a high-performance website for the ICCIT 2021 Conference, exceeding 30,000+ traffic, and received positive feedback from attendees.",
      "Conducted a livelihood vulnerability assessment solution for 10,000+ people for post-disaster environment, enabling targeted relief distribution.",
      "Migrated a legacy PHP project to Django, driving a 20% performance gain and unlocking future scalability.",
      "Developed and deployed an Android app for precise data collection, reducing errors by 10% and optimizing field operations.",
    ],
  },
  {
    title: "Undergraduate Teaching Assistant",
    period: "June 2022 - September 2022",
    companyLine: "Department of Electrical and Computer Engineering,  North South University",
    adviserLine: "Worked and collaborated with  Dr. Nabeel Mohammed,  Dr. Sarker Tanveer Ahmed Rumee, and  Sarnali Basak",
    details: [
      "Conducted tutorial sessions for students needing extra help outside of class hours.",
      "Graded home-works and assignments.",
      "Stayed informed about test dates, times, and other course-related deadlines.",
      "Maintained 04 hours per week per section divided among the assisting faculty members for student consultation.",
      "Assisted faculty members in their course-related work except for grading quiz/exam papers.",
    ],
  },
];

function ExperienceTimelineContent() {
  const {colorMode} = useColorMode();
  const dateBackgroundColor = colorMode === "dark" ? "#616161" : "#F1F3F5";

  return (
    <div className={styles.timeline__parent}>
      {experiences.map((exp, idx) => (
        <div className={styles.timeline__item} key={idx}>
          <div className={styles.timeline__separator}>
            <div className={styles.timeline__dot}/>
            {idx < experiences.length - 1 && (
              <div className={styles.timeline__connector}/>
            )}
          </div>

          <div className={styles.timeline__content}>
            <div className={styles.timeline__action}>
              <p className={styles.timeline__action__title}>{exp.title}</p>
              <span className={styles.timeline__action__period} style={{backgroundColor: dateBackgroundColor}}>
                {exp.period}
              </span>
            </div>

            <p className={styles.timeline__organization}>{exp.companyLine}</p>
            {exp.adviserLine && (
              <p className={styles.timeline__organization__subline}>
                {exp.adviserLine}
              </p>
            )}

            <ul className={styles.timeline__bullet__list}>
              {exp.details.map((point, i) => (
                <li key={i} className={styles.timeline__bullet__list__items}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <div className="container">
      <div className={styles.center__container}>
        <IoBriefcaseOutline size="24"/>
        <Heading as="h3">
          Experience
        </Heading>
      </div>
      <ExperienceTimelineContent/>
    </div>
  );
}
