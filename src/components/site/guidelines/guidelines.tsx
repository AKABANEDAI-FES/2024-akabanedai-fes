import { Guide } from "../guide";

const guidelinesInfo: string[] = [
	"火気の使用はご遠慮ください。",
	"キャンパス内は全面禁煙となっております。",
	"指定場所以外で飲食をすることはできません。飲食可能な場所についてはパンフレットをご確認ください。",
	"構内の機材や設備の撮影はおやめください。",
	"事故防止のため、構内の機材にはお手を触れないようにお願いいたします。",
	"重要なアナウンスが流れる場合がございます。構内放送にご留意ください。",
	"他のお客様への迷惑行為や、スタッフの指示に従わない等の行為が見受けられた場合、ご退場頂いたり、入場をお断りする場合があります。",
];

export function Guidelines() {
	const headingText: React.ReactNode = (
		<>
			<span>キャンパス内での</span>
			<span>注意事項</span>
		</>
	);
	return (
		<Guide headingText={headingText} listItem={guidelinesInfo}>
			<p>
				※本学では大学祭の様子を記録するため、写真/動画の撮影を行っています。ご来場の皆さまのお名前等個人が特定されないよう配慮したうえで、広報媒体素材として使用させていただくことがあります。
			</p>
		</Guide>
	);
}
