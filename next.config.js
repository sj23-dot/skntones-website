/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/skntones-website',
  assetPrefix: '/skntones-website/',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  swcMinify: true,
  reactStrictMode: true,
  output: 'export',
}

module.exports = nextConfig
