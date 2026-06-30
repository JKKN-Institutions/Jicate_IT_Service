import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { whyFedStart } from "@/content/fedstart";

import { GiantHeading } from "./parts";

/**
 * Why FedStart? — a 2-column section. Left: a giant heading and three "↳"
 * feature blocks. Right: a "vs. Typical SaaS Offering" comparison table.
 */
export function WhyFedStart() {
  return (
    <Section className="bg-canvas" aria-label={whyFedStart.heading}>
      <Container>
        <div className="grid grid-cols-1 gap-x-3xl gap-y-3xl desktop:grid-cols-2">
          {/* Left: heading + feature blocks */}
          <div className="flex flex-col gap-3xl">
            <Reveal>
              <GiantHeading size="anchor">{whyFedStart.heading}</GiantHeading>
            </Reveal>
            {whyFedStart.features.map((f, i) => (
              <Reveal key={f.title} index={i} className="flex flex-col gap-m">
                <h3 className="flex items-start gap-s font-display text-[clamp(1.5rem,1rem+1.6vw,2.125rem)] font-normal leading-[1.1] tracking-[-0.01em] text-ink">
                  <span aria-hidden className="text-ink-light">↳</span>
                  {f.title}
                </h3>
                <p className="max-w-[46ch] text-body leading-[1.5] text-ink">{f.body}</p>
              </Reveal>
            ))}
          </div>

          {/* Right: comparison table */}
          <Reveal index={1} className="flex flex-col">
            <h3 className="mb-2xl max-w-[16ch] font-display text-[clamp(1.5rem,1rem+1.7vw,2.25rem)] font-normal leading-[1.12] tracking-[-0.01em] text-ink">
              {whyFedStart.compareHeading} <span aria-hidden className="text-ink-light">↘</span>
            </h3>
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-ink/20">
                  <th className="w-[28%] py-m align-bottom" />
                  <th className="py-m align-bottom text-body-lg font-normal text-ink">
                    {whyFedStart.compareCols.typical}
                  </th>
                  <th className="py-m align-bottom text-body-lg font-normal text-ink">
                    {whyFedStart.compareCols.fedstart}
                  </th>
                </tr>
              </thead>
              <tbody>
                {whyFedStart.compareRows.map((row) => (
                  <tr key={row.label} className="border-b border-ink/15 align-top">
                    <td className="py-l pr-m font-mono text-caption uppercase leading-[1.4] tracking-[0.04em] text-ink-light">
                      {row.label}
                    </td>
                    <td className="py-l pr-m text-body text-ink">{row.typical}</td>
                    <td className="py-l text-body text-ink">{row.fedstart}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default WhyFedStart;
