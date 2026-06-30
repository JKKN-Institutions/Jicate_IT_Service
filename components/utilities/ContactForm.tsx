import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { demoForm, countries } from "@/content/utilities";
import type { FormField } from "@/content/utilities";

import { GiantHeading } from "./parts";

/**
 * Get Started — a closing LIGHT band, two-column split: an oversized heading on
 * the left, a stacked underline-style form on the right with opt-in checkboxes
 * and a privacy note (reference parity).
 */
export function ContactForm() {
  return (
    <Section
      id="utilities-demo-form"
      className="!pb-[120px] desktop:!pb-[160px]"
      aria-label={demoForm.title}
    >
      <Container>
        <div className="border-t border-ink/15 pt-[60px]">
          <Reveal className="grid grid-cols-1 gap-[56px] desktop:grid-cols-[1fr_1fr] desktop:gap-[80px]">
            <GiantHeading className="max-w-[12ch]">{demoForm.title}</GiantHeading>

            <form className="flex w-full max-w-[480px] flex-col gap-[28px]">
              {demoForm.fields.map((field) => (
                <Field key={field.name} {...field} />
              ))}

              <fieldset className="flex flex-col gap-[14px]">
                {demoForm.optIns.map((opt) => (
                  <label key={opt.name} className="flex items-start gap-s">
                    <input
                      type="checkbox"
                      name={opt.name}
                      className="mt-[2px] h-[16px] w-[16px] shrink-0 accent-ink"
                    />
                    <span className="font-mono text-[12px] uppercase tracking-[0.06em] text-ink-light">
                      {opt.label}
                    </span>
                  </label>
                ))}
              </fieldset>

              <button
                type="submit"
                className="mt-[8px] inline-flex h-[52px] w-full items-center justify-center rounded-[2px] bg-near-black px-[24px] font-mono text-[13px] uppercase tracking-[0.06em] text-offwhite transition-colors duration-[var(--duration-micro)] hover:bg-ink"
              >
                {demoForm.submitLabel}
              </button>

              <p className="text-[13px] leading-[1.5] text-ink-light">
                Please see our{" "}
                <a
                  href={demoForm.privacyHref}
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

function Field({ label, name, type, required }: FormField) {
  const labelEl = (
    <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-ink-light">
      {required ? <span className="text-[#d64b3a]">* </span> : null}
      {label}
    </span>
  );

  const inputClass =
    "border-b-[0.8px] border-[#636363] bg-transparent pb-[8px] text-[18px] text-ink outline-none transition-colors focus:border-ink";

  return (
    <label className="flex flex-col gap-[10px]">
      {labelEl}
      {type === "select" ? (
        <select name={name} defaultValue="" className={`${inputClass} [&>option]:text-ink`}>
          <option value="" disabled>
            Select…
          </option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          rows={4}
          className="resize-y border border-ink/30 bg-transparent p-[12px] text-[16px] text-ink outline-none transition-colors focus:border-ink"
        />
      ) : (
        <input name={name} type={type} required={required} className={inputClass} />
      )}
    </label>
  );
}

export default ContactForm;
