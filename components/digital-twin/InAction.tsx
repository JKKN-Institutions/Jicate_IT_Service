import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { inAction } from "@/content/digital-twin";

import { GiantHeading } from "./parts";

const { video, caseStudy } = inAction;

/**
 * "Digital Twin In Action" — a featured image followed by a written case study
 * with Challenge / Solution columns. Light Section.
 */
export function InAction() {
  return (
    <Section className="bg-canvas" aria-label={inAction.heading}>
      <Container>
        <Reveal>
          <GiantHeading>{inAction.heading}</GiantHeading>
        </Reveal>

        {/* Featured image */}
        <Reveal index={1} className="mt-2xl">
          <div className="relative mx-auto aspect-[16/8] w-[70%] overflow-hidden rounded-[6px] bg-near-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={video.image}
              alt={video.alt}
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
          </div>
        </Reveal>

        {/* Case study */}
        <div className="mt-3xl grid-12 gap-y-2xl">
          <Reveal className="col-span-12 flex flex-col gap-l desktop:col-span-10">
            <h2 className="font-display text-headline-lg font-normal leading-[1.12] tracking-[-0.02em] text-ink">
              {caseStudy.title}
            </h2>
            {caseStudy.intro.map((p) => (
              <p key={p} className="max-w-[64ch] text-body-lg text-ink-light">
                {p}
              </p>
            ))}
          </Reveal>

          {/* Challenge */}
          <Reveal className="col-span-12 flex flex-col gap-s desktop:col-span-6">
            <h3 className="font-mono text-caption uppercase tracking-[0.05em] text-ink">
              {caseStudy.challenge.title}
            </h3>
            <p className="text-body text-ink-light">{caseStudy.challenge.body}</p>
            <ul className="mt-s flex flex-col gap-s">
              {caseStudy.challenge.questions.map((q) => (
                <li key={q} className="flex gap-s text-body text-ink-light">
                  <span aria-hidden className="text-ink/50">
                    ↳
                  </span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Solution */}
          <Reveal
            index={1}
            className="col-span-12 flex flex-col gap-s desktop:col-span-6"
          >
            <h3 className="font-mono text-caption uppercase tracking-[0.05em] text-ink">
              {caseStudy.solution.title}
            </h3>
            {caseStudy.solution.leads.map((p) => (
              <p key={p} className="text-body-lg text-ink">
                {p}
              </p>
            ))}
            <p className="text-body text-ink-light">{caseStudy.solution.outro}</p>
            <ul className="mt-s flex flex-col gap-s">
              {caseStudy.solution.bullets.map((b) => (
                <li key={b.lead} className="flex gap-s text-body text-ink-light">
                  <span aria-hidden className="text-ink/50">
                    ↳
                  </span>
                  <span>
                    <span className="font-medium text-ink">{b.lead}</span> {b.body}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default InAction;
