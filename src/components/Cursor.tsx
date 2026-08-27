import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Botanical custom cursor.
 * - A small seed-dot at rest that grows into a soft ring over interactive
 *   elements and a leaf glyph over primary CTAs.
 * - Only on pointer:fine + no reduced-motion. Native cursor hidden via
 *   body.cursor-ready (set after first move so we never leave the user
 *   cursor-less if JS fails).
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<"rest" | "hover" | "cta">("rest");
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 38, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 600, damping: 38, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduced) return;

    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const el = (e.target as HTMLElement)?.closest(
        "a, button, [role='button'], input, textarea, select, label, [data-cursor]"
      ) as HTMLElement | null;
      if (!el) {
        setVariant("rest");
        return;
      }
      const cta = el.getAttribute("data-cursor");
      if (cta === "cta") setVariant("cta");
      else if (
        el.tagName === "INPUT" ||
        el.tagName === "TEXTAREA" ||
        el.tagName === "SELECT" ||
        el.getAttribute("contenteditable") === "true"
      ) {
        setVariant("rest");
      } else {
        setVariant("hover");
      }
    };
    const leave = () => setVisible(false);
    const down = () => setVariant((v) => (v === "cta" ? "cta" : "hover"));
    const up = () => setVariant("rest");

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseout", leave);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    // Reveal native cursor only after we are confident the dot is on screen.
    const ready = () => document.body.classList.add("cursor-ready");
    ready();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", leave);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.body.classList.remove("cursor-ready");
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = variant === "cta" ? 56 : variant === "hover" ? 40 : 10;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center"
          style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        >
          <motion.div
            className="flex items-center justify-center rounded-full"
            animate={{
              width: size,
              height: size,
              backgroundColor:
                variant === "cta"
                  ? "rgba(224,122,60,0.28)"
                  : variant === "hover"
                  ? "rgba(243,236,219,0.14)"
                  : "#f3ecdb",
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            style={{
              border:
                variant === "rest" ? "2px solid #0c1812" : "2px solid #f3ecdb",
              boxShadow:
                variant === "rest"
                  ? "0 0 0 2px rgba(243,236,219,0.95)"
                  : "0 0 0 1px rgba(12,24,18,0.95), 0 0 0 3px rgba(243,236,219,0.9)",
            }}
          >
            {variant === "cta" && (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "#e07a3c" }}
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6" />
              </svg>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
