import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { advantage } from "@/content/defense";

import { GiantHeading, SectionHeading, InkLink } from "./parts";

/**
 * "The Software Advantage" — a giant title, a two-column split (a 50px
 * link-heading left, a lead paragraph right), then a centered sub-heading with
 * a link and a full-width supporting image (reference parity).
 */
export function SoftwareAdvantage() {
  return (
    <section aria-label={advantage.title} className="pt-[80px] desktop:pt-[120px]">
      <Container>
        <Reveal>
          <GiantHeading as="h1">{advantage.title}</GiantHeading>
        </Reveal>

        <Reveal className="mt-[64px] grid grid-cols-1 gap-[40px] desktop:mt-[96px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
          <SectionHeading className="max-w-[16ch]">
            <a href={advantage.linkHref} className="group inline transition-colors">
              {advantage.linkHeading}{" "}
              <span aria-hidden className="inline-block transition-transform group-hover:translate-x-[0.12em]">
                →
              </span>
            </a>
          </SectionHeading>
          <p className="max-w-[24ch] text-[clamp(1.6rem,2.36vw,2.125rem)]/[1.176] text-white">{advantage.body}</p>
        </Reveal>
      </Container>

      <Container className="mt-[100px] desktop:mt-[160px]">
        <Reveal className="flex flex-col items-center gap-[28px] text-center">
          <SectionHeading className="max-w-[20ch]">{advantage.edgeHeading}</SectionHeading>
          <InkLink href={advantage.edgeLink.href}>{advantage.edgeLink.label}</InkLink>
        </Reveal>
      </Container>

      <Container className="mt-[56px] desktop:mt-[80px]">
        <Reveal className="aspect-[16/7] w-full overflow-hidden rounded-[4px] bg-white/[0.08]">
          {advantage.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={advantage.image} alt={advantage.imageAlt} className="h-full w-full object-cover" loading="lazy" />
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}

export default SoftwareAdvantage;
