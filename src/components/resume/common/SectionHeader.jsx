import Heading from "@theme/Heading";
import styles from "@site/src/css/resume.module.css";

export default function SectionHeader({ icon: Icon, title, iconSize = 24 }) {
  return (
    <div className={styles.center__container}>
      <Icon size={iconSize} />
      <Heading as="h2"> {title} </Heading>
    </div>
  );
}
