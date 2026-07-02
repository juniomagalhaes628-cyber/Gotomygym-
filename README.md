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

Quando o domínio final estiver definido, troca também o `siteUrl` nesse ficheiro (afeta SEO, sitemap e Open Graph). Se necessário, afina as coordenadas em `geo` (usadas no JSON-LD).

### Textos e aulas/modalidades

Em **`lib/content.ts`**: o array `gymClasses` (nome, descrição e ícone de cada card) e os textos da secção "Sobre". Os ícones disponíveis estão em `components/icons.tsx`.

### Cores

Em **`app/globals.css`**, no bloco `@theme`. Para mudar a cor de destaque troca `--color-accent` (e `--color-accent-strong` para o estado hover). Ex.: laranja em vez de verde-lima:

```css
--color-accent: #ff7a1a;
--color-accent-strong: #e56607;
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

## Performance

- O fundo animado do hero é um shader WebGL leve que só carrega no cliente após o primeiro paint (não afeta o LCP), pausa quando o separador está oculto e respeita `prefers-reduced-motion`.
- Os embeds de terceiros (Google Maps e Facebook) só carregam quando entram no viewport (IntersectionObserver), pelo que não bloqueiam o render inicial.
