import { Container } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { contactForm } from "@/content/construction";

import { FormHeading } from "./parts";

/**
 * Closing contact band — a two-column split: an oversized heading on the left,
 * a stacked underline-style form on the right, with an opt-in checkbox and a
 * privacy note (reference parity).
 */
export function ContactForm() {
  return (
    <section id="contact" aria-label={contactForm.title} className="pt-[120px] pb-[120px] desktop:pt-[180px] desktop:pb-[180px]">
      <Container>
        <Reveal className="grid grid-cols-1 gap-[56px] border-t border-white/15 pt-[64px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
          <FormHeading className="max-w-[12ch]">{contactForm.title}</FormHeading>

          <form className="flex flex-col gap-[32px]">
            {contactForm.fields.map((field) => (
              <Field key={field.name} {...field} />
            ))}

            <label className="flex items-center gap-[12px]">
              <input type="checkbox" name="optIn" className="h-[16px] w-[16px] accent-white" />
              <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-white/70">
                {contactForm.optInLabel}
              </span>
            </label>

            <button
              type="submit"
              className="mt-[8px] inline-flex h-[52px] w-full items-center justify-center rounded-[2px] bg-white px-[24px] font-mono text-[13px] uppercase tracking-[0.06em] text-[#1e2124] transition-colors duration-[var(--duration-micro)] hover:bg-white/85"
            >
              {contactForm.submitLabel}
            </button>

            <p className="text-[13px] text-white/55">
              Please see our{" "}
              <a
                href={contactForm.privacyHref}
                className="underline decoration-white/30 underline-offset-2 hover:decoration-white"
              >
                Privacy Policy
              </a>{" "}
              regarding how we will handle this information.
            </p>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}

function Field({ name, label, type, required }: { name: string; label: string; type: string; required?: boolean }) {
  return (
    <label className="flex flex-col gap-[10px]">
      <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-white/70">
        {label}
        {required ? <span className="text-[#ff6b5d]"> *</span> : ""}
      </span>
      {type === "select" ? (
        <select
          name={name}
          defaultValue=""
          className="border-b border-white/30 bg-transparent pb-[10px] text-[clamp(1rem,1.25vw,1.125rem)] text-white outline-none transition-colors focus:border-white [&>option]:text-[#1e2124]"
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
          className="border-b border-white/30 bg-transparent pb-[10px] text-[clamp(1rem,1.25vw,1.125rem)] text-white outline-none transition-colors focus:border-white"
        />
      )}
    </label>
  );
}

export default ContactForm;
