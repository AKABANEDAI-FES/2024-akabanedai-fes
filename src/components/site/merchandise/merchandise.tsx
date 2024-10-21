import styles from "./merchandise.module.css";

type Props = {
	title: string
	description: string
	smallText: string
	price: string
	imgLink: string
}

export function Merchandise(props: Props) {
	return (
		<div className={styles.merchContainer}>
			<div className={styles.merch}>
				<h2 className={styles.title}>{props.title}</h2>
				<div className={styles.descriptionContainer}>
					<p className={styles.description}>{props.description}</p>
					<p className={styles.smallText}>{props.smallText}</p>
					<span className={styles.space}/>
					<h3 className={styles.price}>{props.price}</h3>
					<p className={styles.smallText}>円</p>
				</div>
				<img src={props.imgLink} alt="" className={styles.merchPhoto}/>
			</div>
		</div>
	)
};
