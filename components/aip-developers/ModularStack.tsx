import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { modularSection } from "@/content/aip-developers";

/**
 * Modular & interoperable — a vertical tower of isometric SVG "slabs"
 * (Ontology SDK / Ontology / Pipelining / Connectivity) on the left, each with
 * a scroll-revealed caption on the right joined by a thin connector line.
 *
 * Dark Section. The slabs overlap slightly to read as one connected stack.
 * Server shell; captions use the `Reveal` client leaf for the scroll-in fade.
 */
export function ModularStack() {
  return (
    <Section
      id={modularSection.id}
      tone="dark"
      className="overflow-hidden bg-near-black"
      aria-label={modularSection.heading}
    >
      <Container>
        <Reveal>
          <div className="mb-2xl flex max-w-[40ch] flex-col gap-s">
            <h2 className="font-display text-display font-normal leading-[1.05] tracking-[-0.02em] text-offwhite">
              {modularSection.heading}
            </h2>
            <p className="text-body-lg text-offwhite/65">{modularSection.subcopy}</p>
          </div>
        </Reveal>

        <div className="flex flex-col">
          {modularSection.slabs.map((slab, i) => (
            <div
              key={slab.label}
              className={i > 0 ? "-mt-[8%] tablet:-mt-[6%]" : undefined}
            >
              <div className="grid-12 items-center">
                {/* Isometric slab */}
                <div className="col-span-12 desktop:col-span-7">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slab.svg}
                    alt={slab.label}
                    className="w-full select-none"
                    draggable={false}
                  />
                </div>

                {/* Caption with connector */}
                <Reveal
                  index={i}
                  className="col-span-12 flex items-center gap-l desktop:col-span-4 desktop:col-start-9"
                >
                  <span
                    aria-hidden
                    className="hidden h-px w-l shrink-0 bg-offwhite/25 desktop:block"
                  />
                  <p className="text-body text-offwhite/70">{slab.body}</p>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ModularStack;
