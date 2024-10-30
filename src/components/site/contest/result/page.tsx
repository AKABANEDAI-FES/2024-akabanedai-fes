import styles from "../contest.module.css";

export function Result() {
	return (
		<div className={styles.pageall}>
			<h2 className={styles.heading}>結果発表</h2>
			<p className={styles.p}>
				表彰式は 11月3日 17:30
				より、WELLBメインステージにて行います。さらに、表彰された企画はこちらの特設ページでも掲載いたします。ぜひご確認ください。
			</p>
			<br />
			<p className={styles.p}>
				さらに、表彰された企画は こちらの特設ページ
				でも掲載いたします。ぜひご確認ください。
			</p>
		</div>
	);
}
