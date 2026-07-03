import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { awards } from "@/content/foundry";

import { GiantHeading } from "./parts";

/**
 * Awards — a giant heading, then a four-column grid of award cards, each with a
 * title, source line, and a ↳ link.
 */
export function Awards() {
  return (
    <Section className="bg-canvas" aria-label="Awards">
      <Container>
        <Reveal>
          <GiantHeading size="anchor" className="mb-3xl text-ink">
            {awards.heading}
          </GiantHeading>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-2xl gap-y-2xl tablet:grid-cols-2 desktop:grid-cols-4">
          {awards.items.map((a, i) => (
            <Reveal key={a.title} index={i % 4} className="flex flex-col gap-l">
              <p className="text-[clamp(1.125rem,1rem+0.5vw,1.333rem)] leading-[1.25] text-ink">
                {a.title}
              </p>
              <p className="text-body-sm leading-[1.5] text-ink-light">{a.source}</p>
              <a
                href="#"
                className="group inline-flex items-center gap-xs text-body-sm text-ink underline decoration-ink/30 underline-offset-[5px] transition-colors duration-200 hover:decoration-ink"
              >
                <span aria-hidden className="no-underline">↳</span>
                <span>{a.linkLabel}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Awards;
