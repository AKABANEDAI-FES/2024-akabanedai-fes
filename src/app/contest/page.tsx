import "./contest.css";

export default function Contest() {
	return (
		<div className="contest-container">
			<nav className="breadcrumb">
				<a href="/" style={{ color: "black" }}>
					企画一覧
				</a>{" "}
				&gt; 企画コンテスト
			</nav>
			<h1 style={{ color: "black" }}>企画コンテスト</h1>
			<h2>企画コンテストとは</h2>
			<p>
				大学生主体の企画を対象にして、ご来場いただいた皆様の投票によって魅力度の高い企画を決定する大学祭実行委員会公式企画になります。
			</p>
			<h2>投票期間</h2>
			<p>
				赤羽台祭の期間中、キャンパス内に設置されている投票所で投票できます。
				<br />
				11月2日 12:00~18:00
				<br />
				11月3日 12:00~15:00
				<br />※ スケジュールは都合により一部変更になる可能性があります。
			</p>
			<h2>投票方法</h2>
			<p>
				赤羽台祭の期間中、来場者には1日ごとにお一人様につき3票の投票権が与えられます。キャンパス内に設置された投票所で、自由に投票が可能です。
			</p>
			<p>
				投票にご参加いただいた方には、オリジナルグッズをプレゼント！ぜひお気軽にご参加ください！
			</p>
			<div className="image-container">
				<img src="/path/to/image.png" alt="投票イメージ" />
			</div>
			<h2>結果発表</h2>
			<p>
				表彰式は 11月3日 17:30
				より、WELLBメインステージにて行います。さらに、表彰された企画はこちらの特設ページでも掲載いたします。ぜひご確認ください。
			</p>
			<h2>表彰企画</h2>
			<p>
				以下のように部門に分けて表彰します。
				<br />
				<br />
				<strong>グランプリ</strong>
				<br />
				赤羽台祭に参加している、大学生主体のすべての企画の中から、1位、2位、3位を決定します。
				<br />
				<strong>チーム実習部門</strong>
				<br />
				INIADの学部3年生による「情報連携チーム実習」の団体企画を対象とします。
				<br />
				<strong>食品部門</strong>
				<br />
				屋台企画などの、食品や飲料を販売する企画を対象とします。
				<br />
				<strong>ステージ部門</strong>
				<br />
				WELLBメインステージおよびINIADホールで公演を行う企画を対象とします。
				<br />
				<strong>サークル部門</strong>
				<br />
				サークル団体による企画を対象とします。
			</p>
			<button type="button" className="back-button">
				企画一覧に戻る
			</button>
		</div>
	);
}
