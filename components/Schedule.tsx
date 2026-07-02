import { business } from "@/lib/business";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ClockIcon } from "@/components/icons";

export function Schedule() {
  return (
    <section id="horarios" className="bg-ink py-24">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Horários"
          title="Sempre a horas de treinar"
          subtitle="Abrimos cedo e fechamos tarde para caber na tua rotina."
        />

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-white/5 bg-carbon">
            <table className="w-full text-left">
              <caption className="sr-only">
                Horário de funcionamento do {business.name}
              </caption>
              <tbody>
                {business.hours.map((slot) => (
                  <tr
                    key={slot.label}
                    className="border-b border-white/5 last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="flex items-center gap-3 px-6 py-5 font-semibold text-white"
                    >
                      <ClockIcon className="h-5 w-5 shrink-0 text-accent" />
                      {slot.label}
                    </th>
                    <td className="px-6 py-5 text-right font-display text-lg tracking-wider text-accent">
                      {slot.opens}
                      <span className="px-2 text-zinc-500">—</span>
                      {slot.closes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm text-zinc-500">
            Feriados podem ter horário reduzido — confirma pelo{" "}
            <a
              href={`tel:${business.phone.e164}`}
              className="text-accent hover:underline"
            >
              {business.phone.display}
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
