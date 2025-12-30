"use client";

import { useEffect, useState } from "react";
import { CONFIG } from "@/lib/config";
import { handleCheckoutClick } from "@/lib/tracking";

/**
 * Barra inferior fixa (Bottom CTA Bar)
 * Aparece após ~20% de scroll com CTA + âncoras
 */
export default function BottomBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra a barra após rolar 20% da página
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercentage > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-bg-card border-t border-border shadow-2xl z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container-custom py-3">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/* Informação do produto (esquerda) */}
          <div className="flex items-center gap-4 text-sm">
            <span className="font-bold text-text-primary hidden sm:inline">
              {CONFIG.PRODUCT_NAME}
            </span>
            <span className="text-text-secondary">•</span>
            <span className="font-semibold text-text-primary">
              {CONFIG.PRICE_FORMATTED}
            </span>
            <span className="text-text-secondary hidden md:inline">•</span>
            <span className="text-text-secondary text-xs hidden md:inline">
              Garantia {CONFIG.GUARANTEE_DAYS} dias
            </span>
          </div>

          {/* Âncoras + CTA (direita) */}
          <div className="flex items-center gap-4">
            {/* Âncoras (hidden em mobile) */}
            <div className="hidden lg:flex items-center gap-4 text-sm text-text-secondary">
              <button
                onClick={() => scrollToSection("conteudo")}
                className="hover:text-text-primary transition-smooth"
              >
                Conteúdo
              </button>
              <button
                onClick={() => scrollToSection("oferta")}
                className="hover:text-text-primary transition-smooth"
              >
                Oferta
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="hover:text-text-primary transition-smooth"
              >
                FAQ
              </button>
            </div>

            {/* CTA */}
            <button
              onClick={() => handleCheckoutClick("Bottom Bar CTA")}
              className="bg-cta-primary text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-cta-hover hover:scale-105 transition-smooth shadow-lg"
            >
              Garantir acesso
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
