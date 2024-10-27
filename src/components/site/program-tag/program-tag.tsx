import { Button, type ButtonProps } from "@/components/ui/button";
import type { Program } from "@/types/program";
import Link from "next/link";

export type Props = {
	tag: Program["tags"][number];
	size?: ButtonProps["size"];
	href?: string;
	pressed?: boolean;
};

export function ProgramTag({ tag, size, href, pressed }: Props) {
	return (
		<Button asChild={true} size={size} aria-pressed={pressed}>
			<Link href={href ?? `/topic/${tag}`}>{tag}</Link>
		</Button>
	);
}
