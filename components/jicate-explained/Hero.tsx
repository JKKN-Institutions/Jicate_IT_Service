import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { hero, subNav } from "@/content/jicate-explained";

/**
 * "Jicate Explained" hero (light). A sticky in-page sub-nav under the fixed
 * site header, then a two-column split: a giant display title on the left and a
 * large lead sentence on the right.
 */
export function Hero() {
  return (
    <section className="bg-canvas pt-[120px]">
      <div className="sticky top-[88px] z-30 bg-canvas/95 backdrop-blur-sm">
        <Container>
          <nav
            aria-label="Jicate Explained sections"
            className="flex flex-wrap gap-x-l gap-y-xs py-s text-body text-ink-light"
          >
            {subNav.map((item) => (
              <a key={item.label} href={item.href} className="transition-colors duration-200 hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      <Container className="grid items-start gap-l pb-[80px] pt-[64px] desktop:grid-cols-[1.1fr_0.9fr] desktop:gap-2xl desktop:pb-[120px]">
        <Reveal>
          <h1 className="font-display text-[clamp(2.75rem,7.8vw,6.25rem)]/[1.15] font-normal tracking-[-0.02em] text-ink">
            Jicate
            <br />
            Explained
          </h1>
        </Reveal>
        <Reveal className="desktop:pt-[24px]">
          <p className="max-w-[20ch] font-display text-[clamp(1.6rem,2.6vw,2.125rem)]/[1.18] font-normal tracking-[-0.01em] text-ink">
            {hero.lead}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export default Hero;
