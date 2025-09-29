import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8000, // Using port 8000 as requested
    strictPort: true, // Don't try other ports if 8000 is in use
    open: true, // Open the browser on server start
    host: '0.0.0.0', // Allow connections from all network interfaces
    hmr: {
      host: 'localhost',
      port: 8000,
      protocol: 'ws'
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
