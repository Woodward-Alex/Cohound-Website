/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable static generation for auth pages
  experimental: {
  },
  allowedDevOrigins: ['192.168.0.69'] // Moved inside nextConfig
}
export default nextConfig