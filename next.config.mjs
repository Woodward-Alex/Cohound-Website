/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa'

const pwaConfig = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
})

const nextConfig = {
  // Removed output: 'export' to support API routes and dynamic features
  images: {
    unoptimized: true,
  },
}

export default pwaConfig(nextConfig)