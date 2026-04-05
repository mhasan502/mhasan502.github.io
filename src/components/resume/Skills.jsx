import {VscTools} from "react-icons/vsc";
import styles from "@site/src/css/resume.module.css";
import SectionHeader from "./common/SectionHeader";

export const skillsData = [
  {
    id: "core",
    label: "Core",
    items: ["Python", "C++", "PyTorch", "FastAPI"]
  },
  {
    id: "data_infra",
    label: "Data & Infra",
    items: ["MongoDB", "Docker", "Redis", "Kafka", "Airflow"]
  },
  {
    id: "systems",
    label: "Systems",
    items: ["Distributed Pipelines", "Concurrency", "ETL Orchestration", "Event-Driven Systems"]
  },
  {
    id: "specialization",
    label: "Specialization",
    items: ["AI Agents", "LLM Apps", "Real-Time Vision Inference", "Vision Optimization"]
  },
];


export default function Skills() {
  return (
    <section id="skills" className={`container ${styles.skillsMinimal}`}>
      <SectionHeader icon={VscTools} title="Skills"/>
      <div className={styles.skillsLinear}>
        {skillsData.map((item) => (
          <article key={item.id} className={styles.skillsLinear__row}>
            <h3 className={styles.skillsLinear__label}>{item.label}</h3>
            <div className={styles.skillsLinear__items}>
              {item.items.map((skill) => (
                <span key={`${item.id}-${skill}`} className={styles.skillsLinear__item}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
