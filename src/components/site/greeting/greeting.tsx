import styles from "./greeting.module.css";

export function Greeting() {
	return (
		<div className={styles.greeting}>
			<h1 className={styles.title}>委員長挨拶</h1>
			<section className={styles.textWrapper}>
				<h2 className={styles.subtitle}>
					INIAD部門 <span className={styles.position}>委員長</span>
				</h2>
				<h3 className={styles.name}>坂本 海晴</h3>
				<p className={styles.description}>
					第8回赤羽台祭Webサイトをご覧いただきありがとうございます。
					<br />
					「挑戦」 この言葉から何を思い浮かべますか？
					日常の些細なことから、一世一代の大きな挑戦まで、その形は人それぞれです。
					赤羽台祭ではそうした「挑戦」をテーマに、来場された皆さんにも新しいことに挑戦できるような企画を準備しています。
					<br />
					皆さんとお会いできることを楽しみにしています。
				</p>
				<h2 className={styles.subtitle}>
					WELLB &
					<br />
					HELSPO部門 <span className={styles.position}>委員長</span>
				</h2>
				<h3 className={styles.name}>内田 雄一朗</h3>
				<p className={styles.description}>
					今年度の大学祭は「挑戦」という言葉をテーマに掲げ、過去最大規模の大学祭実施に「挑戦」するために準備を進めてきました。
					<br />
					実際にはスタッフの数から企画数、そして新しい企画の規模は過去最大級だと言っても過言ではありません。
					<br />
					大学祭当日はスタッフをはじめ、来場してくださる皆様と共に赤羽台祭を盛り上げていければと思います！
				</p>
			</section>
		</div>
	);
}
