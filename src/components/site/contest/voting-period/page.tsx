import styles from "../contest.module.css";
("../contest.module.css");

export function VotingPeriod() {
	return (
		<div className={styles.pageall}>
			<h2 className={styles.heading}>投票期間</h2>
			<p className={styles.p}>
				赤羽台祭の期間中、キャンパス内に設置されている投票所で投票できます。
				<br />
				<br />
				<span className={styles["p-date2"]}>
					<time dateTime="2024-11-02T12:00">11月2日 12:00</time> ~
					<time dateTime="2024-11-02T18:00">18:00</time>
				</span>
				<br />
				<span className={styles["p-date2"]}>
					<time dateTime="2024-11-03T12:00">11月3日 12:00</time> ~
					<time dateTime="2024-11-03T15:00">15:00</time>
				</span>
				<br />
				<br />※ スケジュールは都合により一部変更になる可能性があります。
			</p>
		</div>
	);
}
