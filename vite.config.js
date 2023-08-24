import { defineConfig } from 'vite'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { fileURLToPath } from 'url'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import { resolve, dirname } from 'node:path'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
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
            'PUBLIC_DIR': path.resolve(__dirname, './public'),
        },
    },
})
