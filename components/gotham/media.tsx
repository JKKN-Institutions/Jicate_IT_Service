"use client";

import { useEffect, useRef } from "react";

/**
 * LoopVideo — muted, autoplaying, looping background/card video. Honours
 * prefers-reduced-motion by pausing. NO `type` hint on <source> so the
 * browser infers the codec (matches the scraped .mp4 assets reliably).
 */
export function LoopVideo({
  src,
  className,
  style,
}: {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      v.pause();
      return;
    }
    v.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      style={style}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      aria-hidden
    >
      <source src={src} />
    </video>
  );
}

export default LoopVideo;
