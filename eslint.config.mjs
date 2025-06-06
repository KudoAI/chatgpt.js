import js from '@eslint/js'
import globals from 'globals'
import css from '@eslint/css'
import html from '@html-eslint/eslint-plugin'
import htmlParser from '@html-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import regexp from 'eslint-plugin-regexp'
import stylisticJS from '@stylistic/eslint-plugin'
import yml from 'eslint-plugin-yml'

export default [
    { ignores: ['**/*.min.js', '**/package-lock.json', 'docs/**/*.min.css', 'docs/**/footer.html'] },
    {
        files: ['**/*.{js,mjs}'],
        languageOptions: {
            ecmaVersion: 'latest', sourceType: 'script',
            globals: {
                ...globals.browser, ...globals.greasemonkey, ...globals.node, app: 'writable', chatgpt: 'readonly',
                chrome: 'readonly', config: 'writable', dom: 'readonly', env: 'writable', icons: 'writable',
                modals: 'writable', settings: 'writable', ui: 'readonly'
            }
        },
        plugins: { 'import': importPlugin, 'js-styles': stylisticJS, regexp },
        rules: {
            ...js.configs.recommended.rules,
            ...importPlugin.flatConfigs.recommended.rules,
            ...regexp.configs['flat/recommended'].rules,
            'indent': 'off', 'no-unexpected-multiline': 'off', 'key-spacing': 'off', // allow whitespace anywhere
            'js-styles/no-trailing-spaces': 'error', // ...except at ends of lines
            'js-styles/max-len': ['error', { 'code': 120, // limit lines to 120 chars except if containing...
                'ignoreComments': true, 'ignoreStrings': true, // ...trailing/own-line comments, quoted strings...
                'ignoreTemplateLiterals': true, 'ignoreRegExpLiterals': true }], // ...or template/regex literals
            'js-styles/no-extra-semi': 'error', // disallow unnecessary semicolons
            'quotes': ['error', 'single', // enforce single quotes...
                { 'allowTemplateLiterals': true }], // ...except backticks to avoid escaping quotes
            'comma-dangle': ['error', 'never'], // enforce no trailing commas in arrays or objects
            'no-constant-condition': 'off', // allow constant conditions
            'no-empty': 'off', // allow empty blocks
            'no-inner-declarations': 'off', // allow function declarations anywhere
            'no-useless-escape': 'off', // allow all escape chars cause ESLint sucks at detecting truly useless ones
            'no-unused-vars': ['error', { 'caughtErrors': 'none' }] // allow unused named args in catch blocks
        }
    },
    { files: ['**/chatgpt.js'], languageOptions: { globals: { chatgpt: 'off' }}},
    {
        files: ['**/*.css'], language: 'css/css', plugins: { css },
        rules: { ...css.configs.recommended.rules, 'css/no-important': 'off' }
    },
    {
        files: ['**/*.html'], languageOptions: { parser: htmlParser }, plugins: { '@html-eslint': html },
        rules: {
            ...html.configs['flat/recommended'].rules,
            '@html-eslint/require-title': 'off', // allow missing title tags
            '@html-eslint/quotes': 'off', // allow unquoted attrs for compactness
            '@html-eslint/attrs-newline': 'off', // allow multi-attrs in single line
            '@html-eslint/require-img-alt': 'off', // allow img tags w/o alt attributes
            '@html-eslint/indent': 'off', '@html-eslint/element-newline': 'off' // allow whitespace anywhere
        }
    },
    { files: ['**/*.json'], language: 'json/json', ...json.configs.recommended },
    {
        files: ['**/*.md'], language: 'markdown/commonmark', plugins: { markdown },
        rules: {
            ...markdown.configs.recommended[0].rules,
            'markdown/heading-increment': 'off', // allow headings to skip levels
            'markdown/fenced-code-language': 'off', // allow code blocks w/ no language specified
            'markdown/no-missing-label-refs': 'off', // allow missing label references
            'markdown/no-multiple-h1': 'off', // allow multi H1s
            'markdown/require-alt-text': 'off' // allow missing img alts
        }
    },
    { files: ['**/*.mjs'], languageOptions: { sourceType: 'module' }},
    { files: ['**/*.{yaml,yml}'], ...yml.configs['flat/standard'][1] }
]
