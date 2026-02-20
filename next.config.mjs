/** @type {import('next').NextConfig} */
const nextConfig = {
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
