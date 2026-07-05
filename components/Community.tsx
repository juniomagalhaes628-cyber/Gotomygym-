import Image from "next/image";
import path from "node:path";
import { captionFromFilename, listImages } from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const COMMUNITY_DIR = path.join(process.cwd(), "public", "community");

/**
 * A vida do ginásio além do treino: eventos, corridas, atividades para
 * famílias. Tira horizontal com scroll-snap; as fotos vêm de
 * `public/community/` (nomes `NN-legenda.jpg` dão a ordem e a legenda).
 * Sem fotos na pasta, a secção não aparece.
 */
export function Community() {
  const images = listImages(COMMUNITY_DIR);

  if (images.length === 0) return null;

  return (
    <section id="comunidade" className="overflow-hidden bg-carbon py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Comunidade"
          title="Mais do que treino, uma equipa"
          subtitle="Corridas, eventos e atividades para toda a família — é assim que se vive o Go to Gym fora da sala de treino."
        />
      </div>

      <Reveal>
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 sm:px-8 lg:px-[max(2rem,calc((100vw-72rem)/2))]">
          {images.map((file, i) => (
            <figure
              key={file}
              className={`card-hover w-72 shrink-0 snap-center rounded-2xl border border-white/5 bg-steel/60 p-3 hover:border-accent/40 sm:w-80 ${
                i % 2 === 0 ? "rotate-1" : "-rotate-1"
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={`/community/${file}`}
                  alt={`Go to Gym — ${captionFromFilename(file)}`}
                  fill
                  sizes="(max-width: 640px) 288px, 320px"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-2 py-3 text-sm font-semibold text-white">
                {captionFromFilename(file)}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-2 text-center text-xs uppercase tracking-[0.25em] text-zinc-500">
          Desliza para ver mais →
        </p>
      </Reveal>
    </section>
  );
}
