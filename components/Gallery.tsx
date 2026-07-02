import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

/**
 * Galeria de fotos do ginásio.
 * Basta colocar as imagens em `public/gallery/` (jpg/png/webp) — são
 * detetadas no build, por ordem alfabética. Sem fotos, a secção não aparece.
 */
export function Gallery() {
  let images: string[] = [];
  try {
    images = fs
      .readdirSync(GALLERY_DIR)
      .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
      .sort();
  } catch {
    // pasta ainda não existe — secção fica oculta
  }

  if (images.length === 0) return null;

  return (
    <section id="galeria" className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Galeria"
          title="O nosso espaço, a nossa equipa"
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {images.map((file, i) => (
            <Reveal key={file} delay={(i % 3) * 0.06}>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/5">
                <Image
                  src={`/gallery/${file}`}
                  alt={`Go to Gym — fotografia ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
