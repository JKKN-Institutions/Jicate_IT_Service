/**
 * Content for the /jicate-for-hospitals page — a faithful DESIGN rebuild of
 * the reference "Palantir for Hospitals" page, mapped onto this project's design
 * system. Layout matches the reference 1:1; a DARK hero band over a LIGHT body.
 *
 * IMPORTANT (IP): the reference's marketing prose, its named case study, and its
 * statistics are the source's own copyrighted content and are NOT reproduced. The
 * long-form copy, the quote, and the impact statements below are ORIGINAL,
 * Jicate-voiced text conveying the same general substance in fresh wording; the
 * case study is genericized (no real named health system, person, or quote, and no
 * fabricated precise statistics). Short functional labels (section titles,
 * step/toggle names, form fields) are kept for design parity.
 *
 * Local media (in /public/jicate-for-hospitals):
 *   shutterstock_381286231.jpg            — hero image
 *   image__37_.png                        — operating-system diagram
 *   Screenshot_2025-01-26_at_6.20.57_PM.png — transformation video thumbnail
 */

const BASE = "/jicate-for-hospitals";

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
}

export interface WorkExample {
  title: string;
  body: string;
}

export interface Step {
  id: string;
  title: string;
  body: string;
  impact: string[];
  action: string[];
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Jicate for Hospitals",
  subtitle: "AI platforms delivering speed and impact to healthcare's frontlines.",
  image: `${BASE}/shutterstock_381286231.jpg`,
  alt: "Medical equipment on a clinic wall",
};

/* ----------------------------- operating system --------------------------- */

export const operatingSystem = {
  headingLeft: "An AI-Powered Operating System for Hospitals.",
  headingRight: "Infuse your complex healthcare workflows with AI-driven automations.",
  diagram: `${BASE}/image__37_.png`,
  diagramAlt: "Layered operating-system diagram for hospitals",
};

/* --------------------------- transformation (case) ------------------------ */

export const transformation = {
  heading: "Transformation Journeys Start with Jicate.",
  quote: "The more our teams work with Jicate, the more uses we find for it — the possibilities really are open-ended.",
  attribution: "Chief Information Officer, a large hospital network",
  overview: "A large hospital network turned to Jicate to build solutions across many of its workflows — helping teams make decisions grounded in data, and improving both financial performance and patient outcomes.",
  examples: [
    {
      title: "Determining Program Eligibility",
      body: "Building a system to evaluate patient records in real-time to determine which patients might be eligible for at-home care, allowing clinicians to make data-enhanced decisions about eligibility.",
    },
    {
      title: "Clinical Denials Management",
      body: "Automating the review and appeal of denied claims — flagging denials early, assembling the right supporting information, and helping teams respond faster and recover more revenue.",
    },
  ] satisfies WorkExample[],
  video: `${BASE}/Screenshot_2025-01-26_at_6.20.57_PM.png`,
  videoAlt: "Keynote video thumbnail",
  videoLink: { label: "Deploying an AI Arsenal: Listen to the full keynote", href: "#" } satisfies CTA,
};

/* --------------------------- operationalizing ai -------------------------- */

const placeholderImpact = [
  "A significant rise in admissions to hospital-at-home programs.",
  "Shorter PACU hold times and faster time-to-place for each patient.",
  "Higher daily transfer volume and a lower average ER hold time.",
  "Better use of discharge lounges by identifying eligible patients every day.",
];

const placeholderAction = [
  "In practice, the operational team works from a single shared view — spotting bottlenecks as they form and acting before they cascade.",
  "A live workspace shows the current picture at a glance, so the team can see the impact of each decision as it happens.",
];

export const operationalizing = {
  heading: "Operationalizing AI from the back office to the bedside",
  steps: [
    {
      id: "0.1",
      title: "Capacity Management",
      body: "Manage your fluctuating capacity demands in real-time, in one place. Build custom workflows that harmonize patient-flow data to create a connected capacity-management source of truth.",
      impact: placeholderImpact,
      action: placeholderAction,
    },
    {
      id: "0.2",
      title: "Revenue Cycle Management",
      body: "Streamline the revenue cycle from end to end — from drafting appeals letters to managing denials — with AI-driven automations that cut manual work and speed up reimbursement.",
      impact: placeholderImpact,
      action: placeholderAction,
    },
    {
      id: "0.3",
      title: "Staffing & Scheduling",
      body: "Optimize staff schedules and balance workloads across the organization, matching the right people to the right shifts while easing pressure on frontline teams.",
      impact: placeholderImpact,
      action: placeholderAction,
    },
  ] satisfies Step[],
  toggles: ["Impact Generated", "In Action"],
};

/* --------------------------------- form ----------------------------------- */

export const contactForm = {
  title: "Contact Us",
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "businessEmail", label: "Business Email Address", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: true },
    { name: "company", label: "Company / Institution", type: "text", required: true },
    { name: "country", label: "Country", type: "select", required: true },
  ],
  submitLabel: "Submit",
  privacyHref: "/privacy",
};
