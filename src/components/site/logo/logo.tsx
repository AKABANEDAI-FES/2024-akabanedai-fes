import styles from "./logo.module.css";

export function Logo() {
	return (
		<div className={styles.logo}>
			<h1>今年のロゴ「鯉の滝登り」</h1>
			<p>
				ロゴはテーマである挑戦からイメージした、鯉の滝登りがモチーフになっています。炎のように燃え盛る鯉には、赤羽台祭が炎のように盛り上がり続け、消えないで欲しいという思いが込められています。
			</p>
		</div>
	);
}
