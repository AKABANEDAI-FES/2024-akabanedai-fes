import styles from "./mascot.module.css";
import Image from "next/image";

export function Mascot() {
	return (
		<div className={styles.mascot}>
			<h1 className={styles.title}>マスコットキャラクター</h1>
			<h2 className={styles.name}>イニャー</h2>
			<Image
				src="inya.png"
				alt=""
				width={400}
				height={300}
				className={styles.image}
			/>
			<div className={styles.parent}>
				<div className={styles.explane}>
					<div className={styles.left}>所属</div>
					<div className={styles.right}>
						赤羽台祭実行委員会
						<br />
						INIAD部門
					</div>
				</div>
				<div className={styles.explane}>
					<p className={styles.left}>口癖</p>
					<p className={styles.right}>～ニャ、～だニャ</p>
				</div>
				<div className={styles.explane}>
					<p className={styles.left}>特技</p>
					<p className={styles.right}>ネットの速度を変えること</p>
				</div>
			</div>
			<h2 className={styles.name}>ウェリオン</h2>
			<Image
				src="ponde.png"
				alt=""
				width={400}
				height={300}
				className={styles.image}
			/>
			<div className={styles.parent}>
				<div className={styles.explane}>
					<p className={styles.left}>所属</p>
					<p className={styles.right}>
						赤羽台祭実行委員会
						<br />
						WELLB&HELSPO部門
					</p>
				</div>
				<div className={styles.explane}>
					<p className={styles.left}>鳴き声</p>
					<p className={styles.right}>ガウ</p>
				</div>
				<div className={styles.explane}>
					<p className={styles.left}>趣味</p>
					<p className={styles.right}>四つ葉のクローバー探し</p>
				</div>
			</div>
		</div>
	);
}
