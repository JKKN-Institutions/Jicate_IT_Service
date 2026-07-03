import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { exploreSolutions } from "@/content/apollo";

import { GiantHeading } from "./parts";

/**
 * "Explore Apollo Solutions" (light). A section heading on the left and a
 * two-column grid of solution links on the right — each cell is a drill-in link
 * with hairline dividers and a trailing arrow. A "Watch the Demo" button sits
 * at the bottom-right.
 */
export function ExploreSolutions() {
  const items = exploreSolutions.items;
  return (
    <section className="bg-canvas py-[80px] desktop:py-[120px]">
      <Container className="grid gap-2xl desktop:grid-cols-[0.85fr_1.15fr]">
        <GiantHeading className="max-w-[12ch]">{exploreSolutions.heading}</GiantHeading>

        <div className="flex flex-col gap-2xl">
          <Reveal className="grid grid-cols-1 gap-x-2xl tablet:grid-cols-2">
            {items.map((item, i) => (
              <a
                key={item}
                href="#"
                className={`group flex items-start justify-between gap-l border-t border-ink/15 py-[24px] text-ink transition-colors duration-200 ${
                  i >= items.length - 2 ? "border-b" : ""
                }`}
              >
                <span className="max-w-[18ch] text-[clamp(1.125rem,1.6vw,1.375rem)]/[1.25] font-normal">
                  {item}
                </span>
                <span aria-hidden className="shrink-0 pt-[2px] text-body-lg text-ink transition-transform duration-200 group-hover:translate-x-[0.25em] motion-reduce:transform-none">
                  →
                </span>
              </a>
            ))}
          </Reveal>

          <a
            href={exploreSolutions.watchDemo.href}
            className="group inline-flex w-fit items-center gap-[16px] self-end border-[0.8px] border-ink px-[24px] py-[14px] text-body text-ink transition-colors duration-200 hover:bg-ink hover:text-canvas"
          >
            {exploreSolutions.watchDemo.label}
            <span aria-hidden>→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

export default ExploreSolutions;
