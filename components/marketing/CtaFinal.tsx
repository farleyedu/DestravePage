"use client";

import { CONFIG } from "@/lib/config";
import { handleCheckoutClick } from "@/lib/tracking";
import SectionReveal from "./SectionReveal";

/**
 * Seção CTA Final (fechamento)
 * Último empurrão antes do footer
 */
export default function CtaFinal() {
  return (
    <section className="py-section-mobile md:py-section-desktop bg-bg-alt">
      <div className="container-custom">
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Headline de fechamento */}
            <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-text-primary">
              A clareza que você precisa está a uma decisão.
            </h2>

            {/* Subheadline */}
            <p className="text-body text-text-secondary">
              Pare de consumir. Comece a aplicar.
            </p>

            {/* CTA */}
            <div className="space-y-4">
              <button
                onClick={() => handleCheckoutClick("Final CTA")}
                className="bg-cta-primary text-white px-12 py-5 rounded-lg font-bold text-lg hover:bg-cta-hover hover:scale-105 transition-smooth shadow-lg hover:shadow-xl"
              >
                Garantir acesso agora
              </button>

              {/* Microcopy de segurança */}
              <p className="text-sm text-text-muted">
                Compra segura • Garantia de {CONFIG.GUARANTEE_DAYS} dias • Acesso imediato
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
