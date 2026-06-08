import Image from "next/image";

import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
}

/**
 * Jicate brand logo — the official "Jicate Solutions Private Limited" wordmark
 * (green leaf mark + wordmark), served from `/public`.
 *
 * Rendered at a fixed height with auto width to preserve the 300×127 aspect
 * ratio; `priority` because it sits in the always-visible header. The raster
 * keeps its brand colors in both nav states (it no longer inherits the nav
 * text color the way the previous inline SVG did).
 */
export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/jicate-logo.png"
      alt="Jicate Solutions Private Limited"
      width={300}
      height={127}
      priority
      className={cn("h-9 w-auto", className)}
    />
  );
}
