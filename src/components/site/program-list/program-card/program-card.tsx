import type { Program } from "@/types/program";
import { buildPath } from "@/utils/url";
import Image from "next/image";
import Link from "next/link";
import { ProgramTag } from "../../program-tag";
import styles from "./program-card.module.css";

export type Props = {
	program: Omit<Program, "description">;
};

export function ProgramCard({ program }: Props) {
	const title = encodeURIComponent(program.title);
	return (
		<div className={styles["program-card"]}>
			<Link href={`/programs/${title}`} className={styles.link}>
				<Image
					width={512}
					height={512}
					src={buildPath(program.logo)}
					alt={program.title}
					className={styles.logo}
				/>
				<h2 className={styles.title}>{program.title}</h2>
				<p className={styles.note}>
					<span>{program.organization}</span>
					{program.placement && (
						<>
							{" "}
							/ <span>{program.placement}</span>
						</>
					)}
				</p>
			</Link>
			<div className={styles.tags}>
				{program.tags.map((tag) => (
					<ProgramTag tag={tag} key={tag} size="sm" />
				))}
			</div>
		</div>
	);
}
