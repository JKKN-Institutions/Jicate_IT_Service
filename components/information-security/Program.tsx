"use client";

import { useState } from "react";

import { Container, Section } from "@/components/ui";
import { program } from "@/content/information-security";
import { cn } from "@/lib/utils";

/**
 * Program — the interactive vertical-tab walkthrough. A sticky left rail lists
 * the three program areas (Compliance / Open Source / Penetration Testing) with
 * a superscript number + active dot; the right column swaps to the active tab's
 * content (intro paragraphs, a bold grey subhead, and ↳ lists). LIGHT.
 */
export function Program() {
  const [active, setActive] = useState(0);
  const tab = program[active];

  return (
    <Section id="program" className="!pt-0" aria-label="Information Security Program">
      <Container>
        <div className="grid grid-cols-1 gap-[40px] desktop:grid-cols-12 desktop:gap-[60px]">
          {/* Left rail */}
          <nav className="desktop:col-span-4 desktop:sticky desktop:top-[140px] desktop:self-start">
            <ul className="flex flex-col gap-[20px]">
              {program.map((t, i) => (
                <li key={t.id}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "group flex w-full items-start gap-[10px] text-left text-[18px] leading-[1.39] transition-colors",
                      i === active ? "text-ink" : "text-ink-light hover:text-ink",
                    )}
                    aria-current={i === active ? "true" : undefined}
                  >
                    <span className="flex-1">{t.label}</span>
                    <sup className="mt-[2px] font-mono text-[10px] tracking-[0.05em] text-ink-light">
                      {String(i + 1).padStart(2, "0")}
                    </sup>
                    <span
                      aria-hidden
                      className={cn(
                        "mt-[8px] size-[6px] shrink-0 rounded-full transition-opacity",
                        i === active ? "bg-ink opacity-100" : "opacity-0",
                      )}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right content */}
          <div className="desktop:col-start-7 desktop:col-span-6">
            <p className="font-display text-[10px] uppercase leading-[1.6] tracking-[0.05em] text-ink-light">
              {tab.eyebrow}
            </p>

            <div className="mt-[24px] flex flex-col gap-[20px]">
              {tab.blocks.map((b, i) => {
                if (b.type === "para") {
                  return (
                    <p key={i} className="text-[18px] leading-[1.39] text-ink">
                      {b.text}
                    </p>
                  );
                }
                if (b.type === "subhead") {
                  return (
                    <h3 key={i} className="mt-[16px] text-[16px] font-bold leading-[1.43] text-ink-light">
                      {b.text}
                    </h3>
                  );
                }
                return (
                  <div key={i} className="flex flex-col gap-[8px]">
                    {b.label ? (
                      <p className="text-[16px] leading-[1.43] text-ink-light">{b.label}</p>
                    ) : null}
                    <ul className="flex flex-col gap-[8px] pl-[8px]">
                      {b.items.map((it) => (
                        <li key={it} className="flex items-start gap-[8px] text-[16px] leading-[1.43] text-ink-light">
                          <span aria-hidden className="shrink-0">
                            ↳
                          </span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Program;
