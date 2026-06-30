"use client";

import { useState } from "react";

import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { modules } from "@/content/data-protection";

import { GiantHeading, InkLink } from "./parts";

/**
 * "Data Protection Modules and Capabilities" — a giant heading with a leading
 * arrow, then a vertical-tab walkthrough: a tab rail on the left (each module
 * labelled with a superscript number, the active one marked with a dot) selects
 * a module; the right column shows that module's eyebrow, description, and image.
 * A footnote with a "Learn More" link closes the section.
 */
export function Modules() {
  const [active, setActive] = useState(0);
  const item = modules.items[active];

  return (
    <Section className="bg-canvas" aria-label={modules.heading}>
      <Container>
        <Reveal>
          <GiantHeading className="max-w-[18ch]">
            <span aria-hidden className="text-ink-light">
              ↳{" "}
            </span>
            {modules.heading}
          </GiantHeading>
        </Reveal>

        <div className="mt-2xl grid grid-cols-1 gap-x-[60px] gap-y-2xl desktop:grid-cols-[1fr_1fr]">
          {/* Tab rail */}
          <div role="tablist" aria-orientation="vertical" className="flex flex-col self-start">
            {modules.items.map((m, i) => (
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
            <span className="font-mono text-caption uppercase tracking-[0.06em] text-ink-light">
              {item.eyebrow}
            </span>
            <p className="max-w-[46ch] text-[clamp(1.25rem,1rem+1vw,1.625rem)] leading-[1.3] text-ink">
              {item.description}
            </p>

            <div className="mt-l aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-ink/[0.04]">
              {item.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              ) : (
                <div
                  aria-hidden
                  role="img"
                  aria-label={item.alt}
                  className="flex h-full w-full items-center justify-center bg-[radial-gradient(120%_120%_at_50%_40%,#f6f6f6_0%,#e9e9e9_100%)] text-ink/20"
                >
                  <svg viewBox="0 0 24 24" className="size-[40px]" fill="currentColor">
                    <circle cx="5" cy="12" r="1.6" />
                    <circle cx="12" cy="6" r="1.6" />
                    <circle cx="12" cy="18" r="1.6" />
                    <circle cx="19" cy="12" r="1.6" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footnote + Learn More link */}
        <div className="mt-2xl grid grid-cols-1 gap-x-[60px] gap-y-l desktop:grid-cols-[1fr_1fr]">
          <div className="hidden desktop:block" />
          <div className="grid grid-cols-1 gap-2xl tablet:grid-cols-[1fr_auto] tablet:items-start">
            <p className="max-w-[40ch] text-body leading-[1.5] text-ink-light">{modules.footnote}</p>
            <div className="tablet:w-[220px]">
              <InkLink href={modules.footnoteLink.href} className="text-body">
                {modules.footnoteLink.label}
              </InkLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Modules;
