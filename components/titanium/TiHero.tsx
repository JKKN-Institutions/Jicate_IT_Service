import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero } from "@/content/titanium";

import { GiantHeading } from "./parts";

/**
 * Hero — dark two-column split (reference parity): the oversized title fills the
 * left rail; a short lead paragraph sits top-right. A full-width terrain image
 * follows below.
 */
export function TiHero() {
  return (
    <section className="pt-[80px] desktop:pt-[100px]" aria-label="Titanium">
      <Container>
        <Reveal className="grid items-start gap-l pb-[40px] desktop:grid-cols-[1fr_360px] desktop:gap-[60px]">
          <GiantHeading as="h1">{hero.title}</GiantHeading>
          <p className="max-w-[30ch] text-body-lg leading-[1.4] text-white desktop:pt-[10px]">{hero.body}</p>
        </Reveal>
      </Container>

      <Container>
        <Reveal className="aspect-[16/6] w-full overflow-hidden rounded-[2px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={hero.image} alt={hero.alt} className="h-full w-full object-cover" loading="eager" />
        </Reveal>
      </Container>
    </section>
  );
}

export default TiHero;
