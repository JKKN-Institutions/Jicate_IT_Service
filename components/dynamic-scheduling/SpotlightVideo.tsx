import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { spotlightBand } from "@/content/dynamic-scheduling";

/**
 * Full-width media band under the hero (reference parity). The reference is a
 * LIGHT composition: a product screenshot fills the left, a dark-text caption
 * sits on the right, a "Play Video" affordance anchors the bottom-left, and a
 * small wordmark + copyright line sits bottom-right. The product poster isn't
 * shipped in /public/dynamic-scheduling, so the screenshot area is a neutral
 * light placeholder — drop a real <video>/poster in later without touching
 * layout.
 */
export function SpotlightVideo() {
  return (
    <section aria-label="Product spotlight" className="pb-[100px]">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 overflow-hidden rounded-[2px] border border-ink/10 bg-canvas desktop:grid-cols-[1fr_320px]">
            {/* Screenshot / poster area */}
            <div className="relative aspect-[16/8] w-full overflow-hidden bg-surface-light desktop:aspect-auto desktop:min-h-[460px]">
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(160deg,#fbfbfb_0%,#f1f1f1_100%)]"
              />
              {/* play button + label, bottom-left */}
              <div className="absolute bottom-[24px] left-[24px] flex items-center gap-[16px]">
                <button
                  type="button"
                  aria-label={spotlightBand.playLabel}
                  className="flex h-[48px] w-[48px] items-center justify-center rounded-[2px] bg-near-black text-offwhite transition-transform duration-[var(--duration-micro)] hover:scale-105"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px] translate-x-[1px]" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <span className="text-body text-ink">{spotlightBand.playLabel}</span>
              </div>
            </div>

            {/* Caption — dark text on light */}
            <div className="flex flex-col justify-between gap-[28px] border-t border-ink/10 p-[28px] desktop:border-l desktop:border-t-0">
              <div className="flex flex-col gap-[14px]">
                <span className="text-body-sm text-ink-light">{spotlightBand.eyebrow}</span>
                <h2 className="font-display text-[clamp(1.8rem,2.8vw,2.4rem)] font-normal leading-[1.05] tracking-[-0.01em] text-ink">
                  {spotlightBand.title}
                </h2>
                <span aria-hidden className="text-body-lg text-ink-light">
                  ↳
                </span>
                <p className="text-body leading-[1.4] text-ink">{spotlightBand.body}</p>
              </div>

              {/* wordmark + copyright */}
              <div className="flex flex-col gap-[8px]">
                <span className="font-display text-body-lg font-medium tracking-[-0.01em] text-ink">
                  {spotlightBand.wordmark}
                </span>
                <span className="text-[0.6111rem] leading-[1.4] text-ink-light">{spotlightBand.copyright}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default SpotlightVideo;
