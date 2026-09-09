import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Shield, CheckCircle2, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | شركة المعمورة للعوازل بالرياض",
  description:
    "سياسة الخصوصية لشركة المعمورة للمقاولات العامة والعوازل. تعرف على كيفية جمع بياناتك وحمايتها واستخدامها.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
  robots: { index: true, follow: true },
};

const lastUpdated = "10 سبتمبر 2025";

export default function PrivacyPolicyPage() {
  return (
    <div
      className="min-h-screen bg-slate-950 text-white text-right"
      dir="rtl"
    >
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 border-b border-white/10 py-16 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 border border-sky-400/30 px-4 py-1.5 text-xs font-bold text-sky-300 mb-5">
            <Shield className="h-4 w-4" />
            <span>سياسة الخصوصية</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
            سياسة الخصوصية
          </h1>
          <p className="text-slate-400 text-sm">
            آخر تحديث: {lastUpdated}
          </p>
        </div>
      </section>

      {/* ─── Content ──────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14 space-y-10 text-slate-300 leading-relaxed">

        {/* Intro */}
        <div className="rounded-2xl bg-sky-500/10 border border-sky-400/20 p-6">
          <p className="text-sm">
            نحن في <strong className="text-white">شركة المعمورة للمقاولات العامة للعوازل</strong> نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. تصف هذه السياسة كيف نجمع معلوماتك ونستخدمها ونحميها عند تصفحك لموقعنا الإلكتروني{" "}
            <a href={siteConfig.url} className="text-sky-400 underline">
              {siteConfig.url}
            </a>
            {" "}أو تواصلك معنا.
          </p>
        </div>

        {/* Section 1 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-black">١</span>
            البيانات التي نجمعها
          </h2>
          <ul className="space-y-2 text-sm pr-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-sky-400 mt-0.5 shrink-0" />
              <span><strong className="text-white">الاسم ورقم الجوال:</strong> عند ملء نموذج طلب المعاينة أو التواصل عبر واتساب.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-sky-400 mt-0.5 shrink-0" />
              <span><strong className="text-white">البريد الإلكتروني:</strong> عند التواصل عبر البريد الرسمي.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-sky-400 mt-0.5 shrink-0" />
              <span><strong className="text-white">بيانات التصفح:</strong> بيانات تقنية مثل عنوان IP ونوع المتصفح من خلال Google Analytics (مجهولة الهوية).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-sky-400 mt-0.5 shrink-0" />
              <span><strong className="text-white">الخدمة والموقع الجغرافي:</strong> الحي في الرياض ونوع الخدمة المطلوبة لتنسيق المعاينة.</span>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-black">٢</span>
            كيف نستخدم بياناتك
          </h2>
          <ul className="space-y-2 text-sm pr-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 shrink-0" />
              <span>التواصل معك لتأكيد موعد المعاينة وتقديم خدماتنا.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 shrink-0" />
              <span>إرسال عروض أسعار أو معلومات تقنية تتعلق بالخدمة التي طلبتها.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 shrink-0" />
              <span>تحسين تجربة الموقع وتحليل حركة الزيارات بشكل مجهول.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-teal-400 mt-0.5 shrink-0" />
              <span><strong className="text-white">لا</strong> نبيع بياناتك أو نشاركها مع أطراف خارجية لأغراض تسويقية.</span>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-black">٣</span>
            الكوكيز (ملفات تعريف الارتباط)
          </h2>
          <p className="text-sm">
            يستخدم موقعنا ملفات تعريف الارتباط الضرورية لعمل الموقع بشكل صحيح. قد تستخدم أدوات تحليل الزيارات مثل Google Analytics ملفات تعريف إضافية لقياس الأداء. يمكنك إيقاف الكوكيز من إعدادات متصفحك في أي وقت.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-black">٤</span>
            حماية البيانات وأمانها
          </h2>
          <p className="text-sm">
            يستخدم الموقع بروتوكول HTTPS لتشفير جميع البيانات المنقولة بينك وبين الخادم. لا يتم تخزين بيانات الدفع على خوادمنا. يحق لك طلب حذف بياناتك في أي وقت بالتواصل معنا.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-black">٥</span>
            روابط خارجية
          </h2>
          <p className="text-sm">
            قد يحتوي موقعنا على روابط لمنصات خارجية (واتساب، تيك توك، إكس). هذه المنصات لها سياسات خصوصية مستقلة ولا نتحمل المسؤولية عن ممارساتها.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-black">٦</span>
            حقوقك
          </h2>
          <ul className="space-y-2 text-sm pr-4">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold-400 mt-0.5 shrink-0" />
              <span>الحق في الاطلاع على بياناتك الشخصية التي نحتفظ بها.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold-400 mt-0.5 shrink-0" />
              <span>الحق في طلب تصحيح بياناتك.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold-400 mt-0.5 shrink-0" />
              <span>الحق في طلب حذف بياناتك من أنظمتنا.</span>
            </li>
          </ul>
        </div>

        {/* Section 7 — Contact */}
        <div className="rounded-2xl bg-slate-900 border border-white/10 p-6">
          <h2 className="text-lg font-bold text-white mb-4">التواصل بخصوص الخصوصية</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-sky-400 shrink-0" />
              <a href={`mailto:${siteConfig.business.email}`} className="text-sky-400 hover:underline">
                {siteConfig.business.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-sky-400 shrink-0" />
              <a href={`tel:${siteConfig.phone.primary}`} className="text-sky-400 hover:underline" dir="ltr">
                {siteConfig.phone.display.primary}
              </a>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="pt-4 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 transition-colors"
          >
            ← العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </section>
    </div>
  );
}
