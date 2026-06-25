/**
 * Content for the /streaming page — a faithful DESIGN rebuild of the Foundry
 * Streaming reference page, mapped onto this project's design system. Match the
 * layout/visuals and keep the short functional headings/labels; body copy and
 * testimonial quotes are written in Jicate's own voice (placeholders the user
 * can swap). Types are local so the page touches no shared files.
 *
 * Assets in /public/streaming: shutterstock_1832815558_copy.jpg (hero),
 * Puddle.png, Real_Time_Illo__1_.png, My_project__2_/4_/12_/7_/11_/13_.jpg,
 * shutterstock_1189545343.jpg (use-case cards),
 * Palantir_and_Sonnedix_-_Ontology_Modelling_-_Cutdown.mp4, sompo_palantir_clip_01_.mov.
 */

export interface CTA {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  body: string;
}

export interface UseCase {
  image: string;
  alt: string;
  title: string;
  body: string;
}

export interface AccordionItem {
  index: string;
  title: string;
  body: string;
  features?: Feature[];
}

export interface CaseStudy {
  video: string;
  title: string;
  body: string;
  link: CTA;
  quote: string;
  author: string;
}

/* ---------------------------------- hero --------------------------------- */

export const hero = {
  title: "Foundry Streaming",
  subcopy:
    "Use real-time data to drive real-time decisions — with the full context of your organization.",
  image: "/streaming/shutterstock_1832815558_copy.jpg",
  alt: "Streaming hero",
};

/* ------------------------------- statement ------------------------------- */

export const statement = {
  heading:
    "Capture, understand, and act on thousands of transient, ephemeral events in near real-time.",
  image: "/streaming/Puddle.png",
  alt: "Streaming intro illustration",
  subheading:
    "Power responsive operations with object-aware alerting, analytics, and action-centered applications.",
  features: [
    {
      title: "Automate state monitoring.",
      body: "Automatically generate and elevate alerts to skilled human operators or algorithms for analysis and action in near real-time.",
    },
    {
      title: "Data in context, always.",
      body: "Bind streaming data to your ontology's objects — such as a manufacturing robot, wind turbine, or hospital bed. The Ontology fully contextualizes low-latency data alongside other relevant batch data (e.g., ERP and MES systems), and enriches it with AI/ML models.",
    },
    {
      title: "Power closed-loop action.",
      body: "Deliver object-aware workflows that let operators take real-time action based on alerts and associated context, with writeback to systems of action.",
    },
  ] as Feature[],
};

/* --------------------------- Real-Time Ontology -------------------------- */

export const realTimeOntology = {
  heading: "Real-Time Ontology",
  image: "/streaming/Real_Time_Illo__1_.png",
  alt: "Real-time ontology illustration",
  accordion: [
    {
      index: "01",
      title: "Hydrate the Real-Time Ontology",
      body: "Out-of-the-box connectors make it easy to connect with all systems that generate relevant data and models — including Kafka, Google Pub/Sub, OSI PI, Kinesis, and more.",
      features: [
        {
          title: "Transform Streaming Data with Pipeline Builder",
          body: "Transform and process streaming data at scale. Pipeline Builder combines the ease of low-code with rigorous change management and health monitoring. Filter, join, and aggregate data streams, and land the outputs directly in your ontology.",
        },
        {
          title: "Conduct Flink-Based Transforms",
          body: "Create custom, user-defined transformations atop open standards using a full code-based stream-processing workbench.",
        },
        {
          title: "Hydrate the Ontology with AI/ML Models",
          body: "Integrate your models with a suite of interoperable connectors, making them easily consumable by other users, pipelines, and operational applications.",
        },
      ],
    },
    {
      index: "02",
      title: "Activate the Real-Time Ontology",
      body: "Bring low-latency data to life as live ontology objects, ready to power alerts, analytics, and the applications your operators use every day.",
    },
    {
      index: "03",
      title: "Wield the Real-Time Ontology",
      body: "Put the real-time Ontology to work across object-aware applications, closed-loop actions, and writeback to the systems that run your operations.",
    },
  ] as AccordionItem[],
};

/* ------------------------ Built for Real-Time Decisions ------------------ */

export const useCases = {
  heading: "Built for Real-Time Decisions",
  items: [
    {
      image: "/streaming/My_project__2_.jpg",
      alt: "Plant floor operator viewing dashboards",
      title: "360-Degree Real-Time Visibility of Plant Floor Activity",
      body: "Achieve real-time visibility into your global facilities, including across diverse systems such as ERP and other operational systems.",
    },
    {
      image: "/streaming/My_project__4_.jpg",
      alt: "Operator on the factory floor",
      title: "Low-Latency Alerting on Cost-Savings Operations",
      body: "Configure real-time alerting workflows to identify patterns leading to poor asset performance or manufacturing process bottlenecks.",
    },
    {
      image: "/streaming/My_project__12_.jpg",
      alt: "Operator on the production floor",
      title: "Predictive Maintenance to Reduce Machine Downtime",
      body: "Enable operators to proactively schedule necessary repairs and avoid unplanned downtime.",
    },
    {
      image: "/streaming/My_project__7_.jpg",
      alt: "Auto assembly line",
      title: "Real-Time Root-Cause Production Issues",
      body: "Conduct complex analysis of plant-floor processes to identify patterns, anomalies, and pathways for improvement.",
    },
    {
      image: "/streaming/My_project__11_.jpg",
      alt: "Oil rig in the ocean",
      title: "Edge AI",
      body: "Enable on-hardware AI to consume real-time sensor, radio, acoustic, geo-registration, and time-series data for autonomous decision-making at the edge.",
    },
    {
      image: "/streaming/shutterstock_1189545343.jpg",
      alt: "Aerial view of an airplane on a runway",
      title: "Flight Swaps & Routing",
      body: "Inform decisions around the right flight to cancel, the right aircraft to swap, or how to best allocate decisions given fixed constraints.",
    },
    {
      image: "/streaming/My_project__13_.jpg",
      alt: "Mobile payment",
      title: "Fraud Detection",
      body: "Quickly triage fraud alerts with a holistic understanding across transaction, relationship, counter-party, KYC, and sanctions risk.",
    },
  ] as UseCase[],
};

/* -------------------------- Streaming in Action -------------------------- */

export const inAction = {
  heading: "Foundry Streaming in Action",
  caseStudies: [
    {
      video: "/streaming/Palantir_and_Sonnedix_-_Ontology_Modelling_-_Cutdown.mp4",
      title: "Powering the Global Energy Transition at Sonnedix",
      body: "Sonnedix uses the Ontology to digitally represent its real-world assets in real-time and more fully understand production patterns. With remote monitoring of solar fields, asset managers can immediately detect and respond to solar trackers in need of maintenance.",
      link: { label: "Learn More", href: "#" },
      quote:
        "Being able to join all our data streams via the Ontology lets us model complex scenarios that were previously inaccessible to us.",
      author: "Head of AI Implementation, Sonnedix",
    },
    {
      video: "/streaming/sompo_palantir_clip_01_.mov",
      title: "Improving Elder Care at SOMPO",
      body: "The Ontology empowers SOMPO to understand residents' health holistically and to move from reactivity to proactivity with tailored sensor alerts that measure critical vital signs like sleep, breathing, and pulse rate. Reviewing care plans that once took 30–60 minutes now happens at a glance.",
      link: { label: "Learn More", href: "#" },
      quote:
        "We had invested in various operational systems and sensor technologies, but the data was siloed and not fully utilized. That's when we came across the platform.",
      author: "CEO of Nursing Care and Seniors Business, SOMPO",
    },
  ] as CaseStudy[],
};

/* ------------------------------ White paper ------------------------------ */

export const whitepaper = {
  heading: "Learn More: Foundry Streaming White Paper",
  cta: { label: "Download", href: "#" } as CTA,
};

/* ------------------------------ Contact form ----------------------------- */

export const contact = {
  id: "get-started",
  heading: "Get Started with the Ontology",
  fields: [
    { name: "firstName", label: "FIRST NAME:", type: "text", required: true },
    { name: "lastName", label: "LAST NAME:", type: "text", required: true },
    { name: "jobTitle", label: "JOB TITLE:", type: "text", required: true },
    { name: "email", label: "BUSINESS EMAIL:", type: "email", required: true },
    { name: "phone", label: "PHONE NUMBER:", type: "tel", required: true },
    { name: "company", label: "COMPANY / INSTITUTION:", type: "text", required: true },
  ],
  countryLabel: "COUNTRY:",
  projectLabel:
    "TELL US ABOUT YOUR PROJECT, A BIT OF CONTEXT WILL ALLOW US TO CONNECT YOU TO THE RIGHT TEAM FASTER:",
  optIns: [
    "OPT-IN TO RECEIVE JICATE PRODUCT UPDATES:",
    "OPT-IN PERSONALIZED SALES OUTREACH:",
    "OPT-IN TO RECEIVE INVITES TO FUTURE EVENTS:",
    "OPT-IN TO RECEIVE EDUCATIONAL RESOURCES:",
  ],
  submit: "Submit",
  privacyNote: "Please see our Privacy Policy regarding how we will handle this information.",
};
