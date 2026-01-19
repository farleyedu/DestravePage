# DESTRAVE 2026 — Landing Page

Site de venda (1 pagina) para o ebook DESTRAVE 2026, com paginas legais.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Scroll reveal via Intersection Observer (sem Framer Motion)

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse: `http://localhost:3000`

## Build

```bash
npm run build
npm start
```

## Estrutura principal

```
app/
  page.tsx
  globals.css
  politica-de-privacidade/page.tsx
  termos-de-uso/page.tsx
components/marketing/
  Hero.tsx
  Identification.tsx
  Pillars.tsx
  AuthorSection.tsx
  Contents.tsx
  WhoIsFor.tsx
  Offer.tsx
  FAQ.tsx
  CtaFinal.tsx
  Footer.tsx
  BottomBar.tsx
  ProductMockup.tsx
  SectionReveal.tsx
lib/
  config.ts
  tracking.ts
public/images/
```

## Configuracoes do produto

Edite `lib/config.ts` para ajustar nome, preco, checkout e copy.

## Imagens

Placeholders em `/public/images/`:

- `author-placeholder.svg`
- `preview-1.svg`
- `preview-2.svg`
- `preview-3.svg`

Substitua por imagens reais e ajuste os caminhos em:

- `components/marketing/AuthorSection.tsx`
- `components/marketing/Contents.tsx`

## Paginas legais (obrigatorio)

Preencha os campos:

- `[PREENCHER: NOME]`
- `[PREENCHER: CPF]`
- `[PREENCHER: ENDERECO COMPLETO]`
- `[PREENCHER: CIDADE/UF]`

Arquivos:

- `app/politica-de-privacidade/page.tsx`
- `app/termos-de-uso/page.tsx`

## Deploy

O projeto esta pronto para deploy em Vercel. Basta conectar o repo e fazer push.
