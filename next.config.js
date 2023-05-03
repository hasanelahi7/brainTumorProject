/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    loader: "akamai",
    path: ""
  },
  basePath: '/brainTumor',
  assetPrefix: '/brainTumor',
}

module.exports = nextConfig
