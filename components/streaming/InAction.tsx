import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { inAction } from "@/content/streaming";

import { GiantHeading, InkLink } from "./parts";

/**
 * Foundry Streaming in Action — giant heading over two case studies, each a
 * 2-column row: a video on one side and the title, body, link, and a pull-quote
 * on the other. Light Section.
 */
export function InAction() {
  return (
    <Section className="bg-canvas" aria-label={inAction.heading}>
      <Container>
        <Reveal>
          <GiantHeading className="max-w-[16ch]">{inAction.heading}</GiantHeading>
        </Reveal>

        <div className="mt-3xl flex flex-col gap-3xl">
          {inAction.caseStudies.map((study) => (
            <Reveal key={study.title} className="grid-12 items-start gap-y-l">
              <div className="col-span-12 desktop:col-span-6">
                <video
                  className="w-full rounded-[6px] border border-ink/10"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={study.video} />
                </video>
              </div>

              <div className="col-span-12 flex flex-col gap-l desktop:col-span-5 desktop:col-start-8">
                <h3 className="font-display text-headline font-normal leading-[1.18] text-ink">
                  {study.title}
                </h3>
                <p className="text-body-lg text-ink-light">{study.body}</p>
                <InkLink href={study.link.href}>{study.link.label}</InkLink>
                <blockquote className="mt-s flex flex-col gap-s">
                  <p className="font-display text-headline font-normal leading-[1.25] text-ink">
                    “{study.quote}”
                  </p>
                  <footer className="text-body-sm text-ink-light">{study.author}</footer>
                </blockquote>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default InAction;
