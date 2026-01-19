"use client";

import Image from "next/image";

/**
 * Mockup editorial do PDF (sem assets reais).
 */
export default function ProductMockup() {
  return (
    <div className="relative w-full h-full min-h-[360px] md:min-h-[500px] flex items-center justify-center">
      <div className="relative w-[260px] md:w-[340px] aspect-[3/4] rounded-2xl overflow-hidden border border-border-strong shadow-2xl">
        <Image
          src="/images/page-preview-1.png"
          alt="Capa do livro Destrave 2026"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 260px, 340px"
          priority
        />
      </div>
    </div>
  );
}
