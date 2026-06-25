import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { keyFeatures } from "@/content/titanium";

import { SectionHeading } from "./parts";

/**
 * "Key Features" — a section heading, a wide product screenshot, then a stack of
 * feature entries (bold lead label + body) on the right (reference parity, dark
 * theme).
 */
export function KeyFeatures() {
  return (
    <Section className="!pt-[80px] !pb-[80px]" aria-label="Key Features">
      <Container>
        <Reveal>
          <SectionHeading>{keyFeatures.heading}</SectionHeading>
        </Reveal>

        <div className="mt-[48px] grid grid-cols-1 gap-x-[60px] gap-y-[40px] desktop:grid-cols-2">
          <Reveal className="desktop:sticky desktop:top-[100px] desktop:self-start">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-white/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={keyFeatures.image} alt={keyFeatures.alt} className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>

          <div className="flex flex-col gap-[28px]">
            {keyFeatures.features.map((f, i) => (
              <Reveal key={f.title} index={i}>
                <p className="max-w-[52ch] text-body leading-[1.5] text-white">
                  <span className="font-semibold">{f.title}</span> {f.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default KeyFeatures;
