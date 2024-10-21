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
				description="A4"
				smallText="(210mm ✕ 297mm)"
				price="500"
				imgLink="./merchandise/S__54583328_0.jpg"
			/>
			<Merchandise
				title="アクリルキーホルダー"
				description="40mm ✕ 40mm"
				smallText=""
				price="400"
				imgLink="./merchandise/akukey.png"
			/>
		</>
	);
}
