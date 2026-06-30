import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { contact } from "@/content/data-protection";

const headingCls =
  "font-display text-[clamp(2rem,1rem+2.6vw,2.7778rem)] font-normal leading-[1.04] tracking-[-0.02em] text-ink";
const labelCls = "font-mono text-caption uppercase tracking-[0.05em] text-ink-light";
const fieldCls =
  "w-full border-0 border-b border-ink/25 bg-transparent py-s text-body text-ink outline-none transition-colors focus:border-ink";

/**
 * "Interested in using Jicate software…" — a light lead-capture form. A 2-column
 * header row holds the question heading (left) and "Submit your interest."
 * (right) at the same 50px scale; the form fields sit beneath in the right
 * column. Labels carry a trailing red asterisk. Static UI.
 */
export function ContactForm() {
  return (
    <Section id={contact.id} className="bg-canvas" aria-label={contact.heading}>
      <Container>
        <div className="grid-12 gap-y-2xl">
          <Reveal className="col-span-12 desktop:col-span-6">
            <h2 className={headingCls}>{contact.heading}</h2>
          </Reveal>

          <Reveal index={1} className="col-span-12 desktop:col-span-6 desktop:col-start-7">
            <p className={headingCls}>{contact.subline}</p>

            <form className="mt-3xl flex flex-col gap-l" noValidate>
              {contact.fields.map((f) => (
                <label key={f.name} className="flex flex-col gap-xs">
                  <span className={labelCls}>
                    {f.label}
                    {f.required && <span className="text-error"> *</span>}
                  </span>
                  <input type={f.type} name={f.name} required={f.required} className={fieldCls} />
                </label>
              ))}

              <label className="flex flex-col gap-xs">
                <span className={labelCls}>
                  {contact.countryLabel}
                  <span className="text-error"> *</span>
                </span>
                <select name="country" required className={fieldCls} defaultValue="">
                  <option value="" disabled>
                    Select…
                  </option>
                  {["India", "United States", "United Kingdom", "Japan", "Other"].map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-xs">
                <span className={labelCls}>{contact.projectLabel}</span>
                <textarea name="project" rows={4} className={fieldCls} />
              </label>

              <fieldset className="mt-s flex flex-col gap-s">
                {contact.optIns.map((opt) => (
                  <label key={opt} className="flex items-center gap-s text-body-sm text-ink-light">
                    <input type="checkbox" name={opt} className="size-[16px] accent-accent" />
                    <span className="font-mono text-caption uppercase tracking-[0.05em]">{opt}</span>
                  </label>
                ))}
              </fieldset>

              <button
                type="submit"
                className="self-start border-[0.8px] border-ink bg-ink px-l py-s font-mono text-body-sm uppercase tracking-[0.05em] text-canvas transition-colors duration-200 hover:bg-canvas hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {contact.submit}
              </button>

              <p className="text-body-sm text-ink-light">{contact.privacyNote}</p>
            </form>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default ContactForm;
