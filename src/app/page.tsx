import { Access } from "@/components/site/access";
import { Challenge } from "@/components/site/challenge";
import { Hero } from "@/components/site/hero";
import { Sponsors } from "@/components/site/sponsor";

export default function Home() {
	return (
		<>
			<Hero />
			<Challenge />
			<Access />
			<Sponsors />
		</>
	);
}
