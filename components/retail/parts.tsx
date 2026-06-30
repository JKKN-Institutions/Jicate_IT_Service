import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Light-theme heading helpers for the Retail page (ink text on white).
 * Line-height is baked into the size token so tailwind-merge can't strip a
 * standalone `leading-*` class.
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
        "font-display font-normal tracking-[-0.02em] text-ink",
        "text-[clamp(2.5rem,6.95vw,6.25rem)]/[1.15]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Section heading — ~50px desktop, -0.02em tracking, 1.0 line-height. */
export function SectionHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-display font-normal tracking-[-0.02em] text-ink",
        "text-[clamp(2rem,3.47vw,3.125rem)]/[1.0]",
        className,
      )}
    >
      {children}
    </h2>
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
        "font-display font-normal tracking-normal text-ink",
        "text-[clamp(1.6rem,2.36vw,2.125rem)]/[1.176]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Eyebrow — 10px uppercase mono label. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn("font-mono text-[10px] uppercase leading-[16px] tracking-[0.05em] text-ink-light", className)}
    >
      {children}
    </span>
  );
}

/** Full-width underlined link row: label left, nudging arrow right. */
export function InkLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={cn(
        "group flex w-full items-center justify-between gap-s border-b border-ink/25 pb-s text-body-lg text-ink transition-colors duration-200 hover:border-ink",
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
