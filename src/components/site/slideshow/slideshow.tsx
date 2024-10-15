"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./slideshow.module.css";

export function Slideshow() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const images = [
		{ src: "/slideshow1.png", alt: "Slide 1" },
		{ src: "/slideshow2.png", alt: "Slide 2" },
		{ src: "/slideshow3.png", alt: "Slide 3" },
		{ src: "/slideshow4.png", alt: "Slide 4" },
	];

	const totalSlides = images.length;

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
		}, 3000);
		return () => clearInterval(intervalId);
	}, [totalSlides]);

	const getPreviousSlideIndex = () =>
		(currentSlide - 1 + totalSlides) % totalSlides;
	const getNextSlideIndex = () => (currentSlide + 1) % totalSlides;

	return (
		<div className={styles.slideshow}>
			<h1 className={styles.title}>昨年度の様子</h1>
			<div className={styles.slidesContainer}>
				<div className={`${styles.slide} ${styles.sideSlide}`}>
					<Image
						src={images[getPreviousSlideIndex()].src}
						alt={images[getPreviousSlideIndex()].alt}
						width={400}
						height={300}
						className={styles.image}
					/>
				</div>

				<div className={`${styles.slide} ${styles.currentSlide}`}>
					<Image
						src={images[currentSlide].src}
						alt={images[currentSlide].alt}
						width={400}
						height={300}
						className={styles.image}
					/>
				</div>

				<div className={`${styles.slide} ${styles.sideSlide}`}>
					<Image
						src={images[getNextSlideIndex()].src}
						alt={images[getNextSlideIndex()].alt}
						width={400}
						height={300}
						className={styles.image}
					/>
				</div>
			</div>
		</div>
	);
}
