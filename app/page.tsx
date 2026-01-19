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

export default function Home() {
  return (
    <>
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

      <Footer />
      <BottomBar />
    </>
  );
}
