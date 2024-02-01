/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    incluePaths: [path.join(__dirname,'styles')],
    prependData: `@import "./src/styles/base.scss";`,
  },
}

module.exports = nextConfig;