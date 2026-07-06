import { SiteContactForm } from "@/components/shared/SiteContactForm";
import { contactForm } from "@/content/pipeline-builder";

/**
 * GetStarted — thin wrapper around the shared, site-wide contact form
 * (<SiteContactForm>). Only this page's heading varies; the field set,
 * styling, and behaviour are identical everywhere.
 */
export function GetStarted() {
  return (
    <SiteContactForm
      title={contactForm.title}
      titleClassName="text-[clamp(1.75rem,4vw,3.333rem)]/[1.15]"
    />
  );
}

export default GetStarted;
