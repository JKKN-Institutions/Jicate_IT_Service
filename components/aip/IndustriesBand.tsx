import { Container, Button } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { industries } from "@/content/aip";

/**
 * Industries band (dark navy).
 *
 * A sticky-feeling editorial heading on the left and a tall list of industries
 * on the right; each industry is a row that brightens and nudges on hover
 * (CSS-only, so this stays a Server Component). The list reveals row by row.
 */
export function IndustriesBand() {
  return (
    <section className="bg-[#1e1f2b] py-[120px] text-offwhite desktop:py-[175px]">
      <Container className="grid gap-2xl desktop:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-l desktop:sticky desktop:top-nav desktop:self-start">
          <h2 className="max-w-[14ch] font-display text-display font-normal tracking-[-0.03em] text-offwhite">
            {industries.heading}
          </h2>
          <Button
            variant="inverse"
            href={industries.cta.href}
            arrow={industries.cta.arrow}
            className="self-start"
          >
            {industries.cta.label}
          </Button>
        </div>

        <ul className="flex flex-col">
          {industries.items.map((name, i) => (
            <Reveal as="li" key={name} index={Math.min(i, 6)}>
              <a
                href={industries.cta.href}
                className="group flex items-center justify-between gap-s border-t border-offwhite/15 py-[40px] text-offwhite/55 transition-colors duration-200 hover:text-offwhite last:border-b"
              >
                <span className="flex items-baseline gap-[1.1em] transition-transform duration-200 group-hover:translate-x-[0.3em] motion-reduce:transform-none">
                  <span className="font-mono text-body-sm font-medium text-offwhite/35">{i + 1}</span>
                  <span className="font-display text-headline font-normal tracking-[-0.02em] uppercase">
                    {name}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="text-body-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                >
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default IndustriesBand;
