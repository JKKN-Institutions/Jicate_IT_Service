import type { NavLink, ArrowKind } from "./navigation";
export interface CTA { label: string; href: string; arrow?: ArrowKind; }
export interface Announcement { message: string; link: NavLink; dismissLabel: string; storageKey: string; }
export interface Hero { eyebrow: string; headline: string; subcopy: string; primaryCTA: CTA; secondaryLink: NavLink; poster?: string; video?: string; }
export interface Metric { value: string; label: string; }
export interface CaseStudy { eyebrow: string; headline: string; caption: string; metrics: Metric[]; link: NavLink; }
export type EarmarkVariant = "circle" | "triangle";
export interface ServiceItem { index: string; earmark: EarmarkVariant; title: string; body: string; link: NavLink; }
export interface ServicesIntro { eyebrow: string; headline: string; }
export interface Manifesto { statement: string; support?: string; link?: NavLink; }
export interface Testimonial { quote: string; clientName: string; role: string; }
export interface SplitCTAHalf { label: string; sublabel?: string; href: string; tone: "light" | "dark"; }
export interface ShowcaseCard { id: string; tab: string; earmark: string; title: string; href: string; image: string; alt: string; }
export interface Showcase { ctaLabel: string; ctaHref: string; cards: ShowcaseCard[]; }
