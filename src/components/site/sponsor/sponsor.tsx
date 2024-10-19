import type { Sponsor } from "@/types/sponsor";
import { getSponsors } from "@/utils/sponsor";
import { buildPath } from "@/utils/url";
import Image from "next/image";
import { Heading } from "../heading";
import { Section } from "../section";
import styles from "./sponsor.module.css";

export function Sponsors() {
	const sponsors = getSponsors();

	const sponsorsWithLogos = sponsors.filter(
		(sponsor): sponsor is Omit<Sponsor, "logo"> & { logo: string } =>
			sponsor.logo !== null,
	);
	const sponsorsWithoutLogos = sponsors.filter(
		(sponsor): sponsor is Omit<Sponsor, "logo"> & { logo: null } =>
			sponsor.logo === null,
	);

	return (
		<Section className={styles.container}>
			<Heading>協賛企業さま</Heading>
			<div className={styles.sponsor}>
				<div className={styles["with-logo"]}>
					{sponsorsWithLogos.map((sponsor) => {
						const image = (
							<Image
								key={sponsor.name}
								className={styles.image}
								src={buildPath(sponsor.logo)}
								alt={sponsor.name}
								width={300}
								height={200}
							/>
						);
						return sponsor.url !== null ? (
							<a
								key={sponsor.name}
								className={styles.link}
								href={sponsor.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								{image}
							</a>
						) : (
							<div key={sponsor.name} className={styles.link}>
								{image}
							</div>
						);
					})}
				</div>
				<div className={styles["without-logo"]}>
					{sponsorsWithoutLogos.map((sponsor) =>
						sponsor.url !== null ? (
							<a
								key={sponsor.name}
								href={sponsor.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								{sponsor.name}
							</a>
						) : (
							<span key={sponsor.name}>{sponsor.name}</span>
						),
					)}
				</div>
			</div>
		</Section>
	);
}
