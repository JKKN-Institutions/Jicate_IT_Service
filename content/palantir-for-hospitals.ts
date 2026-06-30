/**
 * Content for the /palantir-for-hospitals page — a faithful DESIGN rebuild of
 * the reference "Palantir for Hospitals" page, mapped onto this project's design
 * system. Layout matches the reference 1:1; a DARK hero band over a LIGHT body.
 *
 * IMPORTANT: the reference's marketing prose, the Mount Sinai case study, and
 * its statistics are the source's own content — they are NOT reproduced here.
 * Long-form copy, the quote, and stats below are neutral PLACEHOLDER text;
 * short functional labels (section titles, step/toggle names, form fields) are
 * kept for parity. User replaces all copy.
 *
 * Local media (in /public/palantir-for-hospitals):
 *   shutterstock_381286231.jpg            — hero image
 *   image__37_.png                        — operating-system diagram
 *   Screenshot_2025-01-26_at_6.20.57_PM.png — transformation video thumbnail
 */

const BASE = "/palantir-for-hospitals";

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
  quote: "Placeholder quote. …work more extensively with Jicate…the uses are endless.",
  attribution: "Placeholder Name, Title, Placeholder Health System",
  overview: "Placeholder overview. As a large hospital network, the health system turned to Jicate to build solutions that enable data-driven decisions across multiple workflows, and drive better financial and patient outcomes.",
  examples: [
    {
      title: "Determining Program Eligibility",
      body: "Building a system to evaluate patient records in real-time to determine which patients might be eligible for at-home care, allowing clinicians to make data-enhanced decisions about eligibility.",
    },
    {
      title: "Clinical Denials Management",
      body: "Placeholder description. Replace with your own example of the work delivered together.",
    },
  ] satisfies WorkExample[],
  video: `${BASE}/Screenshot_2025-01-26_at_6.20.57_PM.png`,
  videoAlt: "Keynote video thumbnail",
  videoLink: { label: "Deploying an AI Arsenal: Listen to the full keynote", href: "#" } satisfies CTA,
};

/* --------------------------- operationalizing ai -------------------------- */

const placeholderImpact = [
  "Placeholder stat. Describe a multi-hundred-percent increase in admissions to a hospital-at-home program.",
  "Placeholder stat. Describe reduced PACU hold times and faster time-to-place per patient.",
  "Placeholder stat. Describe increased daily transfer volume and reduced average ER hold time.",
  "Placeholder stat. Describe increased discharge-lounge utilization, identifying eligible patients each day.",
];

const placeholderAction = [
  "Placeholder paragraph. Describe how the workflow looks in action for the operational team.",
  "Placeholder paragraph. Describe the live demo or screenshot that shows the experience.",
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
      body: "Placeholder paragraph. Describe how the platform streamlines the revenue cycle — from appeals letters to denials management — with AI-driven automations.",
      impact: placeholderImpact,
      action: placeholderAction,
    },
    {
      id: "0.3",
      title: "Staffing & Scheduling",
      body: "Placeholder paragraph. Describe how the platform optimizes staff schedules and balances workloads across the organization.",
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
    { name: "jobTitle", label: "Job Title", type: "text", required: true },
    { name: "company", label: "Company / Institution", type: "text", required: true },
    { name: "country", label: "Country", type: "select", required: true },
  ],
  submitLabel: "Submit",
  privacyHref: "/privacy",
};
