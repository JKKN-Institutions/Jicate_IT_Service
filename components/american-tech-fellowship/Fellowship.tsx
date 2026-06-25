import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { fellowship } from "@/content/american-tech-fellowship";

import { SectionHeading } from "./parts";

/**
 * "The Fellowship" — a section heading, a 2-column description with highlight
 * items, and a wide image (reference parity).
 */
export function Fellowship() {
  return (
    <Section className="!pt-[80px] !pb-[80px]" aria-label="The Fellowship">
      <Container>
        <div className="grid grid-cols-1 gap-x-[60px] gap-y-[40px] desktop:grid-cols-2">
          <Reveal className="flex flex-col gap-[24px]">
            <SectionHeading>{fellowship.heading}</SectionHeading>
            <p className="max-w-[52ch] text-body leading-[1.5] text-ink">{fellowship.body}</p>
            <p className="max-w-[52ch] text-body leading-[1.5] text-ink">{fellowship.bodyTwo}</p>
          </Reveal>

          <Reveal index={1} className="flex flex-col gap-[24px] desktop:pt-[10px]">
            {fellowship.highlights.map((h) => (
              <p key={h.title} className="max-w-[52ch] text-body leading-[1.5] text-ink">
                <span className="font-semibold">{h.title}</span> {h.body}
              </p>
            ))}
          </Reveal>
        </div>

        <Reveal className="mt-[60px] aspect-[16/7] w-full overflow-hidden rounded-[2px] bg-band">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={fellowship.image} alt={fellowship.alt} className="h-full w-full object-cover" loading="lazy" />
        </Reveal>
      </Container>
    </Section>
  );
}

export default Fellowship;
