import type { APIRoute } from 'astro';
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import { LANGS, ROUTES, SITE, type RouteKey } from '../site';
import { TOURS } from '../data/tours';

const photos = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });
const photo = (n: string) => photos[`../assets/photos/${n}.jpg`].default;

// Her URL tüm dil karşılıklarıyla (hreflang) ve sayfanın ana görselleriyle listelenir.
const PAGE_IMAGES: Partial<Record<RouteKey, string[]>> = {
  home: ['cesme-koy-tekne-adalar', 'first-class-bungalov', 'ust-guverte-sezlong'],
  about: ['cesme-tekne-turu-koy', 'cesme-tur-teknesi-seyir', 'poseidon-eski-tekne'],
  tours: ['koy-adalar-genis'],
  contact: ['cesme-tur-teknesi-seyir'],
};
for (const t of TOURS) PAGE_IMAGES[t.key] = [t.image, ...t.gallery.slice(0, 4)];

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

export const GET: APIRoute = async () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const abs = (p: string) => new URL(p, SITE.url).href;
  const imgCache = new Map<string, string>();
  const imgUrl = async (n: string) => {
    if (!imgCache.has(n)) imgCache.set(n, abs((await getImage({ src: photo(n), width: 1600, format: 'jpg' })).src));
    return imgCache.get(n)!;
  };
  const urls: string[] = [];
  for (const [key, r] of Object.entries(ROUTES) as [RouteKey, Record<string, string>][]) {
    const imgs = await Promise.all((PAGE_IMAGES[key] ?? []).map(imgUrl));
    for (const lang of LANGS) {
      const alts = LANGS.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${abs(r[l])}"/>`).join('') + `<xhtml:link rel="alternate" hreflang="x-default" href="${abs(r.tr)}"/>`;
      const im = imgs.map((u) => `<image:image><image:loc>${esc(u)}</image:loc></image:image>`).join('');
      const priority = key === 'home' ? '1.0' : key.startsWith('tour') ? '0.9' : key === 'faq' ? '0.7' : '0.6';
      const freq = key === 'home' || key.startsWith('tour') ? 'weekly' : 'monthly';
      urls.push(`<url><loc>${abs(r[lang])}</loc>${alts}${im}<lastmod>${lastmod}</lastmod><changefreq>${freq}</changefreq><priority>${priority}</priority></url>`);
    }
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${urls.join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
