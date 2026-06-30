import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { contact } from "@/content/life-sciences";

import { GiantHeading } from "./parts";

const labelCls = "font-mono text-caption uppercase tracking-[0.05em] text-ink-light";
const fieldCls =
  "w-full border-0 border-b border-ink/25 bg-transparent py-s text-body text-ink outline-none transition-colors focus:border-ink";

/**
 * Contact Us — a light lead-capture form. Giant heading left, single-column
 * full-width fields right. Asterisk before label. Static UI.
 */
export function ContactForm() {
  return (
    <Section id={contact.id} className="bg-canvas scroll-mt-[140px]" aria-label={contact.heading}>
      <Container>
        <div className="grid-12 gap-y-2xl">
          <Reveal className="col-span-12 desktop:col-span-5">
            <GiantHeading size="anchor" className="text-ink">
              {contact.heading}
            </GiantHeading>
          </Reveal>

          <Reveal index={1} className="col-span-12 desktop:col-span-6 desktop:col-start-7">
            <form className="flex flex-col gap-l" noValidate>
              {contact.fields.map((f) => (
                <label key={f.name} className="flex flex-col gap-xs">
                  <span className={labelCls}>
                    <span className="text-error">* </span>
                    {f.label}
                  </span>
                  <input type={f.type} name={f.name} required={f.required} className={fieldCls} />
                </label>
              ))}

              <label className="flex flex-col gap-xs">
                <span className={labelCls}>
                  <span className="text-error">* </span>
                  {contact.countryLabel}
                </span>
                <select name="country" required className={fieldCls} defaultValue="">
                  <option value="" disabled>
                    Select…
                  </option>
                  {["India", "United States", "United Kingdom", "Japan", "Other"].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>

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
