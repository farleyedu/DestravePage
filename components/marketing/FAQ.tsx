"use client";

import { useState } from "react";
import { CONFIG } from "@/lib/config";
import SectionReveal from "./SectionReveal";

/**
 * Seção FAQ (accordion)
 * Responde objeções e perguntas logísticas
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "É só um PDF?",
      answer: `Sim, mas não é "só" nada. É um guia objetivo, sem enrolação, com exercícios práticos e um plano de 30 dias. O formato PDF permite que você leia, releia, imprima e aplique no seu ritmo — sem depender de acesso à internet ou plataformas complexas.`,
    },
    {
      question: "Como recebo o acesso?",
      answer: `Imediatamente após a aprovação do pagamento, você recebe um e-mail com o link de download + acesso à área do comprador na Eduzz. Tudo automático e seguro.`,
    },
    {
      question: "Quando libera (Pix/cartão/boleto)?",
      answer: `• **Pix:** imediato após o pagamento\n• **Cartão:** imediato após aprovação (geralmente instantânea)\n• **Boleto:** após compensação bancária (1-2 dias úteis)`,
    },
    {
      question: "Serve para mim?",
      answer: `Se você sente que está travado por falta de clareza, toma decisões ruins ou começa e não termina, sim. Se busca atalho ou promessa milagrosa, não.`,
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: `Se em ${CONFIG.GUARANTEE_DAYS} dias você não achar que valeu, basta pedir reembolso direto na Eduzz. Sem perguntas, sem burocracia.`,
    },
    {
      question: "Se eu tiver dúvidas, onde falo?",
      answer: `E-mail de suporte: ${CONFIG.SUPPORT_EMAIL}`,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-section-mobile md:py-section-desktop bg-bg-base">
      <div className="container-custom">
        <SectionReveal>
          <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-text-primary text-center mb-12">
            Perguntas frequentes
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-smooth"
              >
                {/* Header (clicável) */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-bg-alt transition-smooth"
                >
                  <h3 className="text-lg font-semibold text-text-primary">
                    {faq.question}
                  </h3>
                  <span
                    className={`text-2xl text-text-secondary transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                {/* Conteúdo (expandível) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-base text-text-secondary whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
