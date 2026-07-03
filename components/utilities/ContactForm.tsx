import { SiteContactForm } from "@/components/shared/SiteContactForm";
import { demoForm } from "@/content/utilities";

/**
 * ContactForm — thin wrapper around the shared, site-wide contact form
 * (<SiteContactForm>). Only this page's heading varies; the field set,
 * styling, and behaviour are identical everywhere.
 */
export function ContactForm() {
  return <SiteContactForm title={demoForm.title} id="utilities-demo-form" />;
}

export default ContactForm;
