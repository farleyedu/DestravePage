import Hero from "@/components/marketing/Hero";
import Identification from "@/components/marketing/Identification";
import Pillars from "@/components/marketing/Pillars";
import Contents from "@/components/marketing/Contents";
import WhoIsFor from "@/components/marketing/WhoIsFor";
import Offer from "@/components/marketing/Offer";
import FAQ from "@/components/marketing/FAQ";
import CtaFinal from "@/components/marketing/CtaFinal";
import Footer from "@/components/marketing/Footer";
import BottomBar from "@/components/marketing/BottomBar";

/**
 * Sales Page Principal
 * Estrutura: 9 blocos otimizados para conversão
 */
export default function Home() {
  return (
    <>
      {/* Topo discreto (identidade mínima, sem menu tradicional) */}
      <header className="py-6 bg-bg-base border-b border-border">
        <div className="container-custom">
          <h1 className="text-center text-2xl font-bold text-text-primary tracking-tight">
            DESTRAVE 2026
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Hero />
        <Identification />
        <Pillars />
        <Contents />
        <WhoIsFor />
        <Offer />
        <FAQ />
        <CtaFinal />
      </main>

      {/* Footer */}
      <Footer />

      {/* Bottom CTA Bar (fixa, aparece após scroll) */}
      <BottomBar />
    </>
  );
}
