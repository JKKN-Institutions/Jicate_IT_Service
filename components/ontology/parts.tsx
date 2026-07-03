import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Purple accent for this page (measured from the reference: rgb 150,126,255). */
export const ACCENT = "#967EFF";
export const ACCENT_STRONG = "#7C5CFF";

/**
 * Giant display heading.
 * - `anchor` = 100px hero title (lh1.15, -0.02em)
 * - `band`   = 50px centered section statements (lh1.08, -0.025em)
 */
export function GiantHeading({
  as: Tag = "h2",
  size = "band",
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
        "font-display font-normal",
        size === "anchor" && "text-[clamp(2.25rem,1rem+5.8vw,5.556rem)] leading-[1.15] tracking-[-0.02em]",
        size === "band" && "text-[clamp(1.75rem,1rem+2.4vw,2.778rem)] leading-[1.08] tracking-[-0.025em]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/**
 * StackedVisual — renders an array of layer images absolutely inset within an
 * aspect-ratio box. The layers share the reference's export frame, so overlaying
 * them (all `object-contain`) reproduces the composite diagram's settled state.
 */
export function StackedVisual({
  layers,
  aspect,
  alt = "",
  className,
}: {
  layers: string[];
  aspect: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full", className)} style={{ aspectRatio: aspect }}>
      {layers.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : ""}
          aria-hidden={i === 0 ? undefined : true}
          className="absolute inset-0 h-full w-full object-contain"
          loading="lazy"
        />
      ))}
    </div>
  );
}
