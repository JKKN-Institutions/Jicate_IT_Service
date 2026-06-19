import { Container, Section, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { testimonials } from "@/content/home";

import { TestimonialRow } from "./TestimonialRow";

/**
 * §7 — Testimonials (design 04 §8, 05 §3.6, 07 §9).
 *
 * Server-component shell: a LIGHT canvas section with a mono eyebrow + heading,
 * wrapping the interactive horizontal scroller (`TestimonialRow`, a client
 * leaf). The eyebrow/heading and the static card markup render on the server;
 * only the scroll/drag controls hydrate.
 *
 * The scroller bleeds to the viewport edge so cards can peek beyond the
 * centered content rail, so the row is rendered outside the `Container`.
 */
export function Testimonials() {
  return (
    <Section tone="light" className="bg-canvas">
      <Reveal>
        <Container>
          <div className="flex flex-col gap-s">
            <Eyebrow size="eyebrow">PROOF</Eyebrow>
            <h2 className="font-display text-headline-lg font-normal text-ink max-w-[20ch]">
              What our partners say about us
            </h2>
          </div>
        </Container>
      </Reveal>

      <TestimonialRow testimonials={testimonials} className="mt-2xl" />
    </Section>
  );
}

export default Testimonials;
