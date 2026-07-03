import { SiteContactForm } from "@/components/shared/SiteContactForm";
import { demoForm } from "@/content/semiconductors";

/**
 * DemoForm — thin wrapper around the shared, site-wide contact form
 * (<SiteContactForm>). Only this page's heading varies; the field set,
 * styling, and behaviour are identical everywhere.
 */
export function DemoForm() {
  return <SiteContactForm title={demoForm.title} id="semiconductors-demo-form" />;
}

export default DemoForm;
