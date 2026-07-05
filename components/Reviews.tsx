import { business } from "@/lib/business";
import { reviews, type Review } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StarIcon } from "@/components/icons";

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full w-80 shrink-0 flex-col rounded-2xl border border-white/5 bg-steel/60 p-7 sm:w-96">
      <div role="img" className="mb-4 flex gap-1 text-accent" aria-label="5 estrelas">
        {Array.from({ length: 5 }).map((_, star) => (
          <StarIcon key={star} className="h-4 w-4 fill-accent stroke-accent" />
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
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: Review[];
  reverse?: boolean;
}) {
  return (
    <div className="marquee overflow-hidden">
      <div
        className="marquee-track flex w-max gap-5 pr-5"
        data-direction={reverse ? "reverse" : undefined}
      >
        {items.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
        {/* cópia para o loop contínuo — escondida de leitores de ecrã */}
        <div aria-hidden="true" className="flex gap-5">
          {items.map((review) => (
            <ReviewCard key={`dup-${review.name}`} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Avaliações em duas filas de scroll contínuo (direções opostas),
 * pausa ao passar o rato. Com prefers-reduced-motion, as filas ficam
 * estáticas e com scroll horizontal manual (ver globals.css).
 */
export function Reviews() {
  const half = Math.ceil(reviews.length / 2);
  const rowA = reviews.slice(0, half);
  const rowB = reviews.slice(half);

  return (
    <section id="avaliacoes" className="cv-auto overflow-hidden bg-carbon py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Avaliações"
          title="Quem treina connosco recomenda"
          subtitle={`${business.rating.value.toString().replace(".", ",")}★ no Google — avaliações reais da nossa comunidade.`}
        />
      </div>

      <Reveal>
        <div className="space-y-5">
          <MarqueeRow items={rowA} />
          {rowB.length > 0 ? <MarqueeRow items={rowB} reverse /> : null}
        </div>
      </Reveal>

      <Reveal className="mt-10 text-center">
        <a
          href={business.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-accent hover:underline"
        >
          Ver todas as avaliações no Google →
        </a>
      </Reveal>
    </section>
  );
}
