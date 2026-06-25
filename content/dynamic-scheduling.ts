/**
 * Content for the /dynamic-scheduling page — a faithful design rebuild of the
 * reference "Foundry Dynamic Scheduling" page, mapped onto this project's design
 * system. Layout/visual treatment matches the reference 1:1; long-form body copy
 * is ORIGINAL Jicate content (short functional labels/headings are kept). The
 * user edits final wording.
 *
 * Types are declared locally so the page is fully self-contained.
 *
 * Local media (in /public/dynamic-scheduling):
 *   Screenshot_2023-01-27_at_11.09.56_AM_copy_2.png — Key Features isometric art
 *   Asset_28TPM_Monitor.png                         — How It Works "Connect" diagram
 *   Asset_8TPM_Monitor.png                          — How It Works "Define" screenshot
 *   Gantt.mp4                                       — How It Works "Optimize" clip
 *   Scenarios.mp4                                   — How It Works "Learn" clip
 *   (hero spotlight poster + CERAWeek photo not shipped — placeholders used)
 */

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
}

/** A "Key Features" entry: bold lead phrase + body + optional inline links. */
export interface Feature {
  title: string;
  body: string;
  links?: CTA[];
}

/** One numbered step in "How It Works": label + body + media. */
export interface Step {
  title: string;
  body: string;
  /** Image path (the screenshot/diagram), or null. */
  image?: string;
  alt?: string;
  /** Looping clip path, or null. */
  video?: string;
  /** Which side the media sits on at desktop. */
  mediaSide: "left" | "right";
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "Foundry Dynamic Scheduling",
  body: "Translate your real-world complexity into real-time adaptation. All while planning for the future.",
};

/* ------------------------- hero spotlight media band ----------------------- */

export const spotlightBand = {
  eyebrow: "Jicate Spotlight:",
  title: "Dynamic Scheduling Primitives",
  body: "Automatically trigger actions to downstream operational systems.",
  playLabel: "Play Video",
  wordmark: "Jicate",
  copyright:
    "© 2026 Jicate IT Service. The information in this video is provided for informational purposes only. Actual results and experiences may vary.",
};

/* ------------------------------ key features ------------------------------ */

export const keyFeatures = {
  heading: "Key Features",
  image: "/dynamic-scheduling/Screenshot_2023-01-27_at_11.09.56_AM_copy_2.png",
  alt: "Dynamic scheduling primitives",
  features: [
    {
      title: "Point and click problem formulation.",
      body: "Encode your operational constraints and define permitted and optimal behavior in schedules with a point-and-click, low-code interface. Configure temporal and condition-based logic in the Foundry Rules app.",
      links: [
        { label: "Foundry Rules", href: "#foundry-rules" },
        { label: "Foundry Ontology", href: "#foundry-ontology" },
      ],
    },
    {
      title: "Full impact visibility and response.",
      body: "Surface conflicts and dependencies from all actions — actual and proposed — so users can evaluate the impact on cross-business processes before implementation and determine viable alternatives during disruptions.",
    },
    {
      title: "Condition-based triggers.",
      body: "Configure complex conditional logic to automatically trigger actions in response to schedule changes, permeating downstream impacts across disparate systems and teams.",
    },
    {
      title: "Collaboration on a common planning interface.",
      body: "Enable a variety of user profiles — from operators to data scientists — to interact with all facets of scheduling, with customizable UIs and interoperability with external platforms.",
    },
    {
      title: "Cross-time horizon planning.",
      body: "Resolve conflicts between short- and long-term plans to meet business KPIs using a drag-and-drop-style Gantt chart with a built-in simulator.",
    },
    {
      title: "Optimization.",
      body: "Integrate with external third-party solvers using Foundry APIs, or build custom recommendation engines for dynamic plans in the long term and to identify incremental opportunities in real time.",
    },
  ] satisfies Feature[],
};

/* -------------------------------- spotlight ------------------------------- */

export const spotlight = {
  heading: "Spotlight",
  title: "AI-Powered Scheduling Optimization, Powered by Foundry Dynamic Scheduling",
  // Reference photo (CERAWeek) not shipped in /public/dynamic-scheduling — set
  // a path here to swap in the real asset; null renders a neutral placeholder.
  image: null as string | null,
  alt: "Scheduling spotlight",
  body: "A conversation on making AI operational across heavy industry — how dynamic scheduling turns real-time data into decisions for critical institutions across the globe.",
  link: { label: "Learn More", href: "#learn-more" } satisfies CTA,
};

/* ------------------------------ how it works ------------------------------ */

export const howItWorks = {
  heading: "How It Works",
  steps: [
    {
      title: "Connect.",
      body: "Establish a real-time common operating picture for your entire organization with the Foundry Ontology, integrating all relevant data and models with out-of-the-box connectors.",
      image: "/dynamic-scheduling/Asset_28TPM_Monitor.png",
      alt: "Ontology connecting data and models",
      mediaSide: "left",
    },
    {
      title: "Define.",
      body: "Encode constraints, chain dependencies, and define ideal behavior.",
      image: "/dynamic-scheduling/Asset_8TPM_Monitor.png",
      alt: "Rules app defining constraints",
      mediaSide: "right",
    },
    {
      title: "Optimize.",
      body: "Surface limitations and optimality of actions to teams throughout your business.",
      video: "/dynamic-scheduling/Gantt.mp4",
      alt: "Drag-and-drop Gantt optimization",
      mediaSide: "left",
    },
    {
      title: "Learn.",
      body: "Visualize and interrogate interventions to long-term plans and evaluate past decisions to plan for the future and build resiliency.",
      video: "/dynamic-scheduling/Scenarios.mp4",
      alt: "Scenario comparison",
      mediaSide: "right",
    },
  ] satisfies Step[],
};

/* ------------------------- example industries / cases --------------------- */

export const exampleIndustries = {
  heading: "Example Industries",
  items: [
    "Transportation",
    "Heavy Industry",
    "CPG",
    "Defense",
    "Health & Life Sciences",
    "Hospital Ops",
    "Telecommunications",
    "Utilities",
  ],
};

export const exampleUseCases = {
  heading: "Example Use Cases",
  items: [
    "Fleet maintenance scheduling",
    "Production planning and execution",
    "Personnel scheduling",
    "Supply chain",
    "Personnel readiness",
  ],
};

/* --------------------------------- form ----------------------------------- */

export const contactForm = {
  title: "Get in touch.",
  fields: [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "businessEmail", label: "Business Email", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: false },
    { name: "company", label: "Company / Institution", type: "text", required: true },
    { name: "country", label: "Country", type: "select", required: true },
  ],
  message: { name: "message", label: "How can we help?", type: "textarea", required: false },
  submitLabel: "Submit",
  privacyHref: "/privacy",
};
