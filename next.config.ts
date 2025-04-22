import type { NextConfig } from 'next';
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
    basePath: '/Portfolio',
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
