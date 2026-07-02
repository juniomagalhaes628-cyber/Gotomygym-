import { gymClasses, type GymClass } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  BikeIcon,
  DumbbellIcon,
  FlameIcon,
  HeartPulseIcon,
  StarIcon,
  UsersIcon,
} from "@/components/icons";

const ICONS: Record<GymClass["icon"], typeof DumbbellIcon> = {
  dumbbell: DumbbellIcon,
  heart: HeartPulseIcon,
  bike: BikeIcon,
  flame: FlameIcon,
  users: UsersIcon,
  star: StarIcon,
};

export function Classes() {
  return (
    <section id="aulas" className="bg-carbon py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Aulas & Modalidades"
          title="Encontra o teu treino"
          subtitle="Do primeiro treino ao próximo recorde pessoal — há um plano para ti."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gymClasses.map((gymClass, i) => {
            const Icon = ICONS[gymClass.icon];
            return (
              <Reveal key={gymClass.name} delay={(i % 3) * 0.08}>
                <article className="card-hover group h-full rounded-2xl border border-white/5 bg-steel/60 p-7 hover:border-accent/40">
                  <div className="mb-5 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl uppercase tracking-wide text-white">
                    {gymClass.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-smoke">
                    {gymClass.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
