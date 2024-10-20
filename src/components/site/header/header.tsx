"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { Drawer } from "./drawer";
import styles from "./header.module.css";

const navigation = [
	{
		title: "赤羽台祭とは",
		href: undefined,
	},
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
		href: "/official-merch",
	},
	{
		title: "ご来場の皆様へ",
		href: "/guest-guide",
	},
] as const;

export function Header() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	const handleOpenToggle = useCallback(() => {
		setOpen((prev) => !prev);
	}, []);

	const site = "第八回 赤羽台祭";
	return (
		<header className={styles.header}>
			{pathname === "/" ? (
				<h1 className={styles.logo}>{site}</h1>
			) : (
				<Link className={styles.logo} href="/" aria-label={site}>
					{site}
				</Link>
			)}
			<nav>
				<ul className={styles.nav}>
					{navigation.map(({ title, href }) => (
						<li key={title}>
							{href ? (
								<Link
									href={href}
									aria-current={href === pathname ? "page" : undefined}
								>
									{title}
								</Link>
							) : (
								<span className={styles.disabled}>{title}</span>
							)}
						</li>
					))}
				</ul>
			</nav>
			<Drawer open={open} onOpenToggle={handleOpenToggle}>
				<ul className={styles.drawer}>
					{navigation.map(({ title, href }) => (
						<li key={title}>
							{href ? (
								<Link
									href={href}
									aria-current={href === pathname ? "page" : undefined}
									onClick={handleOpenToggle}
								>
									{title}
								</Link>
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
