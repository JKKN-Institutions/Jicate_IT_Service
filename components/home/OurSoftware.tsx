"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { offerings, ourSoftwareHeading } from "@/content/offerings";
import { Container, EarmarkGlyph, NumberedIndex } from "@/components/ui";

/**
 * "Our Software" — the numbered offerings list. Each row is laid out as: tagline + /0.x index on the left,
 * a preview in the middle, and the large product name on the right.
 *
 * Interaction: hovering (or keyboard-focusing) a product lights its name +
 * index to ink; each row shows a quiet earmark glyph in the middle slot. The first
 * product is active by default, so the section is never empty.
 */
export function OurSoftware() {
  const [active, setActive] = useState(0);
  return (
    <section className="section bg-canvas" aria-label={ourSoftwareHeading}>
      <Container>
        <h2 className="font-display text-headline-lg font-normal text-ink">
          {ourSoftwareHeading}
        </h2>

        <ul className="mt-2xl flex flex-col">
          {offerings.map((item, i) => {
            const isActive = i === active;
            return (
              <li
                key={item.index}
                className="border-t-[0.8px] border-ink/15 last:border-b-[0.8px]"
                onMouseEnter={() => setActive(i)}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  onFocus={() => setActive(i)}
                  className="grid items-center gap-l py-l focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent desktop:grid-cols-[3fr_4fr_5fr]"
                >
                  {/* Left: tagline + numbered index */}
                  <div className="flex flex-col gap-s">
                    <p className="text-body text-ink-medium max-w-[26ch]">
                      {item.tagline}
                    </p>
                    <NumberedIndex value={item.index} active={isActive} />
                  </div>

                  {/* Middle: glyph */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    <span
                      aria-hidden
                      className="absolute inset-0 flex items-center justify-center text-ink-light"
                    >
                      <EarmarkGlyph
                        variant={i % 2 === 0 ? "circle" : "triangle"}
                        size={48}
                      />
                    </span>
                  </div>

                  {/* Right: large product name as the offering heading (h3) —
                      left-aligned so every name starts at the same x (ragged
                      right), per the reference. */}
                  <h3
                    className={cn(
                      "text-left font-display text-display font-normal leading-[0.95] tracking-[-0.02em] transition-colors duration-200 desktop:text-hero",
                      isActive ? "text-ink" : "text-ink-light",
                    )}
                  >
                    {item.name}
                  </h3>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export default OurSoftware;
