/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "utfs.io"
    ],
  },
  eslint: {
    // Build ke waqt linting errors ko ignore karega
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Build ke waqt type errors ko ignore karega
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig