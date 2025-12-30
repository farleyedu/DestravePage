"use client";

/**
 * Mockup do produto: páginas do PDF flutuando em 3D
 * Efeito editorial premium sem precisar de assets reais
 */
export default function ProductMockup() {
  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center">
      {/* Página 3 (fundo, mais desfocada) */}
      <div
        className="absolute w-[240px] md:w-[300px] h-[320px] md:h-[400px] bg-white shadow-2xl rounded-lg border border-border transform rotate-[-8deg] translate-x-[-30px] translate-y-[20px] opacity-60"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)",
        }}
      >
        <div className="p-6 md:p-8 space-y-3">
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
          <div className="mt-6 h-2 bg-gray-100 rounded w-full"></div>
          <div className="h-2 bg-gray-100 rounded w-full"></div>
          <div className="h-2 bg-gray-100 rounded w-4/5"></div>
        </div>
      </div>

      {/* Página 2 (meio) */}
      <div
        className="absolute w-[260px] md:w-[320px] h-[340px] md:h-[420px] bg-white shadow-2xl rounded-lg border border-border transform rotate-[4deg] translate-x-[15px] translate-y-[10px] opacity-80"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)",
        }}
      >
        <div className="p-6 md:p-8 space-y-3">
          <div className="h-4 bg-gray-300 rounded w-2/3 mb-4"></div>
          <div className="h-2 bg-gray-100 rounded w-full"></div>
          <div className="h-2 bg-gray-100 rounded w-full"></div>
          <div className="h-2 bg-gray-100 rounded w-5/6"></div>
          <div className="mt-6 space-y-2">
            <div className="h-2 bg-gray-100 rounded w-full"></div>
            <div className="h-2 bg-gray-100 rounded w-full"></div>
            <div className="h-2 bg-gray-100 rounded w-3/4"></div>
          </div>
        </div>
      </div>

      {/* Página 1 (frente, destaque) */}
      <div
        className="relative w-[280px] md:w-[340px] h-[360px] md:h-[440px] bg-white shadow-2xl rounded-lg border-2 border-border-strong transform rotate-[-2deg] z-10"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #fafafa 100%)",
        }}
      >
        <div className="p-8 md:p-10 space-y-4">
          {/* Título da página */}
          <div className="space-y-2">
            <div className="h-5 bg-black rounded w-1/2"></div>
            <div className="h-3 bg-gray-300 rounded w-3/4"></div>
          </div>

          {/* Conteúdo simulado */}
          <div className="mt-8 space-y-2">
            <div className="h-2 bg-gray-200 rounded w-full"></div>
            <div className="h-2 bg-gray-200 rounded w-full"></div>
            <div className="h-2 bg-gray-200 rounded w-5/6"></div>
          </div>

          <div className="mt-6 space-y-2">
            <div className="h-2 bg-gray-200 rounded w-full"></div>
            <div className="h-2 bg-gray-200 rounded w-full"></div>
            <div className="h-2 bg-gray-200 rounded w-4/5"></div>
          </div>

          {/* Destaque */}
          <div className="mt-8 p-4 bg-bg-alt rounded border-l-4 border-black">
            <div className="h-2 bg-gray-300 rounded w-3/4"></div>
          </div>
        </div>

        {/* Badge "DESTRAVE 2026" na capa */}
        <div className="absolute bottom-6 left-8 right-8">
          <div className="text-xs font-semibold text-text-muted text-center tracking-wider">
            DESTRAVE 2026
          </div>
        </div>
      </div>
    </div>
  );
}
