/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // ✅ Forces static export for Fleek
  distDir: 'out', // ✅ Ensures Fleek deploys the correct directory
  trailingSlash: true, // ✅ Fixes URL issues with IPFS hosting
  images: {
    unoptimized: true, // ✅ Ensures images work on IPFS
  },
};

module.exports = nextConfig;
