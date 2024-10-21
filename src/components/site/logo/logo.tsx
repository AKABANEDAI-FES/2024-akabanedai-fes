import Image from "next/image";
import styles from "./logo.module.css";

export function Logo() {
	return (
		<div className={styles.logo}>
			<Image
				src="/apple-icon.png"
				alt=""
				width={800}
				height={600}
				className={styles.image}
			/>
			<div className={styles.textWrapper}>
				<h2 className={styles.title}>今年のロゴ「鯉の滝登り」</h2>
				<p className={styles.description}>
					ロゴはテーマである挑戦からイメージした、鯉の滝登りがモチーフになっています。炎のように燃え盛る鯉には、赤羽台祭が炎のように盛り上がり続け、消えないで欲しいという思いが込められています。
				</p>
			</div>
		</div>
	);
}
