/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/website' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Disable server-side features since we're doing static export
  experimental: {
    appDir: true,
  },
  // Ensure all pages are static
  staticPageGenerationTimeout: 1000,
}

module.exports = nextConfig 