import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade | DESTRAVE 2026",
  description: "Política de Privacidade e Proteção de Dados",
};

export default function PoliticaPrivacidade() {
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
              Política de Privacidade
            </h1>

            <p className="text-text-secondary mb-8">
              <strong>Última atualização:</strong> 30 de dezembro de 2024
            </p>

            <div className="space-y-8 text-text-primary">
              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  1. Informações Gerais
                </h2>
                <p className="text-body text-text-secondary mb-4">
                  Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos os dados pessoais dos usuários do site <strong>DESTRAVE 2026</strong>, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                </p>
                <p className="text-body text-text-secondary">
                  <strong>Controlador de Dados:</strong> [PREENCHER: Nome completo ou razão social, CPF ou CNPJ, endereço completo]
                  <br />
                  <strong>E-mail de contato:</strong> natabdelf@gmail.com
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  2. Dados Coletados
                </h2>
                <p className="text-body text-text-secondary mb-4">
                  Coletamos os seguintes tipos de dados pessoais:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body text-text-secondary">
                  <li><strong>Dados de identificação:</strong> nome, e-mail, CPF (quando fornecidos no checkout)</li>
                  <li><strong>Dados de pagamento:</strong> processados e armazenados exclusivamente pela Eduzz (plataforma de pagamento terceira)</li>
                  <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência (coletados via cookies e ferramentas de analytics, se aplicável)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  3. Finalidades do Tratamento
                </h2>
                <p className="text-body text-text-secondary mb-4">
                  Utilizamos seus dados pessoais para:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body text-text-secondary">
                  <li>Processar a compra do produto digital (ebook)</li>
                  <li>Enviar o link de acesso ao produto adquirido</li>
                  <li>Prestar suporte ao cliente</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                  <li>Enviar comunicações relacionadas ao produto (atualizações, avisos importantes) — apenas se você consentir</li>
                  <li>Melhorar a experiência do usuário no site (analytics, otimização de conversão)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  4. Base Legal
                </h2>
                <p className="text-body text-text-secondary mb-4">
                  O tratamento de dados pessoais é realizado com base nas seguintes hipóteses legais (Art. 7º da LGPD):
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body text-text-secondary">
                  <li><strong>Execução de contrato:</strong> processamento da compra e entrega do produto</li>
                  <li><strong>Consentimento:</strong> envio de comunicações de marketing (opt-in)</li>
                  <li><strong>Legítimo interesse:</strong> analytics, prevenção de fraudes, melhoria do serviço</li>
                  <li><strong>Cumprimento de obrigação legal:</strong> emissão de nota fiscal, registros contábeis</li>
                </ul>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  5. Compartilhamento de Dados
                </h2>
                <p className="text-body text-text-secondary mb-4">
                  Seus dados pessoais podem ser compartilhados com:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body text-text-secondary">
                  <li><strong>Eduzz:</strong> plataforma de pagamento e entrega do produto (processadora de pagamentos)</li>
                  <li><strong>Provedores de e-mail:</strong> para envio de acesso ao produto e comunicações (se aplicável)</li>
                  <li><strong>Autoridades competentes:</strong> quando exigido por lei ou ordem judicial</li>
                </ul>
                <p className="text-body text-text-secondary mt-4">
                  <strong>Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins de marketing sem o seu consentimento explícito.</strong>
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  6. Armazenamento e Segurança
                </h2>
                <p className="text-body text-text-secondary mb-4">
                  Seus dados são armazenados em servidores seguros (próprios ou de terceiros contratados, como Eduzz e provedores de hospedagem). Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda, destruição ou alteração.
                </p>
                <p className="text-body text-text-secondary">
                  Os dados serão retidos pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei (ex: obrigações fiscais e contábeis por até 5 anos).
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  7. Cookies
                </h2>
                <p className="text-body text-text-secondary mb-4">
                  Este site pode utilizar cookies para:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body text-text-secondary">
                  <li>Melhorar a navegação e experiência do usuário</li>
                  <li>Realizar análises de tráfego e comportamento (via Google Analytics ou similar)</li>
                  <li>Personalizar anúncios (se aplicável)</li>
                </ul>
                <p className="text-body text-text-secondary mt-4">
                  Você pode desativar cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do site.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  8. Direitos do Titular
                </h2>
                <p className="text-body text-text-secondary mb-4">
                  De acordo com a LGPD, você tem direito a:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-body text-text-secondary">
                  <li>Confirmar a existência de tratamento de dados</li>
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
                  <li>Solicitar a portabilidade dos dados</li>
                  <li>Revogar o consentimento (quando aplicável)</li>
                  <li>Obter informações sobre com quem compartilhamos seus dados</li>
                </ul>
                <p className="text-body text-text-secondary mt-4">
                  Para exercer seus direitos, entre em contato pelo e-mail: <strong>natabdelf@gmail.com</strong>
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  9. Alterações nesta Política
                </h2>
                <p className="text-body text-text-secondary">
                  Esta Política de Privacidade pode ser atualizada periodicamente. A versão mais recente sempre estará disponível nesta página, com a data da última atualização indicada no topo.
                </p>
              </section>

              <section>
                <h2 className="text-h3 font-bold text-text-primary mb-4">
                  10. Contato
                </h2>
                <p className="text-body text-text-secondary">
                  Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato:
                  <br />
                  <strong>E-mail:</strong> natabdelf@gmail.com
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
