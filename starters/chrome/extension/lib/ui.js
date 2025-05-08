window.ui = {
    getScheme() {
        return /\b(light|dark)\b/.exec(document.documentElement.className)?.[1]
            || ( window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' )
    }
};
