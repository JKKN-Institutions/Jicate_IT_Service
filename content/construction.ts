/**
 * Content for the /construction page — a faithful DESIGN rebuild of the
 * reference "Palantir for Construction" offering page, mapped onto this
 * project's design system. Layout/visual treatment matches the reference 1:1;
 * the page is DARK (rgb(30,33,36) background, white text).
 *
 * IMPORTANT: the reference's marketing prose, customer quotes, and specific
 * statistics are the source's own content — they are NOT reproduced here.
 * Long-form copy, testimonials, and stats below are neutral PLACEHOLDER text;
 * short functional labels (tab/feature names, form fields) are kept for parity.
 * The user replaces all copy.
 *
 * Types are declared locally so the page is fully self-contained.
 *
 * Local media (in /public/construction):
 *   shutterstock_1173398077.jpg                              — hero background
 *   Construction_Landing_Page_-_Product_montage2_4x.png      — intro montage
 *   Industry_Domination_Construction_Ontology_Final2_4x.png  — ontology diagram
 */

const BASE = "/construction";

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
}

export interface Feature {
  name: string;
  body: string;
}

export interface CapabilityTab {
  key: string;
  label: string;
  /** Two short intro paragraphs shown in the middle column. */
  intro: string[];
  features: Feature[];
}

export interface ImpactStep {
  id: string;
  label: string;
  stats: string[];
}

export interface Testimonial {
  n: string;
  quote: string;
}

export interface ExploreCard {
  kind: string;
  title: string;
  cta: string;
  href: string;
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Jicate for Construction",
  subtitle: "AI-Powered Automation for Every Construction Decision",
  image: `${BASE}/shutterstock_1173398077.jpg`,
  alt: "Aerial view of a construction site",
};

/* ------------------------------- intro band ------------------------------- */

export const intro = {
  heading: "Bringing AI Into Real-World Construction",
  body: "Placeholder lead paragraph. Describe how the platform encodes the decisions of your enterprise, drives autonomy into core operations, and transforms the operating leverage of your construction business.",
  montage: `${BASE}/Construction_Landing_Page_-_Product_montage2_4x.png`,
  montageAlt: "Montage of construction operations dashboards",
};

/* ------------------------------ the ontology ------------------------------ */

export const ontology = {
  heading: "The Construction Ontology",
  paragraphs: [
    "Placeholder paragraph. Describe how the Ontology integrates core functions — from pre-construction to procurement, job-site execution, and project closeout — through a unified semantic layer.",
    "Placeholder paragraph. Explain how it standardizes the way departments interact with shared business objects like projects, activities, equipment, and subcontractors.",
    "Placeholder paragraph. Built from a field-first perspective, describe how it connects what happens on the job site to the systems that support it in a low/no-code environment.",
    "Placeholder paragraph. Describe how the platform bridges foundational systems (ERP, project management, BIM, accounting, equipment management) and critical use cases to enable AI-powered decisions.",
  ],
  image: `${BASE}/Industry_Domination_Construction_Ontology_Final2_4x.png`,
  alt: "Layered isometric diagram of the construction ontology",
};

/* ------------------------------ capabilities ------------------------------ */

const placeholderIntro = [
  "Placeholder paragraph. Describe the challenge this area faces and why it demands precision under pressure.",
  "Placeholder paragraph. Explain how the platform unifies fragmented data to accelerate the entire process and reduce cycle time.",
];

export const capabilities = {
  tabs: [
    {
      key: "estimating",
      label: "Estimating",
      intro: placeholderIntro,
      features: [
        { name: "Automated Takeoffs", body: "Placeholder description. Replace with your own copy." },
        { name: "Specification Extraction", body: "Placeholder description. Replace with your own copy." },
        { name: "Risk Assessment", body: "Placeholder description. Replace with your own copy." },
        { name: "Capital Planning", body: "Placeholder description. Replace with your own copy." },
      ],
    },
    {
      key: "procurement",
      label: "Procurement",
      intro: placeholderIntro,
      features: [
        { name: "Three-Way Match Reconciliation", body: "Placeholder description. Replace with your own copy." },
        { name: "Contract & Framework Agreement Management", body: "Placeholder description. Replace with your own copy." },
        { name: "Vendor Management", body: "Placeholder description. Replace with your own copy." },
        { name: "Material Needs Forecasting", body: "Placeholder description. Replace with your own copy." },
      ],
    },
    {
      key: "labor",
      label: "Labor",
      intro: placeholderIntro,
      features: [
        { name: "Digital Time Cards & Scheduling", body: "Placeholder description. Replace with your own copy." },
        { name: "Recruiting", body: "Placeholder description. Replace with your own copy." },
        { name: "HR Integration", body: "Placeholder description. Replace with your own copy." },
        { name: "Training and Rollout", body: "Placeholder description. Replace with your own copy." },
      ],
    },
    {
      key: "equipment",
      label: "Equipment",
      intro: placeholderIntro,
      features: [
        { name: "Equipment Utilization Analytics", body: "Placeholder description. Replace with your own copy." },
        { name: "Intelligent Dispatch", body: "Placeholder description. Replace with your own copy." },
        { name: "Equipment Allocation & Costing", body: "Placeholder description. Replace with your own copy." },
        { name: "Fleet Management", body: "Placeholder description. Replace with your own copy." },
      ],
    },
    {
      key: "subcontractors",
      label: "Subcontractors",
      intro: placeholderIntro,
      features: [
        { name: "Supplier 360", body: "Placeholder description. Replace with your own copy." },
        { name: "Scheduling & Scoring", body: "Placeholder description. Replace with your own copy." },
        { name: "Scope of Work Authoring", body: "Placeholder description. Replace with your own copy." },
        { name: "Subcontractor Cashflow Management", body: "Placeholder description. Replace with your own copy." },
      ],
    },
    {
      key: "project-management",
      label: "Project Management",
      intro: placeholderIntro,
      features: [
        { name: "Project 360", body: "Placeholder description. Replace with your own copy." },
        { name: "Schedule Management", body: "Placeholder description. Replace with your own copy." },
        { name: "Long Term Resource Planning", body: "Placeholder description. Replace with your own copy." },
        { name: "Finance Management", body: "Placeholder description. Replace with your own copy." },
      ],
    },
    {
      key: "production-execution",
      label: "Production & Execution",
      intro: placeholderIntro,
      features: [
        { name: "Buyout-to-Closeout Acceleration", body: "Placeholder description. Replace with your own copy." },
        { name: "Real-Time Job Costing", body: "Placeholder description. Replace with your own copy." },
        { name: "Change Order Capture", body: "Placeholder description. Replace with your own copy." },
      ],
    },
    {
      key: "back-office",
      label: "Back Office",
      intro: placeholderIntro,
      features: [
        { name: "AP/AR Automation", body: "Placeholder description. Replace with your own copy." },
        { name: "Payroll", body: "Placeholder description. Replace with your own copy." },
        { name: "Invoice Generation", body: "Placeholder description. Replace with your own copy." },
      ],
    },
  ] satisfies CapabilityTab[],
};

/* -------------------------------- impact ---------------------------------- */

export const impact = {
  heading: "Driving Real Impact at Scale",
  subhead: "We help leading construction and engineering firms dominate the market.",
  steps: [
    {
      id: "0.1",
      label: "Gain an Unfair Advantage",
      stats: [
        "Placeholder stat. Describe a multi-year supply-chain and inventory cost saving achieved through optimized operations.",
        "Placeholder stat. Describe a procurement cost saving with a strong ROI and short payback period.",
      ],
    },
    {
      id: "0.2",
      label: "Deliver at Speed",
      stats: [
        "Placeholder stat. Describe delivering a digital twin for a large project portfolio in days, not months.",
        "Placeholder stat. Describe developing a production-ready savings use case in just a couple of days.",
      ],
    },
    {
      id: "0.3",
      label: "Save Time",
      stats: [
        "Placeholder stat. Describe reducing material and crew allocation from weeks to minutes with automated workflows.",
        "Placeholder stat. Describe cutting project reporting cycles from days to real time.",
        "Placeholder stat. Describe foremen reducing timecard collection from an hour to a few minutes.",
      ],
    },
    {
      id: "0.4",
      label: "Fortify Your Supply Chain",
      stats: [
        "Placeholder stat. Describe decreasing material shortages and out-of-stock risk through predictive alerts.",
        "Placeholder stat. Describe enabling proactive response to disruptions and better supplier monitoring.",
      ],
    },
  ] satisfies ImpactStep[],
};

/* ------------------------------ testimonials ------------------------------ */

export const testimonials = {
  heading: "What Construction Leaders Are Saying",
  items: [
    { n: "01", quote: "Placeholder testimonial. Replace with your own customer quote about platform accessibility and adoption across the team." },
    { n: "02", quote: "Placeholder testimonial. Replace with your own customer quote about the data model being a competitive advantage." },
    { n: "03", quote: "Placeholder testimonial. Replace with your own customer quote about company-wide daily usage and impact." },
    { n: "04", quote: "Placeholder testimonial. Replace with your own customer quote about speed of delivery and time saved." },
    { n: "05", quote: "Placeholder testimonial. Replace with your own customer quote about field-to-office collaboration." },
    { n: "06", quote: "Placeholder testimonial. Replace with your own customer quote about cost savings and ROI." },
  ] satisfies Testimonial[],
};

/* ------------------------------- continue --------------------------------- */

export const explore = {
  heading: "Continue Exploring",
  cards: [
    { kind: "KEYNOTE VIDEO", title: "Placeholder card title. A leading contractor reveals how they deploy decades of tradecraft to every project.", cta: "Watch the Video", href: "#" },
    { kind: "KEYNOTE VIDEO", title: "Placeholder card title. A general contractor shares how they use the platform to drive efficiency.", cta: "Watch the Video", href: "#" },
    { kind: "KEYNOTE VIDEO", title: "Placeholder card title. An operations leader showcases total operations management and daily reporting.", cta: "Watch the Video", href: "#" },
    { kind: "BLOG", title: "Placeholder card title. Read how partners are building construction's operating system for the 21st century.", cta: "Read the Blog", href: "#" },
    { kind: "PODCAST", title: "Placeholder card title. Leaders discuss how the best software can mold to the most physical industry and drive ROI.", cta: "Watch the Podcast", href: "#" },
    { kind: "INTERVIEW", title: "Placeholder card title. A forward-deployed architect shares how AI is powering operations across construction.", cta: "Watch the Video", href: "#" },
  ] satisfies ExploreCard[],
};

/* -------------------------------- cta band -------------------------------- */

export const ctaBand = {
  text: "Learn more about building systems that will safeguard the future of construction.",
  link: { label: "Get in touch", href: "#contact" } satisfies CTA,
};

/* --------------------------------- form ----------------------------------- */

export const contactForm = {
  title: "Gain an unfair advantage with Jicate",
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "company", label: "Company Name", type: "text", required: true },
    { name: "jobTitle", label: "Job Title", type: "text", required: true },
    { name: "country", label: "Country", type: "select", required: true },
  ],
  optInLabel: "Opt-in to receive educational resources",
  submitLabel: "Submit",
  privacyHref: "/privacy",
};
