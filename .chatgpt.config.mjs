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
    provider: 'openrouter', // provider for chat API
    uiLang: '',             // ISO 639-1 code of language to display UI in
    quietMode: false        // suppress all logging except errors
}
