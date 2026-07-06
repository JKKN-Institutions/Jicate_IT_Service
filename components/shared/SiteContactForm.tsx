import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

import { ContactFormBody } from "./ContactFormBody";

/**
 * SiteContactForm — the ONE contact / demo form section used across every
 * offering, capability, and industry page. Light theme, centered narrow rail.
 * The only per-page variation is the heading `title`; the field set and submit
 * behaviour live in the shared <ContactFormBody> (also used by the "Get Started"
 * drawer), so every entry point stays identical.
 */
export interface SiteContactFormProps {
  /** Heading shown above the form (per-page). */
  title: string;
  /** Anchor id — defaults to "contact" so in-page nav links still resolve. */
  id?: string;
  /** Submit button label. */
  submitLabel?: string;
  /** Optional per-page override for the heading classes (e.g. a smaller size);
   *  omitted everywhere else so the default heading size is unchanged. */
  titleClassName?: string;
}

export function SiteContactForm({
  title,
  id = "contact",
  submitLabel = "Submit",
  titleClassName,
}: SiteContactFormProps) {
  return (
    <Section id={id} className="bg-canvas !py-[80px] scroll-mt-[140px]" aria-label={title}>
      <Container>
        <Reveal className="mx-auto flex max-w-[760px] flex-col">
          <h2 className={cn("text-center font-display font-normal leading-[1.15] tracking-[-0.02em] text-ink text-[clamp(2.5rem,6.4vw,5.5556rem)]", titleClassName)}>
            {title}
          </h2>

          <ContactFormBody submitLabel={submitLabel} />
        </Reveal>
      </Container>
    </Section>
  );
}

export default SiteContactForm;
