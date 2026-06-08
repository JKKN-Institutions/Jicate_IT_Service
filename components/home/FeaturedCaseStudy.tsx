import { cn } from "@/lib/utils";
import { caseStudy } from "@/content/home";
import { Container, Grid, Section, Eyebrow, Metric, ArrowLink } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Section 4 — Featured case-study band (design/07 §6).
 *
 * Light band (#efefef). A single flagship, outcome-led proof point:
 * a media placeholder on the left (image-left / text-right on desktop,
 * stacked on mobile) and a text block on the right — eyebrow, 34px H3
 * headline, body caption, a metrics row, and a drill-in arrow link.
 *
 * Server Component: static-correct, with a single scroll reveal via the
 * progressive-enhancement <Reveal> wrapper. All copy comes from
 * @/content/home (original Jicate content).
 */
export function FeaturedCaseStudy() {
  return (
    <Section tone="light" className="bg-band" aria-label="Featured case study">
      <Reveal>
        <Container>
          <Grid className="items-center gap-y-l">
            {/* Media placeholder — image-left on desktop */}
            <div className="col-span-12 desktop:col-span-6">
              <div
                aria-hidden
                className="flex aspect-video items-end bg-surface-medium p-l"
              >
                <Eyebrow className="text-ink-light">{caseStudy.eyebrow}</Eyebrow>
              </div>
            </div>

            {/* Text block — text-right on desktop */}
            <div className="col-span-12 flex flex-col gap-m desktop:col-span-6">
              <Eyebrow className="text-ink-medium">{caseStudy.eyebrow}</Eyebrow>

              <h3 className="font-display text-headline font-normal text-ink max-w-[18ch]">
                {caseStudy.headline}
              </h3>

              <p className="text-body text-ink-medium max-w-[48ch]">
                {caseStudy.caption}
              </p>

              {caseStudy.metrics.length > 0 && (
                <div className="flex flex-wrap gap-l">
                  {caseStudy.metrics.map((metric) => (
                    <Metric
                      key={metric.label}
                      value={metric.value}
                      label={metric.label}
                    />
                  ))}
                </div>
              )}

              <ArrowLink
                href={caseStudy.link.href}
                arrow={caseStudy.link.arrow ?? "drillin"}
                external={caseStudy.link.external}
                className={cn("text-body")}
              >
                {caseStudy.link.label}
              </ArrowLink>
            </div>
          </Grid>
        </Container>
      </Reveal>
    </Section>
  );
}

export default FeaturedCaseStudy;
