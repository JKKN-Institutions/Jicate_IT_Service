import { SiteContactForm } from "@/components/shared/SiteContactForm";
import { contactForm } from "@/content/pipeline-builder";

/**
 * GetStarted — thin wrapper around the shared, site-wide contact form
 * (<SiteContactForm>). Only this page's heading varies; the field set,
 * styling, and behaviour are identical everywhere.
 */
export function GetStarted() {
  return <SiteContactForm title={contactForm.title} />;
}

export default GetStarted;
