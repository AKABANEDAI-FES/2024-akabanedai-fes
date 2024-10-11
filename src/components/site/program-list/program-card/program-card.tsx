import type { Program } from "@/types/program";
import { ProgramTag } from "../../program-tag";
import styles from "./program-card.module.css";

export type Props = {
	program: Omit<Program, "description">;
};

export function ProgramCard({ program }: Props) {
	return (
		<div className={styles["program-card"]}>
			<a href={program.title} className={styles.link}>
				<img src={program.logo} alt={program.title} className={styles.logo} />
				<h2 className={styles.title}>{program.title}</h2>
				<p className={styles.note}>
					<span>{program.organization}</span> / <span>{program.placement}</span>
				</p>
			</a>
			<div className={styles.tags}>
				{program.tags.map((tag) => (
					<ProgramTag href={tag} key={tag} size="sm">
						{tag}
					</ProgramTag>
				))}
			</div>
		</div>
	);
}
