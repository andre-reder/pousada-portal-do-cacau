# pousada-portal-do-cacau-9eb6c0

Esta pasta é uma landing page gerada pelo RAXA Forge. Os arquivos fonte são `Page.astro`, `*.tsx` e `metadata.json`.

## Como editar esta LP

**CRÍTICO: NUNCA rode `npm run build` (ou `npm run build -w @landingmaker/site-factory`) sem isolar esta LP primeiro.** Buildar todas as LPs juntas corrompe o CSS compartilhado — cada LP define as mesmas variáveis CSS (`--color-ink`, `--color-canvas`, `--color-text`) no `Page.astro`, e quando buildadas juntas a última `:root` vence, quebrando as cores de todas as LPs. Sempre isole a LP alvo antes de buildar, sem exceções.

O app Electron **não** serve desta pasta fonte — ele serve uma cópia buildada do preview store em `~/Library/Application Support/LandingMaker/previews/p/pousada-portal-do-cacau-9eb6c0/index.html`. Editar só o fonte **não** atualiza o que o usuário vê no app rodando.

Sempre que editar esta LP, antes de considerar pronto:

1. **Edite o fonte** aqui (`Page.astro`, `*.tsx`).
2. **Rebuild com isolamento de página.** Cada LP define variáveis CSS (`--color-ink`, `--color-canvas`, etc.) no `Page.astro`. Se buildar todas as LPs juntas, essas variáveis conflitam (a última `:root` vence) e corrompem as cores de todas as LPs. Sempre isole a build:
   - Mova as LPs irmãs de `apps/site-factory/src/generated/` para `.staging-isolated/`, mantendo só esta LP.
   - Rode `npm run build -w @landingmaker/site-factory` (só esta LP builda).
   - Restaure as LPs irmãs de `.staging-isolated/`.
   - Copie a página buildada de `apps/site-factory/dist/p/pousada-portal-do-cacau-9eb6c0/` para o preview store em `~/Library/Application Support/LandingMaker/previews/p/pousada-portal-do-cacau-9eb6c0/` (sobrescreva a página; faça merge dos assets `_astro` sem deletar os existentes).
3. **Verifique que a LP roda sem erros**: a partir de `apps/site-factory`, rode `npx tsc --noEmit`. Depois suba `npm run dev` (dev server do Astro) **com o mesmo isolamento do build** — o dev server também carrega os estilos de todas as LPs via `import.meta.glob`, então sem isolamento o mesmo conflito de variáveis CSS corrompe as cores. Mantenha as LPs irmãs em `.staging-isolated/` enquanto o dev server roda, abra a rota `http://localhost:4322/p/pousada-portal-do-cacau-9eb6c0/` no browser, confirme que renderiza sem erros e com as cores corretas, depois pare o dev server e restaure as LPs irmãs.
4. **Reporte qualquer erro encontrado**, mesmo que venha de outra LP. Não contorne silenciosamente.
5. **Reempacote** o app (`npm run package:mac`).

## Regras da LP

- Autocontida: nunca importe de pasta irmã (`../outra-lp/...`). Se precisar de um helper de outra LP, copie para esta pasta.
- Cada LP deve ser visualmente distinta das outras (hero, paleta, tipografia, layout, animações).
- Não invente fatos de negócio, depoimentos, credenciais, preços, horários ou claims médicas.
- Siga `FRONTEND_DESIGN.md` na raiz do repo para o design.
- Veja também o `AGENTS.md` na raiz do repo para regras globais do produto.
