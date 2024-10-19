import sponsor from "@/assets/sponsor.json";
import type { Sponsor } from "@/types/sponsor";

export function getSponsors(): Sponsor[] {
	return sponsor.map((sponsor) => ({
		name: sponsor.企業名,
		url: sponsor.url,
		logo: sponsor.ロゴ ? `/sponsor/${sponsor.ロゴ}` : null,
	}));
}
