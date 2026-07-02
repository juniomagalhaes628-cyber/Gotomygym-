"use client";

import { useEffect, useRef } from "react";
import { business } from "@/lib/business";
import { LazyMount } from "@/components/LazyMount";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { FacebookIcon } from "@/components/icons";

declare global {
  interface Window {
    FB?: {
      XFBML: { parse: (element?: HTMLElement) => void };
    };
  }
}

const FB_SDK_SRC =
  "https://connect.facebook.net/pt_PT/sdk.js#xfbml=1&version=v19.0";
const FB_SDK_ID = "facebook-jssdk";

/**
 * Facebook Page Plugin oficial (XFBML + SDK), a mostrar o timeline real
 * da página — puxa sempre os posts atuais, sem manutenção manual.
 *
 * O SDK só é injetado quando a secção se aproxima do viewport (via
 * LazyMount), por isso não bloqueia o render inicial nem afeta o LCP.
 */
function FacebookPagePlugin() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // <div id="fb-root"> exigido pelo SDK oficial
    if (!document.getElementById("fb-root")) {
      const fbRoot = document.createElement("div");
      fbRoot.id = "fb-root";
      document.body.appendChild(fbRoot);
    }

    if (document.getElementById(FB_SDK_ID)) {
      // SDK já carregado (ex.: remount) — basta reprocessar o XFBML
      window.FB?.XFBML.parse(containerRef.current ?? undefined);
      return;
    }

    const script = document.createElement("script");
    script.id = FB_SDK_ID;
    script.src = FB_SDK_SRC;
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
  }, []);

  return (
    <div ref={containerRef} className="flex justify-center">
      <div
        className="fb-page"
        data-href={business.social.facebook}
        data-tabs="timeline"
        data-width="500"
        data-height="700"
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="true"
        data-show-facepile="false"
      >
        <blockquote
          cite={business.social.facebook}
          className="fb-xfbml-parameter"
        >
          <a href={business.social.facebook}>{business.name}</a>
        </blockquote>
      </div>
    </div>
  );
}

export function FacebookFeed() {
  return (
    <section id="novidades" className="bg-ink py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Novidades"
          title="Segue-nos no Facebook"
          subtitle="Aulas, eventos e novidades — publicado diretamente pela nossa equipa."
        />

        <Reveal>
          <div className="mx-auto max-w-lg rounded-2xl border border-white/5 bg-carbon p-4 sm:p-6">
            <LazyMount
              placeholder={
                <div className="flex h-[700px] items-center justify-center text-sm text-zinc-500">
                  A carregar as novidades do Facebook…
                </div>
              }
            >
              <FacebookPagePlugin />
            </LazyMount>
          </div>

          <p className="mt-6 text-center">
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              <FacebookIcon className="h-4 w-4" />
              Ver a página completa no Facebook
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
