import akukey from "@/assets/akukey.png";
import ballpointPen from "@/assets/ballpoint_pen.jpg";
import clearFile from "@/assets/clear_file.png";
import goodsMap from "@/assets/goods-map.png";
import handTowel from "@/assets/hand_towel.png";
import postcard from "@/assets/postcard.png";
import { Merchandise } from "@/components/site/merchandise";
import Image from "next/image";
import styles from "../guest-guide/guest-guide.module.css";

export default function OfficialMerch() {
	return (
		<>
			<h1 className={styles.title}>公式グッズ販売</h1>
			<div className={styles.content}>
				<div className={styles.request}>
					<p className={styles.requestItem}>
						東洋大学川越キャンパスの50周年記念キャラクターと赤羽台祭キャラクターのコラボオリジナルグッズです。各キャンパスでしか手に入らない限定品となってます！！
					</p>
				</div>
				<div className={styles.description}>
					<Image
						src={goodsMap}
						alt=""
						width={goodsMap.width}
						height={goodsMap.height}
						loading="eager"
						priority={true}
						className={styles.map}
					/>
					<p>※公式グッズ販売はすべて対面となっております。</p>
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
