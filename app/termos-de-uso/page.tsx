import Link from "next/link";
import { CONFIG } from "@/lib/config";

export const metadata = {
  title: "Termos de Uso | DESTRAVE 2026",
  description: "Termos e Condições de Uso",
};

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-bg-base">
      <header className="py-6 bg-bg-card border-b border-border">
        <div className="container-custom">
          <Link
            href="/"
            className="text-text-primary hover:text-text-secondary transition-smooth"
          >
            {"<-"} Voltar para home
          </Link>
        </div>
      </header>

      <main className="py-12 md:py-20">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            <div>
              <h1 className="text-h2-mobile md:text-h2-desktop font-bold text-text-primary mb-3">
                Termos de Uso
              </h1>
              <p className="text-text-secondary">
                <strong>Última atualização:</strong> 30 de dezembro de 2025
              </p>
            </div>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">
                1. Aceitação dos termos
              </h2>
              <p>
                Ao acessar este site e adquirir o produto, você concorda com os
                termos descritos nesta página.
              </p>
            </section>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">
                2. Sobre o produto
              </h2>
              <p>
                <strong>Produto:</strong> {CONFIG.PRODUCT_NAME} (ebook em PDF)
                <br />
                <strong>Formato:</strong> digital (download)
                <br />
                <strong>Preço:</strong> {CONFIG.PRICE_FORMATTED}
              </p>
              <p>
                O acesso é entregue exclusivamente via Eduzz (e-mail e área do
                comprador). Não há envio físico.
              </p>
            </section>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">
                3. Compra e pagamento
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>O checkout é processado pela Eduzz.</li>
                <li>Formas de pagamento: Pix, cartão e boleto.</li>
                <li>
                  A liberação ocorre após confirmação do pagamento:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Pix: imediato.</li>
                    <li>Cartão: após aprovação.</li>
                    <li>Boleto: após compensação.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">
                4. Garantia e reembolso
              </h2>
              <p>
                Oferecemos garantia de {CONFIG.GUARANTEE_DAYS} dias. O reembolso
                deve ser solicitado dentro do prazo pela Eduzz, conforme regras
                da plataforma.
              </p>
            </section>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">
                5. Propriedade intelectual
              </h2>
              <p>
                Todo o conteúdo do produto é protegido por direitos autorais. É
                proibido copiar, distribuir, revender ou compartilhar o material
                sem autorização.
              </p>
            </section>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">
                6. Limitação de responsabilidade
              </h2>
              <p>
                O {CONFIG.PRODUCT_NAME} é um guia educacional. Resultados
                dependem da aplicação individual. Não garantimos resultados
                específicos.
              </p>
            </section>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">
                7. Uso do site
              </h2>
              <p>
                Você concorda em usar o site de forma legal e respeitosa. É
                proibido tentar acessar áreas restritas, interferir no
                funcionamento do site ou utilizar o conteúdo de forma indevida.
              </p>
            </section>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">
                8. Links externos
              </h2>
              <p>
                Este site pode conter links para plataformas de terceiros (como
                a Eduzz). Não nos responsabilizamos pelo conteúdo dessas
                plataformas.
              </p>
            </section>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">
                9. Alterações nos termos
              </h2>
              <p>
                Podemos atualizar estes termos a qualquer momento. Recomendamos
                revisar esta página periodicamente.
              </p>
            </section>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">
                10. Lei aplicável e foro
              </h2>
              <p>
                Estes termos são regidos pelas leis brasileiras. Fica eleito o
                foro de <strong>[PREENCHER: CIDADE/UF]</strong> para dirimir
                quaisquer conflitos.
              </p>
            </section>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">11. Contato</h2>
              <p>
                Em caso de dúvidas, entre em contato pelo e-mail{" "}
                <strong>{CONFIG.SUPPORT_EMAIL}</strong>.
              </p>
            </section>

            <section className="bg-bg-card border border-cta-primary rounded-xl p-6 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary mb-2">
                Campos obrigatórios
              </h2>
              <p>
                Antes de publicar, preencha:{" "}
                <strong>[PREENCHER: NOME]</strong>,{" "}
                <strong>[PREENCHER: CPF]</strong>,{" "}
                <strong>[PREENCHER: ENDEREÇO COMPLETO]</strong>,{" "}
                <strong>[PREENCHER: CIDADE/UF]</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
