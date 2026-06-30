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
        "font-display font-normal tracking-[-0.02em] text-ink",
        size === "hero" && "text-[clamp(2.5rem,1rem+6.4vw,6rem)] leading-[1.0]",
        size === "anchor" && "text-[clamp(2.25rem,1rem+5.2vw,5rem)] leading-[1.03]",
        size === "section" && "text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.06]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Full-width underlined link row: label left, nudging arrow right. */
export function ReadLink({
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
        "group flex w-full items-center justify-between gap-s border-b border-ink/20 pb-m text-body-lg text-ink transition-colors duration-200 hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
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

/** A leading "↳" Read More link. */
export function ReadMore({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-s text-body text-ink underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span aria-hidden className="text-ink-light">↳</span>
      Read More
    </a>
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

/** Media placeholder — a neutral block standing in for an unshipped image/video. */
export function MediaPlaceholder({
  label,
  play,
  className,
}: {
  label: string;
  play?: boolean;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("flex w-full items-center justify-center overflow-hidden rounded-[2px] bg-ink/[0.06]", className)}
    >
      {play ? (
        <span aria-hidden className="flex size-[44px] items-center justify-center rounded-full border border-ink/40 text-ink">
          ▶
        </span>
      ) : (
        <svg aria-hidden viewBox="0 0 24 24" className="size-[40px] text-ink/20" fill="currentColor">
          <path d="M21 5H3a1 1 0 00-1 1v12a1 1 0 001 1h18a1 1 0 001-1V6a1 1 0 00-1-1zm-1 12-4.5-6-3.5 4.5-2.5-3L4 18h16z" />
        </svg>
      )}
    </div>
  );
}
