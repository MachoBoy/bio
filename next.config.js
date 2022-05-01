/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['react-scroll-section']);

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);
