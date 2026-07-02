import type { NextConfig } from "next";

/**
 * Content-Security-Policy: só permite recursos do próprio site e os dois
 * embeds legítimos (SDK do Facebook e Google Maps). Qualquer script
 * injetado de outra origem é bloqueado pelo browser — proteção direta
 * contra o tipo de infeção que afetou o site antigo.
 *
 * 'unsafe-inline' em script-src é necessário para os scripts de arranque
 * que o Next.js embute nas páginas estáticas e para o JSON-LD.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://connect.facebook.net",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://*.facebook.com https://*.fbcdn.net",
  "font-src 'self' data:",
  "connect-src 'self' https://*.facebook.com https://connect.facebook.net",
  "frame-src https://www.facebook.com https://web.facebook.com https://maps.google.com https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  // impede o browser de "adivinhar" tipos de ficheiro (bloqueia MIME sniffing)
  { key: "X-Content-Type-Options", value: "nosniff" },
  // impede que o site seja embebido em iframes de terceiros (clickjacking)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // não envia o URL completo a sites externos
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // desativa APIs sensíveis do browser que o site não usa
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // força HTTPS durante 2 anos (o alojamento deve servir sempre por HTTPS)
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
