import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { environments } from "@/content/apollo";

import { GiantHeading } from "./parts";

/**
 * "From one to many environments" (light). A giant heading over a horizontal
 * rail of dark environment cards — each is a black tile with SVG line-art and a
 * label, scrolled horizontally (partial cards bleed off both edges).
 */
export function Environments() {
  return (
    <section className="overflow-hidden bg-canvas py-[80px] desktop:py-[120px]">
      <Container>
        <GiantHeading size="giant" className="max-w-[14ch]">
          {environments.heading}
        </GiantHeading>
      </Container>

      <Reveal
        className="mt-[56px] flex snap-x gap-[24px] overflow-x-auto px-[clamp(20px,4vw,60px)] pb-[16px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {environments.cards.map((card) => (
          <article
            key={card.label}
            className="relative flex aspect-[3/4] w-[clamp(220px,22vw,280px)] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-[10px] bg-black text-offwhite"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card.img}
              alt={card.label}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <span className="relative z-10 p-[24px] text-[clamp(1.125rem,1.4vw,1.25rem)]/[1.2] font-normal">
              {card.label}
            </span>
          </article>
        ))}
      </Reveal>
    </section>
  );
}

export default Environments;
