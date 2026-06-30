/**
 * Content for the /mission-manager page — a faithful DESIGN rebuild of the
 * reference "Palantir Mission Manager" page, mapped onto this project's design
 * system. Layout matches the reference 1:1; the page is DARK (rgb(30,33,36)
 * background, white text). No contact form.
 *
 * IMPORTANT: the reference's marketing prose is the source's own content — it
 * is NOT reproduced here. Body copy below is neutral PLACEHOLDER text; short
 * functional headings/labels are kept for parity. User replaces all copy.
 *
 * Local media (in /public/mission-manager):
 *   shutterstock_1902204682.png        — hero full-bleed image
 *   Screenshot_2024-12-20_at_3.00.14_PM.png — "The Ecosystem" diagram
 */

const BASE = "/mission-manager";

/* ------------------------------ shared shapes ----------------------------- */

export interface BenefitTab {
  tab: string;
  number: string;
  eyebrow: string;
  heading: string;
  bullets: { lead: string; body: string }[];
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Mission Manager",
  tagline: "Helping government agencies securely expedite software vendor onboarding, deployment, and management.",
  image: `${BASE}/shutterstock_1902204682.png`,
  alt: "Abstract dark architectural form",
};

/* ------------------------------ the ecosystem ----------------------------- */

export const ecosystem = {
  heading: "The Ecosystem",
  image: `${BASE}/Screenshot_2024-12-20_at_3.00.14_PM.png`,
  imageAlt: "Ecosystem architecture diagram",
  body: "Quickly onboard innovative, traditional, and non-traditional software vendors into Jicate's secure Kubernetes-based ecosystem.",
};

/* --------------------------- tailored to program -------------------------- */

export const tailored = {
  heading: "Tailored to Your Program",
  paragraphs: [
    "Mission Manager offers the flexibility to adapt to the specific needs of your government program.",
    "Reach out to us for more information on how we can help meet your mission requirements.",
  ],
};

/* ------------------------------- the benefits ----------------------------- */

const placeholderBullets = [
  { lead: "Placeholder benefit one", body: "Describe the value delivered. Replace with your own copy." },
  { lead: "Placeholder benefit two", body: "Describe the value delivered. Replace with your own copy." },
  { lead: "Placeholder benefit three", body: "Describe the value delivered. Replace with your own copy." },
];

export const benefits = {
  heading: "The Benefits",
  tabs: [
    {
      tab: "Cyber Security",
      number: "01",
      eyebrow: "01 — CYBER SECURITY",
      heading: "Enhance Security and Efficiency Across Your Operations",
      bullets: [
        { lead: "Automated Cybersecurity and Risk Management", body: "Streamline your manual approval processes and ensure robust, automated security controls." },
        { lead: "Relieve ISSO and AO Burden", body: "Minimize the effort and steps in onboarding new applications." },
        { lead: "Accelerate Delivery", body: "Expedite mission-critical deployments." },
        { lead: "Zero-Trust Multitenant Compute", body: "Ensure robust security across multiple tenants." },
      ],
    },
    {
      tab: "Continuous Monitoring and Delivery",
      number: "02",
      eyebrow: "02 — CONTINUOUS MONITORING AND DELIVERY",
      heading: "Monitor and Deliver Continuously",
      bullets: placeholderBullets,
    },
    {
      tab: "Distributed Data Architecture",
      number: "03",
      eyebrow: "03 — DISTRIBUTED DATA ARCHITECTURE",
      heading: "Operate on a Distributed Data Architecture",
      bullets: placeholderBullets,
    },
    {
      tab: "Centralized Identity Management and Data Security",
      number: "04",
      eyebrow: "04 — CENTRALIZED IDENTITY MANAGEMENT AND DATA SECURITY",
      heading: "Centralize Identity and Secure Your Data",
      bullets: placeholderBullets,
    },
    {
      tab: "Deploy Everywhere, Operational Today",
      number: "05",
      eyebrow: "05 — DEPLOY EVERYWHERE, OPERATIONAL TODAY",
      heading: "Deploy Everywhere and Stay Operational",
      bullets: placeholderBullets,
    },
    {
      tab: "Open Standards",
      number: "06",
      eyebrow: "06 — OPEN STANDARDS",
      heading: "Build on Open Standards",
      bullets: placeholderBullets,
    },
  ] satisfies BenefitTab[],
};

/* -------------------------------- statement ------------------------------- */

export const statement =
  "Mission Manager revolutionizes how government agencies onboard and manage innovative technologies. It delivers unmatched flexibility, security, and interoperability, allowing our partners to focus on achieving their critical mission objectives.";
