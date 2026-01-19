import Image from "next/image";
import { CONFIG } from "@/lib/config";
import SectionReveal from "./SectionReveal";

/**
 * Secao "O que tem dentro" (capitulos + exercicios + previews).
 */
export default function Contents() {
  const previewPages = [
    {
      label: "Capa",
      src: "/images/page-preview-1.png",
      alt: "Capa do livro Destrave 2026",
    },
    {
      label: "Pagina 02",
      src: "/images/page-preview-2.png",
      alt: "Pagina com aviso importante",
    },
    {
      label: "Pagina 03",
      src: "/images/page-preview-3.png",
      alt: "Pagina explicando o que e destravar",
    },
    {
      label: "Pagina 14",
      src: "/images/page-preview-4.png",
      alt: "Pagina sobre desconforto e crescimento",
    },
  ];

  return (
    <section id="conteudo" className="py-section-mobile md:py-section-desktop bg-bg-alt">
      <div className="container-custom">
        <SectionReveal>
          <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-text-primary text-center mb-4">
            O que tem dentro
          </h2>
          <div className="flex justify-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-card/60 text-sm text-text-secondary">
              Leitura em 1 sentada ({CONFIG.READING_TIME})
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-h3 font-bold text-text-primary">
                5 capÃ­tulos
              </h3>
              <div className="space-y-3">
                {CONFIG.CHAPTERS.map((chapter, index) => (
                  <div
                    key={chapter}
                    className="flex items-start gap-3 p-4 bg-bg-card border border-border rounded-lg hover:border-cta-primary transition-smooth"
                  >
                    <span className="flex-shrink-0 w-7 h-7 bg-cta-primary text-black rounded-full flex items-center justify-center text-xs font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-base text-text-secondary">{chapter}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-h3 font-bold text-text-primary">
                5 exercÃ­cios prÃ¡ticos
              </h3>
              <div className="space-y-3">
                {CONFIG.EXERCISES.map((exercise) => (
                  <div
                    key={exercise}
                    className="flex items-start gap-3 p-4 bg-bg-card border border-border rounded-lg hover:border-cta-primary transition-smooth"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-success flex-shrink-0" />
                    <p className="text-base text-text-secondary">{exercise}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="rounded-3xl bg-gradient-to-b from-[#0E0E0E] to-[#1F1F1F] border border-border p-6 md:p-10">
              <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 md:gap-6">
                {previewPages.map((page) => (
                  <article
                    key={page.src}
                    className="min-w-[220px] sm:min-w-[240px] md:min-w-0 flex flex-col gap-4 bg-[#0E0E0E] text-text-primary rounded-2xl border border-border px-4 py-4 shadow-[0_16px_36px_rgba(0,0,0,0.18)] transition-smooth md:hover:-translate-y-1 md:hover:shadow-[0_20px_44px_rgba(0,0,0,0.22)]"
                  >
                    <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-border-strong bg-black/60">
                      <Image
                        src={page.src}
                        alt={page.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 220px, (max-width: 1024px) 240px, 260px"
                      />
                    </div>
                    <div className="text-[0.65rem] uppercase tracking-[0.35em] text-text-muted text-center">
                      {page.label}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}


