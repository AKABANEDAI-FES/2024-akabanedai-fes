import "server-only";
// biome-ignore lint/correctness/noNodejsModules: build time
import path from "node:path";
import nextConfig from "../../next.config.mjs";

export function buildPath(pathname: string): string {
	const basePath = nextConfig?.basePath || "";
	return path.join(basePath, pathname);
}
