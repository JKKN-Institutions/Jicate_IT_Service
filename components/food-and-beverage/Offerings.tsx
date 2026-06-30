"use client";

import { useState } from "react";

import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { offerings } from "@/content/food-and-beverage";

import { GiantHeading, ReadLink, Eyebrow } from "./parts";

/**
 * Our Offerings — a giant heading and a vertical-tab walkthrough: a tab rail on
 * the left (each client labelled with a superscript number, the active one
 * marked with a dot) selects a client; the right column shows that client's
 * eyebrow, case paragraphs, and read links.
 */
export function Offerings() {
  const [active, setActive] = useState(0);
  const item = offerings.items[active];

  return (
    <Section className="bg-canvas" aria-label={offerings.heading}>
      <Container>
        <Reveal>
          <GiantHeading size="anchor">{offerings.heading}</GiantHeading>
        </Reveal>

        <div className="mt-2xl grid grid-cols-1 gap-x-[60px] gap-y-2xl desktop:grid-cols-[1fr_1fr]">
          {/* Tab rail */}
          <div role="tablist" aria-orientation="vertical" className="flex flex-col self-start">
            {offerings.items.map((m, i) => (
              <button
                key={m.tab}
                role="tab"
                type="button"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-center justify-between gap-s border-b border-ink/15 py-l text-left text-[clamp(1.15rem,1rem+0.6vw,1.5rem)] leading-[1.2] transition-colors duration-[var(--duration-micro)]",
                  i === active ? "text-ink" : "text-ink-light hover:text-ink",
                )}
              >
                <span>
                  {m.tab} <sup className="text-caption text-ink-light">{m.number}</sup>
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "size-[7px] shrink-0 rounded-full bg-ink transition-opacity duration-[var(--duration-micro)]",
                    i === active ? "opacity-100" : "opacity-0",
                  )}
                />
              </button>
            ))}
          </div>

          {/* Active content */}
          <div className="flex flex-col gap-l">
            <Eyebrow>{item.eyebrow}</Eyebrow>
            <div className="flex flex-col gap-l">
              {item.paragraphs.map((p, i) => (
                <p
                  key={p.slice(0, 24)}
                  className={cn("max-w-[52ch] text-body-lg leading-[1.4]", i === 0 ? "text-ink" : "text-ink-light")}
                >
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-m flex flex-col gap-l">
              {item.links.map((l) => (
                <ReadLink key={l.label} href={l.href}>
                  {l.label}
                </ReadLink>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Offerings;
