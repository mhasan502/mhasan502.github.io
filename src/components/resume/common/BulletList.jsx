import styles from "@site/src/css/resume.module.css";

export default function BulletList({ items, itemClassName = "" }) {
  const classNames = [styles.timeline__bullet__list__items, itemClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <ul className={styles.timeline__bullet__list}>
      {items.map((item, idx) => (
        <li key={`${item}-${idx}`} className={classNames}>
          {item}
        </li>
      ))}
    </ul>
  );
}
