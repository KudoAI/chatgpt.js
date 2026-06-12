const language = require('../cli/lib/language'),
      nonLatinLocales = require('non-latin-locales')

function build(baseQuery) {
    if (typeof baseQuery != 'string') return baseQuery
    let query = baseQuery
    if (!cli.config.noSuggest && query == cli.config.query)
        query += '\n\nThen, at the end of your response, ask user if they want you to do something related to the query'
              + ' except if you are already finishing your response w/ a question.'
    if (cli.config.replyLang) {
        const langCode = cli.config.replyLang,
              isValidLatin = language.validateLangCode(langCode) && !nonLatinLocales.includes(langCode.split('_')[0])
        if (env.supports.unicode || isValidLatin)
            query += `\n\nRespond in '${langCode}' language.`
    }
    return query
}

module.exports = { build }
