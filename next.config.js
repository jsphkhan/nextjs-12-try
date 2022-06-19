/** @type {import('next').NextConfig} */

const withPreact = require('next-plugin-preact');

const nextConfig = {
  // distDir: 'build',
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
  // i18n: {
  //   locales: ['en', 'ar'],
  //   defaultLocale: 'ar'
  //   // localeDetection: false
  // },
  compiler: {
    removeConsole: false
  },
  swcMinify:  true
}

module.exports = withPreact(nextConfig);
