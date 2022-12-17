/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/binge-js",
  assetPrefix: "/binge-js",
}

module.exports = nextConfig
