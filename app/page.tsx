import { BlogPreview } from "@/components/BlogPreview";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LogosBar } from "@/components/LogosBar";
import { Nav } from "@/components/Nav";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhyAdding } from "@/components/WhyAdding";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogosBar />
        <Services />
        <WhyAdding />
        <Testimonials />
        <BlogPreview />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
