import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { intro } from "@/content/secure-collaboration";

/**
 * Intro — an offset two-column block: a big statement and supporting body in the
 * left columns, and an abstract image in the right columns. Top divider rule.
 */
export function Intro() {
  return (
    <section className="bg-[#1e2124]" aria-label="Overview">
      <Container>
        <div className="border-t border-offwhite/15" />
      </Container>
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-x-2xl gap-y-2xl desktop:grid-cols-12">
            <Reveal className="flex flex-col gap-l desktop:col-span-5 desktop:col-start-2">
              <p className="text-[clamp(1.5rem,1rem+1.4vw,1.889rem)] leading-[1.2] text-offwhite">
                {intro.statement}
              </p>
              <p className="text-body leading-[1.5] text-offwhite/65">{intro.body}</p>
            </Reveal>

            <Reveal index={1} className="desktop:col-span-5 desktop:col-start-8">
              <div className="aspect-[16/9] w-full overflow-hidden bg-offwhite/[0.04]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={intro.image} alt={intro.imageAlt} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </section>
  );
}

export default Intro;
