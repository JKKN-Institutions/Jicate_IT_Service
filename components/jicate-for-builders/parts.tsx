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
  size?: "section" | "hero" | "anchor" | "banner";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "font-display font-normal tracking-[-0.02em] text-ink",
        size === "hero" && "text-[clamp(2.5rem,1rem+6.4vw,6rem)] leading-[1.0]",
        size === "banner" && "text-[clamp(2.25rem,1rem+4.6vw,4.5rem)] leading-[1.04]",
        size === "anchor" && "text-[clamp(2.25rem,1rem+5.2vw,5rem)] leading-[1.03]",
        size === "section" && "text-[clamp(1.75rem,1rem+3vw,3rem)] leading-[1.08]",
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

const ICON_PATHS: Record<string, ReactNode> = {
  cloud: <path d="M6 17a4 4 0 010-8 5 5 0 019.6-1.5A3.5 3.5 0 0117 17H6z" />,
  chart: (
    <>
      <rect x="4" y="13" width="3" height="6" rx="0.5" />
      <rect x="10.5" y="9" width="3" height="10" rx="0.5" />
      <rect x="17" y="5" width="3" height="14" rx="0.5" />
    </>
  ),
  llm: <path d="M12 3l2.4 5.4L20 9l-4 3.8 1 5.7L12 16l-5 2.5 1-5.7L4 9l5.6-.6L12 3z" />,
  agent: (
    <>
      <rect x="6" y="8" width="12" height="9" rx="1.5" />
      <circle cx="9.5" cy="12.5" r="1.2" fill="#fff" />
      <circle cx="14.5" cy="12.5" r="1.2" fill="#fff" />
      <path d="M12 4v4M9 4h6" />
    </>
  ),
  decision: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" stroke="#fff" strokeWidth="1.6" fill="none" />
    </>
  ),
};

/** Purple rounded-square infrastructure icon. */
export function InfraIcon({ icon }: { icon: string }) {
  return (
    <span className="flex size-[44px] items-center justify-center rounded-[8px] bg-[#6E56CF] text-white">
      <svg viewBox="0 0 24 24" className="size-[24px]" fill="currentColor" aria-hidden>
        {ICON_PATHS[icon]}
      </svg>
    </span>
  );
}
