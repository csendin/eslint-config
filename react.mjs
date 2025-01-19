import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import ts from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,d.ts,jsx,tsx}'],
    },
    {
        languageOptions: {
            globals: {
                ...globals.es2021,
                ...globals.browser,
                ...globals.jest,
            },
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
    },
    {
        plugins: {
            'jsx-a11y': jsxA11y,
            react,
            'simple-import-sort': simpleImportSort,
        },
    },
    {
        rules: {
            'simple-import-sort/imports': 'error',
            'react/self-closing-comp': 'error',
            'prettier/prettier': [
                'error',
                {
                    printWidth: 120,
                    tabWidth: 4,
                    singleQuote: true,
                    trailingComma: 'all',
                    arrowParens: 'always',
                    semi: false,
                    endOfLine: 'auto',
                },
            ],
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'jsx-a11y/alt-text': [
                'warn',
                {
                    elements: ['img'],
                    img: ['Image'],
                },
            ],
            'jsx-a11y/aria-props': 'warn',
            'jsx-a11y/aria-proptypes': 'warn',
            'jsx-a11y/aria-unsupported-elements': 'warn',
            'jsx-a11y/role-has-required-aria-props': 'warn',
            'jsx-a11y/role-supports-aria-props': 'warn',
            'react/no-unknown-property': 'error',
        },
    },
    js.configs.recommended,
    ...ts.configs.recommended,
    react.configs.flat.recommended,
    prettier,
]
