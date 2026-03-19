import { useEffect, useState } from "react";
import { useIsMobile } from "./use-mobile";

/**
 * Returns true when animations should be reduced:
 * - User prefers reduced motion (OS setting)
 * - Device is mobile (lighter animations)
 */
export function useReducedMotion() {
  const isMobile = useIsMobile();
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return prefersReduced || isMobile;
}
