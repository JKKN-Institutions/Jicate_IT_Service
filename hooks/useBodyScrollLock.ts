"use client";

import { useEffect } from "react";

/**
 * Lock page scrolling while `locked` is true by setting `overflow: hidden` on
 * the document root (`<html>`), restoring the previous inline value on unlock
 * or unmount.
 *
 * SSR-safe: the DOM is only touched inside an effect.
 */
export function useBodyScrollLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;

    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";

    return () => {
      root.style.overflow = previous;
    };
  }, [locked]);
}
