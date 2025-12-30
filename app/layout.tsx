import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CONFIG } from "@/lib/config";

// Configuração da fonte Inter (variável weight)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: CONFIG.SEO.title,
  description: CONFIG.SEO.description,
  keywords: CONFIG.SEO.keywords,
  authors: [{ name: CONFIG.AUTHOR.name }],

  // Open Graph (compartilhamento social)
  openGraph: {
    type: "website",
    title: CONFIG.SEO.title,
    description: CONFIG.SEO.description,
    siteName: CONFIG.PRODUCT_NAME,
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: CONFIG.SEO.title,
    description: CONFIG.SEO.description,
  },

  // Outros
  robots: "index, follow",
};

// Viewport metadata (separado conforme Next.js 15+)
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Preconnect para otimização */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
