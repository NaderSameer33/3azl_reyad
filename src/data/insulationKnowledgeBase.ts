export interface TechnicalSpecs {
  chemicalMaterial: string;
  density: string;
  thickness: string;
  kValue: string; // Thermal conductivity W/m·K
  warrantyYears: number;
  approvalBodies: string[];
  sbcCode: string;
}

export interface KnowledgeArticle {
  id: string;
  slug: string;
  categorySlug: string;
  categoryName: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedDate: string;
  readingTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  targetKeywords: string[];
  tableOfContents: { id: string; text: string }[];
  articleBody: string;
  videoGuide?: {
    videoUrl: string;
    title: string;
    platform: "tiktok" | "youtube" | "snapchat";
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface KnowledgeProject {
  id: string;
  slug: string;
  categorySlug: string;
  categoryName: string;
  title: string;
  neighborhood: string;
  city: string;
  projectArea: string;
  executionDuration: string;
  warrantyIssued: string;
  approvalBadge: string;
  summary: string;
  problemDescription: string;
  solutionEngineering: string;
  resultsAchieved: {
    label: string;
    metric: string;
    detail: string;
  }[];
  media: {
    beforeDesc: string;
    duringDesc: string;
    afterDesc: string;
    beforeImages: string[];
    duringImages: string[];
    afterImages: string[];
    projectVideo?: {
      url: string;
      title: string;
      thumbnail: string;
      platform: "tiktok" | "snapchat" | "youtube";
    };
  };
  seoKeywordsUsed: string[];
}

export interface KnowledgeCategory {
  id: string;
  slug: string;
  titleAr: string;
  titleEn: string;
  badgeText: string;
  shortSummary: string;
  fullOverview: string;
  heroImage: string;
  infographicImage?: string;
  categoryVideoEmbed?: {
    url: string;
    title: string;
    platform: "tiktok" | "youtube" | "snapchat";
  };
  technicalSpecs: TechnicalSpecs;
  articles: KnowledgeArticle[];
  projects: KnowledgeProject[];
  basePricePerMeter?: number;
  flatPrice?: number;
}

export const insulationKnowledgeBase: KnowledgeCategory[] = [
  /* ══════════════════════════════════════════════════════════════════════════
     1. FOAM POLYURETHANE (عزل فوم بولي يوريثان)
  ══════════════════════════════════════════════════════════════════════════ */
  {
    id: "foam-polyurethane",
    slug: "foam-polyurethane",
    titleAr: "عزل فوم بولي يوريثان مائي وحراري",
    titleEn: "Polyurethane Spray Foam Insulation",
    badgeText: "معتمد لدى الشركة السعودية للكهرباء (SEC)",
    shortSummary:
      "عزل رغوي متكامل للأسطح الخرسانية والمعدنية (الشينكو) بسماكة 4 سم وكثافة 45 كجم/م³ مع طبقة أكرليك حماية UV.",
    fullOverview:
      "يعد نظام عزل الفوم بولي يوريثان المصبوب بالرش (Spray Polyurethane Foam) الحل الهندسي الأول المعتمد في مدينة الرياض لمقاومة الحرارة الشديدة والأمطار في آنٍ واحد. يدمج هذا النظام بين العزل الحراري فائق الكفاءة والعزل المائي المانع للرطوبة في طبقة واحدة متصلة (Monolithic) بدون أي فواصل تمدد أو مسام تسريب، ومطابق تماماً لاشتراطات كود البناء السعودي SBC 601.",
    heroImage: "/images/services/foam-insulation-hero.webp",
    basePricePerMeter: 38,
    technicalSpecs: {
      chemicalMaterial: "بولي يوريثان رغوي مغلق الخلايا (Closed Cell) + أكرليك حماية UV",
      density: "40 - 45 كجم/م³",
      thickness: "4 سم (40 ملم) كحد أدنى قياسي",
      kValue: "0.022 W/m·K (أدنى معامل توصيل حراري)",
      warrantyYears: 15,
      approvalBodies: ["الشركة السعودية للكهرباء", "كود البناء السعودي SBC"],
      sbcCode: "SBC 601 / ASTM C1029",
    },
    articles: [
      {
        id: "art-foam-1",
        slug: "foam-insulation-standards-riyadh",
        categorySlug: "foam-polyurethane",
        categoryName: "عزل فوم بولي يوريثان",
        title: "المواصفات الفنية لعزل الفوم بولي يوريثان المعتمد من شركة الكهرباء بالرياض",
        metaTitle: "مواصفات عزل الفوم بالرياض | اشتراطات شركة الكهرباء وكود SBC",
        metaDescription: "تعرف على اشتراطات عزل الفوم بالرياض: كثافة 45 كجم/م³، سماكة 4 سم، وطبقة الأكرليك العاكسة لخفض الفاتورة 40% وضمان 15 سنة.",
        excerpt:
          "دليل هندسي يوضح معايير جودة عزل الفوم لأسطح الفلل بالرياض، وكيفية التأكد من كثافة وسماكة المادة للحصول على شهادة العزل الرسمية.",
        publishedDate: "2026-08-28",
        readingTime: "6 دقائق قراءة",
        author: {
          name: "م. عبد العزيز الشمري",
          role: "استشاري عزل ومواد إنشائية",
          avatar: "/images/authors/engineer.webp",
        },
        targetKeywords: [
          "عزل فوم بالرياض",
          "عزل فوم معتمد شركة الكهرباء",
          "كثافة الفوم 45",
          "سعر متر الفوم بالرياض",
        ],
        tableOfContents: [
          { id: "why-foam", text: "لماذا الفوم هو الخيار الأفضل لأسطح الرياض؟" },
          { id: "density-specs", text: "أهمية الكثافة (45 كجم/م³) وسماكة الـ 4 سم" },
          { id: "acrylic-uv", text: "طبقة الأكرليك المقاومة للأشعة فوق البنفسجية" },
        ],
        articleBody: `
<h2 id="why-foam">لماذا الفوم هو الخيار الأفضل لأسطح الرياض؟</h2>
<p>تتعرض أسطح المباني في الرياض لحمل حراري هائل في فصل الصيف تتجاوز معه حرارة الخرسانة 65 درجة مئوية. يعمل عزل الفوم كحاجز حراري ومائي مزدوج يعكس الإشعاع الشمسي ويمنع تسرب مياه الأمطار نهائياً.</p>
<h2 id="density-specs">أهمية الكثافة (45 كجم/م³) وسماكة الـ 4 سم</h2>
<p>تشترط الشركة السعودية للكهرباء كثافة لا تقل عن 40-45 كجم/م³ لتوفير صلابة ضغط تمنع تشوه الفوم تحت أوزان المكيفات وتضمن عمراً افتراضياً يتجاوز 15 سنة.</p>
<h2 id="acrylic-uv">طبقة الأكرليك المقاومة للأشعة فوق البنفسجية</h2>
<p>يتم رش وجهين من مادة الأكرليك الأبيض العاكس بسماكة 400 ميكرون لحماية الفوم من التفتت بفعل شمس الرياض القوية.</p>
        `,
        faqs: [
          {
            question: "كم يوفر عزل الفوم من فاتورة الكهرباء؟",
            answer: "يوفر عزل الفوم بسماكة 4 سم وكثافة 45 كجم/م³ ما بين 35% إلى 42% من استهلاك التكييف السنوي في مدينة الرياض.",
          },
          {
            question: "هل يقبل عزل الفوم لدى شركة الكهرباء لإطلاق التيار؟",
            answer: "نعم، كافة أعمالنا مطابقة لكود البناء السعودي SBC 601 وتصدر لها شهادات رسمية معتمدة من منصة بلدي وشركة الكهرباء.",
          },
        ],
      },
      {
        id: "art-foam-2",
        slug: "foam-insulation-for-shinko-roofs-riyadh",
        categorySlug: "foam-polyurethane",
        categoryName: "عزل فوم بولي يوريثان",
        title: "عزل أسطح الشينكو والهناجر بالفوم الرغوي في الرياض: حماية من الصدأ وخفض الحرارة",
        metaTitle: "عزل أسطح شينكو فوم بالرياض | معالجة الصدأ وتخفيض الحرارة",
        metaDescription: "طرق عزل أسطح الشينكو والمستودعات بالرياض بالفوم بولي يوريثان لمنع خرير الأمطار وعزل حرارة الصيف الشديدة.",
        excerpt:
          "حلول هندسية متطورة لعزل المستودعات والأسقف المعدنية بالفوم الرغوي، مع سد فواصل الصاج والبراغي بالكامل ومنع الصدأ.",
        publishedDate: "2026-08-20",
        readingTime: "5 دقائق قراءة",
        author: {
          name: "م. خالد الفهد",
          role: "مهندس مشاريع صناعية وتجارية",
          avatar: "/images/authors/engineer.webp",
        },
        targetKeywords: [
          "عزل شينكو فوم بالرياض",
          "عزل مستودعات وهناجر",
          "عزل فوم للأسقف المعدنية",
        ],
        tableOfContents: [
          { id: "shinko-challenges", text: "تحديات الأسقف المعدنية في الصيف والشتاء" },
          { id: "foam-adhesion", text: "قوة التصاق الفوم بالصاج وسد مسام البراغي" },
        ],
        articleBody: `
<h2 id="shinko-challenges">تحديات الأسقف المعدنية في الصيف والشتاء</h2>
<p>تمتص ألواح الشينكو الحرارة بسرعة فائقة لتصل لدرجات حرارة تفوق 70 درجة مئوية، كما تتعرض لتسربات مياه مستمرة عند أماكن تثبيت المسامير والفواصل.</p>
<h2 id="foam-adhesion">قوة التصاق الفوم بالصاج وسد مسام البراغي</h2>
<p>يشكل الفوم طبقة عازلة خفيفة الوزن تلتصق بالصاج مباشرة بدون أي براغي إضافية، مما يقضي على الصدأ والتسريب نهائياً.</p>
        `,
        faqs: [
          {
            question: "هل يثقل عزل الفوم وزن سقف الشينكو؟",
            answer: "لا إطلاقاً، الفوم خفيف الوزن للغاية ولا يمثل أي حمولة إنشائية تذكر على الهياكل الحديدية للمستودعات والفلل.",
          },
        ],
      },
    ],
    projects: [
      {
        id: "proj-foam-malqa",
        slug: "foam-insulation-villa-al-malqa-riyadh",
        categorySlug: "foam-polyurethane",
        categoryName: "عزل فوم بولي يوريثان",
        title: "مشروع عزل فوم وحل تسربات سطح فيلا بحي الملقا شمال الرياض",
        neighborhood: "حي الملقا — شمال الرياض",
        city: "الرياض",
        projectArea: "550 م²",
        executionDuration: "يومان عمل (16 ساعة تشغيلية)",
        warrantyIssued: "ضمان 15 سنة شامل وموثق",
        approvalBadge: "مطابق لكود البناء SBC 601",
        summary:
          "عزل سطح فيلا سكنية حديثة بالفوم بولي يوريثان عالي الكثافة 45 كجم/م³ مع معالجة الشروخ الخرسانية ودهان طبقتين أكرليك حماية عاكسة للشمس.",
        problemDescription:
          "معاناة المالك من ارتفاع غير مسبوق في درجات حرارة الدور العلوي مع هدر في استهلاك التكييف وظهور رطوبة ناتجة عن تجمع مياه الأمطار حول قواعد المكيفات ومزاريب الصرف.",
        solutionEngineering:
          "تنظيف السطح وضخ الهواء لإزالة الغبار، معالجة الزوايا بمونة غير قابلة للانكماش، رش فوم بولي يوريثان بسماكة 4 سم موحدة، اختبار السماكة بمسبار القياس، وتطبيق دهان أكرليك أبيض عاكس للأشعة UV.",
        resultsAchieved: [
          { label: "حرارة السطح الخارجي", metric: "32°C", detail: "انخفاض من 68°C إلى 32°C" },
          { label: "توفير التكييف السنوي", metric: "-40%", detail: "خفض ساعات تشغيل الكمبروسر" },
          { label: "منع تسرب الأمطار", metric: "100%", detail: "عزل مائي متصل خالي من الفواصل" },
        ],
        media: {
          beforeDesc: "تشققات وتآكل خرساني مع ركود مياه الأمطار وضعف العزل القديم.",
          duringDesc: "مراحل تنظيف السطح ورش مادة البولي يوريثان بماكينات الضغط العالي.",
          afterDesc: "سطح أبيض عاكس فائق النقاء معزول مائياً وحرارياً بضمان 15 سنة.",
          beforeImages: ["/images/projects/before-1.webp"],
          duringImages: ["/images/projects/during-1.webp"],
          afterImages: ["/images/projects/after-1.webp"],
        },
        seoKeywordsUsed: [
          "عزل فوم حي الملقا",
          "عزل أسطح شمال الرياض",
          "شركة عزل فوم معتمدة بالرياض",
        ],
      },
      {
        id: "proj-foam-yasmin",
        slug: "foam-insulation-commercial-building-al-yasmin",
        categorySlug: "foam-polyurethane",
        categoryName: "عزل فوم بولي يوريثان",
        title: "عزل فوم لمجمع تجاري وسكني بحي الياسمين بالرياض",
        neighborhood: "حي الياسمين — الرياض",
        city: "الرياض",
        projectArea: "920 م²",
        executionDuration: "3 أيام عمل",
        warrantyIssued: "ضمان 15 سنة معتمد",
        approvalBadge: "معتمد لدى شركة الكهرباء",
        summary:
          "تنفيذ عزل فوم بولي يوريثان متكامل لسطح مجمع تجاري يحتوي على مكيفات مركزية وقواعد خرسانية معقدة مع تسليم شهادة العزل لإطلاق التيار.",
        problemDescription:
          "كثرة التمديدات وقواعد التكييف المركزي التي تحول دون تركيب اللفات التقليدية، مع تسرب الحرارة الشديدة للمحلات التجارية السفلية.",
        solutionEngineering:
          "رش الفوم الرغوي ليلتف بالكامل حول قواعد المكيفات والمواسير دون فواصل، وتطبيق طبقة أكرليك مطاطية مقاومة للمواد البترولية والشمس.",
        resultsAchieved: [
          { label: "تغطية النقاط الحرجة", metric: "100%", detail: "إغلاق كافة التجاويف والقواعد" },
          { label: "اعتماد شركة الكهرباء", metric: "معتمد", detail: "إصدار شهادة إتمام العزل" },
        ],
        media: {
          beforeDesc: "سطح مليء بالقواعد والتمديدات مع تسرب حراري شديد.",
          duringDesc: "تطبيق الفوم الرغوي حول كافة التفاصيل الدقيقة.",
          afterDesc: "طبقة عزل موحدة تحمي السطح وتوفر تصريفاً ممتازاً.",
          beforeImages: ["/images/projects/before-2.webp"],
          duringImages: ["/images/projects/during-2.webp"],
          afterImages: ["/images/projects/after-2.webp"],
        },
        seoKeywordsUsed: [
          "عزل مجمعات تجارية الرياض",
          "عزل فوم حي الياسمين",
          "شهادة عزل شركة الكهرباء",
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
     2. WATERPROOFING & THERMAL (عزل مائي وحراري برولات البيتومين)
  ══════════════════════════════════════════ */
  {
    id: "waterproofing-thermal",
    slug: "waterproofing-thermal",
    titleAr: "عزل مائي وحراري برولات البيتومين وألواح XPS",
    titleEn: "Bituminous Membrane & XPS Thermal Waterproofing",
    badgeText: "مطابق لمواصفات الهيئة السعودية SASO",
    shortSummary:
      "أنظمة عزل مائي بالرولات البيتومينية المسلحة 4 ملم مع ألواح البوليسترين المبثوق XPS للأسطح المبلطة وغير المبلطة.",
    fullOverview:
      "نقدم حلول العزل المائي الكلاسيكية والمتقدمة باستخدام أغشية البيتومين المعدلة بالبوليمر (APP/SBS) بسماكة 4 ملم والمسلحة بنسيج بوليستر عالي المتانة 200 جم/م²، مع تركيب ألواح العزل الحراري الزرقاء (XPS) لضمان حماية خرسانة الأسطح من التآكل وتسرب مياه الأمطار مدى الحياة.",
    heroImage: "/images/services/waterproofing-hero.webp",
    basePricePerMeter: 45,
    technicalSpecs: {
      chemicalMaterial: "رولات بيتومين معدلة بالبوليمر 4 ملم + ألواح بوليسترين مبثوق XPS",
      density: "تسليح بوليستر 200 جم/م² + كثافة ألواح حرارية 35 كجم/م³",
      thickness: "4 ملم للرول المائي + 5 سم للألواح الحرارية",
      kValue: "0.029 W/m·K للألواح الحرارية XPS",
      warrantyYears: 12,
      approvalBodies: ["الهيئة السعودية للمواصفات SASO", "كود البناء السعودي"],
      sbcCode: "ASTM D6164 / SBC 601",
    },
    articles: [
      {
        id: "art-waterproof-1",
        slug: "membrane-waterproofing-execution-steps-riyadh",
        categorySlug: "waterproofing-thermal",
        categoryName: "عزل مائي وحراري للأسطح",
        title: "خطوات تنفيذ العزل المائي بالرولات البيتومينية 4 ملم واختبار الغمر 48 ساعة بالرياض",
        metaTitle: "خطوات العزل المائي بالرولات 4 ملم بالرياض | اختبار الغمر المائي",
        metaDescription: "شرح هندسي لطريقة تركيب رولات البيتومين 4 ملم، عمل رقبة الزجاجة، واختبار الغمر 48 ساعة لمنع تسرب الأمطار.",
        excerpt:
          "المعايير الهندسية لتركيب الرولات المائية: دهان البرايمر، اللحام بالنار، وتثبيت الوزرات بشرائح الألمنيوم لحماية الأسطح.",
        publishedDate: "2026-08-22",
        readingTime: "5 دقائق قراءة",
        author: {
          name: "م. فهد القحطاني",
          role: "استشاري ترميم وعزل المنشآت",
          avatar: "/images/authors/engineer.webp",
        },
        targetKeywords: [
          "عزل رولات بيتومين بالرياض",
          "عزل مائي 4 ملم ممبرين",
          "اختبار غمر السطح بالماء",
        ],
        tableOfContents: [
          { id: "surface-prep", text: "تجهيز السطح وعمل رقبة الزجاجة" },
          { id: "welding-membrane", text: "لحام الرولات بتراكب 10 سم" },
          { id: "flood-test", text: "بروتوكول اختبار الغمر لمدة يومين" },
        ],
        articleBody: `
<h2 id="surface-prep">تجهيز السطح وعمل رقبة الزجاجة</h2>
<p>يتم تنظيف السطح ودهان برايمر بيتوميني سريع الجفاف، مع صب وتر خرساني دائري عند زوايا السترة بارتفاع 10 سم لمنع انكسار العازل.</p>
<h2 id="welding-membrane">لحام الرولات بتراكب 10 سم</h2>
<p>تلحم الرولات باللهب الناري مع تراكب لا يقل عن 10 سم طولياً و15 سم عرضياً لضمان عدم وجود أي نقطة ضعف تسريب.</p>
<h2 id="flood-test">بروتوكول اختبار الغمر لمدة يومين</h2>
<p>يغمر السطح بالماء لعمق 15 سم لمدة 48 ساعة ومراقبة الأسقف السفلية بالكاميرات الحرارية قبل الاعتماد.</p>
        `,
        faqs: [
          {
            question: "هل يمكن عزل السطح المبلط بدون تكسير؟",
            answer: "نعم، نوفر عوازل بولي يوريثان شفافة وعوازل مطاطية تطبق فوق البلاط مباشرة مع حماية تامة من التسرب.",
          },
        ],
      },
    ],
    projects: [
      {
        id: "proj-waterproof-narjis",
        slug: "membrane-waterproofing-villa-al-narjis",
        categorySlug: "waterproofing-thermal",
        categoryName: "عزل مائي وحراري للأسطح",
        title: "مشروع عزل مائي برولات الممبرين 4 ملم لفيلا بحي النرجس شمال الرياض",
        neighborhood: "حي النرجس — شمال الرياض",
        city: "الرياض",
        projectArea: "380 م²",
        executionDuration: "يومان عمل",
        warrantyIssued: "ضمان 12 سنة معتمد",
        approvalBadge: "اختبار غمر 48 ساعة ناجح",
        summary:
          "عزل مائي شامل لسطح فيلا خرساني باستخدام رولات بيتومين 4 ملم مسلحة بالبوليستر مع ضبط ميول الصفاية واختبار السطح بالغمر.",
        problemDescription:
          "تسرب مياه الأمطار الشديد لغرف النوم وتلف الديكورات الجبسية بسبب شروخ في صبة الميول القديمة وركود المياه.",
        solutionEngineering:
          "إزالة العازل التالف، معالجة الشروخ بمونة إيبوكسية، دهان برايمر أساسي، تركيب رولات 4 ملم مع رفع وزرة 30 سم على الجدران واختبار الغمر.",
        resultsAchieved: [
          { label: "سماكة العزل المائي", metric: "4 ملم", detail: "مسلحة بنسيج بوليستر 200 جم" },
          { label: "اختبار الغمر", metric: "48 ساعة", detail: "انعدام تام لأي رطوبة أو تسريب" },
        ],
        media: {
          beforeDesc: "تلف صبة الميول وتسرب مياه الأمطار لداخل الغرف.",
          duringDesc: "لحام الرولات باللهب الناري وتثبيت الوزرات.",
          afterDesc: "سطح معزول بالكامل ومحمي من الأمطار بضمان 12 سنة.",
          beforeImages: ["/images/projects/before-3.webp"],
          duringImages: ["/images/projects/during-3.webp"],
          afterImages: ["/images/projects/after-3.webp"],
        },
        seoKeywordsUsed: ["عزل أسطح حي النرجس", "عزل مائي رولات الرياض"],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
     3. WATER LEAK DETECTION (كشف تسربات المياه المعتمد)
  ══════════════════════════════════════════ */
  {
    id: "water-leak-detection",
    slug: "water-leak-detection",
    titleAr: "كشف تسربات المياه بدون تكسير",
    titleEn: "Acoustic & Thermal Water Leak Detection",
    badgeText: "تقارير معتمدة لشركة المياه الوطنية (NWC)",
    shortSummary:
      "فحص إلكتروني دقيق لشبكات التغذية والصرف والخزانات بأجهزة غاز النيتروجين والكاميرات الحرارية FLIR لحل ارتفاع الفواتير.",
    fullOverview:
      "نقدم خدمة كشف تسربات المياه المعتمدة بأحدث التقنيات الألمانية بدون أي تكسير عشوائي. فحص شبكة التغذية الحارة والباردة، خطوط الصرف، شبكة الري، الخزانات والمسابح، وإصدار تقرير فني رسمي معتمد لتقديمه في تطبيق شركة المياه الوطنية (NWC) لإسقاط المبالغ المفوترة خطأ وتعديل الاستهلاك.",
    heroImage: "/images/services/leak-detection-hero.webp",
    flatPrice: 199,
    technicalSpecs: {
      chemicalMaterial: "أجهزة كشف SebaKMT الألمانية + غاز النيتروجين المضغوط + كاميرات FLIR",
      density: "دقة تحديد موضع الكسر 99.8% في مساحة 15×15 سم",
      thickness: "فحص تحت البلاط والخرسانة حتى عمق 3 أمتار",
      kValue: "غير منطبق (فحص كهروسمعي وحراري)",
      warrantyYears: 5,
      approvalBodies: ["شركة المياه الوطنية NWC", "منصة التدقيق المائي"],
      sbcCode: "معايير الترشيد والتدقيق المائي المعتمدة",
    },
    articles: [
      {
        id: "art-leak-1",
        slug: "how-to-fix-high-water-bill-nwc-riyadh",
        categorySlug: "water-leak-detection",
        categoryName: "كشف تسربات المياه",
        title: "دليل حل وتخفيض فاتورة المياه المرتفعة بالرياض عبر التقرير الهندسي المعتمد",
        metaTitle: "حل ارتفاع فاتورة المياه بالرياض | تقرير معتمد شركة المياه",
        metaDescription: "طريقة الاعتراض على فاتورة المياه في تطبيق NWC والحصول على تقرير كشف تسربات معتمد لحذف المبالغ الزائدة بالرياض.",
        excerpt:
          "خطوات رسمية معتمدة لحذف مبالغ فواتير المياه المرتفعة: كشف التسربات بالأجهزة، إصلاح الكسر، واستخراج التقرير الفني المعتمد.",
        publishedDate: "2026-08-25",
        readingTime: "6 دقائق قراءة",
        author: {
          name: "م. سامي الزهراني",
          role: "خبير تدقيق مائي وكشف تسربات",
          avatar: "/images/authors/engineer.webp",
        },
        targetKeywords: [
          "كشف تسربات المياه بالرياض",
          "تقرير كشف تسربات معتمد شركة المياه",
          "حل ارتفاع فاتورة المياه",
        ],
        tableOfContents: [
          { id: "causes", text: "أسباب الارتفاع المفاجئ في فواتير المياه" },
          { id: "detection-tech", text: "تقنيات الكشف بالنيتروجين والكاميرات الحرارية" },
          { id: "nwc-steps", text: "خطوات رفع التقرير وتعديل الفاتورة" },
        ],
        articleBody: `
<h2 id="causes">أسباب الارتفاع المفاجئ في فواتير المياه</h2>
<p>ترجع الفواتير المرتفعة في الغالب لتهريب عوامة الخزان الأرضي، شروخ جدران الخزان، أو كسر خفي في خط التغذية الرئيسي الواصل بين العداد والخزان.</p>
<h2 id="detection-tech">تقنيات الكشف بالنيتروجين والكاميرات الحرارية</h2>
<p>نقوم بضغط خطوط المياه بالنيتروجين واستخدام لاقط الذبذبات الصوتي لتحديد مكان الكسر بدقة بلاطة واحدة دون تكسير.</p>
<h2 id="nwc-steps">خطوات رفع التقرير وتعديل الفاتورة</h2>
<p>يصدر مهندسنا تقريراً رسمياً مختوماً يقدمه العميل عبر تطبيق NWC ليتم إعادة جدولة الفاتورة وإسقاط المبالغ الزائدة.</p>
        `,
        faqs: [
          {
            question: "كم تكلفة فحص كشف التسربات؟",
            answer: "يبدأ الفحص الشامل بالأجهزة الإلكترونية من 199 ريالاً مع التقرير المعتمد.",
          },
        ],
      },
    ],
    projects: [
      {
        id: "proj-leak-sahafa",
        slug: "leak-detection-residential-building-al-sahafa",
        categorySlug: "water-leak-detection",
        categoryName: "كشف تسربات المياه",
        title: "كشف تسرب خفي في خط التغذية لعمارة سكنية بحي الصحافة بالرياض",
        neighborhood: "حي الصحافة — شمال الرياض",
        city: "الرياض",
        projectArea: "عمارة 8 شقق",
        executionDuration: "3 ساعات فحص وإصلاح",
        warrantyIssued: "5 سنوات ضمان الإصلاح + تقرير معتمد",
        approvalBadge: "تم خفض الفاتورة لدى NWC",
        summary:
          "تحديد كسر خفي تحت بلاط المدخل في خط التغذية الرئيسي بضغط غاز النيتروجين، وإصلاحه بتكسير بلاطة واحدة (30×30 سم) وتقديم تقرير معتمد خفض الفاتورة من 4,200 إلى 150 ريال.",
        problemDescription:
          "فاتورة مياه شهرية 4,200 ريال وظهور رطوبة في المدخل دون معرفة موضع الماسورة المكسورة تحت الرخام.",
        solutionEngineering:
          "ضغط الخط بالنيتروجين واستخدام لاقط الذبذبات الصوتي لتحديد موضع الكسر بدقة، واستبدال القطعة بأنبوب بولي بروبلين حراري ألماني.",
        resultsAchieved: [
          { label: "الفاتورة الشهرية", metric: "150 ر.س", detail: "انخفاض من 4,200 إلى 150 ريال" },
          { label: "هدر المياه اليومي", metric: "0 لتر", detail: "توفير أكثر من 700 لتر يومياً" },
        ],
        media: {
          beforeDesc: "فاتورة 4,200 ريال ورطوبة تحت رخام المدخل.",
          duringDesc: "الكشف بأجهزة النيتروجين وتحديد الكسر في بلاطة واحدة.",
          afterDesc: "إصلاح الماسورة واعتماد التقرير لدى NWC بنجاح.",
          beforeImages: ["/images/projects/before-4.webp"],
          duringImages: ["/images/projects/during-4.webp"],
          afterImages: ["/images/projects/after-4.webp"],
        },
        seoKeywordsUsed: ["كشف تسربات حي الصحافة", "تقرير شركة المياه المعتمد الرياض"],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
     4. TANK INSULATION & EPOXY (عزل وترميم خزانات المياه بالإيبوكسي)
  ══════════════════════════════════════════ */
  {
    id: "tank-insulation-epoxy",
    slug: "tank-insulation-epoxy",
    titleAr: "عزل وترميم خزانات المياه بالإيبوكسي",
    titleEn: "Potable Water Tank Epoxy & Polymer Insulation",
    badgeText: "إيبوكسي غذائي صحي معتمد لمياه الشرب (BS 6920)",
    shortSummary:
      "عزل الخزانات الأرضية والعلوية بالإيبوكسي الصحي المعتمد مع معالجة الشروخ والتعشيش ومنع تسرب المياه الجوفية.",
    fullOverview:
      "حماية خزانات مياه الشرب الخرسانية من تسرب المياه الجوفية الملوثة ومنع هدر المياه المخزونة. نقوم بمعالجة الشروخ والتعشيش الإنشائي بمواد إسمنتية بوليمرية غير قابلة للانكماش وتطبيق طبقتين من الإيبوكسي الغذائي الأزرق المعتمد صحياً لمياه الشرب والخالي تماماً من المذيبات السامة.",
    heroImage: "/images/services/tank-insulation-hero.webp",
    basePricePerMeter: 55,
    technicalSpecs: {
      chemicalMaterial: "إيبوكسي مائي غذائي خالي من المذيبات (Solvent-Free) + مونة سيكا بوليمرية",
      density: "مقاومة ضغط مائي إيجابي وسلبي حتى 5 بار",
      thickness: "طبقتين بسماكة إجمالية 600 - 800 ميكرون",
      kValue: "غير منفذ للمياه 100%",
      warrantyYears: 10,
      approvalBodies: ["هيئة الغذاء والدواء", "المواصفات البريطانية BS 6920"],
      sbcCode: "كود البناء السعودي للمنشآت المائية",
    },
    articles: [
      {
        id: "art-tank-1",
        slug: "ground-water-tank-insulation-steps-riyadh",
        categorySlug: "tank-insulation-epoxy",
        categoryName: "عزل وترميم خزانات المياه",
        title: "خطوات عزل الخزان الأرضي بالإيبوكسي الصحي ومعالجة تغلغل المياه الجوفية بالرياض",
        metaTitle: "عزل خزانات مياه بالرياض | إيبوكسي غذائي ومعالجة شروخ",
        metaDescription: "طرق تنظيف وعزل الخزان الأرضي الخرساني بالإيبوكسي المعتمد لمياه الشرب ومعالجة التعشيش والشروخ بضمان 10 سنوات.",
        excerpt:
          "الدليل الصحي لعزل خزانات مياه الشرب: تفريغ الخزان، معالجة الشروخ بمونة سيكا، وتطبيق الإيبوكسي الأزرق المقاوم للطحالب والبكتيريا.",
        publishedDate: "2026-08-18",
        readingTime: "5 دقائق قراءة",
        author: {
          name: "م. حسام الدين",
          role: "استشاري بيئي وصحة مياه",
          avatar: "/images/authors/engineer.webp",
        },
        targetKeywords: [
          "عزل خزانات المياه بالرياض",
          "عزل خزان أرضي إيبوكسي",
          "علاج تسريب الخزان الأرضي",
        ],
        tableOfContents: [
          { id: "cleaning", text: "التنظيف الميكانيكي وتفريغ الرواسب" },
          { id: "crack-repair", text: "معالجة الشروخ والتعشيش بمواد بوليمرية" },
          { id: "epoxy-coating", text: "تطبيق الإيبوكسي الغذائي المعتمد" },
        ],
        articleBody: `
<h2 id="cleaning">التنظيف الميكانيكي وتفريغ الرواسب</h2>
<p>يتم سحب المياه وغسيل الجدران بمضخات الضغط العالي لإزالة الطحالب وتبيان الشروخ الخرسانية بدقة.</p>
<h2 id="crack-repair">معالجة الشروخ والتعشيش بمواد بوليمرية</h2>
<p>تفتح الشروخ وتعبأ بمونة سيكا غير منكمشة مع صب رقبة زجاجة دائرية عند الزوايا.</p>
<h2 id="epoxy-coating">تطبيق الإيبوكسي الغذائي المعتمد</h2>
<p>يدهن الخزان بوجهين من الإيبوكسي الأزرق المعتمد صحياً لمياه الشرب وتركه يجف 48 ساعة قبل ملئه.</p>
        `,
        faqs: [
          {
            question: "هل الإيبوكسي آمن لمياه الشرب؟",
            answer: "نعم، نستخدم إيبوكسي خالي تماماً من المذيبات ومطابق للمواصفة البريطانية BS 6920 المعتمدة صحياً لمياه الشرب.",
          },
        ],
      },
    ],
    projects: [
      {
        id: "proj-tank-yasmin",
        slug: "epoxy-water-tank-insulation-al-yasmin-riyadh",
        categorySlug: "tank-insulation-epoxy",
        categoryName: "عزل وترميم خزانات المياه",
        title: "ترميم وعزل خزان مياه أرضي لفيلا سكنية بحي الياسمين بالرياض",
        neighborhood: "حي الياسمين — الرياض",
        city: "الرياض",
        projectArea: "سعة 50 م³",
        executionDuration: "يومان عمل",
        warrantyIssued: "ضمان 10 سنوات موثق",
        approvalBadge: "إيبوكسي غذائي معتمد",
        summary:
          "معالجة شروخ في جدران خزان أرضي خرساني وتطبيق عزل إيبوكسي مائي أزرق صحي ومعتمد لمياه الشرب مع تطهير الخزان بنسبة 100%.",
        problemDescription:
          "تداخل مياه جوفية ملوثة مع مياه الشرب عبر شروخ في اللياسة وهبوط مستوى المياه باستمرار.",
        solutionEngineering:
          "تفريغ الخزان، معالجة الشروخ بمونة سيكا مونوتوب، عمل زوايا دائرية، ودهان طبقتين إيبوكسي غذائي صحي معتمد مع اختبار الغمر.",
        resultsAchieved: [
          { label: "مقاومة المياه الجوفية", metric: "100%", detail: "عزل تام يمنع التلوث" },
          { label: "نقاء مياه الشرب", metric: "صالح للشرب", detail: "مطابق للمعايير الصحية" },
        ],
        media: {
          beforeDesc: "شروخ وتغلغل مياه جوفية كبريتية داخل خزان مياه الشرب.",
          duringDesc: "معالجة الشروخ وحقن الفواصل بمونة بوليمرية غير منكمشة.",
          afterDesc: "خزان معزول بالإيبوكسي الأزرق الأملس المقاوم للبكتيريا.",
          beforeImages: ["/images/projects/before-5.webp"],
          duringImages: ["/images/projects/during-5.webp"],
          afterImages: ["/images/projects/after-5.webp"],
        },
        seoKeywordsUsed: ["عزل خزانات حي الياسمين", "إيبوكسي خزان مياه الرياض"],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════════
     5. POOLS & BATHROOMS (عزل المسابح والحمامات)
  ══════════════════════════════════════════ */
  {
    id: "pools-bathrooms",
    slug: "pools-bathrooms",
    titleAr: "عزل المسابح، الحمامات، والمطابخ",
    titleEn: "Swimming Pools & Wet Areas Waterproofing",
    badgeText: "مقاوم للضغط الهيدروستاتيكي والكلور",
    shortSummary:
      "عزل مائي متقدم للمسابح ودورات المياه بالمواد الإسمنتية البوليمرية المرنة وشبك الفايبر جلاس مع اختبار ضغط السباكة.",
    fullOverview:
      "عزل المناطق الرطبة المعرضة لضغط المياه الدائم بأحدث العوازل الإسمنتية البوليمرية المرنة ثنائية المكونات (2K) والمدعمة بألياف الفايبر جلاس، لضمان عدم تسريب نقطة ماء واحدة للأدوار السفلية أو الغرف المجاورة ومقاومة الكلور والكيماويات في أحواض السباحة.",
    heroImage: "/images/services/pools-insulation-hero.webp",
    basePricePerMeter: 50,
    technicalSpecs: {
      chemicalMaterial: "عازل إسمنتي بوليمري مرن (2K) + شبك ألياف زجاجية فايبر جلاس + بولي يوريا للفتحات",
      density: "استطالة ومرونة تفوق 120%",
      thickness: "طبقتين بسماكة 2.5 إلى 3 ملم",
      kValue: "مقاوم للضغط المائي حتى 5 بار",
      warrantyYears: 10,
      approvalBodies: ["الهيئة السعودية للمواصفات SASO", "كود البناء السعودي"],
      sbcCode: "EN 14891 / SBC",
    },
    articles: [
      {
        id: "art-pool-1",
        slug: "bathroom-waterproofing-before-tiling-riyadh",
        categorySlug: "pools-bathrooms",
        categoryName: "عزل المسابح والحمامات",
        title: "خطوات عزل الحمامات والمطابخ قبل التبليط والدفان لتفادي التسريب بالرياض",
        metaTitle: "عزل حمامات قبل البلاط بالرياض | خطوات العزل واختبار السباكة",
        metaDescription: "الدليل الشامل لعزل أرضيات دورات المياه والمطابخ بالمواد الإسمنتية المرنة وشبك الفايبر جلاس واختبار الغمر بالرياض.",
        excerpt:
          "المعايير الهندسية لعزل أرضيات الحمامات: معالجة رقبة الزجاجة، تدعيم الصفاية بشبك الفايبر، واختبار الغمر بالماء قبل التبليط.",
        publishedDate: "2026-08-12",
        readingTime: "5 دقائق قراءة",
        author: {
          name: "م. إبراهيم العتيبي",
          role: "مهندس تشطيبات وعزل مباني",
          avatar: "/images/authors/engineer.webp",
        },
        targetKeywords: [
          "عزل حمامات قبل البلاط بالرياض",
          "عازل إسمنتي مرن للحمام",
          "اختبار غمر دورات المياه",
        ],
        tableOfContents: [
          { id: "plumbing-test", text: "اختبار ضغط السباكة قبل العزل" },
          { id: "cementitious-layers", text: "تطبيق العازل الإسمنتي المرن وشبك الفايبر" },
        ],
        articleBody: `
<h2 id="plumbing-test">اختبار ضغط السباكة قبل العزل</h2>
<p>يتم ضغط شبكة التغذية بالماء حتى 15 بار للتأكد من سلامة المواسير قبل صب الوتر الخرساني.</p>
<h2 id="cementitious-layers">تطبيق العازل الإسمنتي المرن وشبك الفايبر</h2>
<p>يدهن وجهان من العازل الإسمنتي المرن مع غرس شبك فايبر جلاس حول الصفاية والزوايا والارتفاع 30 سم على الجدران.</p>
        `,
        faqs: [
          {
            question: "كم مدة اختبار غمر الحمام بالماء؟",
            answer: "يتم غمر الحمام بالماء لمدة 48 ساعة متواصلة للتأكد من عدم وجود أي تسريب للسقف السفلي.",
          },
        ],
      },
    ],
    projects: [
      {
        id: "proj-pool-laban",
        slug: "swimming-pool-waterproofing-dhahrat-laban",
        categorySlug: "pools-bathrooms",
        categoryName: "عزل المسابح والحمامات",
        title: "عزل واختبار مسبح أوفر فلو خرساني لقصر بحي ظهرة لبن غرب الرياض",
        neighborhood: "حي ظهرة لبن — غرب الرياض",
        city: "الرياض",
        projectArea: "140 م²",
        executionDuration: "4 أيام عمل",
        warrantyIssued: "ضمان 10 سنوات موثق",
        approvalBadge: "مقاوم للكلور وضغط 5 بار",
        summary:
          "عزل مسبح خرساني بنظام إسمنتي بوليمري مرن مدعم بشبكة فايبر جلاس ومعالجة فتحات الإضاءة والمخارج بمعجون بولي يوريثان خاص واختبار الغمر بنجاح.",
        problemDescription:
          "وجود ضغط مائي عالٍ وشروخ دقيقة ناتجة عن إجهاد التربة الصخرية حول المسبح وتسرب المياه لغرفة المضخات المجاورة.",
        solutionEngineering:
          "معالجة التعشيش بمونة بوليمرية، تركيب شريط وترستوب حول فتحات الإسكيمر، دهان طبقتين عازل إسمنتي مرن مع شبك فايبر واختبار الغمر 72 ساعة.",
        resultsAchieved: [
          { label: "مقاومة ضغط المياه", metric: "5 بار", detail: "تحمل هيدروستاتيكي كامل" },
          { label: "ثبات منسوب المسبح", metric: "100%", detail: "انعدام أي تسريب بعد الاختبار" },
        ],
        media: {
          beforeDesc: "حوض المسبح قبل العزل مع وجود تعشيش وتسريب لغرفة المضخات.",
          duringDesc: "تطبيق العازل الإسمنتي المرن وتثبيت شبك الفايبر جلاس.",
          afterDesc: "مسبح معزول بالكامل ومبلط بالفسيفساء بضمان 10 سنوات.",
          beforeImages: ["/images/projects/before-6.webp"],
          duringImages: ["/images/projects/during-6.webp"],
          afterImages: ["/images/projects/after-6.webp"],
        },
        seoKeywordsUsed: ["عزل مسابح حي ظهرة لبن", "عزل مسابح بالرياض"],
      },
    ],
  },
];

/* ─── Query Functions ─────────────────────────────────────────────────────── */

export function getAllCategories(): KnowledgeCategory[] {
  return insulationKnowledgeBase;
}

export function getCategoryBySlug(slug: string): KnowledgeCategory | undefined {
  return insulationKnowledgeBase.find((c) => c.slug === slug);
}

export function getAllProjects(): KnowledgeProject[] {
  return insulationKnowledgeBase.flatMap((c) => c.projects);
}

export function getProjectBySlug(slug: string): KnowledgeProject | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getAllArticles(): KnowledgeArticle[] {
  return insulationKnowledgeBase.flatMap((c) => c.articles);
}

export function getArticleBySlug(slug: string): KnowledgeArticle | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}
