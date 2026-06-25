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
  size?: "section" | "hero";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "font-display font-normal tracking-[-0.02em] text-ink",
        size === "hero"
          ? "text-[clamp(2.5rem,1rem+6.4vw,6rem)] leading-[1.0]"
          : "text-[clamp(2.25rem,1rem+5.6vw,5.5rem)] leading-[1.02]",
        className,
      )}
    >
      {children}
    </Tag>
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
      <span
        aria-hidden
        className="shrink-0 transition-transform duration-[var(--duration-micro)] group-hover:translate-x-[0.22em] motion-reduce:transform-none"
      >
        →
      </span>
    </a>
  );
}

/** A leading "↳" arrow item — label only, used in the "Solves For" lists. */
export function ArrowItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-start gap-s text-ink", className)}>
      <span aria-hidden className="select-none text-ink-light">
        ↳
      </span>
      <span>{children}</span>
    </div>
  );
}
