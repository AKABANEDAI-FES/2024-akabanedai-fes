import Link from "next/link";
import { AdmissionInfo } from "@/components/site/admissionInfo";
import { Guidelines } from "@/components/site/guidelines";
import { Heading } from "@/components/site/heading";
import { HelpAndSupport } from "@/components/site/help-and-support";
import styles from "./guest-guide.module.css";

function Summary() {
	return (
		<ul className={styles.list}>
			<li className={styles.listItem}>
				<Link href="#addmissionInfo" className={styles.link}>入退場について</Link>
			</li>
			<li className={styles.listItem}>
				<Link href="#guidelines" className={styles.link}>キャンパス内での注意事項</Link>
			</li>
			<li className={styles.listItem}>
				<Link href="#helpAndSupport" className={styles.link}>困ったことがあったら</Link>
			</li>
		</ul>
	)
}



export default function Page() {
	return (
		<>
			<Heading>ご来場の皆様へ</Heading>
			<div className={styles.request}>
					<p className={styles.requestItem}>赤羽台祭へご来場の方は、以下の注意事項をお守りくださいますようお願いいたします。</p>
					<p className={styles.requestItem}>※掲載内容は順次更新いたしますので最新情報を必ずご確認の上、ご参加ください。</p>
			</div>
			<Summary />
			<div id="addmissionInfo" className={styles.linkScroll}>
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
