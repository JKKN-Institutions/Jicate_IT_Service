import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Giant heading — Space Grotesk, ~100px desktop, -0.02em tracking, 1.15
 * line-height (reference parity). All major section titles on this page use
 * this scale. Line-height is baked into the size token so tailwind-merge can't
 * strip a standalone `leading-*` class.
 */
export function GiantHeading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Tag
      className={cn(
        "font-display font-normal tracking-[-0.02em] text-ink",
        "text-[clamp(2.5rem,6.95vw,5.5556rem)]/[1.15]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Inked underlined text link with a trailing arrow (reference affordance). */
export function InkLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-baseline gap-[0.4em] text-ink underline decoration-ink/30 decoration-1 underline-offset-[3px] transition-colors duration-[var(--duration-micro-fast)] hover:decoration-ink",
        className,
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="transition-transform duration-[var(--duration-micro-fast)] group-hover:translate-x-[0.18em] motion-reduce:transform-none"
      >
        →
      </span>
    </a>
  );
}
