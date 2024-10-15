import type { Program } from "@/types/program";
import Link from "next/link";
import styles from "./program-tag.module.css";

export type Props = {
	tag: Program["tags"][number];
	size?: "sm" | "md";
	href?: string;
	pressed?: boolean;
};

export function ProgramTag({ tag, size, href, pressed }: Props) {
	return (
		<Link
			href={href ?? `/topic/${tag}`}
			data-size={size ?? "md"}
			aria-pressed={pressed}
			className={styles["program-tag"]}
		>
			{tag}
		</Link>
	);
}
