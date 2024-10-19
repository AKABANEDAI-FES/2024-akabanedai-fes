import encount from "@/assets/encount.png";
import Image from "next/image";
import styles from "./encount.module.css";

export function Encount() {
	return (
		<div className={styles.encount}>
			<Image
				src={encount}
				alt=""
				width={encount.width}
				height={encount.height}
				loading="eager"
				priority={true}
				className={styles.image}
			/>
			<div className={styles.textWrapper}>
				<h2 className={styles.title}>ENCOUNT!</h2>
				<p className={styles.description}>
					「ENCOUNT!」は今年の赤羽台祭のテーマである「挑戦」から着想を得ており、新しい技術(未知)への挑戦をイメージしたテーマです。ENCOUNTは遭遇、出会いという意味を持つ和製ゲーム用語であり、挑戦というフレーズから連想したRPGの要素を取り入れています。また昨年の「ENchant!」に寄せた名称は、前年からの飛躍を象徴する意味も込められています。
				</p>
			</div>
		</div>
	);
}
