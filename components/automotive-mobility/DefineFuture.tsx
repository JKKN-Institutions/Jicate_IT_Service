import { Container, Section } from "@/components/ui";
import { Reveal } from "@/components/motion/Reveal";
import { contactForm } from "@/content/automotive-mobility";

import { GiantHeading } from "./parts";

/**
 * Closing contact band — "Define the future of mobility today". A giant heading
 * over a single-column form (text fields, a country select, and a privacy
 * note), matching the reference's narrow centered form rail.
 */
export function DefineFuture() {
  return (
    <Section className="!pt-[60px] !pb-[100px]" aria-label="Define the future of mobility today">
      <Container>
        <Reveal className="mx-auto flex max-w-[680px] flex-col">
          <GiantHeading as="h2" className="text-center">
            {contactForm.title}
          </GiantHeading>

          <form className="mt-[48px] flex flex-col gap-[28px]">
            {contactForm.fields.map((field) => (
              <Field key={field.name} {...field} />
            ))}

            <button
              type="submit"
              className="mt-[12px] inline-flex h-[52px] w-full items-center justify-center rounded-[2px] bg-near-black px-l font-mono text-body-sm uppercase tracking-[0.06em] text-offwhite transition-colors duration-[var(--duration-micro)] hover:bg-ink"
            >
              {contactForm.submitLabel}
            </button>

            <p className="mt-[8px] text-center text-body-sm text-ink-light">
              Please see our{" "}
              <a
                href={contactForm.privacyHref}
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

function Field({ name, label, type, required }: { name: string; label: string; type: string; required?: boolean }) {
  return (
    <label className="flex flex-col gap-[8px]">
      <span className="font-mono text-caption uppercase tracking-[0.08em] text-ink-light">
        {label}
        {required ? " *" : ""}
      </span>
      {type === "select" ? (
        <select
          name={name}
          defaultValue=""
          className="border-b border-ink/25 bg-transparent pb-[10px] text-body text-ink outline-none transition-colors focus:border-ink"
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
          className="border-b border-ink/25 bg-transparent pb-[10px] text-body text-ink outline-none transition-colors focus:border-ink"
        />
      )}
    </label>
  );
}

export default DefineFuture;
