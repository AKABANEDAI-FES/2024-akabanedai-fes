import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site/header";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			{process.env.GA_ID &&<GoogleAnalytics gaId={process.env.GA_ID} />}
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
