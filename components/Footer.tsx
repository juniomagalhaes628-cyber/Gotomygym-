import { business } from "@/lib/business";
import { FacebookIcon, PhoneIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl uppercase tracking-wide text-white">
            Go <span className="text-accent">to</span> Gym
          </p>
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

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/5 px-6 pt-6 text-sm text-zinc-500 sm:px-8">
        © {new Date().getFullYear()} {business.name}. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
