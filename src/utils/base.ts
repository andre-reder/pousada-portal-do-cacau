/**
 * Utility to manage base paths cleanly without double slashes.
 */
export function getBase(): string {
  const b = import.meta.env.BASE_URL ?? "/";
  return b.replace(/\/$/, "");
}

/**
 * Returns a path prefixed with the base URL.
 * e.g. pathWithBase('/acomodacoes') -> '/acomodacoes' (when root)
 *      pathWithBase('/acomodacoes') -> '/subpath/acomodacoes' (when subpath)
 */
export function pathWithBase(path: string): string {
  if (!path) return getBase() || "/";
  if (path.startsWith("#")) {
    const base = getBase();
    return `${base || "/"}${path}`;
  }
  const base = getBase();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
