export type Lang = "en" | "ru" | "uz";

export const LANGS: { code: Lang; label: string; aria: string }[] = [
  { code: "en", label: "EN", aria: "English" },
  { code: "ru", label: "RU", aria: "Русский" },
  { code: "uz", label: "UZ", aria: "Oʻzbekcha" },
];

export type Dict = {
  htmlLang: string;
  saveTheDate: string;
  invite: string;
  dateLine: string;
  venueShort: string;
  countKicker: string;
  countTitle: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  started: string;
  footerFamily: string;
  venueKicker: string;
  venueName: string;
  venueCity: string;
  arrivalLabel: string;
  arrivalTime: string;
  venueNote: string;
  directions: string;
  footer: string;
  venuePhotoAlt: string;
  langLabel: string;
};

export const dictionaries: Record<Lang, Dict> = {
  en: {
    htmlLang: "en",
    saveTheDate: "Save the date",
    invite:
      "We are overjoyed to invite you to join us as we begin the rest of our lives together.",
    dateLine: "08 · 10 · 2026",
    venueShort: "Royal Rose, Tashkent",
    countKicker: "Counting the moments",
    countTitle: "Until our wedding",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    started: "The celebration has begun",
    venueKicker: "The venue",
    venueName: "Royal Rose Venue",
    venueCity: "Tashkent, Uzbekistan",
    arrivalLabel: "Arrival",
    arrivalTime: "6:00 PM",
    venueNote:
      "A short ride from the center of Tashkent. Tap below to open the map and directions.",
    directions: "Get directions",
    footer: "With love & gratitude",
    footerFamily: "Tadjiev's family",
    venuePhotoAlt: "Royal Rose banquet hall emblem",
    langLabel: "Choose language",
  },
  ru: {
    htmlLang: "ru",
    saveTheDate: "Сохраните дату",
    invite:
      "С огромной радостью приглашаем вас разделить с нами день, когда начнётся наша общая жизнь.",
    dateLine: "08 · 10 · 2026",
    venueShort: "Royal Rose, Ташкент",
    countKicker: "Считаем мгновения",
    countTitle: "До нашей свадьбы",
    days: "Дней",
    hours: "Часов",
    minutes: "Минут",
    seconds: "Секунд",
    started: "Праздник начался",
    venueKicker: "Место торжества",
    venueName: "Royal Rose Venue",
    venueCity: "Ташкент, Узбекистан",
    arrivalLabel: "Сбор гостей",
    arrivalTime: "18:00",
    venueNote:
      "Недалеко от центра Ташкента. Нажмите ниже, чтобы открыть карту и маршрут.",
    directions: "Построить маршрут",
    footer: "С любовью и благодарностью",
    footerFamily: "семья Таджиевых",
    venuePhotoAlt: "Эмблема банкетного зала Royal Rose",
    langLabel: "Выберите язык",
  },
  uz: {
    htmlLang: "uz",
    saveTheDate: "Sanani eslab qoling",
    invite:
      "Birgalikdagi hayotimiz boshlanadigan kunda siz bilan bo‘lishdan juda baxtiyormiz.",
    dateLine: "08 · 10 · 2026",
    venueShort: "Royal Rose, Toshkent",
    countKicker: "To‘yimizgacha",
    countTitle: "Daqiqalar sanog‘i",
    days: "Kun",
    hours: "Soat",
    minutes: "Daqiqa",
    seconds: "Soniya",
    started: "Bayram boshlandi",
    venueKicker: "Manzil",
    venueName: "Royal Rose Venue",
    venueCity: "Toshkent, O‘zbekiston",
    arrivalLabel: "Mehmonlar kutib olinadi",
    arrivalTime: "18:00",
    venueNote:
      "Toshkent markazidan bir necha daqiqalik yo‘l. Xarita va yo‘nalish uchun quyidagini bosing.",
    directions: "Yo‘nalishni ochish",
    footer: "Mehr va minnatdorchilik bilan",
    footerFamily: "Tadjievlar oilasi",
    venuePhotoAlt: "Royal Rose banket zali emblemasi",
    langLabel: "Tilni tanlang",
  },
};

export const WEDDING_DATE = new Date("2026-10-08T17:00:00+05:00");

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Royal+Rose+Venue+Tashkent";
