import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { keyFeatures } from "@/content/foundry-rules";

import { SectionHeading, InkLink } from "./parts";

/**
 * "Key Features" — a section heading, then a 2-column split: a sticky product
 * image on the left and a stack of feature entries (bold lead phrase + body) on
 * the right, with a trailing Foundry Ontology link (reference parity).
 */
export function KeyFeatures() {
  return (
    <Section className="!pt-0 !pb-[100px]" aria-label="Key Features">
      <Container>
        <Reveal>
          <SectionHeading>{keyFeatures.heading}</SectionHeading>
        </Reveal>

        <div className="mt-[48px] grid grid-cols-1 gap-x-[60px] gap-y-[40px] desktop:grid-cols-2">
          <Reveal className="desktop:sticky desktop:top-[100px] desktop:self-start">
            <div className="aspect-[1.13/1] w-full overflow-hidden rounded-[2px] bg-band">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={keyFeatures.image} alt={keyFeatures.alt} className="h-full w-full object-contain" loading="lazy" />
            </div>
          </Reveal>

          <div className="flex flex-col gap-[36px]">
            {keyFeatures.features.map((f, i) => (
              <Reveal key={f.title} index={i}>
                <div className="flex flex-col gap-[12px]">
                  <h3 className="text-body font-semibold leading-[1.35] text-ink">{f.title}</h3>
                  <p className="max-w-[52ch] text-body leading-[1.45] text-ink">{f.body}</p>
                </div>
              </Reveal>
            ))}
            <Reveal index={keyFeatures.features.length}>
              <InkLink href={keyFeatures.ontologyLink.href}>{keyFeatures.ontologyLink.label}</InkLink>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default KeyFeatures;
