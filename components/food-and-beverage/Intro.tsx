import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { intro } from "@/content/food-and-beverage";

/**
 * "The Platform for Food and Beverage" — a 2-column band: a sticky-feeling image
 * on the left, the heading and intro paragraphs stacked on the right.
 */
export function Intro() {
  return (
    <Section className="bg-canvas" aria-label={intro.heading}>
      <Container>
        <div className="grid grid-cols-1 gap-x-2xl gap-y-2xl desktop:grid-cols-2">
          <Reveal>
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-ink/[0.06] desktop:sticky desktop:top-[130px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={intro.image} alt={intro.imageAlt} className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>

          <div className="flex flex-col gap-l">
            <Reveal>
              <h2 className="font-display text-[clamp(1.75rem,1rem+3vw,3rem)] font-normal leading-[1.06] tracking-[-0.02em] text-ink">
                {intro.heading}
              </h2>
            </Reveal>
            <Reveal index={1} className="flex flex-col gap-l">
              {intro.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="text-body leading-[1.55] text-ink">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Intro;
