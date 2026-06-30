import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { contactForm } from "@/content/retail";

import { GiantHeading } from "./parts";

/**
 * Closing contact band — a two-column split: an oversized heading on the left, a
 * stacked underline-style form on the right with a privacy note (reference
 * parity).
 */
export function ContactForm() {
  return (
    <Section id="contact" className="!pb-[120px] desktop:!pb-[160px]" aria-label={contactForm.title}>
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <Reveal className="grid grid-cols-1 gap-[56px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
            <GiantHeading className="max-w-[14ch]">{contactForm.title}</GiantHeading>

            <form className="flex flex-col gap-[32px]">
              {contactForm.fields.map((field) => (
                <Field key={field.name} {...field} />
              ))}

              <button
                type="submit"
                className="mt-[8px] inline-flex h-[52px] w-full items-center justify-center rounded-[2px] bg-near-black px-[24px] font-mono text-[13px] uppercase tracking-[0.06em] text-offwhite transition-colors duration-[var(--duration-micro)] hover:bg-ink"
              >
                {contactForm.submitLabel}
              </button>

              <p className="text-[13px] text-ink-light">
                Please see our{" "}
                <a
                  href={contactForm.privacyHref}
                  className="underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
                >
                  Privacy Policy
                </a>{" "}
                regarding how we will handle this information.
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function Field({ name, label, type, required }: { name: string; label: string; type: string; required?: boolean }) {
  return (
    <label className="flex flex-col gap-[10px]">
      <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-light">
        {required ? <span className="text-[#d64b3a]">* </span> : ""}
        {label}
      </span>
      {type === "select" ? (
        <select
          name={name}
          defaultValue=""
          className="border-b border-ink/25 bg-transparent pb-[10px] text-[clamp(1rem,1.25vw,1.125rem)] text-ink outline-none transition-colors focus:border-ink"
        >
          <option value="" disabled>
            Select…
          </option>
        </select>
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className="border-b border-ink/25 bg-transparent pb-[10px] text-[clamp(1rem,1.25vw,1.125rem)] text-ink outline-none transition-colors focus:border-ink"
        />
      )}
    </label>
  );
}

export default ContactForm;
