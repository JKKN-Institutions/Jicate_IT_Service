import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { spotlightBand } from "@/content/marketplace";

/**
 * Full-width media band under the hero (reference parity). On the reference this
 * is a single full-width product screenshot (its caption text is baked into the
 * image) with a "Play Video" affordance at the bottom-left — there is NO
 * separate caption column. The poster (Asset_27Marketplace) isn't shipped in
 * /public/marketplace, so the screenshot area is a neutral light placeholder —
 * drop a real <video>/poster in later without touching layout.
 */
export function SpotlightVideo() {
  return (
    <section aria-label="Product spotlight" className="pb-[100px]">
      <Container>
        <Reveal>
          <div className="relative isolate w-full overflow-hidden rounded-[2px] border border-ink/10 bg-surface-light">
            <div className="aspect-[1.87/1] w-full">
              <div aria-hidden className="absolute inset-0 bg-[linear-gradient(160deg,#fbfbfb_0%,#f1f1f1_100%)]" />
            </div>

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
        </Reveal>
      </Container>
    </section>
  );
}

export default SpotlightVideo;
