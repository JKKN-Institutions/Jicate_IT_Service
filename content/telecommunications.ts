/**
 * Content for the /telecommunications page — a faithful DESIGN rebuild of the
 * Palantir Telecommunications reference page. LIGHT theme. Short functional
 * headings/labels kept; body copy in Jicate's voice (placeholder text the user
 * will swap). Palantir→Jicate, "Foundry"→"the platform" (kept where it reads as a
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
  link: "Learn more about the platform",
  image: "/telecommunications/shutterstock_1606674793.jpg",
  imageAlt: "Telecommunications towers against a blue sky",
};

/* --------------------------------- intro --------------------------------- */

export const intro = {
  heading: "Jicate for Telecommunications",
  body: "Some of the world’s leading telecommunications companies use Jicate software to help drive digital transformation at scale across their business.",
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
  lead: "Decision makers across the telco industry use Jicate to help solve their most complex network challenges.",
  diagram: "/telecommunications/image_multicard_2.jpeg",
  diagramAlt: "Network and platform connectivity diagram",
  tabs: [
    {
      tab: "RAN Energy Savings",
      no: "01",
      lead: "Reduce power usage in your network — without impacting your customers.",
      body: "Energy Optimizer powered by Jicate is a cloud-based, scalable SaaS that empowers mobile operators to navigate energy-consumption challenges with data-driven decisions, reducing power usage and carbon emissions. It is delivered in partnership with a RAN specialist that has more than three decades of experience building, operating, and optimizing radio access networks (RAN) at major European CSPs.",
      subhead: "Energy Optimizer Powered by Jicate",
      subleadline: "Minimize power usage up to 15% per site in your Radio Area Networks",
      bullets: [
        "Optimize operational configurations for power savings in RAN",
        "Mitigate escalating power consumption in RAN due to increased spectrum in 4G and 5G",
        "Synchronize data, models, and applications to achieve operational connectivity",
        "Empower network operators with foresight over your energy profile",
        "Gain meaningful insight into network device performance and trigger upgrades at the edge of your network",
      ],
    },
    {
      tab: "Customer-Centric Network Management",
      no: "02",
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
      no: "03",
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
      no: "04",
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
      no: "05",
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
      no: "06",
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

/* ----------------------------- impact studies ---------------------------- */

export const impact = {
  heading: "Impact Studies",
  tabs: [
    {
      tab: "Improving Network Reliability",
      no: "01",
      lead: "A leading operator improved network reliability and cut downtime with Jicate.",
      body: "By unifying fragmented network data into a single operational picture, the operator’s engineers could predict faults earlier, pinpoint root causes faster, and resolve incidents before customers were affected — measurably improving reliability across the network.",
      image: "/telecommunications/Telco_Ad_Campaign_LI_C1V1-1200x1200_Cropped__1_.jpg",
    },
    {
      tab: "Supply Chain",
      no: "02",
      lead: "A global carrier de-risked network buildout with a connected supply chain.",
      body: "A holistic view of suppliers, inventory, and demand let planners anticipate shortages and keep a multi-region rollout on schedule, even through supplier disruption.",
      image: "/telecommunications/Telco_Ad_Campaign_LI_C1V1-1200x1200_Cropped__1_.jpg",
    },
    {
      tab: "RAN Energy Savings",
      no: "03",
      lead: "A mobile operator cut RAN power usage without impacting customers.",
      body: "Energy Optimizer powered by Jicate reduced power usage by up to 15% per site across the operator’s Radio Area Networks — lowering both costs and carbon emissions.",
      image: "/telecommunications/Telco_Ad_Campaign_LI_C1V1-1200x1200_Cropped__1_.jpg",
    },
  ] as ImpactTab[],
};

/* ------------------------------ partnerships ----------------------------- */

export const partnerships = {
  heading: "Partnerships",
  intro: [
    "Jicate works across the telecom ecosystem — with hyperscalers, systems integrators, and specialist technology partners — to deliver outcomes faster.",
    "The platform can be utilised as a SaaS offering on top of most hyperscalers’ infrastructure, and integrates with partner solutions through well-documented, open APIs.",
  ],
  cases: [
    {
      heading: "US 5G Operator | Dynamic 5G Connectivity",
      body: "A US operator’s Jicate-powered 5G network offering helps facilitate Connectivity as a Service (CaaS) and can unlock the value of data, even in limited-bandwidth or low-infrastructure environments.",
      image: "/telecommunications/Picture1.png",
      imageAlt: "Keynote presentation on a conference stage",
      link: "Read More",
    },
    {
      heading: "Jicate & a European Telecom Leader",
      body: "Leaders from Jicate and a major European telecom operator discuss software, sovereignty, and the future of connectivity on stage at a leading technology conference in Europe.",
      image: "/telecommunications/shutterstock_1606674793 (1).jpg",
      imageAlt: "Leaders speaking at a technology conference",
      link: "Play Video",
    },
  ],
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
    { name: "jobTitle", label: "JOB TITLE:", type: "text", required: true },
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
