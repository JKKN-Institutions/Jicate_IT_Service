/**
 * Content for the /telecommunications page — a faithful DESIGN rebuild of the
 * Palantir Telecommunications reference page. LIGHT theme. Short functional
 * headings/labels kept; body copy in Jicate's voice (placeholder text the user
 * will swap). Palantir→Jicate, "Jicate Data Platform"→"the platform" (kept where it reads as a
 * product name → "Jicate"); named customers/partners genericized. Types local.
 *
 * Assets in /public/telecommunications: shutterstock_1606674793.jpg (hero towers)
 * + (1).jpg (reuse), Telco_*__1_.png (5 isometric design cards),
 * image_multicard_2.jpeg (Where-we-work diagram),
 * Telco_Ad_Campaign_LI_…jpg (impact study), Picture1.png (DISH case stage).
 */

export interface DesignCard {
  no: string;
  title: string;
  body: string;
  image: string;
}

export interface WorkTab {
  tab: string;
  no: string;
  lead: string;
  body: string;
  subhead: string;
  subleadline: string;
  bullets: string[];
  /** Optional per-tab diagram — only shown when present. */
  image?: string;
  imageAlt?: string;
}

export interface ImpactTab {
  tab: string;
  no: string;
  lead: string;
  body: string;
  image: string;
}

export interface Field {
  name: string;
  label: string;
  type: string;
  required: boolean;
}

/* ---------------------------------- hero --------------------------------- */

export const hero = {
  title: "Telecommunications",
  subcopy: "Making data and analytics operational — from Circuit to Customer.",
  link: "Contact Us",
  image: "/telecommunications/shutterstock_1606674793.jpg",
  imageAlt: "Telecommunications towers against a blue sky",
};

/* --------------------------------- intro --------------------------------- */

export const intro = {
  heading: "Jicate for Telecommunications",
  body: "Jicate enables telcos to deploy applications against their most pressing challenges — from intelligent fault prediction and pinpointing the root cause of a customer problem to improving provisioning and lead-to-cash processes.",
  link: "Request a Demo",
};

/* ------------------------------ design cards ----------------------------- */

export const design = {
  heading: "Meeting the demands of telecommunications, by design",
  cards: [
    {
      no: "01 / OPEN & INTEROPERABLE",
      title: "Open & Interoperable",
      body: "Jicate is open, interoperable, and modular — enabling it to seamlessly integrate with existing infrastructure and remove the risk of lock-in typically seen in traditional software products. Using open data formats and languages, the platform ensures availability across the widest spectrum possible.",
      image: "/telecommunications/Telco_open___interoperable__1_.png",
    },
    {
      no: "02 / ON-PREM & CLOUD-NATIVE SUPPORT",
      title: "On-prem & Cloud-native Support",
      body: "Jicate software can be deployed either as a cloud-native SaaS offering or a fully managed on-prem solution. Both offerings provide the same world-class technology to help make your data analytics operational, on top of most hyperscalers’ infrastructure.",
      image: "/telecommunications/Telco_partners_with_hyperscalers__1_.png",
    },
    {
      no: "03 / DAY 1 VALUE",
      title: "Day 1 Value",
      body: "From Day 1, Jicate enables telcos to deploy expert-quality applications against their most pressing challenges — from intelligent fault prediction and pinpointing the root cause of a customer problem to improving provisioning and lead-to-cash processes.",
      image: "/telecommunications/Telco_day_1_value__1_.png",
    },
    {
      no: "04 / BUILT FOR GDPR AND BEYOND",
      title: "Built for GDPR and Beyond",
      body: "Jicate is built with privacy and security at its core — granular, purpose-based access controls and full data lineage help telcos meet GDPR and the most demanding regulatory requirements across geographies.",
      image: "/telecommunications/Telco_built_for_gdpr_and_beyond__1_.png",
    },
    {
      no: "05 / NO/LOW CODE FRAMEWORKS",
      title: "No/Low Code Frameworks",
      body: "Jicate’s no/low-code application frameworks allow users to quickly create and adjust workflows — empowering business users to build and operate applications without deep engineering support.",
      image: "/telecommunications/Telco_no_low_code_frameworks__1_.png",
    },
  ] as DesignCard[],
};

/* ----------------------------- where we work ----------------------------- */

export const whereWeWork = {
  heading: "Where we work",
  lead: "Helping solve the most complex network challenges.",
  diagram: "/telecommunications/image_multicard_2.jpeg",
  diagramAlt: "Network and platform connectivity diagram",
  tabs: [
    {
      tab: "Customer-Centric Network Management",
      no: "01",
      lead: "Manage the network around the customer experience, not just the cell site.",
      body: "Unify network, service, and customer data into a single operational picture so teams can prioritize the issues that matter most to subscribers and resolve them faster.",
      subhead: "Customer-Centric Network Management",
      subleadline: "Connect network health to customer impact in real time",
      bullets: [
        "Correlate network events with affected customers and revenue",
        "Prioritize remediation by customer and business impact",
        "Surface degradations before they become outages",
      ],
    },
    {
      tab: "Customer Service",
      no: "02",
      lead: "Give agents a complete, real-time view of every customer.",
      body: "Integrate billing, network, and interaction data so customer-service teams can resolve issues on first contact and proactively reach out before problems escalate.",
      subhead: "AI-Assisted Customer Service",
      subleadline: "Resolve more issues on the first interaction",
      bullets: [
        "Unify account, billing, and network context in one view",
        "Recommend next-best actions to agents in real time",
        "Automate repetitive service workflows with a human in the loop",
      ],
    },
    {
      tab: "Field Engineering Support",
      no: "03",
      lead: "Get the right technician to the right site with the right parts.",
      body: "Optimize dispatch, routing, and inventory so field teams spend less time travelling and more time resolving — improving first-time-fix rates across the network.",
      subhead: "Connected Field Operations",
      subleadline: "Improve first-time-fix rates across the field",
      bullets: [
        "Optimize scheduling and routing against live network priorities",
        "Equip technicians with parts forecasts and guided diagnostics",
        "Close the loop between field work and network records",
      ],
    },
    {
      tab: "Supply Chain",
      no: "04",
      lead: "Build a resilient supply chain for network buildout and operations.",
      body: "Create a holistic view of suppliers, inventory, and demand so planners can anticipate shortages, manage lead times, and keep network rollout on schedule.",
      subhead: "Network Supply Chain",
      subleadline: "Keep rollout on schedule despite disruption",
      bullets: [
        "Forecast equipment demand against deployment plans",
        "Surface supplier and lead-time risk early",
        "Scenario-plan inventory and routing across regions",
      ],
    },
    {
      tab: "Sales & Marketing",
      no: "05",
      lead: "Grow revenue with data-driven sales and marketing.",
      body: "Bring together customer, usage, and market data to target the right offers, reduce churn, and measure the impact of every campaign.",
      subhead: "Revenue Intelligence",
      subleadline: "Target the right offer to the right customer",
      bullets: [
        "Segment customers from unified usage and value signals",
        "Recommend next-best offers and reduce churn",
        "Measure campaign uplift across channels",
      ],
    },
  ] as WorkTab[],
};

/* ------------------------------ get started ------------------------------ */

export const form = {
  id: "get-started",
  heading: "Get Started with Jicate for Telco.",
  fields: [
    { name: "firstName", label: "FIRST NAME:", type: "text", required: true },
    { name: "lastName", label: "LAST NAME:", type: "text", required: true },
    { name: "email", label: "BUSINESS EMAIL:", type: "email", required: true },
    { name: "phone", label: "PHONE NUMBER:", type: "tel", required: true },
    { name: "company", label: "COMPANY / INSTITUTION:", type: "text", required: true },
  ] as Field[],
  countryLabel: "COUNTRY:",
  projectLabel:
    "TELL US ABOUT YOUR PROJECT, A BIT OF CONTEXT WILL ALLOW US TO CONNECT YOU TO THE RIGHT TEAM FASTER:",
  optIns: [
    "OPT-IN TO RECEIVE JICATE PRODUCT UPDATES:",
    "OPT-IN TO PERSONALIZED SALES OUTREACH:",
    "OPT-IN TO RECEIVE INVITES TO FUTURE EVENTS:",
    "OPT-IN TO RECEIVE EDUCATIONAL RESOURCES:",
  ],
  submit: "Submit",
  privacyNote: "Please see our Privacy Policy regarding how we will handle the information.",
};
