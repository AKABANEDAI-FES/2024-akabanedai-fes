import { Guide } from "../guide";

export function AdmissionInfo() {
  const headingText: React.ReactNode = (
    <>
      入場について
    </>
  );
  const admissionInfo: string[] = [
    '事前予約やチケットは不要です',
    "入場料は無料です。(※ 一部体験や飲食出店は有料です。)",
    "駐車場はございませんので、お車でのご来場はご遠慮ください。"
  ];

  return <Guide headingText={headingText} listItem={admissionInfo} />;
}