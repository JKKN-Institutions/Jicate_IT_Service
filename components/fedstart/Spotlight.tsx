import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { spotlight } from "@/content/fedstart";

import { GiantHeading, MediaPlaceholder } from "./parts";

/**
 * FedStart Spotlight — a giant heading, then a horizontally scrolling rail of
 * announcement cards (category label, image placeholder, and a Read More link).
 */
export function Spotlight() {
  return (
    <Section className="bg-canvas" aria-label={spotlight.heading}>
      <Container>
        <Reveal className="mb-3xl">
          <GiantHeading size="anchor" className="max-w-[20ch]">
            {spotlight.heading}
          </GiantHeading>
        </Reveal>
      </Container>

      <Container>
        <div className="-mx-m flex snap-x snap-mandatory gap-l overflow-x-auto px-m pb-m [scrollbar-width:thin]">
          {spotlight.items.map((item, i) => (
            <Reveal
              key={item.title}
              index={i % 4}
              className="flex w-[300px] shrink-0 snap-start flex-col gap-l tablet:w-[340px]"
            >
              <span className="font-mono text-caption uppercase leading-[1.4] tracking-[0.05em] text-ink-light">
                {item.category}
              </span>
              <MediaPlaceholder label={item.title} className="aspect-[16/10]" />
              <a
                href={item.href}
                className="group flex items-center justify-between gap-s border-b border-ink/25 pb-s text-body text-ink hover:border-ink"
              >
                Read More
                <span aria-hidden className="transition-transform duration-[var(--duration-micro)] group-hover:translate-x-[0.22em]">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Spotlight;
