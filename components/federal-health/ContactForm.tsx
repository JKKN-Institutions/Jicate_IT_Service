import { SiteContactForm } from "@/components/shared/SiteContactForm";
import { contactForm } from "@/content/federal-health";

/**
 * ContactForm — thin wrapper around the shared, site-wide contact form
 * (<SiteContactForm>). Only this page's heading varies; the field set,
 * styling, and behaviour are identical everywhere.
 */
export function ContactForm() {
  return <SiteContactForm title={contactForm.title} />;
}

export default ContactForm;
