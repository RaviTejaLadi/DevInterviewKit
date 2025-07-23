import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { markdownLoader } from './src/utils/markdown-loader';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'markdown',
      transform(code, id) {
        if (id.endsWith('.md')) {
          return markdownLoader(code);
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5000,
    open: true,
  },
});
