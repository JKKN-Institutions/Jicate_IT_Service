import type { Metadata } from "next";

import {
  AtfHero,
  Renaissance,
  Fellowship,
  ApplyBand,
  MeetFellows,
  HiringBand,
} from "@/components/american-tech-fellowship";

export const metadata: Metadata = {
  title: "The Indian Tech Fellowship",
  description: "A high-intensity training program connecting builders with the skills and employers they need.",
};

export default function AmericanTechFellowshipPage() {
  return (
    <main className="flex-1">
      <AtfHero />
      <Renaissance />
      <Fellowship />
      <ApplyBand />
      <MeetFellows />
      <HiringBand />
      {/* The shared site Footer renders from the root layout. */}
    </main>
  );
}
