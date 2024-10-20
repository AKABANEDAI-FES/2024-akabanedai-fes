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
			<Merchandise />
			;
		</>
	);
}
