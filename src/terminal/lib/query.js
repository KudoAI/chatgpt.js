const language = require('./language'),
      nonLatinLocales = require('non-latin-locales'),
      settings = require('./settings')

function build(baseQuery) {
    if (typeof baseQuery != 'string') return baseQuery
    const { replyLang } = cli.config
    const cmdIsActive = Object.keys(settings.controls).some(key => {
        const ctrl = settings.controls[key]
        return ctrl.type == 'cmd' && cli.config[key] === true
    })
    let query = baseQuery
    if (!cli.config.noSuggest && !cmdIsActive)
        query += '\n\nThen, at the end of your response, ask user if they want you to do something related to the query'
              + ' except if you are already finishing your response w/ a question.'
    if (cli.config.fortune && !replyLang.startsWith('zh')
        && (env.supports.unicode || replyLang && !nonLatinLocales.includes(replyLang.split('_')[0]))
    ) query +=`\n\nRespond in simplified Chinese, then translate it literally to ${
                    replyLang || 'en' } on the line below it.`
    if (replyLang) {
        const langCode = cli.config.replyLang,
              isValidLatin = language.validateLangCode(langCode) && !nonLatinLocales.includes(langCode.split('_')[0])
        if (env.supports.unicode || isValidLatin)
            query += `\n\nRespond in '${langCode}' language.`
    }
    return query
}

module.exports = { build }
