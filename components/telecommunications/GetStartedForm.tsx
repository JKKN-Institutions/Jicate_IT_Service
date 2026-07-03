import { SiteContactForm } from "@/components/shared/SiteContactForm";
import { form } from "@/content/telecommunications";

/**
 * GetStartedForm — thin wrapper around the shared, site-wide contact form
 * (<SiteContactForm>). Only this page's heading varies; the field set,
 * styling, and behaviour are identical everywhere.
 */
export function GetStartedForm() {
  return <SiteContactForm title={form.heading} id={form.id} />;
}

export default GetStartedForm;
