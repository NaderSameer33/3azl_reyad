/**
 * site.ts — Centralized company configuration
 * شركة كشف تسربات المياه وعزل الأسطح بالرياض
 */

export type District = {
  ar: string;
  en: string;
};

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  // ─── Brand Identity ───────────────────────────────────────────────────────
  name: {
    ar: "شركة درع الخليج لكشف التسربات وعزل الأسطح",
    en: "Gulf Shield – Water Leak Detection & Roof Insulation Riyadh",
    short: {
      ar: "درع الخليج",
      en: "Gulf Shield",
    },
  },

  // ─── Contact ──────────────────────────────────────────────────────────────
  phone: {
    primary: "+966501234567",
    secondary: "+966509876543",
    display: {
      primary: "0501234567",
      secondary: "0509876543",
    },
  },
  email: "info@gulfshield-sa.com",

  // ─── WhatsApp ─────────────────────────────────────────────────────────────
  whatsapp: {
    number: "966501234567", // without leading +
    get url() {
      const text = encodeURIComponent(
        "السلام عليكم، أريد الاستفسار عن خدمات كشف التسربات وعزل الأسطح بالرياض"
      );
      return `https://wa.me/${this.number}?text=${text}`;
    },
  },

  // ─── Social Media ─────────────────────────────────────────────────────────
  social: {
    snapchat: {
      username: "gulfshield_sa",
      url: "https://www.snapchat.com/add/gulfshield_sa",
      display: "@gulfshield_sa",
    },
    tiktok: {
      username: "@gulfshield.sa",
      url: "https://www.tiktok.com/@gulfshield.sa",
      display: "@gulfshield.sa",
    },
  },

  // ─── SEO & Metadata ───────────────────────────────────────────────────────
  url: "https://www.gulfshield-sa.com",
  description: {
    ar: "شركة متخصصة في كشف تسربات المياه بالرياض وعزل الأسطح الفوم والمائي. نخدم جميع أحياء الرياض بأحدث الأجهزة الألكترونية مع ضمان مكتوب.",
    en: "Specialist company in water leak detection and roof insulation (foam & waterproofing) in Riyadh, Saudi Arabia. Serving all Riyadh districts with electronic detection equipment and written warranty.",
  },
  keywords: [
    "كشف تسربات المياه بالرياض",
    "شركة كشف تسربات المياه بالرياض",
    "كشف تسربات المياه",
    "عزل أسطح بالرياض",
    "عزل فوم بالرياض",
    "عزل مائي بالرياض",
    "كشف تسربات بدون تكسير",
    "عزل أسطح فوم ومائي",
    "شركة عزل أسطح بالرياض",
    "كشف تسربات الحمامات",
    "كشف تسربات الخزانات",
    "عزل أسطح الرياض",
    "فحص تسربات المياه",
    "ترميم الأسطح الرياض",
    "water leak detection Riyadh",
    "roof insulation Riyadh",
    "foam insulation Riyadh",
  ],

  // ─── Riyadh Districts Coverage ────────────────────────────────────────────
  districts: [
    { ar: "حي النخيل", en: "Al-Nakheel" },
    { ar: "حي العليا", en: "Al-Olaya" },
    { ar: "حي الملقا", en: "Al-Malqa" },
    { ar: "حي الياسمين", en: "Al-Yasmin" },
    { ar: "حي الغدير", en: "Al-Ghadir" },
    { ar: "حي السليمانية", en: "Al-Sulaymaniyah" },
    { ar: "حي الروضة", en: "Al-Rawdah" },
    { ar: "حي النزهة", en: "Al-Nuzha" },
    { ar: "حي الربوة", en: "Al-Rabwah" },
    { ar: "حي قرطبة", en: "Qurtubah" },
    { ar: "حي العارض", en: "Al-Arid" },
    { ar: "حي الرمال", en: "Al-Rimal" },
    { ar: "حي الدرعية", en: "Al-Diriyah" },
    { ar: "حي المربع", en: "Al-Murabba" },
    { ar: "حي الوزارات", en: "Al-Wizarat" },
    { ar: "حي الشميسي", en: "Al-Shumaisi" },
    { ar: "حي بدر", en: "Badr" },
    { ar: "حي العزيزية", en: "Al-Aziziyah" },
    { ar: "حي عرقة", en: "Arqah" },
    { ar: "حي الدار البيضاء", en: "Al-Dar Al-Bayda" },
    { ar: "حي توبة", en: "Tubah" },
    { ar: "حي الريان", en: "Al-Rayyan" },
    { ar: "حي حطين", en: "Hittin" },
    { ar: "حي الورود", en: "Al-Wuroud" },
  ] satisfies District[],

  // ─── Services ─────────────────────────────────────────────────────────────
  services: [
    {
      id: "leak-detection",
      ar: "كشف تسربات المياه",
      en: "Water Leak Detection",
      description: {
        ar: "كشف دقيق بدون تكسير باستخدام أحدث الأجهزة الإلكترونية",
      },
    },
    {
      id: "foam-insulation",
      ar: "عزل الأسطح بالفوم",
      en: "Foam Roof Insulation",
      description: {
        ar: "عزل حراري ومائي متكامل باستخدام البولي يوريثان عالي الكثافة",
      },
    },
    {
      id: "waterproofing",
      ar: "العزل المائي للأسطح",
      en: "Roof Waterproofing",
      description: {
        ar: "حماية السطح من تسرب مياه الأمطار والرطوبة بضمان 10 سنوات",
      },
    },
    {
      id: "bathroom-leaks",
      ar: "كشف تسربات الحمامات",
      en: "Bathroom Leak Detection",
      description: {
        ar: "فحص وإصلاح تسربات الحمامات والمطابخ بدون هدم",
      },
    },
    {
      id: "tank-leaks",
      ar: "كشف تسربات الخزانات",
      en: "Water Tank Leak Detection",
      description: {
        ar: "صيانة وعزل خزانات المياه العلوية والأرضية",
      },
    },
  ],

  // ─── Business Info for Structured Data ───────────────────────────────────
  business: {
    legalName: "شركة درع الخليج لكشف التسربات وعزل الأسطح",
    priceRange: "SAR",
    currenciesAccepted: "SAR",
    paymentAccepted: "Cash, Bank Transfer",
    openingHours: "Mo-Su 07:00-22:00",
    areaServed: "Riyadh",
    foundingYear: "2015",
    geo: {
      latitude: "24.7136",
      longitude: "46.6753",
    },
    address: {
      streetAddress: "طريق الملك فهد",
      addressLocality: "الرياض",
      addressRegion: "منطقة الرياض",
      postalCode: "11564",
      addressCountry: "SA",
    },
    email: "info@gulfshield-sa.com",
    logo: "/images/logo.png",
  },
} as const;
