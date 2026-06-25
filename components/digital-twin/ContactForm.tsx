import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { contact } from "@/content/digital-twin";

import { GiantHeading } from "./parts";

const labelCls = "font-mono text-caption uppercase tracking-[0.05em] text-ink-light";
const fieldCls =
  "w-full border-0 border-b border-ink/25 bg-transparent py-s text-body text-ink outline-none transition-colors focus:border-ink";

/**
 * "Get in Touch to Learn More" — a centered lead-capture form. Static UI
 * (labels, inputs, opt-ins) matching the reference; no submission wiring.
 */
export function ContactForm() {
  return (
    <Section id={contact.id} className="bg-canvas" aria-label={contact.heading}>
      <Container>
        <Reveal className="mx-auto flex max-w-[760px] flex-col gap-2xl">
          <GiantHeading className="text-center">{contact.heading}</GiantHeading>

          <form className="flex flex-col gap-xl" noValidate>
            <div className="grid-12 gap-x-l gap-y-l">
              {contact.fields.map((f) => (
                <label key={f.name} className="col-span-12 flex flex-col gap-xs tablet:col-span-6">
                  <span className={labelCls}>
                    {f.required ? <span className="text-error">* </span> : null}
                    {f.label}
                  </span>
                  <input type={f.type} name={f.name} required={f.required} className={fieldCls} />
                </label>
              ))}

              <label className="col-span-12 flex flex-col gap-xs">
                <span className={labelCls}>
                  <span className="text-error">* </span>
                  {contact.countryLabel}
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

              <label className="col-span-12 flex flex-col gap-xs">
                <span className={labelCls}>{contact.projectLabel}</span>
                <textarea name="project" rows={4} className={fieldCls} />
              </label>
            </div>

            <fieldset className="flex flex-col gap-s">
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
      </Container>
    </Section>
  );
}

export default ContactForm;
