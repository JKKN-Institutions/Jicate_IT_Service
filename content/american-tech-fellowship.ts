/**
 * Content for the /american-tech-fellowship page — a faithful DESIGN rebuild of
 * the reference page, mapped onto this project's design system. Layout/visual
 * treatment matches the reference 1:1.
 *
 * IMPORTANT (IP): the reference's long-form manifesto is the source's own
 * editorial content and is NOT reproduced. The "New Technological Renaissance"
 * essay here is ORIGINAL, genericized prose in Jicate's own voice — same broad
 * theme (a technology renaissance, builders, AI in service of people), none of the
 * reference's specific wording or ideology. The reference's individual fellow
 * profiles (real named individuals + quotes) are not reproduced — that section has
 * been removed from this page.
 *
 * Types are declared locally so the page is fully self-contained.
 *
 * Local media (in /public/offerings-american-tech-fellowship):
 *   shutterstock_2589895863.png — hero image
 *   shutterstock_2076774316.jpeg — fellowship image
 */

const HERO_IMG_BASE = "/offerings-american-tech-fellowship";

/* ------------------------------ shared shapes ----------------------------- */

export interface CTA {
  label: string;
  href: string;
}

/* --------------------------------- hero ----------------------------------- */

export const hero = {
  title: "The Indian Tech Fellowship",
  body: "The generations before you built the last century. This one is yours to build.",
  image: `${HERO_IMG_BASE}/shutterstock_2589895863.png`,
  alt: "Fellowship hero image",
};

/* ----------------------------- renaissance essay -------------------------- */

export const renaissance = {
  heading: "A New Technological Renaissance",
  // Neutral placeholder paragraphs — replace with your own editorial copy.
  paragraphs: [
    "Every era of progress has been built by people who work with their hands and their minds — the makers, operators, and problem-solvers who turn ideas into things that last.",
    "We are living through a new technological renaissance. Artificial intelligence is reshaping how work gets done, and the people closest to real problems are the ones best placed to put it to use.",
    "There is a great deal of noise about what AI will become. Some imagine a future of effortless abundance, where machines do everything and human effort no longer matters.",
    "Others warn of the opposite — that intelligent systems will slip beyond our control and turn against the people who built them.",
    "We accept neither story. We believe AI is a tool, and like every tool before it, its value comes from the skill and judgment of the person using it.",
    "History is full of celebrated inventors, but behind every famous name stood countless builders whose work never made the headlines. This is a program for them.",
    "Again and again, the most transformative uses of AI come not from a lab, but from the factory floor, the field, and the front line — from people with an instinct for how things actually work.",
    "That instinct is a form of craft. It cannot be faked, and it does not require a particular degree or pedigree — only curiosity, drive, and a willingness to build.",
    "We believe technology should serve people rather than replace them — amplifying what individuals do best and supporting them in the work that matters most to them.",
    "The Indian Tech Fellowship exists to put that belief into practice: to find talented builders wherever they are, and give them the tools, training, and opportunities to shape what comes next.",
    "It is an investment in people — proof of our conviction that the next generation of great builders is already out there, ready to be discovered.",
  ],
  link: { label: "competitive advantage", href: "#" } satisfies CTA,
};

/* ------------------------------- the fellowship --------------------------- */

export const fellowship = {
  heading: "The Fellowship",
  body: "Jicate created the Indian Tech Fellowship to equip working Indians with the skills and the opportunities to transform how the country builds. Fellows take on an intensive training course built to set the truly exceptional apart from the rest.",
  bodyTwo: "Standout graduates are introduced directly to leading employers who need exactly what they bring.",
  highlights: [
    {
      title: "High-intensity training:",
      body: "Get hands-on with Jicate's industry-leading software and learn the tools shaping the country's future.",
    },
    {
      title: "Job placement opportunities:",
      body: "Standout graduates get the chance to interview with Jicate and its customers and partners across the country.",
    },
    {
      title: "No tech degree needed:",
      body: "We're looking for high-agency builders who obsess over results — not over padding a résumé.",
    },
  ],
  image: `${HERO_IMG_BASE}/shutterstock_2076774316.jpeg`,
  alt: "Fellowship image",
};

/* -------------------------------- apply band ------------------------------ */

export const applyBand = {
  eyebrow: "Applicants: Reawaken the Giant.",
  heading: "Ready to Build the Future?",
  cta: { label: "Apply Now", href: "/enquiry-form" } satisfies CTA,
};

/* ----------------------------- meet the fellows --------------------------- */

export const meetFellows = {
  bigHeading: "Unlocking India's Next Generation of Builders",
  heading: "Meet the Fellows",
  intro:
    "From thousands of applicants, a select group was chosen for their drive, ingenuity, and practical wisdom. Our initial cohorts include:",
  cohort: [
    "Transitioning military veterans and enlisted leaders",
    "Engineers, operators, and self-taught builders from factories, railroads, logistics, and field service",
    "Startup founders and self-taught technologists",
  ],
  unitesLabel: "What unites them:",
  unites:
    "A relentless drive to learn, build, and solve the problems that count. They come from the heartland and the coasts, from garages and machine shops, and they're ready to power the country's renewal.",
  capstoneLabel: "Capstone Projects:",
  capstone:
    "Every fellow completes a capstone project — an end-to-end operational workflow, dashboard, or automation — showing they can bring AI to bear on real-world challenges.",
};

/* -------------------------------- hiring band ----------------------------- */

export const hiringBand = {
  heading: "Interested in hiring a Fellow?",
  cta: { label: "Contact us", href: "/contact" } satisfies CTA,
};
