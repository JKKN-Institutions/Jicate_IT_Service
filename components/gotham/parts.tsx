import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

/** The near-black surface the reference dark sections sit on. */
export const DARK = "#1e2124";
/** The off-white surface the "Discover" band + capability stepper sit on. */
export const LIGHT = "#f9f9f9";

/**
 * Micro label row used across the page — 18px uppercase, dimmed. Three cells:
 * left / center / right (e.g. SOFTWARE · { GOTHAM } · GET STARTED).
 */
export function BandLabels({ items, className }: { items: string[]; className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between text-[clamp(12px,1.1vw,18px)] uppercase tracking-[0.02em] text-white/70",
        className,
      )}
    >
      {items.map((it) => (
        <span key={it}>{it}</span>
      ))}
    </div>
  );
}

/** 10px uppercase decorative caption. */
export function MicroLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("text-[10px] uppercase leading-[1.2] tracking-[0.04em] text-white/70", className)}>
      {children}
    </span>
  );
}

/**
 * DisplayTitle — the reference's big Alliance-No.1 display heads.
 * `bleed` = 120px full-bleed section titles (white).
 * `card`  = 72px capability card titles.
 * `cta`   = 72px CTA line.
 */
export function DisplayTitle({
  as: Tag = "h2",
  size = "bleed",
  className,
  children,
}: {
  as?: ElementType;
  size?: "bleed" | "card" | "cta";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "font-display font-normal",
        size === "bleed" &&
          "text-[clamp(2.75rem,8.3vw,6.667rem)] leading-[1.04] tracking-[-0.04em]",
        size === "card" &&
          "text-[clamp(2rem,5vw,4rem)] leading-[1.07] tracking-[-0.03em]",
        size === "cta" &&
          "text-[clamp(2rem,5vw,4rem)] leading-[1.04] tracking-[-0.04em]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
