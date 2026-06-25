import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { sdkSection } from "@/content/aip-developers";

import { MediaFrame, FeatureCards } from "./parts";

/**
 * "SDK for your Business" — the operational data model → generated SDK story.
 * Big heading, two captioned looping clips, a six-up feature grid, and three
 * outbound link cards. Dark Section.
 */
export function SdkSection() {
  return (
    <Section
      id={sdkSection.id}
      tone="dark"
      className="bg-near-black"
      aria-label={sdkSection.heading}
    >
      <Container>
        <Reveal>
          <h2 className="max-w-[20ch] font-display text-display font-normal leading-[1.05] tracking-[-0.02em] text-offwhite">
            {sdkSection.heading}
          </h2>
        </Reveal>

        <div className="mt-2xl grid-12 gap-y-2xl">
          {sdkSection.steps.map((step) => (
            <Reveal
              key={step.caption}
              className="col-span-12 flex flex-col gap-s desktop:col-span-6"
            >
              <p className="text-body-lg text-offwhite/80">{step.caption}</p>
              <MediaFrame src={step.video} />
            </Reveal>
          ))}
        </div>

        <div className="mt-3xl">
          <FeatureCards cards={sdkSection.cards} variant="mono" cols={3} />
        </div>

        <div className="mt-3xl grid-12 gap-y-l">
          {sdkSection.links.map((link, i) => (
            <Reveal
              index={i}
              key={link.title}
              className="col-span-12 tablet:col-span-4"
            >
              <a
                href={link.href}
                className="group flex h-full flex-col gap-xs border border-offwhite/15 p-l transition-colors duration-200 hover:border-offwhite/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offwhite"
              >
                <span className="flex items-center justify-between gap-s font-display text-headline font-normal text-offwhite">
                  {link.title}
                  <span
                    aria-hidden
                    className="transition-transform duration-[var(--duration-micro)] group-hover:translate-x-[0.22em] motion-reduce:transform-none"
                  >
                    ↗
                  </span>
                </span>
                <span className="text-body-sm text-offwhite/60">{link.body}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default SdkSection;
