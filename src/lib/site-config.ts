/**
 * Single source of truth for foundation-level facts.
 * Update here; every page/schema/component reads from this file.
 */

export const siteConfig = {
  name: 'Jan Cosmic Foundation',
  shortName: 'JCF',
  url: 'https://www.jancosmicfoundation.org',
  founded: '2021',

  // Headline numbers — keep these honest
  stats: {
    yearsTeaching: '5+',
    centres: '8+',
    lives: '4,000+',
    countries: '9+',
  },

  contact: {
    email: 'info@jancosmicfoundation.org',
    phone: '+233 55 059 0054',
    phoneE164: '+233550590054',
  },

  // Headquarters — Franko Estate, Kwabenya, Accra, Ghana
  address: {
    streetAddress: 'Franko Estate',
    locality: 'Kwabenya',
    region: 'Greater Accra',
    country: 'GH',
    countryName: 'Ghana',
    coordinates: {
      lat: 5.6832844,
      lng: -0.2653119,
    },
  },

  // Official profiles and community invitations supplied by the Foundation.
  social: {
    facebook: 'https://www.facebook.com/jancosmicfoundation',
    instagram: 'https://www.instagram.com/jancosmicfoundation',
    youtube: 'https://www.youtube.com/@jancosmicfoundation',
    x: 'https://x.com/jancosmicfoundation',
    telegramGroup: 'https://t.me/+OZa023K6Pj4yOTdk',
    whatsappCommunity: 'https://chat.whatsapp.com/Cb70KgYryHz0p83eIlOOJs',
  },
} as const;

/** Convenient flat list of social URLs for Organization JSON-LD `sameAs`. */
export const socialUrlsForSchema: string[] = [
  siteConfig.social.facebook,
  siteConfig.social.instagram,
  siteConfig.social.youtube,
  siteConfig.social.x,
];

/** Google Maps embed URL for the headquarters — no API key required. */
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${siteConfig.address.coordinates.lat},${siteConfig.address.coordinates.lng}&hl=en&z=16&output=embed`;

/** Direct link to Google Maps for the headquarters. */
export const mapsDirectUrl = `https://www.google.com/maps?q=${siteConfig.address.coordinates.lat},${siteConfig.address.coordinates.lng}`;
