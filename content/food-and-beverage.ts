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
