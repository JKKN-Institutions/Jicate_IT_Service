import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

/** 100px display heading (Alliance No.2 → font-display), used by the hero. */
export function GiantHeading({
  as: Tag = "h1",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "font-display font-normal tracking-[-0.02em] text-ink text-[clamp(2.5rem,1rem+5.8vw,5.556rem)] leading-[1.15]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** 10px uppercase display eyebrow (e.g. "01/", "01 — Compliance…"). */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "block font-display text-[10px] uppercase leading-[1.6] tracking-[0.05em] text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
