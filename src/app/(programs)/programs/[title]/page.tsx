import { getProgramByTitle, getPrograms } from "@/utils/program";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

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
		<>
			<h1>{program.title}</h1>
			<img src={program.logo} alt="" />
			<p>{program.description}</p>
			<p>{program.organization}</p>
		</>
	);
}
