import programs from "@/assets/programs.json";
import type { Program } from "@/types/program";

export function getPrograms(): Program[] {
	return programs.map((program) => ({
		title: program.企画名,
		logo: `/logo/${program.ロゴ}`,
		description: program.紹介文,
		organization: program.団体名,
		placement: program.場所 ?? "",
		tags: program.タグ,
	}));
}

export function getProgramByTitle(title: string): Program | null {
	return getPrograms().find((program) => program.title === title) ?? null;
}

export function getProgramsByTag(tag: string): Program[] {
	return getPrograms().filter((program) => program.tags.includes(tag));
}

export function getAllTags(): Program["tags"] {
	return Array.from(new Set(getPrograms().flatMap((program) => program.tags)));
}
