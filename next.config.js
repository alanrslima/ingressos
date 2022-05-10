/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.ome.lt', 'ingresso-a.akamaihd.net'],
  },
}

module.exports = nextConfig
