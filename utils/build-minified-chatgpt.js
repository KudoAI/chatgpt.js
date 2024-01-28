// Prepend [functionAliases] & [synonyms] from data/function-aliases.json + minify to dist/chatgpt.min.js

// Import libs
const fs = require('fs'), { execSync } = require('child_process');

// Prepend aliases
const jsonContent = JSON.parse(fs.readFileSync('data/function-aliases.json', 'utf8'));
const unminOutputContent = fs.readFileSync('chatgpt.js', 'utf8').replace(
    /^(\/\/[^\n]*\n)+/, // copyright notice
    `$&\nconst functionAliases = ${ JSON.stringify(jsonContent.functionAliases) };\n`
        + `const synonyms = ${ JSON.stringify(jsonContent.synonyms) };\n`
);
const unminOutputPath = 'dist/chatgpt.js';
fs.writeFileSync(unminOutputPath, unminOutputContent); // write to temp file

// Minify to dist/chatgpt.min.js
const version = JSON.parse(fs.readFileSync('package.json', 'utf8')).version,
      minOutputPath = `dist/chatgpt-${ version }.min.js`;
execSync(`uglifyjs ${ unminOutputPath } -o ${ minOutputPath }`);
fs.unlinkSync(unminOutputPath);
console.info(`Success: Built ${ minOutputPath }`);
