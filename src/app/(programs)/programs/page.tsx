import type { Metadata } from "next";
import { Page as ProgramsPage } from "../_page";

export const metadata: Metadata = {
	title: "企画一覧",
	openGraph: {
		title: "企画一覧",
	},
};

export default function Page() {
	return <ProgramsPage />;
}
