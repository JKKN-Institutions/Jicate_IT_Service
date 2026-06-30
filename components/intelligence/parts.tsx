import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Dark-theme heading helpers for the Intelligence page (white text on the
 * rgb(30,33,36) background). Line-height is baked into the size token so
 * tailwind-merge can't strip a standalone `leading-*` class.
 */

/** Giant heading — ~100px desktop, -0.02em tracking, 1.15 line-height. */
export function GiantHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h1
      className={cn(
        "font-display font-normal tracking-[-0.02em] text-white",
        "text-[clamp(2.5rem,6.95vw,6.25rem)]/[1.15]",
        className,
      )}
    >
      {children}
    </h1>
  );
}

/** Block heading — ~20px desktop, normal tracking, 1.3 line-height. */
export function BlockHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-display font-normal tracking-normal text-white",
        "text-[clamp(1.125rem,1.4vw,1.25rem)]/[1.3]",
        className,
      )}
    >
      {children}
    </h2>
  );
}
