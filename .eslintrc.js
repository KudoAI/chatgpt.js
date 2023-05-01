module.exports  = {
    'extends': ['eslint:recommended'],
    'ignorePatterns': ['**/*.md', '**/*.min.js'],
    'rules': {
        'indent': ['error', 4, { 'ignoredNodes': [ // enforce 4-space indentation, except for...
            'TemplateLiteral > *', // template literal children
            'ConditionalExpression', // ternarys
            'IfStatement > BlockStatement', // multi-line if's
            'BinaryExpression', // string concatenations, math, comparison, etc.,
            'BlockStatement', 'SwitchCase' // closing braces
        ]}],
        'semi': ['error', 'always'], // enforce semicolons at end of statement
        'quotes': ['error', 'single'], // enforce single quotes for string literals
        'space-before-function-paren': ['error', 'never'], // enforce no space before function parentheses
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }], // enforce spacing in object properties
        'comma-dangle': ['error', 'never'] // enforce no trailing commas in arrays or objects
    },
    'globals': { 'Uint8Array': true },
    'parserOptions': {
        'ecmaVersion': 2017,
        'sourceType': 'script'
    },
    'env': { 'browser': true, 'node': true, 'es6': true }
};
