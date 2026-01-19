"use client";

import { useState } from "react";
import { CONFIG } from "@/lib/config";
import SectionReveal from "./SectionReveal";

/**
 * Secao FAQ (accordion simples).
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "É só um PDF?",
      answer:
        "Sim. É um guia direto e prático, com exercícios aplicáveis e um plano de 30 dias. O formato PDF permite ler, revisar e aplicar no seu ritmo.",
    },
    {
      question: "Como recebo o acesso?",
      answer:
        "Após a confirmação do pagamento, você recebe o acesso por e-mail e pela área do comprador na Eduzz.",
    },
    {
      question: "Quando libera para Pix, cartão e boleto?",
      answer:
        "Pix: imediato. Cartão: após aprovação. Boleto: após compensação bancária.",
    },
    {
      question: "Existe garantia?",
      answer: `Sim. Você tem ${CONFIG.GUARANTEE_DAYS} dias para pedir reembolso pela Eduzz.`,
    },
    {
      question: "Preciso de algo além do PDF?",
      answer:
        "Não. O material foi pensado para ser aplicado sem ferramentas extras. Basta ler e executar os exercícios.",
    },
    {
      question: "Ficou com dúvida?",
      answer: `Escreva para ${CONFIG.SUPPORT_EMAIL}.`,
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
                key={faq.question}
                className="bg-bg-card border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-bg-alt transition-smooth"
                >
                  <h3 className="text-lg font-semibold text-text-primary">
                    {faq.question}
                  </h3>
                  <span className="text-xl text-text-muted">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-base text-text-secondary">
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
