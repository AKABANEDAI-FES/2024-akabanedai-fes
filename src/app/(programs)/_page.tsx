import { ProgramList } from "@/components/site/program-list";
import { ProgramTag } from "@/components/site/program-tag";
import { getAllTags, getPrograms, getProgramsByTag } from "@/utils/program";
import styles from "./_page.module.css";

type Props = {
	tag?: string;
};

function Topics({ tag: selected }: Props) {
	const tags = getAllTags();

	return (
		<div className={styles.topics}>
			{tags.map((tag) => (
				<ProgramTag
					key={tag}
					tag={tag}
					href={tag === selected ? "/programs" : undefined}
					pressed={tag === selected}
				/>
			))}
		</div>
	);
}

export function Page({ tag }: Props) {
	const programs = tag ? getProgramsByTag(tag) : getPrograms();

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>企画一覧</h1>
			<Topics tag={tag} />
			<div className={styles.programs}>
				<ProgramList programs={programs} />
			</div>
		</div>
	);
}
