import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * GiantHeading — the reference's display heads.
 * `anchor` = 100px / 115px (Alliance No.2 → font-display), used by the hero
 * H1 and every section title. `statement` = 50px / 50px, used by each
 * "What We Do" row title.
 */
export function GiantHeading({
  as: Tag = "h2",
  size = "anchor",
  className,
  children,
}: {
  as?: ElementType;
  size?: "anchor" | "statement";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "font-display font-normal tracking-[-0.02em] text-ink",
        size === "anchor" &&
          "text-[clamp(2.5rem,1rem+5.8vw,5.556rem)] leading-[1.15]",
        size === "statement" &&
          "text-[clamp(1.75rem,1rem+2.8vw,2.778rem)] leading-[1.0]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** 16px uppercase display-font eyebrow (e.g. "01 /"). */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "block font-display text-[16px] uppercase leading-[1.43] text-ink-light",
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * ArrowLink — a compact text link with a nudging arrow, matching the
 * reference "Our Platforms →" rows.
 */
export function ArrowLink({
  href,
  children,
  external,
  className,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(
        "group inline-flex items-start gap-xs text-[18px] leading-[1.39] text-ink underline decoration-ink/30 underline-offset-[5px] transition-colors duration-200 hover:decoration-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="shrink-0 no-underline transition-transform duration-[var(--duration-micro)] group-hover:translate-x-[0.22em] motion-reduce:transform-none"
      >
        →
      </span>
    </a>
  );
}
