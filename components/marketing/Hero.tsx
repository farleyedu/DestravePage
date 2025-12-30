"use client";

import { CONFIG } from "@/lib/config";
import { handleCheckoutClick } from "@/lib/tracking";
import ProductMockup from "./ProductMockup";

/**
 * Seção Hero (acima da dobra)
 * Grid 60/40 com headline forte + mockup do produto
 */
export default function Hero() {
  const scrollToContents = () => {
    const element = document.getElementById("conteudo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center py-section-mobile md:py-section-desktop bg-bg-base">
      <div className="container-custom w-full">
        {/* Grid 60/40 (responsivo) */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
          {/* Lado esquerdo: Copy */}
          <div className="space-y-8">
            {/* Headline */}
            <h1 className="text-hero-mobile md:text-hero-desktop font-bold text-text-primary leading-tight">
              Você não está travado por falta de capacidade.
              <br />
              <span className="text-text-secondary">Está travado por falta de direção.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-body text-text-secondary max-w-2xl">
              {CONFIG.PRODUCT_NAME} é um guia direto e prático para quem sabe que pode mais, mas vive sabotando a própria ação, clareza e consistência.
            </p>

            {/* Proof points (inline) */}
            <div className="flex flex-wrap gap-6 text-sm md:text-base text-text-secondary">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📄</span>
                <span>{CONFIG.PAGES} páginas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⏱️</span>
                <span>{CONFIG.READING_TIME}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✏️</span>
                <span>{CONFIG.EXERCISES_COUNT} exercícios práticos</span>
              </div>
            </div>

            {/* CTA primário */}
            <div className="space-y-4">
              <button
                onClick={() => handleCheckoutClick("Hero CTA")}
                className="bg-cta-primary text-white px-10 py-4 rounded-lg font-semibold text-base hover:bg-cta-hover hover:scale-105 transition-smooth shadow-lg hover:shadow-xl"
              >
                Quero acessar agora por {CONFIG.PRICE_FORMATTED}
              </button>

              {/* Link secundário discreto */}
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

          {/* Lado direito: Mockup do produto */}
          <div className="hidden lg:block">
            <ProductMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
