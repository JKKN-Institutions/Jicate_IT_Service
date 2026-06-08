import { Arrow, Grid, Section } from "@/components/ui";
import { splitCTA } from "@/content/home";
import { cn } from "@/lib/utils";
import type { SplitCTAHalf } from "@/types";

/**
 * Section 8 — Big split CTA (design/07 §10, design/04 §7).
 *
 * Full-bleed two-up row: a LIGHT half (band `#efefef`, ink text) and a DARK
 * half (near-black, off-white text). Each half is a single large link with a
 * big grotesque label, optional sublabel, and a right-aligned `→` glyph.
 *
 * Server Component — no interactivity. Hover/focus are CSS-only; the arrow
 * nudge is gated with `motion-reduce:transform-none` so the reduced-motion
 * path keeps the color/opacity affordance without movement. The whole half is
 * the click target; the `→` is decorative (`aria-hidden`).
 */
export function SplitCTA() {
  return (
    <Section className="!py-0" aria-label="Choose your next step">
      <Grid className="gap-0">
        {splitCTA.map((half) => (
          <SplitCTAPanel key={half.href} half={half} />
        ))}
      </Grid>
    </Section>
  );
}

function SplitCTAPanel({ half }: { half: SplitCTAHalf }) {
  const isDark = half.tone === "dark";

  return (
    <a
      href={half.href}
      className={cn(
        "group relative col-span-12 flex min-h-[clamp(18rem,32vw,26rem)] items-center justify-between gap-l p-3xl transition-colors duration-200 desktop:col-span-6",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        isDark
          ? "bg-near-black text-offwhite hover:bg-[#272b2e] focus-visible:outline-offwhite"
          : "bg-band text-ink hover:bg-accent-5-opaque focus-visible:outline-accent",
      )}
    >
      <span className="flex flex-col gap-xs">
        <span className="font-display text-display font-normal tracking-[-0.0425em]">
          {half.label}
        </span>
        {half.sublabel ? (
          <span
            className={cn(
              "text-body-sm",
              isDark ? "text-offwhite/70" : "text-ink-medium",
            )}
          >
            {half.sublabel}
          </span>
        ) : null}
      </span>

      <Arrow
        kind="big"
        className={cn(
          "shrink-0 text-display leading-none transition-transform duration-[var(--duration-micro-fast)] ease-[var(--ease-standard)] group-hover:translate-x-[0.22em] motion-reduce:transform-none",
          isDark && "text-blue",
        )}
      />
    </a>
  );
}
