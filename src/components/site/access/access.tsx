import { Heading } from "../heading";
import { Section } from "../section";
import styles from "./access.module.css";

export function Access() {
	return (
		<Section>
			<Heading>アクセス</Heading>
			<div className={styles.access}>
				<iframe
					title="アクセスマップ"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1618.4041245929607!2d139.71517829999996!3d35.780086299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018931933794e07%3A0x9eb0830bc8f97e90!2z44CSMTE1LTAwNTMg5p2x5Lqs6YO95YyX5Yy66LWk57695Y-w77yR5LiB55uu77yX!5e0!3m2!1sja!2sjp!4v1727509106297!5m2!1sja!2sjp"
					allowFullScreen={true}
					width="100%"
					height="500"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
				<div className={styles.description}>
					<h3>住所</h3>
					<p>〒115-0053 東京都北区赤羽台１丁目７</p>
					<h3>最寄り駅からのアクセス</h3>
					<ul>
						<li>JR赤羽駅西口 徒歩10分</li>
						<li>東京メトロ南北線 赤羽岩淵駅（出入口2）徒歩12分</li>
						<li>
							国際興業バス
							<br />
							「赤羽台三丁目」バス停 徒歩3分
							<br />
							「法善寺交番」 バス停 徒歩3分
						</li>
					</ul>
					<p>※ 駐車場はございませんので、お車でのご来場はご遠慮ください。</p>
				</div>
			</div>
		</Section>
	);
}
