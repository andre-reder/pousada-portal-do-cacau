import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Slim scroll-progress bar pinned to the very top, above the navbar.
 * Forest gradient that warms toward sunset as you descend.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[80] h-[3px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, #1f3a2e 0%, #2c6e7f 45%, #e8b547 75%, #e07a3c 100%)",
      }}
    />
  );
}
