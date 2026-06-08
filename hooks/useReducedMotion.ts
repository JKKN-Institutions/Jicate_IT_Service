"use client";

import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Reports whether the user has requested reduced motion.
 *
 * SSR-safe: initializes to `false` (the assumed server value) and only reads
 * `matchMedia` inside an effect, then subscribes to changes. Use this to gate
 * JS-initiated motion (video autoplay, scroll-pinning, drag inertia) — CSS
 * already handles transition-based motion via the global reduced-motion guard.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(QUERY);
    const update = () => setReduced(mql.matches);

    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return reduced;
}
