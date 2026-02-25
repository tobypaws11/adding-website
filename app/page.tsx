import { BlogPreview } from "@/components/BlogPreview";
import { Comparison } from "@/components/Comparison";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HomeFaq } from "@/components/HomeFaq";
import { LogosBar } from "@/components/LogosBar";
import { Nav } from "@/components/Nav";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { Services } from "@/components/Services";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhyAdding } from "@/components/WhyAdding";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="page-enter">
        <Hero />
        <LogosBar />
        <PortfolioPreview />
        <Services />
        <WhyAdding />
        <Comparison />
        <HomeFaq />
        <BlogPreview />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
