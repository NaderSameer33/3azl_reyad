import Link from "next/link";
import { siteConfig } from "@/config/site";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import {
  Phone,
  Mail,
  MapPin,
  Droplets,
  Clock,
  Star,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
  ExternalLink,
} from "lucide-react";

const serviceLinks = [
  { label: "كشف تسربات المياه بدون تكسير", href: "/#services" },
  { label: "عزل فوم بولي يوريثان", href: "/#services" },
  { label: "العزل المائي والحراري للأسطح", href: "/#services" },
  { label: "عزل وترميم خزانات المياه بالإيبوكسي", href: "/#services" },
  { label: "عزل المسابح والحمامات قبل البلاط", href: "/#services" },
  { label: "تقارير معتمدة لشركة المياه الوطنية", href: "/#services" },
];

const quickLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "مكتبة المقالات والأدلة الفنية", href: "/articles" },
  { label: "خدماتنا المعتمدة", href: "/#services" },
  { label: "معرض الأعمال والمشاريع المنفذة", href: "/projects" },
  { label: "حاسبة تكلفة العزل الفورية", href: "/#calculator" },
  { label: "مقارنة قبل وبعد", href: "/#before-after" },
  { label: "آراء وتقييمات العملاء", href: "/#testimonials" },
  { label: "احجز موعد معاينة", href: "/#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-slate-950 text-white border-t border-white/10 relative overflow-hidden"
      role="contentinfo"
      aria-label="تذييل الصفحة"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ── Top High-Conversion CTA Ribbon ────────────────────────── */}
      <div className="relative z-10 border-b border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-right">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 border border-sky-400/30 px-3 py-1 text-xs font-bold text-sky-300 mb-3">
                <ShieldCheck className="h-4 w-4" />
                <span>ضمان معتمد 10 - 15 سنة على كافة أعمال العزل</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                هل تعاني من تسرب مياه أو حرارة شديدة في سطح منزلك؟
              </h2>
              <p className="text-sm text-white/70 max-w-2xl leading-relaxed">
                مهندسونا المعتمدون متواجدون في كافة أحياء الرياض لتقديم الفحص الميداني بالأجهزة وتحديد الحل الأنسب فوراً.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 justify-center shrink-0">
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-btn"
                className="inline-flex items-center gap-2 rounded-2xl bg-wa-green-500 hover:bg-wa-green-600 px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-wa-green-500/30 transition-all hover:scale-105"
              >
                <CalendarCheck className="h-4 w-4" />
                <span>طلب معاينة مجانية عبر واتساب</span>
              </a>

              <a
                href={`tel:${siteConfig.phone.primary}`}
                id="footer-phone-btn"
                className="inline-flex items-center gap-2 rounded-2xl border border-blue-400/40 bg-blue-brand-600/30 hover:bg-blue-brand-600/50 px-6 py-3.5 text-sm font-bold text-white transition-all hover:scale-105"
              >
                <Phone className="h-4 w-4 text-blue-brand-300" />
                <span dir="ltr">{siteConfig.phone.display.primary}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ──────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 text-right">
          {/* Col 1 — Company Info */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 group mb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-brand-600 to-blue-brand-400 shadow-md">
                <Droplets className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-black text-white">{siteConfig.name.short.ar}</span>
                <span className="text-[10px] text-gold-400 font-bold mt-0.5">
                  كشف تسربات • عزل أسطح بالرياض
                </span>
              </div>
            </Link>

            <p className="text-xs leading-relaxed text-white/65 mb-6">
              شركة رائدة معتمدة متخصصة في كشف تسربات المياه بالأجهزة الإلكترونية الحديثة بدون تكسير، وتطبيق أعلى معايير عزل الأسطح بالفوم والمائي والخزانات والمسابح بمدينة الرياض.
            </p>

            {/* Rating Badge */}
            <div className="flex items-center gap-2 mb-6 rounded-xl bg-white/5 border border-white/5 p-2.5 w-fit">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span className="text-xs font-black text-gold-400">
                <AnimatedCounter from={0} to={4.9} decimals={1} duration={1.5} /> / 5
              </span>
              <span className="text-[11px] text-white/50">
                (<AnimatedCounter from={0} to={350} prefix="+" suffix=" تقييم موثق" duration={2} />)
              </span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2.5">
              {/* WhatsApp */}
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="واتساب"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-wa-green-500/20 hover:bg-wa-green-500 text-wa-green-400 hover:text-white transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.11 1.522 5.837L.057 23.49a.75.75 0 0 0 .921.921l5.663-1.48A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href={siteConfig.social.x.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`منصة إكس ${siteConfig.social.x.display}`}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-white/20 hover:bg-white/10 text-white transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href={siteConfig.social.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`تيك توك ${siteConfig.social.tiktok.display}`}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-tiktok-cyan/40 hover:bg-tiktok-dark text-tiktok-cyan transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.84 4.84 0 0 1-1.01-.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 pb-2 border-b border-white/10 flex items-center justify-between">
              <span>خدماتنا المعتمدة</span>
              <span className="h-1.5 w-1.5 rounded-full bg-blue-brand-400" />
            </h3>
            <ul className="space-y-2.5 text-xs text-white/70">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 hover:text-blue-brand-300 transition-colors"
                  >
                    <span className="h-1 w-1 rounded-full bg-blue-brand-500 group-hover:bg-gold-400 transition-colors shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Quick Links & Coverage */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 pb-2 border-b border-white/10 flex items-center justify-between">
              <span>روابط سريعة</span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            </h3>
            <ul className="space-y-2.5 text-xs text-white/70 mb-6">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 hover:text-gold-300 transition-colors"
                  >
                    <span className="h-1 w-1 rounded-full bg-gold-500 group-hover:bg-blue-brand-400 transition-colors shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold text-white mb-2">أحياء الرياض المغطاة:</h4>
            <div className="flex flex-wrap gap-1 text-[10px] text-white/60">
              {["الملقا", "النرجس", "الياسمين", "الصحافة", "ظهرة لبن", "العليا"].map((d) => (
                <span key={d} className="rounded-md bg-white/5 px-2 py-0.5 border border-white/5">
                  حي {d}
                </span>
              ))}
            </div>
          </div>

          {/* Col 4 — Contact & Working Hours */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 pb-2 border-b border-white/10 flex items-center justify-between">
              <span>معلومات التواصل</span>
              <span className="h-1.5 w-1.5 rounded-full bg-wa-green-400" />
            </h3>
            <div className="space-y-3.5 text-xs">
              <a
                href={`tel:${siteConfig.phone.primary}`}
                className="flex items-start gap-3 group rounded-xl bg-white/5 p-2.5 border border-white/5 hover:border-blue-400/30 transition-all"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-brand-600/30 text-blue-brand-300">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 mb-0.5">الاتصال المباشر 24/7</p>
                  <p className="text-xs font-bold text-white group-hover:text-blue-brand-300 transition-colors" dir="ltr">
                    {siteConfig.phone.display.primary}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.business.email || "info@gulfshield-sa.com"}`}
                className="flex items-start gap-3 group rounded-xl bg-white/5 p-2.5 border border-white/5 hover:border-blue-400/30 transition-all"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-brand-600/30 text-blue-brand-300">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 mb-0.5">البريد الرسمي</p>
                  <p className="text-xs font-medium text-white/80 group-hover:text-white transition-colors break-all">
                    {siteConfig.business.email || "info@gulfshield-sa.com"}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3 rounded-xl bg-white/5 p-2.5 border border-white/5 text-white/70">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-500/20 text-gold-400">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] text-white/50 mb-0.5">أوقات العمل</p>
                  <p className="text-xs font-semibold text-white/90">متاحون على مدار 24 ساعة طوال أيام الأسبوع</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ────────────────────────────────────────────── */}
      <div className="border-t border-white/10 bg-black/40 py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50 text-center sm:text-right">
            <p>© {year} {siteConfig.name.ar}. جميع الحقوق محفوظة.</p>
            <p className="flex items-center gap-1.5 text-white/40">
              <CheckCircle2 className="h-3.5 w-3.5 text-wa-green-400" />
              <span>خدمة هندسية معتمدة لكافة أحياء الرياض</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
