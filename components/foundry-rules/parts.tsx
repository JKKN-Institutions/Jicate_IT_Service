import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Giant heading — Space Grotesk, ~100px desktop, -0.02em tracking, 1.15
 * line-height (reference parity). Used for the hero and the closing form
 * heading. Line-height is baked into the size token so tailwind-merge can't
 * strip a standalone `leading-*` class.
 */
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
        "font-display font-normal tracking-[-0.02em] text-ink",
        "text-[clamp(2.5rem,6.95vw,5.5556rem)]/[1.15]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Section heading — ~50px desktop, 1.0 line-height (Key Features / How It Works / Applications). */
export function SectionHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-display font-normal tracking-[-0.02em] text-ink",
        "text-[clamp(2.1rem,4.4vw,2.7778rem)]/[1.0]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

/** Inked underlined text link with a trailing arrow (reference affordance). */
export function InkLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
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
        ↳
      </span>
    </a>
  );
}
