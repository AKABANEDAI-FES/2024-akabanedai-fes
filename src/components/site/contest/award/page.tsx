import styles from "../contest.module.css";

export function Award() {
	return (
		<div className={styles.pageall}>
			<h2 className={styles.heading}>表彰企画</h2>
			<p className={styles.p}>
				以下のように部門に分けて表彰します。
				<br />
				<br />
				<strong className={styles.strong}>グランプリ</strong>
				<br />
				<span className={styles["p-award"]}>
					赤羽台祭に参加する、大学生主体のすべての企画の中から、1位、2位、3位を決定します。
				</span>
				<br />
				<strong className={styles.strong}>チーム実習部門</strong>
				<br />
				<span className={styles["p-award"]}>
					INIAD学部3年生による「情報連携チーム実習」の団体企画を対象とした部門です。
				</span>
				<br />
				<strong className={styles.strong}>実行委員会部門</strong>
				<br />
				<span className={styles["p-award"]}>
					「赤羽台祭実行委員会」に所属する団体の企画を対象とした部門です。
				</span>
				<br />
				<strong className={styles.strong}>研究室・ゼミ部門</strong>
				<br />
				<span className={styles["p-award"]}>
					「ゼミ」または「研究室」に所属する団体の企画を対象とした部門です。
				</span>
				<br />
				<strong className={styles.strong}>サークル部門</strong>
				<br />
				<span className={styles["p-award"]}>
					「サークル」やその他の学生団体による企画を対象とした部門です。
				</span>
			</p>
		</div>
	);
}
