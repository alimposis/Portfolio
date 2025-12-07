import type { NextConfig } from 'next';
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    basePath: '/portfolio-b3t4-yaroslavs-projects-fc76bf9f.vercel.app',
    assetPrefix: '/portfolio-b3t4-yaroslavs-projects-fc76bf9f.vercel.app',
    pageExtensions: ['tsx', 'ts'],
    env: {
        TELEGRAMM_API:
            'https://api.telegram.org/bot7903831160:AAE5hZXW8wtja0h-h-0dRzwJvS9N9ZHOsqQ/sendMessage',
        TELEGRAMM_BOT_CHAT_ID: '1023107926',
        STACK_API: 'https://680c25032ea307e081d34e23.mockapi.io/Stack',
        WORK_EXPERIENCE_API: 'https://680c25032ea307e081d34e23.mockapi.io/WorkExperience',
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
