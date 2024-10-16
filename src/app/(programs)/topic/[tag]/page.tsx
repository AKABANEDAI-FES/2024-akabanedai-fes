import { getAllTags } from "@/utils/program";
import type { Metadata } from "next";
import { Page as ProgramsPage } from "../../_page";

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

	return <ProgramsPage tag={tag} />;
}
