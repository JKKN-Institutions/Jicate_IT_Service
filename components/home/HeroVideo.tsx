"use client";

import { useEffect, useRef } from "react";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

/**
 * HeroVideo — full-bleed looping background video for the Hero.
 *
 * Self-hosted MP4 from `/public/hero` (Next.js videos guide): a muted,
 * looping, inline `<video>` that covers the section. It's purely decorative
 * (`aria-hidden`, no captions/controls), so it sits behind the darkening
 * overlay and the hero copy.
 *
 * Motion is progressive enhancement (doc 05 §5 — "disable autoplay" under
 * reduced motion): `useReducedMotion()` gates autoplay. With motion OK the
 * clip plays; otherwise it's paused on its first frame. The `muted` DOM
 * property is also set imperatively in an effect because React doesn't apply
 * the `muted` attribute reliably, and browsers block autoplay on un-muted
 * video. The near-black section background shows through until the first
 * frame decodes, so there's never a flash of empty color.
 */
export function HeroVideo({ className }: { className?: string }) {
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
      aria-hidden
      tabIndex={-1}
      autoPlay={!reduced}
      muted
      loop
      playsInline
      preload="auto"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full object-cover",
        className,
      )}
    >
      <source src="/hero/website-reel.mp4" type="video/mp4" />
    </video>
  );
}

export default HeroVideo;
