import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  base: '/react-reduxtoolkit',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/router': path.resolve(__dirname, './src/router'),
      '@/store': path.resolve(__dirname, './src/store'),
    },
  },
});
