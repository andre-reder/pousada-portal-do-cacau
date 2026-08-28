# Guia: Nova Landing Page com Decap CMS + GitHub Pages

Checklist completo para criar uma nova LP para um cliente, com blog
gerenciável via CMS, deploy gratuito no GitHub Pages e autenticação
GitHub via Cloudflare Worker.

---

## Pré-requisitos (uma vez só)

- [ ] Conta no GitHub
- [ ] Conta no Cloudflare (grátis)
- [ ] Node 22+ e Yarn instalados localmente
- [ ] Cloudflare Worker OAuth proxy já deployado
  (ver `docs/DECAP_OAUTH.md` se ainda não tem)

---

## Passo 1 — Criar o projeto

```bash
# Copiar este projeto como base (ou usar como template)
cp -r pousada-portal-do-cacau-9eb6c0 novo-cliente
cd novo-cliente

# Limpar conteúdo específico do cliente anterior
rm -rf src/content/blog/*.md
rm -rf public/assets/blog/*
rm -rf assets/blog/*

# Ajustar package.json
# - name: "novo-cliente"
# - atualizar scripts se necessário

# Instalar dependências (baixa o Decap CMS bundle automaticamente)
yarn install
```

## Passo 2 — Ajustar astro.config.mjs

```js
const BASE = process.env.BASE || '/novo-cliente';  // nome do repo no GitHub
const SITE = process.env.SITE || 'https://usuario.github.io';
```

Se o cliente tiver domínio próprio desde o início:
```js
const BASE = process.env.BASE || '/';
const SITE = process.env.SITE || 'https://dominiodocliente.com.br';
```

## Passo 3 — Criar o repo no GitHub

```bash
# Inicializar git se ainda não tiver
git init
git add -A
git commit -m "Projeto inicial"

# Criar repo público (necessário para GitHub Pages grátis)
gh repo create novo-cliente --public --source=. --remote=origin --push
```

> **Repo deve ser público** — GitHub Pages gratuito só funciona
> com repos públicos. Se precisar privado, use Netlify ou Vercel.

## Passo 4 — Ativar GitHub Pages

```bash
# Ativar Pages com build via GitHub Actions
gh api repos/SEU_USUARIO/novo-cliente/pages -X POST -f build_type=workflow
```

O workflow `.github/workflows/deploy.yml` já está no repo.
Ele roda automaticamente a cada push na `main`.

**Importante:** editar o `BASE` no workflow para bater com o nome do repo:

```yaml
env:
  BASE: /novo-cliente
  SITE: https://SEU_USUARIO.github.io
```

## Passo 5 — Criar OAuth App no GitHub

1. Acesse https://github.com/settings/developers → "New OAuth App"
2. Preencha:
   - **Application name:** `Nome do Cliente CMS`
   - **Homepage URL:** `https://SEU_USUARIO.github.io/novo-cliente/`
     (ou `https://dominiodocliente.com.br/` se já tiver domínio)
   - **Authorization callback URL:** `https://decap-cms-github-oauth-api.SEU_USUARIO.workers.dev/callback`
     (mesma URL do seu Cloudflare Worker — não muda por cliente)
3. Anote o **Client ID**
4. Gere um **Client Secret** — guarde com segurança

## Passo 6 — Adicionar cliente no Cloudflare Worker

No painel do Cloudflare Workers, adicione as variáveis de ambiente
para o novo cliente. Se o Worker suporta múltiplos clientes (ver
`docs/OAUTH_MULTI_CLIENTE.md`), adicione uma entrada nova.

Se o Worker é um proxy simples (um cliente por Worker), crie um
novo Worker ou atualize as variáveis:

```
CLIENT_ID = Ov23li... (do passo 5)
CLIENT_SECRET = ...   (do passo 5)
OAUTH_CALLBACK_URL = https://SEU_USUARIO.github.io/novo-cliente/admin/
```

> **Client Secret nunca vai para o repo** — fica só nas env vars
> do Cloudflare Worker.

## Passo 7 — Atualizar config.yml do CMS

```yaml
# public/admin/config.yml

local_backend: true  # desenvolvimento local (yarn admin)

backend:
  name: github
  repo: SEU_USUARIO/novo-cliente
  branch: main
  base_url: https://decap-cms-github-oauth-api.SEU_USUARIO.workers.dev
  auth_type: oauth
  app_id: CLIENT_ID_DO_PASSO_5

media_folder: "public/assets/blog"
public_folder: "/assets/blog"

collections:
  - name: "blog"
    label: "Posts do blog"
    folder: "src/content/blog"
    create: true
    delete: true
    slug: "{{slug}}"
    extension: "md"
    format: "frontmatter"
    fields:
      - { name: "title", label: "Título", widget: "string" }
      - { name: "date", label: "Data", widget: "datetime" }
      - { name: "category", label: "Categoria", widget: "select", options: ["..."] }
      - { name: "excerpt", label: "Resumo", widget: "text", required: true }
      - { name: "cover", label: "Capa", widget: "image", required: false }
      - { name: "author", label: "Autor", widget: "string", default: "Nome do Cliente" }
      - { name: "tags", label: "Tags", widget: "list", required: false }
      - { name: "body", label: "Conteúdo", widget: "markdown", modes: [rich_text, raw] }
```

## Passo 8 — Conceder acesso ao dono do cliente

1. Vá em `https://github.com/SEU_USUARIO/novo-cliente/settings/access`
2. "Add people" → digite o usuário GitHub do dono
3. Permissão: **Write** (para ele poder commitar posts via CMS)

> O dono precisa de uma conta GitHub (gratuita). Sem isso ele não
> consegue usar o CMS em produção.

## Passo 9 — Push e deploy

```bash
git add -A
git commit -m "Configurar CMS e deploy para novo cliente"
git push
```

O GitHub Action roda automaticamente. Em ~1 minuto o site está no ar em:
```
https://SEU_USUARIO.github.io/novo-cliente/
```

## Passo 10 — Testar o CMS em produção

1. Acesse `https://SEU_USUARIO.github.io/novo-cliente/admin/`
2. Deve aparecer "Login with GitHub"
3. Clique → autorize o app → volta para o CMS
4. A lista de posts deve aparecer (vazia inicialmente)
5. Clique "New Post" → preencha → "Publish"
6. O commit dispara rebuild automático → post no ar em ~1 min

---

## Domínio próprio (quando o cliente quiser)

### 1. Configurar DNS no provedor do cliente

Registros A apontando para o GitHub Pages:
```
@   A   185.199.108.153
@   A   185.199.109.153
@   A   185.199.110.153
@   A   185.199.111.153
www CNAME SEU_USUARIO.github.io
```

### 2. Adicionar custom domain no GitHub

```bash
gh api repos/SEU_USUARIO/novo-cliente/pages -X PUT -f cname=dominiodocliente.com.br
```

Ou via interface: Settings → Pages → Custom domain.

Marque "Enforce HTTPS" depois que o DNS propagar.

### 3. Atualizar astro.config.mjs

```js
const BASE = process.env.BASE || '/';
const SITE = process.env.SITE || 'https://dominiodocliente.com.br';
```

### 4. Atualizar workflow

```yaml
env:
  BASE: /
  SITE: https://dominiodocliente.com.br
```

### 5. Atualizar OAuth App no GitHub

- Homepage URL: `https://dominiodocliente.com.br/`
- Authorization callback URL: continua sendo a do Cloudflare Worker
  (não muda — o Worker é compartilhado)

### 6. Push

```bash
git add -A
git commit -m "Configurar domínio próprio"
git push
```

---

## Desenvolvimento local

```bash
# Sobe Astro + decap-server juntos
yarn admin

# Acessa
# http://localhost:4321/novo-cliente/admin
```

O `local_backend: true` no config.yml faz o CMS usar o decap-server
local (porta 8081) em vez do GitHub OAuth. Não precisa de auth.

---

## Checklist final

| Item | Status |
|------|--------|
| Repo criado e público | ☐ |
| GitHub Pages ativado | ☐ |
| Workflow com BASE correto | ☐ |
| OAuth App criado | ☐ |
| Cloudflare Worker configurado | ☐ |
| config.yml com app_id e base_url | ☐ |
| Dono com acesso Write no repo | ☐ |
| CMS testado em produção | ☐ |
| Domínio próprio (opcional) | ☐ |

---

## Custo por cliente

| Recurso | Custo |
|---------|-------|
| GitHub repo (público) | Grátis |
| GitHub Pages | Grátis |
| Cloudflare Worker (compartilhado) | Grátis (100k req/dia) |
| OAuth App | Grátis |
| Domínio próprio (opcional) | ~R$ 40/ano (pago pelo cliente) |
| **Total** | **R$ 0** |

---

## Troubleshooting

### CMS fica carregando infinitamente

- Verifique se o `decap-server` está rodando (`yarn admin`)
- Em produção, verifique se o Cloudflare Worker está online
- Verifique se o `app_id` no config.yml bate com o OAuth App
- Verifique se o callback URL no OAuth App está correto

### CSS não carrega em produção

- O `BASE` no workflow deve bater com o nome do repo
- Ex: repo `novo-cliente` → `BASE: /novo-cliente`

### Imagens do CMS não aparecem

- `media_folder` deve ser `public/assets/blog` (não `assets/blog`)
- `public_folder` deve ser `/assets/blog`
- Covers no frontmatter usam path absoluto: `/assets/blog/foto.webp`
- O helper `withBase()` em `src/utils/withBase.ts` prefixa com o base path

### Erro "config must have required property 'backend'"

- O `backend` é obrigatório no config.yml mesmo com `local_backend: true`
- Mantenha ambos: `local_backend: true` + `backend: name: github`

### Port 8081 already in use

- O script `yarn admin` já mata processos na porta 8081 antes de subir
- Se persistir: `lsof -ti:8081 | xargs kill -9`
