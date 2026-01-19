import { CONFIG } from "@/lib/config";
import SectionReveal from "./SectionReveal";
import AuthorSection from "./AuthorSection";

/**
 * Secao "O que e" + 3 pilares.
 */
export default function Pillars() {
  return (
    <section className="py-section-mobile md:py-section-desktop bg-bg-base">
      <div className="container-custom">
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-xs tracking-[0.35em] uppercase text-accent mb-4">
              CLAREZA → DECISÃO → AÇÃO
            </p>
            <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-text-primary mb-6">
              O que é o {CONFIG.PRODUCT_NAME}
            </h2>
            <p className="text-body text-text-secondary leading-relaxed">
              Um guia direto, feito para organizar sua mente antes de exigir disciplina.
              Sem frases prontas. Sem motivação vazia. Só direção clara e prática.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CONFIG.PILLARS.map((pillar, index) => (
            <SectionReveal key={pillar.title}>
              <div className="h-full bg-bg-card border border-border rounded-2xl p-6 md:p-7 hover:border-cta-primary transition-smooth">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs tracking-[0.3em] uppercase text-text-muted">
                    Pilar {index + 1}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-cta-primary text-black flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-h3 font-bold text-text-primary mb-3">
                  {pillar.title}
                </h3>
                <p className="text-base text-text-secondary">
                  {pillar.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <AuthorSection />
      </div>
    </section>
  );
}
