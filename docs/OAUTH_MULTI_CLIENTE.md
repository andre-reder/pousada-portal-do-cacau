# Proxy OAuth multi-cliente para Decap CMS

## Estratégia: um único Cloudflare Worker para todos os clientes

Em vez de criar um Worker por cliente, use **um Worker** que gerencia
múltiplos OAuth Apps baseado no `state` (URL de origem).

### Como funciona

1. O Decap CMS envia: `GET https://seu-worker.workers.dev/auth?provider=github&site_id=cliente-x`
2. O Worker redireciona para GitHub OAuth com o Client ID correto para aquele cliente
3. O GitHub redireciona de volta para o Worker
4. O Worker troca o code por token e redireciona para a callback URL do cliente

### Configuração no Cloudflare Worker

Crie **um Worker** com as variáveis de ambiente em formato JSON:

```
CLIENTS = {"cliente-x":{"client_id":"...","client_secret":"...","callback":"https://andre-reder.github.io/pousada-x/admin/"},"cliente-y":{"client_id":"...","client_secret":"...","callback":"https://andre-reder.github.io/pousada-y/admin/"}}
```

### Config em cada LP

Cada `config.yml` aponta para o mesmo Worker, mas com `site_id` diferente:

```yaml
backend:
  name: github
  repo: andre-reder/pousada-x
  branch: main
  auth_type: oauth
  app_id: CLIENT_ID_DO_CLIENTE_X
  proxy_url: https://seu-worker.workers.dev
```

### Limites do plano gratuito

- 100.000 req/dia — mais que suficiente
- 10ms de CPU por req — OAuth é só redirect, não precisa de processamento pesado
- Um único Worker — mas com múltiplas configs internas

### Quando precisar mais

Se algum dia ultrapassar 100k req/dia (improvável para CMS auth):
- Workers Paid: $5/mês → 10M req/dia
- Ou migrar para Netlify (OAuth nativo, sem proxy)

## Resumo: custo por cliente

| Recurso | Custo | Por cliente? |
|---------|-------|-------------|
| Cloudflare Worker | Grátis (100k req/dia) | Não — um Worker serve todos |
| OAuth App no GitHub | Grátis | Sim — um por cliente |
| GitHub repo | Grátis (público) | Sim — um por cliente |
| GitHub Pages | Grátis | Sim — um por cliente |
| Domínio próprio | ~R$ 40/ano | Sim — se o cliente quiser |

**Custo total para você: R$ 0** (enquanto usar Workers grátis e repos públicos)
**Custo total por cliente adicional: R$ 0** (apenas criar OAuth App + adicionar config no Worker)
