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
  venueKicker: string;
  venueName: string;
  venueCity: string;
  arrivalLabel: string;
  arrivalTime: string;
  venueNote: string;
  directions: string;
  dayKicker: string;
  dayTitle: string;
  schedule: { time: string; title: string; text: string }[];
  rsvpKicker: string;
  rsvpTitle: string;
  rsvpText: string;
  name: string;
  phone: string;
  guests: string;
  send: string;
  sent: string;
  footer: string;
  photoAlt: string;
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
    countTitle: "Until we say yes",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    started: "The celebration has begun",
    venueKicker: "The venue",
    venueName: "Royal Rose Venue",
    venueCity: "Tashkent, Uzbekistan",
    arrivalLabel: "Arrival",
    arrivalTime: "5:00 PM",
    venueNote:
      "A short ride from the center of Tashkent. Tap below to open the map and directions.",
    directions: "Get directions",
    dayKicker: "The day",
    dayTitle: "From ceremony to the last dance",
    schedule: [
      { time: "5:00", title: "Arrival & welcome", text: "Gather, greet, and a glass of something warm." },
      { time: "6:00", title: "The ceremony", text: "We exchange our vows among the flowers." },
      { time: "7:00", title: "Dinner & toasts", text: "A long table, good food, warm words." },
      { time: "8:30", title: "First dance", text: "Then the floor is all yours." },
    ],
    rsvpKicker: "Kindly respond",
    rsvpTitle: "Can you join us?",
    rsvpText:
      "We would be honored to have you there. Please let us know by the end of September.",
    name: "Your name",
    phone: "Phone number",
    guests: "How many guests",
    send: "Send RSVP",
    sent: "Thank you! Your reply has been noted.",
    footer: "With love & gratitude",
    photoAlt: "Blush and white roses with eucalyptus on a wedding table",
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
    countTitle: "До нашего «да»",
    days: "Дней",
    hours: "Часов",
    minutes: "Минут",
    seconds: "Секунд",
    started: "Праздник начался",
    venueKicker: "Место торжества",
    venueName: "Royal Rose Venue",
    venueCity: "Ташкент, Узбекистан",
    arrivalLabel: "Сбор гостей",
    arrivalTime: "17:00",
    venueNote:
      "Недалеко от центра Ташкента. Нажмите ниже, чтобы открыть карту и маршрут.",
    directions: "Построить маршрут",
    dayKicker: "Программа",
    dayTitle: "От церемонии до последнего танца",
    schedule: [
      { time: "17:00", title: "Встреча гостей", text: "Приветствие и бокал за начало вечера." },
      { time: "18:00", title: "Церемония", text: "Мы произносим клятвы среди цветов." },
      { time: "19:00", title: "Ужин и тосты", text: "Длинный стол, вкусная еда, тёплые слова." },
      { time: "20:30", title: "Первый танец", text: "А дальше танцпол — ваш." },
    ],
    rsvpKicker: "Ответьте, пожалуйста",
    rsvpTitle: "Сможете быть с нами?",
    rsvpText:
      "Для нас честь видеть вас на празднике. Пожалуйста, сообщите до конца сентября.",
    name: "Ваше имя",
    phone: "Номер телефона",
    guests: "Количество гостей",
    send: "Отправить ответ",
    sent: "Спасибо! Ваш ответ принят.",
    footer: "С любовью и благодарностью",
    photoAlt: "Розовые и белые розы с эвкалиптом на свадебном столе",
    langLabel: "Выберите язык",
  },
  uz: {
    htmlLang: "uz",
    saveTheDate: "Sanani eslab qoling",
    invite:
      "Birgalikdagi hayotimiz boshlanadigan kunda siz bilan bo‘lishdan katta baxtiyormiz.",
    dateLine: "08 · 10 · 2026",
    venueShort: "Royal Rose, Toshkent",
    countKicker: "Daqiqalar sanog‘i",
    countTitle: "To‘yimizgacha",
    days: "Kun",
    hours: "Soat",
    minutes: "Daqiqa",
    seconds: "Soniya",
    started: "Bayram boshlandi",
    venueKicker: "Manzil",
    venueName: "Royal Rose Venue",
    venueCity: "Toshkent, O‘zbekiston",
    arrivalLabel: "Mehmonlar kutib olinadi",
    arrivalTime: "17:00",
    venueNote:
      "Toshkent markazidan bir necha daqiqalik yo‘l. Xarita va yo‘nalish uchun quyidagini bosing.",
    directions: "Yo‘nalishni ochish",
    dayKicker: "Kun tartibi",
    dayTitle: "Nikoh marosimidan so‘nggi raqsgacha",
    schedule: [
      { time: "17:00", title: "Mehmonlarni kutib olish", text: "Salomlashuv va kechaga xayrli boshlanish." },
      { time: "18:00", title: "Nikoh marosimi", text: "Gullar qurshovida ahdimizni aytamiz." },
      { time: "19:00", title: "Ziyofat va tabriklar", text: "Katta dasturxon, mazali taomlar, iliq so‘zlar." },
      { time: "20:30", title: "Birinchi raqs", text: "So‘ngra maydon sizniki." },
    ],
    rsvpKicker: "Javobingizni kutamiz",
    rsvpTitle: "Biz bilan bo‘lasizmi?",
    rsvpText:
      "Sizni to‘yimizda ko‘rish biz uchun katta sharaf. Iltimos, sentabr oxirigacha xabar bering.",
    name: "Ismingiz",
    phone: "Telefon raqamingiz",
    guests: "Nechta mehmon",
    send: "Javobni yuborish",
    sent: "Rahmat! Javobingiz qabul qilindi.",
    footer: "Mehr va minnatdorchilik bilan",
    photoAlt: "To‘y dasturxonidagi pushti va oq atirgullar",
    langLabel: "Tilni tanlang",
  },
};

export const WEDDING_DATE = new Date("2026-10-08T17:00:00+05:00");

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Royal+Rose+Venue+Tashkent";
