import { Encount } from "@/components/site/encount/";
import { Greeting } from "@/components/site/greeting/";
import { Logo } from "@/components/site/logo";
import { Mascot } from "@/components/site/mascot/";
import { Slideshow } from "@/components/site/slideshow";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "赤羽台祭について",
	openGraph: {
		title: "赤羽台祭について",
	},
};

export default function AboutPage() {
	return (
		<>
			<Encount />
			<Logo />
			<Greeting />
			<Mascot />
			<Slideshow />
		</>
	);
}
