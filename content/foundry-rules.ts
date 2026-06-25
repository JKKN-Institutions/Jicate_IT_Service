/**
 * Content for the /foundry-rules page — a faithful design rebuild of the
 * reference "Foundry Rules & Real-Time Alerting" page, mapped onto this
 * project's design system. Layout/visual treatment matches the reference 1:1;
 * all body copy is ORIGINAL Jicate content written in our own words (only short
 * functional labels/headings are kept). The testimonial is a neutral
 * placeholder. The user edits final wording.
 *
 * Types are declared locally so the page is fully self-contained.
 *
 * Local media (in /public/foundry-rules):
 *   FoundryRules_KeyFeatures.png                    — Key Features image
 *   Asset_22RULES.png / Asset_23RULES.png /
 *   Asset_24RULES.png                               — How It Works step images
 *   Asset_25bp.png                                  — testimonial logo
 *   Foundry_Rules_-_applications_2_-_cropped.jpg    — Applications image
 *   (hero video poster Asset_21RULES not shipped — placeholder used)
 */

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
}

/** A "Key Features" entry: bold lead phrase + body. */
export interface Feature {
  title: string;
  body: string;
}

/** A step in How It Works: heading + body + image, with a media side. */
export interface Step {
  title: string;
  body: string;
  image: string;
  alt: string;
  mediaSide: "left" | "right";
}

/** A use-case in the Applications grid: title + body. */
export interface UseCase {
  title: string;
  body: string;
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Foundry Rules & Real-Time Alerting",
  body: "Turn your experts' know-how into object-aware alerts, and wire those alerts straight to action across the business.",
};

/* ------------------------- hero media / spotlight band -------------------- */

export const spotlightBand = {
  eyebrow: "Jicate Spotlight",
  title: "Foundry Rules & Real-Time Alerting",
  body: "Author rules, watch live data, and route alerts to the people who can act on them.",
  playLabel: "Play Video",
  wordmark: "Jicate",
  copyright:
    "© 2026 Jicate IT Service. The information in this video is provided for informational purposes only. Actual results and experiences may vary.",
};

/* ------------------------------- quote band ------------------------------- */

export const quote = {
  logo: "/foundry-rules/Asset_25bp.png",
  logoAlt: "Customer logo",
  paragraphs: [
    "We needed a way inside Foundry to surface trends and events across weeks or months from our streaming data. With well over a hundred rules already running, the team can monitor a huge range of equipment in real time.",
    "Foundry Rules & Real-Time Alerting retired a pile of bespoke dashboards for us. Its flexible, low-code approach made it easy for people across the company to pick up and roll out.",
  ],
  attribution: "— Principal Product Manager, Energy",
};

/* ------------------------------ key features ------------------------------ */

export const keyFeatures = {
  heading: "Key Features",
  image: "/foundry-rules/FoundryRules_KeyFeatures.png",
  alt: "Foundry Rules key features",
  ontologyLink: { label: "Foundry Ontology", href: "#foundry-ontology" } satisfies CTA,
  features: [
    {
      title: "Flexible Rule Authoring.",
      body: "Build rules on top of datasets, ontology objects, time series, and more — with the Foundry Ontology giving every rule a real-world picture of your business to work from.",
    },
    {
      title: "Backtesting on Historical Data.",
      body: "Try a candidate rule against your history first, so you can ship it to production knowing how it would have behaved.",
    },
    {
      title: "Rule Proposals.",
      body: "Bring software-style change management to rules: propose and revise them through pull requests, with many edits in flight at once — each submitted, reviewed, and tracked.",
    },
    {
      title: "Advanced Integrations.",
      body: "Raise alerts inside the platform or push them out to third-party tools — incident response, text messages, and more — so they reach the right decision-makers wherever they are.",
    },
    {
      title: "Model-Driven Alert Resolution.",
      body: "Every decision made on an alert is captured and fed back into models, which then suggest fixes — or act on alerts automatically — to cut response time when it matters most.",
    },
  ] satisfies Feature[],
};

/* ------------------------------ how it works ------------------------------ */

export const howItWorks = {
  heading: "How It Works",
  steps: [
    {
      title: "Make the rules.",
      body: "Rules work best when the people who know the domain build them — no coding needed. A point-and-click, low-code interface lets non-technical users own and tune complex business logic themselves.",
      image: "/foundry-rules/Asset_22RULES.png",
      alt: "Authoring rules",
      mediaSide: "left",
    },
    {
      title: "Any data. Any time.",
      body: "Run rules over datasets, objects, and time series with billions of streaming points for live monitoring and alerting — all inside the Foundry Ontology, so users always work against a real-world view.",
      image: "/foundry-rules/Asset_23RULES.png",
      alt: "Monitoring any data in real time",
      mediaSide: "right",
    },
    {
      title: "Connect alerts to action.",
      body: "Act on alerts from Workshop apps. In-platform metrics show the impact of each choice as you resolve an alert, and the Foundry Ontology coordinates the systems involved — closing the loop and feeding what's learned back into the next decision.",
      image: "/foundry-rules/Asset_24RULES.png",
      alt: "Connecting alerts to action",
      mediaSide: "left",
    },
  ] satisfies Step[],
};

/* ------------------------------ applications ------------------------------ */

export const applications = {
  heading: "Applications",
  image: "/foundry-rules/Foundry_Rules_-_applications_2_-_cropped.jpg",
  alt: "Foundry Rules applications",
  useCases: [
    {
      title: "Equipment Monitoring.",
      body: "Raise alerts on possible equipment wear or damage from sensor readings such as temperature or pressure.",
    },
    {
      title: "Cohorting.",
      body: "Sort entities into groups or cohorts based on shared attributes for sharper, more targeted action.",
    },
    {
      title: "Service Availability.",
      body: "Keep an eye on service uptime to head off interruptions and avoid triggering costly contractual penalties.",
    },
    {
      title: "Data Labeling.",
      body: "Define automatic labeling rules that turn raw data points into clean inputs for AI/ML models.",
    },
    {
      title: "Anti-Money Laundering.",
      body: "Flag suspicious activity with rules that look at both individual transactions and aggregate patterns.",
    },
    {
      title: "Quality Control.",
      body: "Spot the patterns that point to a substandard product and stop defective goods before they ship.",
    },
  ] satisfies UseCase[],
};

/* --------------------------------- form ----------------------------------- */

export const contactForm = {
  title: "Get in touch.",
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "jobTitle", label: "Job Title", type: "text", required: true },
    { name: "businessEmail", label: "Business Email", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: false },
    { name: "company", label: "Company / Institution", type: "text", required: true },
    { name: "country", label: "Country", type: "select", required: true },
  ],
  message: { name: "message", label: "How can we help?", type: "textarea", required: false },
  submitLabel: "Submit",
  privacyHref: "/privacy",
};
