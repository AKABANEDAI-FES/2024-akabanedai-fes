import firstviewPc from "@/assets/firstview_pc.png";
import firstviewSp from "@/assets/firstview_sp.png";
import styles from "./hero.module.css";

export function Hero() {
	return (
		<div className={styles.hero}>
			<picture>
				<source
					srcSet={firstviewPc.src}
					media="(min-width: 768px)"
					width={firstviewPc.width}
					height={firstviewPc.height}
				/>
				<img
					src={firstviewSp.src}
					alt="赤羽台祭 2024年11月2日（土）・3日（日）、10:00から18:00"
					loading="eager"
					width={firstviewSp.width}
					height={firstviewSp.height}
				/>
			</picture>
		</div>
	);
}
