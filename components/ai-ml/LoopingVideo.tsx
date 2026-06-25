"use client";

import { useEffect, useRef } from "react";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

/**
 * LoopingVideo — generic muted, looping, inline background/product video.
 *
 * Same progressive-enhancement contract as the homepage `HeroVideo`: motion is
 * gated by `useReducedMotion()` (doc 05 §5 — disable autoplay), the `muted` DOM
 * property is set imperatively because React doesn't apply it reliably, and the
 * first decoded frame stays visible if autoplay is refused. Decorative by
 * default (`aria-hidden`); pass a `label` to expose an accessible name instead.
 */
export function LoopingVideo({
  src,
  className,
  label,
  poster,
}: {
  src: string;
  className?: string;
  label?: string;
  poster?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true; // ensure browsers don't block autoplay
    if (reduced) {
      video.pause();
    } else {
      void video.play().catch(() => {
        /* autoplay can be refused; first frame stays visible */
      });
    }
  }, [reduced]);

  return (
    <video
      ref={ref}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      tabIndex={-1}
      autoPlay={!reduced}
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      className={cn("h-full w-full object-cover", className)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default LoopingVideo;
