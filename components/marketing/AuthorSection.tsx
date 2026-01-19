import Image from "next/image";
import { CONFIG } from "@/lib/config";
import SectionReveal from "./SectionReveal";

/**
 * Slot para foto profissional do autor.
 */
export default function AuthorSection() {
  return (
    <SectionReveal className="mt-16">
      <div className="max-w-4xl mx-auto bg-bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
        <div className="relative w-28 h-36 md:w-32 md:h-40 flex-shrink-0 rounded-xl overflow-hidden border border-border-strong">
          <Image
            src="/images/foto_profissional.PNG"
            alt="Foto profissional do autor"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 112px, 128px"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-xs tracking-[0.3em] uppercase text-text-muted mb-2">
            Autor
          </p>
          <h3 className="text-h3 font-bold text-text-primary mb-2">
            {CONFIG.AUTHOR.name}
          </h3>
          <p className="text-base text-text-secondary mb-2">
            {CONFIG.AUTHOR.bio}
          </p>
          <p className="text-sm text-text-muted">{CONFIG.AUTHOR.role}</p>
        </div>
      </div>
    </SectionReveal>
  );
}
