"use client";

import { CONFIG } from "@/lib/config";
import { handleCheckoutClick } from "@/lib/tracking";
import SectionReveal from "./SectionReveal";

/**
 * Seção de Oferta (card central forte)
 * Preço, garantia, entrega, CTA
 */
export default function Offer() {
  return (
    <section id="oferta" className="py-section-mobile md:py-section-desktop bg-bg-alt">
      <div className="container-custom">
        <SectionReveal>
          <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-text-primary text-center mb-12">
            Como garantir seu acesso
          </h2>

          {/* Card central de oferta */}
          <div className="max-w-2xl mx-auto bg-bg-card border-2 border-border-strong rounded-2xl p-8 md:p-12 shadow-xl relative">
            {/* Badge de garantia */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-success text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                Garantia de {CONFIG.GUARANTEE_DAYS} dias
              </span>
            </div>

            <div className="space-y-8 mt-4">
              {/* O que você recebe */}
              <div>
                <h3 className="text-h3 font-bold text-text-primary mb-4">
                  Você recebe:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-success text-xl flex-shrink-0">✓</span>
                    <span className="text-base text-text-primary">
                      Guia {CONFIG.PRODUCT_NAME} completo ({CONFIG.PAGES} páginas)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success text-xl flex-shrink-0">✓</span>
                    <span className="text-base text-text-primary">
                      5 capítulos diretos ao ponto
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success text-xl flex-shrink-0">✓</span>
                    <span className="text-base text-text-primary">
                      5 exercícios práticos aplicáveis hoje
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success text-xl flex-shrink-0">✓</span>
                    <span className="text-base text-text-primary">
                      Plano de 30 dias
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-success text-xl flex-shrink-0">✓</span>
                    <span className="text-base text-text-primary">
                      Acesso imediato via e-mail
                    </span>
                  </li>
                </ul>
              </div>

              {/* Preço */}
              <div className="text-center py-6 border-y border-border">
                <p className="text-text-secondary text-sm mb-2">Investimento:</p>
                <p className="text-5xl font-bold text-text-primary">{CONFIG.PRICE_FORMATTED}</p>
              </div>

              {/* CTA grande */}
              <button
                onClick={() => handleCheckoutClick("Offer CTA")}
                className="w-full bg-cta-primary text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-cta-hover hover:scale-105 transition-smooth shadow-lg hover:shadow-xl"
              >
                Quero acessar agora
              </button>

              {/* Formas de pagamento */}
              <div className="text-center space-y-3">
                <p className="text-sm font-semibold text-text-primary">
                  Formas de pagamento:
                </p>
                <div className="flex justify-center gap-6 text-sm text-text-secondary">
                  <span>💳 Cartão (imediato)</span>
                  <span>📱 Pix (imediato)</span>
                  <span>🧾 Boleto (1-2 dias)</span>
                </div>
              </div>

              {/* Segurança */}
              <div className="text-center pt-4 border-t border-border">
                <p className="text-xs text-text-muted flex items-center justify-center gap-2">
                  <span>🔒</span>
                  Pagamento 100% seguro processado pela Eduzz
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
