import { Section } from "../section";
import styles from "./guide.module.css";


export type Props = {
	headingText:  React.ReactNode;
  listItem?: string[];
  children?: React.ReactNode;
};

export function Guide({ headingText,listItem,children}:Props) {
  return (
    <Section className={styles.section}>
      <div className={styles.guideInfo}>
        <h2 className={styles.heading}>{headingText}</h2>
        <div className={styles.contents}>
        <ul>
          {listItem&& listItem.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
        {children}
      </div>
      </div>
    </Section>
  );
}