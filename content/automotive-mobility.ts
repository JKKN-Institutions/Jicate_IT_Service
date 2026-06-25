/**
 * Content for the /automotive-mobility page — a faithful DESIGN rebuild of the
 * reference "Automotive & Mobility" offering page, mapped onto this project's
 * design system. Layout/visual treatment matches the reference 1:1.
 *
 * IMPORTANT: the reference's marketing prose, partner case studies, and
 * customer/executive quotes are the source's own content — they are NOT
 * reproduced here. Every paragraph and quote below is neutral PLACEHOLDER text;
 * the user replaces all copy.
 *
 * Types are declared locally so the page is fully self-contained.
 *
 * Local media (in /public/automotive-mobility):
 *   Auto_Feature_Image_copy.png — About Our Work feature image
 *   Doosan_Thumbnail.jpg        — Impact (Doosan) image
 *   shutterstock_699756580.jpg  — Impact (Forvia) image
 *   Palantir_and_Lilium…mp4     — Impact (Lilium) video
 *   (partner logos/photos + offering icons not shipped — placeholders used)
 */

const BASE = "/automotive-mobility";

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
}

export interface PartnerCard {
  eyebrow: string;
  partner: string;
  title: string;
  body: string;
  cta: string;
}

export interface Offering {
  title: string;
  body: string;
  cta?: string;
}

export interface ImpactTab {
  tab: string;
  quote: string;
  attribution: string;
  intro: string;
  challenge: string;
  outcome: string;
  link?: CTA;
  /** Media on the right — video or image (placeholder when null). */
  video?: string | null;
  image?: string | null;
  alt: string;
  /** Optional tag row under the media. */
  tags?: string[];
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Automotive & Mobility",
  lines: ["Mobility is on the cusp of total transformation.", "Jicate and its customers are leading the charge."],
};

/* ------------------------------ about our work ---------------------------- */

export const aboutWork = {
  heading: "About Our Work",
  image: `${BASE}/Auto_Feature_Image_copy.png`,
  alt: "Cars moving at sunset",
  paragraphs: [
    "Placeholder paragraph. Describe how the platform powers the mobility ecosystem and who it serves.",
    "Placeholder paragraph. Explain the end-to-end vehicle data story — from design and assembly through sales and the road.",
    "Placeholder paragraph. Describe how OEMs, suppliers, and dealers unlock value quickly to accelerate growth.",
  ],
  link: { label: "Learn more about our offerings.", href: "#offerings" } satisfies CTA,
};

/* ------------------------------- our partners ----------------------------- */

export const partners = {
  heading: "Our Partners",
  cards: [
    {
      eyebrow: "AUTOMOTIVE // IMPACT",
      partner: "Partner One",
      title: "Placeholder case-study headline one.",
      body: "Placeholder case-study summary. Replace with your own partner story.",
      cta: "Learn more",
    },
    {
      eyebrow: "AUTOMOTIVE // IMPACT",
      partner: "Partner Two",
      title: "Placeholder case-study headline two.",
      body: "Placeholder case-study summary. Replace with your own partner story.",
      cta: "Learn more",
    },
    {
      eyebrow: "AVIATION // IMPACT",
      partner: "Partner Three",
      title: "Placeholder case-study headline three.",
      body: "Placeholder case-study summary. Replace with your own partner story.",
      cta: "Learn more",
    },
    {
      eyebrow: "AUTOMOTIVE // IMPACT",
      partner: "Partner Four",
      title: "Placeholder case-study headline four.",
      body: "Placeholder case-study summary. Replace with your own partner story.",
      cta: "Learn more",
    },
  ] satisfies PartnerCard[],
};

/* ------------------------------ our offerings ----------------------------- */

export const offerings = {
  heading: "Our Offerings",
  items: [
    { title: "Quality Management OS", body: "Placeholder description of the offering. Replace with your own copy.", cta: "Learn more" },
    { title: "Component Performance Monitor", body: "Placeholder description of the offering. Replace with your own copy.", cta: "Learn more" },
    { title: "Supply Chain", body: "Placeholder description of the offering. Replace with your own copy.", cta: "Learn more" },
    { title: "Plant Digital Twin", body: "Placeholder description of the offering. Replace with your own copy." },
    { title: "Configuration Reduction", body: "Placeholder description of the offering. Replace with your own copy." },
    { title: "Cost of Goods Sold", body: "Placeholder description of the offering. Replace with your own copy." },
    { title: "New Vehicle Launch", body: "Placeholder description of the offering. Replace with your own copy." },
    { title: "Net Zero", body: "Placeholder description of the offering. Replace with your own copy." },
  ] satisfies Offering[],
};

/* ------------------------------- our impact ------------------------------- */

export const impact = {
  heading: "Our Impact",
  tabs: [
    {
      tab: "Lilium",
      quote: "Placeholder pull-quote about the partnership and its impact.",
      attribution: "— Placeholder Name, Title",
      intro: "Placeholder intro paragraph describing the partner and their mission.",
      challenge: "Placeholder paragraph describing the challenge and the data ecosystem built to solve it.",
      outcome: "Placeholder paragraph describing the outcome — faster insights and more time for action and innovation.",
      link: { label: "Learn more about our Edge AI offering", href: "/edge-ai" },
      video: `${BASE}/Palantir_and_Lilium___High-Speed_Electric_Jets__20-02-23_.mp4`,
      image: null,
      alt: "Lilium electric jet",
      tags: [],
    },
    {
      tab: "Doosan Infracore",
      quote: "Placeholder pull-quote about the partnership and its impact.",
      attribution: "— Placeholder Name, Title",
      intro: "Placeholder intro paragraph describing the partner and their goals.",
      challenge: "Placeholder paragraph describing the need to integrate data across the value chain.",
      outcome: "Placeholder paragraph describing the digital-transformation outcome.",
      link: { label: "Learn More", href: "#" },
      video: null,
      image: `${BASE}/Doosan_Thumbnail.jpg`,
      alt: "Construction vehicles overhead",
      tags: ["Integration", "IoT", "Production", "Quality"],
    },
    {
      tab: "Forvia",
      quote: "Placeholder pull-quote about the partnership and its impact.",
      attribution: "— Placeholder Name, Title",
      intro: "Placeholder intro paragraph describing the partner and their ambition.",
      challenge: "Placeholder paragraph describing the digital-transformation and CO2-neutral ambition.",
      outcome: "Placeholder paragraph describing the outcome built on the existing IT portfolio.",
      link: { label: "Learn More", href: "#" },
      video: null,
      image: `${BASE}/shutterstock_699756580.jpg`,
      alt: "City",
      tags: ["CO2 Monitoring", "Data Integration", "Supply Chain Management"],
    },
  ] satisfies ImpactTab[],
};

/* --------------------------------- form ----------------------------------- */

export const contactForm = {
  title: "Define the future of mobility today",
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "businessEmail", label: "Business Email Address", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: false },
    { name: "jobTitle", label: "Job Title", type: "text", required: true },
    { name: "company", label: "Company / Institution", type: "text", required: true },
    { name: "country", label: "Country", type: "select", required: true },
  ],
  submitLabel: "Submit",
  privacyHref: "/privacy",
};
