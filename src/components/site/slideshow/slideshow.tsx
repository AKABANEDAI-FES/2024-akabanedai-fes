"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./slideshow.module.css";

export function Slideshow() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const images = [
		{ src: "/slideshow1.png", alt: "" },
		{ src: "/slideshow2.png", alt: "" },
		{ src: "/slideshow3.png", alt: "" },
		{ src: "/slideshow4.png", alt: "" },
		{ src: "/slideshow5.png", alt: "" },
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
