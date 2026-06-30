import { Container, Section } from "@/components/ui";
import { logos } from "@/content/food-and-beverage";

/**
 * Logo strip — a row of partner logo placeholders, repeated to read like the
 * reference marquee. Static (no auto-scroll) to preserve reduced-motion comfort.
 */
export function LogoMarquee() {
  const row = [...logos.names, ...logos.names];
  return (
    <Section className="bg-canvas !py-2xl" aria-label="Partners">
      <Container>
        <div className="grid grid-cols-2 items-center gap-x-2xl gap-y-xl tablet:grid-cols-3 desktop:grid-cols-5">
          {logos.names.map((name) => (
            <div key={name} className="flex h-[56px] items-center justify-center rounded-[2px] bg-ink/[0.04] px-l">
              <span className="font-display text-body uppercase tracking-[0.04em] text-ink-light">{name}</span>
            </div>
          ))}
        </div>
        <span className="sr-only">{row.join(", ")}</span>
      </Container>
    </Section>
  );
}

export default LogoMarquee;
