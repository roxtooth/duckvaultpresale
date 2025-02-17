/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // ✅ Ensures Next.js generates static files for Vercel
  distDir: 'out', // ✅ Ensures the correct output directory is used
  trailingSlash: true, // ✅ Fixes URL issues
  images: {
    unoptimized: true, // ✅ Fixes image rendering for static deployment
  },
};

module.exports = nextConfig;
