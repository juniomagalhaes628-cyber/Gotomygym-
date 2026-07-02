import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de privacidade do ${business.name} — como tratamos os teus dados.`,
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  return (
    <main className="min-h-svh bg-ink py-16">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <Link href="/" aria-label="Voltar ao início">
          <Logo />
        </Link>

        <h1 className="mt-10 font-display text-4xl uppercase tracking-wide text-white sm:text-5xl">
          Política de Privacidade
        </h1>
        <p className="mt-3 text-sm text-zinc-500">
          Última atualização: julho de 2026
        </p>

        <div className="mt-10 space-y-8 leading-relaxed text-smoke">
          <section>
            <h2 className="mb-3 font-display text-xl uppercase tracking-wide text-accent">
              Em resumo
            </h2>
            <p>
              Este site foi desenhado para recolher o mínimo possível: não
              usamos cookies próprios, não temos ferramentas de rastreio nem
              publicidade, e não guardamos dados pessoais em nenhuma base de
              dados.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl uppercase tracking-wide text-accent">
              Formulário de contacto
            </h2>
            <p>
              O formulário desta página não envia nem armazena dados nos nossos
              servidores. Ao submeter, o teu dispositivo abre o WhatsApp com a
              mensagem pré-preenchida — os dados só são partilhados connosco
              quando decides enviá-la, através do WhatsApp, e ficam sujeitos à{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy-eea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                política de privacidade do WhatsApp
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl uppercase tracking-wide text-accent">
              Conteúdos de terceiros
            </h2>
            <p>
              O mapa (Google Maps) e as publicações do Facebook{" "}
              <strong className="text-white">
                só carregam depois de clicares
              </strong>{" "}
              nos botões «Mostrar mapa» ou «Carregar publicações». Só nesse
              momento é que o teu browser se liga aos servidores da Google ou
              da Meta, que podem colocar cookies de acordo com as respetivas
              políticas de privacidade (
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Google
              </a>
              {" · "}
              <a
                href="https://www.facebook.com/privacy/policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Meta
              </a>
              ). Se não clicares, nenhum dado é partilhado com estes serviços.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl uppercase tracking-wide text-accent">
              Os teus direitos
            </h2>
            <p>
              Nos termos do RGPD, podes contactar-nos para qualquer questão
              sobre dados pessoais: {business.name}, {business.address.full},
              telefone{" "}
              <a
                href={`tel:${business.phone.e164}`}
                className="text-accent hover:underline"
              >
                {business.phone.display}
              </a>
              . Tens também o direito de apresentar reclamação à CNPD
              (Comissão Nacional de Proteção de Dados).
            </p>
          </section>
        </div>

        <Link
          href="/"
          className="mt-12 inline-flex rounded-full bg-accent px-7 py-4 font-semibold text-ink transition-colors hover:bg-accent-strong"
        >
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
