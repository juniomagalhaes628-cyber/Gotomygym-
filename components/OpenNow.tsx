"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/business";

const DAY_ORDER = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

const DAY_NAMES_PT: Record<string, string> = {
  Monday: "segunda",
  Tuesday: "terça",
  Wednesday: "quarta",
  Thursday: "quinta",
  Friday: "sexta",
  Saturday: "sábado",
  Sunday: "domingo",
};

function slotFor(day: string) {
  return business.hours.find((h) => (h.days as readonly string[]).includes(day));
}

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

/** Estado atual (hora de Lisboa): aberto até X / abre hoje·amanhã·dia às X. */
function computeStatus() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Lisbon",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Monday";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const now = hour * 60 + minute;

  const today = slotFor(weekday);
  if (today && now >= toMinutes(today.opens) && now < toMinutes(today.closes)) {
    return { open: true, label: `Aberto agora — fecha às ${today.closes}` };
  }
  if (today && now < toMinutes(today.opens)) {
    return { open: false, label: `Fechado — abre hoje às ${today.opens}` };
  }

  // próxima abertura nos dias seguintes
  const todayIndex = DAY_ORDER.indexOf(weekday as (typeof DAY_ORDER)[number]);
  for (let offset = 1; offset <= 7; offset++) {
    const day = DAY_ORDER[(todayIndex + offset) % 7];
    const slot = slotFor(day);
    if (slot) {
      const when = offset === 1 ? "amanhã" : `${DAY_NAMES_PT[day]}-feira`.replace("sábado-feira", "sábado").replace("domingo-feira", "domingo");
      return { open: false, label: `Fechado — abre ${when} às ${slot.opens}` };
    }
  }
  return { open: false, label: "Fechado" };
}

export function OpenNow() {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(
    null
  );

  useEffect(() => {
    setStatus(computeStatus());
    const interval = setInterval(() => setStatus(computeStatus()), 60_000);
    return () => clearInterval(interval);
  }, []);

  if (!status) {
    return <span className="inline-block h-8" aria-hidden="true" />;
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-carbon px-4 py-1.5 text-sm font-medium text-zinc-300">
      <span
        aria-hidden="true"
        className={`h-2.5 w-2.5 rounded-full ${
          status.open ? "bg-accent" : "bg-zinc-600"
        }`}
      />
      {status.label}
    </span>
  );
}

/** Devolve true se o dia (nome schema.org) é o dia atual em Lisboa. */
export function useIsToday() {
  const [weekday, setWeekday] = useState<string | null>(null);

  useEffect(() => {
    setWeekday(
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Lisbon",
        weekday: "long",
      }).format(new Date())
    );
  }, []);

  return (day: readonly string[]) => weekday !== null && day.includes(weekday);
}
