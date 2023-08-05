/* ========================================================
Script:       minify.js
Version:      2023.8.4.1
Description:  Minify all JavaScript in a directory
Author:       Adam Lui
URL:          https://github.com/adamlui/js-utils
=========================================================== */

// Import libs
const fs = require('fs'),
      path = require('path'),
      uglifyJS = require('uglify-js');

// Init config
const inputDir = path.join(__dirname, '../assets/js/src'),
      outputDir = path.join(__dirname, '../assets/js/minified');

try { // to minify `inputDir` contents
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
    minifyDirectory(inputDir, outputDir);
} catch (err) { console.error('Error occurred during minification:', err.message); }

// Define FUNCTIONS

// Check if a file is already minified
function isMinifiedFile(filename) { return filename.includes('.min.js'); }

// Minify a single file
function minifyFile(inputFilePath, outputFilePath) {
    console.log(`Minifying: ${inputFilePath}`);
    const code = fs.readFileSync(inputFilePath, 'utf8');
    const minifiedCode = uglifyJS.minify(code).code;
    fs.writeFileSync(outputFilePath, minifiedCode, 'utf8');
}

// Minify all files in a dir recursively
function minifyDirectory(inputDir, outputDir) {
    fs.readdirSync(inputDir).forEach(file => {
        const inputFilePath = path.join(inputDir, file);
        const stats = fs.statSync(inputFilePath);
        if (stats.isDirectory()) { // create corresponding output dir & continue minification
            const newOutputDir = outputDir; // keep track of output dir at this level
            fs.mkdirSync(newOutputDir, { recursive: true });
            minifyDirectory(inputFilePath, newOutputDir);
        } else if (stats.isFile() && file.endsWith('.js') && !isMinifiedFile(file)) { // proceed w/ minification
            const minFileName = path.basename(file, '.js') + '.min.js',
                  minOutputFilePath = path.join(outputDir, minFileName);
            minifyFile(inputFilePath, minOutputFilePath);
        }
});}
