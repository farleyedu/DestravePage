import SectionReveal from "./SectionReveal";

/**
 * Secao "Para quem e / nao e".
 */
export default function WhoIsFor() {
  const forWho = [
    "Quer clareza para decidir e agir sem depender de motivação.",
    "Está cansado de começar e parar.",
    "Prefere um guia direto, sem hype.",
    "Busca consistência em uma rotina mínima realista.",
  ];

  const notForWho = [
    "Quer fórmula mágica ou promessa rápida.",
    "Não pretende aplicar o conteúdo.",
    "Busca entretenimento, não direção.",
    "Não aceita responsabilidade pelas próprias escolhas.",
  ];

  return (
    <section className="py-section-mobile md:py-section-desktop bg-bg-base">
      <div className="container-custom">
        <SectionReveal>
          <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-text-primary text-center mb-12">
            Para quem é (e para quem não é)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-bg-card border border-border rounded-xl p-8">
              <h3 className="text-h3 font-bold text-text-primary mb-6">
                Para quem é
              </h3>
              <ul className="space-y-4">
                {forWho.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-success flex-shrink-0" />
                    <span className="text-base text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-xl p-8">
              <h3 className="text-h3 font-bold text-text-primary mb-6">
                Não é para
              </h3>
              <ul className="space-y-4">
                {notForWho.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-border-strong flex-shrink-0" />
                    <span className="text-base text-text-secondary">{item}</span>
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
