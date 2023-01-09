// /** @type {import('next').NextConfig} */
// const withPWA = require('next-pwa')({
//   dest: 'public',
// })

// module.exports = withPWA({
//   // config
// })
const withPWA = require('next-pwa');

const settings = {
  env: {
  },
  devIndicators: {
    autoPrerender: false,
  },
  pwa: {
    dest: 'public',
  },
};

module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA(settings);
