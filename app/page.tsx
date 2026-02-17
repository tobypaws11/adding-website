import { Comparison } from "@/components/Comparison";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LogosBar } from "@/components/LogosBar";
import { Nav } from "@/components/Nav";
import { Services } from "@/components/Services";
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
        <Comparison />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
