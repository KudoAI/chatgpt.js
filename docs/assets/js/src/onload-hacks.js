/* Hack page elements on load */

const features = [ // to typeText(features) in #feature-list
    '>>  Feature-rich', '>>  Object-oriented', '>>  Easy-to-use',
    '>>  Lightweight (yet optimally performant)'];

// Define OBSERVERS

const mdLoaded = new Promise((resolve) => {
    const mdObserver = new MutationObserver((mutationsList, observer) => {
        if (document.querySelector('article div')) { observer.disconnect(); resolve(); }});
    mdObserver.observe(document.body, { childList: true, subtree: true });
});

const iObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.target.id === 'feature-list') { // type features or clear content/timeouts
            if (entry.isIntersecting) typeText(features, entry.target, 20);
            else { entry.target.innerHTML = ''; clearTimeout(typeText.timeoutID); }
        }
    });
});

const onLoadObserver = new MutationObserver(() => {

    // Exit if not loaded
    if (!document.querySelector('.cover-main blockquote p')) return;

    // Hack HOMEPAGE
    if (/#\/(\w{2}(-\w{2})?\/)?$/.test(location.hash)) {

        // Hide SIDEBAR
        if (!isMobileDevice()) document.body.className = 'ready close';

        // Animate COVER TAGLINE
        const tagline = document.querySelector('.cover-main blockquote p'),
              taglineWithUnderscore = tagline.textContent + '_';
        tagline.textContent = taglineWithUnderscore;
        let delay = 15; const maxDelay = 1000;
        (function animateTagline() {
            tagline.textContent = taglineWithUnderscore.split('').map(letter => {
                return Math.random() < 0.5 ? letter.toUpperCase() : letter.toLowerCase();
            }).join('');
            delay += delay < 95 ? 10 : 135; // super-saiyan to 95ms, then +135ms to 1s
            if (delay > maxDelay) delay = maxDelay; // cap at `maxDelay`
            setTimeout(animateTagline, delay);
        })();

        // Add TOP GRADIENT
        const cover = document.querySelector('.cover'),
              topGradient = document.createElement('div');
        topGradient.classList.add('top-gradient');
        document.body.appendChild(topGradient);
        updateTGvisibility(); // since page load can be below fold
        function updateTGvisibility() {
            topGradient.style.display = ( // hide/show when fold is 85% at top
                window.scrollY > 0.85 * cover.offsetHeight ? '' : 'none' ); }

        // Add PARALLAX to scroll
        const coverMain = document.querySelector('.cover-main');
        window.addEventListener('scroll', () => {
            updateTGvisibility();
            const coverRect = cover.getBoundingClientRect(),
                  newOpacity = 1 - Math.abs(coverRect.top) / cover.offsetHeight,
                  parallaxOffset = coverRect.top * -0.35;
            cover.style.opacity = newOpacity;
            coverMain.style.transform = `translateY(${ parallaxOffset }px)`;
        });
       
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
                const introDiv = document.querySelector('#intro');
                introDiv.parentElement.insertBefore( // insert after description
                    featureListDiv, introDiv.nextElementSibling.nextElementSibling);
            }

            // ...then observe for when it's in view
            iObserver.observe(featureListDiv);

            // Convert OpenAI showcase icons + sidebar logo to dark-mode
            document.querySelectorAll('picture').forEach(picture => {
                const srcElement = picture.querySelector('source'),
                      srcSet = srcElement.getAttribute('srcset'),
                      imgElement = document.createElement('img');
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

        // Hide SIDEBAR
        if (!isMobileDevice()) document.body.className = 'ready close';

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

// Define FUNCTIONS

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); }

function validateIntArg(arg, name, defaultVal) {
    if (arg === undefined) return defaultVal; // no validation required
    if (!Number.isInteger(arg) || !/^\d+$/.test(arg))
        throw new Error(name + ' must be an integer.');
    return parseInt(arg, 10); 
}

function typeText(txtToType, destination, typeDelay, iniTxtToType, iniTxtPos, linesToScrollAt) {

    // Validate args
    if (typeof txtToType === 'string') txtToType = [txtToType]; // array of strings to type
    if (!destination?.nodeName) // DOM element to type to
        throw new Error('Destination must be a DOM element');
    typeDelay = validateIntArg( // ms to delay between chars typed
        typeDelay, 'Typing delay', 30);
    iniTxtToType = validateIntArg( // index of txt array to start typing
        iniTxtToType, 'Initial text array index', 0);
    iniTxtPos = validateIntArg( // position in txt string to start typing from
        iniTxtPos, 'Initial text string position', 3);
    linesToScrollAt = validateIntArg( // lines reached before scrolling up
        linesToScrollAt, 'Lines to scroll at', 5);
    
    // Init variables
    let typeContent =  ' ',
        iniRow = Math.max(0, iniTxtToType - linesToScrollAt);

    // Type text
    while (iniRow < iniTxtToType) typeContent += txtToType[iniRow++] + '<br /><br />';
    destination.innerHTML = typeContent + txtToType[iniTxtToType].substring(0, iniTxtPos) + '_';
    if (iniTxtPos++ == txtToType[iniTxtToType].length) {
        iniTxtPos = 0; iniTxtToType++;
        if (iniTxtToType != txtToType.length) { // if end of string reached
            typeText.timeoutID = setTimeout(() => {
                typeText(txtToType, destination, typeDelay, iniTxtToType, iniTxtPos);
            }, 88); // pause til next string
    }} else typeText.timeoutID = setTimeout(() => {
        typeText(txtToType, destination, typeDelay, iniTxtToType, iniTxtPos);
    }, typeDelay + (Math.random() * 220) - 110);
}

// Run MAIN routine

onLoadObserver.observe(document.body, { childList: true, subtree: true });

// Re-connect observer on nav to new hash
let fromUnhashedURL = window.location.href.includes('#');
window.addEventListener('hashchange', () => {
    if (!fromUnhashedURL) fromUnhashedURL = true;
    else if (fromUnhashedURL)
        onLoadObserver.observe(document.body, { childList: true, subtree: true });
});