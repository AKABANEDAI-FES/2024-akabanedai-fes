import { Guide } from "../guide";

export function AdmissionInfo() {
	const headingText = "入退場について";
	const admissionInfo: string[] = [
		"事前予約やチケットは不要です。",
		"入場料は無料です。(※ 一部体験や飲食出店は有料です。)",
		"駐車場のご用意はございません。また駐輪場は数に限りがございます。ご来場の際は、できる限り公共交通機関をご利用ください。",
	];
	return <Guide headingText={headingText} listItem={admissionInfo} />;
}
