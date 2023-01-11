/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@permit-flow/server"
]);

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPlugins([withTM], nextConfig);
