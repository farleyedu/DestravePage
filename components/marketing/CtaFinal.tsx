"use client";

import { CONFIG } from "@/lib/config";
import { handleCheckoutClick } from "@/lib/tracking";
import SectionReveal from "./SectionReveal";

/**
 * CTA final de fechamento.
 */
export default function CtaFinal() {
  return (
    <section className="py-section-mobile md:py-section-desktop bg-bg-alt">
      <div className="container-custom">
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-text-primary">
              Direção não é motivação. É decisão.
            </h2>
            <p className="text-body text-text-secondary">
              Comece hoje com um guia curto, direto e aplicável em uma única sentada.
            </p>

            <div className="space-y-4">
              <button
                onClick={() => handleCheckoutClick("Final CTA")}
                className="bg-cta-primary text-black px-12 py-5 rounded-lg font-bold text-lg hover:bg-cta-hover hover:scale-[1.02] transition-smooth shadow-lg hover:shadow-xl"
              >
                Garantir acesso agora
              </button>
              <p className="text-sm text-text-muted">
                Entrega via Eduzz • Garantia de {CONFIG.GUARANTEE_DAYS} dias • Acesso imediato após aprovação
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
