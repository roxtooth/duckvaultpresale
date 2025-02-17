/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // ✅ Ensures Next.js exports static files
  distDir: "out", // ✅ Ensures the correct output directory
  trailingSlash: true, // ✅ Fixes URL issues when hosting statically
  images: {
    unoptimized: true, // ✅ Fixes image issues when using static export
  },
  experimental: {
    appDir: false, // ✅ Disables App Router (forcing Pages Router)
  },
};

module.exports = nextConfig;
