import SectionReveal from "./SectionReveal";

/**
 * Seção de Identificação (dor)
 * Cards em grid com bullets concretos
 */
export default function Identification() {
  const painPoints = [
    "Pensa demais e age de menos",
    "Começa coisas e não termina",
    "Sabe o que fazer, mas não executa",
    "Oscila entre motivação e estagnação",
    "Consome conteúdo e executa pouco",
  ];

  return (
    <section className="py-section-mobile md:py-section-desktop bg-bg-alt">
      <div className="container-custom">
        <SectionReveal>
          {/* Título da seção */}
          <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-text-primary text-center mb-12">
            Se isso soa familiar...
          </h2>

          {/* Grid de pain points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="bg-bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-smooth"
              >
                <div className="flex items-start gap-3">
                  <span className="text-error text-xl flex-shrink-0">✗</span>
                  <p className="text-body text-text-primary">{point}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Microcopy de fechamento */}
          <p className="text-body text-text-secondary text-center max-w-2xl mx-auto italic">
            Isso não é falta de inteligência. É falta de domínio sobre foco, energia e decisão.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
