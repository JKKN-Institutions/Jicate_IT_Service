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
  heading: "Jicate Brings AI Into the Real World",
  body: "Capture how your business actually makes decisions, push automation deep into your core operations, and fundamentally reshape the operating leverage of your construction firm.",
  montage: `${BASE}/Construction_Landing_Page_-_Product_montage2_4x.png`,
  montageAlt: "Montage of construction operations dashboards",
};

/* ------------------------------ the ontology ------------------------------ */

export const ontology = {
  heading: "The Construction Ontology",
  paragraphs: [
    "The Construction Ontology ties every core function together — from pre-construction and procurement to job-site execution and project closeout — through one unified semantic layer.",
    "At its heart, it gives departments a shared, consistent way to work with the same business objects — projects, activities, equipment, subcontractors — with common definitions and real-time synchronization across the organization.",
    "Designed field-first, it links what actually happens on the job site to the systems behind it, in a low/no-code environment that anyone can use regardless of technical background.",
    "Foundry closes the gap between your foundational systems — ERP, project management, BIM, accounting, equipment management — and the use cases that matter, powering AI-driven decisions that anticipate scheduling delays before they hit and keep work moving.",
  ],
  image: `${BASE}/Industry_Domination_Construction_Ontology_Final2_4x.png`,
  alt: "Layered isometric diagram of the construction ontology",
};

/* ------------------------------ capabilities ------------------------------ */

const placeholderIntro = [
  "This part of the business runs on precision under pressure — critical calls are often squeezed into tight, rigid timelines that leave little room for error.",
  "Jicate AIP pulls together data that would otherwise stay scattered across systems, accelerating the whole process so teams can shift from manual data-gathering to strategic analysis and cut cycle time.",
];

export const capabilities = {
  tabs: [
    {
      key: "estimating",
      label: "Estimating",
      intro: placeholderIntro,
      features: [
        { name: "Automated Takeoffs", body: "Pull parts and materials straight from drawings and 3D models and standardize them — smoothing the path from RFP to engineering design to packaged line items." },
        { name: "Specification Extraction", body: "Automatically read and organize project specifications instead of combing through them by hand." },
        { name: "Risk Assessment", body: "Flag high-risk specifications and unusual scope items early, before they turn into costly surprises." },
        { name: "Capital Planning", body: "Forecast resource needs and budget allocation using historical cost data and past project performance." },
      ],
    },
    {
      key: "procurement",
      label: "Procurement",
      intro: placeholderIntro,
      features: [
        { name: "Three-Way Match Reconciliation", body: "Automatically match purchase orders, receipts, and invoices so discrepancies surface instantly and approvals move faster." },
        { name: "Contract & Framework Agreement Management", body: "Keep contracts and framework agreements organized and enforceable, with pricing and terms applied consistently across every project." },
        { name: "Vendor Management", body: "Track vendor performance, pricing, and reliability in one place to inform smarter sourcing decisions." },
        { name: "Material Needs Forecasting", body: "Predict what materials each project will need and when — reducing both shortages and costly over-ordering." },
      ],
    },
    {
      key: "labor",
      label: "Labor",
      intro: placeholderIntro,
      features: [
        { name: "Digital Time Cards & Scheduling", body: "Capture time and build crew schedules digitally, replacing paper and spreadsheets with a single live view." },
        { name: "Recruiting", body: "Streamline hiring by connecting open roles, candidate pipelines, and real project demand." },
        { name: "HR Integration", body: "Sync workforce data with your HR systems so records stay accurate and current everywhere." },
        { name: "Training and Rollout", body: "Onboard teams quickly with guided training and a rollout path that meets crews where they are." },
      ],
    },
    {
      key: "equipment",
      label: "Equipment",
      intro: placeholderIntro,
      features: [
        { name: "Equipment Utilization Analytics", body: "See how every machine is actually used across sites to cut idle time and improve returns on your fleet." },
        { name: "Intelligent Dispatch", body: "Send the right equipment to the right job at the right time with data-driven dispatch decisions." },
        { name: "Equipment Allocation & Costing", body: "Allocate machines across projects and attribute their true cost with precision." },
        { name: "Fleet Management", body: "Manage the health, location, and maintenance of your entire fleet from one place." },
      ],
    },
    {
      key: "subcontractors",
      label: "Subcontractors",
      intro: placeholderIntro,
      features: [
        { name: "Supplier 360", body: "Get one complete view of every subcontractor — performance, scope, and history captured in a single profile." },
        { name: "Scheduling & Scoring", body: "Schedule subcontractors and score them on reliability and quality to guide future awards." },
        { name: "Scope of Work Authoring", body: "Draft clear, consistent scopes of work that leave far less room for disputes down the line." },
        { name: "Subcontractor Cashflow Management", body: "Track subcontractor payments and cashflow to keep both projects and partners on solid footing." },
      ],
    },
    {
      key: "project-management",
      label: "Project Management",
      intro: placeholderIntro,
      features: [
        { name: "Project 360", body: "Bring schedule, cost, and field data into a single view of every project's health." },
        { name: "Schedule Management", body: "Build, adjust, and monitor schedules with live data flowing in from the job site." },
        { name: "Long Term Resource Planning", body: "Plan crews, equipment, and materials across the whole portfolio — not just the next job." },
        { name: "Finance Management", body: "Keep budgets, costs, and forecasts connected so financial surprises don't derail delivery." },
      ],
    },
    {
      key: "production-execution",
      label: "Production & Execution",
      intro: placeholderIntro,
      features: [
        { name: "Buyout-to-Closeout Acceleration", body: "Compress the journey from buyout to closeout with connected data and automated hand-offs at every stage." },
        { name: "Real-Time Job Costing", body: "Track job costs as they happen — not weeks later — so teams can act while it still makes a difference." },
        { name: "Change Order Capture", body: "Capture change orders the moment they arise to protect margins and keep records clean." },
      ],
    },
    {
      key: "back-office",
      label: "Back Office",
      intro: placeholderIntro,
      features: [
        { name: "AP/AR Automation", body: "Automate accounts payable and receivable to speed up cycles and cut down on manual errors." },
        { name: "Payroll", body: "Run payroll on accurate, connected time and workforce data." },
        { name: "Invoice Generation", body: "Generate invoices automatically from project and cost data, reducing delays and disputes." },
      ],
    },
  ] satisfies CapabilityTab[],
};

/* -------------------------------- impact ---------------------------------- */

export const impact = {
  heading: "Jicate Drives Real Impact at Scale",
  subhead: "We help leading construction & engineering firms dominate the market.",
  steps: [
    {
      id: "0.1",
      label: "Gain an Unfair Advantage",
      stats: [
        "Unlock major multi-year savings across supply chain and inventory by optimizing day-to-day operations.",
        "Drive substantial procurement cost savings with a strong return on investment and a short payback period.",
      ],
    },
    {
      id: "0.2",
      label: "Deliver at Speed",
      stats: [
        "Stand up a digital twin for a large, multi-project portfolio in days rather than months.",
        "Build a production-ready savings use case for a construction firm in a matter of days.",
      ],
    },
    {
      id: "0.3",
      label: "Save Time",
      stats: [
        "Cut material and crew allocation from weeks to minutes with automated decision workflows.",
        "Shrink project reporting cycles from days to real time, so teams and contractors collaborate instantly.",
        "Help foremen reduce timecard collection from roughly an hour to just a few minutes.",
      ],
    },
    {
      id: "0.4",
      label: "Fortify Your Supply Chain",
      stats: [
        "Reduce material shortages and out-of-stock risk through predictive alerts and integrated vendor management.",
        "Respond proactively to disruptions, heading off costly delays and sharpening supplier performance monitoring.",
      ],
    },
  ] satisfies ImpactStep[],
};

/* ------------------------------ testimonials ------------------------------ */

export const testimonials = {
  heading: "What Construction Leaders Are Saying",
  items: [
    { n: "01", quote: "It's the rare piece of software that everyone on the team can actually pick up and use — adoption was quick, from the field to the front office." },
    { n: "02", quote: "The data model has become a genuine competitive advantage for us; it's the foundation everything else now runs on." },
    { n: "03", quote: "It's not a system a few analysts log into — it's used across the company, every single day." },
    { n: "04", quote: "What used to take months, we now deliver in days. The speed has completely changed how we plan." },
    { n: "05", quote: "For the first time, the job site and the back office are truly looking at the same information at the same time." },
    { n: "06", quote: "The cost savings paid the investment back fast, and they keep compounding as we scale it across projects." },
  ] satisfies Testimonial[],
};

/* ------------------------------- continue --------------------------------- */

export const explore = {
  heading: "Continue Exploring",
  cards: [
    { kind: "KEYNOTE VIDEO", title: "A leading general contractor reveals how they bring generations of tradecraft to every project.", cta: "Watch the Video", href: "#" },
    { kind: "KEYNOTE VIDEO", title: "A general contractor shares how they use the platform to drive dramatic efficiency gains.", cta: "Watch the Video", href: "#" },
    { kind: "KEYNOTE VIDEO", title: "An operations leader showcases total operations management and daily site reporting in action.", cta: "Watch the Video", href: "#" },
    { kind: "BLOG", title: "Read how partners are building construction's operating system for the 21st century.", cta: "Read the Blog", href: "#" },
    { kind: "PODCAST", title: "Leaders discuss how great software can bend to fit the most physical of industries — and drive real ROI.", cta: "Watch the Podcast", href: "#" },
    { kind: "INTERVIEW", title: "A forward-deployed architect shares how AI is powering operations across construction and utilities.", cta: "Watch the Video", href: "#" },
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
    { name: "country", label: "Country", type: "select", required: true },
  ],
  optInLabel: "Opt-in to receive educational resources",
  submitLabel: "Submit",
  privacyHref: "/privacy",
};
