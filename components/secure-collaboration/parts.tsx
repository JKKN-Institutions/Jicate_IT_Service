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

/** Underlined link row on a dark surface: label left, nudging arrow right. */
export function DarkLink({
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
        "group flex items-center justify-between gap-s border border-offwhite/30 px-l py-m text-body text-offwhite transition-colors duration-200 hover:border-offwhite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
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
      className={cn("inline-flex size-[34px] items-center justify-center rounded-full border border-offwhite/50 text-offwhite", className)}
    >
      <svg viewBox="0 0 24 24" className="size-[14px] translate-x-[1px]" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}
