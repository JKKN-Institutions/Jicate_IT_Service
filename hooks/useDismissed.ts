"use client";

import { useCallback, useSyncExternalStore } from "react";

export interface UseDismissedResult {
  /** Whether the element has been dismissed (persisted in localStorage). */
  dismissed: boolean;
  /**
   * `false` on the server and during the first hydration render, `true` once
   * running on the client. UI can gate on this to avoid a flash of the element
   * before the persisted value is known.
   */
  hydrated: boolean;
  /** Mark as dismissed and persist the flag. */
  dismiss: () => void;
}

/** Subscribe to cross-tab and same-tab `storage` notifications. */
function subscribe(onChange: () => void): () => void {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

/**
 * Persisted dismissal state, keyed in `localStorage`.
 *
 * Uses `useSyncExternalStore` so the persisted value is read without a
 * synchronous `setState` inside an effect: the server snapshot is always
 * `false` (matches SSR markup), and the client snapshot reads `localStorage`.
 * `dismiss()` writes the flag and dispatches a same-tab `storage` event so the
 * store re-reads and the component re-renders.
 */
export function useDismissed(key: string): UseDismissedResult {
  const dismissed = useSyncExternalStore(
    subscribe,
    () => {
      try {
        return window.localStorage.getItem(key) === "1";
      } catch {
        // localStorage may be unavailable (private mode, disabled).
        return false;
      }
    },
    () => false,
  );

  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const dismiss = useCallback(() => {
    try {
      window.localStorage.setItem(key, "1");
    } catch {
      // Persisting is best-effort.
    }
    // `storage` only fires in *other* tabs; notify this tab's subscribers too.
    window.dispatchEvent(new StorageEvent("storage", { key }));
  }, [key]);

  return { dismissed, hydrated, dismiss };
}
