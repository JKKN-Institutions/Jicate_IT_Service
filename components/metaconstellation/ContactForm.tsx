import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { contact } from "@/content/metaconstellation";

import { GiantHeading } from "./parts";

const labelCls = "font-mono text-caption uppercase tracking-[0.05em] text-offwhite/55";
const fieldCls =
  "w-full border-0 border-b border-offwhite/25 bg-transparent py-s text-body text-offwhite outline-none transition-colors focus:border-offwhite";

/**
 * "Learn More About MetaConstellation" — a dark lead-capture form. Giant heading
 * on the left, single-column full-width fields on the right. Static UI; no
 * submission wiring.
 */
export function ContactForm() {
  return (
    <Section id={contact.id} tone="dark" className="bg-near-black" aria-label={contact.heading}>
      <Container>
        <div className="grid-12 gap-y-2xl">
          <Reveal className="col-span-12 desktop:col-span-5">
            <GiantHeading size="hero">{contact.heading}</GiantHeading>
          </Reveal>

          <Reveal index={1} className="col-span-12 desktop:col-span-6 desktop:col-start-7">
            <form className="flex flex-col gap-l" noValidate>
              {contact.fields.map((f) => (
                <label key={f.name} className="flex flex-col gap-xs">
                  <span className={labelCls}>
                    {f.label}
                    {f.required ? <span className="text-error"> *</span> : null}
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
                    <option key={c} value={c} className="text-ink">
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
                  <label key={opt} className="flex items-center gap-s text-body-sm text-offwhite/60">
                    <input type="checkbox" name={opt} className="size-[16px] accent-offwhite" />
                    <span className="font-mono text-caption uppercase tracking-[0.05em]">{opt}</span>
                  </label>
                ))}
              </fieldset>

              <button
                type="submit"
                className="self-start border-[0.8px] border-offwhite bg-offwhite px-l py-s font-mono text-body-sm uppercase tracking-[0.05em] text-near-black transition-colors duration-200 hover:bg-transparent hover:text-offwhite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offwhite"
              >
                {contact.submit}
              </button>

              <p className="text-body-sm text-offwhite/55">{contact.privacyNote}</p>
            </form>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default ContactForm;
