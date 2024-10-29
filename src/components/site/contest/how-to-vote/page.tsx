import Image from "next/image";
import contestVoteMapIniad from "../../../../../public/contest_vote_map_INIAD.png";
import contestVoteMapWellb from "../../../../../public/contest_vote_map_WELLB.png";
import styles from "../contest.module.css";

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
						src={contestVoteMapIniad}
						alt="企画コンテストの投票所マップ(INIAD)"
						className={styles.image}
					/>
					<figcaption className={styles.caption_INI}>
						投票所マップ(INIAD)
					</figcaption>
				</figure>
				<figure className={styles.figure}>
					<Image
						src={contestVoteMapWellb}
						alt="企画コンテストの投票所マップ(WELLB)"
						className={styles.image}
					/>
					<figcaption className={styles.caption_WEL}>
						投票所マップ(WELLB)
					</figcaption>
				</figure>
			</div>
		</div>
	);
}
