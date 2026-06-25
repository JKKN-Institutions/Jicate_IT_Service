import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { futureIntro } from "@/content/data-integration";

import { GiantHeading, InkLink } from "./parts";

/**
 * "The Future of Data Integration." — giant heading + a short lead paragraph,
 * then a wide product screenshot that opens the governance bands below.
 */
export function FutureIntro() {
  return (
    <Section className="!py-[60px]" aria-label="The Future of Data Integration">
      <Container>
        <Reveal className="grid items-end gap-l desktop:grid-cols-[1fr_440px] desktop:gap-[60px]">
          <GiantHeading className="max-w-[12ch]">{futureIntro.title}</GiantHeading>
          <p className="max-w-[42ch] text-body-lg leading-[1.4] text-ink desktop:pb-[10px]">
            {futureIntro.lead}
          </p>
        </Reveal>

        <Reveal className="mt-[60px]">
          <figure className="flex flex-col gap-[20px]">
            <div className="aspect-[16/8] w-full overflow-hidden rounded-[2px] bg-surface-medium">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={futureIntro.image}
                alt={futureIntro.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {futureIntro.imageLink ? (
              <figcaption>
                <InkLink href={futureIntro.imageLink.href}>{futureIntro.imageLink.label}</InkLink>
              </figcaption>
            ) : null}
          </figure>
        </Reveal>
      </Container>
    </Section>
  );
}

export default FutureIntro;
