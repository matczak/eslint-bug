module.exports = {
    ignorePatterns: ['node_modules', 'dist/**'],
    env: {
        browser: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'vue/multi-word-component-names': 0,
        '@typescript-eslint/ban-ts-comment': 1,
        'max-len': ['warn', { code: 100, tabWidth: 2 }],
        semi: ['error', 'never'],
        'comma-dangle': ['error', 'always-multiline'],
        'arrow-parens': ['error', 'always'],
        quotes: ['error', 'single'],

    },
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },

    // TODO: 1
    // overrides: [
    //     {
    //         // for files matching this pattern
    //         files: ['*.ts'],
    //         // following config will override "normal" config
    //         parserOptions: {
    //             tsconfigRootDir: __dirname,
    //             project: ['./tsconfig.json'],
    //         },
    //     },
    //     {
    //         // for files matching this pattern
    //         files: ['*.vue'],
    //         // following config will override "normal" config
    //         parser: 'vue-eslint-parser',
    //         parserOptions: {
    //             // override parser options
    //         },
    //     },
    // ],
}