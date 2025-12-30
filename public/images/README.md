# Placeholders de Imagens

Esta pasta deve conter as imagens utilizadas no site.

## 📸 Imagens Necessárias

### 1. Screenshots do PDF (3 imagens)
**Onde:** Seção "O que tem dentro" (`components/marketing/Contents.tsx`)

**Nomes sugeridos:**
- `page-preview-1.jpg`
- `page-preview-2.jpg`
- `page-preview-3.jpg`

**Especificações:**
- Formato: JPG ou PNG
- Tamanho: 900x1200px (proporção 3:4)
- Peso: < 200kb cada (otimizar com TinyPNG)
- Conteúdo: Screenshots reais de páginas do PDF (levemente desfocadas para privacidade)

### 2. Foto do Autor (opcional)
**Onde:** Componente `AuthorSection.tsx` (se você decidir adicionar)

**Nome sugerido:**
- `author-placeholder.jpg`

**Especificações:**
- Formato: JPG
- Tamanho: 400x400px (quadrado)
- Peso: < 100kb
- Estilo: Foto profissional, fundo neutro

### 3. Mockup do Produto (opcional — já há mockup CSS)
**Onde:** `Hero.tsx` ou `ProductMockup.tsx`

**Nome sugerido:**
- `product-mockup.png`

**Especificações:**
- Formato: PNG (transparência)
- Tamanho: 1000x1400px
- Peso: < 300kb
- Conteúdo: Mockup 3D do ebook/tablet com PDF

## 🎨 Estilo Visual Recomendado

Baseado no Design System (Editorial Claro):

- **Tom:** Minimalista, editorial, premium
- **Cores:** Neutras (branco, bege, grafite)
- **Evitar:** Clichês de coaching, fotos genéricas de stock
- **Preferir:** Fotos reais, luz natural, composição limpa

## 🛠️ Como Substituir os Placeholders

1. Adicione suas imagens nesta pasta (`/public/images/`)
2. Atualize os imports nos componentes:

```typescript
// Exemplo em Contents.tsx
<Image
  src="/images/page-preview-1.jpg"  // ← Trocar nome aqui
  alt="Preview do conteúdo"
  width={900}
  height={1200}
/>
```

3. Teste no navegador e otimize se necessário

## ⚡ Otimização

**Ferramentas recomendadas:**
- [TinyPNG](https://tinypng.com/) — compressão sem perda de qualidade
- [Squoosh](https://squoosh.app/) — otimizador da Google
- [ImageOptim](https://imageoptim.com/) (Mac)

**Next.js automaticamente otimiza imagens via `next/image`, mas forneça arquivos já comprimidos para melhor performance.**

---

**Dúvidas?** Contato: natabdelf@gmail.com
