/**
 * Content for the /foundry page — a faithful DESIGN rebuild of the Palantir
 * Foundry platform page (https://www.palantir.com/platforms/foundry/). LIGHT
 * theme. Short functional headings/labels kept; body copy in Jicate's voice
 * (placeholder text the user will swap). IP-safe: Palantir → Jicate, the
 * "Foundry" product → "Jicate Platform" / "the platform"; the generic concept
 * "Ontology" is kept. Named customers/partners genericized. Types local.
 *
 * Assets in /public/foundry: Hydrate_Ontology_General_V3.mp4 (hero video),
 * Ontology_Simple.png (ontology card), Personas.png (collaboration diagram),
 * My_project__*.png/.jpg + Screen_Shot_…png + Doosan_Thumbnail (1).jpg +
 * My_project__2_ (1).jpg + Palantir_NBO.jpg (18 Global-Impact case cards).
 */

export interface FeatureItem {
  label: string;
  body: string;
}

export interface IndustryLink {
  label: string;
  href: string;
}

export interface CaseCard {
  eyebrow: string;
  body: string;
  image: string;
  imageAlt: string;
}

export interface Category {
  name: string;
  cards: CaseCard[];
}

export interface Award {
  title: string;
  source: string;
  linkLabel: string;
}

export interface Field {
  name: string;
  label: string;
  type: string;
  required: boolean;
}

/* ---------------------------------- hero --------------------------------- */

export const hero = {
  title: "Jicate Platform",
  subcopy: "The Ontology-Powered Operating System for the Modern Enterprise",
  video: "/foundry/Hydrate_Ontology_General_V3.mp4",
  videoLabel: "Ontology hydrating data, logic, and action into one operating system",
};

/* -------------------------------- ontology ------------------------------- */

export const ontology = {
  heading: "The Jicate Ontology",
  image: "/foundry/Ontology_Simple.png",
  imageAlt: "Ontology core layered into Semantic, Kinetic, and Dynamic layers",
  statement: "Activate your data and analytics in a dynamic system for closed-loop operations.",
  body: "The Jicate Ontology is the heart of the platform. It integrates the semantic, kinetic, and dynamic elements of your business — empowering your teams to harmonize and automate decision-making in complex settings.",
  link: "Discover the Ontology",
};

/* ----------------------------- collaboration ----------------------------- */

export const collaboration = {
  heading: "Step Into Real-Time Collaboration →",
  statement: "Execute faster with universal logic representing the objects, actions, and processes of your business.",
  image: "/foundry/Personas.png",
  imageAlt: "Core business, data, and modeling teams collaborating through a shared Ontology",
  features: [
    {
      label: "Activate the Power of Your Data and Analytics.",
      body: "Weave your data and analytics directly into the daily decision-making happening across your core business and operational teams. Capture decisions for continuous learning.",
    },
    {
      label: "Collaboration, Supercharged.",
      body: "Achieve real-time collaboration between your data, analytics, and operational teams. Integrate decision-making in a common logic layer, driving meaningful action as conditions evolve.",
    },
    {
      label: "The Best Way to Build.",
      body: "Compose AI-powered workflows on a scalable architecture that re-uses your ontology’s multi-modal objects, actions, and processes.",
    },
    {
      label: "No Duplication.",
      body: "Incorporate data and models from your enterprise architecture — without duplicating the underlying assets or fracturing existing sources of truth.",
    },
  ] as FeatureItem[],
};

/* ------------------------------ industries ------------------------------- */

export const industries = {
  heading: "Ontology-powered Operations Across Industries",
  body: [
    "For more than a decade, we’ve embedded alongside our customers to build the platform backwards, starting from the most critical operational decisions. We’ve encoded this tradecraft into our product.",
    "Today, some of the world’s most important institutions use Jicate to build safer cars, secure global supply chains, accelerate cancer research, and more.",
  ],
  links: [
    { label: "AI + ML", href: "/ai-ml" },
    { label: "Anti Money Laundering", href: "/anti-money-laundering" },
    { label: "Edge AI", href: "/edge-ai" },
    { label: "Energy", href: "/energy" },
    { label: "Healthcare R&D", href: "/life-sciences" },
    { label: "Supply Chain", href: "/supply-chain" },
    { label: "Retail", href: "/retail" },
    { label: "More Offerings", href: "#" },
  ] as IndustryLink[],
};

/* ---------------------------- global impact ------------------------------ */

export const impact = {
  heading: "One Platform. Global Impact.",
  categories: [
    {
      name: "Asset Management",
      cards: [
        {
          eyebrow: "Global Engineering Partner",
          body: "Jicate and a global engineering partner’s smart algorithms unlocked 20% plant-wide power savings, eliminated operational fines, and reduced greenhouse gas emissions — all at an already-optimized water treatment plant.",
          image: "/foundry/My_project__7_.png",
          imageAlt: "Water treatment plant optimization",
        },
        {
          eyebrow: "Global Solar Operator",
          body: "A global solar operator has deployed Jicate at their solar plant in Spain — and several other solar energy sites — to radically digitize production processes and reduce plant downtime.",
          image: "/foundry/Screen_Shot_2023-01-17_at_4.55.30_PM__1_.png",
          imageAlt: "Solar energy plant digitization",
        },
        {
          eyebrow: "A Major US Utility",
          body: "The utilities industry has a highly complex IT/OT landscape. In a recent keynote, the CIO of a major US utility discussed the value of digital transformation across the industry, powered by Jicate.",
          image: "/foundry/My_project__20_.jpg",
          imageAlt: "Utilities keynote presentation",
        },
      ],
    },
    {
      name: "Ecosystems",
      cards: [
        {
          eyebrow: "Aviation Data Platform",
          body: "An industry-wide aviation platform leverages AI to analyze disparate data sources, offering new insights for the entire aviation industry. With tens of thousands of users, it provides airlines with an AI OS to address aircraft operations.",
          image: "/foundry/My_project__11_.png",
          imageAlt: "Aviation data platform",
        },
        {
          eyebrow: "Global Commodities Trader",
          body: "A global commodities trader leverages Jicate to power their supply chain carbon emissions platform, with a consortium approach that enables participants across global energy & commodities supply chains to model emissions.",
          image: "/foundry/My_project__12_.png",
          imageAlt: "Commodities supply chain emissions platform",
        },
        {
          eyebrow: "Semiconductor Data Platform",
          body: "A secure data analytics platform for collaborating on relevant information from participants across the semiconductor industry, helping materials suppliers and device-makers uncover new insights.",
          image: "/foundry/My_project__21_.jpg",
          imageAlt: "Semiconductor data collaboration",
        },
        {
          eyebrow: "National Research Center",
          body: "A national research center securely aggregates and intelligently harmonizes de-identified data from thousands of hospitals and clinics to power advanced research.",
          image: "/foundry/My_project__14_.png",
          imageAlt: "National research data platform",
        },
      ],
    },
    {
      name: "Supply Chain",
      cards: [
        {
          eyebrow: "Healthcare Distribution Network",
          body: "A healthcare distribution company is using Jicate to build an ecosystem that can disrupt a highly fragmented network.",
          image: "/foundry/My_project__5_.png",
          imageAlt: "Healthcare distribution network",
        },
        {
          eyebrow: "Global Lubricants Leader",
          body: "A global lubricants leader partners with Jicate to smooth supply chain shocks and keep operations moving through disruption.",
          image: "/foundry/My_project__13_.png",
          imageAlt: "Global lubricants supply chain",
        },
        {
          eyebrow: "Healthcare Services Company",
          body: "A healthcare services company partners with Jicate to securely integrate clinical data and access dynamic purchase decision insights.",
          image: "/foundry/My_project__19_.jpg",
          imageAlt: "Healthcare services data integration",
        },
      ],
    },
    {
      name: "Engineering & Manufacturing",
      cards: [
        {
          eyebrow: "Robotics Innovator",
          body: "A robotics innovator is pushing the future of AI and robotics by combining the strength of its robotic systems with the edge capabilities of the Jicate AI OS.",
          image: "/foundry/My_project__9_.png",
          imageAlt: "Robotics and edge AI",
        },
        {
          eyebrow: "Heavy Machinery Manufacturer",
          body: "Jicate partners with a heavy machinery manufacturer to drive the manufacturer’s digital transformation and deliver high-quality, market-relevant products to its customers.",
          image: "/foundry/Doosan_Thumbnail (1).jpg",
          imageAlt: "Heavy machinery manufacturing",
        },
      ],
    },
    {
      name: "Healthcare Delivery",
      cards: [
        {
          eyebrow: "Leading Hospital Network",
          body: "A leading hospital network uses Jicate to integrate operational and clinical data, helping care teams coordinate resources and improve patient outcomes.",
          image: "/foundry/My_project__8_.png",
          imageAlt: "Hospital network operations",
        },
        {
          eyebrow: "Regional Hospital",
          body: "A regional hospital uses Jicate to streamline patient flow and operational decision-making across its facilities.",
          image: "/foundry/My_project__2_ (1).jpg",
          imageAlt: "Regional hospital operations",
        },
        {
          eyebrow: "Insurance & Care Provider",
          body: "An insurance and care provider’s Real Data Platform — powered by Jicate — provides a secure environment for shift workers to view and manage tenant care data, including tailored sensor alerts that measure critical vital signs.",
          image: "/foundry/My_project__18_.jpg",
          imageAlt: "Care provider real data platform",
        },
      ],
    },
    {
      name: "Financial Services & Risk Management",
      cards: [
        {
          eyebrow: "A Global Bank",
          body: "Financial organizations use AI to accelerate transaction monitoring and improve risk analysis & compliance. Jicate’s AI-powered transaction monitoring has helped one global bank resolve alerts far faster and at greater accuracy.",
          image: "/foundry/My_project__22_.jpg",
          imageAlt: "Financial transaction monitoring",
        },
        {
          eyebrow: "Global Reinsurer",
          body: "A global reinsurer uses Jicate to integrate risk data and accelerate underwriting and portfolio decisions.",
          image: "/foundry/My_project__6_.jpg",
          imageAlt: "Reinsurance risk modeling",
        },
        {
          eyebrow: "A Major Bank",
          body: "A major bank turned to Jicate to power Next Best Offer (NBO) marketing initiatives, and accelerated the time needed to launch a campaign from months to a single day.",
          image: "/foundry/NBO.jpg",
          imageAlt: "Next Best Offer marketing platform",
        },
      ],
    },
  ] as Category[],
};

/* -------------------------------- awards --------------------------------- */

export const awards = {
  heading: "Awards ↘",
  items: [
    {
      title: "Jicate Named a Leader in AI/ML Platforms",
      source: "— Industry Analyst Wave: AI/ML Platforms",
      linkLabel: "View the Full Report",
    },
    {
      title: "Jicate Wins Technology Innovation and Application Innovation Awards in Multiple Categories",
      source: "— 2025 Technology & Application Awards",
      linkLabel: "Read the Press Release",
    },
    {
      title: "Jicate Ranked No. 1 Agentic AI Vendor",
      source: "— 2025 Agentic AI Market Study",
      linkLabel: "Read More",
    },
    {
      title: "Jicate Ranked No. 1 Vendor in AI, Data Science, and Machine Learning",
      source: "— 2025 AI, DS, and ML Market Study",
      linkLabel: "Read More",
    },
    {
      title: "Jicate Ranked No. 1 Vendor in ModelOps",
      source: "— 2025 ModelOps Market Study",
      linkLabel: "Read More",
    },
  ] as Award[],
};

/* ------------------------------ get started ------------------------------ */

export const form = {
  id: "get-started",
  heading: "Get Started with the Ontology",
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
  privacyNote: "Please see our Privacy Policy regarding how we will handle this information.",
};
