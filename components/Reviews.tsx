import { business } from "@/lib/business";
import { reviews } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StarIcon } from "@/components/icons";

export function Reviews() {
  return (
    <section id="avaliacoes" className="bg-carbon py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Avaliações"
          title="Quem treina connosco recomenda"
          subtitle={`${business.rating.value.toString().replace(".", ",")}★ no Google — avaliações reais da nossa comunidade.`}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={(i % 3) * 0.08}>
              <figure className="card-hover flex h-full flex-col rounded-2xl border border-white/5 bg-steel/60 p-7 hover:border-accent/30">
                <div
                  role="img"
                  className="mb-4 flex gap-1 text-accent"
                  aria-label="5 estrelas"
                >
                  {Array.from({ length: 5 }).map((_, star) => (
                    <StarIcon
                      key={star}
                      className="h-4 w-4 fill-accent stroke-accent"
                    />
                  ))}
                </div>
                <blockquote className="flex-1 text-sm leading-relaxed text-zinc-300">
                  “{review.text}”
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-semibold text-white">{review.name}</span>
                  <span className="block text-xs text-zinc-500">
                    Avaliação no Google{review.meta ? ` · ${review.meta}` : ""}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <a
            href={business.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent hover:underline"
          >
            Ver todas as avaliações no Google →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
