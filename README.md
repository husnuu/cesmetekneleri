# cesmetekneleri.com

Statik site (Astro). Eski Hostinger Website Builder sitesinin yerine geçer.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # çıktı: dist/
```

İçerik: `src/i18n/tr.ts`, `src/i18n/fr.ts`, `src/i18n/sections.ts`. Telefon, adres: `src/site.ts`.

**Turlar** `src/data/tours.ts` içinde (fiyat, saat, program, SSS). Kaynak cesmetekneturu.net'tir;
oradaki fiyat/saat değişirse burası da güncellenmeli. Tüm "Rezervasyon" butonları
`https://cesmetekneturu.net/rezervasyon/<tur>` adresine gider (FR sayfalardan `/en/...`).

## SEO taşıma

Eski sitenin indekslenmiş 8 URL'si **birebir aynı** kalır, bu yüzden bu sayfalar için yönlendirmeye gerek yoktur:

| URL | |
|---|---|
| `/` · `/fr` | Ana sayfa |
| `/cesme-tekne-turu` · `/fr/cesme-tekne-turu` | Tur |
| `/hakkimizda` · `/fr/hakkimizda` | Hakkımızda |
| `/iletisim` · `/fr/iletisim` | İletişim |

Yeni sayfalar: `/turlar`, `/izmir-cikisli-cesme-tekne-turu`, `/cesme-gun-batimi-turu`, `/cesme-tuplu-dalis-turu`, `/sik-sorulan-sorular` (+ FR karşılıkları).

Varyasyonlar 301 ile canonical adrese toplanır (http→https, www→çıplak domain, sondaki `/`, `.html`, `/home`, `/tr/...` vb.). Kurallar hosting'e göre:

- Hostinger / Apache: `public/.htaccess`
- Vercel: `vercel.json`
- Netlify / Cloudflare Pages: `public/_redirects`

## Yayına alma kontrol listesi

1. `npm run build`, `dist/` içeriğini yükle (Hostinger'da `public_html`'e; `.htaccess` dahil).
2. Domain'i Website Builder'dan ayır, yeni hosting'e yönlendir.
3. Kontrol: `curl -I https://www.cesmetekneleri.com/hakkimizda/` → tek adımda `301` ile `https://cesmetekneleri.com/hakkimizda`.
4. Google Search Console: `sitemap.xml`'i yeniden gönder, ana sayfa ve tur sayfası için "Dizine eklenmesini iste".
5. Rich Results Test ile tur sayfasını doğrula (TouristTrip, FAQ, Breadcrumb).
