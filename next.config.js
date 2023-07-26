/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['mekgwele.co.za'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
