import result1 from "@/assets/result1.png";
import result2 from "@/assets/result2.png";
import result3 from "@/assets/result3.png";
import { AboutContest } from "@/components/site/contest/about-contest/page";
import { Award } from "@/components/site/contest/award/page";
import { HowToVote } from "@/components/site/contest/how-to-vote/page";
import { Result } from "@/components/site/contest/result/page";
import { VotingPeriod } from "@/components/site/contest/voting-period/page";
import Image from "next/image";
import styles from "./contest.module.css";

export default function Home() {
	return (
		<div className={styles.pageall}>
			<div className={styles.content}>
				<h1 className={styles.h1}>企画コンテスト</h1>
				<h2 className={styles.heading}>最終結果</h2>
				<Image
					src={result1}
					alt="企画コンテストの結果１"
					className={styles.result}
				/>
				<Image
					src={result2}
					alt="企画コンテストの結果２"
					className={styles.result}
				/>
				<Image
					src={result3}
					alt="企画コンテストの結果３"
					className={styles.result}
				/>
				<AboutContest />
				<br />
				<VotingPeriod />
				<br />
				<HowToVote />
				<br />
				<Result />
				<br />
				<Award />
			</div>
		</div>
	);
}
