import styles from "../contest.module.css";
import Image from "next/image";
import contest_vote_map_INIAD from "../../../../../public/contest_vote_map_INIAD.png";
import contest_vote_map_WELLB from "../../../../../public/contest_vote_map_WELLB.png";

export function HowToVote() {
	return (
		<div className={styles.pageall}>
			<h2 className={styles.heading}>投票方法</h2>
			<p className={styles.p}>
				赤羽台祭の期間中、来場者には1日ごとにお一人様につき3票の投票権が与えられます。キャンパス内に設置された投票所で、自由に投票が可能です。 
			</p>
			<p className={styles.p}>
				さらに、表彰された企画はこちらの特設ページでも掲載いたします。
				<br />
				ぜひご確認ください。
			</p>
			<div className={styles.imagewrapper}>
				<figure className={styles.figure}>
					<Image
						src={contest_vote_map_INIAD}
						alt="企画コンテストの投票所マップ(INIAD)"
						className={styles.image}
					/>
					<figcaption className={styles.caption}>投票所マップ(INIAD)</figcaption>
				</figure>
				<figure className={styles.figure}>
					<Image
						src={contest_vote_map_WELLB}
						alt="企画コンテストの投票所マップ(WELLB)"
						className={styles.image}
					/>
					<figcaption className={styles.caption}>投票所マップ(WELLB)</figcaption>
				</figure>
			</div>
		</div>
	);
}

