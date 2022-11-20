import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true, // ホスト側のブラウザでアクセス可能とする
    port: 8080, // デフォルトは 5173
    watch: {
      usePolling: true, // コンテナでもホットリロードできるようにする
    },
  },
});
