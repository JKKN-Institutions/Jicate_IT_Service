import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { softwareStatement } from "@/content/home";

/**
 * Big software statement band (reference: the centered editorial line that sits
 * above "Our Software"). A single large, centered statement; the `highlight`
 * fragment ("AI-driven") is rendered in muted grey, the rest in ink.
 *
 * Server Component — static. The Reveal wrapper handles the scroll-in fade.
 */
export function StatementBand() {
  return (
    <Section tone="light" className="bg-canvas" aria-label="What our software does">
      <Reveal>
        <Container>
          <p className="mx-auto max-w-[24ch] text-center font-display text-headline-lg font-normal leading-[1.08] tracking-[-0.02em] text-ink">
            {softwareStatement.before}
            <span className="text-ink-light">{softwareStatement.highlight}</span>
            {softwareStatement.after}
          </p>
        </Container>
      </Reveal>
    </Section>
  );
}

export default StatementBand;
