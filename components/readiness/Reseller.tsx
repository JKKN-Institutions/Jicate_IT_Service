import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { reseller } from "@/content/readiness";

import { InkLink } from "./parts";

/**
 * Reseller band — a co-brand line and a short note on public-sector availability
 * through authorized reseller partners.
 */
export function Reseller() {
  return (
    <Section className="bg-canvas" aria-label="Reseller">
      <Container>
        <Reveal className="grid grid-cols-1 items-start gap-x-2xl gap-y-l desktop:grid-cols-12">
          <div className="flex items-center gap-m desktop:col-span-3">
            <span className="font-display text-body-lg font-semibold text-ink">{reseller.brandA}</span>
            <span aria-hidden className="text-ink-light">•</span>
            <span className="font-mono text-caption uppercase tracking-[0.06em] text-ink-light">
              {reseller.brandB}
            </span>
          </div>
          <div className="flex flex-col gap-l desktop:col-span-6 desktop:col-start-4">
            <p className="text-body leading-[1.5] text-ink">{reseller.body}</p>
            <p className="text-body leading-[1.5] text-ink-light">{reseller.note}</p>
          </div>
          <div className="desktop:col-span-3">
            <InkLink href="#" className="text-body">
              {reseller.link}
            </InkLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Reseller;
