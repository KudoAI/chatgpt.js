module.exports  = {
    'extends': ['eslint:recommended'],
    'rules': {
        'indent': ['error', 4, { 'ignoredNodes': [ // enforce 4-space indentation, except for...
            'TemplateLiteral > *', // template literal children
            'ConditionalExpression', // ternarys
            'IfStatement > BlockStatement', // multi-line if's
            'BinaryExpression' // string concatenations, math, comparison, etc.
        ]}],
        'semi': ['error', 'always'], // enforce semicolons at end of statement
        'quotes': ['error', 'single'], // enforce single quotes for string literals
        'space-before-function-paren': ['error', 'never'], // enforce no space before function parentheses
        'brace-style': ['error', '1tbs', { 'allowSingleLine': true }], // enforce opening brace on same line as control statement, closing brace on own line
        'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }], // enforce spacing in object properties
        'comma-dangle': ['error', 'never'] // enforce no trailing commas in arrays or objects
    },
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'script'
    },
    'env': {
        'browser': true,
        'node': true
    }
};
