import hero from "@/assets/hero.webp";
import Image from "next/image";
import styles from "./hero.module.css";

export function Hero() {
	return (
		<div
			className={styles.hero}
			style={{
				aspectRatio: `${hero.width}/${hero.height}`,
			}}
		>
			<Image
				src={hero.src}
				height={hero.height}
				width={hero.width}
				alt=""
				loading="eager"
			/>
		</div>
	);
}
