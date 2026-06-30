"use client";

import { useEffect, useRef } from "react";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

/**
 * LoopVideo — muted, looping, inline background video (hero). The `muted` DOM
 * property is set imperatively (React doesn't apply it reliably) and autoplay is
 * gated by reduced-motion. No `type` hint so the browser infers from the file
 * extension (.mov / .mp4) rather than being told the wrong container.
 */
export function LoopVideo({ src, className }: { src: string; className?: string }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    if (reduced) video.pause();
    else void video.play().catch(() => {});
  }, [reduced]);

  return (
    <video
      ref={ref}
      aria-hidden
      tabIndex={-1}
      autoPlay={!reduced}
      muted
      loop
      playsInline
      preload="metadata"
      className={cn("h-full w-full object-cover", className)}
    >
      <source src={src} />
    </video>
  );
}

/**
 * CaseVideo — a standard player with native controls for the Impact case-study
 * clips. No `type` hint so the browser infers the container from the extension.
 */
export function CaseVideo({ src, className, label }: { src: string; className?: string; label?: string }) {
  return (
    <video
      controls
      playsInline
      preload="metadata"
      aria-label={label}
      className={cn("h-full w-full bg-ink object-cover", className)}
    >
      <source src={src} />
    </video>
  );
}
