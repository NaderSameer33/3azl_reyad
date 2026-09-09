import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ─── Security HTTP Headers ─────────────────────────────────────────────────
  // These prevent "Compromised Site" flags from Google Safe Browsing and
  // satisfy Google Ads landing page security policy requirements.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent clickjacking
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Prevent MIME-type sniffing (malware vector)
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Control referrer information (privacy + policy compliance)
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Enable XSS protection in older browsers
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Permissions Policy — restrict dangerous browser APIs
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },

  // ─── Canonical Redirect: non-www → www ────────────────────────────────────
  // Prevents Google from seeing two versions of the site (cloaking signal).
  // Vercel also has a redirect config in vercel.json — this covers self-hosted.
  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [{ type: "host", value: "elmamoura.com" }],
        destination: "https://www.elmamoura.com/$1",
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
