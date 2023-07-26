/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['mekgwele.co.za'],
  },
  reactStrictMode: false,
    distDir: 'dist',
    // output: 'export',
    trailingSlash: true,
}

module.exports = nextConfig
