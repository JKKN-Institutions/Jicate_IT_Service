import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { demoForm, countries } from "@/content/semiconductors";
import type { FormField } from "@/content/semiconductors";

import { GiantHeading } from "./parts";

/**
 * Request a Demo — a closing LIGHT band, two-column split: an oversized
 * "Request a Demo" heading on the left, a stacked underline-style form on the
 * right with opt-in checkboxes and a privacy note (reference parity).
 */
export function DemoForm() {
  return (
    <Section
      id="semiconductors-demo-form"
      className="bg-canvas py-[clamp(64px,9vw,140px)]"
      aria-label={demoForm.title}
    >
      <Container>
        <Reveal className="grid grid-cols-1 gap-[clamp(40px,5vw,64px)] desktop:grid-cols-12 desktop:items-start">
          <GiantHeading as="h2" size="anchor" className="max-w-[8ch] text-ink desktop:col-span-7">
            {demoForm.title}
          </GiantHeading>

          <form className="flex w-full flex-col gap-[28px] tablet:max-w-[420px] desktop:col-span-3 desktop:col-start-8 desktop:max-w-[240px]">
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
              className="mt-[8px] inline-flex h-[52px] w-full items-center justify-center rounded-none border-[0.8px] border-[#636363] bg-transparent px-[40px] text-[16px] text-ink transition-colors duration-200 hover:bg-ink hover:text-canvas focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
      </Container>
    </Section>
  );
}

function Field({ label, name, type, required }: FormField) {
  const labelEl = (
    <span className="font-mono text-[12px] uppercase tracking-[0.06em] text-ink-light">
      {required ? <span className="text-[#d4351c]">* </span> : null}
      {label}
    </span>
  );

  const inputClass =
    "border-b-[0.8px] border-[#636363] bg-transparent pb-[6px] text-[18px] text-ink outline-none transition-colors focus:border-ink";

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

export default DemoForm;
