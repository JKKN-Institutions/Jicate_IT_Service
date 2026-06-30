import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { form } from "@/content/telecommunications";

import { GiantHeading } from "./parts";

const labelCls = "font-mono text-caption uppercase tracking-[0.05em] text-ink-light";
const fieldCls =
  "w-full border-0 border-b border-ink/25 bg-transparent py-s text-body text-ink outline-none transition-colors focus:border-ink";

/**
 * Get Started — a giant heading on the left, a full form on the right (six
 * fields, country select, project textarea, four opt-ins). Static UI.
 */
export function GetStartedForm() {
  return (
    <Section id={form.id} className="bg-canvas scroll-mt-[140px]" aria-label={form.heading}>
      <Container>
        <div className="grid grid-cols-1 gap-x-2xl gap-y-2xl desktop:grid-cols-12">
          <Reveal className="desktop:col-span-5">
            <GiantHeading size="anchor" className="text-ink">
              {form.heading}
            </GiantHeading>
          </Reveal>

          <Reveal index={1} className="desktop:col-span-6 desktop:col-start-7">
            <form className="flex flex-col gap-l" noValidate>
              {form.fields.map((f) => (
                <label key={f.name} className="flex flex-col gap-xs">
                  <span className={labelCls}>
                    {f.required && <span className="text-error">* </span>}
                    {f.label}
                  </span>
                  <input type={f.type} name={f.name} required={f.required} className={fieldCls} />
                </label>
              ))}

              <label className="flex flex-col gap-xs">
                <span className={labelCls}>
                  <span className="text-error">* </span>
                  {form.countryLabel}
                </span>
                <select name="country" required className={fieldCls} defaultValue="">
                  <option value="" disabled>
                    Select…
                  </option>
                  {["United States", "United Kingdom", "India", "Germany", "Other"].map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-xs">
                <span className={labelCls}>{form.projectLabel}</span>
                <textarea name="project" rows={4} className={fieldCls} />
              </label>

              <fieldset className="mt-s flex flex-col gap-s">
                {form.optIns.map((opt) => (
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
                {form.submit}
              </button>

              <p className="text-body-sm text-ink-light">{form.privacyNote}</p>
            </form>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default GetStartedForm;
