import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { exampleIndustries, exampleUseCases } from "@/content/dynamic-scheduling";

import { SectionHeading } from "./parts";

/**
 * Reusable "Example …" band: a section heading on the left and a two-column
 * bulleted list of items on the right (reference parity).
 */
function ExampleList({ heading, items }: { heading: string; items: string[] }) {
  return (
    <Section className="!pt-0 !pb-[100px]" aria-label={heading}>
      <Container>
        <div className="grid grid-cols-1 gap-x-[60px] gap-y-[32px] desktop:grid-cols-[1fr_1fr]">
          <Reveal>
            <SectionHeading>{heading}</SectionHeading>
          </Reveal>
          <Reveal index={1}>
            <ul className="grid grid-cols-1 gap-x-[40px] gap-y-[14px] tablet:grid-cols-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-[10px] border-b border-ink/12 pb-[12px] text-body text-ink"
                >
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

export function ExampleIndustries() {
  return <ExampleList heading={exampleIndustries.heading} items={exampleIndustries.items} />;
}

export function ExampleUseCases() {
  return <ExampleList heading={exampleUseCases.heading} items={exampleUseCases.items} />;
}

export default ExampleIndustries;
