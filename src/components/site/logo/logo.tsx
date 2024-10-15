import Image from "next/image";
import { Section } from "../section";
import styles from "./logo.module.css";

export function Logo() {
	return (
		<Section className={styles.logo}>
			<Image
				src="/pwa-512x512.png"
				alt=""
				width={400}
				height={400}
				className={styles.image}
			/>
			<h2 className={styles.title}>
				<span>今年のロゴ</span>
				<span>「鯉の滝登り」</span>
			</h2>
			<div className={styles.content}>
				<p>
					ロゴはテーマである挑戦からイメージした、鯉の滝登りがモチーフになっています。炎のように燃え盛る鯉には、赤羽台祭が炎のように盛り上がり続け、消えないで欲しいという思いが込められています。
				</p>
			</div>
		</Section>
	);
}
