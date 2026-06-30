import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * GiantHeading — left-aligned display heading (Foundry layout signature).
 * `hero`/`anchor` map to the reference's 100px display heads; `statement` is
 * the 50px hero sub-statement; `section` is the 34px body-font heading.
 */
export function GiantHeading({
  as: Tag = "h2",
  size = "anchor",
  className,
  children,
}: {
  as?: ElementType;
  size?: "anchor" | "statement" | "section";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        size === "anchor" &&
          "font-display font-normal tracking-[-0.02em] text-[clamp(2.5rem,1rem+5.8vw,5.556rem)] leading-[1.15]",
        size === "statement" &&
          "font-display font-normal tracking-[-0.02em] text-[clamp(1.75rem,1rem+2.8vw,2.778rem)] leading-[1.0]",
        size === "section" &&
          "font-normal tracking-[-0.005em] text-[clamp(1.625rem,1rem+1.9vw,2.125rem)] leading-[1.18]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Small mono eyebrow / caption label. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "font-mono text-[12px] uppercase tracking-[0.06em] text-ink-light",
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * InkLink — full-width underlined link row: label left, nudging arrow right.
 * Matches the reference "Download the Whitepaper →" / "Learn more →" rows.
 */
export function InkLink({
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
        "group flex w-full items-center justify-between gap-s border-b border-ink/25 pb-s text-[16px] text-ink transition-colors duration-200 hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="shrink-0 transition-transform duration-[var(--duration-micro)] group-hover:translate-x-[0.22em] motion-reduce:transform-none"
      >
        →
      </span>
    </a>
  );
}
