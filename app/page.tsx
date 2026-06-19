import {
  Hero,
  ProductCarousel,
  OurSoftware,
  ManifestoBand,
  Testimonials,
  SplitCTA,
} from "@/components/home";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ProductCarousel />
      <OurSoftware />
      <ManifestoBand />
      <Testimonials />
      <SplitCTA />
    </main>
  );
}
