# DESTRAVE 2026 — Landing Page

Site de vendas premium para o infoproduto DESTRAVE 2026.

## 🚀 Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **CSS + Intersection Observer** (animações sem libs pesadas)

## 📁 Estrutura do Projeto

```
├── app/
│   ├── layout.tsx              # Layout root + fonts + meta tags
│   ├── page.tsx                # Sales page principal
│   ├── globals.css             # Estilos globais + CSS variables
│   ├── politica-de-privacidade/
│   │   └── page.tsx            # Política de Privacidade (LGPD)
│   └── termos-de-uso/
│       └── page.tsx            # Termos de Uso
├── components/marketing/
│   ├── Hero.tsx                # Seção Hero (acima da dobra)
│   ├── Identification.tsx      # Seção de dor/identificação
│   ├── Pillars.tsx             # Os 3 pilares do método
│   ├── Contents.tsx            # O que tem dentro (capítulos + exercícios)
│   ├── WhoIsFor.tsx            # Para quem é / não é
│   ├── Offer.tsx               # Oferta (preço, garantia, CTA)
│   ├── FAQ.tsx                 # Perguntas frequentes (accordion)
│   ├── CtaFinal.tsx            # CTA final de fechamento
│   ├── Footer.tsx              # Footer com links legais
│   ├── BottomBar.tsx           # Barra inferior fixa (CTA + âncoras)
│   ├── ProductMockup.tsx       # Mockup do produto (páginas 3D)
│   └── SectionReveal.tsx       # Wrapper de animação scroll reveal
├── lib/
│   ├── config.ts               # Configurações centralizadas (preço, produto, etc.)
│   └── tracking.ts             # Funções de tracking (stubs para GA4/Pixel)
├── public/images/              # Imagens (placeholders)
└── README.md                   # Este arquivo
```

## 🛠️ Setup

### 1. Instalar dependências

```bash
npm install
```

### 2. Executar em modo de desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:3000`

### 3. Build para produção

```bash
npm run build
npm start
```

## ⚙️ Configuração

### Editar informações do produto

Todas as informações estão centralizadas em `lib/config.ts`:

```typescript
export const CONFIG = {
  PRODUCT_NAME: "DESTRAVE 2026",
  PRICE: 37.00,
  CHECKOUT_URL: "https://sun.eduzz.com/E05XVBX4WX", // ✅ URL real do checkout
  SUPPORT_EMAIL: "natabdelf@gmail.com",
  // ... outros campos
};
```

### Alterar cores (Design System)

Edite as CSS variables em `app/globals.css`:

```css
:root {
  --bg-base: #fdfcfa;
  --text-primary: #1a1a1a;
  --cta-primary: #000000;
  /* ... */
}
```

Ou edite as cores no `tailwind.config.ts`.

### Substituir placeholders de imagens

1. Adicione suas imagens em `/public/images/`
2. Substitua os placeholders nos componentes:
   - `Hero.tsx` → mockup do produto
   - `Contents.tsx` → screenshots do PDF (3 imagens)
   - (Opcional) `AuthorSection.tsx` → foto do autor

**Formatos recomendados:**
- PNG ou JPG otimizados
- Resolução: 1200x1600px (páginas do PDF)
- Peso: < 200kb cada (use TinyPNG ou similar)

## 🎨 Customizações Comuns

### 1. Adicionar seção de Autor

Descomente o componente `AuthorSection.tsx` (se criado) e importe em `app/page.tsx`.

### 2. Ativar tracking (GA4 / Meta Pixel)

Edite `lib/tracking.ts` e descomente as linhas de tracking:

```typescript
export function trackCtaClick(label: string) {
  // Descomentar quando configurar GA4:
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', 'cta_click', { cta_label: label });
  // }
}
```

Adicione os scripts de tracking em `app/layout.tsx` (dentro do `<head>`).

### 3. Ajustar threshold do Bottom Bar

Em `components/marketing/BottomBar.tsx`, altere a linha:

```typescript
setIsVisible(scrollPercentage > 20); // Trocar 20 por outro valor (ex: 30, 40)
```

## 📝 Páginas Legais

### ⚠️ IMPORTANTE: Preencher antes de publicar

As páginas `/politica-de-privacidade` e `/termos-de-uso` contêm campos marcados como:

```
[PREENCHER: Nome completo ou razão social, CPF ou CNPJ, endereço completo]
```

**Campos obrigatórios:**
- Controlador de Dados (nome/razão social)
- CPF ou CNPJ
- Endereço completo
- Foro competente (cidade/estado)

Edite os arquivos:
- `app/politica-de-privacidade/page.tsx`
- `app/termos-de-uso/page.tsx`

## 🚦 Checklist Pré-Publicação

- [ ] Preencher campos obrigatórios em Política de Privacidade
- [ ] Preencher campos obrigatórios em Termos de Uso
- [ ] Substituir placeholders de imagens por assets reais
- [ ] Testar checkout URL (redireciona corretamente para Eduzz)
- [ ] Configurar tracking (GA4, Meta Pixel) se desejado
- [ ] Testar responsividade (mobile, tablet, desktop)
- [ ] Testar performance (Lighthouse: LCP, CLS)
- [ ] Revisar copy (headline, FAQ, ofertas)
- [ ] Testar todos os links (footer, âncoras, botões)

## 📊 Performance

Este projeto foi otimizado para:

- ✅ **LCP < 2.5s** (preload de fonts, lazy loading de imagens)
- ✅ **CLS < 0.1** (CSS estável, sem layout shifts)
- ✅ **FID < 100ms** (JS mínimo, sem libs pesadas)
- ✅ **Mobile-first** (design responsivo completo)

### Recomendações adicionais:

- Use Vercel, Netlify ou similar (otimização automática)
- Ative compressão Gzip/Brotli
- Configure cache de assets estáticos
- Use CDN para imagens (Cloudinary, ImageKit, etc.)

## 🐛 Troubleshooting

### Erro: "Module not found: Can't resolve '@/...'"

Certifique-se de que o `tsconfig.json` contém:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Bottom Bar não aparece

Verifique:
1. Scroll está funcionando (página tem altura suficiente)
2. Threshold está correto (padrão: 20%)
3. `BottomBar` está importado em `app/page.tsx`

### Animações não funcionam

Verifique:
1. Classe `.reveal` está aplicada (via `SectionReveal`)
2. Intersection Observer está ativo (console.log no useEffect)
3. `prefers-reduced-motion` não está ativo (configurações do sistema)

## 📞 Suporte

**E-mail:** natabdelf@gmail.com

## 📜 Licença

Todos os direitos reservados © 2025 DESTRAVE 2026
