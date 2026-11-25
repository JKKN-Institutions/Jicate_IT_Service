import type { Metadata } from "next";

import { Hero, Intro } from "@/components/food-and-beverage";
import { SiteContactForm } from "@/components/shared/SiteContactForm";

export const metadata: Metadata = {
  title: "Food and Beverage",
  description: "The platform for food manufacturers, food service organizations, and quick service restaurants.",
};

export default function FoodAndBeveragePage() {
  return (
    <main className="flex-1 bg-canvas">
      <Hero />
      <Intro />
      <SiteContactForm title="Contact Us" id="contact" />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
