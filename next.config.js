/* eslint-disable no-param-reassign */
const path = require('path');

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    config.resolve.alias['@'] = path.join(__dirname, 'src');

    return config;
  },
};
