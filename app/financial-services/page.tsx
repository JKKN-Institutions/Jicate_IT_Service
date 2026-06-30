import type { Metadata } from "next";

import { Hero, Intro, Outcomes, WhereWeWork, ContactForm } from "@/components/financial-services";

export const metadata: Metadata = {
  title: "Financial Services",
  description: "Helping financial institutions meet the demands of tomorrow's customers, regulators, and markets.",
};

export default function FinancialServicesPage() {
  return (
    <main className="flex-1">
      <Hero />
      <Intro />
      <Outcomes />
      <WhereWeWork />
      <ContactForm />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
