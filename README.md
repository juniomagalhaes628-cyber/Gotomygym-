# Go to Gym — Website

Website oficial do **Go to Gym** (Penafiel). Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion. Sem plugins legacy nem dependências desnecessárias — leve, rápido e seguro.

## Como correr

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # build de produção
npm start        # servir a build de produção
```

## Onde editar cada coisa

### Dados do ginásio (nome, morada, telefone, horários, redes)

Tudo está centralizado em **`lib/business.ts`**. Edita esse ficheiro e o site inteiro atualiza (hero, horários, contactos, footer, JSON-LD, sitemap).

Quando o domínio final estiver definido, troca também o `siteUrl` nesse ficheiro (afeta SEO, sitemap e Open Graph). As coordenadas em `geo` posicionam o pin do mapa e alimentam o SEO local — para afinar ao metro, clica com o botão direito sobre o ginásio no Google Maps, copia as coordenadas e cola-as em `geo`.

### Textos e aulas/modalidades

Em **`lib/content.ts`**: o array `gymClasses` (nome, descrição e ícone de cada card) e os textos da secção "Sobre". Os ícones disponíveis estão em `components/icons.tsx`.

### Cores

A paleta segue o logo oficial: preto + amarelo `#f2f200`. Em **`app/globals.css`**, no bloco `@theme`, troca `--color-accent` (e `--color-accent-strong` para o estado hover) para mudar a cor de destaque em todo o site:

```css
--color-accent: #f2f200;
--color-accent-strong: #d4d400;
```

Nota: o brilho do fundo animado do hero usa a mesma cor definida diretamente no shader — em `components/HeroBackground.tsx`, linha `vec3 accent = vec3(...)` (valores RGB de 0 a 1).

### Tipografia

As fontes (Anton para títulos, Inter para texto) estão em `app/layout.tsx` via `next/font` — basta trocar os imports.

### Facebook Page Plugin

A secção "Novidades" usa o [Page Plugin oficial do Facebook](https://developers.facebook.com/docs/plugins/page-plugin/) em `components/FacebookFeed.tsx`, que mostra sempre o timeline atual da página — **não precisa de manutenção**. Para apontar para outra página, muda `social.facebook` em `lib/business.ts`. Os parâmetros do plugin (altura, tabs, header) são os atributos `data-*` no mesmo componente. O SDK do Facebook só carrega quando o utilizador se aproxima da secção (lazy load), por isso não afeta a performance.

### Formulário de contacto

O form em `components/Contact.tsx` abre o WhatsApp do ginásio com a mensagem preenchida (não precisa de backend). Para enviar por email, troca o `handleSubmit` por um POST para um serviço como Formspree ou uma API route própria.

## Estrutura

```
app/
  layout.tsx          # metadata, fontes, JSON-LD (schema.org ExerciseGym)
  page.tsx            # composição das secções
  globals.css         # tema (cores) e estilos base
  sitemap.ts          # /sitemap.xml
  robots.ts           # /robots.txt
  opengraph-image.tsx # imagem de partilha (OG) gerada
  icon.svg            # favicon
components/           # uma secção = um componente
lib/
  business.ts         # DADOS DO GINÁSIO — edita aqui
  content.ts          # aulas e textos editáveis
  jsonld.ts           # schema.org LocalBusiness/ExerciseGym
```

### Fotos (galeria)

Coloca as fotografias em **`public/gallery/`** (jpg, png ou webp) — aparecem automaticamente na secção "Galeria" por ordem alfabética (usa nomes tipo `01-sala.jpg`, `02-equipa.jpg` para controlar a ordem). Sem fotos na pasta, a secção fica oculta.

> As imagens atuais são placeholders de marca gerados automaticamente — substitui-as por fotografias reais do ginásio quando as tiveres (basta apagar as atuais e colocar as novas).

### Fotos de eventos (secção Comunidade)

Coloca fotos de eventos (corridas, festas, atividades) em **`public/community/`** — ativam automaticamente a secção "Comunidade", uma tira horizontal com legendas. O nome do ficheiro define a ordem e a legenda: `01-corrida-dos-moinhos.jpg` → "Corrida dos moinhos". Sem fotos, a secção fica oculta.

### Preço da mensalidade

Em **`lib/business.ts`**, campo `pricing.monthly` — atualiza o número e o site inteiro (secção Planos, FAQ, página EN e schema do Google) muda de uma vez.

### Avaliações e FAQ

As avaliações do Google e as perguntas frequentes estão em **`lib/content.ts`** (`reviews` e `faqs`). As FAQ geram automaticamente o schema FAQPage para os resultados do Google.

### Logo

O logo (moldura quadrada amarela + "GO / TO GYM") está em `components/Logo.tsx` (header e footer), `app/icon.svg` (favicon) e `app/opengraph-image.tsx` (imagem de partilha nas redes sociais).

## Segurança

O site envia headers de segurança configurados em `next.config.ts`:

- **Content-Security-Policy** — o browser só executa scripts do próprio site, do SDK do Facebook e permite os iframes do Facebook/Google Maps. Qualquer script injetado de outra origem é bloqueado (proteção direta contra infeções como a do site antigo).
- **X-Content-Type-Options: nosniff**, **X-Frame-Options: SAMEORIGIN** (anti-clickjacking), **Referrer-Policy**, **Permissions-Policy** (câmara/microfone/localização desativados) e **Strict-Transport-Security** (força HTTPS).
- **Cross-Origin-Opener-Policy** e **Cross-Origin-Resource-Policy** (isolamento de origem), **X-DNS-Prefetch-Control: off** e **X-Permitted-Cross-Domain-Policies: none**.
- **`/.well-known/security.txt`** (RFC 9116) com contacto para reporte responsável de vulnerabilidades.
- **Dependências sem vulnerabilidades conhecidas** (`npm audit`: 0) — o `overrides` no package.json força a versão corrigida do postcss embutido no Next.js.
- Campos do formulário com limites de tamanho (`maxLength`).

Além disso: não há base de dados nem área de administração para atacar (site estático), não há plugins de terceiros, todos os links externos usam `rel="noopener noreferrer"`, e o formulário não guarda dados — abre diretamente o WhatsApp.

### Privacidade / RGPD

- Os embeds do Google Maps e do Facebook são **click-to-load**: só carregam (e só colocam cookies) depois de o visitante clicar. Sem clique, zero pedidos a terceiros — por isso não é necessário banner de cookies.
- Página de privacidade em `/privacidade` (`app/privacidade/page.tsx`).
- Link para o Livro de Reclamações eletrónico no footer (obrigatório por lei).

### Versão em inglês

`/en` (`app/en/page.tsx`) é uma página dirigida a turistas e visitantes (hóspedes das Termas de São Vicente), com avaliações de visitantes estrangeiros, horários e localização. Ligada via hreflang e acessível pelo botão "EN" no menu.

## Performance

- O fundo animado do hero é um shader WebGL leve que só carrega no cliente após o primeiro paint (não afeta o LCP), pausa quando o separador está oculto e respeita `prefers-reduced-motion`.
- Os embeds de terceiros (Google Maps e Facebook) só carregam quando entram no viewport (IntersectionObserver), pelo que não bloqueiam o render inicial.
