import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { buildPath } from "@/utils/url";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
	metadataBase: process.env.METADATA_BASE
		? new URL(process.env.METADATA_BASE)
		: undefined,
	manifest: buildPath("/manifest.webmanifest"),
	title: {
		template: "%s | 赤羽台祭",
		default: "赤羽台祭",
	},
	description:
		"東洋大学赤羽台キャンパス大学祭「赤羽台祭」は、2024/11/02(土), 03(日)に開催！",
	keywords: ["東洋大学", "大学祭", "学園祭", "赤羽台祭", "赤羽"],
	openGraph: {
		url: "https://akabanedai-fes.com/",
		type: "website",
		title: {
			template: "%s | 赤羽台祭 [東洋大学赤羽台キャンパス大学祭]",
			default: "赤羽台祭 [東洋大学赤羽台キャンパス大学祭]",
		},
		siteName: "赤羽台祭",
	},
	twitter: {
		site: "@akabanedaifes",
		card: "summary_large_image",
	},
	robots: process.env.ROBOTS,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			{process.env.GA_ID && <GoogleAnalytics gaId={process.env.GA_ID} />}
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
