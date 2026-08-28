import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { Dog } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Cacau → Cachorro custom cursor.
 * - Rest: a cacao bean SVG (oval, brown, with the characteristic groove).
 * - Hover: a dog face (lucide `Dog`) in sunset orange.
 * - CTA: a larger dog face with a sunset glow.
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
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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

  const size = variant === "cta" ? 56 : variant === "hover" ? 40 : 26;

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
                  : "transparent",
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            style={{
              border: variant === "rest" ? "none" : "2px solid #f3ecdb",
              boxShadow:
                variant === "rest"
                  ? "none"
                  : "0 0 0 1px rgba(12,24,18,0.95), 0 0 0 3px rgba(243,236,219,0.9)",
            }}
          >
            {variant === "rest" ? (
              /* Cacau bean — oval with the characteristic longitudinal groove */
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <ellipse
                  cx="12"
                  cy="12"
                  rx="7.5"
                  ry="10.5"
                  fill="#6b4423"
                  stroke="#4a2f18"
                  strokeWidth="1.2"
                />
                <path
                  d="M12 2.5 C 9 7, 9 17, 12 21.5"
                  stroke="#4a2f18"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M12 2.5 C 15 7, 15 17, 12 21.5"
                  stroke="#3a2412"
                  strokeWidth="0.8"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.6"
                />
                {/* highlight */}
                <ellipse
                  cx="9.5"
                  cy="8.5"
                  rx="1.6"
                  ry="2.4"
                  fill="#8a5a32"
                  opacity="0.55"
                />
              </svg>
            ) : (
              <Dog
                size={variant === "cta" ? 28 : 22}
                strokeWidth={2}
                style={{ color: variant === "cta" ? "#e07a3c" : "#1f3a2e" }}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
