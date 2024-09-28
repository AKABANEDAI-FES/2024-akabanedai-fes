import hero from "@/assets/hero.png";
import Image from "next/image";
import styles from "./hero.module.css";

export function Hero() {
	return (
		<div>
			<Image
				className={styles.hero}
				src={hero.src}
				height={hero.height}
				width={hero.width}
				alt=""
			/>
		</div>
	);
}
