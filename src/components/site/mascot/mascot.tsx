import inya from "@/assets/inya.png";
import wellion from "@/assets/wellion.png";
import Image from "next/image";
import styles from "./mascot.module.css";

export function Mascot() {
	return (
		<div className={styles.mascot}>
			<h2 className={styles.title}>
				<span>マスコット</span>
				<span>キャラクター</span>
			</h2>
			<h3 className={styles.name}>イニャー</h3>
			<Image
				src={inya}
				alt=""
				width={inya.width}
				height={inya.height}
				className={styles.image}
			/>
			<div className={styles.parent}>
				<div className={styles.explain}>
					<div className={styles.left}>所属</div>
					<div className={styles.right}>
						赤羽台祭実行委員会
						<br />
						INIAD部門
					</div>
				</div>
				<div className={styles.explain}>
					<p className={styles.left}>口癖</p>
					<p className={styles.right}>～ニャ、～だニャ</p>
				</div>
				<div className={styles.explain}>
					<p className={styles.left}>特技</p>
					<p className={styles.right}>ネットの速度を変えること</p>
				</div>
			</div>
			<h3 className={styles.name}>ウェリオン</h3>
			<Image
				src={wellion}
				alt=""
				width={wellion.width}
				height={wellion.height}
				className={styles.image}
			/>
			<div className={styles.parent}>
				<div className={styles.explain}>
					<p className={styles.left}>所属</p>
					<p className={styles.right}>
						赤羽台祭実行委員会
						<br />
						WELLB&HELSPO部門
					</p>
				</div>
				<div className={styles.explain}>
					<p className={styles.left}>鳴き声</p>
					<p className={styles.right}>ガウ</p>
				</div>
				<div className={styles.explain}>
					<p className={styles.left}>趣味</p>
					<p className={styles.right}>四つ葉のクローバー探し</p>
				</div>
			</div>
		</div>
	);
}
