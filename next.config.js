/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['prisma', '@prisma/client'],
  },
  images: {
    domains: ['steamuserimages-a.akamaihd.net', 'converse2k22.vercel.app', 'i.pinimg.com'],
  },
};

module.exports = nextConfig;
