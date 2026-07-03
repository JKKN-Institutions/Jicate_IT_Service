import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { intro } from "@/content/apollo";

/**
 * Intro band (light). Two oversized lead paragraphs offset to the right column,
 * echoing the reference's inset editorial intro.
 */
export function Intro() {
  return (
    <section className="bg-canvas py-[80px] desktop:py-[120px]">
      <Container className="grid gap-l desktop:grid-cols-[0.85fr_1.15fr] desktop:gap-2xl">
        <div aria-hidden className="hidden desktop:block" />
        <Reveal className="flex flex-col gap-l">
          {intro.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-display text-[clamp(1.6rem,2.6vw,2.125rem)]/[1.18] font-normal tracking-[-0.01em] text-ink"
            >
              {p}
            </p>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

export default Intro;
