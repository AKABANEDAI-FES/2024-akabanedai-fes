import { Section } from "../section";
import styles from "./admissionInfo.module.css";
import "./admissionInfo.module.css"
import { Heading } from "../heading";

export function AdmissionInfo() {
  return (
    <Section className={styles.section}>
      <div className={styles.admmissionInfo}>
       <Heading className={styles.heading}>入場について</Heading>

        <ul className={styles.list}>
          <li className={styles.listItem}>事前予約やチケットは不要です</li>
          <li className={styles.listItem}>入場料は無料です。(※ 一部体験や飲食出店は有料です。)</li>
          <li className={styles.listItem}>駐車場はございませんので、お車でのご来場はご遠慮ください。</li>
        </ul>
      </div>
    </Section>
  )
}