"use client";

import { useState } from "react";

import { Container, Section } from "@/components/ui";
import { cn } from "@/lib/utils";
import { realTimeOntology as r } from "@/content/streaming";

/**
 * Real-Time Ontology — giant heading, an illustration, and a numbered accordion
 * ([01]/[02]/[03]). The open item ([01] by default) reveals its body and any
 * sub-feature blurbs. Client Component for the accordion state.
 */
export function RealTimeOntology() {
  const [open, setOpen] = useState(r.accordion[0].index);

  return (
    <Section className="bg-canvas" aria-label={r.heading}>
      <Container>
        <h2 className="font-display text-display font-normal leading-[1.05] tracking-[-0.02em] text-ink">
          {r.heading}
        </h2>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={r.image}
          alt={r.alt}
          className="mt-2xl w-full select-none rounded-[6px]"
          draggable={false}
        />

        <div className="mt-2xl border-t border-ink/15">
          {[...r.accordion].reverse().map((item) => {
            const isOpen = open === item.index;
            return (
              <div key={item.index} className="border-b border-ink/15">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? "" : item.index)}
                  className="flex w-full items-center gap-s py-l text-left font-display text-headline-lg font-normal leading-[1.1] tracking-[-0.02em] text-ink transition-colors hover:text-ink-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span className="text-ink-light">[{item.index}]</span>
                  <span className="flex-1">{item.title}</span>
                  <span aria-hidden className="text-headline">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div className={cn("overflow-hidden", isOpen ? "block" : "hidden")}>
                  <div className="flex flex-col gap-2xl pb-2xl">
                    <p className="max-w-[64ch] text-body-lg text-ink-light">{item.body}</p>
                    {item.features?.length ? (
                      <div className="grid-12 gap-x-l gap-y-xl">
                        {item.features.map((f) => (
                          <div
                            key={f.title}
                            className="col-span-12 flex flex-col gap-s desktop:col-span-4"
                          >
                            <h3 className="text-body-lg font-semibold text-ink">{f.title}</h3>
                            <p className="text-body text-ink-light">{f.body}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default RealTimeOntology;
