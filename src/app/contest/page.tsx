import "./contest.css";
import { AboutContest } from "../../components/site/contest/about-contest/page";
import { Award } from "../../components/site/contest/award/page";
import { HowToVote } from "../../components/site/contest/how-to-vote/page";
import { Result } from "../../components/site/contest/result/page";
import { VotingPeriod } from "../../components/site/contest/voting-period/page";
import  Link  from "next/link";

export default function Home() {

	return (
		<div>
			<nav className="breadcrumb">
				<h2>
					<a href="/" style={{ color: "black" }}>
						企画一覧
					</a>{" "}
					&gt; 企画コンテスト
				</h2>
			</nav>
			<h1 style={{ color: "black" }}>企画コンテスト</h1>
			<>
				<AboutContest />
				<VotingPeriod />
				<HowToVote />
				<Result />
				<Award />
			</>
				<button type="button" className="back-button">
        <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
          企画一覧に戻る
        </Link>
      </button>
		</div>
	);
}
