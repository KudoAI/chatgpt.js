/**
 * .chatgpt.config.mjs
 *
 * Optional config file for the chatgpt.js CLI.
 * Copy this file to your project root to set default options.
 * CLI arguments always override these values.
 *
 * Docs: https://github.com/KudoAI/chatgpt.js/#readme
 */

export default {
    provider: 'random',     // provider for chat API
    uiLang: 'en',           // ISO 639-1 code of language to display UI in
    msgMaxChars: 250,       // char limit per msg
    turnsToPreserve: 3,     // 2 msgs per turn
    quietMode: false        // suppress all logging except errors
}
