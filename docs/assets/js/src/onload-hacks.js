/* Hack page elements on load */

const taglineWords = []; // for iObserver's scrambleText() + randomizeCase()
const features = [ // for iObserver's typeText() to #feature-list
    '>>  Feature-rich', '>>  Object-oriented', '>>  Easy-to-use',
    '>>  Lightweight (yet optimally performant)' ];
const visibilityMap = []; // to store flags for section visibility

// Define OBSERVERS

const mdLoaded = new Promise((resolve) => {
    const mdObserver = new MutationObserver((mutationsList, observer) => {
        if (document.querySelector('article div')) { observer.disconnect(); resolve(); }});
    mdObserver.observe(document.body, { childList: true, subtree: true });
});

const iObserver = new IntersectionObserver(entries => {  entries.forEach(entry => {

    // Set visibility FLAG
    const key = entry.target.id || entry.target.className;
    visibilityMap[key] = entry.isIntersecting;

    // Handle COVER    
    if (entry.target.className === 'cover-main') {
        if (entry.isIntersecting) {

            // Scramble entire tagline + add case randomization layer
            Array.from( // clear tagline spans to maintain grow effect
                document.querySelectorAll('span[id^="tagline"]'))
                    .forEach(span => { span.textContent = ''; });
            scrambleText([taglineWords[0]], document.querySelector('#tagline-pre-adj'));
            scrambleText(taglineWords[1], document.querySelector('#tagline-adj'), 750);
            scrambleText([taglineWords[2]], document.querySelector('#tagline-post-adj'));
            randomizeCase(document.querySelector('#tagline-pre-adj'));
            randomizeCase(document.querySelector('#tagline-post-adj'));

        } else { // stop scrambling tagline adjective
            clearTimeout(scrambleText.timeoutID);
        }
    }

    // Handle FEATURE LIST
    if (entry.target.id === 'feature-list') { // type features or clear content/timeouts
        if (entry.isIntersecting) typeText(features, entry.target, 20);
        else { entry.target.innerHTML = ''; clearTimeout(typeText.timeoutID); }
    }

});});

const onLoadObserver = new MutationObserver(() => {

    // Exit if not loaded
    if (!document.querySelector('.cover-main blockquote p')) return;

    // Hack HOMEPAGE
    if (/#\/(\w{2}(-\w{2})?\/)?$/.test(location.hash)) {

        // Hide SIDEBAR
        if (!isMobileDevice()) document.body.className = 'ready close';

        // Populate [taglineWords] for iObserver's scrambleText() + randomizeCase()
        const taglineSpans = Array.from(document.querySelectorAll('span[id^="tagline"]'));
        taglineSpans.map(span => { taglineWords.push(
            /pre|post/.exec(span.id) ? span.textContent : span.textContent.split('|')); });
        taglineSpans.forEach(span => { span.textContent = ''; }); // clear them out

        // Observe COVER for visibility change hacks
        iObserver.observe(document.querySelector('.cover-main'));        

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

function scrambleText(text, destination, delayBetweenWords, textIdx = 0) {

    // Validate args
    if (typeof text === 'string') text = [text]; // array of strings to scramble
    if (!destination?.nodeName) // DOM element to scramble to
        throw new Error('Destination (2nd arg) must be a DOM element');
    if (delayBetweenWords) { // ms to delay between scrambles
        if (!Number.isInteger(delayBetweenWords) || !/^\d+$/.test(delayBetweenWords))
            throw new Error('Delay betweeen words (3nd arg) must be an integer (ms)');
        delayBetweenWords = parseInt(delayBetweenWords, 10);
    }

    // Scramble text
    const textToScramble = new Scramble(destination);
    textToScramble.setText(text[textIdx])
        .then(() => { if (delayBetweenWords && visibilityMap['cover-main']) {
            scrambleText.timeoutID = setTimeout(() => {
                scrambleText(text, destination, delayBetweenWords, (textIdx + 1) % text.length); }, delayBetweenWords);
        }});
}

function randomizeCase(targetNode, iniDelay, finalDelay, incrementA, incrementB, inflectionPt) {

    // Validate args            
    if (!targetNode?.nodeName) // DOM element to randomize case of text content
        throw new Error('Target node (1st arg) must be a DOM element');
    iniDelay = validateIntArg( // ms to initially between case switches
        iniDelay, 'Initial delay', 5);
    finalDelay = validateIntArg( // ms to finally delay between case switches
        finalDelay, 'Final delay', 1000);
    incrementA = validateIntArg( // ms to initially increment from iniDelay to finalDelay
        incrementA, 'Increment A', 10);
    incrementB = validateIntArg( // ms to increment from iniDelay to finalDelay after inflection
        incrementB, 'Increment B', 111);
    inflectionPt = validateIntArg( // ms of iniDelay state before inflecting to Increment B
        inflectionPt, 'Inflection point', 265);

    // Randomize case
    targetNode.textContent = targetNode.textContent.split('').map(letter => {
        return Math.random() < 0.5 ? letter.toUpperCase() : letter.toLowerCase();
    }).join('');
    randomizeCase.iniDelay = randomizeCase.iniDelay || iniDelay;
    randomizeCase.iniDelay += randomizeCase.iniDelay < inflectionPt ? incrementA : incrementB;
    if (randomizeCase.iniDelay > finalDelay) randomizeCase.iniDelay = finalDelay; // cap at `finalDelay`
    setTimeout(() => {
        randomizeCase(targetNode, iniDelay, finalDelay, incrementA, incrementB, inflectionPt);
    }, randomizeCase.iniDelay);
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

// Define SCRAMBLE class

class Scramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    setText(newText) {
        const oldText = this.el.innerText,
              length = Math.max(oldText.length, newText.length),
              promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '',
                  to = newText[i] || '',
                  start = Math.floor(Math.random() * 45), // speed of beginning scramble
                  end = start + Math.floor(Math.random() * 45); // speed of end scramble
            this.queue.push({ from, to, start, end });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0; this.update(); return promise;
    }
    update() {
        let output = '', complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) { complete++; output += to; }
            else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="dud">${ char }</span>`;
            } else output += from;
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) this.resolve();
        else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)]; }
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
