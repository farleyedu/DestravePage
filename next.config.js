/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações de imagens (se usar domínios externos, adicionar aqui)
  images: {
    remotePatterns: [
      // Exemplo: se usar imagens da Eduzz ou CDN
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      // },
    ],
  },

  // Configurações de build
  reactStrictMode: true,

  // Experimental (opcional) - removido optimizeCss por requerer 'critters'
  // experimental: {
  //   optimizeCss: true,
  // },
};

module.exports = nextConfig;
