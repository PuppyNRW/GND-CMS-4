import { defineConfig } from 'vite';
// import vueI18n from '@intlify/vite-plugin-vue-i18n';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import { resolve, dirname } from 'node:path';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
  },
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
  plugins: [
    vue(),
    Pages(),
    eslintPlugin(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, '../src/assets/locale/**')],

    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      PUBLIC_DIR: path.resolve(__dirname, './public'),
    },
  },
});
