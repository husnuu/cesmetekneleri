import { defineConfig } from 'astro/config';

// Eski Hostinger sitesindeki URL'ler birebir korunuyor:
// /, /cesme-tekne-turu, /hakkimizda, /iletisim ve /fr/... karşılıkları.
// Sonda eğik çizgi yok (eski canonical'lar böyleydi).
export default defineConfig({
  site: 'https://cesmetekneleri.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  compressHTML: true,
});
