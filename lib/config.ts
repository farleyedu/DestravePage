/**
 * Configuracoes centralizadas do produto e checkout.
 */

export const CONFIG = {
  // Produto
  PRODUCT_NAME: "DESTRAVE 2026",
  PRODUCT_SUBTITLE:
    "Clareza, foco e ação para sair da estagnação e assumir o controle da própria vida.",
  PRICE: 37.0,
  PRICE_FORMATTED: "R$ 37,00",

  // Detalhes do produto
  PAGES: 16,
  READING_TIME: "40–50 min",
  EXERCISES_COUNT: 5,

  // Garantia
  GUARANTEE_DAYS: 7,

  // Checkout (Eduzz)
  CHECKOUT_URL: "https://sun.eduzz.com/E05XVBX4WX",

  // Contato
  SUPPORT_EMAIL: "natabdelf@gmail.com",

  // Autor
  AUTHOR: {
    name: "Natã Delfino",
    role: "Autor do guia",
    bio: "Criador do DESTRAVE 2026. Linguagem direta, foco em clareza, decisão e ação.",
  },

  // SEO
  SEO: {
    title: "DESTRAVE 2026 — Clareza, foco e ação",
    description:
      "Ebook direto e prático para quem sabe que pode mais, mas trava na execução. 16 páginas, 5 capítulos, 5 exercícios. R$ 37,00 com garantia de 7 dias.",
    keywords:
      "clareza, decisao, acao, foco, ebook, produtividade, desenvolvimento pessoal, guia pratico",
  },

  // Capitulos
  CHAPTERS: [
    "A Mente é o Primeiro Campo de Batalha",
    "Clareza Não é Motivação",
    "Decisão é um Ato de Identidade",
    "A Sombra que Está Te Travando",
    "Direção Vale Mais que Intensidade",
  ],

  // Exercicios
  EXERCISES: [
    "Diagnóstico de confusão mental (checklist)",
    "Mapa de distrações e sabotagens",
    "Exercício de decisão consciente",
    "Rotina mínima de ação diária",
    "Plano prático de 30 dias",
  ],

  // Pilares
  PILLARS: [
    {
      title: "CLAREZA",
      description:
        "Identificar o que trava e cortar ruído para enxergar o que importa agora.",
    },
    {
      title: "DECISÃO",
      description:
        "Assumir escolhas de forma consciente, sem negociar com a própria identidade.",
    },
    {
      title: "AÇÃO",
      description:
        "Transformar direção em rotina mínima, com consistência sem picos vazios.",
    },
  ],
} as const;
