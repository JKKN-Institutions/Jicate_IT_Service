import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Dark-theme heading helpers for the Construction page (white text on the
 * rgb(30,33,36) background). Line-height is baked into the size token so
 * tailwind-merge can't strip a standalone `leading-*` class.
 */

/** Hero heading — ~140px desktop, -0.015em tracking, 1.0 line-height. */
export function HeroHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h1
      className={cn(
        "font-display font-normal tracking-[-0.015em] text-white",
        "text-[clamp(3rem,9.72vw,8.75rem)]/[1.0]",
        className,
      )}
    >
      {children}
    </h1>
  );
}

/** Form heading — ~100px desktop, -0.02em tracking, 1.15 line-height. */
export function FormHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-display font-normal tracking-[-0.02em] text-white",
        "text-[clamp(2.5rem,6.95vw,6.25rem)]/[1.15]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

/** Big section heading — ~72px desktop, -0.02em tracking, 1.194 line-height. */
export function BigHeading({
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
        "text-[clamp(2.4rem,5vw,4.5rem)]/[1.194]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** Step heading — ~72px desktop, tighter -0.03em tracking, 1.07 line-height. */
export function StepHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h3
      className={cn(
        "font-display font-normal tracking-[-0.03em] text-white",
        "text-[clamp(2.4rem,5vw,4.5rem)]/[1.07]",
        className,
      )}
    >
      {children}
    </h3>
  );
}

/** Mid heading — ~50px desktop, -0.02em tracking, 1.0 line-height. */
export function MidHeading({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-display font-normal tracking-[-0.02em] text-white",
        "text-[clamp(2rem,3.47vw,3.125rem)]/[1.0]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

/** Feature heading — ~34px desktop, normal tracking, 1.176 line-height. */
export function FeatureHeading({
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
        "group inline-flex items-baseline gap-[0.4em] text-white underline decoration-white/30 decoration-1 underline-offset-[3px] transition-colors duration-[var(--duration-micro-fast)] hover:decoration-white",
        className,
      )}
    >
      <span aria-hidden className="text-white/60 transition-transform duration-[var(--duration-micro-fast)] group-hover:translate-x-[0.12em] motion-reduce:transform-none">
        ↳
      </span>
      <span>{children}</span>
    </a>
  );
}
