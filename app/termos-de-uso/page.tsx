import Link from "next/link";

export const metadata = {
  title: "Termos de Uso | DESTRAVE 2026",
  description: "Termos e Condições de Uso",
};

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-bg-base">
      {/* Header simples */}
      <header className="py-6 bg-bg-card border-b border-border">
        <div className="container-custom">
          <Link
            href="/"
            className="text-text-primary hover:text-text-secondary transition-smooth"
          >
            ← Voltar para home
          </Link>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="py-12 md:py-20">
        <div className="container-custom max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h1 className="text-h2-mobile md:text-h2-desktop font-bold text-text-primary mb-8">
              Termos de Uso
            </h1>

            <p className="text-text-secondary mb-8">
              <strong>Última atualização:</strong> 30 de dezembro de 2024
            </p>

            <div className="space-y-8 text-text-primary">
              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  1. Aceitação dos Termos
                </h2>
                <p className="text-body text-text-secondary">
                  Ao acessar e usar este site, você concorda em cumprir e estar vinculado aos presentes Termos de Uso. Se você não concordar com qualquer parte destes termos, não utilize este site nem adquira o produto.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  2. Sobre o Produto
                </h2>
                <p className="text-body text-text-secondary mb-4">
                  <strong>Nome do produto:</strong> DESTRAVE 2026
                  <br />
                  <strong>Formato:</strong> Ebook em PDF (16 páginas)
                  <br />
                  <strong>Preço:</strong> R$ 37,00
                </p>
                <p className="text-body text-text-secondary">
                  O produto é um <strong>infoproduto digital</strong> entregue exclusivamente em formato PDF via e-mail e área de membros da plataforma Eduzz. Não há envio de produto físico.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  3. Compra e Pagamento
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-body text-text-secondary">
                  <li>O pagamento é processado pela <strong>Eduzz</strong>, plataforma terceira de pagamentos.</li>
                  <li>Formas de pagamento aceitas: Pix, Cartão de Crédito, Boleto Bancário.</li>
                  <li>O acesso ao produto é liberado após a confirmação do pagamento:
                    <ul className="list-circle pl-6 mt-2 space-y-1">
                      <li><strong>Pix:</strong> imediato</li>
                      <li><strong>Cartão:</strong> imediato (após aprovação)</li>
                      <li><strong>Boleto:</strong> 1-2 dias úteis (após compensação)</li>
                    </ul>
                  </li>
                  <li>Ao concluir a compra, você receberá um e-mail com o link de acesso ao produto.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  4. Garantia e Reembolso
                </h2>
                <p className="text-body text-text-secondary mb-4">
                  Oferecemos <strong>garantia incondicional de 7 dias</strong> a partir da data de compra.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body text-text-secondary">
                  <li>Se você não estiver satisfeito com o produto, pode solicitar reembolso integral dentro do prazo de 7 dias.</li>
                  <li>Para solicitar reembolso, entre em contato diretamente com a Eduzz (área do comprador) ou com nosso suporte: <strong>natabdelf@gmail.com</strong></li>
                  <li>O reembolso será processado em até 30 dias úteis, conforme política da Eduzz e da operadora de pagamento.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  5. Propriedade Intelectual
                </h2>
                <p className="text-body text-text-secondary mb-4">
                  Todo o conteúdo do produto (textos, exercícios, design, estrutura) é de propriedade exclusiva do autor e está protegido por direitos autorais (Lei nº 9.610/98).
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body text-text-secondary">
                  <li><strong>É proibido:</strong> reproduzir, distribuir, compartilhar, revender ou modificar o conteúdo sem autorização expressa.</li>
                  <li>O produto é de <strong>uso pessoal e intransferível</strong>.</li>
                  <li>Violações de direitos autorais estão sujeitas a medidas legais.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  6. Limitação de Responsabilidade
                </h2>
                <p className="text-body text-text-secondary mb-4">
                  O produto DESTRAVE 2026 é um <strong>guia informativo e educacional</strong>. Os resultados dependem da aplicação individual de cada usuário.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body text-text-secondary">
                  <li><strong>Não garantimos resultados específicos</strong> (financeiros, pessoais, profissionais).</li>
                  <li>O produto não substitui acompanhamento profissional (psicológico, médico, jurídico, etc.) quando necessário.</li>
                  <li>O autor e o site não se responsabilizam por danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso (ou impossibilidade de uso) do produto.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  7. Uso do Site
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-body text-text-secondary">
                  <li>Você concorda em usar o site apenas para fins legais.</li>
                  <li>É proibido: tentar hackear, interferir ou sobrecarregar o site; extrair dados de forma automatizada; usar o site para spam ou atividades fraudulentas.</li>
                  <li>Reservamo-nos o direito de suspender ou encerrar o acesso de usuários que violem estes termos.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  8. Links de Terceiros
                </h2>
                <p className="text-body text-text-secondary">
                  Este site pode conter links para sites de terceiros (como a Eduzz). Não nos responsabilizamos pelo conteúdo, políticas de privacidade ou práticas de sites externos.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  9. Modificações nos Termos
                </h2>
                <p className="text-body text-text-secondary">
                  Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação nesta página. Recomendamos que você revise periodicamente esta página.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  10. Lei Aplicável e Foro
                </h2>
                <p className="text-body text-text-secondary">
                  Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Quaisquer disputas decorrentes destes termos serão resolvidas no foro da comarca de [PREENCHER: cidade/estado do controlador], com exclusão de qualquer outro, por mais privilegiado que seja.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  11. Contato
                </h2>
                <p className="text-body text-text-secondary">
                  Em caso de dúvidas sobre estes Termos de Uso, entre em contato:
                  <br />
                  <strong>E-mail:</strong> natabdelf@gmail.com
                </p>
              </section>

              <section className="bg-bg-alt p-6 rounded-lg border-l-4 border-accent">
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  Informações Obrigatórias (Preencher)
                </h2>
                <p className="text-body text-text-secondary mb-4">
                  <strong>Antes de publicar, preencha os seguintes campos:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body text-text-secondary">
                  <li><strong>Controlador de Dados:</strong> [Nome completo ou razão social]</li>
                  <li><strong>CPF ou CNPJ:</strong> [Número]</li>
                  <li><strong>Endereço completo:</strong> [Rua, número, bairro, cidade, estado, CEP]</li>
                  <li><strong>Foro competente:</strong> [Cidade/Estado]</li>
                </ul>
                <p className="text-body text-text-secondary mt-4 italic">
                  Estes dados são necessários para conformidade com a LGPD e o Código de Defesa do Consumidor.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
