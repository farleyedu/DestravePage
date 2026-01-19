"use client";

import { CONFIG } from "@/lib/config";
import { handleCheckoutClick } from "@/lib/tracking";
import ProductMockup from "./ProductMockup";

/**
 * Hero: headline, subheadline, CTA e mockup editorial.
 */
export default function Hero() {
  const scrollToContents = () => {
    const element = document.getElementById("conteudo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-x-hidden bg-bg-base min-h-[100svh] lg:min-h-screen flex items-center">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute -top-32 right-0 h-64 w-64 rounded-full bg-cta-primary/10 blur-3xl" />
        <div className="absolute top-20 -left-10 h-72 w-72 rounded-full bg-success/20 blur-3xl" />
      </div>

      <div className="container-custom relative w-full py-10 md:py-14 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <p className="text-[0.65rem] sm:text-xs tracking-[0.35em] uppercase text-text-muted">
              Guia prático em PDF
            </p>

            <h1 className="text-[clamp(2.1rem,4.2vw,4rem)] font-bold text-text-primary leading-[1.05]">
              Você não está travado por falta de capacidade.
              <br />
              <span className="text-text-secondary">
                Está travado por falta de direção.
              </span>
            </h1>

            <p className="text-base md:text-body text-text-secondary max-w-2xl">
              {CONFIG.PRODUCT_NAME} é um guia direto e prático para quem sabe que pode mais,
              mas vive sabotando a própria ação, clareza e consistência.
            </p>

            <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-text-secondary">
              {[
                `${CONFIG.PAGES} páginas`,
                CONFIG.READING_TIME,
                `${CONFIG.EXERCISES_COUNT} exercícios`,
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-border bg-bg-card/70"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              <button
                onClick={() => handleCheckoutClick("Hero CTA")}
                className="bg-cta-primary text-black px-10 py-4 rounded-lg font-semibold text-base hover:bg-cta-hover hover:scale-[1.02] transition-smooth shadow-lg hover:shadow-xl"
              >
                Quero acessar agora por {CONFIG.PRICE_FORMATTED}
              </button>

              <div>
                <button
                  onClick={scrollToContents}
                  className="text-text-secondary text-sm hover:text-text-primary transition-smooth underline underline-offset-4"
                >
                  Ver o que tem dentro ↓
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <ProductMockup />
          </div>
        </div>

        <div className="mt-10 lg:hidden">
          <ProductMockup />
        </div>
      </div>
    </section>
  );
}
