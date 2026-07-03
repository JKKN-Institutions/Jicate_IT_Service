"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";

import { isValidPhoneNumber } from "libphonenumber-js/max";
import type { CountryCode } from "libphonenumber-js";

import { countryData, flagEmoji, dialForCountry } from "@/lib/countries";

/** Basic email shape check (stricter than the browser's default). */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * ContactFormBody — the reusable heart of the site's ONE contact form: the
 * field set, submit logic (POST → /api/contact) and success/error UI. It is
 * heading-less so callers can wrap it however they like:
 *   • SiteContactForm renders it under a centered section heading.
 *   • GetStartedDrawer renders it inside the slide-in "Get Started" panel.
 *
 * Field order: First name · Last name · Business email · Country ·
 * Contact number · Company · How can we help?  Selecting a Country auto-fills
 * the Contact number prefix with that country's flag + international dial code.
 */
export interface ContactFormBodyProps {
  submitLabel?: string;
  privacyHref?: string;
}

const fieldCls =
  "border-b border-ink/25 bg-transparent pb-[10px] text-body text-ink outline-none transition-colors focus:border-ink";
const labelCls = "font-mono text-caption uppercase tracking-[0.08em] text-ink-light";

type Status = "idle" | "submitting" | "success" | "error";

/** Text inputs rendered before the Business email field. */
const LEADING = [
  { name: "firstName", label: "First name", type: "text" },
  { name: "lastName", label: "Last name", type: "text" },
] as const;

export function ContactFormBody({
  submitLabel = "Submit",
  privacyHref = "/legal/privacy",
}: ContactFormBodyProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");

  const dial = useMemo(() => dialForCountry(country), [country]);
  const iso2 = useMemo(() => countryData.find((c) => c.name === country)?.iso2 ?? "", [country]);

  /** Validate the Business email format. "" = no error. */
  function checkEmail(value: string): string {
    const v = value.trim();
    if (!v) return "";
    return EMAIL_RE.test(v) ? "" : "Enter a valid email address (e.g. name@company.com).";
  }

  /** Validate the Contact number against the selected country using
   * libphonenumber-js — exact per-country rules (length + pattern). */
  function checkPhone(value: string): string {
    const raw = value.trim();
    if (!raw) return "";
    if (!iso2) return "Select a country first.";
    if (!isValidPhoneNumber(raw, iso2 as CountryCode)) {
      return `Enter a valid ${country} phone number (${dial}).`;
    }
    return "";
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const source = typeof window !== "undefined" ? window.location.pathname : "";

    // Client-side format checks — block submit and show inline errors if bad.
    const emailErr = checkEmail(data.email || "");
    const phoneErr = checkPhone(data.contactNumber || "");
    setEmailError(emailErr);
    setPhoneError(phoneErr);
    if (emailErr || phoneErr) return;

    // Combine the dial code with the typed digits into a single phone value.
    const number = (data.contactNumber || "").trim();
    const phone = number ? `${dial} ${number}`.trim() : "";

    setStatus("submitting");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, phone, source }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
      setCountry("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-[48px] rounded-[2px] border border-ink/15 bg-ink/[0.03] px-[32px] py-[40px] text-center">
        <p className="font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.2] text-ink">Thank you!</p>
        <p className="mt-[12px] text-body text-ink-light">
          We&rsquo;ve received your message and will be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-[24px] font-mono text-body-sm uppercase tracking-[0.06em] text-ink underline decoration-ink/30 underline-offset-2 hover:decoration-ink"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-[60px] flex flex-col gap-[28px]">
      {/* First name · Last name */}
      {LEADING.map((field) => (
        <label key={field.name} className="flex flex-col gap-[8px]">
          <span className={labelCls}>{field.label} *</span>
          <input name={field.name} type={field.type} required className={fieldCls} />
        </label>
      ))}

      {/* Business email — validated on blur / submit. */}
      <label className="flex flex-col gap-[8px]">
        <span className={labelCls}>Business email *</span>
        <input
          name="email"
          type="text"
          inputMode="email"
          autoComplete="email"
          required
          aria-invalid={emailError ? true : undefined}
          onBlur={(e) => setEmailError(checkEmail(e.target.value))}
          onInput={() => emailError && setEmailError("")}
          className={`${fieldCls} ${emailError ? "!border-[#d64b3a]" : ""}`}
        />
        {emailError ? (
          <p role="alert" className="text-body-sm text-[#d64b3a]">
            {emailError}
          </p>
        ) : null}
      </label>

      {/* Country — drives the phone prefix below. */}
      <label className="flex flex-col gap-[8px]">
        <span className={labelCls}>Country *</span>
        <select
          name="country"
          required
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setPhoneError("");
          }}
          className={fieldCls}
        >
          <option value="" disabled>
            Select…
          </option>
          {countryData.map((c) => (
            <option key={c.iso2} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </label>

      {/* Contact number — flag + dial-code prefix auto-set from Country;
          validated against that country's digit length on blur / submit. */}
      <label className="flex flex-col gap-[8px]">
        <span className={labelCls}>Contact number *</span>
        <div
          className={`flex items-center gap-[10px] border-b transition-colors focus-within:border-ink ${
            phoneError ? "border-[#d64b3a]" : "border-ink/25"
          }`}
        >
          <span
            className={`flex shrink-0 items-center gap-[6px] pb-[10px] text-body ${
              country ? "text-ink" : "text-ink-light"
            }`}
            aria-hidden
          >
            <span className="text-[20px] leading-none">{iso2 ? flagEmoji(iso2) : "🌐"}</span>
            <span>{dial || "+—"}</span>
          </span>
          <input
            name="contactNumber"
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel-national"
            aria-invalid={phoneError ? true : undefined}
            onBlur={(e) => setPhoneError(checkPhone(e.target.value))}
            onInput={() => phoneError && setPhoneError("")}
            placeholder={country ? "Phone number" : "Select a country first"}
            className="w-full bg-transparent pb-[10px] text-body text-ink outline-none"
          />
        </div>
        {phoneError ? (
          <p role="alert" className="text-body-sm text-[#d64b3a]">
            {phoneError}
          </p>
        ) : null}
      </label>

      {/* Company */}
      <label className="flex flex-col gap-[8px]">
        <span className={labelCls}>Company *</span>
        <input name="company" type="text" required className={fieldCls} />
      </label>

      {/* How can we help? */}
      <label className="flex flex-col gap-[8px]">
        <span className={labelCls}>How can we help?</span>
        <textarea
          name="message"
          rows={4}
          className="resize-none border-b border-ink/25 bg-transparent pb-[10px] text-body text-ink outline-none transition-colors focus:border-ink"
        />
      </label>

      {status === "error" ? (
        <p role="alert" className="text-body-sm text-[#d64b3a]">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-[12px] inline-flex h-[52px] w-full items-center justify-center rounded-[2px] bg-near-black px-l font-mono text-body-sm uppercase tracking-[0.06em] text-offwhite transition-colors duration-[var(--duration-micro)] hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : submitLabel}
      </button>

      <p className="mt-[8px] text-center text-body-sm text-ink-light">
        Please see our{" "}
        <a href={privacyHref} className="underline decoration-ink/30 underline-offset-2 hover:decoration-ink">
          Privacy Policy
        </a>{" "}
        regarding how we will handle this information.
      </p>
    </form>
  );
}

export default ContactFormBody;
