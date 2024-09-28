import clsx from "clsx";
import styles from "./section.module.css";

export type Props = {
	children?: React.ReactNode;
	className?: string;
};

export function Section({ children, className }: Props) {
	return (
		<section className={clsx(styles.section, className)}>{children}</section>
	);
}
