/**
 * Content for the /federal-health page — a faithful DESIGN rebuild of the
 * reference "Federal Health" offering page, mapped onto this project's design
 * system. Layout/visual treatment matches the reference 1:1; LIGHT theme.
 *
 * IMPORTANT (IP): the reference's marketing prose, customer case studies, and
 * press headlines are the source's own copyrighted content and are NOT
 * reproduced. The long-form copy, impact descriptions, and news titles below are
 * ORIGINAL, Jicate-voiced text conveying the same general substance in fresh
 * wording; case studies and news are genericized (no real names or headlines).
 * Short functional labels (section titles, capability tab names, solution
 * categories, form fields) are kept for design parity.
 *
 * Types are declared locally so the page is fully self-contained.
 *
 * Local media (in /public/federal-health): 9 photos mapped across the hero,
 * play-video band, solution cards, and resource cards (best-guess mapping; the
 * user re-assigns as needed).
 */

const BASE = "/federal-health";

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
}

export interface ImpactItem {
  title: string;
  body: string;
}

export interface SolutionCard {
  eyebrow: string;
  image: string;
  alt: string;
  body: string;
  cta: CTA;
}

export interface CapabilityTab {
  tab: string;
  number: string;
  eyebrow: string;
  heading: string;
  body: string;
  bullets: string[];
}

export interface ResourceCard {
  image: string;
  body: string;
  cta: CTA;
}


/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Federal Health",
  subtitle: "Transforming the work of federal health agencies by enabling connectivity across the health data ecosystem",
  image: `${BASE}/shutterstock_offset_1877556748_cropped.jpg`,
  alt: "Healthcare professional",
  videoPoster: `${BASE}/shutterstock_offset_1895301283.jpg`,
  videoLabel: "Play Video",
  contactLink: { label: "Contact Us", href: "#contact" } satisfies CTA,
};

/* ------------------------------- our impact ------------------------------- */

export const impact = {
  heading: "Our Impact",
  intro: "For the first time, agencies can work together across very different data sets and workflows in one place — whether they are speeding up fundamental research or modernizing the public health information systems the country depends on.",
  items: [
    {
      title: "Program One",
      body: "Jicate helps agencies coordinate pandemic response end to end — running day-to-day operations, standardizing reporting, and sharing data quickly and securely between teams.",
    },
    {
      title: "Program Two",
      body: "Researchers use Jicate to study complex health conditions at scale, connecting data that was previously siloed to surface patterns and accelerate discovery.",
    },
  ] satisfies ImpactItem[],
};

/* ------------------------------ our solutions ----------------------------- */

export const solutions = {
  heading: "Our Solutions",
  cards: [
    {
      eyebrow: "PUBLIC HEALTH SURVEILLANCE + RESPONSE",
      image: `${BASE}/hans-reniers-lQGJCMY5qcM-unsplash.jpg`,
      alt: "Laboratory work",
      body: "Run surveillance and response operations on trusted, high-quality real-world data — collaborating securely across teams while sensitive information stays protected inside the platform.",
      cta: { label: "Learn More", href: "#capabilities" },
    },
    {
      eyebrow: "POPULATION HEALTH",
      image: `${BASE}/shutterstock_1665408049.jpg`,
      alt: "A crowd of people",
      body: "Make well-informed decisions about population health interventions at both the individual and community scale, with privacy safeguards built in for the people you serve.",
      cta: { label: "Learn More", href: "#capabilities" },
    },
    {
      eyebrow: "EMERGENCY PREPAREDNESS, RESPONSE, + RECOVERY",
      image: `${BASE}/shutterstock_1827506501.jpg`,
      alt: "Emergency responders",
      body: "Model scenarios and rehearse for emergencies before they happen, using tools that keep every decision transparent and easy to explain.",
      cta: { label: "Learn More", href: "#capabilities" },
    },
  ] satisfies SolutionCard[],
};

/* ------------------------------ capabilities ------------------------------ */

export const capabilities = {
  heading: "Our Capabilities",
  intro: "Foundry is designed to resolve some of the key challenges caused by a fragmented landscape",
  tabs: [
    {
      tab: "Data Integration + Harmonization",
      number: "01",
      eyebrow: "01 — DATA INTEGRATION + HARMONIZATION",
      heading: "Collect, integrate, and harmonize data flexibly",
      body: "Jicate brings complex, multi-modal data together and harmonizes it into an analysis-ready foundation — built on a secure open architecture, open APIs, and a living ontology.",
      bullets: [
        "Secure integration, transformation, and harmonization of data into one open environment",
        "Bi-directional connectivity to any systems, including EHRs/EMRs",
        "Interoperability of data previously unusable side-by-side",
        "Interoperability of data models and terminologies",
      ],
    },
    {
      tab: "Data Sharing",
      number: "02",
      eyebrow: "02 — DATA SHARING",
      heading: "Share data securely across teams and agencies",
      body: "Share data across organizational boundaries without ever losing control of it. Governance travels with the data, so every agency sees exactly what it is cleared to see.",
      bullets: ["Governed sharing across teams, agencies, and partners", "Fine-grained controls that follow the data everywhere", "A full, auditable record of who shared what, and when"],
    },
    {
      tab: "Data Access",
      number: "03",
      eyebrow: "03 — DATA ACCESS",
      heading: "Grant the right access to the right users",
      body: "Give each person precisely the access their role requires — no more, no less — across the entire data ecosystem.",
      bullets: ["Role- and attribute-based access controls", "Purpose-based permissions enforced automatically", "Every access decision logged for review and audit"],
    },
    {
      tab: "Data Quality",
      number: "04",
      eyebrow: "04 — DATA QUALITY",
      heading: "Ensure data quality and up-to-date data",
      body: "Keep data accurate and current with automated checks that run continuously and flag issues before they ever reach a decision.",
      bullets: ["Automated validation and quality monitoring", "Alerts the moment data drifts or goes stale", "Clear lineage back to every source"],
    },
    {
      tab: "Data-Driven Workflows",
      number: "05",
      eyebrow: "05 — DATA-DRIVEN WORKFLOWS",
      heading: "Operationalize decisions with data-driven workflows",
      body: "Turn analysis into action with configurable workflows that put insight directly in the hands of the people doing the work.",
      bullets: ["Configurable, point-and-click workflows", "Actions wired directly to live data", "Repeatable processes that scale across teams"],
    },
    {
      tab: "Interoperability",
      number: "06",
      eyebrow: "06 — INTEROPERABILITY",
      heading: "Connect systems and standards seamlessly",
      body: "Work across the health data standards and external systems agencies already depend on, so nothing has to be rebuilt from scratch.",
      bullets: ["Support for common health data standards", "Connectivity to existing external systems", "Interoperable data models and terminologies"],
    },
    {
      tab: "Data Privacy + Security",
      number: "07",
      eyebrow: "07 — DATA PRIVACY + SECURITY",
      heading: "Protect data with privacy and security by design",
      body: "Privacy and security are built into the foundation, not bolted on afterwards — protecting sensitive health data at every layer.",
      bullets: ["Privacy-preserving controls on by default", "Security enforced as immutable metadata", "Continuous monitoring and full auditability"],
    },
  ] satisfies CapabilityTab[],
};

/* -------------------------------- resources ------------------------------- */

export const resources = {
  heading: "Resources",
  cards: [
    {
      image: `${BASE}/shutterstock_1481978897__1_.jpg`,
      body: "A public-health leader shares what it takes to meet a crisis head-on — and to sustain the response long after the first surge has passed.",
      cta: { label: "Watch the Talk", href: "#" },
    },
    {
      image: `${BASE}/shutterstock_1652886169.jpg`,
      body: "An impact study on how a large federal agency used Jicate's interoperability capabilities to connect data that had never worked together before.",
      cta: { label: "Download Impact Study", href: "#" },
    },
    {
      image: `${BASE}/shutterstock_297132446.jpg`,
      body: "How one hospital is building a connected health system on Jicate — and improving patient outcomes along the way.",
      cta: { label: "Read Blog Post", href: "#" },
    },
    {
      image: `${BASE}/john-towner-p-rN-n6Miag-unsplash.jpg`,
      body: "A walkthrough of how teams across life sciences and manufacturing put Jicate to work in their day-to-day operations.",
      cta: { label: "Watch the Demo", href: "#" },
    },
  ] satisfies ResourceCard[],
};


/* --------------------------------- form ----------------------------------- */

export const contactForm = {
  title: "Interested in solving problems with Jicate software?",
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
