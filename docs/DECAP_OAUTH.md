# Decap CMS em Produção — Guia de Configuração

## Como o dono da pousada cria blogs em produção

### Pré-requisitos

1. **O dono precisa de uma conta no GitHub** — cadastro gratuito em github.com
2. **Você (admin do repo) concede acesso** ao dono:
   - Vá em https://github.com/andre-reder/pousada-portal-do-cacau/settings/access
   - Clique "Add people" → digite o usuário do dono
   - Permissão: **Write** (para ele poder commitar posts via CMS)

3. **OAuth App no GitHub** — necessário para o CMS autenticar:
   - Vá em https://github.com/settings/developers → "New OAuth App"
   - Application name: `Pousada Portal do Cacau CMS`
   - Homepage URL: `https://andre-reder.github.io/pousada-portal-do-cacau/`
   - Authorization callback URL: `https://andre-reder.github.io/pousada-portal-do-cacau/admin/`
   - Anote o **Client ID** e gere um **Client Secret**

4. **Proxy OAuth** — o GitHub Pages é estático, então precisa de um proxy
   para trocar o code OAuth por um token. Opções gratuitas:

   ### Opção A: Cloudflare Worker (recomendado, gratuito)
   1. Crie conta em cloudflare.com
   2. Workers & Pages → Create Worker
   3. Cole o código de: https://github.com/decaporg/decap-cms-oauth-provider
   4. Configure as variáveis:
      - `GITHUB_CLIENT_ID` = seu Client ID
      - `GITHUB_CLIENT_SECRET` = seu Client Secret
      - `OAUTH_CALLBACK_URL` = `https://andre-reder.github.io/pousada-portal-do-cacau/admin/`
   5. Anote a URL do Worker (ex: `https://pousada-oauth.seu-usuario.workers.dev`)

   ### Opção B: Vercel Serverless Function (gratuito)
   1. Crie um projeto no Vercel com o código do oauth provider
   2. Configure as mesmas variáveis de ambiente

5. **Atualizar config.yml** para produção:
   ```yaml
   local_backend: false
   backend:
     name: github
     repo: andre-reder/pousada-portal-do-cacau
     branch: main
     auth_type: oauth
     app_id: SEU_CLIENT_ID
     proxy_url: https://seu-oauth-proxy.workers.dev
   ```

### Fluxo do dono para criar um blog

1. Acessa `https://andre-reder.github.io/pousada-portal-do-cacau/admin/`
   (ou `https://portaldocacau.com.br/admin/` quando o domínio estiver configurado)
2. Clica em "Login with GitHub"
3. Autoriza o app OAuth (primeira vez apenas)
4. Vê a lista de posts existentes
5. Clica em "New Post"
6. Preenche: título, data, categoria, resumo, capa, conteúdo
7. Clica em "Publish" — o CMS commita direto no repo
8. O GitHub Action detecta o commit e rebuilda o site automaticamente
9. Em ~1 minuto o novo post está no ar

### Domínio próprio (portaldocacau.com.br)

1. No GitHub: Settings → Pages → Custom domain → digite `portaldocacau.com.br`
2. No seu provedor de DNS:
   - Adicione um registro A apontando para:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Ou CNAME `www` para `andre-reder.github.io`
3. Marque "Enforce HTTPS" no GitHub Pages
4. Atualize `astro.config.mjs` com `BASE=/` e `SITE=https://portaldocacau.com.br`
5. Atualize o OAuth App callback URL para `https://portaldocacau.com.br/admin/`
6. Atualize o `config.yml` com a nova URL

### SEO

GitHub Pages é excelente para SEO:
- Serve HTML estático (rápido, crawlable)
- HTTPS automático
- Headers de cache corretos
- Sem JavaScript desnecessário no render do conteúdo
- Sitemap pode ser gerado pelo Astro

Para melhorar SEO, adicione:
- `src/pages/sitemap.xml.ts` (Astro gera automaticamente com @astrojs/sitemap)
- `public/robots.txt`
- Meta tags Open Graph (já presentes no Layout.astro)
