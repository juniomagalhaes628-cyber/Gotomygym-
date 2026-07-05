import { business } from "@/lib/business";
import { FacebookIcon, InstagramIcon, PhoneIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ink py-12">
      {/* watermark gigante do wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[8rem] leading-none text-transparent opacity-[0.05] md:text-[13rem]"
        style={{ WebkitTextStroke: "2px #f2f200" }}
      >
        GO TO GYM
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 sm:px-8 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 text-sm leading-relaxed text-smoke">
            {business.address.full}
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook do Go to Gym"
              className="rounded-full border border-white/10 p-2.5 text-smoke transition-colors hover:border-accent hover:text-accent"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Go to Gym"
              className="rounded-full border border-white/10 p-2.5 text-smoke transition-colors hover:border-accent hover:text-accent"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={`tel:${business.phone.e164}`}
              aria-label={`Ligar para ${business.phone.display}`}
              className="rounded-full border border-white/10 p-2.5 text-smoke transition-colors hover:border-accent hover:text-accent"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Horário
          </p>
          <ul className="space-y-2 text-sm text-smoke">
            {business.hours.map((slot) => (
              <li key={slot.label} className="flex justify-between gap-6">
                <span>{slot.label}</span>
                <span className="text-white">
                  {slot.opens}–{slot.closes}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Contacto
          </p>
          <ul className="space-y-2 text-sm text-smoke">
            <li>
              <a
                href={`tel:${business.phone.e164}`}
                className="transition-colors hover:text-accent"
              >
                {business.phone.display}
              </a>
            </li>
            <li>
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Ver no Google Maps
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-white/5 px-6 pt-6 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>
          © {new Date().getFullYear()} {business.name}® — marca registada.
          Todos os direitos reservados.
        </span>
        <span className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            href="/privacidade"
            className="transition-colors hover:text-accent"
          >
            Política de Privacidade
          </a>
          <a
            href="https://www.livroreclamacoes.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            Livro de Reclamações
          </a>
        </span>
      </div>
    </footer>
  );
}
