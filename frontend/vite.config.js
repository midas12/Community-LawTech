import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://silver-space-broccoli-ppgr5r56xw6376wj-5000.app.github.dev/api', // Backend server URL
    },
  },
});
