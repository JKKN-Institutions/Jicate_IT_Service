import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { discover } from "@/content/defense";

import { GiantHeading, SubHeading, InkLink } from "./parts";

/**
 * "Discover by Service" — a 50px heading, then a two-column split: the layered
 * grid graphic on the left, and a heading / paragraph / link / service rows on
 * the right (reference parity).
 */
export function DiscoverByService() {
  return (
    <section id="discover" aria-label={discover.title} className="pt-[100px] desktop:pt-[160px]">
      <Container>
        <GiantHeading className="text-[clamp(2rem,3.47vw,3.125rem)]/[1.0]">{discover.title}</GiantHeading>

        <Reveal className="mt-[48px] grid grid-cols-1 gap-[48px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
          {/* Grid graphic */}
          <div className="flex items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={discover.image} alt={discover.imageAlt} className="h-auto w-full" loading="lazy" />
          </div>

          {/* Right column */}
          <div className="flex flex-col">
            <SubHeading className="max-w-[20ch]">{discover.heading}</SubHeading>

            <div className="mt-[28px] grid grid-cols-1 gap-[28px] tablet:grid-cols-[1fr_auto] tablet:items-start">
              <p className="max-w-[34ch] text-[clamp(0.9375rem,1.1vw,1rem)]/[1.43] text-white/60">{discover.body}</p>
              <div className="border-b border-white/30 pb-[8px]">
                <InkLink href={discover.link.href} className="flex w-full justify-between gap-[40px]">
                  {discover.link.label}
                </InkLink>
              </div>
            </div>

            {/* Service rows */}
            <ul className="mt-[40px] flex flex-col">
              {discover.services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group flex items-center justify-between border-b border-white/20 py-[20px] text-[clamp(1.25rem,1.6vw,1.5rem)] text-white/80 transition-colors hover:text-white"
                  >
                    <span>{s.label}</span>
                    <span aria-hidden className="transition-transform group-hover:translate-x-[0.18em]">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default DiscoverByService;
