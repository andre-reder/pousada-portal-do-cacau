# Direção de Frontend — Landing Pages Imersivas

## Objetivo

Este documento define uma **assinatura de qualidade**, não uma identidade visual pronta. Ele deve orientar a criação de landing pages premium, autorais, responsivas e orientadas à conversão, usando narrativa por rolagem, parallax, sticky scroll, microinterações e direção de arte coerente.

A página final deve parecer criada especificamente para o negócio atendido. **Não reutilize automaticamente cores, fontes, imagens, textos, ícones, formatos, atmosfera ou personalidade de projetos anteriores.**

Este guia é independente de framework. Ao trabalhar em um projeto existente, preserve a stack, as convenções e os componentes já adotados antes de adicionar novas dependências.

---

## Regra central

> Movimento deve explicar, revelar, comparar ou conduzir. Se apenas distrai, deve ser removido.

A experiência deve continuar clara, completa e convincente sem animações. Motion é uma camada de direção e significado, nunca um requisito para acessar conteúdo ou concluir a conversão.

---

## 1. Descoberta obrigatória antes do design

Antes de escolher qualquer direção visual, o agente deve entender:

- segmento, especialidade e contexto cultural do estabelecimento;
- público principal e estágio de consciência desse público;
- objetivo de conversão primário;
- ação secundária desejada;
- percepção atual da marca e percepção que ela deseja construir;
- diferenciais comprováveis;
- objeções mais frequentes;
- ativos disponíveis: fotos, vídeos, equipe, produto, espaço, avaliações, números e cases;
- restrições legais, éticas ou regulatórias do segmento;
- tom de voz da marca;
- contexto de acesso predominante: mobile, desktop, busca, mídia paga, redes sociais ou indicação.

Se faltarem informações importantes, não invente fatos. Use conteúdo provisório claramente identificável ou peça os dados necessários.

### Decisões que o agente deve tomar para cada projeto

O agente consumidor deste documento é responsável por definir, com justificativa contextual:

- paleta de cores e sistema de contraste;
- famílias tipográficas e escala tipográfica;
- densidade visual;
- linguagem fotográfica ou ilustrativa;
- estilo de ícones;
- geometria de cards, botões e superfícies;
- nível de textura, brilho, profundidade e transparência;
- personalidade do movimento;
- ritmo da narrativa;
- quantidade e tipo de seções;
- linguagem da copy e dos CTAs.

Essas decisões devem nascer do segmento e do posicionamento. Uma marca clínica, uma pousada, uma empresa industrial e um produto digital não devem receber a mesma atmosfera apenas porque usam a mesma arquitetura de experiência.

---

## 2. Princípios da assinatura

### 2.1 Direção de arte contextual

A interface deve transmitir a personalidade do negócio antes mesmo da leitura completa. Imagem, tipografia, espaço, contraste, geometria e movimento precisam pertencer ao mesmo conceito.

Evite o “premium genérico”: fundo escuro, glow, serifas e glassmorphism não são uma solução universal. Use cada recurso apenas quando ele reforçar a marca e o segmento.

### 2.2 Narrativa antes de componentes

Não comece desenhando uma sequência de cards. Comece definindo o arco narrativo:

1. qual promessa prende a atenção;
2. qual tensão ou problema torna a promessa relevante;
3. como a solução é compreendida;
4. quais provas reduzem o risco;
5. qual ação encerra a história.

Cada seção deve responder a uma pergunta e preparar a seguinte.

### 2.3 Uma cena principal por seção

Toda seção deve ter um protagonista claro: uma frase, um produto, uma comparação, uma imagem, um processo, uma demonstração ou uma prova.

Elementos secundários podem criar profundidade, mas não devem disputar atenção com o protagonista.

### 2.4 Profundidade com hierarquia

A sensação espacial pode ser construída com:

- planos de fundo em velocidades diferentes;
- sobreposição controlada;
- escala e perspectiva sutis;
- foco, desfoque e contraste por plano;
- iluminação ou textura ambiente;
- elementos flutuantes que acrescentem contexto.

Não aplique parallax uniforme em tudo. Planos diferentes precisam ter papéis diferentes.

### 2.5 Interação com consequência visível

Tabs, simuladores, filtros, comparadores e controles devem alterar uma informação útil, e não existir apenas para demonstrar tecnologia.

Toda interação precisa oferecer:

- estado inicial compreensível;
- resposta imediata;
- estado ativo inequívoco;
- uso por teclado e toque;
- alternativa sem hover;
- conteúdo legível independentemente da animação.

### 2.6 Conversão sem ruptura

O CTA final deve parecer a conclusão natural do argumento. A página deve introduzir ações ao longo da jornada, mas reservar o maior peso visual para os momentos em que o usuário já recebeu contexto e prova suficientes.

---

## 3. Arquitetura narrativa recomendada

A ordem abaixo é uma base adaptável, não uma lista obrigatória.

### Ato 1 — Atenção e enquadramento

**Hero**

- comunica o resultado ou transformação principal;
- apresenta contexto suficiente para o visitante se reconhecer;
- contém um CTA primário e, quando útil, uma exploração secundária;
- usa uma cena visual que demonstra o universo da marca;
- evita slogans vagos sem uma proposta concreta.

Quando a direção escolhida for um **hero centralizado**, o alinhamento é um contrato da composição inteira: wrapper de conteúdo, kicker, `h1`, resumo e grupo de CTAs devem compartilhar o mesmo eixo central no desktop e no mobile. O wrapper deve usar largura controlada e `margin-inline: auto`; textos devem usar `text-align: center`; CTAs devem usar `justify-content: center`. `align-items: center` sozinho não centraliza texto. Valide também o centro geométrico do `h1` em relação ao hero para impedir que `max-width`, margens ou regras responsivas o desloquem para a esquerda.

**Sinal de continuidade**

- marquee, indicador de rolagem, faixa de prova, mensagem curta ou transição espacial;
- serve para conduzir ao próximo argumento, sem competir com o hero.

### Ato 2 — Tensão e entendimento

**Manifesto, problema ou contraste**

- revela gradualmente uma ideia central;
- pode usar texto guiado por scroll, antes/depois, comparação ou desmontagem de objeção;
- transforma abstrações em diferenças visíveis.

**Solução ou serviços**

- organiza a oferta em poucas categorias compreensíveis;
- relaciona cada recurso a um resultado;
- pode sincronizar scroll com tabs, painéis ou etapas;
- mantém controles manuais disponíveis quando há mudança automática de estado.

### Ato 3 — Prova e confiança

**Cases ou demonstração**

- mostra trabalho real, produto real ou resultado real;
- permite alternar entre formatos quando isso melhora a compreensão;
- prioriza evidências em vez de adjetivos.

**Processo**

- reduz incerteza mostrando o que acontece após o contato;
- destaca progressão, responsabilidade e entregáveis;
- deve parecer simples, sem esconder complexidade importante.

**Autoridade e prova social**

- combina depoimentos, números, clientes, credenciais ou bastidores;
- contextualiza métricas e evita números sem fonte;
- varia composição para impedir uma longa repetição de cards idênticos.

### Ato 4 — Decisão

**Ferramenta de decisão opcional**

- simulador, configurador, diagnóstico, calculadora ou comparador;
- usa premissas explícitas;
- não apresenta estimativas como garantias;
- existe apenas quando ajuda o visitante a avaliar valor ou adequação.

**CTA final**

- recapitula valor e reduz fricção;
- informa o que acontecerá depois da ação;
- pede somente os dados necessários;
- oferece feedback de envio e tratamento claro de erros;
- pode incluir uma alternativa de contato relevante para o público.

---

## 4. Gramática de movimento

### 4.1 Camadas de motion

Use quatro camadas com responsabilidades distintas:

1. **Ambiente:** movimento lento de luz, textura, grade, formas ou mídia de fundo.
2. **Narrativa:** progresso de rolagem controlando estados, revelações e comparações.
3. **Componente:** transições de tabs, acordeões, cards, menus e formulários.
4. **Ponteiro:** cursor contextual e respostas sutis ao mouse, somente quando apropriado.

A camada narrativa deve ter prioridade. Ambiente e ponteiro nunca podem roubar atenção dela.

### 4.2 Orçamento de movimento por seção

Como regra de composição, use:

- um movimento protagonista;
- no máximo um efeito ambiente relevante;
- até dois movimentos de apoio discretos;
- uma fase clara de entrada, permanência e saída.

Se todos os elementos se movem, nenhum movimento possui significado.

### 4.3 Parallax

Parallax deve comunicar profundidade ou relação entre planos.

- mantenha deslocamentos menores em textos e controles;
- use amplitudes maiores apenas em elementos decorativos ou mídia com área segura;
- prefira `transform` e `opacity`;
- evite animar propriedades que provoquem layout contínuo;
- não deixe o texto principal escapar da leitura;
- teste recortes em todas as proporções de tela;
- remova o efeito quando o dispositivo, a preferência do usuário ou o conteúdo tornarem a experiência pior.

### 4.4 Sticky scroll e storytelling dirigido por rolagem

Uma cena sticky é composta por:

- **trilho:** seção alta que fornece distância de rolagem;
- **palco:** viewport ou container fixado temporariamente;
- **progresso normalizado:** valor de zero a um relativo à seção;
- **capítulos:** intervalos que controlam a narrativa;
- **saída:** estado final preparado para a próxima seção.

Estruture capítulos com intenção:

- entrada: apresenta cenário e orientação;
- desenvolvimento: altera uma variável importante por vez;
- clímax: enfatiza a principal mensagem ou comparação;
- resolução: estabiliza a cena antes da saída.

Não crie trechos longos em que o usuário rola e nada perceptível acontece. Evite também transições tão rápidas que não possam ser compreendidas.

#### Padrão conceitual

```tsx
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ['start start', 'end end'],
});

const progress = useSpring(scrollYProgress, springConfig);
const sceneOpacity = useTransform(progress, chapterRange, opacityRange);
const sceneY = useTransform(progress, chapterRange, positionRange);
```

Os intervalos, a altura do trilho e a configuração da mola devem ser calibrados para cada narrativa e breakpoint. Não copie números de outra landing page sem validar o conteúdo real.

### 4.5 Revelação de texto

Textos dirigidos por scroll podem funcionar em manifestos curtos e mensagens de alto impacto.

- preserve o texto completo no DOM;
- mantenha contraste WCAG AA no estado ainda não destacado e no HTML SSR sem hidratação;
- não fragmente headings de forma que prejudique leitores de tela;
- use o efeito em blocos curtos;
- em movimento reduzido, mostre todo o texto em seu estado final;
- marque o container com `data-word-reveal` e cada palavra com `data-reveal-word` para permitir auditoria automática;
- revele todas as palavras até, no máximo, `scrollYProgress = 0.75`. Use `const revealEnd = 0.72`, `start = (index / words.length) * revealEnd` e `end = ((index + 1) / words.length) * revealEnd`; nunca faça a última palavra depender de progresso `1`;
- calibre `useScroll` para começar na entrada e terminar enquanto a seção ainda está substancialmente visível, por exemplo `offset: ["start 0.9", "end 0.65"]`. Os 25–35% finais do percurso devem manter a frase completa na tela;
- no mobile, reduza a coreografia se necessário, mas preserve a conclusão até 75%;
- **espaços entre palavras (bug recorrente):** ao revelar palavra-por-palavra, nunca coloque o espaço em branco *dentro* de um `span` com `display: inline-block` e nunca envolva espaço + palavra em outro wrapper `inline-block`. O navegador colapsa esse espaço e todas as palavras grudam (ex.: "Ocoraçãonãoseapressa"). Use um fragmento sem wrapper e coloque o espaço como text node irmão **depois** do span animado: `<><motion.span className="inline-block" data-reveal-word>{word}</motion.span>{index < words.length - 1 ? " " : null}</>`. A auditoria deve confirmar que spans consecutivos na mesma linha possuem distância geométrica maior que zero.

### 4.6 Transições de estado

Ao trocar conteúdo no mesmo palco:

- deixe claro qual controle está ativo;
- mantenha altura estável quando possível;
- use transições curtas e direcionais;
- evite flashes, saltos de layout e períodos sem conteúdo;
- preserve o foco durante interações por teclado;
- não dependa exclusivamente do scroll: ofereça tabs, botões ou stepper quando fizer sentido.

### 4.7 Hover e inclinação 3D

Tilt, magnetismo e elevação devem ser sutis e restritos a superfícies que se beneficiam da sensação tátil.

- habilite apenas com ponteiro preciso;
- limite a amplitude;
- retorne suavemente ao estado neutro;
- não incline formulários, textos longos ou áreas críticas;
- não use hover como única forma de revelar informação.

### 4.8 Cursor customizado

O cursor customizado é opcional. Só deve ser usado quando combina com a marca e acrescenta feedback.

Requisitos:

- ativar apenas em dispositivos com `pointer: fine` e hover real;
- desativar em touch e movimento reduzido;
- usar `pointer-events: none`;
- não bloquear clique, seleção ou arraste;
- diferenciar repouso, elemento interativo e pressionamento;
- detectar elementos interativos semanticamente;
- preservar cursores nativos úteis em inputs, seleção de texto e resize;
- desmontar todos os listeners;
- não esconder o cursor do sistema antes de confirmar que o cursor customizado foi inicializado;
- marcar o wrapper com `data-custom-cursor` para auditoria;
- usar contraste redundante: centro claro + contorno escuro + segundo contorno claro, anel de dois tons ou estratégia equivalente. Uma única cor não é aceita;
- permanecer distinguível sobre superfícies claras, escuras, imagens, gradientes, cards e botões coloridos. `mix-blend-mode` só pode ser usado após validação nesses contextos.

### 4.9 Smooth scroll

A rolagem suavizada pode unificar a experiência, mas não deve sequestrar a navegação.

- mantenha um único controlador global;
- sincronize-o com o loop de animação adotado;
- permita âncoras e links com offset da navegação fixa;
- preserve teclado, trackpad e toque;
- pare a rolagem ao abrir menus modais e restaure-a ao fechar;
- destrua listeners e frames na desmontagem;
- desative ou simplifique com `prefers-reduced-motion`;
- sempre ofereça fallback para rolagem nativa.

---

## 5. Sistema visual sem identidade fixa

Este documento não define valores de cor nem famílias tipográficas. Crie tokens semânticos e preencha-os a partir da estratégia do projeto.

### 5.1 Tokens mínimos

```css
:root {
  --surface-light: initial;
  --surface-elevated-light: initial;
  --text-on-light: initial;
  --text-muted-on-light: initial;
  --heading-on-light: initial;
  --accent-visual: initial;
  --accent-text-on-light: initial;

  --surface-dark: initial;
  --surface-elevated-dark: initial;
  --text-on-dark: initial;
  --text-muted-on-dark: initial;
  --heading-on-dark: initial;
  --accent-text-on-dark: initial;

  --border-on-light: initial;
  --border-on-dark: initial;
  --color-success: initial;
  --color-error: initial;

  --font-display: initial;
  --font-body: initial;
  --font-detail: initial;

  --radius-control: initial;
  --radius-card: initial;
  --radius-stage: initial;

  --shadow-subtle: initial;
  --shadow-elevated: initial;
  --focus-ring: initial;
}

.surface-light {
  --local-surface: var(--surface-light);
  --local-surface-elevated: var(--surface-elevated-light);
  --local-heading: var(--heading-on-light);
  --local-text: var(--text-on-light);
  --local-muted: var(--text-muted-on-light);
  --local-accent-text: var(--accent-text-on-light);
  --local-border: var(--border-on-light);
  background: var(--local-surface);
  color: var(--local-text);
}

.surface-dark {
  --local-surface: var(--surface-dark);
  --local-surface-elevated: var(--surface-elevated-dark);
  --local-heading: var(--heading-on-dark);
  --local-text: var(--text-on-dark);
  --local-muted: var(--text-muted-on-dark);
  --local-accent-text: var(--accent-text-on-dark);
  --local-border: var(--border-on-dark);
  background: var(--local-surface);
  color: var(--local-text);
}

.surface-light :where(h1, h2, h3, h4, h5, h6),
.surface-dark :where(h1, h2, h3, h4, h5, h6) {
  color: var(--local-heading);
}
```

Cada seção, card, footer, hero e CTA deve declarar `surface-light` ou `surface-dark` (ou fornecer os mesmos tokens locais explicitamente). Componentes internos usam apenas `--local-heading`, `--local-text`, `--local-muted`, `--local-accent-text` e `--local-border`. Nunca use uma única variável global de heading em superfícies de luminosidades diferentes e nunca aplique cor em `h1, h2, h3, h4` sem escopo de superfície.

`initial` representa uma decisão ainda não tomada. O agente deve substituir esses valores de acordo com o segmento e nunca entregar o projeto com tokens indefinidos.

### 5.2 Hierarquia tipográfica

Independentemente das famílias escolhidas, defina funções claras:

- **display:** promessa, clímax e grandes mensagens editoriais;
- **body:** leitura contínua e explicação;
- **detail:** labels, métricas, etapas, metadados e controles.

Limite o número de vozes tipográficas. Contraste pode vir de escala, peso, largura, caixa, ritmo e espaço — não apenas da troca de família.

### 5.3 Contraste contextual obrigatório

Valide as cores depois da composição final de background, gradiente, overlay, backdrop e transparência:

- texto normal: mínimo `4.5:1`;
- texto grande (24px normal ou 18.66px bold): mínimo `3:1`;
- ícones funcionais, controles, bordas relevantes, hover e focus: mínimo `3:1`;
- textos menores que 14px não usam opacidades `/40`, `/45`, `/50` ou `/55`;
- accent decorativo e accent para texto são tokens diferentes. Em cream + terracota, use o terracota vibrante em preenchimentos/áreas grandes e um tom mais escuro em links/labels sobre cream;
- headings não recebem cor por seletor global de elemento. A cor vem da superfície ou do componente;
- texto sobre imagem requer overlay/scrim que mantenha o contraste em toda a área ocupada pelo texto;
- o estado SSR sem JavaScript também precisa atingir contraste e permanecer legível. Nunca use `opacity: 0` como estado inicial de headings, parágrafos, links ou CTAs essenciais. Quando opacity fizer parte do reveal, o valor inicial deve continuar atingindo WCAG AA no fundo real.

Faça o cálculo, não uma avaliação visual aproximada. Uma diferença perceptível entre duas cores não garante contraste suficiente.

### 5.4 Superfícies e profundidade

Escolha uma lógica dominante para superfícies:

- editorial plana;
- material e tátil;
- translúcida;
- arquitetônica;
- orgânica;
- técnica;
- fotográfica.

Não misture indiscriminadamente glassmorphism, sombras pesadas, bordas luminosas, ruído, gradientes e volumes. Toda camada deve pertencer à direção escolhida.

### 5.5 Ritmo e espaço

- alterne seções densas e áreas de respiro;
- alinhe elementos a uma grade consistente;
- use largura de leitura adequada para textos;
- dê espaço adicional ao argumento principal;
- mantenha continuidade entre o fim visual de uma seção e o início da próxima;
- não confunda ocupação total do viewport com ausência de margens ou respiro.

---

## 6. Composição de componentes

### Navegação

- fixa apenas quando facilita uma landing longa;
- muda de estado ao rolar sem saltos de layout;
- destaca a ação principal sem transformar todos os links em CTAs;
- usa links reais para navegação quando possível;
- no mobile, apresenta menu legível, rolável e com alvos confortáveis;
- gerencia foco, `aria-expanded`, Escape e bloqueio de scroll quando atuar como drawer.

### Hero

- um heading principal por página;
- proposta compreensível sem depender da animação;
- imagem ou demonstração relacionada ao produto real;
- CTA visível e específico;
- altura baseada em `dvh` quando ocupar o viewport;
- conteúdo crítico não deve ficar escondido atrás da navegação.

### Cards

- use cards quando houver agrupamento semântico real;
- varie hierarquia, não apenas decoração;
- toda a área clicável deve ter comportamento previsível;
- evite grades excessivamente uniformes em narrativas premium;
- não crie card dentro de card sem necessidade estrutural.

### Tabs e steppers

- use semântica e ARIA adequadas;
- permita teclado;
- mantenha labels curtos;
- indique estado ativo por mais de uma pista visual;
- em telas estreitas, use scroll horizontal, wrapping controlado ou uma visualização por vez;
- mudanças automáticas por scroll não devem impedir seleção manual.

### Prova social

- apresente nome, papel, contexto e evidência verificável quando disponíveis;
- não use estrelas, selos ou métricas falsas;
- não esconda todos os depoimentos essenciais atrás de interação;
- mantenha trechos longos legíveis e sem animação contínua.

### Formulários

- labels visíveis e associados aos campos;
- tipos de input, autocomplete e teclado móvel corretos;
- foco perceptível;
- validação próxima do erro;
- mensagens de sucesso anunciadas de forma acessível;
- nenhum dado sensível em logs ou URLs sem necessidade;
- solicite o mínimo necessário para iniciar a conversa.

---

## 7. Responsividade: equivalência narrativa, não miniaturização

A versão mobile deve preservar a mensagem e a ordem de decisão, não necessariamente a mesma coreografia do desktop.

### Desktop

Pode usar:

- comparações simultâneas;
- múltiplos planos;
- sticky stages mais longos;
- cursor customizado;
- hover, tilt e maior amplitude espacial.

### Mobile

Prefira:

- uma cena principal por vez;
- tabs ou stepper no lugar de comparações comprimidas;
- alturas sticky menores ou fluxo normal quando o viewport não comportar a cena;
- menor amplitude de parallax;
- controles de toque com área mínima confortável;
- conteúdo prioritário antes de decoração;
- mídia enquadrada para proporções verticais;
- suporte a safe areas e barras dinâmicas do navegador.

### Regras de adaptação

- teste largura, altura e proporção; não use apenas largura como critério;
- valide dispositivos baixos em modo paisagem;
- evite conteúdo essencial preso em um palco maior que o viewport;
- use `100dvh` com fallback apropriado;
- garanta que menus e painéis possam rolar internamente;
- nunca aplique cursor customizado em touch;
- não torne a página excessivamente longa apenas para imitar o timing desktop.

---

## 8. Acessibilidade e movimento reduzido

A preferência `prefers-reduced-motion` deve produzir uma composição deliberada, e não apenas animações com duração zero.

Na versão reduzida:

- remova trilhos artificiais de grande altura;
- substitua sticky storytelling por fluxo normal;
- mostre conteúdo no estado final ou em uma sequência estática clara;
- elimine parallax, tilt, autoplay e cursor customizado;
- mantenha tabs e controles utilizáveis manualmente;
- não atualize estados automaticamente com base no scroll;
- preserve hierarquia, contraste e contexto.

Além disso:

- use landmarks e headings em ordem lógica;
- ofereça link de pular para o conteúdo quando apropriado;
- garanta navegação completa por teclado;
- não remova outline sem substituição equivalente;
- use texto alternativo contextual em imagens;
- marque decoração para ser ignorada por tecnologia assistiva;
- forneça controles para mídia com áudio ou reprodução relevante;
- respeite contraste e zoom de texto;
- não use apenas cor para comunicar estado;
- anuncie mudanças assíncronas relevantes.

---

## 9. Performance

Experiência premium precisa responder rapidamente. A animação mais sofisticada não compensa uma página lenta.

### Regras

- renderize conteúdo estático sem hidratação quando o framework permitir;
- hidrate apenas componentes realmente interativos;
- prefira `transform` e `opacity` para animações frequentes;
- aplique `will-change` somente durante ou próximo da animação;
- evite múltiplos listeners de scroll independentes;
- reutilize progresso e motion values dentro da mesma seção;
- use listeners passivos quando adequado;
- faça cleanup de listeners, observers, timers e animation frames;
- respeite o orçamento de mídia do projeto;
- otimize dimensões, formato e compressão de imagens;
- carregue abaixo da dobra sob demanda;
- priorize somente o ativo de LCP realmente crítico;
- não faça preload de toda a galeria;
- use `preload="metadata"` ou carregamento posterior em vídeos não críticos;
- pause vídeos fora de vista quando possível;
- forneça poster e fallback;
- evite filtros de blur gigantes em grande quantidade, especialmente no mobile;
- teste em hardware intermediário, não apenas em máquina de desenvolvimento.

### Metas de qualidade

- sem layout shift perceptível;
- interação inicial rápida;
- rolagem estável sem travamentos;
- ausência de erros no console;
- sem vazamentos após navegar ou desmontar componentes;
- conteúdo principal indexável e disponível sem JavaScript sempre que possível.

---

## 10. Arquitetura de implementação

### Separação recomendada

- **Shell da página:** metadados, layout, ordem narrativa e conteúdo estático.
- **Controlador global de scroll:** uma única instância, quando necessário.
- **Fundo ambiente:** isolado, sem interceptar eventos.
- **Seções narrativas:** cada uma possui seu próprio progresso local.
- **Primitivos de interação:** botão, card, tabs, mídia, formulário e cursor.
- **Dados de conteúdo:** separados da coreografia quando houver repetição.
- **Tokens de marca:** centralizados e semanticamente nomeados.

### Regras técnicas

- use a stack já instalada antes de propor outra biblioteca;
- não adicione uma dependência para algo que CSS ou a stack atual resolvem bem;
- mantenha seções independentes para facilitar teste e remoção;
- não use variáveis globais informais para coordenar componentes quando contexto ou utilitários tipados forem mais adequados;
- evite estado React atualizado a cada frame quando um motion value pode atualizar diretamente o estilo;
- centralize helpers de navegação por âncora;
- mantenha conteúdo real fora de cálculos de animação;
- use tipos explícitos para modelos de conteúdo e estados de interação;
- implemente progressive enhancement.

### Estrutura conceitual

```text
Page
├── AccessibilityControls
├── SmoothScrollController
├── AmbientBackground
├── Navigation
├── Main
│   ├── HeroScene
│   ├── NarrativeBridge
│   ├── ProblemOrManifestoScene
│   ├── SolutionScene
│   ├── ProofSection
│   ├── ProcessScene
│   ├── SocialProofSection
│   ├── DecisionTool
│   └── ConversionSection
├── Footer
└── ContextualCursor
```

Inclua apenas as partes necessárias ao argumento daquela landing page.

---

## 11. Processo de criação

### Etapa 1 — Estratégia

Defina:

- objetivo primário;
- público;
- promessa;
- tensão;
- provas disponíveis;
- objeções;
- ação final.

### Etapa 2 — Conceito visual

Escolha três a cinco adjetivos de marca e traduza cada um em decisões de:

- composição;
- tipografia;
- cor;
- imagem;
- superfície;
- movimento.

Toda escolha precisa responder a pelo menos um desses adjetivos.

### Etapa 3 — Storyboard de scroll

Antes de codificar, descreva cada seção como uma sequência:

```text
Estado inicial → gatilho → transformação → mensagem percebida → estado final
```

Se a transformação não muda a compreensão, simplifique-a.

### Etapa 4 — Base estática

Implemente primeiro:

- semântica;
- copy;
- hierarquia;
- layout responsivo;
- conteúdo real;
- navegação e conversão.

A página deve funcionar nessa etapa.

### Etapa 5 — Motion progressivo

Adicione nesta ordem:

1. transições de estado;
2. narrativa de scroll;
3. profundidade ambiente;
4. microinterações;
5. cursor customizado, se justificado.

### Etapa 6 — Adaptação

Calibre separadamente:

- desktop amplo;
- notebook de baixa altura;
- tablet;
- mobile;
- touch;
- movimento reduzido.

### Etapa 7 — Refinamento

Remova efeitos redundantes, estabilize layout, ajuste timing, reduza custo visual e técnico e confirme que a ação principal continua evidente.

---

## 12. Antipadrões

Não faça:

- copiar a identidade de outra landing page;
- escolher direção visual sem pesquisar o segmento;
- usar a mesma atmosfera “cinematográfica” para toda marca;
- transformar todas as seções em sticky scroll;
- animar cada palavra, card e ícone simultaneamente;
- criar rolagem longa sem evolução narrativa;
- esconder conteúdo essencial até que uma animação termine;
- usar parallax em inputs, textos extensos ou controles críticos;
- manter desktop espremido no mobile;
- depender de hover para informação importante;
- usar métricas, depoimentos, logos ou cases inventados;
- criar calculadoras com premissas ocultas;
- usar autoplay com áudio;
- priorizar textura, glow e blur sobre legibilidade;
- adicionar bibliotecas sem verificar as existentes;
- sacrificar semântica, foco ou performance em nome do efeito visual.

---

## 13. Checklist de validação

### Estratégia e conteúdo

- [ ] A promessa principal é específica e compreensível?
- [ ] A narrativa segue uma progressão lógica?
- [ ] Cada seção responde a uma pergunta real do visitante?
- [ ] Claims e métricas possuem base verificável?
- [ ] O CTA informa ação e próximo passo?

### Identidade

- [ ] Paleta e tipografia foram escolhidas para este segmento?
- [ ] A direção de arte pode ser explicada por atributos da marca?
- [ ] O resultado evita aparência de template reaproveitado?
- [ ] Elementos visuais e movimento falam a mesma linguagem?

### Motion

- [ ] Cada efeito possui função narrativa ou de feedback?
- [ ] Existe apenas um protagonista por cena?
- [ ] Entrada, permanência e saída estão claras?
- [ ] Não há trechos mortos ou rápidos demais no scroll?
- [ ] A versão reduzida funciona em fluxo normal?

### Responsividade

- [ ] O mobile preserva a narrativa sem copiar a coreografia desktop?
- [ ] Sticky stages cabem em viewports baixos?
- [ ] Controles têm área de toque confortável?
- [ ] Menus e painéis continuam acessíveis em landscape?
- [ ] Safe areas e unidades dinâmicas de viewport foram testadas?

### Acessibilidade

- [ ] Headings e landmarks estão corretos?
- [ ] Tudo funciona por teclado?
- [ ] Foco é visível e previsível?
- [ ] Estados não dependem apenas de cor?
- [ ] Imagens, mídia, tabs, menus e formulários possuem semântica adequada?
- [ ] Movimento reduzido remove a coreografia, não o conteúdo?

### Performance

- [ ] O ativo de LCP está corretamente priorizado?
- [ ] Mídia abaixo da dobra usa carregamento adequado?
- [ ] Vídeos não críticos evitam download antecipado excessivo?
- [ ] Animações frequentes usam propriedades eficientes?
- [ ] Listeners e frames são desmontados?
- [ ] Não há layout shift, travamento ou erro no console?

### Conversão

- [ ] A ação primária é consistente em toda a página?
- [ ] CTAs aparecem após contexto suficiente?
- [ ] O formulário pede somente o necessário?
- [ ] Há feedback claro de sucesso e erro?
- [ ] O usuário sabe o que ocorrerá após enviar?

---

## 14. Contrato para o agente consumidor

Ao usar este documento para criar uma nova landing page, o agente deve:

1. analisar o negócio e os ativos reais;
2. declarar brevemente o conceito visual e a lógica narrativa escolhidos;
3. definir tokens de marca próprios, incluindo cores e tipografia adequadas ao segmento;
4. construir primeiro uma experiência estática, semântica e responsiva;
5. aplicar motion apenas onde ele melhora compreensão, profundidade ou feedback;
6. criar versões deliberadas para mobile, touch e movimento reduzido;
7. verificar acessibilidade, performance e conversão;
8. remover qualquer elemento herdado que não faça sentido para a nova marca.

O resultado esperado não é uma cópia visual. É a repetição de um padrão de excelência: **direção contextual, storytelling claro, movimento intencional, profundidade controlada, interação útil e conversão sem fricção.**
