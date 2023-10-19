// Prepend [functionAliases] & [synonyms] from function-aliases.json + minify to dist/chatgpt.min.js

const fs = require('fs'), { execSync } = require('child_process');

// Prepend aliases
const jsonContent = JSON.parse(fs.readFileSync('data/function-aliases.json', 'utf8'));
const newCJScontent = fs.readFileSync('chatgpt.js', 'utf8').replace(
    /^(\/\/[^\n]*\n)+/, // copyright notice
    `$&\nconst functionAliases = ${ JSON.stringify(jsonContent.functionAliases) };\n`
      + `const synonyms = ${ JSON.stringify(jsonContent.synonyms) };\n`
);
fs.writeFileSync('dist/chatgpt.temp.js', newCJScontent); // Write to temporary file

// Minify to dist/chatgpt.min.js
execSync('uglifyjs dist/chatgpt.temp.js -o dist/chatgpt.min.js');
fs.unlinkSync('dist/chatgpt.temp.js');
