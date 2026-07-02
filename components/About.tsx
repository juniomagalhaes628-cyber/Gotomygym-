import { aboutText } from "@/lib/content";
import { business } from "@/lib/business";
import { Reveal } from "@/components/Reveal";

const stats = [
  { value: "4,8★", label: "Classificação Google" },
  { value: "7h–22h", label: "Aberto todos os dias úteis" },
  { value: "100%", label: "Acompanhamento local" },
];

export function About() {
  return (
    <section id="sobre" className="bg-ink py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Sobre nós
          </p>
          <h2 className="font-display text-3xl uppercase tracking-wide text-white sm:text-4xl md:text-5xl">
            {aboutText.title}
          </h2>
          <div className="mt-6 space-y-4 text-smoke">
            {aboutText.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            {business.address.full}
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="rounded-2xl border border-white/5 bg-carbon p-6">
                <p className="font-display text-4xl text-accent">{stat.value}</p>
                <p className="mt-2 text-sm text-smoke">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
