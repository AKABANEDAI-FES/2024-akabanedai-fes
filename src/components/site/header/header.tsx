"use client";

import { usePathname } from "next/navigation";
import { Drawer } from "./drawer";
import styles from "./header.module.css";

const navigation = [
	{
		title: "企画一覧",
		href: undefined,
	},
	{
		title: "タイムテーブル",
		href: undefined,
	},
	{
		title: "公式グッズ販売",
		href: undefined,
	},
	{
		title: "ご来場の皆様へ",
		href: undefined,
	},
] as const;

export function Header() {
	const pathname = usePathname();

	const site = "第八回 赤羽台祭";
	return (
		<header className={styles.header}>
			{pathname === "/" ? (
				<h1 className={styles.logo}>{site}</h1>
			) : (
				<a className={styles.logo} href="/" aria-label={site}>
					{site}
				</a>
			)}
			<nav>
				<ul className={styles.nav}>
					{navigation.map(({ title, href }) => (
						<li key={title}>
							{href ? (
								<a
									href={href}
									aria-current={href === pathname ? "page" : undefined}
								>
									{title}
								</a>
							) : (
								<span className={styles.disabled}>{title}</span>
							)}
						</li>
					))}
				</ul>
			</nav>
			<Drawer>
				<ul className={styles.drawer}>
					{navigation.map(({ title, href }) => (
						<li key={title}>
							{href ? (
								<a
									href={href}
									aria-current={href === pathname ? "page" : undefined}
								>
									{title}
								</a>
							) : (
								<span className={styles.disabled}>{title}</span>
							)}
						</li>
					))}
				</ul>
			</Drawer>
		</header>
	);
}
