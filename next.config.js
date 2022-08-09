/** @type {import('next').NextConfig} */

require('dotenv').config();
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: JSON.parse(process.env.ANALYZE)
});

const nextConfig = {
  // optimizeFonts: false,
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
  // reactStrictMode: true,
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
  swcMinify:  false
}

module.exports = withBundleAnalyzer(nextConfig);
