import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "اتصل بنا | شركة المعمورة للعوازل بالرياض",
  description:
    "تواصل مع شركة المعمورة للمقاولات العامة والعوازل بالرياض. اتصل بنا عبر الهاتف أو واتساب أو البريد الإلكتروني للحصول على معاينة مجانية.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  const { phone, business, whatsapp } = siteConfig;

  return (
    <div
      className="min-h-screen bg-slate-950 text-white text-right"
      dir="rtl"
    >
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 border-b border-white/10 py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/15 border border-teal-400/30 px-4 py-1.5 text-xs font-bold text-teal-300 mb-5">
            <MessageCircle className="h-4 w-4" />
            <span>تواصل معنا</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
            اتصل بنا
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            فريقنا الهندسي متاح على مدار 24 ساعة لتقديم المعاينات الميدانية المجانية وعروض الأسعار في جميع أحياء الرياض.
          </p>
        </div>
      </section>

      {/* ─── Contact Grid ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── Left: Contact Details ────────────────────────────────────── */}
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-white mb-5">معلومات التواصل</h2>

            {/* Phone */}
            <a
              href={`tel:${phone.primary}`}
              id="contact-page-phone"
              className="flex items-start gap-4 rounded-2xl bg-slate-900 border border-white/10 p-5 hover:border-blue-400/40 transition-all group"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">الاتصال الهاتفي المباشر</p>
                <p className="text-lg font-black text-white group-hover:text-blue-300 transition-colors" dir="ltr">
                  {phone.display.primary}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">متاح 24/7 — طوارئ وحالات عاجلة</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`${whatsapp.url}?text=${encodeURIComponent("مرحباً، أريد الاستفسار عن خدمات العزل وكشف التسربات")}`}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-page-whatsapp"
              className="flex items-start gap-4 rounded-2xl bg-slate-900 border border-white/10 p-5 hover:border-wa-green-400/40 transition-all group"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-wa-green-500 text-white">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">واتساب مباشر</p>
                <p className="text-base font-bold text-white group-hover:text-wa-green-400 transition-colors" dir="ltr">
                  +{whatsapp.number}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">رد خلال دقائق وتحديد موعد فوري</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${business.email}`}
              id="contact-page-email"
              className="flex items-start gap-4 rounded-2xl bg-slate-900 border border-white/10 p-5 hover:border-sky-400/40 transition-all group"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">البريد الإلكتروني الرسمي</p>
                <p className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors break-all">
                  {business.email}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">للعروض الرسمية والتقارير والعقود</p>
              </div>
            </a>

            {/* Working Hours */}
            <div className="flex items-start gap-4 rounded-2xl bg-slate-900 border border-white/10 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-600 text-white">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-0.5">ساعات العمل</p>
                <p className="text-base font-bold text-white">من الأحد إلى السبت</p>
                <p className="text-sm text-gold-400 font-semibold">07:00 صباحاً — 10:00 مساءً</p>
                <p className="text-xs text-slate-500 mt-0.5">حالات الطوارئ: متاح 24 ساعة</p>
              </div>
            </div>
          </div>

          {/* ── Right: Address + Quick CTA ───────────────────────────────── */}
          <div className="space-y-5">

            {/* Physical Address — Required by Google Ads policy */}
            <div className="rounded-2xl bg-slate-900 border border-white/10 p-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-teal-400" />
                العنوان الرسمي للشركة
              </h2>
              <address className="not-italic space-y-2 text-sm text-slate-300">
                <p className="font-bold text-white text-base">
                  {siteConfig.name.ar}
                </p>
                <p>{business.address.streetAddress}</p>
                <p>{business.address.addressLocality}، {business.address.addressRegion}</p>
                <p>الرمز البريدي: {business.address.postalCode}</p>
                <p>{business.address.addressCountry === "SA" ? "المملكة العربية السعودية" : business.address.addressCountry}</p>
                <hr className="border-white/10 my-3" />
                <p className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                  <a href={`tel:${phone.primary}`} dir="ltr" className="text-sky-400 hover:underline">
                    {phone.display.primary}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                  <a href={`mailto:${business.email}`} className="text-sky-400 hover:underline break-all">
                    {business.email}
                  </a>
                </p>
              </address>
            </div>

            {/* Trust Badges */}
            <div className="rounded-2xl bg-slate-900 border border-white/10 p-6">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-sky-400" />
                لماذا المعمورة؟
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-300">
                {[
                  "معتمدون لدى شركة الكهرباء السعودية",
                  "معتمدون لدى شركة المياه الوطنية NWC",
                  "ضمان رسمي 10-15 سنة على جميع أعمال العزل",
                  "أكثر من 3500 مشروع منجز في الرياض",
                  "فريق هندسي مؤهل ومعتمد",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-teal-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href={`${whatsapp.url}?text=${encodeURIComponent("مرحباً، أريد حجز موعد معاينة مجانية")}`}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-page-cta"
              className="flex items-center justify-center gap-3 w-full rounded-2xl bg-wa-green-500 hover:bg-wa-green-600 py-4 text-base font-black text-white shadow-xl shadow-wa-green-500/30 transition-all hover:scale-[1.02]"
            >
              <CalendarCheck className="h-5 w-5" />
              احجز معاينة مجانية الآن عبر واتساب
            </a>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition-colors"
          >
            ← العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </section>
    </div>
  );
}
