import { ProgramList } from "@/components/site/program-list";
import { getPrograms } from "@/utils/program";
import type { Metadata } from "next";
import styles from "../shared.module.css";

export const metadata: Metadata = {
	title: "企画一覧",
	openGraph: {
		title: "企画一覧",
	},
};

export default function Page() {
	const programs = getPrograms();

	return (
		<>
			<h1 className={styles.title}>企画一覧</h1>
			<div className={styles.container}>
				<ProgramList programs={programs} />
			</div>
		</>
	);
}
