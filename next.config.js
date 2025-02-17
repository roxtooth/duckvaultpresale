/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // ✅ Ensures proper URL handling
  images: {
    unoptimized: true, // ✅ Ensures images load correctly
  },
};

module.exports = nextConfig;
