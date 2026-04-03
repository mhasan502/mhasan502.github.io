import styles from "@site/src/css/resume.module.css";
import {RiDraftLine} from "react-icons/ri";
import { publicationsData } from "./data/publicationsData";
import SectionHeader from "./common/SectionHeader";
import BulletList from "./common/BulletList";

export default function Publications() {
  return (
    <div id="publications" className="container">
      <SectionHeader icon={RiDraftLine} title="Publications" />
      <ul className={styles.publication__main__list}>
        {publicationsData.map((pub) => (
          <li key={pub.id}>
            <p>
              {pub.authors.map((author, idx) => (
                <span key={author.name}>
                  {author.bold ? <strong>{author.name}*</strong> : author.name}
                  {idx < pub.authors.length - 1 && ", "}
                </span>
              ))}
              <br/>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener"
              >
                <strong>{`“${pub.title}”`}</strong>
              </a>
              <br/>
              {pub.journal}
            </p>
            <img
              className={styles.publication__img}
              src={pub.image.src}
              alt={pub.image.alt}
            />
            <BulletList items={pub.details} />
          </li>
        ))}
      </ul>
    </div>
  );
}
