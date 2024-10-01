import { Dialog } from "@ark-ui/react";
import { useCallback, useState } from "react";
import styles from "./drawer.module.css";

export type Props = {
	children?: React.ReactNode;
};

export function Drawer({ children }: Props) {
	const [open, setOpen] = useState(false);

	const handleOpenToggle = useCallback(() => {
		setOpen((prev) => !prev);
	}, []);

	return (
		<Dialog.Root open={open}>
			<button
				type="button"
				className={styles.trigger}
				onClick={handleOpenToggle}
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
