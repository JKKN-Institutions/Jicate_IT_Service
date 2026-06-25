import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { waysToReach } from "@/content/contact";
import type { ReachItem } from "@/content/contact";

import { GiantHeading } from "./parts";

function ReachBlock({ item, index }: { item: ReachItem; index: number }) {
  return (
    <Reveal index={index} className="flex flex-col gap-l">
      <h2 className="font-display text-display font-normal leading-[1.08] tracking-[-0.02em] text-ink">
        {item.category}
      </h2>
      <a
        href={item.link.href}
        className="group flex items-center justify-between gap-s border-b border-ink/20 pb-s text-body-lg text-ink transition-colors duration-200 hover:text-ink-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span>{item.link.label}</span>
        <span
          aria-hidden
          className="shrink-0 transition-transform duration-[var(--duration-micro)] group-hover:translate-x-[0.22em] motion-reduce:transform-none"
        >
          →
        </span>
      </a>
    </Reveal>
  );
}

/**
 * Ways to Reach Us — giant heading over a 2-column grid of contact routes. Each
 * block is a display-scale category heading with an underlined link beneath.
 * Items fill the left column first, then the right (column-major). Light.
 */
export function WaysToReach() {
  const mid = Math.ceil(waysToReach.items.length / 2);
  const left = waysToReach.items.slice(0, mid);
  const right = waysToReach.items.slice(mid);

  return (
    <Section className="bg-canvas" aria-label={waysToReach.heading}>
      <Container>
        <Reveal>
          <GiantHeading>{waysToReach.heading}</GiantHeading>
        </Reveal>

        <div className="mt-3xl grid-12 gap-x-l gap-y-3xl">
          <div className="col-span-12 flex flex-col gap-3xl desktop:col-span-5">
            {left.map((item, i) => (
              <ReachBlock key={item.category} item={item} index={i} />
            ))}
          </div>
          <div className="col-span-12 flex flex-col gap-3xl desktop:col-span-5 desktop:col-start-7">
            {right.map((item, i) => (
              <ReachBlock key={item.category} item={item} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default WaysToReach;
