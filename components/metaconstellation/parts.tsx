import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Giant left-aligned display heading on the dark band.
 * `size="hero"` is the largest scale; "section" is the default. */
export function GiantHeading({
  as: Tag = "h2",
  size = "section",
  className,
  children,
}: {
  as?: ElementType;
  size?: "section" | "hero";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "font-display font-normal tracking-[-0.02em] text-offwhite",
        size === "hero"
          ? "text-[clamp(2.5rem,1rem+6.4vw,6rem)] leading-[1.0]"
          : "text-[clamp(2rem,1rem+4.4vw,4rem)] leading-[1.05]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Full-width underlined link row on dark: label left, nudging arrow right. */
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
        "group flex w-full items-center justify-between gap-s border-b border-offwhite/25 pb-s text-body-lg text-offwhite transition-colors duration-200 hover:border-offwhite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offwhite",
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

/** Numbered section divider — "01 /" in mono, used above each major heading. */
export function SectionIndex({ index }: { index: string }) {
  return (
    <p className="flex items-center gap-xs font-mono text-body-sm text-offwhite/45">
      <span className="text-offwhite">{index}</span>
      <span aria-hidden>/</span>
    </p>
  );
}
