import type { Metadata } from "next";
import "./globals.css";
// biome-ignore lint/correctness/noNodejsModules: build time
import path from "node:path";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ViewTransitions } from "next-view-transitions";
import nextConfig from "../../next.config.mjs";

export const metadata: Metadata = {
	metadataBase: process.env.METADATA_BASE
		? new URL(process.env.METADATA_BASE)
		: undefined,
	manifest: path.join(nextConfig.basePath || "", "/manifest.webmanifest"),
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
			<ViewTransitions>
				<body>
					<Header />
					{children}
					<Footer />
				</body>
			</ViewTransitions>
		</html>
	);
}
