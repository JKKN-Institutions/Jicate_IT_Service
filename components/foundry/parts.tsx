import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Giant left-aligned display heading.
 * - `anchor` = 100px hero / section heads (Alliance No.2, lh1.15, -0.02em)
 * - `band`   = 50px sub-section heads (lh1.0, -0.02em)
 */
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
        size === "band" && "text-[clamp(1.75rem,1rem+2.4vw,2.778rem)] leading-[1.02]",
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

/** Inline underlined text link with a nudging arrow. */
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
        "group inline-flex items-center gap-s text-body text-ink underline decoration-ink/30 underline-offset-[6px] transition-colors duration-200 hover:decoration-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="shrink-0 no-underline transition-transform duration-[var(--duration-micro)] group-hover:translate-x-[0.22em] motion-reduce:transform-none"
      >
        →
      </span>
    </a>
  );
}

/** Full-width row: label left, arrow right, ruled top border. */
export function ArrowRow({
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
        "group flex items-center justify-between gap-m border-t border-ink/20 py-l text-[clamp(1.125rem,1rem+0.5vw,1.333rem)] text-ink transition-colors duration-200 hover:text-ink-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
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

/** Media placeholder — a neutral block standing in for an unshipped image. */
export function MediaPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex w-full items-center justify-center overflow-hidden rounded-[2px] bg-ink/[0.06] p-l text-center",
        className,
      )}
    >
      <span className="font-mono text-caption uppercase tracking-[0.08em] text-ink/40">{label}</span>
    </div>
  );
}
