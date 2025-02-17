/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // ✅ Forces Next.js to generate static files for Fleek
  trailingSlash: true, // ✅ Ensures correct URL structure for IPFS hosting
  images: {
    unoptimized: true, // ✅ Fixes Next.js image compatibility issues with IPFS
  },
  distDir: 'out', // ✅ Ensures Fleek uses the correct output directory
};

module.exports = nextConfig;
