import { CONFIG } from "@/lib/config";
import SectionReveal from "./SectionReveal";

/**
 * Seção "O que é" + Os 3 Pilares (mesclada)
 * Cards horizontais com os pilares do método
 */
export default function Pillars() {
  return (
    <section className="py-section-mobile md:py-section-desktop bg-bg-base">
      <div className="container-custom">
        <SectionReveal>
          {/* Introdução: O que é */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-text-primary mb-6">
              O que é {CONFIG.PRODUCT_NAME}?
            </h2>
            <p className="text-body text-text-secondary leading-relaxed">
              {CONFIG.PRODUCT_NAME} não é motivação. Não é frase bonita. É um guia mental e prático, direto ao ponto, baseado em 3 pilares que reposicionam sua identidade antes de exigir técnica.
            </p>
          </div>

          {/* Os 3 Pilares */}
          <div className="max-w-4xl mx-auto space-y-6">
            {CONFIG.PILLARS.map((pillar, index) => (
              <SectionReveal key={index}>
                <div className="bg-bg-card border-l-4 border-black rounded-lg p-8 hover:shadow-lg transition-smooth">
                  <div className="flex items-start gap-6">
                    {/* Ícone/Número */}
                    <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1">
                      <h3 className="text-h3 font-bold text-text-primary mb-2">
                        PILAR {index + 1}: {pillar.title}
                      </h3>
                      <p className="text-body text-text-secondary">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
