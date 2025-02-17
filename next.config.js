/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Ensures Fleek can deploy a static site
  trailingSlash: true,
  images: {
    unoptimized: true, // Fixes Next.js image issues with IPFS
  },
};

module.exports = nextConfig;

