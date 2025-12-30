import SectionReveal from "./SectionReveal";

/**
 * Seção "Para quem é / Não é" (qualificação)
 * Grid 2 colunas compacto
 */
export default function WhoIsFor() {
  const forWho = [
    "20–40 anos em transição (carreira, negócio, vida)",
    "Sabe que pode mais, mas executa pouco",
    "Consome conteúdo mas não aplica consistentemente",
    "Quer direção clara, não motivação vazia",
  ];

  const notForWho = [
    "Quem busca atalhos ou fórmulas mágicas",
    "Quer promessas irreais de transformação rápida",
    "Não quer assumir responsabilidade pela própria mudança",
    "Busca apenas entretenimento ou conteúdo superficial",
  ];

  return (
    <section className="py-section-mobile md:py-section-desktop bg-bg-base">
      <div className="container-custom">
        <SectionReveal>
          <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-text-primary text-center mb-12">
            Para quem é (e não é) este guia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Para quem É */}
            <div className="bg-success/5 border-l-4 border-success rounded-lg p-8">
              <h3 className="text-h3 font-bold text-text-primary mb-6 flex items-center gap-2">
                <span className="text-success text-2xl">✓</span>
                PARA QUEM É
              </h3>
              <ul className="space-y-4">
                {forWho.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-success flex-shrink-0 mt-1">•</span>
                    <span className="text-base text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Para quem NÃO É */}
            <div className="bg-error/5 border-l-4 border-error rounded-lg p-8">
              <h3 className="text-h3 font-bold text-text-primary mb-6 flex items-center gap-2">
                <span className="text-error text-2xl">✗</span>
                NÃO É PARA
              </h3>
              <ul className="space-y-4">
                {notForWho.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-error flex-shrink-0 mt-1">•</span>
                    <span className="text-base text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
