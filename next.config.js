/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/images/:slug*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public,max-age=31536000,immutable'
          }
        ]
      },
      {
        source: '/_next/image/:slug*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public,max-age=31536000,immutable'
          }
        ]
      }
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ['reqres.in'],
  },
  i18n: {
    locales: ['en', 'fr', 'ar'],
    defaultLocale: 'fr',
    // localeDetection: false
  }
}

module.exports = nextConfig
