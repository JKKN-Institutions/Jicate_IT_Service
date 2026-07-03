import { Container, Section } from "@/components/ui";
import { offerings } from "@/content/offerings-page";

/**
 * Offerings list — one ruled row per offering: a 34px name (with a ↳ prefix) on
 * the left, a short tagline in the middle, and a "Learn More →" on the right.
 * The whole row is a link. Dark theme.
 */
export function OfferingsList() {
  return (
    <Section aria-label="All offerings" className="pt-0">
      <Container>
        <ul className="border-t border-offwhite/20">
          {offerings.map((o) => (
            <li key={o.name} className="border-b border-offwhite/20">
              <a
                href={o.href}
                className="group grid grid-cols-1 items-start gap-x-2xl gap-y-s py-2xl transition-colors duration-200 hover:bg-offwhite/[0.03] desktop:grid-cols-12"
              >
                <h2 className="flex gap-s font-display text-[clamp(1.75rem,1rem+1.6vw,2.125rem)] font-normal leading-[1.15] text-offwhite desktop:col-span-6">
                  <span aria-hidden className="text-offwhite/70">↳</span>
                  <span>{o.name}</span>
                </h2>

                <p className="text-[clamp(1.0625rem,1rem+0.5vw,1.25rem)] leading-[1.3] text-offwhite/85 desktop:col-span-3 desktop:col-start-8">
                  {o.tagline}
                </p>

                <span className="inline-flex items-center justify-between gap-m border-b border-offwhite/25 pb-xs text-body text-offwhite/55 transition-colors duration-200 group-hover:border-offwhite group-hover:text-offwhite desktop:col-span-2 desktop:col-start-11">
                  <span>Learn More</span>
                  <span aria-hidden className="transition-transform duration-[var(--duration-micro)] group-hover:translate-x-[0.22em] motion-reduce:transform-none">
                    →
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export default OfferingsList;
