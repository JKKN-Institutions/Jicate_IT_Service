/** Content for the /jicate-for-hospitals page. */

const BASE = "/jicate-for-hospitals";

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
}

export interface Step {
  id: string;
  title: string;
  body: string;
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
};

/* --------------------------- operationalizing ai -------------------------- */

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
      action: placeholderAction,
    },
    {
      id: "0.2",
      title: "Revenue Cycle Management",
      body: "Streamline the revenue cycle from end to end — from drafting appeals letters to managing denials — with AI-driven automations that cut manual work and speed up reimbursement.",
      action: placeholderAction,
    },
    {
      id: "0.3",
      title: "Staffing & Scheduling",
      body: "Optimize staff schedules and balance workloads across the organization, matching the right people to the right shifts while easing pressure on frontline teams.",
      action: placeholderAction,
    },
  ] satisfies Step[],
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
