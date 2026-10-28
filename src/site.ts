export const SITE = {
  url: 'https://cesmetekneleri.com',
  name: 'Çeşme Tekneleri',
  boat: 'Poseidon',
  founded: 1988,
  // Adalar ve Koylar turu Eco yetişkin fiyatı (cesmetekneturu.net ile aynı)
  price: 2000,
  currency: 'TRY',
  hotelTransfer: 500,
  phone: '+90 533 417 36 56',
  phoneHref: '+905334173656',
  phone2: '+90 532 153 28 14',
  phone2Href: '+905321532814',
  whatsapp: '905334173656',
  email: 'turkeycesme@hotmail.com',
  hours: { open: '08:00', close: '23:00' },
  address: {
    street: '16 Eylül Mah. 3053 Sk., Çeşme Yat Limanı',
    city: 'Çeşme',
    region: 'İzmir',
    postal: '35930',
    country: 'TR',
  },
  geo: { lat: 38.3228, lng: 26.3036 },
  mapsQuery: 'Çeşme Yat Limanı, Çeşme, İzmir',
};

export const waLink = (text?: string) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const LANGS = ['tr', 'en', 'de', 'fr'] as const;
export type Lang = (typeof LANGS)[number];

// intl: sayı/tarih biçimi · og: Open Graph · booking: cesmetekneturu.net dil öneki (FR yok → EN)
export const LOCALE: Record<Lang, { intl: string; og: string; name: string; short: string; booking: string }> = {
  tr: { intl: 'tr-TR', og: 'tr_TR', name: 'Türkçe', short: 'TR', booking: '' },
  en: { intl: 'en-GB', og: 'en_GB', name: 'English', short: 'EN', booking: '/en' },
  de: { intl: 'de-DE', og: 'de_DE', name: 'Deutsch', short: 'DE', booking: '/de' },
  fr: { intl: 'fr-FR', og: 'fr_FR', name: 'Français', short: 'FR', booking: '/en' },
};

// Her sayfanın iki dildeki yolu — hreflang, sitemap ve dil değiştirici buradan beslenir.
// İlk dört satır eski sitenin URL'leri; değiştirilmemeli.
export const ROUTES = {
  home: { tr: '/', fr: '/fr', en: '/en', de: '/de' },
  tour: { tr: '/cesme-tekne-turu', fr: '/fr/cesme-tekne-turu', en: '/en/cesme-boat-trip', de: '/de/cesme-bootstour' },
  about: { tr: '/hakkimizda', fr: '/fr/hakkimizda', en: '/en/about-us', de: '/de/ueber-uns' },
  contact: { tr: '/iletisim', fr: '/fr/iletisim', en: '/en/contact', de: '/de/kontakt' },
  tours: { tr: '/turlar', fr: '/fr/excursions', en: '/en/boat-tours', de: '/de/bootstouren' },
  tourIzmir: { tr: '/izmir-cikisli-cesme-tekne-turu', fr: '/fr/excursion-bateau-cesme-depuis-izmir', en: '/en/cesme-boat-trip-from-izmir', de: '/de/cesme-bootstour-ab-izmir' },
  tourSunset: { tr: '/cesme-gun-batimi-turu', fr: '/fr/croisiere-coucher-de-soleil-cesme', en: '/en/cesme-sunset-cruise', de: '/de/cesme-sonnenuntergang-bootstour' },
  tourDive: { tr: '/cesme-tuplu-dalis-turu', fr: '/fr/plongee-snorkeling-cesme', en: '/en/cesme-scuba-diving-snorkeling', de: '/de/cesme-tauchen-schnorcheln' },
  faq: { tr: '/sik-sorulan-sorular', fr: '/fr/questions-frequentes', en: '/en/faq', de: '/de/haeufige-fragen' },
} as const;

export type RouteKey = keyof typeof ROUTES;

export const fmtPrice = (n: number, lang: Lang) => new Intl.NumberFormat(LOCALE[lang].intl).format(n) + ' TL';
export const fmtNum = (n: number, lang: Lang) => new Intl.NumberFormat(LOCALE[lang].intl).format(n);
