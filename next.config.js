/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
            pathname: '/assets/**',
          },
          {
            protocol: 'https',
            hostname: 'www.istockphoto.com',
            pathname: '/es/foto/**',
          },
          {
            protocol: 'https',
            hostname: 'media.istockphoto.com',
            pathname: '/id/**',
          },
        ],
    },
}

module.exports = nextConfig
