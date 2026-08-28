/**
 * Prefixes a URL with the Astro base path.
 * - External URLs (http/https) are returned as-is.
 * - URLs already starting with the base path are returned as-is.
 * - Absolute paths like "/assets/blog/x.webp" get the base prepended.
 */
export function withBase(url: string | undefined, base: string): string | undefined {
  if (!url) return undefined;
  if (url.startsWith("http")) return url;
  if (url.startsWith(`${base}/`)) return url;
  if (url.startsWith("/")) return `${base}${url}`;
  return `${base}/${url}`;
}
