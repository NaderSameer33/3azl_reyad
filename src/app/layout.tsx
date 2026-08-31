import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { generateSeoMetadata } from "@/lib/seo";
import { generateLocalBusinessSchema } from "@/lib/structured-data";
import JsonLd from "@/components/ui/JsonLd";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContactHub from "@/components/ui/FloatingContactHub";
import MobileBottomBar from "@/components/layout/MobileBottomBar";

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
      "شركة درع الخليج | كشف تسربات المياه وعزل الأسطح بالرياض",
    template: "%s | درع الخليج - كشف تسربات وعزل أسطح الرياض",
  },
  // Verification tags (replace values with real console tokens)
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
  },
  // App / PWA
  applicationName: "درع الخليج",
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
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* JSON-LD Structured Data */}
        <JsonLd schema={localBusinessSchema} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground pb-14 md:pb-0">
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

        {/* Multi-channel floating speed-dial (desktop + tablet) */}
        <FloatingContactHub />

        {/* Sticky bottom conversion bar (mobile only) */}
        <MobileBottomBar />
      </body>
    </html>
  );
}
