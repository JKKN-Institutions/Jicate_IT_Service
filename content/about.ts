/**
 * Content for the /about page — a design clone of palantir.com/about.
 *
 * ALL copy here is ORIGINAL, Jicate-flavoured placeholder text written to
 * mirror the reference layout/length. It intentionally does NOT reproduce
 * Palantir's copyrighted manifesto prose. Swap freely later.
 */

export type AboutLink = { label: string; href: string };

export type AboutItem = {
  statement: string;
  lead: string;
  secondary: string;
  link: AboutLink;
};

/* ---- Hero ---------------------------------------------------------------- */
export const hero = {
  title: "Why We're Here",
  believe:
    "We believe in augmenting human capability with technology — not replacing it.",
  image: "/about/about-header.jpg",
  imageAlt: "A field of clouds seen from above.",
  lead: "With the right data and the right technology, the people and institutions we serve can solve hard problems and move their world forward.",
  paragraphs: [
    "When we started Jicate, we saw tools that were too rigid to handle novel problems, and one-off systems that took far too long to build and maintain.",
    "We saw automated approaches that broke against changing conditions, and all-or-nothing access models that forced organisations into an impossible trade-off between collaboration and security.",
    "We saw the need for a different kind of technology — and we knew it would take a different kind of company to build it. That is why we exist.",
  ],
};

/* ---- What We Do ---------------------------------------------------------- */
export const whatWeDo = {
  heading: "What we do",
  items: [
    {
      statement: "We build products for human-driven analysis of real-world data",
      lead: "We focus on creating the best possible experience for working with data — one that pairs the speed of software with the judgement of the people who use it.",
      secondary:
        "To do this, we build platforms for integrating, managing, and securing data across an entire organisation.",
      link: { label: "Our Platforms", href: "/data-integration" },
    },
    {
      statement: "We build our company around mission-driven engineering",
      lead: "We are engineers first. Our teams sit close to the problem and ship working software, not slideware.",
      secondary:
        "Across our offices we bring together practical expertise and a shared commitment to getting difficult things done.",
      link: { label: "Our People", href: "/contact" },
    },
    {
      statement: "We meet problems where they live",
      lead: "Our customers understand their data and the problems they face. We bring proven technology and the engineers to put it to work.",
      secondary:
        "We send our teams into the field to work side by side with customers — deploying, adapting, and improving in the real world.",
      link: { label: "The Challenges We Help Solve", href: "/defense" },
    },
    {
      statement: "We design technology to help institutions protect privacy",
      lead: "Powerful technology, in the hands of institutions that hold large volumes of sensitive data, carries real responsibility.",
      secondary:
        "That is why we build privacy-protective controls into our products and help customers use them responsibly and transparently.",
      link: { label: "More on Data Protection", href: "/data-protection" },
    },
    {
      statement: "We go where we're needed most",
      lead: "We are engineers on a mission.",
      secondary:
        "We seek out the most critical problems we can find — the ones that threaten not just organisations, but the people and communities that depend on them.",
      link: { label: "Our Impact", href: "/contact" },
    },
  ] as AboutItem[],
};

/* ---- Where We're Going --------------------------------------------------- */
export const whereWeGoing = {
  eyebrow: "01 /",
  heading: "Where we're going",
  statement:
    "Organisations around the world use Jicate to help them do their most important work.",
  sublead:
    "From protecting critical systems to reaching communities in need, our software is put to work on problems that matter.",
  paragraphs: [
    "Response teams direct resources more effectively, investigators connect the dots faster, and institutions make better decisions with the data they already have.",
    "We are working towards a future in which public institutions, businesses, and the people they serve are equipped with the best technology to face what comes next. This is only the beginning.",
  ],
};
