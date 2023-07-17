// Hack page elements on load

const mdLoaded = new Promise((resolve) => {
    const mdObserver = new MutationObserver((mutationsList, observer) => {
        if (document.querySelector('article div')) { observer.disconnect(); resolve(); }});
    mdObserver.observe(document.body, { childList: true, subtree: true });
});

const onLoadObserver = new MutationObserver(() => {

    // Exit if not loaded
    if (!document.querySelector('.active')) return;

    // Update LANGUAGE SELECTOR word
    setTimeout(() => {
        const activeLanguage = document.querySelector('.active').innerText;
        document.getElementById('dropdown-button').innerText = activeLanguage;
    }, 15)

    // Append footer to HOMEPAGE
    if (location.hash.match(/#\/(\w{2}(-\w{2})?\/)?$/)) {
        const footer = document.createElement('div');
        fetch('assets/html/footer.html')
            .then(response => response.text()).then(html => {
                footer.innerHTML = html;
                const article = document.querySelector('article');
                article.insertBefore(footer, article.lastElementChild);
            });

    // Hide site lang selector from NON-HOME pages
    } else document.querySelector('.app-nav').style.display = 'none';

    // Hack LICENSE/SECURIY pages
    if (location.hash.match(/LICENSE|SECURITY/)) {

        // Hide sidebar + toggle
        document.body.className = 'ready close';
        document.querySelector('.sidebar-toggle-button').style.display = 'none';

        // Correct doc lang selector links
        mdLoaded.then(() => {
            const docLangSelector = document.querySelectorAll('h5 a');
            for (const lang of docLangSelector)
                lang.href = lang.href.replace(/(.*\/\/.*?\/)((\w{2}(-\w{2})?\/)?.*)\.md/, '$1#/$2');
        });
    }

    // Disconnect observer
    onLoadObserver.disconnect();

});

onLoadObserver.observe(document.body, { childList: true, subtree: true });

// Re-connect observer on nav to new hash
window.addEventListener('hashchange', () => {
    onLoadObserver.observe(document.body, { childList: true, subtree: true });});