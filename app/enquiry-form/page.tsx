import type { Metadata } from "next";

import { SiteContactForm } from "@/components/shared/SiteContactForm";

export const metadata: Metadata = {
  title: "Enquiry Form",
  description:
    "Tell us about your project and our team will get back to you. Enquire about Jicate IT Service offerings and services.",
};

export default function EnquiryFormPage() {
  return (
    <main className="flex-1 bg-canvas pt-[24px] desktop:pt-[32px]">
      <SiteContactForm title="How can we help?" id="enquiry-form" />
      {/* Header + Footer render from the root layout. */}
    </main>
  );
}
