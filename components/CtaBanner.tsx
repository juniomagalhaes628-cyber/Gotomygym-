import { business, whatsappUrl } from "@/lib/business";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";

/**
 * Banner de conversão antes dos contactos — usa o slogan das campanhas
 * do ginásio.
 */
export function CtaBanner() {
  return (
    <section className="bg-accent py-20">
      <div className="mx-auto max-w-6xl px-6 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-wide text-ink sm:text-6xl md:text-7xl">
            Disciplina
            <br />
            transforma.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg font-medium text-ink/70">
            O teu limite é apenas o começo. A primeira aula é por nossa conta.
          </p>
          <a
            href={whatsappUrl(
              `Olá! Gostava de marcar uma aula experimental no ${business.name}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Marca a tua aula experimental
            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
