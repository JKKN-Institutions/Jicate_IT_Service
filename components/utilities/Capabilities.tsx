"use client";

import { useState } from "react";

import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { capabilities } from "@/content/utilities";

import { SectionHeading, ReadLink } from "./parts";

/**
 * Our Capabilities — a 50px heading, then a vertical-tab walkthrough: a tab rail
 * on the left (each labelled with a superscript number, the active one marked
 * with a dot) selects a capability; the right column shows a tiny 10px uppercase
 * title, an 18px body, the capability screenshot, and a "Learn more" link
 * (reference parity). LIGHT.
 */
export function Capabilities() {
  const [active, setActive] = useState(0);
  const item = capabilities.items[active];

  return (
    <Section id="our-capabilities" aria-label={capabilities.heading}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <SectionHeading>{capabilities.heading}</SectionHeading>

          <div className="mt-[48px] grid grid-cols-1 gap-x-[60px] gap-y-[40px] desktop:mt-[64px] desktop:grid-cols-[1fr_1fr]">
            {/* Tab rail */}
            <div role="tablist" aria-orientation="vertical" className="flex max-w-[360px] flex-col self-start">
              {capabilities.items.map((m, i) => (
                <button
                  key={m.tab}
                  role="tab"
                  type="button"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex items-center justify-between gap-s border-b border-ink/15 py-[18px] text-left text-[18px] leading-[1.2] transition-colors duration-[var(--duration-micro)]",
                    i === active ? "text-ink" : "text-ink-light hover:text-ink",
                  )}
                >
                  <span>
                    {m.tab}{" "}
                    <sup className="text-[10px] text-ink-light">{String(i + 1).padStart(2, "0")}</sup>
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
            <div className="flex flex-col gap-[20px]">
              <h3 className="font-display text-[10px] uppercase leading-[1.6] tracking-[0.05em] text-ink">
                {item.title}
              </h3>
              <p className="max-w-[52ch] text-[18px]/[1.39] text-ink">{item.body}</p>
              <div className="mt-[4px] w-full overflow-hidden rounded-[2px] bg-ink/[0.04]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} className="h-auto w-full object-contain" loading="lazy" />
              </div>
              <div className="mt-[4px]">
                <ReadLink href={item.link.href}>{item.link.label}</ReadLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Capabilities;
