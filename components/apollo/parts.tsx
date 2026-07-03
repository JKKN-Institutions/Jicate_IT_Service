import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Apollo display heading. `size` picks a reference-measured scale; `leading-*`
 * is baked into the clamp so tailwind-merge can't strip it.
 */
export function GiantHeading({
  children,
  className,
  size = "section",
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  size?: "hero" | "giant" | "section" | "statement";
  as?: "h1" | "h2" | "h3";
}) {
  const scale = {
    // ~64px hero title ("Apollo")
    hero: "text-[clamp(2.75rem,5vw,4rem)]/[1.05] tracking-[-0.02em]",
    // ~120px giant word ("environments")
    giant: "text-[clamp(3.5rem,9vw,7.5rem)]/[1.0] tracking-[-0.03em]",
    // ~48px section heading
    section: "text-[clamp(2rem,3.6vw,3rem)]/[1.08] tracking-[-0.02em]",
    // ~64px statement heading
    statement: "text-[clamp(2.5rem,5vw,4rem)]/[1.08] tracking-[-0.02em]",
  }[size];

  return (
    <Tag className={cn("font-display font-normal text-ink", scale, className)}>
      {children}
    </Tag>
  );
}

/**
 * Dimmed "↳ Label" drill-in link — underlined, brightens on hover.
 */
export function SubLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-start gap-[0.4em] text-[clamp(1rem,1.25vw,1.125rem)]/[1.3] text-ink-light underline decoration-ink/25 underline-offset-[3px] transition-colors duration-200 hover:text-ink hover:decoration-ink",
        className,
      )}
    >
      <span aria-hidden className="not-italic">↳</span>
      <span>{children}</span>
    </a>
  );
}
