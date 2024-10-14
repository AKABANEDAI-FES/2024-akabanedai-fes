import { AdmissionInfo } from "@/components/site/admissionInfo";
import { Guidelines } from "@/components/site/guidelines";
import { HelpAndSupport } from "@/components/site/help-and-support";
import styles from "./guest-guide.module.css";

function Summary() {
	return (
		<ul className={styles.list}>
			<li className={styles.listItem}>
				<a href="#admissionInfo" className={styles.link}>
					入退場について
				</a>
			</li>
			<li className={styles.listItem}>
				<a href="#guidelines" className={styles.link}>
					キャンパス内での注意事項
				</a>
			</li>
			<li className={styles.listItem}>
				<a href="#helpAndSupport" className={styles.link}>
					困ったことがあったら
				</a>
			</li>
		</ul>
	);
}

export default function Page() {
	return (
		<>
			<h1 className={styles.title}>ご来場の皆様へ</h1>
			<div className={styles.content}>
				<div className={styles.request}>
					<p className={styles.requestItem}>
						赤羽台祭へご来場の方は、以下の注意事項をお守りくださいますようお願いいたします。
					</p>
					<p className={styles.requestItem}>
						※掲載内容は順次更新いたしますので最新情報を必ずご確認の上、ご参加ください。
					</p>
				</div>
			</div>
			<Summary />
			<div id="admissionInfo" className={styles.linkScroll}>
				<AdmissionInfo />
			</div>
			<div id="guidelines" className={styles.linkScroll}>
				<Guidelines />
			</div>
			<div id="helpAndSupport" className={styles.linkScroll}>
				<HelpAndSupport />
			</div>
		</>
	);
}
