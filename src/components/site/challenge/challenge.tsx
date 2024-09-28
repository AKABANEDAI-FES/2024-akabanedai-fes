import { Section } from "../section";
import styles from "./challenge.module.css";

export function Challenge() {
	return (
		<Section>
			<div className={styles.challenge}>
				<h2 className={styles.heading}>挑戦</h2>
				<p className={styles.paragraph}>
					あのイーハトーヴォの すきとおった風、
				</p>
				<p className={styles.paragraph}>夏でも底に冷たさをもつ青いそら、</p>
				<p className={styles.paragraph}>うつくしい森で飾られたモリーオ市、</p>
				<p className={styles.paragraph}>郊外のぎらぎらひかる草の波。</p>
			</div>
		</Section>
	);
}
