import { Container } from "@/components/ui";
import { aimlHero } from "@/content/ai-ml";

import { LoopingVideo } from "./LoopingVideo";

/**
 * AI/ML Hero — full-bleed dark media moment.
 *
 * Layout mirrors the reference: a full-bleed product clip fills the section, an
 * oversized wordmark (placeholder geometric mark + letters) anchors the
 * bottom-left, and a column of mono micro-labels sits bottom-right. The fixed
 * transparent SiteHeader overlays the top; the `data-nav-sentinel` at the
 * bottom flips the nav transparent → solid on scroll. Placeholder copy only —
 * swap the mark/wordmark for Jicate branding.
 */
export function AiMlHero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-near-black text-offwhite">
      <LoopingVideo src={aimlHero.video} className="absolute inset-0 -z-10" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-near-black/25" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-near-black via-near-black/55 to-transparent"
      />

      <Container className="flex w-full items-end justify-between gap-l pb-[40px] pt-2xl tablet:pb-[40px]">
        {/* Giant wordmark — placeholder mark + letters. */}
        <div className="flex items-center gap-[0.06em] text-offwhite">
          <PlaceholderMark className="h-[clamp(5rem,18vw,15rem)] w-auto shrink-0" />
          <span className="font-display text-[clamp(5rem,18vw,15rem)] font-normal leading-[0.8] tracking-[-0.05em]">
            {aimlHero.wordmark}
          </span>
        </div>

        {/* Mono micro-label column. */}
        <ul className="hidden shrink-0 flex-col gap-l text-right tablet:flex">
          {aimlHero.metaGroups.map((group, i) => (
            <li
              key={i}
              className="font-mono text-[0.6875rem] font-medium uppercase leading-[1.35] tracking-[0.04em] text-offwhite/85"
            >
              {group.map((line, j) => (
                <span key={j} className="block">
                  {line}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </Container>

      <span
        data-nav-sentinel
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full"
      />
    </section>
  );
}

/**
 * Generic angular placeholder mark — NOT a real brand logo. A bold geometric
 * glyph sized to sit beside the giant wordmark; replace with Jicate's mark.
 */
function PlaceholderMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden className={className}>
      <path d="M8 6 H40 L66 50 L40 94 H8 L34 50 Z" />
      <path d="M52 6 H84 L58 50 L84 94 H52 L78 50 Z" opacity="0.55" />
    </svg>
  );
}

export default AiMlHero;
