import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '192.168.1.3',
                port: '8080',
                pathname: '/uploads/**',
            },
        ],
    },
}

export default withNextIntl(nextConfig)