import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import type { Capability } from "@/content/digital-twin";

/** Giant left-aligned display heading — the Foundry layout signature. */
export function GiantHeading({
  as: Tag = "h2",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "font-display font-normal leading-[1.02] tracking-[-0.02em] text-ink",
        "text-[clamp(2.25rem,1rem+5.6vw,5rem)]",
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

/** Three-up stack of uppercase-eyebrow capabilities (label + body). */
export function CapabilityColumns({ items }: { items: Capability[] }) {
  return (
    <div className="grid-12 gap-x-l gap-y-2xl">
      {items.map((item, i) => (
        <Reveal
          index={i}
          key={item.label}
          className="col-span-12 flex flex-col gap-s tablet:col-span-6 desktop:col-span-4"
        >
          <h3 className="font-mono text-caption uppercase tracking-[0.05em] text-ink">
            {item.label}
          </h3>
          <p className="text-body-lg text-ink-light">{item.body}</p>
        </Reveal>
      ))}
    </div>
  );
}
