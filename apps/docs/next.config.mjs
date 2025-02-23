import {withContentlayer} from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: !!process.env.CI,
  },
  /* We already do linting on GH actions */
  eslint: {
    ignoreDuringBuilds: !!process.env.CI,
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'images.unsplash.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: [
      '@moraitis/ui',
      '@headlessui/react',
      '@floating-ui/dom',
    ],
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: {subsets: ['latin']},
      },
    ],
  },
}

export default withContentlayer(nextConfig)
