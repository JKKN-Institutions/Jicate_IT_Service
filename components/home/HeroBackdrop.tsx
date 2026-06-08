"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

/**
 * HeroBackdrop — original animated "engineered grid / server-room" backdrop
 * for the Hero (design/07 §5, design/05 §3.3, design/06 motifs).
 *
 * Pure CSS, no media assets: layered over near-black `#202426` we paint
 *   1. a soft blue (`#4e8af7`, the lone dark-context accent) radial glow, and
 *   2. a thin engineered grid (two crossed `repeating-linear-gradient`s, the
 *      hairline-weight motif) that drifts slowly via `background-position`.
 * Only `background-position` animates — cheap, GPU-friendly, no layout/paint.
 *
 * Motion is progressive enhancement: `useReducedMotion()` (and the global
 * reduced-motion CSS guard) render a single static frame with no animation.
 * The whole layer is decorative — `aria-hidden` — and fills its positioned
 * parent (the Hero applies `absolute inset-0 -z-10`).
 */
export function HeroBackdrop({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  // 24px engineered grid: two crossed hairline lines in faint off-white.
  const gridLine = "rgba(239,239,239,0.05)";
  const grid = `repeating-linear-gradient(to right, ${gridLine} 0 1px, transparent 1px 48px), repeating-linear-gradient(to bottom, ${gridLine} 0 1px, transparent 1px 48px)`;

  // Soft blue glow (top-left bias) + a cooler secondary bloom, over near-black.
  const glow =
    "radial-gradient(60% 55% at 22% 18%, rgba(78,138,247,0.28) 0%, rgba(78,138,247,0.10) 38%, transparent 72%), radial-gradient(45% 40% at 82% 88%, rgba(78,138,247,0.12) 0%, transparent 70%)";

  return (
    <div
      aria-hidden
      data-hero-backdrop
      className={cn("pointer-events-none absolute inset-0 overflow-hidden bg-near-black", className)}
    >
      {/* Engineered grid plane — drifts diagonally; static under reduced motion. */}
      <div
        className={cn(
          "absolute inset-0",
          !reduced && "motion-safe:animate-[hero-grid-drift_28s_linear_infinite]",
        )}
        style={{
          backgroundImage: grid,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(120% 120% at 50% 30%, #000 35%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(120% 120% at 50% 30%, #000 35%, transparent 100%)",
        }}
      />

      {/* Soft blue glow — the only permitted color accent in the hero. */}
      <div
        className={cn(
          "absolute inset-0",
          !reduced && "motion-safe:animate-[hero-glow-pulse_9s_ease-in-out_infinite]",
        )}
        style={{ backgroundImage: glow }}
      />

      {/* Local keyframes — transform/opacity & background-position only, so they
          stay compositor-cheap. Scoped here to keep globals.css untouched. */}
      <style>{`
        @keyframes hero-grid-drift {
          from { background-position: 0 0, 0 0; }
          to   { background-position: 48px 48px, 48px 48px; }
        }
        @keyframes hero-glow-pulse {
          0%, 100% { opacity: 0.85; }
          50%      { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-hero-backdrop] * { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

export default HeroBackdrop;
