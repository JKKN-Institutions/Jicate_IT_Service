import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { features } from "@/content/apollo";

import { GiantHeading, SubLink } from "./parts";

/**
 * "Apollo allows you to:" (light). A section heading on the left and a
 * four-column feature grid on the right — each column is an icon tile, a
 * heading, and a drill-in sub-link. A "Download the Whitepaper" button sits at
 * the bottom-right.
 */
export function Features() {
  return (
    <section id="explore-solutions" className="bg-canvas py-[60px] desktop:py-[80px]">
      <Container className="grid gap-2xl desktop:grid-cols-[0.85fr_1.15fr]">
        <GiantHeading className="max-w-[10ch]">{features.heading}</GiantHeading>

        <div className="flex flex-col gap-2xl">
          <Reveal className="grid grid-cols-1 gap-x-l gap-y-2xl tablet:grid-cols-2 desktop:grid-cols-4">
            {features.items.map((item) => (
              <article key={item.title} className="flex flex-col gap-m">
                <span className="flex h-[64px] w-[64px] items-center justify-center rounded-[4px] bg-ink/[0.04]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.icon} alt={item.iconAlt} className="h-[32px] w-[32px]" />
                </span>
                <h3 className="text-[clamp(1.125rem,1.5vw,1.25rem)]/[1.25] font-normal text-ink">
                  {item.title}
                </h3>
                <SubLink href={item.link.href}>{item.link.label}</SubLink>
              </article>
            ))}
          </Reveal>

          <a
            href={features.whitepaper.href}
            className="group inline-flex w-fit items-center gap-[24px] self-end border-[0.8px] border-ink px-[24px] py-[16px] text-body text-ink transition-colors duration-200 hover:bg-ink hover:text-canvas"
          >
            {features.whitepaper.label}
            <span aria-hidden>→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Features;
