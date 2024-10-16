import { buildPath } from "@/utils/url";

export function GET() {
	return new Response(
		JSON.stringify({
			$schema: "https://json.schemastore.org/web-manifest-combined.json",
			name: "第八回 赤羽台祭",
			short_name: "赤羽台祭",
			description:
				"東洋大学赤羽台キャンパス大学祭「赤羽台祭」は、2024/11/02(土), 03(日)に開催！",
			icons: [
				{
					src: "pwa-64x64.png",
					sizes: "64x64",
					type: "image/png",
				},
				{
					src: "pwa-192x192.png",
					sizes: "192x192",
					type: "image/png",
				},
				{
					src: "pwa-512x512.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "any",
				},
				{
					src: "maskable-icon-512x512.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "maskable",
				},
			],
			theme_color: "#961717",
			background_color: "#fef8ec",
			start_url: buildPath("/"),
			display: "standalone",
		}),
		{
			headers: {
				"Content-Type": "application/manifest+json",
			},
		},
	);
}
