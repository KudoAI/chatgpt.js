import js from '@eslint/js'
import globals from 'globals'
import importPlugin from 'eslint-plugin-import'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import * as regexp from 'eslint-plugin-regexp'
import stylisticJS from '@stylistic/eslint-plugin-js'
import yml from 'eslint-plugin-yml'

export default [
    { ignores: ['**/*.min.js'] },
    {
        files: ['**/*.js', '**/*.mjs'],
        languageOptions: {
            ecmaVersion: 'latest', sourceType: 'script',
            globals: {
                ...globals.browser, ...globals.greasemonkey, ...globals.node, chatgpt: 'readonly', chrome: 'readonly',
                config: 'writable', dom: 'readonly', icons: 'writable', modals: 'writable', settings: 'writable'
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
            'quotes': ['error', 'single', { 'allowTemplateLiterals': true }], // enforce single quotes except backticks to avoid escaping quotes
            'comma-dangle': ['error', 'never'], // enforce no trailing commas in arrays or objects
            'no-async-promise-executor': 'off', // allow promise executor functions to be async (to accomodate await lines)
            'no-constant-condition': 'off', // allow constant conditions
            'no-empty': 'off', // allow empty blocks
            'no-inner-declarations': 'off', // allow function declarations anywhere
            'no-useless-escape': 'off', // allow all escape chars cause ESLint sucks at detecting truly useless ones
            'no-unused-vars': ['error', { 'caughtErrors': 'none' }] // allow unused named args in catch blocks
        }
    },
    { files: ['**/chatgpt.js'], languageOptions: { globals: { chatgpt: 'off' }}},
    { files: ['**/*.mjs'], languageOptions: { sourceType: 'module' }},
    { files: ['**/*.json'], ignores: ['**/package-lock.json'], language: 'json/json', ...json.configs.recommended },
    {
        files: ['**/*.md'], language: 'markdown/commonmark', plugins: { markdown },
        rules: {
            ...markdown.configs.recommended[0].rules,
            'markdown/heading-increment': 'off', // allow headings to skip levels
            'markdown/fenced-code-language': 'off', // allow code blocks w/ no language specified
            'markdown/no-missing-label-refs': 'off' // allow missing label references
        }
    },
    { files: ['**/*.yaml, **/*.yml'], ...yml.configs['flat/standard'][1] }
]
