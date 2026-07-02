/**
 * Dados centrais do negócio — edita AQUI para atualizar o site inteiro.
 * (nome, morada, telefone, horários, redes sociais, coordenadas)
 */

export const business = {
  name: "Go to Gym",
  tagline: "O teu ginásio em Penafiel",
  claim: "Treina mais forte. Vive melhor.",
  description:
    "Ginásio independente em Penafiel com acompanhamento próximo, equipamento moderno e aulas para todos os níveis. Marca a tua aula experimental gratuita.",

  // URL pública do site — trocar quando o domínio final estiver definido
  siteUrl: "https://www.gotogym.pt",

  phone: {
    display: "916 337 461",
    e164: "+351916337461",
    whatsapp: "351916337461", // sem "+" para links wa.me
  },

  address: {
    street: "Avenida Central de Portela, n.º 77",
    postalCode: "4575-398",
    city: "Penafiel",
    region: "Porto",
    country: "PT",
    full: "Avenida Central de Portela 77, 4575-398 Penafiel",
    landmark: "junto às Termas de São Vicente",
  },

  // Coordenadas do código postal 4575-398 (Avenida Central de Portela).
  // Para afinar ao metro: no Google Maps, clica com o botão direito sobre
  // o ginásio e copia as coordenadas para aqui — o mapa e o SEO atualizam.
  geo: {
    lat: 41.105192,
    lng: -8.26699,
  },

  googlePlaceId: "ChIJB01gZ7ObJA0RB8TlBxz4xKM",
  googleMapsUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJB01gZ7ObJA0RB8TlBxz4xKM",

  rating: {
    value: 4.8,
    scale: 5,
    count: 28, // nº de avaliações no Google — atualizar de vez em quando
  },

  social: {
    facebook: "https://www.facebook.com/gotogymfitness/",
    instagram: "https://www.instagram.com/gotogymfitness/",
  },

  partners: {
    urbanSportsClub:
      "https://urbansportsclub.com/pt/venues/go-to-gym-termas-so-vicente-penafiel",
  },

  // Marca nacional registada n.º 701486 (Go to Gym, Unipessoal Lda)
  legalName: "Go to Gym, Unipessoal Lda",

  /**
   * Horários de funcionamento.
   * `days` usa os códigos schema.org (Monday...Sunday) para o JSON-LD.
   */
  hours: [
    {
      label: "Segunda a Sexta",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "22:00",
    },
    {
      label: "Sábado",
      days: ["Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      label: "Domingo",
      days: ["Sunday"],
      opens: "08:00",
      closes: "12:00",
    },
  ],
} as const;

/** Link "Como chegar" — abre direções no Google Maps (usa o place_id oficial). */
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${business.name}, ${business.address.full}`
)}&destination_place_id=${business.googlePlaceId}`;

/**
 * Embed do mapa (não requer chave de API).
 * Usa as coordenadas exatas de `business.geo` — ao contrário da pesquisa
 * por nome, o pin nunca aparece no sítio errado.
 */
export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.geo.lat},${business.geo.lng}(${encodeURIComponent(
  business.name
)})&z=17&hl=pt-PT&output=embed`;

/** Link direto para conversa de WhatsApp. */
export const whatsappUrl = (message?: string) =>
  `https://wa.me/${business.phone.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
