import type { Lang } from '../site';
import { tourByKey } from './tours';
import { sections } from '../i18n/sections';

type QA = { q: string; a: string };
export type FaqCat = { id: string; title: string; icon: 'calendar' | 'boat' | 'bus' | 'sun' | 'swim'; items: QA[] };

// İptal sorusu "Teknede" kategorisinde tekrar etmesin (rezervasyon kategorisinde var).
const CANCEL = /[iİ]ptal|annul|cancel|stornier/i;

export const faqCategories = (lang: Lang): FaqCat[] => {
  const s = sections(lang);
  const T = s.faqTitles;
  return [
    { id: 'rezervasyon', title: T.general, icon: 'calendar', items: s.faqGeneral },
    { id: 'teknede', title: T.boat, icon: 'boat', items: tourByKey('tour')[lang].faqs.filter((f) => !CANCEL.test(f.q)) },
    { id: 'izmir', title: T.izmir, icon: 'bus', items: tourByKey('tourIzmir')[lang].faqs.slice(0, 3) },
    { id: 'gun-batimi', title: T.sunset, icon: 'sun', items: tourByKey('tourSunset')[lang].faqs },
    { id: 'dalis', title: T.dive, icon: 'swim', items: tourByKey('tourDive')[lang].faqs },
  ];
};
