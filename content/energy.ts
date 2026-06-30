/**
 * Content for the /energy page — a faithful DESIGN rebuild of the Palantir
 * "Foundry for Energy" reference page, mapped onto this project's design system.
 * Short functional headings/labels are kept; body copy is written in Jicate's own
 * voice (placeholder text the user will swap), not copied from the reference.
 * Types are local so the page touches no shared files.
 *
 * Assets in /public/energy: partner logos (Asset_37BP / Asset_32KM / Asset_44Exx /
 * Asset_46son2 / Asset_45tra), Asset_27energy diagram, grid-platforms, several
 * shutterstock_* photos and the *_Cutdown / Timeseries .mp4 videos.
 */

export interface CTA {
  label: string;
  href: string;
}

export interface Partner {
  logo: string;
  alt: string;
  bullets: string[];
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
  { label: "Our Partners", href: "#our-partners" },
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
    "At its core is the Ontology — a full-fidelity, dynamic representation of your business and the world around it. Shared by your entire organization, it enables coordination and interconnectivity across data, modeling, analytics, operational decisions, and end-user workflows.",
    "With the Ontology, users can chain models together across workflows, teams, and organizational units to simulate operations and optimize decisions, and to orchestrate model-driven actions across existing systems.",
  ],
  diagram: "/energy/Asset_27energy.png",
  diagramAlt: "Energy ontology diagram",
};

/* ------------------------------- partners -------------------------------- */

export const partners = {
  heading: "Our Partners",
  items: [
    {
      logo: "/energy/Asset_37BP.png",
      alt: "Partner logo",
      bullets: [
        "Jicate and our partner have worked together for years, with our software acting as a key accelerant in their digital transformation.",
        "The partnership has yielded concrete results in operations management, asset allocation, strategic planning, and procurement.",
        "Through model chaining and optimization, the platform has helped capture significant additional production and revenue per year.",
      ],
    },
    {
      logo: "/energy/Asset_32KM.png",
      alt: "Partner logo",
      bullets: [
        "Our partner deployed the platform to address challenges ranging from meeting volatile energy demands to integrating disparate datasets.",
        "Their Decision Support Tool for a regional energy market, built on the platform, led to better data consistency and speed of extraction, improving response to market needs.",
      ],
    },
    {
      logo: "/energy/Asset_44Exx.png",
      alt: "Partner logo",
      bullets: [
        "Our partner is adding powerful new features to its condition-monitoring service through working with Jicate.",
        "With the platform, they can use a much greater range of historical data to generate insights and recommendations, while fleet managers compare performance across the fleet in a fully anonymous way.",
      ],
    },
    {
      logo: "/energy/Asset_46son2.png",
      alt: "Partner logo",
      bullets: [
        "A global renewable energy producer deployed the platform across solar sites to radically digitize production processes and reduce plant downtime.",
        "They now receive immediate notification of trackers in need of maintenance and expect to reduce revenue losses associated with tracker failures.",
      ],
    },
    {
      logo: "/energy/Asset_45tra.png",
      alt: "Partner logo",
      bullets: [
        "Our partner adopted the platform to create a Global Carbon Data Consortium.",
        "The platform is configured to provide consortium partners with an accurate calculation of carbon intensity across supply chains, beginning with crude oil and refined products.",
      ],
    },
  ] as Partner[],
};

/* -------------------------------- oil & gas ------------------------------ */

export const oilGas = {
  id: "oil-and-gas",
  title: "Oil & Gas",
  intro: {
    image: "/energy/grid-platforms.png",
    alt: "Energy ontology thumbnail",
    body: "The Ontology transforms your digital assets — including data, models, and processes — into a dynamic, actionable representation of your business for all users to leverage in operations.",
  },
  upstream: {
    heading: "Upstream",
    video: "/energy/Energy_Page_Apache_Cutdown.mp4",
    quoteEyebrow: "Partnership-Driven Transformation",
    quote:
      "“When problems come to us, or there is a situation in the business or a trend or a development, those now get judged against the platform as a ‘Tier 1’ solution.”",
    attribution: "— CIO, Energy Operator",
  },
  offshore: {
    heading: "Offshore",
    columns: [
      {
        title: "Monitoring",
        items: [
          "By integrating data and models into your ontology, visualize all the subsystems that comprise the production value chain — from wells to the topside facility.",
          "Navigate through interactive process flow diagrams to see equipment links and real-time sensor data that shows how fluids travel through the network.",
          "Physics-based models that run every hour compare real sensor data with simulated data to estimate model accuracy and health.",
        ],
      },
      {
        title: "Simulation",
        lead: "Using your ontology, perform “what-if” simulations within individual systems — from subsea networks through topside export.",
        items: [
          "Within an export compression subsystem, an engineer sees all sensor data associated with each piece of production equipment: control valves, compressors, scrubbers, and heat exchanges.",
          "The engineer clicks on an individual component to run a simulation — for example, increasing the suction pressure on a compressor.",
          "The platform can provide the answer within minutes and, with the Ontology, show the impact of the change across the entire topside system.",
        ],
      },
      {
        title: "Optimization",
        lead: "Chain together scenarios from distinct models to understand operational effects across the value chain.",
        items: [
          "With your ontology, you can see the consequences of a decision not only within one system but across the entire value chain — from sandface to export.",
          "The Ontology integrates multiple simulation models and custom logic to give engineers a single language to understand and optimize facilities in their entirety.",
          "The Ontology captures and stores the output of every simulation to better inform future engineering and business decisions.",
        ],
      },
    ] as Column[],
  },
  onshore: {
    heading: "Onshore",
    video: "/energy/Oil_Gas_Timeseries_V6__1_.mp4",
    lead: "Create a holistic view of your assets",
    body: "Integrate accounting, land, planning, business development, reserves, and operations data into the Ontology.",
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
          "The Ontology enables visualization of asset performance on a granular level in near real-time, without time-consuming manual integration.",
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
          "With your ontology you have an all-encompassing picture of financial, land, and operational data — making it easy to identify, investigate, and correct discrepancies.",
        ],
      },
    ] as Column[],
    spotlight: {
      eyebrow: "Spotlight: AI-Powered Drill Rig Optimization",
      image: "/energy/shutterstock_361926230.jpg",
      alt: "Scheduling spotlight",
      caption:
        "↳ In conversation at a leading industry forum, our leaders discuss how Jicate is making AI operational in the oil and gas sector, and for critical institutions across the globe.",
    },
  },
  midstream: {
    heading: "Midstream",
    chart: "/energy/2022_10_Santa_Gertrudis_Impact_Study_chart_vF.png",
    chartAlt: "Decision support tool chart",
    chartHeading: "Building a Decision Support Tool",
    chartBody:
      "A Decision Support Tool, created on the platform, combines weather data and the power forecast to predict gas demand for a regional market, improving the ability to meet demand for rapid-response fuel.",
    liquidsHeading: "Liquids & Gas",
    liquidsBody: [
      "Companies spend immense amounts of time and money on manual, siloed programs to manage DRA, power costs and contracts, flow rates and production, and maintenance.",
      "While the silos between operational and financial programs cause significant value degradation, they also present opportunities for integration and optimization. Integrating systems, however, can be a labor-intensive, manual process.",
    ],
    caseImage: "/energy/shutterstock_1811876539.jpg",
    caseHeading: "Case Study: Energy Transportation & Midstream Service Provider",
    caseBody:
      "A leading energy transportation and midstream service provider deployed the platform to digitally connect and model their value chain — from gas processing plants to storage to land and sea shipping routes — with the goal of identifying breaks before they cause disruption.",
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
    video: "/energy/Energy_Page_Castrol_Cutdown__1_.mp4",
    quoteEyebrow: "Smoothing Supply Chain Shocks",
    quote:
      "“The combination of flexibility and velocity enables us to move ahead of disruption and get back from a crisis situation into business as usual really quickly — and that’s important, especially in difficult times when resources are limited.”",
    attribution: "— SVP Marketing, Lubricants Brand",
    refineryHeading: "Refinery / Chemical Plant Operations",
    refineryColumns: [
      {
        title: "Process Monitoring & Loss Categorization",
        items: [
          "Integrate sensor data into your ontology and use rules & real-time alerting to monitor your plant’s day-to-day operations.",
          "Detect and action any deviations, with full writeback to your ontology for continuous improvement and streamlined reporting.",
        ],
      },
      {
        title: "Advanced Analytics",
        items: [
          "With all your data and models integrated into your ontology, perform analyses using sources that have never been connected before.",
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
          "Engineers build process flow diagrams using the plant ontology, linked to external physics-based models.",
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
  videoThumb: "/energy/shutterstock_1663557949.jpg",
  logo: "/energy/Asset_46son2.png",
  logoAlt: "Partner logo",
  quote:
    "As the world transitions to renewable energy sources, our goal is to implement the platform across every facet of the company so our teams can rely on real-time data and fully integrated tools to make critical business decisions around producing clean energy.",
  link: { label: "Learn more about how our partner is deploying the platform", href: "#" } as CTA,
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
  videoThumb: "/energy/shutterstock_1811876539.jpg",
  logos: [
    { src: "/energy/Asset_37BP.png", alt: "Partner logo", caption: "Jicate supports our partner as it works toward its ambition to become a net-zero company, and to help the world get to net zero." },
    { src: "/energy/Asset_44Exx.png", alt: "Partner logo", caption: "An aviation ecosystem powered by the platform serves thousands of users across many participating airlines." },
  ],
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
  caseStudies: {
    heading: "Emissions Tracking & Decarbonization for Oil & Gas",
    eyebrow: "Case Studies",
    items: [
      {
        title: "Strategic Decarbonization",
        body: "Senior decision-makers use the platform to assess alternative decarbonization pathways, simulating how their businesses perform in a range of future conditions and adjusting portfolios to meet decarbonization goals.",
      },
      {
        title: "Real-Time Emissions Metrics",
        body: "A major energy company uses the platform to track Scope 1 and 2 emissions across every part of its business — derived from granular operational information and refreshed automatically as the business changes.",
      },
    ],
  },
  agora: {
    heading: "Carbon Supply Chain Ecosystem",
    productName: "Agora by Jicate",
    body: "Understand your commodity supply-chain emissions to enable private benchmarking, alternative-pathway analysis, and carbon-price modeling.",
    image: "/energy/grid-platforms.png",
    alt: "Agora demo thumbnail",
    paragraphs: [
      "Customers increasingly ask us for visibility into the lifecycle emissions of the commodities they move as they prepare for regulated Scope 3 reporting and, more generally, for net zero.",
      "Our partner adopted the platform to create a Global Carbon Data Consortium: Agora. Consortium partners bring together data from across their supply chains into a collaborative environment and model it around existing operational structures.",
      "As more data is integrated, the platform enables rapid scaling and iteration — pathways have scaled from tens of thousands to millions in a matter of weeks.",
    ],
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
    { name: "jobTitle", label: "JOB TITLE:", type: "text", required: true },
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
