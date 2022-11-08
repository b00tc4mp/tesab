/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  i18n:{
    locales: ['pt-PT', 'en-IE', 'es-ES'],
    defaultLocale: 'es-ES',
    localeDetection: true
  }
}


