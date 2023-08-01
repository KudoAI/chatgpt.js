/* Minify JS scripts in `inputDir` to `outputDir` */

// Import libs
const fs = require('fs'),
      path = require('path'),
      uglifyJS = require('uglify-js');

const inputDir = path.join(__dirname, '../docs/assets/js/src');
const outputDir = path.join(__dirname, '../docs/assets/js/minified');

try { // to minify `inputDir` contents
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
    minifyDirectory(inputDir, outputDir);
} catch (error) { console.error('Error occurred during minification:', error.message); }

// Define FUNCTIONS

// Check if a file is already minified
function isMinifiedFile(filename) { return filename.includes('.min.js'); }

// Minify a single file
function minifyFile(inputFilePath, outputFilePath) {
    console.log(`Minifying: ${inputFilePath}`);
    const code = fs.readFileSync(inputFilePath, 'utf8');
    const minifiedCode = uglifyJS.minify(code).code;
    fs.writeFileSync(outputFilePath, minifiedCode, 'utf8');
};

// Minify all files in a dir recursively
function minifyDirectory(inputDir, outputDir) {
    fs.readdirSync(inputDir).forEach(file => {
        const inputFilePath = path.join(inputDir, file);
        const outputFilePath = path.join(outputDir, file);
        const stats = fs.statSync(inputFilePath);
        if (stats.isDirectory()) { // create corresponding output dir & continue minification
            const newOutputDir = outputDir; // keep track of output dir at this level
            fs.mkdirSync(newOutputDir, { recursive: true });
            minifyDirectory(inputFilePath, newOutputDir);
        } else if (stats.isFile() && file.endsWith('.js') && !isMinifiedFile(file)) { // proceed w/ minification
            const minifiedFileName = path.basename(file, '.js') + '.min.js';
            const minifiedOutputFilePath = path.join(outputDir, minifiedFileName);
            minifyFile(inputFilePath, minifiedOutputFilePath);
        }
});};
