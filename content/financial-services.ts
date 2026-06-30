/**
 * Content for the /financial-services page — a faithful DESIGN rebuild of the
 * reference "Palantir for Financial Services" page, mapped onto this project's
 * design system. Layout matches the reference 1:1; a DARK hero band over a
 * LIGHT body.
 *
 * IMPORTANT: the reference's marketing prose, customer case studies, and the
 * executive quote are the source's own content — they are NOT reproduced here.
 * Long-form copy, the quote, and partner/case details below are neutral
 * PLACEHOLDER text; short functional labels (section titles, tab/feature names,
 * form fields) are kept for parity. User replaces all copy.
 *
 * Local media (in /public/financial-services):
 *   img.webp                          — full-bleed hero image
 *   AIPCon7_YouTubeThumbail_Citi__1_.jpg — Driving Outcomes tab-1 video thumb
 */

const BASE = "/financial-services";

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
}

export interface OutcomeTab {
  tab: string;
  quote: string;
  attribution: string;
  partner: string;
  challenge: string;
  solution: string;
  bullets: string[];
  image: string | null;
  alt: string;
  link: CTA;
}

export interface WorkFeature {
  title: string;
  body: string;
}

export interface WorkArea {
  title: string;
  tagline: string;
  features: WorkFeature[];
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Jicate for Financial Services",
  image: `${BASE}/img.webp`,
  alt: "Looking up at glass skyscrapers",
};

/* --------------------------------- intro ---------------------------------- */

export const intro = {
  tagline: "Helping financial institutions meet the demands of tomorrow's customers, regulators, and markets.",
  paragraphs: [
    "Placeholder paragraph. Describe the ability to operate in highly regulated environments, combined with a focus on security, governance, and data that enables operational efficiency for analysts and engineers.",
    "Placeholder paragraph. Move beyond data visualization and point analytics, and achieve organizational transformation with a solution that connects data to business outcomes.",
  ],
};

/* -------------------------- driving industry outcomes --------------------- */

export const outcomes = {
  heading: "Driving Industry Outcomes",
  tabs: [
    {
      tab: "Redefining Wealth Management",
      quote: "Placeholder quote. This process would take days, and now it takes seconds…",
      attribution: "Placeholder Name, Title",
      partner: "Placeholder Partner",
      challenge: "Placeholder challenge. Describe the operational single source of truth needed for customer data to prevent inconsistencies and eliminate manual processes.",
      solution: "Placeholder solution. Describe the unified interface built to run agentic workflows on top of customer data to streamline and automate key workflows.",
      bullets: [
        "Time to open an account reduced from days to seconds",
        "Number of people required to open new accounts reduced significantly",
      ],
      image: `${BASE}/AIPCon7_YouTubeThumbail_Citi__1_.jpg`,
      alt: "Keynote video thumbnail",
      link: { label: "Watch full keynote", href: "#" },
    },
    {
      tab: "Accelerating Compliance with Single Client View",
      quote: "Placeholder quote. Replace with your own customer statement.",
      attribution: "Placeholder Name, Title",
      partner: "Placeholder Partner",
      challenge: "Placeholder challenge. Replace with your own case-study copy.",
      solution: "Placeholder solution. Replace with your own case-study copy.",
      bullets: ["Placeholder outcome one", "Placeholder outcome two"],
      image: null,
      alt: "Case study media",
      link: { label: "Learn More", href: "#" },
    },
    {
      tab: "Digitizing a Global Bank",
      quote: "Placeholder quote. Replace with your own customer statement.",
      attribution: "Placeholder Name, Title",
      partner: "Placeholder Partner",
      challenge: "Placeholder challenge. Replace with your own case-study copy.",
      solution: "Placeholder solution. Replace with your own case-study copy.",
      bullets: ["Placeholder outcome one", "Placeholder outcome two"],
      image: null,
      alt: "Case study media",
      link: { label: "Learn More", href: "#" },
    },
    {
      tab: "Streamlining Next Best Offer Marketing",
      quote: "Placeholder quote. Replace with your own customer statement.",
      attribution: "Placeholder Name, Title",
      partner: "Placeholder Partner",
      challenge: "Placeholder challenge. Replace with your own case-study copy.",
      solution: "Placeholder solution. Replace with your own case-study copy.",
      bullets: ["Placeholder outcome one", "Placeholder outcome two"],
      image: null,
      alt: "Case study media",
      link: { label: "Learn More", href: "#" },
    },
  ] satisfies OutcomeTab[],
};

/* ------------------------------ where we work ----------------------------- */

const fBody = "Placeholder description. Replace with your own copy describing this capability and the value it delivers.";

export const work = {
  heading: "Where We Work",
  areas: [
    {
      title: "Retail & Investment Banking",
      tagline: "Unify customer knowledge to optimize marketing, pricing and services throughout the entire customer lifecycle.",
      features: [
        { title: "Customer 360", body: fBody },
        { title: "Client Onboarding", body: fBody },
        { title: "Next Best Offer", body: fBody },
      ],
    },
    {
      title: "Asset Management",
      tagline: "Bring portfolio, market, and operational data together to sharpen decisions across the investment lifecycle.",
      features: [
        { title: "Portfolio 360", body: fBody },
        { title: "Risk & Compliance", body: fBody },
      ],
    },
    {
      title: "Private Equity",
      tagline: "Accelerate diligence, fundraising, and value creation with a connected view of every deal and portfolio company.",
      features: [
        { title: "Screening & Diligence", body: fBody },
        { title: "Fundraising DDQ", body: fBody },
      ],
    },
  ] satisfies WorkArea[],
};

/* --------------------------------- form ----------------------------------- */

export const contactForm = {
  title: "Get in Touch",
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "businessEmail", label: "Business Email Address", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: true },
    { name: "jobTitle", label: "Job Title", type: "text", required: true },
    { name: "company", label: "Company Name", type: "text", required: true },
    { name: "country", label: "Country", type: "select", required: true },
  ],
  submitLabel: "Submit",
  privacyHref: "/privacy",
};
