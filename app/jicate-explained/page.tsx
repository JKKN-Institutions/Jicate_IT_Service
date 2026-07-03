import type { Metadata } from "next";

import { Hero, PostList } from "@/components/jicate-explained";

export const metadata: Metadata = {
  title: "Jicate Explained",
  description:
    "A series that explains who we are, what we do, and the principles that guide our work.",
};

export default function JicateExplainedPage() {
  return (
    <main className="flex-1">
      <Hero />
      <PostList />
    </main>
  );
}
