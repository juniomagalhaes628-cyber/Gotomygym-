import { business } from "@/lib/business";

/**
 * JSON-LD schema.org ExerciseGym (subtipo de LocalBusiness)
 * https://schema.org/ExerciseGym
 */
export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    "@id": `${business.siteUrl}/#gym`,
    name: business.name,
    description: business.description,
    url: business.siteUrl,
    telephone: business.phone.e164,
    image: `${business.siteUrl}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      postalCode: business.address.postalCode,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    hasMap: business.googleMapsUrl,
    sameAs: [business.social.facebook],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating.value,
      bestRating: business.rating.scale,
    },
    openingHoursSpecification: business.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...h.days],
      opens: h.opens,
      closes: h.closes,
    })),
    priceRange: "€€",
  };
}
