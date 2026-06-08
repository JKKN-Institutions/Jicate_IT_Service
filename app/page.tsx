import {
  Hero,
  ProductCarousel,
  ServicesScrolly,
  ManifestoBand,
  Testimonials,
  SplitCTA,
} from "@/components/home";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ProductCarousel />
      <ServicesScrolly />
      <ManifestoBand />
      <Testimonials />
      <SplitCTA />
    </main>
  );
}
