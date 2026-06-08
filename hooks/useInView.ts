"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Per-element callback invoked the first time the element intersects.
 */
type RevealCallback = (target: Element) => void;

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0.12,
  rootMargin: "0px 0px -10% 0px",
};

let sharedObserver: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, RevealCallback>();

/**
 * Lazily create (or reuse) the single module-level IntersectionObserver shared
 * by every reveal element on the page. On first intersection it fires the
 * element's callback once and unobserves it, so each node reveals a single time
 * and the observer never re-triggers on scroll-back.
 */
function getSharedObserver(): IntersectionObserver {
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const cb = callbacks.get(entry.target);
      observer.unobserve(entry.target);
      callbacks.delete(entry.target);
      cb?.(entry.target);
    }
  }, OBSERVER_OPTIONS);

  return sharedObserver;
}

/**
 * Register an element with the shared reveal observer. Returns a cleanup fn
 * that unobserves the element (safe to call even after it has fired). Exposed
 * so components like <Reveal> can drive the shared observer directly.
 */
export function observeOnce(target: Element, onReveal: RevealCallback): () => void {
  if (typeof IntersectionObserver === "undefined") {
    // No observer available (e.g. SSR / unsupported): reveal immediately so
    // content is never trapped hidden (progressive enhancement).
    onReveal(target);
    return () => {};
  }

  const observer = getSharedObserver();
  callbacks.set(target, onReveal);
  observer.observe(target);

  return () => {
    observer.unobserve(target);
    callbacks.delete(target);
  };
}

export interface UseInViewResult<T extends Element> {
  /** Attach to the element you want to observe. */
  ref: React.RefObject<T | null>;
  /** Becomes `true` once (and stays true) when the element enters the viewport. */
  inView: boolean;
}

/**
 * Observe a single element and report when it first enters the viewport via the
 * shared module-level IntersectionObserver. Fires once, then unobserves.
 *
 * SSR-safe: `inView` initializes to `false`; the observer is only touched in an
 * effect. If `IntersectionObserver` is unavailable, the element is treated as
 * visible immediately so content is never stuck hidden.
 */
export function useInView<T extends Element = HTMLElement>(): UseInViewResult<T> {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    return observeOnce(node, () => setInView(true));
    // `inView` intentionally omitted: once true we never re-observe.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}
