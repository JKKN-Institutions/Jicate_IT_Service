import { SiteContactForm } from "@/components/shared/SiteContactForm";
import { form } from "@/content/foundry";

/**
 * Get Started with the Ontology — now renders the ONE shared site form
 * (<SiteContactForm>) so every entry point across the site is identical
 * (same fields, country→phone prefix, and mail + Google Sheet backend).
 * Only this page's heading + anchor id vary.
 */
export function GetStartedForm() {
  return <SiteContactForm title={form.heading} id={form.id} />;
}

export default GetStartedForm;
