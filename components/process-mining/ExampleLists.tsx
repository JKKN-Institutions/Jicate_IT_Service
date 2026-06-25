import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { exampleIndustries, exampleUseCases } from "@/content/process-mining";

import { ArrowItem } from "./parts";

function Column({ heading, items, index }: { heading: string; items: string[]; index: number }) {
  return (
    <Reveal index={index} className="col-span-12 flex flex-col gap-l desktop:col-span-6">
      <h2 className="font-display text-display font-normal leading-[1.08] tracking-[-0.02em] text-ink">
        {heading}
      </h2>
      <ul className="flex flex-col gap-m">
        {items.map((item) => (
          <ArrowItem key={item}>{item}</ArrowItem>
        ))}
      </ul>
    </Reveal>
  );
}

/** Example Industries and Example Use Cases — two columns side by side. Light. */
export function ExampleLists() {
  return (
    <Section className="bg-canvas" aria-label="Example industries and use cases">
      <Container>
        <div className="grid-12 gap-x-l gap-y-2xl">
          <Column heading={exampleIndustries.heading} items={exampleIndustries.items} index={0} />
          <Column heading={exampleUseCases.heading} items={exampleUseCases.items} index={1} />
        </div>
      </Container>
    </Section>
  );
}

export default ExampleLists;
