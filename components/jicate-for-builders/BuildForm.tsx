import { SiteContactForm } from "@/components/shared/SiteContactForm";
import { buildForm } from "@/content/jicate-for-builders";

/**
 * BuildForm — thin wrapper around the shared, site-wide contact form
 * (<SiteContactForm>). Only this page's heading varies; the field set,
 * styling, and behaviour are identical everywhere.
 */
export function BuildForm() {
  return <SiteContactForm title={buildForm.heading} id={buildForm.id} />;
}

export default BuildForm;
