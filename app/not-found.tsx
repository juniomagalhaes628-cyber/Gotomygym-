import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 bg-ink px-6 text-center">
      <LogoMark className="h-24 w-24" />
      <h1 className="font-display text-5xl uppercase tracking-wide text-white sm:text-6xl">
        4<span className="text-accent">0</span>4
      </h1>
      <p className="max-w-sm text-smoke">
        Esta página não existe — mas o treino continua. Volta ao início e
        encontra o que procuras.
      </p>
      <Link
        href="/"
        className="rounded-full bg-accent px-7 py-4 font-semibold text-ink transition-colors hover:bg-accent-strong"
      >
        Voltar ao início
      </Link>
    </main>
  );
}
