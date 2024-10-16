import { Encount } from "@/components/site/encount/";
import { Greeting } from "@/components/site/greeting/";
import { Logo } from "@/components/site/logo";
import { Mascot } from "@/components/site/mascot/";
import { Slideshow } from "@/components/site/slideshow";

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
