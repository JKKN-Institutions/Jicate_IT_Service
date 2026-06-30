import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { work } from "@/content/financial-services";

import { GiantHeading, SectionHeading, SubHeading } from "./parts";

/**
 * "Where We Work" — a giant heading, then per business area: a 50px title with
 * a tagline, and a list of capability rows (boxed icon + title on the left, a
 * description on the right), separated by hairlines (reference parity).
 */
export function WhereWeWork() {
  return (
    <Section aria-label={work.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <GiantHeading>{work.heading}</GiantHeading>

          <div className="mt-[64px] flex flex-col gap-[96px]">
            {work.areas.map((area) => (
              <Reveal key={area.title}>
                {/* Area header */}
                <div className="grid grid-cols-1 gap-[24px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
                  <SectionHeading>{area.title}</SectionHeading>
                  <SubHeading className="max-w-[24ch]">{area.tagline}</SubHeading>
                </div>

                {/* Feature rows */}
                <div className="mt-[48px] flex flex-col">
                  {area.features.map((f) => (
                    <div
                      key={f.title}
                      className="grid grid-cols-1 gap-[24px] border-t border-ink/15 py-[36px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]"
                    >
                      <div className="flex items-center gap-[20px]">
                        <span
                          aria-hidden
                          className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[10px] bg-ink text-canvas"
                        >
                          <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <h3 className="font-display text-[clamp(1.125rem,1.4vw,1.25rem)]/[26px] tracking-normal text-ink">
                          {f.title}
                        </h3>
                      </div>
                      <p className="text-body leading-[1.5] text-ink">{f.body}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default WhereWeWork;
