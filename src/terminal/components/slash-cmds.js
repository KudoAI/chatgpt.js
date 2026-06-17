module.exports = [
    // app commands
    '/init', '/help', '/version', '/stats', '/exit', '/debug [on|off]',
    // parameter options
    '/provider <name>', '/uilang <code>', '/replylang <text>', '/summarize <text|file|url>', '/config <filepath|url>',
    // msg chain options
    '/maxchars <num>', '/maxtokens <num>', '/turns <num>', '/clear',
    // flags
    '/copy [on|off]', '/nosuggest [on|off]', '/quiet [on|off]',
    // git commands / options
    '/commitmsg', '/commitmsgexample <msg>', '/diff',
    // data commands
    '/sentiment <text|file|url>',
    // fun commands
    '/actas <persona>', '/ascii [subject]', '/fortune', '/joke', '/random'
];
