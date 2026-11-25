import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { industries } from "@/content/marketplace";

import { MidHeading } from "./parts";

/**
 * "Industries" — a 34px heading over a vertical list with `↳` markers.
 */
export function IndustriesUseCases() {
  return (
    <Section className="!pt-0 !pb-[100px]" aria-label="Industries">
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

        </div>
      </Container>
    </Section>
  );
}

export default IndustriesUseCases;
