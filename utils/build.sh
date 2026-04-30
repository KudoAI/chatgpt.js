#!/bin/bash

cp assets/data/_locales/en/messages.json dist/data/messages.json
cp package-data.json dist/data/package-data.json
cp -r src/cli dist/

minify-js src/chatgpt.js ../dist/chatgpt.min.js --comment=" \
© 2023–2026 KudoAI & contributors under the MIT license.\n \
Source: https://github.com/KudoAI/chatgpt.js\n \
User guide: https://chatgptjs.org/userguide\n \
Latest minified release: https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js/chatgpt.min.js"
