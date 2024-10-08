import { Section } from "../section";
import styles from "./guide.module.css";
import { Heading } from "../heading";

export type Props = {
	headingText: string;
  listItem: string[];
  
};

export function Guide({ headingText,listItem}:Props) {
  return (
    <Section className={styles.section}>
      <div className={styles.admmissionInfo}>
        <Heading className={styles.heading}>{headingText}</Heading>

        <ul className={styles.list}>
          {listItem.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}