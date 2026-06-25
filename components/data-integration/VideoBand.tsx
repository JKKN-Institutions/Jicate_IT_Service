import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { videoBand } from "@/content/data-integration";

/**
 * Full-width dark media card (reference parity). The product clip itself isn't
 * shipped in /public/data-integration, so this renders the exact card chrome —
 * brand breadcrumb (top-left), product tag (top-right), a centered play
 * affordance, and the speaker caption (bottom-left) — over a near-black poster.
 * Drop a real <video>/poster in later without touching layout.
 */
export function VideoBand() {
  return (
    <section aria-label="Product walkthrough" className="pb-[60px]">
      <Container>
        <Reveal>
          <div className="relative isolate aspect-[16/7] w-full overflow-hidden rounded-[4px] bg-near-black text-offwhite">
            {/* Poster wash — replace with real video frame when available. */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_75%_30%,#3a4047_0%,#202426_55%,#15181a_100%)]"
            />

            {/* top-left brand breadcrumb */}
            <div className="absolute left-[28px] top-[24px] flex items-center gap-[8px] font-display text-[1.05rem] tracking-[-0.01em]">
              <span aria-hidden className="inline-block h-[14px] w-[14px] rounded-full border-[2px] border-offwhite" />
              {videoBand.brand}
            </div>

            {/* top-right product tag */}
            <div className="absolute right-[28px] top-[24px] font-mono text-caption uppercase tracking-[0.12em] text-offwhite/80">
              {videoBand.tag}
            </div>

            {/* centered play button */}
            <button
              type="button"
              aria-label={videoBand.playLabel}
              className="absolute left-1/2 top-1/2 flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-offwhite/95 text-near-black transition-transform duration-[var(--duration-micro)] hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-[22px] w-[22px] translate-x-[1px]" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            {/* speaker caption */}
            <div className="absolute bottom-[26px] left-[28px]">
              <div className="font-display text-[clamp(1.5rem,3vw,2.4rem)] font-normal leading-[1.05] tracking-[-0.01em]">
                {videoBand.speaker}
              </div>
              <div className="mt-[6px] flex items-center gap-[8px] font-display text-[clamp(1.1rem,2vw,1.6rem)] leading-[1.05] text-offwhite/85">
                <span aria-hidden className="inline-block h-[9px] w-[9px] rounded-full bg-offwhite/85" />
                {videoBand.role}
              </div>
            </div>

            {/* play-video label bottom-right */}
            <div className="absolute bottom-[26px] right-[28px] font-mono text-caption uppercase tracking-[0.12em] text-offwhite/80">
              ▷ {videoBand.playLabel}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default VideoBand;
