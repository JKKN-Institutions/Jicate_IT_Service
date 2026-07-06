import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { resources } from "@/content/information-security";

/**
 * Resources — the closing two-column block placed in the right two-thirds:
 * "Reporting Security Issues" and "Careers", each a 20px heading + body, with
 * a "See Open Positions" link under Careers. LIGHT.
 */
export function Resources() {
  return (
    <Section aria-label="Security resources">
      <Container>
        <Reveal className="grid grid-cols-1 gap-[40px] desktop:grid-cols-12">
          <div className="grid grid-cols-1 gap-[40px] tablet:grid-cols-2 desktop:col-start-7 desktop:col-span-6 desktop:gap-[60px]">
            <div className="flex flex-col gap-[16px]">
              <h2 className="text-[20px] leading-[1.3] text-ink">{resources.reporting.heading}</h2>
              <p className="text-[16px] leading-[1.5] text-ink-light">{resources.reporting.body}</p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <h2 className="text-[20px] leading-[1.3] text-ink">{resources.careers.heading}</h2>
              <p className="text-[16px] leading-[1.5] text-ink-light">{resources.careers.body}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default Resources;
