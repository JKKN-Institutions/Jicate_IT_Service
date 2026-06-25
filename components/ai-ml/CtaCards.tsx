import { Container } from "@/components/ui";
import { ctaCards, ctaHeading } from "@/content/ai-ml";

import { LoopingVideo } from "./LoopingVideo";

/**
 * Closing CTA band (dark).
 *
 * A big centered heading over a muted placeholder glyph, then two dark bordered
 * cards side by side. Each card pairs a left-aligned title with a circular
 * ring-arrow button (top-right), a small looping clip, and a muted body line.
 * The whole card is the link target. Placeholder copy / glyph.
 */
export function CtaCards() {
  return (
    <section className="bg-[#1e1f2b] py-[120px] text-offwhite">
      <Container wide className="flex flex-col items-center gap-2xl">
        <h2 className="max-w-[18ch] text-center font-display text-[clamp(2.5rem,6vw,4rem)] font-normal leading-[1.05] tracking-[-0.04em] text-offwhite">
          {ctaHeading}
        </h2>

        <PlaceholderGlyph className="h-[clamp(3.5rem,7vw,5.5rem)] w-auto text-offwhite/15" />

        <div className="grid w-full gap-l desktop:grid-cols-2">
          {ctaCards.map((card) => (
            <a
              key={card.title}
              href={card.link.href}
              className="group flex min-h-[clamp(18rem,26vw,22rem)] flex-col gap-l border border-offwhite/15 p-l transition-colors duration-200 hover:border-offwhite/45 hover:bg-offwhite/[0.03]"
            >
              <div className="flex items-start justify-between gap-l">
                <h3 className="font-display text-[clamp(1.375rem,2.2vw,1.75rem)] font-normal leading-[1.05] tracking-[-0.0425em] text-offwhite">
                  {card.title}
                </h3>
                <span
                  aria-hidden
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-offwhite/40 text-body-lg transition-all duration-200 group-hover:border-offwhite group-hover:bg-offwhite group-hover:text-near-black"
                >
                  →
                </span>
              </div>

              {/* Looping clip — fills the box (falls back to a muted block). */}
              <div
                aria-hidden
                className="aspect-[16/10] w-[clamp(14rem,28vw,22rem)] overflow-hidden rounded-none bg-offwhite/[0.04]"
              >
                {card.video ? (
                  <LoopingVideo src={card.video} className="h-full w-full object-cover" />
                ) : null}
              </div>

              <p className="mt-auto max-w-[44ch] text-body text-offwhite/55">
                {card.body}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PlaceholderGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden className={className}>
      <path d="M8 6 H40 L66 50 L40 94 H8 L34 50 Z" />
      <path d="M52 6 H84 L58 50 L84 94 H52 L78 50 Z" opacity="0.55" />
    </svg>
  );
}

export default CtaCards;
