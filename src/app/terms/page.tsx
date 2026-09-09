import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "الشروط والأحكام | شركة المعمورة للعوازل بالرياض",
  description:
    "الشروط والأحكام العامة لاستخدام موقع وخدمات شركة المعمورة للمقاولات العامة والعوازل بالرياض.",
  alternates: {
    canonical: `${siteConfig.url}/terms`,
  },
  robots: { index: true, follow: true },
};

const lastUpdated = "10 سبتمبر 2025";

export default function TermsPage() {
  return (
    <div
      className="min-h-screen bg-slate-950 text-white text-right"
      dir="rtl"
    >
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 border-b border-white/10 py-16 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold-500/15 border border-gold-400/30 px-4 py-1.5 text-xs font-bold text-gold-300 mb-5">
            <FileText className="h-4 w-4" />
            <span>الشروط والأحكام</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
            الشروط والأحكام العامة
          </h1>
          <p className="text-slate-400 text-sm">آخر تحديث: {lastUpdated}</p>
        </div>
      </section>

      {/* ─── Content ──────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-10 text-slate-300 leading-relaxed">

        {/* Intro */}
        <div className="rounded-2xl bg-gold-500/10 border border-gold-400/20 p-6">
          <p className="text-sm">
            باستخدامك لموقع{" "}
            <a href={siteConfig.url} className="text-gold-400 underline">
              {siteConfig.url}
            </a>{" "}
            أو خدمات{" "}
            <strong className="text-white">شركة المعمورة للمقاولات العامة للعوازل</strong>،
            فإنك توافق على الشروط والأحكام المذكورة أدناه. يُرجى قراءتها بعناية.
          </p>
        </div>

        {/* Section 1 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-600 text-xs font-black text-white">١</span>
            الخدمات المقدمة
          </h2>
          <p className="text-sm mb-3">
            تقدم شركة المعمورة خدمات متخصصة في:
          </p>
          <ul className="space-y-2 text-sm pr-4">
            {[
              "عزل أسطح الفوم البولي يوريثان الحراري والمائي",
              "عزل مائي بالرولات البيتومينية وبولي يوريا",
              "كشف تسربات المياه بالأجهزة الإلكترونية بدون تكسير",
              "عزل وترميم خزانات المياه بالإيبوكسي الغذائي",
              "ترميم وتجديد وصيانة الحمامات والمسابح",
            ].map((s) => (
              <li key={s} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold-400 mt-0.5 shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-600 text-xs font-black text-white">٢</span>
            طلب الخدمة والمعاينة
          </h2>
          <ul className="space-y-2 text-sm pr-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-sky-400 mt-0.5 shrink-0" />
              <span>طلب المعاينة عبر الموقع أو واتساب لا يُلزم العميل بأي التزام مالي.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-sky-400 mt-0.5 shrink-0" />
              <span>تُقدَّم عروض الأسعار بعد الفحص الميداني وتكون سارية لمدة 14 يوماً.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-sky-400 mt-0.5 shrink-0" />
              <span>يُبدأ التنفيذ فور توقيع عقد العمل وسداد الدفعة الأولى المتفق عليها.</span>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-600 text-xs font-black text-white">٣</span>
            الضمانات
          </h2>
          <p className="text-sm">
            تقدم الشركة ضمانات رسمية موثقة على أعمال العزل تتراوح بين 10 و15 سنة وفقاً لنوع الخدمة والمواد المستخدمة. الضمان يشمل إعادة الإصلاح المجاني في حال ظهور عيب ناتج عن التنفيذ ضمن الشروط المحددة في عقد الضمان.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-600 text-xs font-black text-white">٤</span>
            حقوق الملكية الفكرية
          </h2>
          <p className="text-sm">
            جميع محتويات الموقع من صور ونصوص وتصاميم وفيديوهات هي ملك حصري لشركة المعمورة ومحمية بموجب نظام الملكية الفكرية السعودي. يُحظر إعادة نشر أي محتوى دون إذن كتابي مسبق.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-600 text-xs font-black text-white">٥</span>
            حدود المسؤولية
          </h2>
          <p className="text-sm">
            لا تتحمل الشركة المسؤولية عن أي أضرار تنتج عن سوء استخدام الموقع أو الاعتماد على معلوماته دون الرجوع إلى فريقنا الهندسي. تُعد الأسعار المعروضة على الموقع تقديرية وقد تختلف بعد المعاينة الميدانية.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-600 text-xs font-black text-white">٦</span>
            القانون المطبق
          </h2>
          <p className="text-sm">
            تخضع هذه الشروط لأحكام نظام التجارة الإلكترونية ونظام الملكية الفكرية في <strong className="text-white">المملكة العربية السعودية</strong>. تُحسم أي نزاعات عبر المحاكم المختصة في مدينة <strong className="text-white">الرياض</strong>.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-600 text-xs font-black text-white">٧</span>
            تعديل الشروط
          </h2>
          <p className="text-sm">
            تحتفظ شركة المعمورة بحق تعديل هذه الشروط في أي وقت. يُعتبر استمرار استخدامك للموقع بعد نشر التعديلات موافقةً ضمنية على الشروط المحدثة.
          </p>
        </div>

        {/* Back link */}
        <div className="pt-4 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gold-400 hover:text-gold-300 transition-colors"
          >
            ← العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </section>
    </div>
  );
}
