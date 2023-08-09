/** @type {import('next').NextConfig} */


const nextConfig = {
    //output: "standalone"
}

const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.tsx'
  );
   

module.exports = withNextIntl(nextConfig)
