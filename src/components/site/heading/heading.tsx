import clsx from "clsx";
import styles from "./heading.module.css";

export type Props = {
	children?: string;
	className?: string;
};

export function Heading({ children, className }: Props) {
	return <h2 className={clsx(styles.heading, className)}>{children}</h2>;
}
