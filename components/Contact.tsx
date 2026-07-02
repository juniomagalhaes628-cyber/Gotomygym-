"use client";

import { useState, type FormEvent } from "react";
import { business, whatsappUrl } from "@/lib/business";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

/**
 * Form simples sem backend: compõe a mensagem e abre o WhatsApp do ginásio.
 * Para ligar a um serviço de email (ex.: Formspree/Resend), troca o
 * handleSubmit por um POST para o endpoint respetivo.
 */
export function Contact() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const text = [
      `Olá! Sou ${name}.`,
      contact ? `Contacto: ${contact}` : null,
      message,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
  };

  const inputClasses =
    "w-full rounded-xl border border-white/10 bg-steel/60 px-4 py-3.5 text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-accent";

  return (
    <section id="contactos" className="bg-carbon py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Contactos"
          title="Fala connosco"
          subtitle="Dúvidas, preços ou marcações — respondemos rápido."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-4">
              <a
                href={`tel:${business.phone.e164}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-steel/60 p-6 transition-colors hover:border-accent/40"
              >
                <span className="rounded-xl bg-accent/10 p-3 text-accent">
                  <PhoneIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm text-smoke">Liga-nos</span>
                  <span className="block font-display text-xl tracking-wide text-white group-hover:text-accent">
                    {business.phone.display}
                  </span>
                </span>
              </a>

              <a
                href={whatsappUrl(`Olá! Gostava de saber mais sobre o ${business.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-steel/60 p-6 transition-colors hover:border-accent/40"
              >
                <span className="rounded-xl bg-accent/10 p-3 text-accent">
                  <WhatsAppIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm text-smoke">WhatsApp</span>
                  <span className="block font-display text-xl tracking-wide text-white group-hover:text-accent">
                    Envia mensagem
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-steel/60 p-6">
                <span className="rounded-xl bg-accent/10 p-3 text-accent">
                  <MapPinIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm text-smoke">Morada</span>
                  <span className="block font-semibold text-white">
                    {business.address.full}
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col gap-4 rounded-2xl border border-white/5 bg-steel/60 p-6 sm:p-8"
            >
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-smoke">
                  Nome
                </span>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="O teu nome"
                  className={inputClasses}
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-medium text-smoke">
                  Telefone ou email
                </span>
                <input
                  type="text"
                  autoComplete="tel"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Para te podermos responder"
                  className={inputClasses}
                />
              </label>

              <label className="block flex-1">
                <span className="mb-1.5 block text-sm font-medium text-smoke">
                  Mensagem
                </span>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ex.: Quero marcar uma aula experimental…"
                  className={`${inputClasses} resize-none`}
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-semibold text-ink transition-colors hover:bg-accent-strong"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Enviar por WhatsApp
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
