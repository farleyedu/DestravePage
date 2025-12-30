import Link from "next/link";
import { CONFIG } from "@/lib/config";

/**
 * Footer com links legais e disclaimer
 */
export default function Footer() {
  return (
    <footer className="bg-bg-footer border-t border-border py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Nome do produto */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-text-primary">
              {CONFIG.PRODUCT_NAME}
            </h3>
            <p className="text-sm text-text-secondary mt-1">
              {CONFIG.PRODUCT_SUBTITLE}
            </p>
          </div>

          {/* Links legais */}
          <div className="flex justify-center gap-6 text-sm">
            <Link
              href="/politica-de-privacidade"
              className="text-text-secondary hover:text-text-primary transition-smooth underline underline-offset-4"
            >
              Política de Privacidade
            </Link>
            <span className="text-text-muted">•</span>
            <Link
              href="/termos-de-uso"
              className="text-text-secondary hover:text-text-primary transition-smooth underline underline-offset-4"
            >
              Termos de Uso
            </Link>
          </div>

          {/* Contato */}
          <div className="text-center text-sm text-text-secondary">
            <p>
              Contato:{" "}
              <a
                href={`mailto:${CONFIG.SUPPORT_EMAIL}`}
                className="hover:text-text-primary transition-smooth underline"
              >
                {CONFIG.SUPPORT_EMAIL}
              </a>
            </p>
          </div>

          {/* Disclaimer */}
          <div className="text-center text-xs text-text-muted max-w-2xl mx-auto space-y-2 pt-6 border-t border-border">
            <p>
              Este site não faz parte do Facebook, Google ou qualquer plataforma de mídia social.
              Este é um produto digital independente.
            </p>
            <p>
              Pagamento processado de forma segura pela Eduzz.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-text-muted">
            <p>© 2025 {CONFIG.PRODUCT_NAME} • Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
