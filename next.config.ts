import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
// module.exports = {
//     i18n: {
//         locales: ['en-US', 'fr', 'nl-NL'],
//         defaultLocale: 'en-US',
//     },
// };
const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
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

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
export default withNextIntl(nextConfig);
