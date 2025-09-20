import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    // Error problem solve to CORS origins
    server: {
        proxy: {
            '/api': 'http://localhost:3000',
        },
    },
    plugins: [react()],
});
