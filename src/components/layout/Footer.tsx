import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Phone,
  Mail,
  MapPin,
  Droplets,
  Clock,
  Star,
} from "lucide-react";

const serviceLinks = [
  { label: "كشف تسربات المياه", href: "/#services" },
  { label: "عزل الأسطح بالفوم", href: "/#services" },
  { label: "العزل المائي للأسطح", href: "/#services" },
  { label: "كشف تسربات الحمامات", href: "/#services" },
  { label: "كشف تسربات الخزانات", href: "/#services" },
];

const quickLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "خدماتنا", href: "/#services" },
  { label: "لماذا نحن؟", href: "/#why-us" },
  { label: "مناطق الخدمة", href: "/#coverage" },
  { label: "اتصل بنا", href: "/#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-surface-950 text-white"
      role="contentinfo"
      aria-label="تذييل الصفحة"
    >
      {/* ── Top CTA Banner ── */}
      <div className="gradient-brand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">
                هل تعاني من تسرب مياه أو سطح غير معزول؟
              </h2>
              <p className="text-blue-brand-100">
                تواصل معنا الآن للحصول على فحص مجاني وعرض سعر فوري
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 justify-center">
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-btn"
                className="inline-flex items-center gap-2 rounded-full bg-wa-green-500 hover:bg-wa-green-600 px-6 py-3 font-bold text-white shadow-lg transition-all hover:scale-105"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.11 1.522 5.837L.057 23.49a.75.75 0 0 0 .921.921l5.663-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
                تواصل عبر واتساب
              </a>
              <a
                href={`tel:${siteConfig.phone.primary}`}
                id="footer-phone-btn"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 hover:border-white/80 bg-white/10 hover:bg-white/20 px-6 py-3 font-bold text-white transition-all hover:scale-105"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                <span dir="ltr">{siteConfig.phone.display.primary}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Content ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Col 1 — Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 group mb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-brand shadow-md">
                <Droplets className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-bold text-white">{siteConfig.name.short.ar}</span>
                <span className="text-[10px] text-gold-400 font-medium">كشف تسربات • عزل أسطح</span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-white/60 mb-6 max-w-xs">
              {siteConfig.description.ar}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-sm font-semibold text-gold-400">4.9</span>
              <span className="text-sm text-white/50">(+247 تقييم)</span>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              {/* WhatsApp */}
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="واتساب"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-wa-green-500/20 hover:bg-wa-green-500 text-wa-green-400 hover:text-white transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.11 1.522 5.837L.057 23.49a.75.75 0 0 0 .921.921l5.663-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
              {/* Snapchat */}
              <a
                href={siteConfig.social.snapchat.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`سناب شات ${siteConfig.social.snapchat.display}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-snap-yellow-500/20 hover:bg-snap-yellow-500 text-snap-yellow-500 hover:text-tiktok-dark transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M12.065.001C9.335-.023 5.373 1.033 3.61 5.09c-.62 1.422-.478 3.865-.478 5.31 0 .008-.226.085-.563.085-.388 0-.83-.118-1.248-.41a.755.755 0 0 0-.433-.124c-.422 0-.888.3-.888.756 0 .662 1.058 1.184 1.967 1.39.072.017.143.032.213.047-.085.292-.222.805-.222 1.198 0 .06.004.12.013.178.078.506.46.89.986.89.387 0 .742-.135 1.065-.25.466-.165.937-.272 1.42-.272.54 0 .962.162 1.54.56 1.2.822 2.19 1.24 3.41 1.24.967 0 1.805-.274 2.704-.78.572.12 1.143.252 1.657.38.374.093.714.175.98.175.353 0 .616-.09.78-.277.16-.184.194-.437.09-.718l-.036-.097.036-.005c.87-.138 1.95-.563 1.95-1.385 0-.428-.38-.75-.89-.75a.73.73 0 0 0-.424.13c-.39.27-.85.384-1.235.384-.335 0-.558-.075-.558-.082v-.003c0-1.446.143-3.902-.48-5.327C18.686 1.022 14.75-.022 12.065 0z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a
                href={siteConfig.social.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`تيك توك ${siteConfig.social.tiktok.display}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-tiktok-dark text-white/70 hover:text-tiktok-cyan transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.84 4.84 0 0 1-1.01-.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3 className="text-base font-bold text-white mb-5 pb-2 border-b border-white/10">
              خدماتنا
            </h3>
            <ul className="space-y-3" role="list">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <span className="h-1 w-1 rounded-full bg-blue-brand-500 group-hover:bg-gold-400 transition-colors shrink-0" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white mb-5 pb-2 border-b border-white/10">
              روابط سريعة
            </h3>
            <ul className="space-y-3" role="list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <span className="h-1 w-1 rounded-full bg-blue-brand-500 group-hover:bg-gold-400 transition-colors shrink-0" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Districts served (first 6) */}
            <h3 className="text-base font-bold text-white mt-8 mb-5 pb-2 border-b border-white/10">
              أحياء نخدمها
            </h3>
            <ul className="space-y-2" role="list">
              {siteConfig.districts.slice(0, 6).map((d) => (
                <li key={d.en} className="text-sm text-white/55">
                  {d.ar}
                </li>
              ))}
              <li>
                <Link href="/#coverage" className="text-sm text-blue-brand-300 hover:text-blue-brand-200 transition-colors">
                  + {siteConfig.districts.length - 6} أحياء أخرى ←
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-base font-bold text-white mb-5 pb-2 border-b border-white/10">
              تواصل معنا
            </h3>
            <ul className="space-y-4" role="list">
              <li>
                <a
                  href={`tel:${siteConfig.phone.primary}`}
                  className="flex items-start gap-3 group"
                  aria-label={`الهاتف الرئيسي: ${siteConfig.phone.display.primary}`}
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-brand-500/20 group-hover:bg-blue-brand-500/40 transition-colors">
                    <Phone className="h-4 w-4 text-blue-brand-300" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">الهاتف الرئيسي</p>
                    <p className="text-sm font-semibold text-white group-hover:text-blue-brand-300 transition-colors" dir="ltr">
                      {siteConfig.phone.display.primary}
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`tel:${siteConfig.phone.secondary}`}
                  className="flex items-start gap-3 group"
                  aria-label={`الهاتف الثانوي: ${siteConfig.phone.display.secondary}`}
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-brand-500/20 group-hover:bg-blue-brand-500/40 transition-colors">
                    <Phone className="h-4 w-4 text-blue-brand-300" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">الهاتف الثانوي</p>
                    <p className="text-sm font-semibold text-white group-hover:text-blue-brand-300 transition-colors" dir="ltr">
                      {siteConfig.phone.display.secondary}
                    </p>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-brand-500/20 group-hover:bg-blue-brand-500/40 transition-colors">
                    <Mail className="h-4 w-4 text-blue-brand-300" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">البريد الإلكتروني</p>
                    <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors break-all">
                      {siteConfig.business.email}
                    </p>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-brand-500/20">
                  <MapPin className="h-4 w-4 text-blue-brand-300" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-0.5">الموقع</p>
                  <p className="text-sm text-white/80">
                    {siteConfig.business.address.addressLocality}،{" "}
                    {siteConfig.business.address.addressRegion}
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-500/20">
                  <Clock className="h-4 w-4 text-gold-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-0.5">أوقات العمل</p>
                  <p className="text-sm text-white/80">يومياً من 7 صباحاً إلى 10 مساءً</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-right">
            <p className="text-xs text-white/40">
              © {year} {siteConfig.name.ar}. جميع الحقوق محفوظة.
            </p>
            <p className="text-xs text-white/30">
              الرياض، المملكة العربية السعودية — خدمة 24/7
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
