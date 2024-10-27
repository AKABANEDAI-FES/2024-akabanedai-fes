"use client";

import family from "@/assets/topic_family.png";
import play from "@/assets/topic_play.png";
import stage from "@/assets/topic_stage.png";
import stall from "@/assets/topic_stall.png";
import student from "@/assets/topic_student.png";
import study from "@/assets/topic_study.png";
import { Carousel } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "../heading";
import { Section } from "../section";
import styles from "./topic.module.css";

const topics = [
	{
		img: family,
		name: "家族連れ",
	},
	{
		img: play,
		name: "遊びたい人",
	},
	{
		img: stage,
		name: "ステージ企画",
	},
	{
		img: stall,
		name: "模擬店",
	},
	{
		img: student,
		name: "高校生",
	},
	{
		img: study,
		name: "学びたい人",
	},
] as const;
type Topic = (typeof topics)[number];

export function Topic() {
	return (
		<Section>
			<Heading>トピック</Heading>
			<Carousel.Root className={styles.carousel}>
				<Carousel.Viewport>
					<Carousel.Container>
						{topics.map((topic) => (
							<Carousel.Slide key={topic.name}>
								<TopicCard {...topic} />
							</Carousel.Slide>
						))}
					</Carousel.Container>
				</Carousel.Viewport>
				<Carousel.Indicator />
			</Carousel.Root>
		</Section>
	);
}

function TopicCard({ img, name }: Topic) {
	return (
		<Link href={`/topic/${name}`} className={styles["topic-card"]}>
			<Image src={img.src} alt={name} width={img.width} height={img.height} />
			<h3>{name}</h3>
		</Link>
	);
}
