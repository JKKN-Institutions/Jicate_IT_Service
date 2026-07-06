import { SiteContactForm } from "@/components/shared/SiteContactForm";
import { contact } from "@/content/data-protection";

/**
 * ContactForm — thin wrapper around the shared, site-wide contact form
 * (<SiteContactForm>). Only this page's heading varies; the field set,
 * styling, and behaviour are identical everywhere.
 */
export function ContactForm() {
  return (
    <SiteContactForm
      title={contact.heading}
      id={contact.id}
      titleClassName="text-[length:clamp(2.5rem,5.8vw,5rem)]!"
    />
  );
}

export default ContactForm;
