import Link from "next/link";
import { CONFIG } from "@/lib/config";

export const metadata = {
  title: "Política de Privacidade | DESTRAVE 2026",
  description: "Política de Privacidade e Proteção de Dados",
};

export default function PoliticaPrivacidade() {
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
                Política de Privacidade
              </h1>
              <p className="text-text-secondary">
                <strong>Última atualização:</strong> 30 de dezembro de 2025
              </p>
            </div>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">
                1. Identificação do controlador
              </h2>
              <p>
                Este site é operado por <strong>[PREENCHER: NOME]</strong>,
                inscrito no CPF sob o número <strong>[PREENCHER: CPF]</strong>,
                com endereço em <strong>[PREENCHER: ENDEREÇO COMPLETO]</strong>.
              </p>
              <p>
                E-mail de contato: <strong>{CONFIG.SUPPORT_EMAIL}</strong>
              </p>
            </section>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">
                2. Dados coletados
              </h2>
              <p>
                Coletamos dados pessoais fornecidos no momento da compra e do
                contato, como nome, e-mail e CPF. Dados de pagamento são
                processados exclusivamente pela Eduzz.
              </p>
              <p>
                Também podemos coletar dados de navegação (endereço IP, páginas
                visitadas, duração da visita) para fins estatísticos e melhoria
                do site.
              </p>
            </section>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">
                3. Finalidade do uso
              </h2>
              <p>Utilizamos seus dados para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Processar a compra do produto digital.</li>
                <li>Entregar o acesso ao ebook via Eduzz.</li>
                <li>Prestar suporte ao comprador.</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
                <li>Melhorar a experiência do site, quando aplicável.</li>
              </ul>
            </section>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">
                4. Compartilhamento de dados
              </h2>
              <p>
                Seus dados podem ser compartilhados com a Eduzz, responsável
                pelo checkout, cobrança e entrega do produto digital, e com
                provedores de e-mail quando necessário para comunicação.
              </p>
              <p>
                Não vendemos nem compartilhamos seus dados com terceiros para
                fins de marketing sem consentimento explícito.
              </p>
            </section>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">
                5. Base legal
              </h2>
              <p>
                O tratamento é realizado com base na execução de contrato,
                cumprimento de obrigação legal, legítimo interesse e/ou
                consentimento, conforme a LGPD.
              </p>
            </section>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">
                6. Armazenamento e segurança
              </h2>
              <p>
                Adotamos medidas técnicas e organizacionais para proteger os
                dados pessoais. As informações ficam armazenadas pelo período
                necessário para cumprir as finalidades descritas nesta política
                ou prazos legais.
              </p>
            </section>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">
                7. Direitos do titular
              </h2>
              <p>
                Você pode solicitar confirmação, acesso, correção, exclusão e
                portabilidade dos seus dados, além de revogar consentimentos.
                Para isso, entre em contato pelo e-mail{" "}
                <strong>{CONFIG.SUPPORT_EMAIL}</strong>.
              </p>
            </section>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">8. Cookies</h2>
              <p>
                Este site pode utilizar cookies para análise de navegação e
                melhoria da experiência. Você pode desativar cookies nas
                configurações do navegador.
              </p>
            </section>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">
                9. Alterações desta política
              </h2>
              <p>
                Podemos atualizar esta política periodicamente. A versão mais
                recente ficará disponível nesta página.
              </p>
            </section>

            <section className="space-y-3 text-text-secondary">
              <h2 className="text-h3 font-bold text-text-primary">10. Contato</h2>
              <p>
                Em caso de dúvidas sobre esta política, entre em contato pelo
                e-mail <strong>{CONFIG.SUPPORT_EMAIL}</strong>.
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
                <strong>[PREENCHER: ENDEREÇO COMPLETO]</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
