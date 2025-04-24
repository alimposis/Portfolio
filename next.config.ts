import type { NextConfig } from 'next';
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    basePath: '/Portfolio',
    pageExtensions: ['tsx', 'ts'],
    env: {
        TELEGRAMM_API:
            'https://api.telegram.org/bot7903831160:AAE5hZXW8wtja0h-h-0dRzwJvS9N9ZHOsqQ/sendMessage',
        TELEGRAMM_BOT_CHAT_ID: '1023107926',
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        exportType: 'named',
                    },
                },
            ],
        });
        return config;
    },
};

export default nextConfig;
