import { Container, Section, ArrowLink } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { manifesto } from "@/content/home";

/**
 * Section 6 — Value / manifesto band (design/07 §8).
 *
 * A quiet, editorial beat between the case-study proof and the testimonials:
 * a single large statement headline in grey ink-medium, an optional supporting
 * paragraph in full ink, and an optional drill-in link. Calm LIGHT band with
 * generous whitespace; the Reveal wrapper handles the fade + translateY scroll
 * reveal (transform/opacity only, reduced-motion safe).
 *
 * Server Component — no interactivity lives here.
 */
export function ManifestoBand() {
  return (
    <Section tone="light">
      <Reveal>
        <Container className="flex flex-col gap-l">
          <h2 className="font-display text-headline-lg font-normal text-ink-medium max-w-[20ch]">
            {manifesto.statement}
          </h2>

          {manifesto.support ? (
            <p className="text-body text-ink max-w-[48ch]">{manifesto.support}</p>
          ) : null}

          {manifesto.link ? (
            <ArrowLink
              href={manifesto.link.href}
              arrow={manifesto.link.arrow}
              external={manifesto.link.external}
            >
              {manifesto.link.label}
            </ArrowLink>
          ) : null}
        </Container>
      </Reveal>
    </Section>
  );
}

export default ManifestoBand;
