// Hack page elements on load

const mdLoaded = new Promise((resolve) => {
    const mdObserver = new MutationObserver((mutationsList, observer) => {
        if (document.querySelector('article div')) { observer.disconnect(); resolve(); }});
    mdObserver.observe(document.body, { childList: true, subtree: true });
});

let featureListInView = false;            
featureListObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        featureListInView = true;
        featureListObserver.unobserve(document.querySelector('#feature-list')); 
}});

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

            // Create/select FEATURE LIST
            const featureListDiv = document.querySelector('#feature-list') || // select div
                                   document.createElement('div'); // ...or create it
            if (!featureListDiv.parentElement) { // append created div if not in DOM
                featureListDiv.setAttribute('id', 'feature-list');
                const aboutH2 = document.querySelector('h2#about');
                aboutH2.parentElement.insertBefore( // insert after description
                    featureListDiv, aboutH2.nextSibling.nextSibling);
            }

            // ...then observe for when it's in view (self-disconnects)
            if (!featureListInView) featureListObserver.observe(featureListDiv); 

            // ...then loop check for observer flag to begin typing
            const txtToType = new Array( // features to type
                '>>  Feature-rich', '>>  Object-oriented', '>>  Easy-to-use',
                '>>  Lightweight (yet optimally performant)');
            const typeSpeed = 30; // ms between chars typed
            let iniTxtToType = 0; // index of array txt to start typing
            let iniTxtPos = 3; // position in txt to start typing from
            const linesToScrollAt = 5; // start scrolling up at this many lines
            let iniArrLength = txtToType[0].length; // initial length of txt array
            let typeContent = ''; // init contents variable
            let iniRow; // init current row     
            function typeText() {
                typeContent =  ' ';
                iniRow = Math.max(0, iniTxtToType - linesToScrollAt);
                const destination = document.getElementById('feature-list');
                while (iniRow < iniTxtToType) typeContent += txtToType[iniRow++] + '<br /><br />';
                destination.innerHTML = typeContent + txtToType[iniTxtToType].substring(0, iniTxtPos) + '_';
                if (iniTxtPos++ == iniArrLength) {
                    iniTxtPos = 0; iniTxtToType++;
                    if (iniTxtToType != txtToType.length) { // if end of string reached
                        iniArrLength = txtToType[iniTxtToType].length; // reset array length
                        setTimeout(typeText, 88); // pause til next string
                }} else setTimeout(typeText, typeSpeed);
            }
            (function checkOrTypeFeatureList() {
                if (featureListInView) typeText();
                else setTimeout(checkOrTypeFeatureList, 100); 
            })();

            // Convert OpenAI icons in showcase apps to dark-mode
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
                
            // Remove readme's back-to-top link
            const readmeBTTlink = document.querySelector('p a[href="#"]');
            readmeBTTlink.previousSibling.remove(); readmeBTTlink.remove();
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
let fromUnhashedURL = window.location.href.includes('#');
window.addEventListener('hashchange', () => {
    if (!fromUnhashedURL) fromUnhashedURL = true;
    else if (fromUnhashedURL)
        onLoadObserver.observe(document.body, { childList: true, subtree: true });
});
