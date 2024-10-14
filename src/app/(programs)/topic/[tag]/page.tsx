import { ProgramList } from "@/components/site/program-list";
import { getAllTags, getProgrampsByTag } from "@/utils/program";
import type { Metadata } from "next";
import sharedStyle from "../../shared.module.css";
import styles from "./page.module.css";

function encodeTag(tag: string) {
	const prod = process.env.NODE_ENV === "production";
	return prod ? tag : encodeURIComponent(tag);
}

// biome-ignore lint/suspicious/useAwait:
export async function generateMetadata({
	params,
}: {
	params: { tag: string };
}): Promise<Metadata> {
	const tag = decodeURIComponent(params.tag);
	return {
		title: `企画一覧: ${tag}`,
		openGraph: {
			title: `企画一覧: ${tag}`,
		},
	};
}

export function generateStaticParams() {
	const tags = getAllTags();

	return tags.map((tag) => ({ tag: encodeTag(tag) }));
}

export default function Page({
	params,
}: {
	params: { tag: string };
}) {
	const tag = decodeURIComponent(params.tag);
	const programs = getProgrampsByTag(tag);

	return (
		<>
			<h1 className={sharedStyle.title}>企画一覧</h1>
			<span className={styles.topic}>トピック: {tag}</span>
			<div className={sharedStyle.container}>
				<ProgramList programs={programs} />
			</div>
		</>
	);
}
