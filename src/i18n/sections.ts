// Ana sayfa bölümleri. Koy açıklamaları ve misafir yorumları cesmetekneturu.net
// (aynı tekne, Poseidon Çeşme) içeriğinden alınmıştır.
import type { Lang } from '../site';
import { tr } from './sections/tr';
import { fr } from './sections/fr';
import { en } from './sections/en';
import { de } from './sections/de';

export const RATING = {
  value: 4.7,
  count: 3821,
  googleUrl: 'https://share.google/rcG2JTNJUJloJRNkL',
};

export const SOCIAL = {
  instagram: 'https://www.instagram.com/cesmeposeidon',
  facebook: 'https://www.facebook.com/cesmeposeidon/',
  youtube: 'https://www.youtube.com/@turkayhantal789',
};

// Yorumlar orijinal dilinde (Türkçe) gösterilir.
export const REVIEWS = [
  {
    name: 'Bedriye A.',
    title: 'Teşekkürler Poseidon ailesi, yeniden görüşmek üzere! 💙⚓️',
    text: 'Hafta sonu için rotamızı İzmir’den Çeşme’ye çevirdik. Hummalı bir sosyal medya araştırmasından sonra herkesin dilinde olan Poseidon Tekne Turu’nu bulduk. Tekneye adım attığım an ilk dikkatimi çeken şey temizlik ve düzen oldu. Görevli arkadaş yanımıza gelip gayet kibarca yerimizi gösterdi ve yerimiz rezervasyonda tam da istediğimiz yerdeydi! Tam 4 farklı koy gezildi, her birinde yüzme molası verildi. Her koy birbirinden güzeldi, deniz kristal gibi. Balık menüsü gayet lezzetli ve doyurucuydu. Kısacası; temizlik, düzen, hizmet, eğlence ve deniz bir araya gelince ortaya harika bir gün çıktı.',
  },
  {
    name: 'Melike Ş.',
    title: 'Alaçatı’ya yolunuz düşerse kesinlikle denemenizi tavsiye ederim! 🥰',
    text: 'Poseidon tekne turuna katıldık ve gerçekten beklentimizin çok üzerinde bir deneyim yaşadık. Tekne çok temiz ve düzenliydi, ortam son derece keyifli ve huzur doluydu. En çok da çalışanların güler yüzü ve içtenliği bizi etkiledi. Tüm misafirlerle birebir ilgilenmeleri, sıcak tavırları sayesinde kendimizi çok özel hissettik. Hem eğlenceli hem de rahatlatıcı bir gün geçirdik.',
  },
  {
    name: 'Defne S.',
    title: 'Herkese tavsiye ediyorum. ♥️',
    text: 'Daha önce farklı yerlere de geldim fakat Poseidon’dan çok memnun kaldım. Servis çok hızlıydı, müzikler çok keyifliydi, garsonlar ilgiliydi. Çok büyük bir tekneydi, kimse iç içe değildi; ihtiyacımız olan birçok şeye uygun fiyatlarla ulaşabildik. Çok keyifli vakit geçirdik.',
  },
  {
    name: 'Utku A.',
    title: 'Çeşme tarafına giderseniz güzel bir gezi planı olabilir',
    text: 'Gerçekten güzel bir yolculukla sizi birbirinden güzel koylara götürüyorlar. Güneşlenmek istemezseniz alt kata, güneşlenmek isterseniz üst kattaki localara geçebilirsiniz. Güzel düşünülmüş bir tur, yolculukta sıkılmamanız için şov bile var. Koyların ve turkuaz suların keyfini sürmek için mutlaka maske-şnorkel takımıyla gitmenizi tavsiye ederim. Öğle yemeği mevcut, içecekler ücretli.',
  },
];

export const COVE_IMAGES = ['esek-adasi-esekler', 'cesme-tekne-turu-koy', 'mercan-adasi-koy', 'tekne-havadan-koy', 'gizli-koy-sup-yuzme', 'makri-adasi'] as const;

const ALL = { tr, fr, en, de };
export const sections = (lang: Lang) => ALL[lang];
