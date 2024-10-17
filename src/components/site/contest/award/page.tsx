"use client";
import "../contest.css";

export function Award() {
	return (
		<div className="div-pageall">
			<h2 className="h2-heading">表彰企画</h2>
			<p>
				以下のように部門に分けて表彰します。
				<br />
				<br />
				<strong>グランプリ</strong>
				<br />
				<span  className="p-award">
					赤羽台祭に参加している、大学生主体のすべての企画の中から、1位、2位、3位を決定します。
				</span>
				<br />
				<strong>チーム実習部門</strong>
				<br />
				<span className="p-award">
					INIADの学部3年生による「情報連携チーム実習」の団体企画を対象とします。
				</span>
				<br />
				<strong>食品部門</strong>
				<br />
				<span className="p-award">
					屋台企画などの、食品や飲料を販売する企画を対象とします。
				</span>
				<br />
				<strong>ステージ部門</strong>
				<br />
				<span className="p-award">
					WELLBメインステージおよびINIADホールで公演を行う企画を対象とします。
				</span>
				<br />
				<strong>サークル部門</strong>
				<br />
				<span className="p-award">
					サークル団体による企画を対象とします。
				</span>
			</p>
		</div>
	);
}
