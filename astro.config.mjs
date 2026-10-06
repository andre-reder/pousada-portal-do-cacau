import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// When deploying with a custom domain (portaldocacau.com.br), set BASE="/" and SITE="https://portaldocacau.com.br"
// When deploying to username.github.io/pousada-portal-do-cacau-9eb6c0, keep the default BASE.
const BASE = process.env.BASE || '/';
const SITE = process.env.SITE || 'https://portaldocacau.com.br';

export default defineConfig({
  site: SITE,
  integrations: [react()],
  output: 'static',
  trailingSlash: 'never',
  base: BASE,
  redirects: {
    // Redirecionamentos 301 de URLs legadas do WordPress para preservar SEO e links de anúncios
    '/pets': '/pet-friendly',
    '/beach-tennis-em-camburi-sao-sebastiao': '/beach-tennis',
    '/faq-pousada-portal-do-cacau-pet-friendly': '/faq',
    '/a-pousada': '/',
    '/bangalos-aluguel-mensal': '/acomodacoes',
    '/politica-de-reservas': '/privacidade',
    '/cartilha-de-viagem-para-tutor': '/pet-friendly',
    '/ofertas': '/#reservas',
    '/cardapio': '/comodidades',
    '/agenda': '/eventos',
    '/galeria': '/#galeria',

    // Slugs antigos do Blog redirecionando para os novos posts
    '/dia-dos-pais-com-pet-litoral-norte-camburi-sao-sebastiao': '/blog/dia-dos-pais-pet-litoral-norte',
    '/como-escolher-destino-pet-friendly-camburi-sao-sebastiao': '/blog/como-escolher-destino-pet-friendly',
    '/como-diminuir-ansiedade-cachorro-viagem': '/blog/como-diminuir-a-ansiedade-do-cachorro-durante-uma-viagem',
    '/guia-viajar-com-pet-camburi-sao-sebastiao': '/blog/guia-completo-viajar-pets-camburi',
    '/pousada-com-piscina-para-pets': '/pet-friendly',
    '/pousada-pet-em-meio-a-natureza': '/ecoturismo',
    '/pousada-para-caes-de-grande-porte-sao-sebastiao-camburi': '/pet-friendly',
    '/turismo-sustentavel-hospedagem-natureza-sao-sebastiao-camburi': '/sustentabilidade',
    '/o-que-fazer-com-pet-enquanto-vou-praia': '/pet-friendly',
    '/o-que-fazer-em-camburi-quando-chove': '/comodidades',
    '/como-preparar-pet-para-viagem': '/pet-friendly',
    '/onde-ficar-projeto-buscape-camburi': '/acomodacoes',
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
    },
  },
});
