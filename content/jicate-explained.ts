/** Content for the /jicate-explained page. */

export interface ExplainedPost {
  /** Issue number (1–7). */
  n: number;
  title: string;
  desc: string;
  read: string;
  href: string;
}

export const hero = {
  title: "Jicate Explained",
  lead: "A series that explains who we are, what we do, and the principles that guide our work.",
};

export const breadcrumb = "Privacy & Civil Liberties (PCL) Engineering";

export const subNav = [
  { label: "Principles", href: "#" },
  { label: "Technologies", href: "#" },
  { label: "AI Ethics", href: "#" },
  { label: "PCL Thought Leadership", href: "#" },
];

export const posts: ExplainedPost[] = [
  {
    n: 1,
    title: "Jicate Is Not a Data Company (Jicate Explained, #1)",
    desc: "Debunking common rumors about our business and clarifications about how we operate.",
    read: "Read Jicate Explained, Part One",
    href: "#",
  },
  {
    n: 2,
    title: "Purpose-based Access Controls at Jicate (Jicate Explained, #2)",
    desc: "How we ensure data owners can take control of how their data is used.",
    read: "Read Jicate Explained, Part Two",
    href: "#",
  },
  {
    n: 3,
    title: "Beyond Anonymization (Jicate Explained, #3)",
    desc: "A framework for combining effective data tooling with a range of privacy controls to reduce re-identification risk.",
    read: "Read Jicate Explained, Part 3",
    href: "#",
  },
  {
    n: 4,
    title: "Trust in Data (Jicate Explained, #4)",
    desc: "Empowering users with transparency into data origins, preparation, and pipeline.",
    read: "Read Jicate Explained, Part Four",
    href: "#",
  },
  {
    n: 5,
    title: "Privacy & Civil Liberties Engineering (Jicate Explained, #5)",
    desc: "Protecting privacy and upholding liberal democratic values is central to Jicate’s identity and mission.",
    read: "Read Jicate Explained, Part Five",
    href: "#",
  },
  {
    n: 6,
    title: "Designing for Deletion (Jicate Explained, #6)",
    desc: "Providing our customers with cutting-edge tools to meet their data protection requirements.",
    read: "Read Jicate Explained, Part Six",
    href: "#",
  },
  {
    n: 7,
    title: "Jicate Is Still Not a Data Company (Jicate Explained, #7)",
    desc: "A refresher on the most common misconceptions about Jicate, what we do, and how we work.",
    read: "Read Jicate Explained, Part Seven",
    href: "#",
  },
];
