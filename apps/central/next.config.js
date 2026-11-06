const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@avro/license-core"],
  webpack(config) {
    config.watchOptions = {
      ...(config.watchOptions || {}),
      ignored: [
        "**/Application Data/**",
        "**/Cookies/**",
        "**/Local Settings/**",
        "**/My Documents/**",
      ],
    };
    return config;
  },
};

module.exports = nextConfig;
