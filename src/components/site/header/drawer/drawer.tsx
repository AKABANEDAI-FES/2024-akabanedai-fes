import { Dialog } from "@ark-ui/react";
import styles from "./drawer.module.css";

export type Props = {
	children?: React.ReactNode;
	open?: boolean;
	onOpenToggle?: () => void;
};

export function Drawer({ children, open, onOpenToggle }: Props) {
	return (
		<Dialog.Root open={open}>
			<button
				type="button"
				className={styles.trigger}
				onClick={onOpenToggle}
				data-state={open ? "open" : "closed"}
				aria-label={open ? "閉じる" : "メニューを開く"}
			>
				<div className={styles.icon}>
					<span className={styles.line} />
					<span className={styles.line} />
					<span className={styles.line} />
				</div>
			</button>
			<Dialog.Backdrop className={styles.backdrop} />
			<Dialog.Positioner className={styles.positioner}>
				<Dialog.Content className={styles.content}>{children}</Dialog.Content>
			</Dialog.Positioner>
		</Dialog.Root>
	);
}
