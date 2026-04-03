import {VscTools} from "react-icons/vsc";
import { skillsData } from "./data/skillsData";
import styles from "@site/src/css/resume.module.css";
import SectionHeader from "./common/SectionHeader";

export default function Skills() {
  return (
    <div id="skills" className="container">
      <SectionHeader icon={VscTools} title="Skills" />
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
