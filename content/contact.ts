/**
 * Content for the /contact page — a faithful DESIGN rebuild of the Contact Us
 * reference page, mapped onto this project's design system. Short functional
 * headings/labels are kept; contact links are Jicate-voiced and the office list
 * is placeholder location data the user will swap. Types are local so the page
 * touches no shared files.
 *
 * Assets in /public/contact: Whiteboard_Collaboration_copy.png (hero),
 * Offices_Map.png (office locations map).
 */

export interface CTA {
  label: string;
  href: string;
}

export interface ReachItem {
  category: string;
  link: CTA;
  /** Optional extra links rendered under the same category (e.g. two phone numbers). */
  links?: CTA[];
}

export interface Office {
  country: string;
  city: string;
}

export interface Region {
  name: string;
  offices: Office[];
}

/* ---------------------------------- hero --------------------------------- */

export const hero = {
  title: "Contact Us",
  image: "/contact/Whiteboard_Collaboration_copy.png",
  alt: "Team collaborating at a whiteboard",
};

/* ----------------------------- Ways to Reach Us -------------------------- */

export const waysToReach = {
  heading: "Ways to Reach Us",
  items: [
    {
      category: "Call Us",
      link: { label: "+91 99432 72666", href: "tel:+919943272666" },
      links: [
        { label: "+91 99432 72666", href: "tel:+919943272666" },
        { label: "+91 98429 71712", href: "tel:+919842971712" },
      ],
    },
    {
      category: "Business",
      link: { label: "Inquire about becoming a customer", href: "#" },
    },
    {
      category: "Media",
      link: { label: "Contact our press and media team", href: "mailto:media@jicate.com" },
    },
    {
      category: "Product Training & Support",
      link: { label: "Get in touch with our Customer Success Services team", href: "#" },
    },
    {
      category: "Employee Verification",
      link: {
        label: "Submit an employee verification request",
        href: "mailto:employee-verifications@jicate.com",
      },
    },
  ] as ReachItem[],
};

/* ----------------------------- Office Locations -------------------------- */

export const officeLocations = {
  heading: "Office Locations",
  regions: [
    {
      name: "North America",
      offices: [
        { country: "CALIFORNIA", city: "Palo Alto" },
        { country: "CANADA", city: "Ottawa" },
        { country: "COLORADO", city: "Denver (Headquarters)" },
        { country: "D.C.", city: "Washington" },
        { country: "NEW YORK", city: "New York" },
        { country: "WASHINGTON", city: "Seattle" },
      ],
    },
    {
      name: "Europe & Middle East",
      offices: [
        { country: "DENMARK", city: "Copenhagen" },
        { country: "FRANCE", city: "Paris" },
        { country: "GERMANY", city: "Munich" },
        { country: "ISRAEL", city: "Tel Aviv" },
        { country: "ITALY", city: "Rome" },
        { country: "NETHERLANDS", city: "Amsterdam" },
        { country: "NORWAY", city: "Oslo" },
        { country: "POLAND", city: "Warsaw" },
        { country: "QATAR", city: "Doha" },
        { country: "SPAIN", city: "Madrid" },
        { country: "SWEDEN", city: "Stockholm" },
        { country: "SWITZERLAND", city: "Zurich" },
        { country: "UNITED ARAB EMIRATES", city: "Abu Dhabi" },
        { country: "UNITED KINGDOM", city: "London" },
      ],
    },
    {
      name: "Asia & Pacific",
      offices: [
        { country: "AUSTRALIA", city: "Canberra" },
        { country: "AUSTRALIA", city: "Sydney" },
        { country: "JAPAN", city: "Tokyo" },
        { country: "KOREA", city: "Seoul" },
      ],
    },
  ] as Region[],
  mapImage: "/contact/Offices_Map.png",
  mapAlt: "Map of office locations",
};
