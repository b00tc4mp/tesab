/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  i18n:{
    locales: ['pt', 'en', 'es'],
    defaultLocale: 'es',
    localeDetection: true
  }
}


