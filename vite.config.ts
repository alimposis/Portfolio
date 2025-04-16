import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                icon: true,
                svgo: true,
                svgProps: {
                    fill: 'currentColor',
                },
            },
        }),
    ],
    server: {
        open: true,
    },
});
