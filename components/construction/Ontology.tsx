import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { ontology } from "@/content/construction";

import { BigHeading } from "./parts";

/**
 * "The Construction Ontology" — a two-column split (oversized heading left, a
 * stack of paragraphs right), followed by a full-width isometric diagram.
 */
export function Ontology() {
  return (
    <section aria-label={ontology.heading} className="pt-[100px] desktop:pt-[160px]">
      <Container>
        <Reveal className="grid items-start gap-[40px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
          <BigHeading className="max-w-[10ch]">{ontology.heading}</BigHeading>
          <div className="flex max-w-[46ch] flex-col gap-[24px]">
            {ontology.paragraphs.map((p, i) => (
              <p key={i} className="text-[clamp(1rem,1.25vw,1.125rem)]/[1.389] text-white">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>

      <Container className="mt-[56px] desktop:mt-[80px]">
        <Reveal className="w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ontology.image} alt={ontology.alt} className="h-auto w-full" loading="lazy" />
        </Reveal>
      </Container>
    </section>
  );
}

export default Ontology;
