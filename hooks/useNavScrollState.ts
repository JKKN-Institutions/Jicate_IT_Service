"use client";

import { useEffect, useState } from "react";

/**
 * Reports whether the nav should render in its "solid" state.
 *
 * Self-locates the hero's bottom sentinel — the element matching
 * `[data-nav-sentinel]` (rendered by the Hero) — and watches it with an
 * IntersectionObserver. The `-86px` top rootMargin accounts for the pinned
 * 86px nav: once the sentinel scrolls behind the nav (no longer intersecting),
 * the hero has scrolled away and the nav goes solid; scrolling back up reverts
 * to transparent.
 *
 * If no sentinel exists (e.g. the header is used on a page without the hero),
 * it falls back to a passive, rAF-throttled scroll check: solid once the page
 * has scrolled past 85% of the viewport height.
 *
 * SSR-safe: initializes to `false` (transparent) to match the server render,
 * and only touches the DOM inside an effect.
 */
export function useNavScrollState(): boolean {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sentinel = document.querySelector("[data-nav-sentinel]");

    // Preferred path: observe the hero sentinel.
    if (sentinel && typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Go solid only once the sentinel has scrolled UP behind the nav
          // line (top < 86). While it sits below the nav — even below the fold,
          // e.g. when the announcement bar makes the hero taller than the
          // viewport — the hero still fills the view, so stay transparent.
          setSolid(entry.boundingClientRect.top < 86);
        },
        { rootMargin: "-86px 0px 0px 0px", threshold: 0 },
      );

      observer.observe(sentinel);
      return () => observer.disconnect();
    }

    // Fallback: passive, rAF-throttled scroll check (no sentinel present).
    let frame = 0;
    const evaluate = () => {
      frame = 0;
      setSolid(window.scrollY > window.innerHeight * 0.85);
    };
    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(evaluate);
    };

    evaluate();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame !== 0) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return solid;
}
