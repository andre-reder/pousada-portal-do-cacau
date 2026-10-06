# pousada-portal-do-cacau-9eb6c0 — Landing Page

## Stack

- Astro + React + TypeScript
- Tailwind CSS v4
- Framer Motion (animações)
- GSAP (scroll animations)
- Lenis (smooth scroll)

## Comandos

- `yarn dev` ou `npm run dev`: inicia o dev server em `http://localhost:4321`
- `yarn build` ou `npm run build`: build de produção (saída em `dist/`)
- `yarn preview` ou `npm run preview`: preview do build de produção

## Estrutura do projeto

```
skills/               # Biblioteca completa de 28 skills do ecossistema
.agents/skills/       # Integração nativa para Google Antigravity
.devin/skills/        # Integração nativa para Devin Desktop
.cursor/rules/        # Regras ativas para o Cursor IDE
.github/              # Instruções para GitHub Copilot
src/
  pages/index.astro     # Página principal — importa Layout e Page
  layouts/Layout.astro  # Shell HTML com Tailwind + CSS global
  components/           # Todos os componentes da landing page (*.tsx, Page.astro, assets/)
  styles/               # tailwind.css + global.css
```

## Skills & Especializações Disponíveis (OBRIGATÓRIO CONSULTAR)

Este projeto inclui a biblioteca completa de skills do RAXA Forge disponível em `skills/` e em `.agents/skills/`. O assistente de IA deve consultar a skill correspondente antes de sugerir ou escrever código:

### UI & UX Design Profissional
- `skills/ui-ux-pro-max/SKILL.md`: Guia definitivo para UI/UX profissional, regras de hierarquia visual, tipografia moderna (Google Fonts), paletas de cores harmônicas, micro-interações, layout responsivo e estética premium.
- `skills/frontend-design/SKILL.md`: Diretrizes visuais, tokens de design e sistema de componentes.
- `FRONTEND_DESIGN.md`: Documento mestre de design do projeto.

### Animações Avançadas com GSAP (GreenSock)
- `skills/gsap-core/SKILL.md`: Fundamentos, sintaxe e easings.
- `skills/gsap-scrolltrigger/SKILL.md`: Animações engatilhadas por rolagem (ScrollTrigger, pinning, scrub).
- `skills/gsap-timeline/SKILL.md`: Orquestração de timelines complexas e sequenciadas.
- `skills/gsap-react/SKILL.md`: Integração segura do GSAP com React (`useGSAP`, refs, context e cleanup).
- `skills/gsap-performance/SKILL.md`: Boas práticas para 60fps, aceleração por GPU, `will-change` e remoção de listeners.
- `skills/gsap-plugins/SKILL.md`, `skills/gsap-utils/SKILL.md`, `skills/gsap-frameworks/SKILL.md`.

### Gráficos 3D & Efeitos com Three.js
- `skills/threejs-dev-setup/SKILL.md`: Setup e inicialização de canvas WebGL.
- `skills/threejs-animation/SKILL.md`: Loops de animação contínua e tickers 3D.
- `skills/threejs-materials/SKILL.md`: Materiais PBR realistas, shaders e transparências.
- `skills/threejs-lights/SKILL.md`: Iluminação dinâmica e sombras.
- `skills/threejs-loaders/SKILL.md`: Carregamento de modelos GLTF/GLB e texturas.
- `skills/threejs-camera/SKILL.md`, `skills/threejs-controls/SKILL.md`, `skills/threejs-postprocessing/SKILL.md`, etc.

## Regras de design

- Siga `FRONTEND_DESIGN.md` e `skills/ui-ux-pro-max/SKILL.md` para direção visual, animação, acessibilidade e responsividade.
- Cada componente é autocontido — não importe de fora de `src/components/`.
- Assets (imagens, ícones) ficam em `src/components/assets/` e são importados com caminhos relativos (`./assets/...`).
- As variáveis CSS (`--color-canvas`, `--color-text`, `--color-accent`, etc.) são definidas no `<style is:global>` do `Page.astro`.
- Não invente fatos de negócio, depoimentos, credenciais, preços, horários ou claims médicas.
- Mantenha a página `noindex` até que o cliente aprove a publicação.

## Deploy

O deploy pode ser feito via GitHub Pages, Cloudflare Pages, Netlify, Vercel, ou qualquer hosting estático.
O build gera arquivos estáticos em `dist/`.
