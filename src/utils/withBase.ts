import { getBase } from "./base";

/**
 * Prefixes a URL with the Astro base path.
 * - External URLs (http/https) are returned as-is.
 * - URLs already starting with the base path are returned as-is.
 * - Absolute paths like "/assets/blog/x.webp" get the base prepended cleanly.
 */
export function withBase(url: string | undefined, base?: string): string | undefined {
  if (!url) return undefined;
  if (url.startsWith("http")) return url;
  const b = base !== undefined ? base.replace(/\/$/, "") : getBase();
  const path = url.startsWith("/") ? url : `/${url}`;
  return `${b}${path}`;
}

