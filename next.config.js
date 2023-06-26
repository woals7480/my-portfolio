/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
const repository = "joonyoung-s-portfolio-page";
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: !debug ? `/${repository}/` : "",
};

module.exports = nextConfig;
