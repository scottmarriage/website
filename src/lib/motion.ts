import type { Variants } from "framer-motion";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function fadeUp(delay = 0): Variants {
  if (prefersReducedMotion()) {
    return { hidden: { opacity: 1 }, visible: { opacity: 1 } };
  }
  return {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: "easeOut" } },
  };
}

export const scrollReveal: Variants = prefersReducedMotion()
  ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
  : {
      hidden: { opacity: 0, y: 24 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };
