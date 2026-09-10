import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ─── Security HTTP Headers ─────────────────────────────────────────────────
  // Required by Google Ads landing page policy (Compromised Site check).
  // DO NOT add any header that blocks Googlebot or hides page content.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent clickjacking — SAMEORIGIN is safe for Google Ads
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Prevent MIME-type sniffing (blocks malware injection vectors)
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Control referrer information — required for Google Ads tracking
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // XSS protection (legacy browsers) — signals clean site to Safe Browsing
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Permissions Policy — restrict dangerous browser APIs
          // NOTE: Do NOT block camera/mic at the iframe level if using Google Maps embed
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },

  // ─── Canonical Redirect: non-www → www ────────────────────────────────────
  // This is a standard 301 redirect — NOT cloaking. It ensures Googlebot and
  // Google Ads both see www.elmamoura.com as the canonical domain.
  // IMPORTANT: The final URL in Google Ads MUST be https://www.elmamoura.com
  // (with www) to match the landing page after this redirect.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "elmamoura.com" }],
        destination: "https://www.elmamoura.com/:path*",
        permanent: true, // 301 — signals canonical to Google, not deceptive
      },
    ];
  },
};

export default nextConfig;
