import { Section, Button } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { manifesto } from "@/content/home";

/**
 * Section 6 — Value / manifesto band (design/07 §8; reference: the two-up
 * "There is so much left to build" band).
 *
 * Full-bleed two-column split: a dark photographic image flush to the left
 * edge, and a text panel on the right — large ink statement, a muted support
 * line, and a bordered "LEARN MORE" button. Stacks vertically on mobile
 * (image on top). The Reveal wrapper handles the fade + translateY scroll
 * reveal (transform/opacity only, reduced-motion safe).
 *
 * Server Component — no interactivity lives here. The image is an external CDN
 * asset, so a plain <img> is used (no next/image), matching ProductCarousel.
 */
export function ManifestoBand() {
  return (
    <Section tone="light" className="!py-0" aria-label={manifesto.statement}>
      <Reveal>
        <div className="grid items-stretch desktop:grid-cols-2">
          {/* Image — bleeds to the left edge */}
          {manifesto.image ? (
            <div className="relative min-h-[16rem] bg-near-black desktop:min-h-[34rem]">
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

          {/* Text panel */}
          <div className="flex flex-col justify-center gap-l px-l py-2xl tablet:px-2xl">
            <h2 className="font-display text-headline-lg font-normal text-ink max-w-[14ch]">
              {manifesto.statement}
            </h2>

            {manifesto.support ? (
              <p className="text-body text-ink-medium max-w-[40ch]">
                {manifesto.support}
              </p>
            ) : null}

            {manifesto.link ? (
              <div>
                <Button
                  href={manifesto.link.href}
                  className="uppercase tracking-[0.05em]"
                >
                  {manifesto.link.label}
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export default ManifestoBand;
