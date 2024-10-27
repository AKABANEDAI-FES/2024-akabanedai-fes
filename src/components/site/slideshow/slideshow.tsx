"use client";

// import slideshow1 from "@/assets/slideshow1.png";
import slideshow2 from "@/assets/slideshow2.png";
import slideshow3 from "@/assets/slideshow3.png";
import slideshow4 from "@/assets/slideshow4.png";
import slideshow5 from "@/assets/slideshow5.png";
import { Carousel } from "@/components/ui/carousel";
import Image from "next/image";
import styles from "./slideshow.module.css";

export function Slideshow() {
	const images = [
		/*slideshow1,*/ slideshow2,
		slideshow3,
		slideshow4,
		slideshow5,
	];

	return (
		<div className={styles.slideshow}>
			<h1 className={styles.title}>昨年度の様子</h1>
			<div className={styles.slidesContainer}>
				<Carousel.Root>
					<Carousel.Viewport>
						<Carousel.Container>
							{images.map((image, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey:
								<Carousel.Slide key={index}>
									<Image
										src={image.src}
										alt={`${index + 1}番目のスライド`}
										width={image.width}
										height={image.height}
										className={styles.image}
									/>
								</Carousel.Slide>
							))}
						</Carousel.Container>
					</Carousel.Viewport>
				</Carousel.Root>
			</div>
		</div>
	);
}
