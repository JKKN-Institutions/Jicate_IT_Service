/** Content for the /energy page. */

export interface CTA {
  label: string;
  href: string;
}

export interface Column {
  title: string;
  lead?: string;
  items: string[];
}

export interface ImageCard {
  title: string;
  body: string;
  image: string;
  alt: string;
}

/* ------------------------------- sub-nav --------------------------------- */

export const subNav: CTA[] = [
  { label: "Oil & Gas", href: "#oil-and-gas" },
  { label: "Renewables", href: "#renewables" },
  { label: "Carbon", href: "#carbon" },
  { label: "Get in Touch", href: "#get-in-touch" },
];

/* ---------------------------------- hero --------------------------------- */

export const hero = {
  breadcrumb: "Platform for Energy",
  title: "Jicate Platform for Energy",
  subcopy:
    "Solve today’s most pressing challenges while building competitive advantage for tomorrow.",
  image: "/energy/shutterstock_1454940068.jpg",
  imageAlt: "Offshore wind turbines at dusk",
};

/* --------------------------------- about --------------------------------- */

export const about = {
  heading: "About Us",
  statements: [
    "Jicate was founded to help solve critical data problems for mission-driven institutions while protecting the people they serve. We carried those frontline learnings into the commercial enterprise.",
    "Today, organizations around the world deploy our platform for their most important work — our software powers AI-assisted decision-making from the field to the factory floor.",
  ],
  intro: [
    "The Jicate platform is an operating system for the modern enterprise. Built to deliver results with the speed of an out-of-the-box solution and the flexibility to fit unique businesses and use cases, it connects your data, analytics, and operations to fuel responsible, fully governed AI-powered operations.",
    "At its core is the Business Data Model — a full-fidelity, dynamic representation of your business and the world around it. Shared by your entire organization, it enables coordination and interconnectivity across data, modeling, analytics, operational decisions, and end-user workflows.",
    "With the Business Data Model, users can chain models together across workflows, teams, and organizational units to simulate operations and optimize decisions, and to orchestrate model-driven actions across existing systems.",
  ],
  diagram: "/energy/Asset_27energy.png",
  diagramAlt: "Energy data model diagram",
};

/* -------------------------------- oil & gas ------------------------------ */

export const oilGas = {
  id: "oil-and-gas",
  title: "Oil & Gas",
  intro: {
    image: "/energy/grid-platforms.png",
    alt: "Energy data model thumbnail",
    body: "The Business Data Model transforms your digital assets — including data, models, and processes — into a dynamic, actionable representation of your business for all users to leverage in operations.",
  },
  offshore: {
    heading: "Offshore",
    columns: [
      {
        title: "Monitoring",
        items: [
          "By integrating data and models into your data model, visualize all the subsystems that comprise the production value chain — from wells to the topside facility.",
          "Navigate through interactive process flow diagrams to see equipment links and real-time sensor data that shows how fluids travel through the network.",
          "Physics-based models that run every hour compare real sensor data with simulated data to estimate model accuracy and health.",
        ],
      },
      {
        title: "Simulation",
        lead: "Using your data model, perform “what-if” simulations within individual systems — from subsea networks through topside export.",
        items: [
          "Within an export compression subsystem, an engineer sees all sensor data associated with each piece of production equipment: control valves, compressors, scrubbers, and heat exchanges.",
          "The engineer clicks on an individual component to run a simulation — for example, increasing the suction pressure on a compressor.",
          "The platform can provide the answer within minutes and, with the Business Data Model, show the impact of the change across the entire topside system.",
        ],
      },
      {
        title: "Optimization",
        lead: "Chain together scenarios from distinct models to understand operational effects across the value chain.",
        items: [
          "With your data model, you can see the consequences of a decision not only within one system but across the entire value chain — from sandface to export.",
          "The Business Data Model integrates multiple simulation models and custom logic to give engineers a single language to understand and optimize facilities in their entirety.",
          "The Business Data Model captures and stores the output of every simulation to better inform future engineering and business decisions.",
        ],
      },
    ] as Column[],
  },
  onshore: {
    heading: "Onshore",
    lead: "Create a holistic view of your assets",
    body: "Integrate accounting, land, planning, business development, reserves, and operations data into the Business Data Model.",
    bullets: [
      "Gain a deeper understanding of profitability using real-time lease operating statements.",
      "Manage your capital program leveraging process mining and automation.",
      "Predict well performance and manage type curves.",
      "Understand lease expiries and HBP status.",
      "Track deal flow and manage due diligence for acquisitions and divestitures.",
      "Quickly prepare monthly outlooks and long-term capital plans by integrating real-time LOS, capital management, well-performance prediction, and scheduling.",
    ],
  },
  finance: {
    heading: "Finance",
    columns: [
      {
        title: "Corporate financial reporting",
        items: [
          "The platform’s out-of-the-box Data Lineage application provides the transparency auditors require, and built-in data health checks assure your data is accurate.",
        ],
      },
      {
        title: "Asset management",
        items: [
          "The Business Data Model enables visualization of asset performance on a granular level in near real-time, without time-consuming manual integration.",
        ],
      },
      {
        title: "Budget tracking",
        items: [
          "Integration of data, models, and processes lets decision-makers manage the business daily, rather than running monthly or quarterly retrospective reviews.",
        ],
      },
      {
        title: "Scenario modeling against forecasts",
        items: [
          "By integrating with economic modeling software and providing a platform for scenario analysis, the platform helps management assess potential changes and plan ahead.",
        ],
      },
      {
        title: "Identification of irregularities",
        items: [
          "With your data model you have an all-encompassing picture of financial, land, and operational data — making it easy to identify, investigate, and correct discrepancies.",
        ],
      },
    ] as Column[],
  },
  midstream: {
    heading: "Midstream",
    liquidsHeading: "Liquids & Gas",
    liquidsBody: [
      "Companies spend immense amounts of time and money on manual, siloed programs to manage DRA, power costs and contracts, flow rates and production, and maintenance.",
      "While the silos between operational and financial programs cause significant value degradation, they also present opportunities for integration and optimization. Integrating systems, however, can be a labor-intensive, manual process.",
    ],
    cards: [
      {
        title: "Preventative Maintenance",
        body: "Investigate product quality issues at scale, perform causal analyses for repetitive failures, and launch component testing — reducing equipment downtime and maintenance costs.",
        image: "/energy/shutterstock_361926230.jpg",
        alt: "Preventative maintenance",
      },
      {
        title: "Optimize Power Scheduling",
        body: "Integrate sensor data, inventory levels, and historical demand. Use real-time and forward price definitions for grid electricity and inline power to minimize operating costs.",
        image: "/energy/shutterstock_1811876539.jpg",
        alt: "Power scheduling",
      },
      {
        title: "Create a Digital Twin",
        body: "Chain simulation engines to make recommendations that optimize systems across the business — revealing the immediate and long-term consequences of decisions.",
        image: "/energy/shutterstock_1663557949.jpg",
        alt: "Digital twin",
      },
    ] as ImageCard[],
  },
  downstream: {
    heading: "Downstream",
    refineryHeading: "Refinery / Chemical Plant Operations",
    refineryColumns: [
      {
        title: "Process Monitoring & Loss Categorization",
        items: [
          "Integrate sensor data into your data model and use rules & real-time alerting to monitor your plant’s day-to-day operations.",
          "Detect and action any deviations, with full writeback to your data model for continuous improvement and streamlined reporting.",
        ],
      },
      {
        title: "Advanced Analytics",
        items: [
          "With all your data and models integrated into your data model, perform analyses using sources that have never been connected before.",
          "This empowers engineers to run analyses from run-length optimization to predictive maintenance, and to connect production processes with executive decision-making.",
        ],
      },
      {
        title: "Empowering Process Engineers",
        items: [
          "Engineers can create their own tools using data in the platform and its analytical tooling.",
          "Unit-health monitoring dashboards ensure safe operations; constraints-optimization dashboards alert engineers to breaches and surface optimization opportunities and risks.",
        ],
      },
      {
        title: "Simulation",
        items: [
          "Engineers build process flow diagrams using the plant data model, linked to external physics-based models.",
          "They can pose “what-if” questions to test and optimize set points, run times, and maintenance plans, comparing theoretical values with actuals.",
        ],
      },
      {
        title: "CAPEX Planning",
        items: [
          "Combine historic data with plant infrastructure and streaming sensor data to evaluate turnaround plans, identify problem areas, and improve uptime and throughput.",
          "The platform gives engineers a singular, real-time source of truth, enabling refineries to adhere to production planning.",
        ],
      },
    ] as Column[],
  },
};

/* ------------------------------- renewables ------------------------------ */

export const renewables = {
  id: "renewables",
  title: "Renewables",
  image: "/energy/shutterstock_1454940068.jpg",
  imageAlt: "Wind turbines at sunset",
  columns: [
    {
      title: "Financial & Energy Markets",
      items: ["Energy Trading Decision Optimization", "Sentiment Analysis"],
    },
    {
      title: "Operations",
      items: ["Asset 360", "Plant Performance", "Production Optimization"],
    },
    {
      title: "Maintenance",
      items: ["Inventory Management", "Plant Downtime Minimization", "Maintenance Allocation & Planning"],
    },
    {
      title: "Machine Learning",
      items: ["Production Forecasting", "Prospective Site Planning"],
    },
  ] as Column[],
};

/* --------------------------------- carbon -------------------------------- */

export const carbon = {
  id: "carbon",
  title: "Carbon",
  sustainability: {
    heading: "Sustainability",
    lead: "Understand your footprint. Stay ahead of regulations. Make informed decarbonization decisions.",
    body: "Our sustainability product is built on years of experience working in complex data and modeling landscapes across several hard-to-transition industries — energy, aviation, and manufacturing.",
    columns: [
      {
        title: "Carbon Accounting",
        items: [
          "Automate emissions calculations using the platform’s data integration tooling and opinionated Carbon Accounting Template.",
          "Generate emissions outputs at the desired level of aggregation and frequency — from daily Scope 1 outputs to annual totals.",
          "Leverage pre-built audit views for full transparency from source data inputs to final emissions output.",
        ],
      },
      {
        title: "Emissions Monitoring",
        items: [
          "Integrate emissions monitoring sources — from geospatial methane imagery to sensor data — into one centralized emissions view.",
          "Connect to a network of satellite providers to answer time-sensitive climate questions.",
          "Build operational workflows, such as time-series analysis and alerting, on top of an integrated real-time view of your assets.",
        ],
      },
      {
        title: "Emissions Reduction & Forecasting",
        items: [
          "Perform complex cost-benefit analyses for decarbonization decisions, from equipment upgrades to long-term asset investments.",
          "Chain your emissions model to an operational digital twin to make informed sustainability investments.",
          "Generate long-term emissions forecasts with scenario analysis built atop an integrated emissions model.",
        ],
      },
    ] as Column[],
  },
};

/* ------------------------------ contact form ----------------------------- */

export const contact = {
  id: "get-in-touch",
  heading: "Get in Touch",
  fields: [
    { name: "firstName", label: "FIRST NAME:", type: "text", required: true },
    { name: "lastName", label: "LAST NAME:", type: "text", required: true },
    { name: "email", label: "BUSINESS EMAIL ADDRESS:", type: "email", required: true },
    { name: "phone", label: "PHONE NUMBER:", type: "tel", required: true },
    { name: "company", label: "COMPANY NAME:", type: "text", required: true },
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
