/**
 * Content for the /defense page — a faithful DESIGN rebuild of the reference
 * "Palantir Defense Solutions" offering page, mapped onto this project's design
 * system. Layout/visual treatment matches the reference 1:1; the page is DARK
 * (rgb(30,33,36) background, white text).
 *
 * IMPORTANT (IP): the reference's marketing prose and the executive quote are the
 * source's own copyrighted content and are NOT reproduced. The long-form copy and
 * the quote below are ORIGINAL, Jicate-voiced prose conveying the same general
 * substance in fresh wording; the quote is genericized (no real name or verbatim
 * text). Short functional labels (section titles, service names, form fields) are
 * kept for design parity.
 *
 * Types are declared locally so the page is fully self-contained.
 *
 * Local media (in /public/defense):
 *   Defense_Page_Video__1___1_.mp4 — full-bleed hero video
 *   grid-platforms.png             — Discover by Service layered-grid graphic
 */

const BASE = "/defense";

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
}

export interface ServiceRow {
  label: string;
  href: string;
}

export interface InvolveRow {
  heading: string;
  body?: string;
  note: string;
  link: CTA;
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  video: `${BASE}/Defense_Page_Video__1___1_.mp4`,
  alt: "Jicate Defense",
};

/* --------------------------- the software advantage ----------------------- */

export const advantage = {
  title: "The Software Advantage",
  linkHeading: "AI-enabled technology to deter and defend",
  linkHref: "#discover",
  body: "Superior software changes what is possible in the field. Deployed around the world and on the front lines, Jicate helps allied forces turn complex, fast-moving situations into clear decisions — and act on them faster than any adversary can.",
  edgeHeading: "Engineering Starts At The Tactical Edge",
  edgeLink: { label: "Explore Solutions", href: "#discover" } satisfies CTA,
  image: "/defense/moslem-daneshzadeh-HXbESAQn-JQ-unsplash.jpg" as string | null,
  imageAlt: "Precision-guided missiles positioned against a clear sky",
};

/* --------------------------- discover by service -------------------------- */

export const discover = {
  title: "Discover by Service",
  image: `${BASE}/grid-platforms.png`,
  imageAlt: "Layered grid platforms graphic",
  heading: "Jicate provides configurable solutions to confront the most complex Defense challenges.",
  body: "From AI-enabled ground stations to distributed, multi-domain operations at the tactical edge, Jicate is committed to the software that underpins integrated deterrence — giving the forces that depend on it a durable, enduring advantage.",
  link: { label: "Explore UK Defence", href: "#contact" } satisfies CTA,
  services: [
    { label: "India Army", href: "#contact" },
    { label: "Indian Air & Space Force", href: "#contact" },
    { label: "Indian Navy & Marines", href: "#contact" },
  ] satisfies ServiceRow[],
};

/* -------------------------------- quote band ------------------------------ */

export const quote = {
  text: "Bringing the most advanced technical capabilities to bear is how we protect our people and secure a lasting, shared prosperity.",
  attribution: "Defense Lead, Jicate",
};

/* --------------------------- get involved (hiring) ------------------------ */

export const involve = {
  rows: [
    {
      heading: "We're Hiring",
      note: "To learn about life at Jicate, visit our careers page.",
      link: { label: "Learn More", href: "#contact" },
    },
    {
      heading: "We're Partnering",
      body: "As we grow our critical work supporting allied forces, we're looking for industry partners to join us.",
      note: "To start a conversation today, contact us.",
      link: { label: "Contact Us", href: "#contact" },
    },
  ] satisfies InvolveRow[],
};

/* --------------------------------- form ----------------------------------- */

export const contactForm = {
  title: "Contact Us",
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "businessEmail", label: "Business Email Address", type: "email", required: true },
    { name: "company", label: "Company / Institution", type: "text", required: true },
    { name: "country", label: "Country", type: "select", required: true },
  ],
  optIns: [
    "Opt-in to receive Jicate product updates",
    "Opt-in to personalized sales outreach",
    "Opt-in to receive invites to future events",
    "Opt-in to educational resources",
  ],
  submitLabel: "Submit",
  privacyHref: "/privacy",
};
