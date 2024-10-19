import { ClockIcon } from "@/components/icons/clock";
import { FamilyIcon } from "@/components/icons/family";
import { LocationIcon } from "@/components/icons/location";
import { ProgramTag } from "@/components/site/program-tag";
import { getProgramByTitle, getPrograms } from "@/utils/program";
import { buildPath } from "@/utils/url";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

function encodeTitle(title: string) {
	const prod = process.env.NODE_ENV === "production";
	return prod ? title : encodeURIComponent(title);
}

export function generateStaticParams() {
	const programs = getPrograms();

	return programs.map((program) => ({ title: encodeTitle(program.title) }));
}

// biome-ignore lint/suspicious/useAwait:
export async function generateMetadata({
	params,
}: {
	params: { title: string };
}): Promise<Metadata> {
	const tag = decodeURIComponent(params.title);
	const program = getProgramByTitle(tag);
	if (!program) {
		throw new Error("Program not found");
	}
	return {
		title: program.title,
		description: program.description,
		openGraph: {
			title: program.title,
		},
	};
}

export default function Page({
	params,
}: {
	params: { title: string };
}) {
	const title = decodeURIComponent(params.title);
	const program = getProgramByTitle(title);

	if (!program) {
		notFound();
	}

	return (
		<div className={styles.container}>
			<div className={styles.program}>
				<h1 className={styles["program-name"]}>{program.title}</h1>
				<Image
					src={buildPath(program.logo)}
					alt={program.title}
					className={styles["program-image"]}
					width={512}
					height={512}
				/>
				<div className={styles["program-info"]}>
					<h2 className={styles.organization}>{program.organization}</h2>
					{program.placement && (
						<p>
							<LocationIcon className={styles.icon} />
							{program.placement}
						</p>
					)}
					<p>
						<ClockIcon className={styles.icon} />
						{program.time}
					</p>
					<p>
						<FamilyIcon className={styles.icon} />
						{program.age}
					</p>
				</div>
				<div className={styles["program-tag"]}>
					{program.tags.map((tag) => (
						<ProgramTag tag={tag} key={tag} />
					))}
				</div>
				<div className={styles["program-description"]}>
					<h2>企画説明</h2>
					<p>{program.description}</p>
				</div>
			</div>
		</div>
	);
}
