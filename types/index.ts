/**
 * Shared, app-wide TypeScript types.
 *
 * Put cross-cutting types here. Co-locate feature-specific types inside
 * their own folder under `features/<feature>`.
 */

/** A generic identifier used across entities. */
export type ID = string;

/** Convenience wrapper for async data states. */
export type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

export * from "./navigation";
export * from "./content";
