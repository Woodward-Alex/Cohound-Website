/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Force dynamic rendering for all pages
  experimental: {
    dynamicIO: true,
  },
  // Disable static generation
  output: 'standalone',
}

export default nextConfig