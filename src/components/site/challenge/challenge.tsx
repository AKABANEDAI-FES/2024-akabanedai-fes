import { Section } from "../section";
import styles from "./challenge.module.css";

export function Challenge() {
	return (
		<Section>
			<div className={styles.challenge}>
				<h2 className={styles.heading}>挑戦</h2>
				<p className={styles.paragraph}>共に挑み、共に楽しむ</p>
			</div>
		</Section>
	);
}
