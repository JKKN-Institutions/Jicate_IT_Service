import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { buildForm } from "@/content/palantir-for-builders";

import { GiantHeading } from "./parts";

const labelCls = "font-mono text-caption uppercase tracking-[0.05em] text-ink-light";
const fieldCls =
  "w-full border-0 border-b border-ink/25 bg-transparent py-s text-body text-ink outline-none transition-colors focus:border-ink";

/**
 * Build With Us — a pre-heading statement, then a giant "Build With Us:" heading
 * on the left and the lead-capture form on the right. Trailing red asterisks.
 */
export function BuildForm() {
  return (
    <Section id={buildForm.id} className="bg-canvas scroll-mt-[140px]" aria-label={buildForm.heading}>
      <Container>
        <Reveal className="mb-3xl">
          <h2 className="max-w-[16ch] font-display text-[clamp(1.75rem,1rem+3vw,3rem)] font-normal leading-[1.08] tracking-[-0.02em] text-ink">
            {buildForm.preHeading}
          </h2>
        </Reveal>

        <div className="grid-12 gap-y-2xl">
          <Reveal className="col-span-12 desktop:col-span-5">
            <GiantHeading size="hero">{buildForm.heading}</GiantHeading>
          </Reveal>

          <Reveal index={1} className="col-span-12 desktop:col-span-6 desktop:col-start-7">
            <form className="flex flex-col gap-l" noValidate>
              {buildForm.fields.map((f) => (
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
                  {buildForm.countryLabel}
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
                <span className={labelCls}>{buildForm.projectLabel}</span>
                <textarea name="project" rows={4} className={fieldCls} />
              </label>

              <fieldset className="mt-s flex flex-col gap-s">
                {buildForm.optIns.map((opt) => (
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
                {buildForm.submit}
              </button>

              <p className="text-body-sm text-ink-light">{buildForm.privacyNote}</p>
            </form>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default BuildForm;
