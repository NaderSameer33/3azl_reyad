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
    ar: "شركة المعمورة للمقاولات العامة للعوازل",
    en: "Al-Mamoura Insulation & General Contracting",
    short: {
      ar: "شركة المعمورة",
      en: "Al-Mamoura",
    },
  },

  // ─── Contact ──────────────────────────────────────────────────────────────
  phone: {
    primary: "+966539441259",
    secondary: "+966539441259",
    display: {
      primary: "0539441259",
      secondary: "0539441259",
    },
  },
  email: "info@almamoura-sa.com",

  // ─── WhatsApp ─────────────────────────────────────────────────────────────
  whatsapp: {
    number: "966539441259", // without leading +
    get url() {
      return "https://api.whatsapp.com/send/?phone=966539441259&text&type=phone_number&app_absent=0";
    },
  },

  // ─── Social Media ─────────────────────────────────────────────────────────
  social: {
    x: {
      username: "AbdaAlshrq41172",
      url: "https://x.com/AbdaAlshrq41172",
      display: "@AbdaAlshrq41172",
    },
    twitter: {
      username: "AbdaAlshrq41172",
      url: "https://x.com/AbdaAlshrq41172",
      display: "@AbdaAlshrq41172",
    },
    tiktok: {
      username: "mmhhfdt",
      url: "https://www.tiktok.com/@mmhhfdt?_r=1",
      display: "@mmhhfdt",
    },
    snapchat: {
      username: "almamoura_sa",
      url: "https://www.snapchat.com",
      display: "@almamoura_sa",
    },
  },

  // ─── SEO & Metadata ───────────────────────────────────────────────────────
  url: "https://www.elmamoura.com",
  description: {
    ar: "شركة المعمورة للمقاولات العامة للعوازل - شركة متخصصة في كشف تسربات المياه بالرياض وعزل الأسطح الفوم والمائي. نخدم جميع أحياء الرياض بأحدث الأجهزة الإلكترونية مع ضمان مكتوب.",
    en: "Al-Mamoura Insulation & General Contracting - Specialist company in water leak detection and roof insulation (foam & waterproofing) in Riyadh, Saudi Arabia. Serving all Riyadh districts with electronic detection equipment and written warranty.",
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
      id: "bathroom-kitchens",
      ar: "عزل حمامات ومطابخ",
      en: "Bathroom & Kitchen Waterproofing",
      description: {
        ar: "عزل مائي هندسي للحمامات والمطابخ قبل وبعد البلاط لمنع التسريب نهائياً",
      },
    },
    {
      id: "membrane-roll",
      ar: "عزل رول ممبرين",
      en: "Bitumen Roll Membrane Insulation",
      description: {
        ar: "عزل رولات بيتومينية مسلحة 4 ملم للأسطح الخرسانية والمباني التجارية",
      },
    },
    {
      id: "polyurea-insulation",
      ar: "عزل بولي يوريا",
      en: "Polyurea Spray Waterproofing",
      description: {
        ar: "رش بولي يوريا هيدروليكي سريع الجفاف عالي المرونة والمقاومة للإجهادات",
      },
    },
    {
      id: "foam-insulation",
      ar: "عزل أسطح بالفوم",
      en: "Foam Roof Insulation",
      description: {
        ar: "عزل حراري ومائي متكامل بالبولي يوريثان معتمد من شركة الكهرباء",
      },
    },
    {
      id: "leak-detection",
      ar: "كشف تسربات المياه",
      en: "Water Leak Detection",
      description: {
        ar: "كشف دقيق بدون تكسير بأحدث الأجهزة الصوتية والحرارية الألمانية",
      },
    },
    {
      id: "tank-leaks",
      ar: "عزل وترميم الخزانات",
      en: "Water Tank Insulation & Repair",
      description: {
        ar: "صيانة وعزل خزانات المياه بالإيبوكسي الأزرق الغذائي المعتمد",
      },
    },
  ],

  // ─── Business Info for Structured Data ───────────────────────────────────
  business: {
    legalName: "شركة المعمورة للمقاولات العامة للعوازل",
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
    email: "info@almamoura-sa.com",
    logo: "/images/logo.png",
  },
} as const;
