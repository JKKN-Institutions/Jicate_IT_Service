import type { Metadata } from "next";

import {
  Hero,
  CriticalMissions,
  CaseStudy,
  PowerImpact,
  Solutions,
  ContactForm,
} from "@/components/government-financial-management";

export const metadata: Metadata = {
  title: "Government Financial Management",
  description: "Ensure every cent serves the mission — Jicate financial management for government.",
};

export default function GovernmentFinancialManagementPage() {
  return (
    // Dark page — matches the reference's rgb(30,33,36) background with white text.
    <main className="flex-1 bg-[#1e2124] text-white">
      <Hero />
      <CriticalMissions />
      <CaseStudy />
      <PowerImpact />
      <Solutions />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
