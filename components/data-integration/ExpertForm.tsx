import { SiteContactForm } from "@/components/shared/SiteContactForm";
import { expertForm } from "@/content/data-integration";

/**
 * ExpertForm — thin wrapper around the shared, site-wide contact form
 * (<SiteContactForm>). Only this page's heading varies; the field set,
 * styling, and behaviour are identical everywhere.
 */
export function ExpertForm() {
  return <SiteContactForm title={expertForm.title} />;
}

export default ExpertForm;
