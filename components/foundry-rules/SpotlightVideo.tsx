import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { spotlightBand } from "@/content/foundry-rules";

/**
 * Full-width media band under the hero (reference parity). LIGHT composition: a
 * product image fills the left and a dark-text caption sits on the right, with a
 * small wordmark + copyright line bottom-right.
 */
export function SpotlightVideo() {
  return (
    <section aria-label="Product spotlight" className="pb-[100px]">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 overflow-hidden rounded-[2px] border border-ink/10 bg-canvas desktop:grid-cols-[1fr_320px]">
            {/* Product image */}
            <div className="relative aspect-[16/8] w-full overflow-hidden bg-surface-light desktop:aspect-auto desktop:min-h-[460px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={spotlightBand.image}
                alt={spotlightBand.imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Caption — dark text on light */}
            <div className="flex flex-col justify-between gap-[28px] border-t border-ink/10 p-[28px] desktop:border-l desktop:border-t-0">
              <div className="flex flex-col gap-[14px]">
                <span className="text-body-sm text-ink-light">{spotlightBand.eyebrow}</span>
                <h2 className="font-display text-[clamp(1.5rem,2.4vw,2rem)] font-normal leading-[1.1] tracking-[-0.01em] text-ink">
                  {spotlightBand.title}
                </h2>
                <p className="text-body leading-[1.4] text-ink">{spotlightBand.body}</p>
              </div>

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
