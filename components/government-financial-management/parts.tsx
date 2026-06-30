import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Dark-theme heading helpers for the Government Financial Management page (white
 * text on the rgb(30,33,36) background). Line-height is baked into the size
 * token so tailwind-merge can't strip a standalone `leading-*` class.
 */

/** Giant heading — ~100px desktop, -0.02em tracking, 1.15 line-height. */
export function GiantHeading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Tag
      className={cn(
        "font-display font-normal tracking-[-0.02em] text-white",
        "text-[clamp(2.5rem,6.95vw,6.25rem)]/[1.15]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Sub heading — ~34px desktop, normal tracking, 1.176 line-height. */
export function SubHeading({
  children,
  className,
  as: Tag = "h3",
}: {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3" | "p";
}) {
  return (
    <Tag
      className={cn(
        "font-display font-normal tracking-normal text-white",
        "text-[clamp(1.6rem,2.36vw,2.125rem)]/[1.176]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Numbered section eyebrow — "01 /". */
export function NumberLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("font-mono text-[clamp(0.95rem,1.1vw,1.125rem)] text-white/45", className)}>
      {children} /
    </span>
  );
}

/** Full-width underlined link row: label left, nudging arrow right. */
export function InkLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={cn(
        "group flex w-full items-center justify-between gap-s border-b border-white/25 pb-s text-body-lg text-white transition-colors duration-200 hover:border-white",
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
