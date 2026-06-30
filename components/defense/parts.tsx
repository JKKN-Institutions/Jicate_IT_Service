import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Dark-theme heading helpers for the Defense page (white text on the
 * rgb(30,33,36) background). Line-height is baked into the size token so
 * tailwind-merge can't strip a standalone `leading-*` class.
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

/** Section heading — ~50px desktop, -0.02em tracking, 1.0 line-height. */
export function SectionHeading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "font-display font-normal tracking-[-0.02em] text-white",
        "text-[clamp(2rem,3.47vw,3.125rem)]/[1.0]",
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
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3";
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

/** Inked underlined text link with a trailing arrow (light-on-dark). */
export function InkLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-baseline gap-[0.4em] text-white transition-colors duration-[var(--duration-micro-fast)]",
        className,
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="transition-transform duration-[var(--duration-micro-fast)] group-hover:translate-x-[0.18em] motion-reduce:transform-none"
      >
        →
      </span>
    </a>
  );
}
