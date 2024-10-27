import { Access } from "@/components/site/access";
import { Challenge } from "@/components/site/challenge";
import { Hero } from "@/components/site/hero";
import { Sponsors } from "@/components/site/sponsor";
import { Topic } from "@/components/site/topic/topic";

export default function Home() {
	return (
		<>
			<Hero />
			<Topic />
			<Challenge />
			<Access />
			<Sponsors />
		</>
	);
}
