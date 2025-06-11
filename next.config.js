/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // basePath: process.env.NODE_ENV === 'production' ? '/website' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Ensure all pages are static
  staticPageGenerationTimeout: 1000,
  // Disable server-side features
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 