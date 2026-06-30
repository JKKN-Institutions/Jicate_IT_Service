import type { Metadata } from "next";

import {
  Hero,
  SoftwareAdvantage,
  DiscoverByService,
  QuoteBand,
  GetInvolved,
  ContactForm,
} from "@/components/defense";

export const metadata: Metadata = {
  title: "Defense",
  description: "AI-enabled technology to deter and defend — Jicate Defense Solutions.",
};

export default function DefensePage() {
  return (
    // Dark page — matches the reference's rgb(30,33,36) background with white text.
    <main className="flex-1 bg-[#1e2124] text-white">
      <Hero />
      <SoftwareAdvantage />
      <DiscoverByService />
      <QuoteBand />
      <GetInvolved />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
