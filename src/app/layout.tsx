import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { generateSeoMetadata } from "@/lib/seo";
import { generateLocalBusinessSchema } from "@/lib/structured-data";
import JsonLd from "@/components/ui/JsonLd";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactHub from "@/components/ui/FloatingContactHub";

import MediaProtectionProvider from "@/components/ui/MediaProtectionProvider";

// ─── Font ──────────────────────────────────────────────────────────────────────
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

// ─── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  ...generateSeoMetadata(),
  // Override title template for child pages
  title: {
    default:
      "شركة المعمورة للمقاولات العامة للعوازل | كشف تسربات المياه وعزل الأسطح بالرياض",
    template: "%s | المعمورة للعوازل - كشف تسربات وعزل أسطح الرياض",
  },
  // Verification tags (replace values with real console tokens)
  verification: {
    google: "googlee36388655d8798dc",
  },
  // App / PWA
  applicationName: "المعمورة للعوازل",
  category: "construction",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: false,
    url: false,
  },
};

// ─── Layout ────────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/* JSON-LD Structured Data */}
        <JsonLd schema={localBusinessSchema} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <MediaProtectionProvider>
          {/* Skip to main content (accessibility) */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[9999] focus:rounded-lg focus:bg-blue-brand-600 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
          >
            انتقل إلى المحتوى الرئيسي
          </a>

          <Header />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer />

          {/* Floating vertical contact dock (all devices) */}
          <FloatingContactHub />
        </MediaProtectionProvider>
      </body>
    </html>
  );
}
