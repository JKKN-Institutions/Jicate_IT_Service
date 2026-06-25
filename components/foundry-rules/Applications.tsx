import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { applications, type UseCase } from "@/content/foundry-rules";

import { SectionHeading } from "./parts";

/**
 * "Applications" — a section heading, a two-column grid of use-cases (bold title
 * + body), and a wide product screenshot (reference parity).
 */
export function Applications() {
  return (
    <Section className="!pt-0 !pb-[100px]" aria-label="Applications">
      <Container>
        <Reveal>
          <SectionHeading>{applications.heading}</SectionHeading>
        </Reveal>

        <div className="mt-[48px] grid grid-cols-1 items-start gap-x-[60px] gap-y-[40px] desktop:grid-cols-2">
          {/* Use-case list — single column, left */}
          <div className="flex flex-col gap-[28px]">
            {applications.useCases.map((u, i) => (
              <Reveal key={u.title} index={i}>
                <UseCaseItem item={u} />
              </Reveal>
            ))}
          </div>

          {/* Image — right */}
          <Reveal index={1} className="overflow-hidden rounded-[2px] bg-band">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={applications.image} alt={applications.alt} className="h-full w-full object-cover" loading="lazy" />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function UseCaseItem({ item }: { item: UseCase }) {
  return (
    <div className="flex items-baseline gap-[10px]">
      <span aria-hidden className="text-ink-light">
        ↳
      </span>
      <p className="max-w-[52ch] text-body leading-[1.45] text-ink">
        <span className="font-semibold">{item.title}</span> {item.body}
      </p>
    </div>
  );
}

export default Applications;
