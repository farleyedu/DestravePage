"use client";

import { CONFIG } from "@/lib/config";
import { handleCheckoutClick } from "@/lib/tracking";
import SectionReveal from "./SectionReveal";

/**
 * Secao de oferta (card central).
 */
export default function Offer() {
  const deliveryItems = [
    `Ebook ${CONFIG.PRODUCT_NAME} (${CONFIG.PAGES} páginas)`,
    "5 capítulos + 5 exercícios aplicáveis",
    "Plano prático de 30 dias",
    "Acesso imediato (e-mail + área do comprador + download)",
    "Suporte por e-mail",
  ];

  const paymentItems = [
    "Pix: imediato",
    "Cartão: após aprovação",
    "Boleto: após compensação",
  ];

  return (
    <section id="oferta" className="py-section-mobile md:py-section-desktop bg-bg-alt">
      <div className="container-custom">
        <SectionReveal>
          <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-text-primary text-center mb-12">
            Como garantir seu acesso
          </h2>

          <div className="max-w-2xl mx-auto bg-bg-card border border-border-strong rounded-2xl p-8 md:p-12 shadow-xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-success text-text-primary px-6 py-2 rounded-full text-sm font-semibold shadow-lg border border-border">
                Garantia de {CONFIG.GUARANTEE_DAYS} dias
              </span>
            </div>

            <div className="space-y-8 mt-4">
              <div>
                <h3 className="text-h3 font-bold text-text-primary mb-4">
                  Você recebe
                </h3>
                <ul className="space-y-3">
                  {deliveryItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-success flex-shrink-0" />
                      <span className="text-base text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center py-6 border-y border-border">
                <p className="text-text-muted text-sm mb-2">Investimento único</p>
                <p className="text-5xl font-bold text-text-primary">
                  {CONFIG.PRICE_FORMATTED}
                </p>
              </div>

              <button
                onClick={() => handleCheckoutClick("Offer CTA")}
                className="w-full bg-cta-primary text-black px-10 py-5 rounded-lg font-bold text-lg hover:bg-cta-hover hover:scale-[1.02] transition-smooth shadow-lg hover:shadow-xl"
              >
                Quero garantir meu acesso
              </button>

              <div className="text-center space-y-3">
                <p className="text-sm font-semibold text-text-primary">
                  Entrega via Eduzz
                </p>
                <div className="flex flex-wrap justify-center gap-3 text-sm text-text-secondary">
                  {paymentItems.map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full border border-border">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center pt-4 border-t border-border">
                <p className="text-xs text-text-muted">
                  Checkout e entrega processados pela Eduzz.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
