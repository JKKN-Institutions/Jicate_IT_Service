import { SiteContactForm } from "@/components/shared/SiteContactForm";
import { whitepaper } from "@/content/edge-ai";

/**
 * WhitepaperForm — thin wrapper around the shared, site-wide contact form
 * (<SiteContactForm>). Only this page's heading varies; the field set,
 * styling, and behaviour are identical everywhere.
 */
export function WhitepaperForm() {
  return <SiteContactForm title={whitepaper.heading} id={whitepaper.id} />;
}

export default WhitepaperForm;
