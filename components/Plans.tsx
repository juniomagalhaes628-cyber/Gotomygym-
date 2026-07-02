import { business, whatsappUrl } from "@/lib/business";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FacebookIcon, HeartPulseIcon, StarIcon, UsersIcon } from "@/components/icons";

const PRICE_MESSAGE = `Olá! Gostava de saber os preços e planos do ${business.name}.`;

/**
 * Secção de valor: mensalidades (pedido de preçário sem compromisso),
 * consulta de nutrição e parceria Urban Sports Club.
 */
export function Plans() {
  return (
    <section id="planos" className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Planos & Vantagens"
          title="Mais valor em cada treino"
          subtitle="Planos simples, acompanhamento a sério e parcerias que contam."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          <Reveal>
            <article className="flex h-full flex-col rounded-2xl border border-accent/40 bg-steel/60 p-8">
              <div className="mb-5 inline-flex self-start rounded-xl bg-accent/10 p-3 text-accent">
                <StarIcon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl uppercase tracking-wide text-white">
                Mensalidade
              </h3>
              <p className="mt-4 font-display text-5xl tracking-wide text-accent">
                {business.pricing.monthly}€
                <span className="ml-1 font-sans text-base font-normal text-smoke">
                  /mês
                </span>
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-smoke">
                Acesso completo ao ginásio com acompanhamento da equipa.
                Fala connosco sem compromisso — respondemos no próprio dia.
              </p>
              <a
                href={whatsappUrl(PRICE_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-accent-strong"
              >
                Pedir preçário
              </a>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="flex h-full flex-col rounded-2xl border border-white/5 bg-steel/60 p-8">
              <div className="mb-5 inline-flex self-start rounded-xl bg-accent/10 p-3 text-accent">
                <HeartPulseIcon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl uppercase tracking-wide text-white">
                Consulta de Nutrição
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-smoke">
                O treino rende mais com a alimentação certa. Disponibilizamos
                acompanhamento nutricional para potenciar os teus resultados —
                pergunta-nos como.
              </p>
              <a
                href={whatsappUrl(
                  `Olá! Gostava de saber mais sobre a Consulta de Nutrição no ${business.name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white transition-colors hover:border-accent hover:text-accent"
              >
                Saber mais
              </a>
            </article>
          </Reveal>

          <Reveal delay={0.16}>
            <article className="flex h-full flex-col rounded-2xl border border-white/5 bg-steel/60 p-8">
              <div className="mb-5 inline-flex self-start rounded-xl bg-accent/10 p-3 text-accent">
                <UsersIcon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl uppercase tracking-wide text-white">
                Urban Sports Club
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-smoke">
                Somos parceiros do Urban Sports Club: se tens passe USC, treina
                no Go to Gym sem marcação prévia — chega, faz check-in e treina.
              </p>
              <a
                href={business.partners.urbanSportsClub}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 font-semibold text-white transition-colors hover:border-accent hover:text-accent"
              >
                Ver no Urban Sports Club
              </a>
            </article>
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <p className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/5 bg-carbon px-6 py-5 text-center text-sm text-smoke">
            <FacebookIcon className="h-4 w-4 shrink-0 text-accent" />
            Temos campanhas regulares — traz um amigo, regressa ao treino e
            ganha vantagens.
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent hover:underline"
            >
              Segue as novidades no Facebook →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
