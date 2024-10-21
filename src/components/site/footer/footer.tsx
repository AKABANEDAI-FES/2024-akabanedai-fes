import { InstagramBrandIcon } from "@/components/icons/instagram-brand";
import { XBrandIcon } from "@/components/icons/x-brand";
import Link from "next/link";
import styles from "./footer.module.css";

const navigation = [
	{
		title: "赤羽台祭とは",
		href: "/about",
	},
	{
		title: "企画一覧",
		href: "/programs",
	},
	{
		title: "タイムテーブル",
		href: undefined,
	},
	{
		title: "公式グッズ販売",
		href: "/official-merch",
	},
	{
		title: "企画コンテスト",
		href: undefined,
	},
	{
		title: "ご来場の皆様へ",
		href: "/guest-guide",
	},
];

export function Footer() {
	return (
		<footer className={styles.footer}>
			<nav className={styles.sitemap}>
				<Link href="/" className={styles.top}>
					第八回 赤羽台祭
				</Link>
				<ul className={styles.links}>
					{navigation.map(({ title, href }) => (
						<li key={title}>
							{href ? (
								<Link href={href}>{title}</Link>
							) : (
								<span className={styles.disabled}>{title}</span>
							)}
						</li>
					))}
				</ul>
			</nav>
			<div className={styles.contact}>
				<p className={styles.email}>
					<span>お問い合わせ先</span>
					<span>support[at]akabanedai-fes.com</span>
				</p>
				<div className={styles.sns}>
					<a
						href="https://x.com/akabanedaifes/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<XBrandIcon className={styles.icon} />
					</a>
					<a
						href="https://www.instagram.com/akabanedaifes/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<InstagramBrandIcon className={styles.icon} />
					</a>
				</div>
				<Link href="/privacy-policy">プライバシーポリシー</Link>
			</div>
			<p>&copy;2024 赤羽台祭実行委員会</p>
		</footer>
	);
}
