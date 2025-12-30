import { CONFIG } from "@/lib/config";
import SectionReveal from "./SectionReveal";
import Image from "next/image";

/**
 * Seção "O que tem dentro"
 * Tangibiliza o conteúdo do PDF (capítulos + exercícios)
 */
export default function Contents() {
  return (
    <section id="conteudo" className="py-section-mobile md:py-section-desktop bg-bg-alt">
      <div className="container-custom">
        <SectionReveal>
          {/* Título */}
          <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-text-primary text-center mb-4">
            O que você vai encontrar
          </h2>

          {/* Badge de leitura */}
          <div className="flex justify-center mb-12">
            <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-md text-sm font-medium">
              Leitura em 1 sentada ({CONFIG.READING_TIME})
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Coluna 1: Capítulos */}
            <div className="space-y-6">
              <h3 className="text-h3 font-bold text-text-primary mb-6">
                5 Capítulos
              </h3>
              <div className="space-y-3">
                {CONFIG.CHAPTERS.map((chapter, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-bg-card border border-border rounded-lg hover:shadow-md transition-smooth"
                  >
                    <span className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    <p className="text-base text-text-primary font-medium">
                      {chapter}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna 2: Exercícios */}
            <div className="space-y-6">
              <h3 className="text-h3 font-bold text-text-primary mb-6">
                5 Exercícios Práticos
              </h3>
              <div className="space-y-3">
                {CONFIG.EXERCISES.map((exercise, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-bg-card border border-border rounded-lg hover:shadow-md transition-smooth"
                  >
                    <span className="text-success text-xl flex-shrink-0">✓</span>
                    <p className="text-base text-text-primary">
                      {exercise}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Preview visual (placeholders) */}
          <div className="mt-16 max-w-4xl mx-auto">
            <p className="text-center text-text-secondary mb-6 text-sm">
              Preview do conteúdo:
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="relative aspect-[3/4] bg-bg-card border border-border rounded-lg overflow-hidden hover:scale-105 transition-smooth"
                >
                  {/* Placeholder: substituir por screenshots reais do PDF */}
                  <div className="w-full h-full bg-gradient-to-br from-bg-alt to-bg-card flex items-center justify-center">
                    <div className="text-center p-6 space-y-3 opacity-50">
                      <div className="h-2 bg-gray-300 rounded w-3/4 mx-auto"></div>
                      <div className="h-2 bg-gray-300 rounded w-full"></div>
                      <div className="h-2 bg-gray-300 rounded w-5/6 mx-auto"></div>
                      <div className="mt-4 h-1 bg-gray-200 rounded w-full"></div>
                      <div className="h-1 bg-gray-200 rounded w-full"></div>
                      <div className="h-1 bg-gray-200 rounded w-4/5 mx-auto"></div>
                    </div>
                  </div>
                  {/* Comentário para substituição */}
                  <div className="absolute bottom-2 left-2 right-2 bg-black/70 text-white text-xs p-2 rounded text-center">
                    Página {n}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-text-muted text-xs mt-4 italic">
              * Substitua os placeholders por screenshots reais do PDF em /public/images/
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
