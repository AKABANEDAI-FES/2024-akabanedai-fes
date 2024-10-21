import { Merchandise } from "@/components/site/merchandise";
import styles from "../guest-guide/guest-guide.module.css";

export default function OfficialMerch() {
	return (
		<>
			<h1 className={styles.title}>公式グッズ販売</h1>
			<div className={styles.content}>
				<div className={styles.request}>
					<p className={styles.requestItem}>
						東洋大学川越キャンパスの大学祭実行委員会キャラクターと赤羽台祭キャラクターのコラボオリジナルグッズです。各キャンパスでしか手に入らない限定品となってます！！
					</p>
				</div>
			</div>
			<h1>この辺に地図</h1>
			<Merchandise
				title="クリアファイル"
				description=""
				smallText=""
				price="200"
				imgLink="./merchandise_preview/clear_file.jpg"
			/>
			<Merchandise
				title="ボールペン"
				description=""
				smallText=""
				price="200"
				imgLink="./merchandise_preview/ballpoint_pen.png"
			/>
			<Merchandise
				title="キーホルダー"
				description=""
				smallText=""
				price="300"
				imgLink="./merchandise_preview/akukey.png"
			/>
			<Merchandise
				title="イニャーハンドタオル"
				description=""
				smallText=""
				price="400"
				imgLink="./merchandise_preview/hand_towel.png"
			/>
			<Merchandise
				title="ポストカード"
				description=""
				smallText=""
				price="100"
				imgLink="./merchandise_preview/postcard.png"
			/>
		</>
	);
}
