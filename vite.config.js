import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0',
    },
    plugins: [react(), svgrPlugin()],
});
