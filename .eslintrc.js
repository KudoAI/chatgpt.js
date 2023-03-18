module.exports  = {
  'extends': ['eslint:recommended'],
  'rules': {
    'semi': ['error', 'always'], // enforce semicolons at end of statement
    'quotes': ['error', 'single'], // enforce single quotes for string literals
    'indent': ['error', 4, { 'ignoredNodes': ['ConditionalExpression'], 'ignoreStrings': true }], // enforce 4-space indentation except for strings & conditionals */
    'space-before-function-paren': ['error', 'never'], // enforce no space before function parentheses
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }], // enforce opening brace on same line as control statement, closing brace on own line
    'object-curly-spacing': ['error', 'always'], // enforce pacing in object literals
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
