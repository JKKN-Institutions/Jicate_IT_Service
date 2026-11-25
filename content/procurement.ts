/** Content for the /procurement page. */

export interface CasePoint {
  strong: string;
  body: string;
}

export interface StepToggle {
  label: string;
  items: CasePoint[];
}

export interface Step {
  no: string;
  title: string;
  intro: string;
  toggles: StepToggle[];
}

/* ---------------------------------- hero --------------------------------- */

export const hero = {
  image: "/procurement/shutterstock_1824643964.jpg",
  imageAlt: "Glass office towers seen from below",
  title: "Jicate for Procurement",
  subcopy:
    "AI Platforms delivering cost savings and increasing efficiencies at procurement departments.",
};

/* ----------------------------- operating system -------------------------- */

export const operatingSystem = {
  heading:
    "An AI-Powered Operating System for direct and indirect Procurement, Finance, and Supply Chain Teams.",
  body: "Infuse your complex procurement workflows with AI-driven automations.",
};

/* --------------------------- operationalizing ---------------------------- */

export const operationalizing = {
  heading: "Operationalizing AI from Procurement Strategy to Payment.",
  steps: [
    {
      no: "0.1",
      title: "AI-Driven Procurement Risk & Crisis Response",
      intro:
        "Jicate AI Platform was built for unpredictable supply chains. It offers flexibility to adapt to changing environments and changing tariff rates by leveraging an understanding of tariff and business history, affected materials, and suppliers.",
      toggles: [
        {
          label: "Supply Chain",
          items: [
            {
              strong: "Supplier Risk Mitigation",
              body: "Automatically skim through company and external data to flag any geopolitical, geographical, or financial risk associated with a supplier based on live tariff data. Use AI Agents to offer or action on risk-mitigation strategies.",
            },
            {
              strong: "Material Shortages",
              body: "Create a holistic map of all materials to identify where gaps will fall with changing market conditions, reduced numbers of materials, and supplier issues. Allow business users to prioritize material-shortage management.",
            },
          ],
        },
        {
          label: "Tariffs",
          items: [
            {
              strong: "Tariff Exposure Modeling",
              body: "Simulate the cost impact of changing tariff schedules across materials and suppliers, and surface the most affected purchases for proactive action.",
            },
            {
              strong: "Sourcing Re-Routing",
              body: "Recommend alternative suppliers and regions to minimize tariff exposure while preserving quality and delivery commitments.",
            },
          ],
        },
      ],
    },
    {
      no: "0.2",
      title: "AI-Powered Contract Lifecycle Management",
      intro:
        "Use AI agents to create a holistic picture of contract clauses across suppliers, categories, and materials. Build custom AI-Powered workflows to expedite contract processes and augment upcoming negotiations preparation.",
      toggles: [
        {
          label: "Overview",
          items: [
            {
              strong: "Optimize Contract Negotiations",
              body: "Supercharge negotiations through AI-recommended contract changes and negotiation levers based on contract content and historic spend and negotiations.",
            },
            {
              strong: "Automate Contract Compliance Processes",
              body: "Use AI Agents to identify and action on risks, compliance gaps, and potential violations of current contracts, additional clauses, and amendments.",
            },
            {
              strong: "Automatically track and Action on Rebates, SLAs, Minimum Commits, and more",
              body: "Automatically monitor clause utilization and get recommendations for sourcing strategies, terms re-negotiations, and vendor communication.",
            },
          ],
        },
        {
          label: "Impact",
          items: [
            {
              strong: "Faster Cycle Times",
              body: "Contract turnaround compresses from weeks to days as agents handle review and redlining groundwork.",
            },
            {
              strong: "Captured Value",
              body: "Rebates and minimum commitments that previously slipped through are tracked and realized automatically.",
            },
          ],
        },
      ],
    },
    {
      no: "0.3",
      title: "AI-Augmented Category Management & Sourcing",
      intro:
        "Revolutionize existing spend tracking, forecasting, and management of accounts by implementing AI Agents to increase workflow efficiency.",
      toggles: [
        {
          label: "Overview",
          items: [
            {
              strong: "Leverage Automations in Category Management",
              body: "AI Agents perform repetitive actions while Category Managers focus on the strategic work.",
            },
            {
              strong: "Perform AI-Guided Buying",
              body: "AI Agents aid with purchasing compliance throughout the buying chain by automatically routing users and their purchases to the right buying channels.",
            },
            {
              strong: "Make Informed Sourcing Decisions",
              body: "Automate manual and time-consuming processes for purchasing teams by ingesting relevant details from unstructured information across the organization and matching these details with existing contracts and purchase orders.",
            },
          ],
        },
        {
          label: "Impact",
          items: [
            {
              strong: "Lower Cost to Serve",
              body: "Guided buying steers spend to preferred channels, reducing maverick purchasing and leakage.",
            },
            {
              strong: "Strategic Focus",
              body: "Category managers redirect time from repetitive tasks to high-value sourcing strategy.",
            },
          ],
        },
      ],
    },
    {
      no: "0.4",
      title: "AI-Powered Accounts Payable",
      intro:
        "Integrate AI agents to Accounts Payable workflows to automate manual tasks, utilizing human-in-the-loop to optimize the processes end-to-end.",
      toggles: [
        {
          label: "Overview",
          items: [
            {
              strong: "Expedite Process Mining and Automation",
              body: "Visualize and diagnose the entire invoice-processing journey to identify and address inefficiencies.",
            },
            {
              strong: "Streamline Invoice Processing, Deduplication, and Compliance",
              body: "Automatically extract and correct invoice entities, match invoices with ERP entries to ensure consistency, detect duplicate invoices, and identify mismatches in payment terms.",
            },
            {
              strong: "Enhance Three-Way Matching",
              body: "Automate matching of purchase orders, invoices, and goods receipts to reduce manual intervention and expedite payments.",
            },
          ],
        },
        {
          label: "Impact",
          items: [
            {
              strong: "Fewer Errors",
              body: "Automated matching and deduplication cut payment errors and duplicate spend.",
            },
            {
              strong: "Faster Payments",
              body: "Straight-through processing shortens cycle times and captures early-payment discounts.",
            },
          ],
        },
      ],
    },
  ] as Step[],
};

/* ------------------------------ demo form -------------------------------- */

export const demo = {
  id: "request-a-demo",
  heading: "Request a Demo: Jicate for Procurement",
  fields: [
    { name: "firstName", label: "FIRST NAME:", type: "text", required: true },
    { name: "lastName", label: "LAST NAME:", type: "text", required: true },
    { name: "email", label: "BUSINESS EMAIL:", type: "email", required: true },
    { name: "company", label: "COMPANY NAME:", type: "text", required: true },
    { name: "phone", label: "PHONE NUMBER:", type: "tel", required: false },
  ],
  countryLabel: "COUNTRY:",
  optIns: [
    "OPT-IN TO EDUCATIONAL RESOURCES:",
    "OPT-IN TO HEAR ABOUT FUTURE EVENTS:",
    "OPT-IN TO PERSONALIZED SALES OUTREACH:",
    "OPT-IN TO HEAR ABOUT PRODUCT UPDATES:",
  ],
  submit: "Submit",
  privacyNote: "Please see our Privacy Policy regarding how we will handle the information.",
};
