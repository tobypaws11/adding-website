/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Avoid environment-dependent lint runtime issues during `next build`.
    // Lint can still be run explicitly via `npm run lint`.
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/blog/ia-para-pymes-costa-rica-2025",
        destination: "/blog/ia-para-pymes-costa-rica-2026",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
