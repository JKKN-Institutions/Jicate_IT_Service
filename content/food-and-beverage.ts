/**
 * Content for the /food-and-beverage page — a faithful DESIGN rebuild of the
 * Palantir Food and Beverage reference page, mapped onto this project's design
 * system. Short functional headings/labels are kept; body copy is written in
 * Jicate's own voice (placeholder text the user will swap), not copied from the
 * reference. Types are local so the page touches no shared files.
 *
 * Assets in /public/food-and-beverage: shutterstock_1352875706.jpg (hero image),
 * image__11_.png (intro image). Partner logos, offering/card images are not
 * shipped — rendered as placeholders. Partner/client names are placeholders.
 */

export interface CTA {
  label: string;
  href: string;
}

export interface Offering {
  tab: string;
  number: string;
  eyebrow: string;
  paragraphs: string[];
  links: CTA[];
}

export interface ResourceCard {
  category: string;
  title: string;
  href: string;
}

/* ---------------------------------- hero --------------------------------- */

export const hero = {
  title: "Food and Beverage",
  image: "/food-and-beverage/shutterstock_1352875706.jpg",
  imageAlt: "Food and beverage field",
};

/* ------------------------------ logo marquee ----------------------------- */

export const logos = {
  // Placeholder partner names — the user will swap in real logos.
  names: ["Partner 01", "Partner 02", "Partner 03", "Partner 04", "Partner 05"],
};

/* --------------------------------- intro --------------------------------- */

export const intro = {
  heading: "The Platform for Food and Beverage",
  image: "/food-and-beverage/image__11_.png",
  imageAlt: "Aerial of a delivery truck on a road through farmland",
  paragraphs: [
    "The Jicate platform is revolutionizing the food and beverage value chain. From end-to-end supply-chain planning and dynamic inventory management to maximizing production yield and minimizing waste, the platform streamlines and scales critical systems across the industry. It helps enterprises enhance food safety and quality assurance, optimize cost of goods sold, conduct precise financial forecasting, and automate restaurant ordering and delivery.",
    "The platform enables food manufacturers, food-service organizations, and quick-service restaurants to elevate their operations and capture significant value. By integrating disparate data and building intelligent workflows that augment core processes, Jicate is transforming food and beverage businesses for the AI era.",
    "Our work in food and beverage ensures that providers are acting as efficiently as possible — in terms of time, resources, and costs — to nourish individuals around the world.",
    "With an integrated, real-time view of operations, inventory, logistics, and supply chains, enterprises can streamline operations, optimize decision-making, and drive enterprise success. Amid rising commodity costs, volatility, labor shortages, and increasingly complex networks, the platform helps businesses run multiple what-if analyses and develop the agility to combat issues at the necessary velocity, cost-efficiently.",
  ],
};

/* ------------------------------ our offerings ---------------------------- */

export const offerings = {
  heading: "Our Offerings",
  items: [
    {
      tab: "Client 01",
      number: "01",
      eyebrow: "01 — CLIENT 01",
      paragraphs: [
        "The system was used to optimize product distribution, shipping operations, and inventory management, as well as to predict the impact of disruptions on the workforce.",
        "With these strategic implementations, the client achieved significant cost savings across dozens of use cases within two years — demonstrating the value and speed of the platform in transforming their operations.",
      ],
      links: [
        { label: "Read: Conference Session | Client 01", href: "#" },
        { label: "Read: Impact Study | Client 01", href: "#" },
      ],
    },
    {
      tab: "Client 02",
      number: "02",
      eyebrow: "02 — CLIENT 02",
      paragraphs: [
        "The client built an intelligent, AI-driven supply chain on the platform — integrating planning, procurement, and production data into a single operating picture.",
        "Teams now run scenario analyses in minutes rather than weeks, improving service levels while reducing working capital tied up in inventory.",
      ],
      links: [{ label: "Read: Impact Study | Client 02", href: "#" }],
    },
    {
      tab: "Client 03",
      number: "03",
      eyebrow: "03 — CLIENT 03",
      paragraphs: [
        "A leading food-service organization deployed the platform to connect menu planning, procurement, and site operations across thousands of locations.",
        "The result is tighter cost control, less waste, and faster response to demand shifts.",
      ],
      links: [{ label: "Read: Impact Study | Client 03", href: "#" }],
    },
    {
      tab: "Client 04",
      number: "04",
      eyebrow: "04 — CLIENT 04",
      paragraphs: [
        "A quick-service restaurant chain partnered with Jicate on AI and supply-chain digitalization — from the farm to the finished product.",
        "Real-time visibility across the network keeps shelves stocked and demand met, even during peak promotions.",
      ],
      links: [{ label: "Read: Press Release | Client 04", href: "#" }],
    },
    {
      tab: "Client 05",
      number: "05",
      eyebrow: "05 — CLIENT 05",
      paragraphs: [
        "A plant-based foods brand uses the platform to scale production while protecting margins and product quality.",
        "Integrated data and models give the team a single language to optimize sourcing, manufacturing, and distribution.",
      ],
      links: [{ label: "Read: Impact Study | Client 05", href: "#" }],
    },
  ] as Offering[],
};

/* ----------------------------- AIP in practice --------------------------- */

export const aipInPractice = {
  heading: "AI in practice",
  cards: [
    {
      category: "VIDEO",
      title: "How a food-safety leader deploys Jicate to accelerate product tracing and safety investigations.",
      href: "#",
    },
    {
      category: "ARTICLE",
      title: "How a quick-service chain bet on Jicate AI to keep up with surging demand.",
      href: "#",
    },
    {
      category: "WHITEPAPER",
      title: "AI-Powered Supply Chain Risk Identification & Mitigation.",
      href: "#",
    },
  ] as ResourceCard[],
};

/* --------------------------- more on food & bev -------------------------- */

export const moreOn = {
  heading: "More on Food and Beverage",
  cards: [
    { category: "WHITEPAPER", title: "Autonomous Planning and Execution (APEX) — the Jicate Supply Chain Suite", href: "#" },
    { category: "WHITEPAPER", title: "AI-Powered Supply Chain Risk Resilience", href: "#" },
    { category: "IMPACT STUDY", title: "Building an Intelligent, AI-Driven Supply Chain", href: "#" },
    { category: "IMPACT STUDY", title: "Supply Chain & Manufacturing Optimization at a Mid-Stage CPG", href: "#" },
    { category: "PRESS RELEASE", title: "From the Farm to the Finished Product: Jicate and a QSR partner on AI and supply-chain digitalization", href: "#" },
  ] as ResourceCard[],
};
