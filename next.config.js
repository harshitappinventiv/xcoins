const { i18n } = require("./next-i18next.config");
// @ts-check

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/

module.exports = {
  i18n,
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }

    return config;
  },
};
