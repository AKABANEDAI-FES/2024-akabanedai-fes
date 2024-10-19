"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "./carousel.module.css";

export type Props = {
	images: Pick<StaticImageData, "src" | "height" | "width">[];
};

export function Carousel({ images }: Props) {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 3000 }),
	]);

	return (
		<section className={styles.root}>
			<div className={styles.viewport} ref={emblaRef}>
				<div className={styles.container}>
					{images.map((image, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey:
						<div key={index} className={styles.slide}>
							<Image
								src={image.src}
								alt={`${index + 1}番目のスライド`}
								width={image.width}
								height={image.height}
								className={styles.image}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
