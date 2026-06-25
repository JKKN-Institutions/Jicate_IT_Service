import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Dark-theme heading helpers for the Titanium page (white text on the
 * rgb(30,33,36) background). Line-height is baked into the size token so
 * tailwind-merge can't strip a standalone `leading-*` class.
 */

/** Giant heading — ~100px desktop, -0.02em tracking, 1.15 line-height. */
export function GiantHeading({
  children,
  className,
  as: Tag = "h1",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Tag
      className={cn(
        "font-display font-normal tracking-[-0.02em] text-white",
        "text-[clamp(2.5rem,6.95vw,5.5556rem)]/[1.15]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Section heading — ~50px desktop, 1.0 line-height. */
export function SectionHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-display font-normal tracking-[-0.02em] text-white",
        "text-[clamp(2.1rem,4.4vw,2.7778rem)]/[1.0]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

/** Block heading — ~34px (the "↳ …" sub-section titles). */
export function BlockHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-display font-normal tracking-normal text-white",
        "text-[clamp(1.5rem,2.4vw,1.8889rem)]/[1.176]",
        className,
      )}
    >
      {children}
    </h2>
  );
}
