import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Giant display heading — `anchor` = 100px hero title (lh1.15, -0.02em). */
export function GiantHeading({
  as: Tag = "h1",
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
        "font-display font-normal tracking-[-0.02em] text-[clamp(2.25rem,1rem+5.8vw,5.556rem)] leading-[1.15]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
