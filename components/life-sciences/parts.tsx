import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Giant left-aligned display heading — the Foundry layout signature. */
export function GiantHeading({
  as: Tag = "h2",
  size = "section",
  className,
  children,
}: {
  as?: ElementType;
  size?: "section" | "hero" | "anchor";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "font-display font-normal tracking-[-0.02em]",
        size === "hero" && "text-[clamp(2.75rem,1rem+8.6vw,7.778rem)] leading-[1.0]",
        size === "anchor" && "text-[clamp(2.25rem,1rem+5.8vw,5.556rem)] leading-[1.15]",
        size === "section" && "text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.08]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Black rounded-square icon with a bracketed-arrow glyph — used on feature rows. */
export function FeatureIcon() {
  return (
    <span className="flex size-[50px] shrink-0 items-center justify-center rounded-[15px] bg-[#1e2124] text-canvas">
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="size-[22px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 4H4v3M17 4h3v3M7 20H4v-3M17 20h3v-3" />
        <path d="M9 15l6-6M10 9h5v5" />
      </svg>
    </span>
  );
}

/** Small mono eyebrow. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("font-mono text-caption uppercase tracking-[0.06em] text-ink-light", className)}>
      {children}
    </span>
  );
}

/** Full-width underlined link row: label left, nudging arrow right. */
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
        "group flex w-full items-center justify-between gap-s border-b border-ink/25 pb-s text-body-lg text-ink transition-colors duration-200 hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
    >
      <span>{children}</span>
      <span aria-hidden className="shrink-0 transition-transform duration-[var(--duration-micro)] group-hover:translate-x-[0.22em] motion-reduce:transform-none">
        →
      </span>
    </a>
  );
}

/** Media placeholder — a neutral block standing in for an unshipped image. */
export function MediaPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("flex w-full items-center justify-center overflow-hidden rounded-[2px] bg-ink/[0.06]", className)}
    >
      <svg aria-hidden viewBox="0 0 24 24" className="size-[40px] text-ink/20" fill="currentColor">
        <path d="M21 5H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V6a1 1 0 00-1-1zm-1 12-4.5-6-3.5 4.5-2.5-3L4 18h16z" />
      </svg>
    </div>
  );
}
