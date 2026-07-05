import { faqs } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

/**
 * FAQ em <details>/<summary> nativos — acessível, sem JavaScript extra.
 * As perguntas vêm de lib/content.ts e alimentam também o schema FAQPage.
 */
export function Faq() {
  return (
    <section id="faq" className="cv-auto bg-ink py-24">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Dúvidas? Nós respondemos"
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 0.05}>
              <details className="group rounded-2xl border border-white/5 bg-carbon open:border-accent/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center border border-accent/40 text-xl leading-none text-accent transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-sm leading-relaxed text-smoke">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
