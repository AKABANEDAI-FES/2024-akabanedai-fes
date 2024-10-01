import type { Metadata } from "next";
import "./globals.css";
// biome-ignore lint/correctness/noNodejsModules: build time
import path from "node:path";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
	metadataBase: process.env.METADATA_BASE
		? new URL(process.env.METADATA_BASE)
		: undefined,
	manifest: path.join(process.env.BASE_PATH || "", "/manifest.webmanifest"),
	title: "赤羽台祭",
	description:
		"東洋大学赤羽台キャンパス大学祭「赤羽台祭」は、2024/11/02(土), 03(日)に開催！",
	openGraph: {
		url: "https://akabanedai-fes.com/",
		type: "website",
		title: "赤羽台祭 [東洋大学赤羽台キャンパス大学祭]",
		siteName: "赤羽台祭",
	},
	twitter: {
		site: "@akabanedaifes",
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
