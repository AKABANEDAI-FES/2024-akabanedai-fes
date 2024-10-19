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
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.1999361333562!2d139.71490256964935!3d35.78029518627614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018931934050759%3A0x239ff01917c6ae5a!2z5p2x5rSL5aSn5a2mIOaDheWgsemAo-aQuuWtpumDqCAoSU5JQUQgSFVCLTEp!5e0!3m2!1sja!2sjp!4v1727791565666!5m2!1sja!2sjp"
					allowFullScreen={true}
					width="100%"
					height="500"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
				<div className={styles.description}>
					<h3>住所</h3>
					<p>〒115-8650 東京都北区赤羽台1丁目7-11</p>
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
					<p>
						※駐車場のご用意はございません。また駐輪場は数に限りがございます。ご来場の際は、できる限り公共交通機関をご利用ください。
					</p>
				</div>
			</div>
		</Section>
	);
}
