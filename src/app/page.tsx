import { Access } from "@/components/site/access";
import { Challenge } from "@/components/site/challenge";
import Link from "next/link";
import { Hero } from "@/components/site/hero";
import { Sponsors } from "@/components/site/sponsor";
import { Topic } from "@/components/site/topic/topic";
import { buildPath } from "@/utils/url";

export default function Home() {
	return (
		<>
			<Hero />
			<Challenge />
			<Topic />
			<Access />
			<Link href={buildPath("8thpamphlet.pdf")} target="_blank">パンフレット</Link>
			<Sponsors />
		</>
	);
}
