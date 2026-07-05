import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

/** "01-treino-funcional.jpg" → "Treino funcional" */
export function captionFromFilename(file: string) {
  const base = file
    .replace(/\.[^.]+$/, "")
    .replace(/^\d+[-_]?/, "")
    .replace(/[-_]+/g, " ")
    .trim();
  return base.charAt(0).toUpperCase() + base.slice(1);
}

export function listImages(dir: string) {
  try {
    return fs
      .readdirSync(dir)
      .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort();
  } catch {
    return [];
  }
}

/**
 * Galeria de fotos em bento grid: a primeira imagem em destaque 2×2 (em lg),
 * as restantes 1×1, com legenda derivada do nome do ficheiro.
 * Basta colocar imagens em `public/gallery/` — sem fotos, a secção oculta-se.
 */
export function Gallery() {
  const images = listImages(GALLERY_DIR);

  if (images.length === 0) return null;

  return (
    <section id="galeria" className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Galeria"
          title="O nosso espaço, a nossa equipa"
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {images.map((file, i) => {
            const featured = i === 0;
            return (
              <Reveal
                key={file}
                delay={(i % 3) * 0.06}
                className={featured ? "lg:col-span-2 lg:row-span-2" : ""}
              >
                <div className="card-hover group relative h-full min-h-full overflow-hidden rounded-2xl border border-white/5 hover:border-accent/40">
                  <div className={`relative w-full ${featured ? "aspect-square lg:h-full lg:aspect-auto" : "aspect-square"}`}>
                    <Image
                      src={`/gallery/${file}`}
                      alt={`Go to Gym — ${captionFromFilename(file)}`}
                      fill
                      sizes={
                        featured
                          ? "(max-width: 1024px) 100vw, 66vw"
                          : "(max-width: 640px) 50vw, 33vw"
                      }
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-3 pt-10">
                    <p className="font-display text-sm uppercase tracking-widest text-white">
                      {captionFromFilename(file)}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
