import { SiteContactForm } from "@/components/shared/SiteContactForm";
import { contact } from "@/content/fedstart";

/**
 * ContactForm — thin wrapper around the shared, site-wide contact form
 * (<SiteContactForm>). Only this page's heading varies; the field set,
 * styling, and behaviour are identical everywhere.
 */
export function ContactForm() {
  return <SiteContactForm title={contact.heading} id={contact.id} />;
}

export default ContactForm;
