/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    loader: "akamai",
    path: ""
  },
  basePath: '/braibrainTumorProjectnTumor',
  assetPrefix: '/brainTumorProject',
}

module.exports = nextConfig
