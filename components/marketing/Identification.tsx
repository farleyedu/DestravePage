import SectionReveal from "./SectionReveal";

/**
 * Secao de identificacao (dor).
 */
export default function Identification() {
  const painPoints = [
    "Você entende o que precisa fazer, mas adia o primeiro passo.",
    "Começa com força e perde direção em poucos dias.",
    "Seu foco se dissolve em distrações que você mesmo cria.",
    "Consome conteúdo demais e executa de menos.",
    "Sabe que está travado, mas não consegue destravar.",
    "Quer ação consistente, não picos de motivação.",
  ];

  return (
    <section className="py-section-mobile md:py-section-desktop bg-bg-alt">
      <div className="container-custom">
        <SectionReveal>
          <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-text-primary text-center mb-12">
            Se isso soa familiar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
            {painPoints.map((point) => (
              <div
                key={point}
                className="bg-bg-card border border-border rounded-xl p-6 hover:border-cta-primary transition-smooth"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-cta-primary flex-shrink-0" />
                  <p className="text-base text-text-secondary">{point}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-body text-text-secondary text-center max-w-2xl mx-auto italic">
            Isso não é falta de capacidade. É falta de direção.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
