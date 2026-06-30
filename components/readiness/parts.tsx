import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Giant left-aligned display heading. */
export function GiantHeading({
  as: Tag = "h2",
  size = "anchor",
  className,
  children,
}: {
  as?: ElementType;
  size?: "anchor" | "band";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "font-display font-normal tracking-[-0.02em]",
        size === "anchor" && "text-[clamp(2.25rem,1rem+5.8vw,5.556rem)] leading-[1.15]",
        size === "band" && "text-[clamp(1.875rem,1rem+2.6vw,2.778rem)] leading-[1.0]",
        className,
      )}
    >
      {children}
    </Tag>
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

/** A small triangular play button (static). */
export function PlayButton({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("inline-flex size-[34px] items-center justify-center text-offwhite", className)}
    >
      <svg viewBox="0 0 24 24" className="size-[20px]" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}
