import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { finalCTA } from "@/content/aip-developers";

/**
 * Final CTA — a full-width sign-up bar. The whole row is the click target; the
 * arrow nudges right on hover (reduced-motion keeps the color affordance only).
 */
export function FinalCTA() {
  return (
    <Section id={finalCTA.id} className="!py-0" aria-label={finalCTA.heading}>
      <Reveal>
        <a
          href={finalCTA.href}
          className="group flex items-center justify-between gap-l bg-[#5b51e5] px-l py-2xl text-offwhite transition-colors duration-200 hover:bg-[#4a40d4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offwhite tablet:px-2xl"
        >
          <span className="flex flex-col gap-xs">
            <span className="font-display text-display font-normal leading-[1.05] tracking-[-0.02em]">
              {finalCTA.heading}
            </span>
            <span className="text-body-lg text-offwhite/80">{finalCTA.subcopy}</span>
          </span>
          <span
            aria-hidden
            className="shrink-0 font-display text-display leading-none transition-transform duration-[var(--duration-micro)] group-hover:translate-x-[0.22em] motion-reduce:transform-none"
          >
            →
          </span>
        </a>
      </Reveal>
    </Section>
  );
}

export default FinalCTA;
