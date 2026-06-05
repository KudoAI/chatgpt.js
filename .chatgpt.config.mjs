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
    maxTokens: null,        // max tokens to use
    turnsToPreserve: 3,     // # of turns to preserve (2 msgs/turn)
    autoSuggest: true,      // auto-suggest next AI action at end of CLI response
    quietMode: false        // suppress all logging except errors
}
