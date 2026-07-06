import type { Metadata } from "next";

import { Hero, LogoMarquee, Intro, Offerings, ResourceSection } from "@/components/food-and-beverage";
import { SiteContactForm } from "@/components/shared/SiteContactForm";
import { aipInPractice, moreOn } from "@/content/food-and-beverage";

export const metadata: Metadata = {
  title: "Food and Beverage",
  description: "The platform for food manufacturers, food service organizations, and quick service restaurants.",
};

export default function FoodAndBeveragePage() {
  return (
    <main className="flex-1 bg-canvas">
      <Hero />
      <LogoMarquee />
      <Intro />
      <Offerings />
      <ResourceSection heading={aipInPractice.heading} cards={aipInPractice.cards} cols={3} />
      <ResourceSection heading={moreOn.heading} cards={moreOn.cards} cols={4} />
      <SiteContactForm title="Contact Us" id="contact" />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
