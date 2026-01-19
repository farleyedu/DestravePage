"use client";

import { useEffect, useState } from "react";
import { CONFIG } from "@/lib/config";
import { handleCheckoutClick } from "@/lib/tracking";

/**
 * Bottom CTA Bar fixa, aparece após ~20% de scroll.
 */
export default function BottomBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
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
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-bg-card/95 border-t border-border backdrop-blur">
        <div className="container-custom py-3">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">
                {CONFIG.PRODUCT_NAME}
              </span>
              <span className="text-text-muted">•</span>
              <span className="font-semibold text-text-primary">
                {CONFIG.PRICE_FORMATTED}
              </span>
              <span className="text-text-muted">•</span>
              <span className="text-text-secondary">
                Garantia {CONFIG.GUARANTEE_DAYS} dias
              </span>
            </div>

            <div className="flex items-center gap-4">
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

              <button
                onClick={() => handleCheckoutClick("Bottom Bar CTA")}
                className="bg-cta-primary text-black px-6 py-2 rounded-lg font-semibold text-sm hover:bg-cta-hover hover:scale-[1.02] transition-smooth shadow-lg"
              >
                Garantir acesso
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
