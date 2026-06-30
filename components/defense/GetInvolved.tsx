import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { involve } from "@/content/defense";

import { SubHeading, InkLink } from "./parts";

/**
 * "We're Hiring" / "We're Partnering" — stacked rows, each a three-column split:
 * a 34px arrow heading, an optional body, and a note with a link. Hairline
 * rules separate the rows (reference parity).
 */
export function GetInvolved() {
  return (
    <section aria-label="Get involved" className="pt-[100px] desktop:pt-[160px]">
      <Container>
        {involve.rows.map((row) => (
          <Reveal
            key={row.heading}
            className="grid grid-cols-1 gap-[28px] border-t border-white/15 py-[48px] desktop:grid-cols-[1fr_1fr_0.7fr] desktop:gap-[60px]"
          >
            <SubHeading className="flex items-start gap-[0.4em]">
              <span aria-hidden className="text-white/60">
                ↳
              </span>
              {row.heading}
            </SubHeading>

            {row.body ? (
              <p className="max-w-[34ch] text-[clamp(1.25rem,1.7vw,1.5rem)]/[1.3] text-white">{row.body}</p>
            ) : (
              <span className="hidden desktop:block" />
            )}

            <div className="flex flex-col gap-[28px]">
              <p className="text-[clamp(1rem,1.25vw,1.125rem)]/[1.389] text-white/55">{row.note}</p>
              <div className="border-b border-white/30 pb-[8px]">
                <InkLink href={row.link.href} className="flex w-full justify-between gap-[40px]">
                  {row.link.label}
                </InkLink>
              </div>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}

export default GetInvolved;
