import { SiteContactForm } from "@/components/shared/SiteContactForm";
import { demo } from "@/content/procurement";

/**
 * DemoForm — thin wrapper around the shared, site-wide contact form
 * (<SiteContactForm>). Only this page's heading varies; the field set,
 * styling, and behaviour are identical everywhere.
 */
export function DemoForm() {
  return <SiteContactForm title={demo.heading} id={demo.id} />;
}

export default DemoForm;
