import type { APIRoute } from 'astro';
import { LANGS, LOCALE, ROUTES, SITE, fmtPrice } from '../site';
import { TOURS } from '../data/tours';
import { RATING } from '../i18n/sections';
import { faqCategories } from '../data/faq';

// Yapay zekâ asistanları için özet (https://llmstxt.org). Tur verilerinden her derlemede üretilir.
export const GET: APIRoute = () => {
  const abs = (p: string) => new URL(p, SITE.url).href;
  const lines: string[] = [];
  lines.push('# Çeşme Tekneleri – Poseidon Çeşme', '');
  lines.push(
    `> Çeşme (İzmir, Türkiye) merkezli günlük tekne turları. 1988'den beri denizcilik; Çeşme'nin en yeni tur teknesi Poseidon 2 (40 m, 3 güverte, Eco / Premium / First Class). Google puanı ${RATING.value}/5 (${RATING.count}+ değerlendirme). Online rezervasyon ve ödeme resmi site cesmetekneturu.net üzerinden yapılır.`,
    '',
  );
  lines.push('## Turlar', '');
  for (const t of TOURS) {
    const x = t.tr;
    const cls = t.classes?.map((c) => `${c.key} ${fmtPrice(c.adult, 'tr')}`).join(', ');
    lines.push(`- [${x.title}](${abs(ROUTES[t.key].tr)}): ${t.start}–${t.end}, ${x.duration}, ${fmtPrice(t.from, 'tr')}'den${cls ? ` (${cls})` : ''}. ${x.short}`);
    lines.push(`  - Dahil: ${x.included.join('; ')}`);
    lines.push(`  - Dahil değil: ${x.excluded.join('; ')}`);
    lines.push(`  - Rezervasyon: https://cesmetekneturu.net/rezervasyon/${t.booking}`);
  }
  lines.push('', '## Sık sorulan sorular', '');
  for (const c of faqCategories('tr')) for (const f of c.items) lines.push(`- ${f.q} — ${f.a}`);
  lines.push('', '## İletişim', '');
  lines.push(`- Telefon / WhatsApp: ${SITE.phone}, ${SITE.phone2}`);
  lines.push(`- E-posta: ${SITE.email}`);
  lines.push(`- Adres: ${SITE.address.street}, ${SITE.address.postal} ${SITE.address.city}/${SITE.address.region}`);
  lines.push(`- Çalışma saatleri: her gün ${SITE.hours.open}–${SITE.hours.close}`);
  lines.push('', '## Diller', '');
  for (const l of LANGS) {
    lines.push(`- ${LOCALE[l].name}: ${abs(ROUTES.home[l])} — ${TOURS.map((t) => `[${t[l].title}](${abs(ROUTES[t.key][l])})`).join(', ')}`);
  }
  lines.push('', `- Sitemap: ${abs('/sitemap.xml')}`);
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
