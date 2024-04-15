import js from '@eslint/js'
import airbnbBase from 'eslint-config-airbnb-base'
import eslintConfigPrettier from 'eslint-config-prettier'
import vuePlugin from 'eslint-plugin-vue'

export default [
    js.configs.recommended,
    // airbnbBase,
    // eslintConfigPrettier,
    ...vuePlugin.configs['flat/recommended'],

    {
        // .js,.vue
        files: ['**/*.js', '**/*.vue'],
        ignores: ['**/temp.js', 'node_modules/*'],

        // env: {
        //     node: true,
        //     es6: true,
        // },
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
        },

        // extends: [
        //     'eslint:recommended',
        //     'plugin:vue/vue3-recommended',
        //     'prettier',
        //     'airbnb-base',
        //     'plugin:node/recommended',
        // ],
        // plugins: ['prettier'],

        rules: {
            // override/add rules settings here, such as:
            // 'vue/no-unused-vars': 'error'
            'vue/require-default-prop': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/v-on-event-hyphenation': 'off',
            'max-len': 'off',
            'node/no-missing-import': 'off',
            'import/no-unresolved': 'off',
            'no-param-reassign': 'off',
            'no-console': 'off',
            camelcase: 'off',
            'no-underscore-dangle': 'off',
            'no-plusplus': 'off',
            'no-restricted-syntax': 'off',
            'no-unused-expressions': 'off',
            'no-alert': 'error',
            'import/named': 'off',
            'node/no-unsupported-features/es-syntax': 'off',
            'guard-for-in': 'off',
            'vue/no-v-html': 'off',
            'import/prefer-default-export': 'off',
            'no-alert': 'off',
            'node/no-unsupported-features/node-builtins': 'off',
        },
        // Newly added property
        // parserOptions: {
        //     ecmaVersion: 12,
        // },
        // settings: {
        //     'import/resolver': {
        //         alias: {
        //             map: [
        //                 [
        //                     'babel-polyfill',
        //                     'babel-polyfill/dist/polyfill.min.js',
        //                 ],
        //                 ['helper', './utils/helper'],
        //                 ['material-ui/DatePicker', '../custom/DatePicker'],
        //                 ['material-ui', 'material-ui-ie10'],
        //                 ['@', './src'],
        //             ],
        //             extensions: ['.ts', '.js', '.jsx', '.json'],
        //         },
        //     },
        // },
        // settings: {
        //   'import/resolver': {
        //     alias: {
        //       map: [['@', './src/']],
        //       extensions: ['.js', '.vue'],
        //     },
        //   }
        // },
    },
]
