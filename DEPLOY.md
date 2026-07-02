# Como publicar o site (guia passo a passo)

Tempo estimado: **15 minutos**. Custo: **0€** (o plano gratuito da Vercel chega e sobra para este site).

## Passo 1 — Criar conta na Vercel

1. Vai a **[vercel.com/signup](https://vercel.com/signup)**
2. Escolhe **"Continue with GitHub"** e autoriza com a conta GitHub onde está este repositório
3. Escolhe o plano **Hobby** (gratuito)

## Passo 2 — Importar o projeto

1. No painel da Vercel, clica em **"Add New… → Project"**
2. Na lista de repositórios, encontra **`Gotomygym-`** e clica **"Import"**
3. Não mudes nenhuma definição — a Vercel deteta o Next.js sozinha
4. Clica **"Deploy"** e espera 1-2 minutos

No fim tens o site num endereço tipo `gotomygym.vercel.app`. **Abre-o e confirma que está tudo bem.**

## Passo 3 — Ligar o domínio gotogym.pt

1. No projeto na Vercel: **Settings → Domains → Add**
2. Escreve `gotogym.pt` (e depois repete para `www.gotogym.pt`)
3. A Vercel mostra as instruções de DNS. No painel onde o domínio está registado (o registrar — por ex. amen.pt, dominios.pt, GoDaddy…), configura:
   - **Registo A** para `gotogym.pt` → `76.76.21.21`
   - **Registo CNAME** para `www` → `cname.vercel-dns.com`
4. A propagação de DNS pode demorar de minutos a algumas horas. A Vercel emite o certificado HTTPS automaticamente.

> ⚠️ Isto substitui o site WordPress antigo. Depois de o DNS apontar para a Vercel, o alojamento antigo pode ser cancelado — e a conta/plano WordPress deve ser **apagada**, não só abandonada, para eliminar de vez o risco da infeção.

## Passo 4 — Checklist pós-lançamento

- [ ] Abrir https://gotogym.pt e verificar todas as secções
- [ ] Testar o botão de WhatsApp num telemóvel
- [ ] **Ficha do Google** (Google Business Profile): atualizar o link do website
- [ ] **Facebook e Instagram**: atualizar o link do site no perfil
- [ ] Registar o site na **[Google Search Console](https://search.google.com/search-console)** (verificação por DNS) e submeter o sitemap: `https://gotogym.pt/sitemap.xml`
- [ ] Confirmar no site que o pin do mapa está no sítio exato; se precisar de afinar, editar `geo` em `lib/business.ts` (instruções no README)

## Atualizações futuras

Qualquer alteração feita ao repositório (commit na branch principal) é publicada automaticamente pela Vercel em ~1 minuto. Não há mais nada para gerir: sem servidores, sem atualizações de segurança, sem plugins.
