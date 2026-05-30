import type { NextConfig } from "next";

/*
 * Content Security Policy
 *
 * script-src 'unsafe-inline'  — required for the anti-flash theme script
 *                                injected via dangerouslySetInnerHTML in layout.tsx.
 *                                Risk is low: this site has no user input or dynamic content.
 *
 * style-src  'unsafe-inline'  — required because every page uses inline style props
 *                                (the deliberate design choice for this project).
 *
 * font-src   'self' data:     — Next.js downloads Google Fonts at build time and
 *                                serves them from /_next/static/, so 'self' covers them.
 *
 * img-src    launchigniter.com — the LaunchIgniter badge is loaded from their CDN.
 *
 * frame-ancestors 'none'      — stronger than X-Frame-Options; blocks all embedding.
 */
const ContentSecurityPolicy = [
  "default-src 'none'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "img-src 'self' data: https://launchigniter.com https://play.google.com https://api.producthunt.com",
  "connect-src 'self'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
