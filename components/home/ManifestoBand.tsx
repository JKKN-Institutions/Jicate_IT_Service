import { Section, Button } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { manifesto } from "@/content/home";

/**
 * Section 6 — Value / manifesto band (design/07 §8; reference: the Palantir
 * two-up "There is so much left to build" band).
 *
 * A grey (#efefef) full-bleed frame holds an inset two-up card: a dark
 * photographic image on the left and a WHITE panel on the right, split ~50/50
 * with a gap that lets the grey show between them. The panel content — a large
 * ink statement, a support line, and a small outlined "LEARN MORE" button — is
 * centered on both axes. Stacks vertically on mobile/tablet (image on top).
 * The Reveal wrapper handles the fade + translateY scroll reveal (transform/
 * opacity only, reduced-motion safe).
 *
 * Server Component — no interactivity lives here. The image is an external CDN
 * asset, so a plain <img> is used (no next/image), matching ProductCarousel.
 */
export function ManifestoBand() {
  return (
    <Section tone="light" className="bg-band !py-0" aria-label={manifesto.statement}>
      <Reveal>
        {/* Inset card on the grey frame: 30px side rails + ~72px vertical, a
            50px gap between the two halves so the #efefef shows through. */}
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-s px-s py-[clamp(48px,6vw,72px)] tablet:px-[30px] desktop:flex-row desktop:gap-[50px]">
          {/* Image — left half (stretches to the panel height on desktop) */}
          {manifesto.image ? (
            <div className="relative min-h-[15rem] bg-near-black desktop:min-h-[500px] desktop:flex-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={manifesto.image}
                alt={manifesto.imageAlt ?? ""}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : null}

          {/* White panel — right half, content centered on both axes */}
          <div className="flex flex-col items-center justify-center gap-l bg-canvas px-l py-2xl text-center desktop:min-h-[500px] desktop:flex-1 desktop:px-[50px]">
            <h2 className="max-w-[16ch] font-display text-headline-lg font-normal leading-[1.04] tracking-[-0.025em] text-ink">
              {manifesto.statement}
            </h2>

            {manifesto.support ? (
              <p className="max-w-[26ch] text-[clamp(1.1111rem,0.6rem+1.6vw,1.4444rem)] leading-[1.1] tracking-[-0.01em] text-ink">
                {manifesto.support}
              </p>
            ) : null}

            {manifesto.link ? (
              <Button
                href={manifesto.link.href}
                className="rounded-[4px] px-[18px] py-[6px] text-[0.6667rem] uppercase tracking-[0.04em]"
              >
                {manifesto.link.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export default ManifestoBand;
