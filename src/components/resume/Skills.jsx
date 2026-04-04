import {VscTools} from "react-icons/vsc";
import styles from "@site/src/css/resume.module.css";
import SectionHeader from "./common/SectionHeader";

export const skillsData = [
  {
    id: "languages_frameworks",
    label: "Languages & Frameworks",
    value: "Python, C++, PyTorch, FastAPI"
  },
  {
    id: "data_infrastructure",
    label: "Data & Infrastructure",
    value: "MongoDB, Docker, Redis, Apache Kafka, Airflow"
  },
  {
    id: "systems_engineering",
    label: "Systems Engineering",
    value: "Distributed pipelines, Stream processing, Concurrency, ETL orchestration, Event-driven systems"
  },
  {
    id: "specializations",
    label: "Specializations",
    value: "AI agents, LLM applications, Real-time and scheduled vision inference, Vision system optimization"
  },
];


export default function Skills() {
  return (
    <div id="skills" className="container">
      <SectionHeader icon={VscTools} title="Skills"/>
      <ul>
        {skillsData.map((item) => (
          <li key={item.id} className={styles.skills__list__item}>
            <strong>{item.label}:</strong> {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
