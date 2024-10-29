import { AboutContest } from "../../components/site/contest/about-contest/page";
import { Award } from "../../components/site/contest/award/page";
import { HowToVote } from "../../components/site/contest/how-to-vote/page";
import { Result } from "../../components/site/contest/result/page";
import { VotingPeriod } from "../../components/site/contest/voting-period/page";
import styles from "./contest.module.css";

export default function Home() {
	return (
		<div className={styles.pageall}>
			<div className={styles.content}>
				<h1 className={styles.h1}>企画コンテスト</h1>
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
