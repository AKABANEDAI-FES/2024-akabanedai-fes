"use client";

import { clsx } from "clsx";
import type { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import type React from "react";
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import styles from "./carousel.module.css";

// biome-ignore lint/style/noNonNullAssertion:
const EmblaContext = createContext<ReturnType<typeof useEmblaCarousel>>(null!);

const useCarousel = () => {
	return useContext(EmblaContext);
};

export type RootProps = React.JSX.IntrinsicElements["section"];

function Root({ children, className, ...props }: RootProps) {
	const embla = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

	return (
		<EmblaContext.Provider value={embla}>
			<section className={clsx(styles.root, className)} {...props}>
				{children}
			</section>
		</EmblaContext.Provider>
	);
}

export type ViewportProps = React.JSX.IntrinsicElements["div"];

function Viewport({ children, className, ...props }: ViewportProps) {
	const [ref] = useCarousel();

	return (
		<div ref={ref} className={clsx(styles.viewport, className)} {...props}>
			{children}
		</div>
	);
}

type ContainerProps = React.JSX.IntrinsicElements["div"];

function Container({ children, className, ...props }: ContainerProps) {
	return (
		<div className={clsx(styles.container, className)} {...props}>
			{children}
		</div>
	);
}

type SlideProps = React.JSX.IntrinsicElements["div"];

function Slide({ children, className, ...props }: SlideProps) {
	return (
		<div className={clsx(styles.slide, className)} {...props}>
			{children}
		</div>
	);
}

type IndicatorProps = Omit<React.JSX.IntrinsicElements["div"], "children">;

function Indicator({ className, ...props }: IndicatorProps) {
	const [, api] = useCarousel();
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const onDotButtonClick = useCallback(
		(index: number) => {
			api?.scrollTo(index);
		},
		[api],
	);

	const onInit = useCallback((emblaApi: EmblaCarouselType) => {
		setScrollSnaps(emblaApi.scrollSnapList());
	}, []);

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, []);

	useEffect(() => {
		if (!api) {
			return;
		}

		onInit(api);
		onSelect(api);
		api.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
	}, [api, onInit, onSelect]);

	return (
		<div className={clsx(styles.indicator, className)} {...props}>
			{scrollSnaps.map((_, index) => (
				<button
					// biome-ignore lint/suspicious/noArrayIndexKey:
					key={index}
					type="button"
					onClick={() => onDotButtonClick(index)}
					aria-selected={index === selectedIndex ? "true" : undefined}
					className={styles.dot}
				/>
			))}
		</div>
	);
}

export const Carousel = {
	Root,
	Viewport,
	Container,
	Slide,
	Indicator,
};
