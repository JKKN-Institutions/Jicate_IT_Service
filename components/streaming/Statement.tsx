import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { statement } from "@/content/streaming";

/**
 * Statement band — a 2-column intro (statement left at display scale, subheading
 * right), an illustration, and three bold-label feature blurbs. Light Section.
 */
export function Statement() {
  return (
    <Section className="bg-canvas" aria-label="Capture, understand, and act">
      <Container>
        <Reveal className="grid-12 items-start gap-y-l">
          <h2 className="col-span-12 max-w-[20ch] font-display text-display font-normal leading-[1.1] tracking-[-0.02em] text-ink desktop:col-span-6">
            {statement.heading}
          </h2>
          <p className="col-span-12 text-body-lg text-ink-light desktop:col-span-5 desktop:col-start-8">
            {statement.subheading}
          </p>
        </Reveal>

        <Reveal index={1} className="mt-3xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={statement.image}
            alt={statement.alt}
            className="w-full select-none rounded-[6px]"
            draggable={false}
          />
        </Reveal>

        <div className="mt-3xl grid-12 gap-x-l gap-y-2xl">
          {statement.features.map((f, i) => (
            <Reveal
              index={i}
              key={f.title}
              className="col-span-12 flex flex-col gap-xs tablet:col-span-6 desktop:col-span-4"
            >
              <h3 className="text-body-lg font-semibold text-ink">{f.title}</h3>
              <p className="text-body text-ink-light">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Statement;
