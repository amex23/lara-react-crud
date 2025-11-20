import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.tsx',
            ],
            refresh: true,
        }),
        react(),
    ],
    // Fix for Vercel + fsevents/Rollup errors
    build: {
        rollupOptions: {
            external: ['fsevents'],  // ← This excludes the macOS module
        },
    },
    optimizeDeps: {
        exclude: ['fsevents'],  // ← Prevent pre-bundling issues
    },
});