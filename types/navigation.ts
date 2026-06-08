export type ArrowKind = "external" | "drillin" | "cta" | "big";        // ↗ external · ↳ drillin · ↖ cta · → big
export interface NavLink { label: string; href: string; arrow?: ArrowKind; external?: boolean; dimmed?: boolean; }
export interface NavItem { label: string; href?: string; type: "link" | "mega"; }
export interface MegaMenuGroup { heading: string; links: NavLink[]; }
export interface FeaturedCard { headline: string; caption: string; link: NavLink; }
export interface FooterColumn { heading: string; links: NavLink[]; }
export interface SocialLink { label: string; href: string; icon: string; }   // icon: lucide name or custom key
export interface LegalInfo { copyright: string; tagline?: string; locale: string; links: NavLink[]; }
