import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { demo } from "@/content/secure-collaboration";

import { GiantHeading } from "./parts";

const labelCls = "font-mono text-caption uppercase tracking-[0.05em] text-offwhite/55";
const fieldCls =
  "w-full border-0 border-b border-offwhite/25 bg-transparent py-s text-body text-offwhite outline-none transition-colors focus:border-offwhite";

/**
 * Request a Demo — a giant heading on the left, a single-column form on the
 * right. Dark theme; asterisk-before-label; static UI.
 */
export function DemoForm() {
  return (
    <Section id={demo.id} className="bg-[#1e2124] scroll-mt-[140px]" aria-label={demo.heading}>
      <Container>
        <div className="grid grid-cols-1 gap-x-2xl gap-y-2xl desktop:grid-cols-12">
          <Reveal className="desktop:col-span-6">
            <GiantHeading size="anchor" className="text-offwhite">
              {demo.heading}
            </GiantHeading>
          </Reveal>

          <Reveal index={1} className="desktop:col-span-5 desktop:col-start-8">
            <form className="flex flex-col gap-l" noValidate>
              {demo.fields.map((f) => (
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
                  {demo.countryLabel}
                </span>
                <select name="country" required className={fieldCls} defaultValue="United States">
                  {["United States", "United Kingdom", "India", "Japan", "Other"].map((opt) => (
                    <option key={opt} value={opt} className="text-ink">
                      {opt}
                    </option>
                  ))}
                </select>
              </label>

              <button
                type="submit"
                className="mt-s self-start border-[0.8px] border-offwhite bg-offwhite px-l py-s font-mono text-body-sm uppercase tracking-[0.05em] text-ink transition-colors duration-200 hover:bg-transparent hover:text-offwhite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {demo.submit}
              </button>

              <p className="mt-l text-body-sm text-offwhite/55">{demo.privacyNote}</p>
            </form>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default DemoForm;
