import type { Program } from "@/types/program";
import { Link } from "next-view-transitions";
import styles from "./program-tag.module.css";

export type Props = {
	tag: Program["tags"][number];
	size?: "sm" | "md";
	href?: string;
};

export function ProgramTag({ tag, size, href }: Props) {
	return (
		<Link
			href={href ?? `/topic/${tag}`}
			data-size={size ?? "md"}
			className={styles["program-tag"]}
		>
			{tag}
		</Link>
	);
}
