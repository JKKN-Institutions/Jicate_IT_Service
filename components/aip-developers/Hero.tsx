import { Container, Section } from "@/components/ui";
import { hero } from "@/content/aip-developers";

/**
 * Hero — dark, full-bleed. A very large display headline on the left with a
 * compact meta column on the right (focus statement, run time, scroll hint),
 * a primary/secondary CTA pair, and a looping product clip beneath.
 *
 * Server Component; the video autoplays muted/looping (decorative), with
 * `playsInline` so mobile keeps it inline. No JS required.
 */
export function Hero() {
  return (
    <Section tone="dark" className="bg-near-black pt-2xl" aria-label="AIP for Developers">
      <Container>
        <div className="flex flex-col gap-2xl">
          <div className="flex flex-col gap-l desktop:flex-row desktop:items-end desktop:justify-between desktop:gap-2xl">
            <h1 className="max-w-[14ch] font-display text-[clamp(2.5rem,1rem+6vw,5.5rem)] font-normal leading-[1.02] tracking-[-0.02em] text-offwhite">
              {hero.headline}
            </h1>

            <div className="flex shrink-0 gap-l font-mono text-caption uppercase leading-[1.5] tracking-[0.05em] text-offwhite/55">
              <p>
                {hero.focusLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p>
                <span className="block">{hero.time}</span>
                {hero.scroll.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-s">
            <button
              type="button"
              className="inline-flex min-w-[200px] items-center justify-center border-[0.8px] border-offwhite/40 px-l py-s font-mono text-body-sm uppercase tracking-[0.05em] text-offwhite transition-colors duration-200 hover:bg-offwhite hover:text-near-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offwhite"
            >
              {hero.pricingLabel}
            </button>
            <a
              href={hero.signUp.href}
              className="inline-flex min-w-[220px] items-center justify-center bg-[#5b51e5] px-l py-s font-mono text-body-sm uppercase tracking-[0.05em] text-offwhite transition-colors duration-200 hover:bg-[#4a40d4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offwhite"
            >
              {hero.signUp.label}
            </a>
          </div>

          <video
            className="w-full rounded-[6px] border border-offwhite/10"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={hero.video} type="video/mp4" />
          </video>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
