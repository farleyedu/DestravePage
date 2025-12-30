/**
 * Funções de tracking (preparadas para GA4/Meta Pixel)
 * Por enquanto apenas logam no console.
 * Substitua pelos scripts reais quando configurar analytics.
 */

export function trackCtaClick(label: string) {
  // Stub: registra clique no CTA
  console.log(`[TRACKING] CTA clicked: ${label}`);

  // Exemplo para GA4 (quando configurar):
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('event', 'cta_click', {
  //     cta_label: label,
  //   });
  // }

  // Exemplo para Meta Pixel (quando configurar):
  // if (typeof window !== 'undefined' && window.fbq) {
  //   window.fbq('track', 'Lead', { cta_label: label });
  // }
}

export function trackPageView(page: string) {
  console.log(`[TRACKING] Page view: ${page}`);

  // Exemplo para GA4:
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('config', 'GA_MEASUREMENT_ID', {
  //     page_path: page,
  //   });
  // }
}

export function handleCheckoutClick(label: string = "Checkout CTA") {
  trackCtaClick(label);

  // Redireciona para checkout Eduzz
  if (typeof window !== 'undefined') {
    window.location.href = CONFIG.CHECKOUT_URL;
  }
}

// Import config (ajustar import se necessário)
import { CONFIG } from "./config";
