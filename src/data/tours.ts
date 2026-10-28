// Turlar — kaynak: cesmetekneturu.net (Poseidon Çeşme). Fiyat, saat ve program oradaki
// güncel verilerle aynı tutulmalı; rezervasyon butonları oradaki rezervasyon sayfasına gider.
import { LOCALE, type Lang } from '../site';
import { tr } from './tour-text/tr';
import { fr } from './tour-text/fr';
import { en } from './tour-text/en';
import { de } from './tour-text/de';

export const BOOKING_BASE = 'https://cesmetekneturu.net';

export type TourKey = 'tour' | 'tourIzmir' | 'tourSunset' | 'tourDive';

export interface TourText {
  title: string;
  short: string;
  metaTitle: string;
  metaDesc: string;
  duration: string;
  meeting: string;
  badge?: string;
  intro: string[];
  highlights: { t: string; d: string }[];
  itinerary: { time: string; title: string; text?: string }[];
  included: string[];
  excluded: string[];
  faqs: { q: string; a: string }[];
  note?: string;
}

export interface TourBase {
  key: TourKey;
  booking: string;
  image: string;
  gallery: string[];
  rating: number;
  reviews: number;
  from: number;
  discount?: number;
  start: string;
  end: string;
  classes?: { key: 'eco' | 'premium' | 'first'; adult: number; child?: number }[];
  childPrice?: number;
  pickups?: string[];
  reviewsSet: 'boat' | 'dive';
}

export type Tour = TourBase & Record<Lang, TourText>;

// Kartlara tıklanınca gidilen cesmetekneturu.net tur sayfası
export const tourSiteUrl = (tour: TourBase, lang: Lang) => `${BOOKING_BASE}${LOCALE[lang].booking}/tur/${tour.booking}`;

export const bookingUrl = (tour: TourBase, lang: Lang, params?: Record<string, string>) => {
  const path = `${LOCALE[lang].booking}/rezervasyon/${tour.booking}`;
  const q = params ? new URLSearchParams(params).toString() : '';
  return `${BOOKING_BASE}${path}${q ? `?${q}` : ''}`;
};

const BASE: TourBase[] = [
  {
    key: 'tour',
    booking: 'cesme-tekne-turu',
    image: 'cesme-koy-tekne-adalar',
    gallery: ['cesme-tekne-turu-koy', 'akvaryum-koyu-yuzme', 'first-class-bungalov', 'ogle-yemegi-tabak', 'mercan-adasi-koy'],
    rating: 4.8,
    reviews: 2971,
    from: 2000,
    discount: 10,
    start: '11:00',
    end: '18:00',
    classes: [
      { key: 'eco', adult: 2000, child: 1000 },
      { key: 'premium', adult: 2350 },
      { key: 'first', adult: 2750 },
    ],
    reviewsSet: 'boat',
  },
  {
    key: 'tourIzmir',
    booking: 'izmir-cikisli-cesme-tekne-turu',
    image: 'izmir-turu-koy',
    gallery: ['koy-adalar-genis', 'adacik-koy', 'tekne-yuzme-molasi', 'ogle-yemegi-tabak', 'gizli-koy-sup-yuzme'],
    rating: 4.6,
    reviews: 850,
    from: 2900,
    childPrice: 1900,
    start: '08:30',
    end: '20:00',
    pickups: ['Atatürk Anıtı (Karşıyaka)', 'Ege Üniversitesi Hastanesi – Bornova Metro', 'İstinye Park önü', 'Garanti BBVA Alsancak Liman Şubesi', 'Halkapınar Metro', 'Kamil Koç Ofisi Basmane', 'Maviş Büfe Üçyol', 'PTT Merkez Şubesi (Konak)', 'Şirinyer İZBAN', 'YKM İzmir (Konak)'],
    reviewsSet: 'boat',
  },
  {
    key: 'tourSunset',
    booking: 'guenbatimi-turu',
    image: 'gun-batimi-tekne',
    gallery: ['cesme-tekne-turu-koy', 'tekne-gece-ustten', 'ust-guverte-sezlong', 'kis-limani-sahil'],
    rating: 4.6,
    reviews: 105,
    from: 1500,
    start: '19:00',
    end: '21:30',
    reviewsSet: 'boat',
  },
  {
    key: 'tourDive',
    booking: 'cesme-tuplu-dalis-turu',
    image: 'dalis-yarim-su',
    gallery: ['dalis-heykel', 'dalis-mercan', 'dalis-teknesi', 'dalis-ekip'],
    rating: 4.7,
    reviews: 93,
    from: 4500,
    start: '09:00',
    end: '16:00',
    reviewsSet: 'dive',
  },
];

const TEXT = { tr, fr, en, de };
export const TOURS: Tour[] = BASE.map((b) => ({ ...b, tr: TEXT.tr[b.key], fr: TEXT.fr[b.key], en: TEXT.en[b.key], de: TEXT.de[b.key] }));

export const DIVE_REVIEWS = [
  { name: 'Nihal T. K.', title: 'Keyifli bir gün geçirdik 🍀', text: 'Ailecek katıldığımız bir turdu; baba-oğul dalış tecrübesi yaşadılar. Ekibin hepsi güler yüzlü, nazik ve işine hâkim. Yemekler on numara, tekne tertemiz. Herkese teşekkür ederiz.' },
  { name: 'Şaziye A.', title: 'Bizim için ilk dalış deneyimi oldu', text: 'Muhteşem bir gün geçirdik. İçtenliği ve samimiyeti için tüm ekibe çok teşekkür ederiz. Yine geleceğiz ve herkese sizi anlatacağız 🥰' },
  { name: 'Yeliz A.', title: 'Dalgıçlar için çok güzel 2 dalış noktası', text: 'Müthiş bir deneyim yaşadık, herkes çok ilgiliydi. Ekstra içecekler diğer tekne turları gibi fahiş fiyatlarda değil, çok uygundu. Her şey için çok teşekkürler.' },
  { name: 'Sedef K.', title: 'İyi ki varsınız', text: 'Dalış eğitimime bu kadar deneyimli bir hocayla başlamak gerçekten ayrıcalıktı. Güler yüzü, güzel enerjisi ve güzel yemekleriyle dalış deneyimini daha da güzelleştiren ekibe teşekkürler 🩵🌊' },
];

export const tourByKey = (k: TourKey) => TOURS.find((t) => t.key === k)!;
