/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // ✅ Forces Next.js to generate a static export
  distDir: "out", // ✅ Ensures Vercel deploys the correct directory
  trailingSlash: true, // ✅ Fixes routing issues when hosting statically
  images: {
    unoptimized: true, // ✅ Ensures images load correctly in static export
  },
  experimental: {
    appDir: false, // ✅ Disables Next.js App Router, forcing Pages Router
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
