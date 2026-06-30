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
  size?: "section" | "hero" | "anchor" | "band" | "step";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "font-display font-normal tracking-[-0.02em]",
        size === "hero" && "text-[clamp(2.75rem,1rem+8.6vw,7.778rem)] leading-[1.0]",
        size === "anchor" && "text-[clamp(2.25rem,1rem+5.8vw,5.556rem)] leading-[1.15]",
        size === "step" && "text-[clamp(2.25rem,1rem+4vw,4rem)] leading-[1.07]",
        size === "band" && "text-[clamp(1.875rem,1rem+2.6vw,2.778rem)] leading-[1.0]",
        size === "section" && "text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.08]",
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

/** Media placeholder — a neutral block standing in for an unshipped image/logo. */
export function MediaPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("flex w-full items-center justify-center overflow-hidden rounded-[2px] bg-ink/[0.06] p-l text-center", className)}
    >
      <span className="font-mono text-caption uppercase tracking-[0.08em] text-ink/40">{label}</span>
    </div>
  );
}
