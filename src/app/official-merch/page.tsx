import akukey from "@/assets/akukey.png";
import ballpointPen from "@/assets/ballpoint_pen.jpg";
import clearFile from "@/assets/clear_file.png";
import handTowel from "@/assets/hand_towel.png";
import postcard from "@/assets/postcard.png";
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
			<Merchandise
				title="クリアファイル"
				description=""
				smallText=""
				price="200"
				image={clearFile}
			/>
			<Merchandise
				title="ボールペン"
				description=""
				smallText=""
				price="200"
				image={ballpointPen}
			/>
			<Merchandise
				title="キーホルダー"
				description=""
				smallText=""
				price="300"
				image={akukey}
			/>
			<Merchandise
				title="イニャーハンドタオル"
				description=""
				smallText=""
				price="400"
				image={handTowel}
			/>
			<Merchandise
				title="ポストカード"
				description=""
				smallText=""
				price="100"
				image={postcard}
			/>
		</>
	);
}
