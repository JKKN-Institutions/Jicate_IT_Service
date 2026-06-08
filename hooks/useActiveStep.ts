"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface UseActiveStepResult {
  /** Index of the step currently centered in the viewport (0-based). */
  activeIndex: number;
  /**
   * Ref callback to attach to each step sentinel, in order. Pass the step's
   * index so the hook can map an intersecting sentinel back to its position.
   */
  registerStep: (index: number) => (node: Element | null) => void;
}

/**
 * Reports which step in a sticky-pinned scrolly section is currently centered.
 *
 * Each step registers a sentinel via `registerStep(i)`. A single
 * IntersectionObserver with a `-50% 0px -50% 0px` rootMargin watches a 0px-tall
 * band through the viewport's vertical center; whichever sentinel sits in that
 * band is reported as active.
 *
 * SSR-safe and reduced-motion-aware: returns `0` and observes nothing while
 * `count <= 0`. Consumers gate the whole pinned experience under reduced
 * motion, so this hook stays inert (returns 0) when not driving any steps.
 */
export function useActiveStep(count: number): UseActiveStepResult {
  const [activeIndex, setActiveIndex] = useState(0);
  const nodesRef = useRef<Map<number, Element>>(new Map());

  const registerStep = useCallback(
    (index: number) => (node: Element | null) => {
      const map = nodesRef.current;
      if (node) {
        map.set(index, node);
      } else {
        map.delete(index);
      }
    },
    [],
  );

  useEffect(() => {
    if (count <= 0 || typeof IntersectionObserver === "undefined") return;

    const indexByNode = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = indexByNode.get(entry.target);
          if (index !== undefined) setActiveIndex(index);
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    for (const [index, node] of nodesRef.current) {
      indexByNode.set(node, index);
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, [count]);

  return { activeIndex, registerStep };
}
