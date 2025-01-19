import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier/recommended'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import ts from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,d.ts}'],
    },
    {
        languageOptions: {
            globals: {
                ...globals.es2021,
                ...globals.node,
            },
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
    },
    {
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
    },
    {
        rules: {
            'simple-import-sort/imports': 'error',
            'prettier/prettier': [
                'error',
                {
                    printWidth: 120,
                    tabWidth: 4,
                    singleQuote: true,
                    trailingComma: 'all',
                    arrowParens: 'always',
                    semi: false,
                },
            ],
        },
    },
    js.configs.recommended,
    ...ts.configs.recommended,
    prettier,
]
