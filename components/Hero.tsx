"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { business, whatsappUrl } from "@/lib/business";
import { ArrowRightIcon, StarIcon } from "@/components/icons";

// O canvas WebGL só carrega no cliente, depois do primeiro paint —
// o texto do hero (LCP) renderiza imediatamente sem esperar pelo shader.
const HeroBackground = dynamic(() => import("@/components/HeroBackground"), {
  ssr: false,
});

const TRIAL_MESSAGE = `Olá! Gostava de marcar uma aula experimental no ${business.name}.`;

export function Hero() {
  const reduced = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  });

  return (
    <section id="inicio" className="relative flex min-h-svh items-center overflow-hidden bg-ink">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-20 sm:px-8">
        <motion.p
          {...fadeUp(0.05)}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-smoke backdrop-blur"
        >
          <StarIcon className="h-4 w-4 fill-accent stroke-accent" />
          {business.rating.value.toString().replace(".", ",")}★ pela comunidade ·{" "}
          {business.address.city}
        </motion.p>

        <motion.h1
          {...fadeUp(0.12)}
          className="font-display text-6xl uppercase leading-[0.95] tracking-wide text-white sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Go <span className="text-accent">to</span> Gym
        </motion.h1>

        <motion.p
          {...fadeUp(0.22)}
          className="mt-6 max-w-xl text-lg text-zinc-300 sm:text-xl"
        >
          {business.claim} O teu ginásio em Portela, Penafiel — treino a sério,
          ambiente de família.
        </motion.p>

        <motion.div {...fadeUp(0.32)} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={whatsappUrl(TRIAL_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-ink transition-colors hover:bg-accent-strong"
          >
            Marca uma aula experimental
            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#aulas"
            className="inline-flex items-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition-colors hover:border-accent hover:text-accent"
          >
            Ver modalidades
          </a>
        </motion.div>
      </div>

      {/* fade suave para a secção seguinte */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
    </section>
  );
}
