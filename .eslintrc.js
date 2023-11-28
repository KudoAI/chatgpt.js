module.exports = {
    'extends': ['eslint:recommended'],
    'ignorePatterns': ['**/*.md', '**/*.min.js'],
    'rules': {
        'indent': 'off', 'no-unexpected-multiline': 'off', // allow whitespace anywhere
        'semi': ['error', 'always'], // enforce semicolons at end of statement
        'quotes': ['error', 'single'], // enforce single quotes for string literals
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }], // enforce spacing in object properties
        'comma-dangle': ['error', 'never'], // enforce no trailing commas in arrays or objects
        'no-empty': 'off', // allow empty blocks
        'no-useless-escape': 'off', // allow all escape chars cause ESLint sucks at detecting truly useless ones
        'no-inner-declarations': 'off'
    },
    'globals': { 'chatgpt': 'readonly', 'chrome': 'readonly', 'functionAliases': 'readonly',
        'syncExtension': 'writable', 'synonyms': 'readonly', 'Uint8Array': 'readonly' },
    'parserOptions': { 'ecmaVersion': 2022, 'sourceType': 'script' },
    'overrides': [{ 'files': ['**/lib*/**.js'], 'parserOptions': { 'sourceType': 'module' }}],
    'env': { 'browser': true, 'node': true, 'es6': true, 'greasemonkey': true }
};
