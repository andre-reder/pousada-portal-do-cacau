# Pousada Portal do Cacau

Projeto standalone da landing page para **Pousada Portal do Cacau**.

Este projeto foi inicializado a partir do RAXA Forge e é totalmente independente —
tem seu próprio `package.json`, `node_modules` e repositório git.

## Desenvolvimento

```bash
yarn install
yarn dev
```

O dev server abre em `http://localhost:4321`.

## Build

```bash
yarn build
```

A saída fica em `dist/`.

## Estrutura

```
src/
  pages/index.astro    # Página principal (importa Layout + Page)
  layouts/Layout.astro # Shell HTML com Tailwind + CSS global
  components/          # Todos os componentes da landing page (*.tsx, Page.astro)
  styles/              # tailwind.css + global.css
```

## Slug

`pousada-portal-do-cacau-9eb6c0`
