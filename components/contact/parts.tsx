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
