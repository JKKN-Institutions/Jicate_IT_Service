import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { industries, useCases } from "@/content/marketplace";

import { MidHeading, InkLink } from "./parts";

/**
 * "Industries" + "Example Use Cases" — two side-by-side columns, each a 34px
 * heading over a vertical list (industries as plain items, use cases as links)
 * with `↳` markers (reference parity).
 */
export function IndustriesUseCases() {
  return (
    <Section className="!pt-0 !pb-[100px]" aria-label="Industries and use cases">
      <Container>
        <div className="grid grid-cols-1 gap-x-[60px] gap-y-[48px] desktop:grid-cols-2">
          {/* Industries */}
          <Reveal className="flex flex-col gap-[28px]">
            <MidHeading>{industries.heading}</MidHeading>
            <ul className="flex flex-col gap-[12px]">
              {industries.items.map((item) => (
                <li key={item} className="flex items-baseline gap-[10px] text-body text-ink">
                  <span aria-hidden className="text-ink-light">
                    ↳
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Example Use Cases */}
          <Reveal index={1} className="flex flex-col gap-[28px]">
            <MidHeading>{useCases.heading}</MidHeading>
            <ul className="flex flex-col gap-[12px]">
              {useCases.items.map((item) => (
                <li key={item.label} className="flex items-baseline gap-[10px]">
                  <span aria-hidden className="text-ink-light">
                    ↳
                  </span>
                  <InkLink href={item.href}>{item.label}</InkLink>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default IndustriesUseCases;
