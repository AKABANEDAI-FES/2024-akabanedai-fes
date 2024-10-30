import styles from "../contest.module.css";

export function AboutContest() {
	return (
		<div className={styles.pageall}>
			<h2 className={styles.heading}>企画コンテストとは</h2>
			<p className={styles.p}>
				大学生主体の企画を対象にして、ご来場いただいた皆様の投票によって魅力度の高い企画を決定する大学祭実行委員会公式企画になります。
			</p>
		</div>
	);
}
