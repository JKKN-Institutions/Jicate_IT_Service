import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { closing } from "@/content/aip-developers";

/**
 * Closing statement — large editorial copy on a dark band. The headline splits
 * on "/" into two lines; an emphasis line highlights the "zero to prototype" /
 * "prototype to production" fragments.
 */
export function Closing() {
  const [line1, line2] = closing.heading.split(" / ");

  return (
    <Section tone="dark" className="bg-near-black" aria-label="Why we built AIP">
      <Container>
        <Reveal>
          <h2 className="max-w-[24ch] font-display text-headline-lg font-normal leading-[1.12] tracking-[-0.02em] text-offwhite">
            <span className="block">{line1}</span>
            <span className="block text-offwhite/45">{line2}</span>
          </h2>
        </Reveal>

        <Reveal index={1} className="mt-2xl flex max-w-[60ch] flex-col gap-l text-body-lg text-offwhite/70">
          {closing.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>
            {closing.emphasis.before}
            <span className="text-offwhite">{closing.emphasis.a}</span>
            {closing.emphasis.mid}
            <span className="text-offwhite">{closing.emphasis.b}</span>
            {closing.emphasis.after}
          </p>
          <p className="text-offwhite">{closing.tagline}</p>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Closing;
