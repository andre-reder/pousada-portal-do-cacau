import Lenis from "lenis";
import { useEffect } from "react";

/**
 * Global smooth-scroll controller (Lenis).
 * - Single instance, RAF-driven.
 * - Disabled for prefers-reduced-motion and touch-primary devices
 *   (touch already has native momentum and Lenis can fight it).
 * - Anchor links get an offset for the sticky navbar.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window;

    if (prefersReduced || isTouch) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        'a[href*="#"]'
      ) as HTMLAnchorElement | null;
      if (!target) return;
      const rawHref = target.getAttribute("href");
      if (!rawHref || rawHref === "#") return;
      // Extract the hash portion — works for both "#section" and "/base#section"
      const hashIndex = rawHref.indexOf("#");
      if (hashIndex === -1) return;
      const id = rawHref.slice(hashIndex);
      // Only intercept if we're on the page the link points to
      const pathBeforeHash = rawHref.slice(0, hashIndex);
      if (pathBeforeHash) {
        const targetPath = pathBeforeHash.replace(
          import.meta.env.BASE_URL,
          ""
        );
        const currentPath = window.location.pathname.replace(
          import.meta.env.BASE_URL,
          ""
        );
        if (targetPath !== currentPath) return; // different page — let browser navigate
      }
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const top =
        el.getBoundingClientRect().top + window.scrollY - 72; /* navbar offset */
      lenis.scrollTo(top, { offset: 0 });
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
