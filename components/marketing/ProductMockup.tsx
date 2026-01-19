"use client";

/**
 * Mockup editorial do PDF (sem assets reais).
 */
export default function ProductMockup() {
  return (
    <div className="relative w-full h-full min-h-[360px] md:min-h-[500px] flex items-center justify-center">
      <div
        className="absolute w-[230px] md:w-[290px] h-[310px] md:h-[390px] rounded-lg border border-border shadow-2xl transform -rotate-6 -translate-x-8 translate-y-6 opacity-60"
        style={{
          background: "linear-gradient(140deg, #f2eee6 0%, #e8e2d7 100%)",
        }}
      >
        <div className="p-6 md:p-8 space-y-3">
          <div className="h-2 bg-[#c6a75e] rounded w-1/2"></div>
          <div className="h-2 bg-[#cfc7ba] rounded w-full"></div>
          <div className="h-2 bg-[#cfc7ba] rounded w-5/6"></div>
          <div className="mt-6 h-1 bg-[#d9d1c3] rounded w-full"></div>
          <div className="h-1 bg-[#d9d1c3] rounded w-5/6"></div>
        </div>
      </div>

      <div
        className="absolute w-[250px] md:w-[320px] h-[330px] md:h-[420px] rounded-lg border border-border shadow-2xl transform rotate-3 translate-x-6 translate-y-3 opacity-80"
        style={{
          background: "linear-gradient(140deg, #f6f2ea 0%, #ebe4d8 100%)",
        }}
      >
        <div className="p-6 md:p-8 space-y-3">
          <div className="h-3 bg-[#c6a75e] rounded w-2/3"></div>
          <div className="h-2 bg-[#d2cabd] rounded w-full"></div>
          <div className="h-2 bg-[#d2cabd] rounded w-5/6"></div>
          <div className="mt-6 space-y-2">
            <div className="h-2 bg-[#dcd4c7] rounded w-full"></div>
            <div className="h-2 bg-[#dcd4c7] rounded w-4/5"></div>
          </div>
        </div>
      </div>

      <div
        className="relative w-[270px] md:w-[340px] h-[350px] md:h-[440px] rounded-lg border-2 border-border-strong shadow-2xl transform -rotate-1 z-10"
        style={{
          background: "linear-gradient(140deg, #f9f5ee 0%, #efe7db 100%)",
        }}
      >
        <div className="p-8 md:p-10 space-y-4">
          <div className="space-y-2">
            <div className="h-4 bg-[#c6a75e] rounded w-1/2"></div>
            <div className="h-2 bg-[#d5cdbf] rounded w-3/4"></div>
          </div>

          <div className="mt-6 space-y-2">
            <div className="h-2 bg-[#e0d8cb] rounded w-full"></div>
            <div className="h-2 bg-[#e0d8cb] rounded w-full"></div>
            <div className="h-2 bg-[#e0d8cb] rounded w-5/6"></div>
          </div>

          <div className="mt-6 space-y-2">
            <div className="h-2 bg-[#e0d8cb] rounded w-full"></div>
            <div className="h-2 bg-[#e0d8cb] rounded w-4/5"></div>
          </div>

          <div className="mt-6 p-4 bg-bg-alt rounded border-l-4 border-cta-primary">
            <div className="h-2 bg-[#d5cdbf] rounded w-3/4"></div>
          </div>
        </div>

        <div className="absolute bottom-6 left-8 right-8">
          <div className="text-xs font-semibold text-text-muted text-center tracking-wider">
            DESTRAVE 2026
          </div>
        </div>
      </div>
    </div>
  );
}
