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
  link?: CTA;
  /** Optional extra links rendered under the same category (e.g. two phone numbers). */
  links?: CTA[];
  /** Plain informational text (e.g. business hours) rendered without a link/arrow. */
  note?: string;
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
      category: "Email Us",
      link: { label: "jicatesolutions@gmail.com", href: "mailto:jicatesolutions@gmail.com" },
    },
    {
      category: "Business Hours",
      note: "Mon–Sat, 9am – 7pm (IST)",
    },
    {
      category: "Business",
      link: { label: "Inquire about becoming a customer", href: "/enquiry-form" },
    },
    {
      category: "Media",
      link: { label: "Contact our press and media team", href: "/enquiry-form" },
    },
    {
      category: "Product Training & Support",
      link: { label: "Get in touch with our Customer Success Services team", href: "/enquiry-form" },
    },
    {
      category: "Employee Verification",
      link: {
        label: "Submit an employee verification request",
        href: "/enquiry-form",
      },
    },
  ] as ReachItem[],
};

/* ------------------------------ Office Location -------------------------- */

/** Single registered office (India). Rendered with an embedded, clickable
 * Google Map — no section title, no world map (per request). */
export const officeLocation = {
  name: "JICATE SOLUTIONS PRIVATE LIMITED",
  address: [
    "230 Salem Main Road, Komarapalayam,",
    "Namakkal, Namakkal,",
    "Namakkal - 638183",
    "India (IN)",
  ],
  /** Interactive embed (iframe src). */
  mapEmbed:
    "https://www.google.com/maps?q=JICATE+SOLUTIONS+PRIVATE+LIMITED+230+Salem+Main+Road+Komarapalayam+Namakkal+638183+Tamil+Nadu+India&output=embed",
  /** Opens the location in Google Maps in a new tab. */
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=JICATE%20SOLUTIONS%20PRIVATE%20LIMITED%20230%20Salem%20Main%20Road%20Komarapalayam%20Namakkal%20638183%20Tamil%20Nadu%20India",
};
