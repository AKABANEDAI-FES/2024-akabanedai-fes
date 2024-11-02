import styles from "./questionnaire.module.css";

export function Questionnaire() {
	return (
		<div className={styles.questionnaire}>
			<a
				href="https://forms.gle/y6nZgMDspT3LUAua6"
				target="_blank"
				rel="noopener noreferrer"
			>
				来場者アンケートへのご協力をお願いします。
			</a>
		</div>
	);
}
