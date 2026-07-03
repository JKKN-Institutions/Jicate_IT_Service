import { SiteContactForm } from "@/components/shared/SiteContactForm";
import { contactForm } from "@/content/marketplace";

/**
 * GetInTouch — thin wrapper around the shared, site-wide contact form
 * (<SiteContactForm>). Only this page's heading varies; the field set,
 * styling, and behaviour are identical everywhere.
 */
export function GetInTouch() {
  return <SiteContactForm title={contactForm.title} />;
}

export default GetInTouch;
