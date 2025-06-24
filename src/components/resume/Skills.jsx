import Heading from "@theme/Heading";
import styles from "@site/src/css/resume.module.css";
import {VscTools} from "react-icons/vsc";

const skillData = [
  {label: "Programming Languages", value: "Python, C++, Java"},
  {label: "AI Libraries", value: "PyTorch, Langchain, Sci-Kit Learn"},
  {label: "Data Engineering", value: "Apache Kafka, Apache Flink, Apache Airflow"},
  {label: "Databases", value: "MongoDB, Redis, MySQL"},
  {label: "Web", value: "FastAPI, Django"},
  {label: "Other", value: "Docker, Bash, RAG, ArcGIS"}
];

export default function Skills() {
  return (
    <div className="container">
      <div className={styles.center__container}>
        <VscTools size="24"/>
        <Heading as="h3"> Skills </Heading>
      </div>
      <ul>
        {skillData.map((item, index) => (
          <li key={index} className={styles.skills__list__item}>
            <strong>{item.label}:</strong> {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
