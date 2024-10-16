import type { Program } from "@/types/program";
import { ProgramCard } from "./program-card";
import styles from "./program-list.module.css";

export type Props = {
	programs: Program[];
};

export function ProgramList({ programs }: Props) {
	return (
		<div className={styles["program-list"]}>
			{programs.map((program) => (
				<ProgramCard key={program.title} program={program} />
			))}
		</div>
	);
}
