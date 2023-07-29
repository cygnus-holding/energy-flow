/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    TWINFLOW_SECRET: process.env.TWINFLOW_SECRET,
  },
}

module.exports = nextConfig;
