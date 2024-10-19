import { getSponsors } from "@/utils/sponsor";
import { buildPath } from "@/utils/url";
import Image from "next/image";
import { Heading } from "../heading";
import { Section } from "../section";
import styles from "./sponsor.module.css";

export function Sponsor() {
	const sponsors = getSponsors();

	return (
		<Section className={styles.container}>
			<Heading>協賛企業さま</Heading>
			<div className={styles.sponsor}>
				{sponsors.map((sponsor) => (
					<a key={sponsor.name} href={sponsor.url} className={styles.link}>
						<Image
							className={styles.image}
							src={buildPath(sponsor.logo)}
							alt={sponsor.name}
							width={300}
							height={200}
						/>
					</a>
				))}
			</div>
		</Section>
	);
}
