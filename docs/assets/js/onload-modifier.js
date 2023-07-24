// Hack page elements on load

const mdLoaded = new Promise((resolve) => {
    const mdObserver = new MutationObserver((mutationsList, observer) => {
        if (document.querySelector('article div')) { observer.disconnect(); resolve(); }});
    mdObserver.observe(document.body, { childList: true, subtree: true });
});

const onLoadObserver = new MutationObserver(() => {

    // Exit if not loaded
    if (!document.querySelector('.github-corner')) return;

    // Hack HOMEPAGE
    if (/#\/(\w{2}(-\w{2})?\/)?$/.test(location.hash)) {

        // Hide sidebar + toggle
        document.body.className = 'ready close';
        document.querySelector('.sidebar-toggle-button').style.display = 'none';
       
        mdLoaded.then(() => {

            // Update LANGUAGE SELECTOR word
            setTimeout(() => {
                const activeLanguage = document.querySelector('.active').innerText;
                document.getElementById('dropdown-button').innerText = activeLanguage;
            }, 15);

            // Convert showcase OpenAI icons to dark-mode
            document.querySelectorAll('picture').forEach(picture => {
                const srcElement = picture.querySelector('source');
                const srcSet = srcElement.getAttribute('srcset');
                const imgElement = document.createElement('img');
                imgElement.setAttribute('src', srcSet);
                picture.parentNode.replaceChild(imgElement, picture);
            });

            // Append footer
            const footer = document.createElement('div');
            fetch('assets/html/footer.html')
                .then(response => response.text()).then(html => {
                    footer.innerHTML = html;
                    const article = document.querySelector('article');
                    article.insertBefore(footer, article.lastElementChild);
                });
        });

    // Hide site lang selector from NON-HOME pages
    } else document.querySelector('.app-nav').style.display = 'none';

    // Hack LICENSE/SECURIY pages
    if (/LICENSE|SECURITY/.test(location.hash)) {

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
    if (window.location.href.includes('#'))
        onLoadObserver.observe(document.body, { childList: true, subtree: true });
});
