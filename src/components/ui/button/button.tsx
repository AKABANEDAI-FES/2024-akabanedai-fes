import { ark } from "@ark-ui/react";
import clsx from "clsx";
import type { ComponentProps } from "react";
import styles from "./button.module.css";

const variant = {
	size: {
		sm: styles.sm,
		md: styles.md,
		lg: styles.lg,
		xl: styles.xl,
	},
};

export type Props = ComponentProps<typeof ark.button> & {
	size?: keyof typeof variant.size;
};

export function Button({ className, size = "md", ...props }: Props) {
	return (
		<ark.button
			className={clsx(styles.btn, variant.size[size], className)}
			{...props}
		/>
	);
}
