import styles from "./questionnaire.module.css";

export function Questionnaire() {
	return (
		<div className={styles.questionnaire}>
			<p className={styles.close}>
				<span className={styles.thanks}>
					すべてのプログラムが終了いたしました。
				</span>
				<span className={styles.thanks}>ご来場ありがとうございました。</span>
			</p>
		</div>
	);
}
