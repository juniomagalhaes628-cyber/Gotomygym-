import { business, directionsUrl, mapEmbedUrl } from "@/lib/business";
import { ConsentEmbed } from "@/components/ConsentEmbed";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { MapPinIcon } from "@/components/icons";

export function Location() {
  return (
    <section id="localizacao" className="cv-auto bg-carbon py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Localização"
          title="Onde nos encontras"
          subtitle={`Estamos na Avenida Central de Portela, ${business.address.landmark}, com estacionamento fácil.`}
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-stretch">
          <Reveal className="flex">
            <div className="flex w-full flex-col justify-between rounded-2xl border border-white/5 bg-steel/60 p-8">
              <div>
                <div className="mb-5 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                  <MapPinIcon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl uppercase tracking-wide text-white">
                  {business.name}
                </h3>
                <address className="mt-4 not-italic leading-relaxed text-smoke">
                  {business.address.street}
                  <br />
                  {business.address.postalCode} {business.address.city}
                  <br />
                  Portugal
                </address>
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-accent-strong"
              >
                Como chegar
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ConsentEmbed
              service="Google Maps"
              buttonLabel="Mostrar mapa"
              note="Ao carregar, ligas-te aos servidores do {service}, que pode colocar cookies. Em alternativa usa o botão «Como chegar»."
              icon={<MapPinIcon className="h-10 w-10" />}
              className="h-full min-h-80 rounded-2xl border border-white/5 bg-steel/60"
            >
              <iframe
                src={mapEmbedUrl}
                title={`Mapa — ${business.name}, ${business.address.full}`}
                className="h-full min-h-80 w-full rounded-2xl border-0 grayscale-[35%] contrast-[1.05]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </ConsentEmbed>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
