import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// When deploying with a custom domain (portaldocacau.com.br), set BASE="/" and SITE="https://portaldocacau.com.br"
// When deploying to username.github.io/pousada-portal-do-cacau-9eb6c0, keep the default BASE.
const BASE = process.env.BASE || '/pousada-portal-do-cacau-9eb6c0';
const SITE = process.env.SITE || 'https://portaldocacau.com.br';

export default defineConfig({
  site: SITE,
  integrations: [react()],
  output: 'static',
  trailingSlash: 'never',
  base: BASE,
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
    },
  },
});
