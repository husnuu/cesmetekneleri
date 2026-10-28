import { tr } from './tr';
import { fr } from './fr';
import { en } from './en';
import { de } from './de';
import type { Lang } from '../site';

export const dicts = { tr, fr, en, de };
export const t = (lang: Lang) => dicts[lang];
