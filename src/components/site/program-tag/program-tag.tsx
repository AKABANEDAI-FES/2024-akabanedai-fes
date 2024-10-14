import { Link } from "next-view-transitions";
import styles from "./program-tag.module.css";

export type Props = {
	children?: React.ReactNode;
	size?: "sm" | "md";
	href?: string;
};

export function ProgramTag({ children, size, href }: Props) {
	return (
		<Link
			href={href ?? `/topic/${children}`}
			data-size={size ?? "md"}
			className={styles["program-tag"]}
		>
			{children}
		</Link>
	);
}
