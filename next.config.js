/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    loader: "akamai",
    path: ""
  },
  basePath: '/brainTumorProject',
  assetPrefix: '/brainTumorProject',
}

module.exports = nextConfig
