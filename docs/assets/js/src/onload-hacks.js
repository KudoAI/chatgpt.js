/* Hack page elements on load */

const taglineWords = []; // for iObserver's scrambleText() + randomizeCase()
const features = [ // for iObserver's typeText() to #feature-list
    '>>  Feature-rich', '>>  Object-oriented', '>>  Easy-to-use',
    '>>  Lightweight (yet optimally performant)' ];
const visibilityMap = []; // to store flags for section visibility
const sectionColors = [ // for mdLoaded.then's scroll color hacks
    '#64ffff', // Importing the Library
    '#f9ee16', // Greasemonkey
    'lime', // Chrome
    'orange', // Usage
    '#b981f9', // Made w/ chatgpt.js
    '#f581f9', // ChatGPT Infinity tile
    '#81f9c3' ]; // Contributors
const iniStarZvelocity = window.starVelocity.z,
      warpDuration = 1600, hiWarpDuration = 1400, starResetDelay = 15;

// Define OBSERVERS

const mdLoaded = new Promise((resolve) => {
    const mdObserver = new MutationObserver((mutationsList, observer) => {
        if (document.querySelector('#shields')) { observer.disconnect(); resolve(); }});
    mdObserver.observe(document.body, { childList: true, subtree: true });
});

const iObserver = new IntersectionObserver(entries => { entries.forEach(entry => {

    // Set visibility FLAG
    const key = entry.target.id || entry.target.className;
    visibilityMap[key] = entry.isIntersecting;

    // Handle COVER    
    if (entry.target.className === 'cover-main') {
        if (entry.isIntersecting) {

            // Reset colors
            document.querySelector('#kudoai a').style.color = 'white';
            window.starColor = 'white';
            (document.querySelector('#scrollbar-style') || {}).innerText = (
                ':root { scrollbar-color: rgb(210,210,210) #1a1a1a }'
              + 'body::-webkit-scrollbar-thumb { background-color: white }');

            // Animate KudoAI logo
            const kudo = document.querySelector('.kudo');
            kudo.classList.add('hover');
            setTimeout(() => { kudo.classList.remove('hover'); }, 955);

            // Scramble entire tagline + add case randomization layer
            Array.from( // clear tagline spans to maintain grow effect
                document.querySelectorAll('span[id^="tagline"]'))
                    .forEach(span => { span.textContent = ''; });
            scrambleText([taglineWords[0]], document.querySelector('#tagline-pre-adj'));
            scrambleText(taglineWords[1], document.querySelector('#tagline-adj'), 750);
            scrambleText([taglineWords[2]], document.querySelector('#tagline-post-adj'));
            randomizeCase(document.querySelector('#tagline-pre-adj'));
            randomizeCase(document.querySelector('#tagline-post-adj'));

            // Star boost
            if (window.starVelocity.z <= iniStarZvelocity) { // to avoid reverse boost from scroll-ups
                window.starVelocity.z += .024; // boost velocity
                setTimeout(() => { // slow velocity
                    window.starVelocity.z -= .02; }, 1155);
                setTimeout(() => { // slow velocity to original
                    window.starVelocity.z = iniStarZvelocity; }, 1355);
            }

        } else // stop scrambling tagline adjective
            clearTimeout(scrambleText.timeoutID);

    // Handle FEATURE LIST
    } else if (entry.target.id === 'feature-list') { // type features or clear content/timeouts
        if (entry.isIntersecting) typeText(features, entry.target, 20);
        else { entry.target.innerHTML = ''; clearTimeout(typeText.timeoutID); }
    }

});});

const onLoadObserver = new MutationObserver(() => {

    // Exit if not loaded
    if (!document.querySelector('.cover-main blockquote p')) return;

    // Activate SMOOTH SCROLL
    smoothScroll(document, 155, 9);

    // Hack HOMEPAGE
    if (/#\/(\w{2}(-\w{2})?\/)?$/.test(location.hash)) {

        // Hide SIDEBAR
        if (!isMobileDevice()) document.body.className = 'ready close';

        // Populate [taglineWords] for iObserver's scrambleText() + randomizeCase()
        const taglineSpans = Array.from(document.querySelectorAll('span[id^="tagline"]'));
        taglineSpans.map(span => { taglineWords.push(
            /pre|post/.exec(span.id) ? span.textContent : span.textContent.split('|')); });
        taglineSpans.forEach(span => { span.textContent = ''; }); // clear them out

        // Observe COVER for visibility change tagline hacks
        iObserver.observe(document.querySelector('.cover-main'));

        // Add TOP GRADIENT
        const cover = document.querySelector('.cover'),
              topGradient = document.createElement('div');
        topGradient.classList.add('top-gradient');
        document.body.append(topGradient);
        updateTGvisibility(); // since page load can be below fold
        function updateTGvisibility() {
            topGradient.style.display = ( // hide/show when fold is 85% at top
                window.scrollY > 0.85 * cover.offsetHeight ? '' : 'none' ); }
       
        mdLoaded.then(() => {

            // Scroll slightly to overcome Chromium bug preventing parallax
            if (navigator.userAgent.includes('Chrome'))
                window.scrollBy(0, 200); setTimeout(() => window.scrollBy(0, -200), 600);

            // Disable SEARCH
            document.querySelector('.search').style.display = 'none';
            document.querySelector('.sidebar-nav').style.paddingTop = '102px';

            // Create/select FEATURE LIST
            const featureListDiv = document.querySelector('#feature-list') || // select div
                                   document.createElement('div'); // ...or create it
            if (!featureListDiv.parentElement) { // append created div if not in DOM
                featureListDiv.setAttribute('id', 'feature-list');
                const introDiv = document.querySelector('#intro');
                introDiv.parentElement.insertBefore( // insert after description
                    featureListDiv, introDiv.nextElementSibling.nextElementSibling);
            }

            // ...then observe for visibility change to apply typing hack
            iObserver.observe(featureListDiv);

            // Append COPYRIGHT NOTICE footer
            const article = document.querySelector('article'), // to insert at end of
                  copyrightFooter = document.createElement('div');
            copyrightFooter.id = 'copyright-footer';
            copyrightFooter.innerHTML = '<span style="font-size: 115%">Copyright © 2023 '
                + '<a href="https://kudoai.com" target="_blank" rel="noopener">KudoAI</a>.</span><br>'
                + 'Designed by <a href="https://adamlui.com" target="_blank" rel="noopener">Adam Lui</a> / '
                + 'Powered by <a href="https://docsify.js.org" target="_blank" rel="noopener">Docsify</a> / '
                + 'Hosted by <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>';
            article.append(copyrightFooter);

            // Replace GitHub demo embed w/ YouTube one
            const ghDemo = document.querySelector('a[href*="/assets/10906554/f53c740f-d5e0-49b6-ae02-3b3140b0f8a4"]'),
                  ytDemo = document.createElement('iframe');
            ytDemo.setAttribute('width', '855'); ytDemo.setAttribute('height', '455');
            ytDemo.setAttribute('src', 'https://www.youtube.com/embed/yG8DtsEo0PM?rel=0');
            ytDemo.setAttribute('allow',
                'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
            ytDemo.setAttribute('allowfullscreen', '');
            ytDemo.style.minWidth = 'fit-content'; ytDemo.style.width = '855px'; ytDemo.style.marginBottom = '30px';
            ghDemo.parentNode.replaceChild(ytDemo, ghDemo);
            ytDemo.parentNode.style.textAlign = 'center';

            // Strip blockquote wrappers from showcase app descriptions    
            document.querySelectorAll('blockquote').forEach(blockquote => {
                const parent = blockquote.parentNode, content = blockquote.innerHTML;
                parent.replaceChild(document.createRange().createContextualFragment(content), blockquote);
            });

            // Add FADE classes to elements
            const fadeUpElements = [], fadeRightElements = [], fadeLeftElements = [];
            fadeUpElements.push(...document.querySelectorAll(
                '.cover-main img, .cover-main a,' // cover elements
                  + 'h2, h3, p, pre, main li,' // general elements
                  + 'div#partners-collage, #copyright-footer')); // footer elements
            fadeUpElements.forEach((element) => { element.classList.add('content-fadeup'); });
            fadeUpElements.push( // language selector
                document.querySelector('#language-menu'));
            fadeUpElements[fadeUpElements.length - 1].classList.add('menu-fadeup');
            fadeRightElements.push(...document.querySelectorAll( // left-side showcase apps
                `#showcase ~ h3:nth-of-type(odd):not(#contributors ~ *),
                 #showcase ~ h3 + p:nth-of-type(odd):not(#contributors ~ *`));
            fadeRightElements.forEach((element) => { element.classList.add('content-faderight'); });
            fadeLeftElements.push(...document.querySelectorAll( // right-side showcase apps
                `#showcase ~ h3:nth-of-type(even):not(#contributors ~ *),
                 #showcase ~ h3 + p:nth-of-type(even):not(#contributors ~ *`));
            fadeLeftElements.forEach((element) => { element.classList.add('content-fadeleft'); });
            const fadeElements = [...fadeUpElements, ...fadeRightElements, ...fadeLeftElements];

            // ...then observe for visibility change to update element/sidebar states
            const sideNavItems = [...document.querySelectorAll('.sidebar-nav li')];
            const fadeObserver = new IntersectionObserver(
                (entries) => { entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');

                        // Update sidebar w/ active class for headings
                        if (entry.target.tagName.startsWith('H')) {

                            // Find the nav item that matches intersecting heading
                            const headingText = entry.target.querySelector('a').textContent,
                                  activeNavItem = (document.querySelector(
                                      `a[title="${ headingText }"]`) || {}).parentElement;

                            // Add `nav-active` class to matched nav item                        
                            if (activeNavItem) {
                                sideNavItems.forEach(item => item.classList.remove('nav-active'));
                                activeNavItem.classList.add('nav-active');
                            }
                        }
                    } else entry.target.classList.remove('visible');
                });}, { root: null, threshold: 0.02 });
            fadeElements.forEach((element) => { fadeObserver.observe(element); });

            // Change stars shield link to repo
            const starsShieldLink = document.querySelector('a[href$="stargazers"]'),
                  href = starsShieldLink.getAttribute('href');
            starsShieldLink.setAttribute('href', href.replace('/stargazers', ''));

            // Establish TRIGGER POINTS for scroll FX
            const triggerElements = [], triggerPoints = [];
            triggerElements.push(...document.querySelectorAll('h2'));
            triggerElements.push(document.querySelector('h3#-greasemonkey'));
            triggerElements.push(document.querySelector('h3#-chrome'));
            triggerElements.push( // 1st showcase tile
                document.querySelector('img[src*="chatgpt-infinity"]'));
            triggerElements.forEach(element => {
                const elementPos = element.getBoundingClientRect().top;
                const vOffsetDivisor = ( // higher = lower pos
                    element.id.includes('⚡') ? 1.5 // Importing the Library section
                  : element.tagName === 'IMG' ? 0.8  // 1st showcase tile
                                              : 8.8 ); // headings
                triggerPoints.push(elementPos - window.innerHeight/vOffsetDivisor);
            });
            triggerPoints.sort((a, b) => a - b); // sort ascending

            // Update COLORS + STAR VELOCITY on scroll
            window.addEventListener('scroll', () => {

                // Exit if still in 1st two sections
                if (visibilityMap['cover-main'] || visibilityMap['feature-list']) return;
              
                // Determine current section
                let currentSection = 0;
                while (window.scrollY > triggerPoints[currentSection] && 
                        currentSection < triggerPoints.length)
                    currentSection++; 

                // Color/animate logo/stars + color scrollbar if section changed
                const sectionColor = sectionColors[currentSection - 2];
                if (sectionColor !== window.starColor) {

                    // Color/animate stars
                    window.starColor = sectionColor;
                    setTimeout(() => { // schedule color reset
                        if (window.starVelocity.z <= iniStarZvelocity) {
                            window.starColor = 'white'; }}, warpDuration + starResetDelay);
                    window.starVelocity.z += .0045; // boost velocity
                    setTimeout(() => { // slow velocity
                        window.starVelocity.z = Math.max(iniStarZvelocity, window.starVelocity.z - .0025);
                    }, hiWarpDuration);
                    setTimeout(() => { // slow velocity to original
                        window.starVelocity.z = Math.max(iniStarZvelocity, window.starVelocity.z - .002);
                    }, warpDuration);

                    // Color/animate logo
                    const kudoAIlogo = document.querySelector('#kudoai a'),
                          kudo = document.querySelector('.kudo');
                    kudoAIlogo.style.color = sectionColor;
                    kudo.classList.add('hover'); // trigger slide animation
                    setTimeout(() => { // schedule color/animation reset
                        if (window.starVelocity.z <= iniStarZvelocity) {
                            kudoAIlogo.style.color = 'white';
                            kudo.classList.remove('hover');
                    }}, warpDuration + 5);

                    // Color scrollbar
                    const scrollbarStyle = document.querySelector('#scrollbar-style') || // select div
                                           document.createElement('style'); // ...or create it
                    if (!scrollbarStyle.parentElement) { // append created div if not in DOM
                        scrollbarStyle.setAttribute('id', 'scrollbar-style');
                        document.head.append(scrollbarStyle);
                    }
                    scrollbarStyle.innerText = (
                        `:root { scrollbar-color: ${ sectionColor } #1a1a1a }`
                      + `body::-webkit-scrollbar-thumb { background-color: ${ sectionColor } }`);
                    setTimeout(() => { // schedule color reset
                        if (window.starVelocity.z <= iniStarZvelocity) {
                            scrollbarStyle.innerText = (
                                ':root { scrollbar-color: rgb(210,210,210) #1a1a1a }'
                              + 'body::-webkit-scrollbar-thumb { background-color: white }');
                    }}, warpDuration + 5);

                }
            });

            // Update LANGUAGE SELECTOR word
            setTimeout(() => {
                const activeLanguage = document.querySelector('.active').innerText;
                document.getElementById('dropdown-button').innerText = activeLanguage;
            }, 250);

            // Convert OpenAI showcase icons + sidebar logo to dark-mode
            document.querySelectorAll('picture').forEach(picture => {
                const srcElement = picture.querySelector('source'),
                      srcSet = srcElement.getAttribute('srcset'),
                      imgElement = document.createElement('img');
                imgElement.setAttribute('src', srcSet);
                picture.parentNode.replaceChild(imgElement, picture);
            });

            // Append EMAIL SIGNUP footer
            const partnersCollage = document.getElementById('partners-collage'), // to insert after
                  emailFooter = document.createElement('div');
            fetch('assets/html/footer.html')
                .then(response => response.text()).then(html => {
                    emailFooter.innerHTML = html;
                    partnersCollage.insertAdjacentElement('afterend', emailFooter);
                });

            // Remove readme's BACK-TO-TOP link
            const readmeBTTlink = document.querySelector('p a[href="#"]');
            readmeBTTlink.previousSibling.remove(); readmeBTTlink.remove();

            setTimeout(() => { // Add PARALLAX

                // Target TRIGGERS
                const parallaxTriggers = [];
                document.querySelectorAll('#main, h2:not([id="about"])').forEach(trigger => {
                    const y = trigger.getBoundingClientRect().top - window.innerHeight / 1.2;
                    const triggerElem = trigger.tagName === 'H2' ? trigger.parentElement : trigger;
                    parallaxTriggers.push({ element: triggerElem, y });
                });

                // Add SCROLL listener
                window.addEventListener('scroll', () => {
                    updateTGvisibility();
                    parallaxTriggers.forEach(trigger => {
                        if (window.scrollY >= trigger.y && window.scrollY < trigger.y + window.innerHeight) {

                            // Target previous elements to hack
                            const prevElems = [];
                            if (trigger.element.id === 'main')
                                prevElems.push(document.querySelector('.cover-main'));
                            else { // target previous 6 siblings
                                let currentElem = trigger.element.previousElementSibling;
                                for (let i = 0; i < 7; i++) {
                                    if (currentElem) {
                                        prevElems.push(currentElem);
                                        currentElem = currentElem.previousElementSibling;
                                    } else break;
                                }
                            }

                            // Apply transparency + translate to siblings
                            prevElems.forEach(elem => {
                                const topGap = trigger.y - window.scrollY,
                                      newOpacity = 1 - Math.abs(topGap) / ( window.innerHeight - 5),
                                      parallaxOffset = topGap * -0.55,
                                      scaleDelay = 285, // px from trigger.y to delay scaling
                                      scaleFactor = topGap > -scaleDelay ? 1
                                                  : 1 - Math.abs(topGap + scaleDelay) / 5 / window.innerHeight;
                                try { elem.classList.remove('content-fadeup'); } catch (err) {}
                                elem.style.opacity = newOpacity;
                                elem.style.transform = `translateY(${ parallaxOffset }px) scale(${ scaleFactor })`;
                            });

            }});});}, 100);
        });

    // Hide SITE LANG SELECTOR from NON-HOME pages
    } else document.querySelector('.app-nav').style.display = 'none';

    // Hack LICENSE/SECURIY pages
    if (/LICENSE|SECURITY/.test(location.hash)) {

        // Hide SIDEBAR
        if (!isMobileDevice()) document.body.className = 'ready close';

        // Correct DOC LANG SELECTOR links
        mdLoaded.then(() => {
            const docLangSelector = document.querySelectorAll('h5 a');
            for (const lang of docLangSelector)
                lang.href = lang.href.replace(/(.*\/\/.*?\/)((\w{2}(-\w{2})?\/)?.*)\.md/, '$1#/$2');
        });
    }

    // DISCONNECT observer
    onLoadObserver.disconnect();

});

// Define FUNCTIONS

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); }

function validateIntArg(arg, name, defaultVal) {
    if (arg === undefined) return defaultVal; // no validation required
    if (!Number.isInteger(arg) && !/^\d+$/.test(arg))
        throw new Error(name + ' must be an integer.');
    return parseInt(arg, 10); 
}

function smoothScroll(target, speed, smooth) {

    // Init target
    if (target === document)
        target = (document.scrollingElement 
              || document.documentElement 
              || document.body.parentNode 
              || document.body); // cross browser support for document scrolling

    // Init variables
    let moving = false, pos = target.scrollTop;
    const frame = target === document.body && document.documentElement 
                      ? document.documentElement 
                      : target; // safari
    // Add listeners
    target.addEventListener('mousewheel', scrolled, { passive: false });
    target.addEventListener('DOMMouseScroll', scrolled, { passive: false });

    function scrolled(e) {
        e.preventDefault(); // disable default scrolling
        const delta = normalizeWheelDelta(e);
        pos += -delta * speed;
        pos = ( // limit scrolling
            Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)));
        if (!moving) update();
    }

    function normalizeWheelDelta(e) {
        if (e.detail) {
            if (e.wheelDelta)
                return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1); // Opera
            else return -e.detail/3; // Firefox
        } else return e.wheelDelta/120; // IE/Safari/Chrome
    }

    function update() {
        moving = true;    
        const delta = (pos - target.scrollTop) / smooth;    
        target.scrollTop += delta;
        if (Math.abs(delta) > 0.5) requestFrame(update);
        else moving = false;
    }

    const requestFrame = function() { // requestAnimationFrame cross browser
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(func) { window.setTimeout(func, 1000 / 50); }
        );
    }();
}

function scrambleText(text, destination, delayBetweenWords, textIdx = 0) {

    // Validate args
    if (typeof text === 'string') text = [text]; // array of strings to scramble
    if (!destination?.nodeName) // DOM element to scramble to
        throw new Error('Destination (2nd arg) must be a DOM element');
    if (delayBetweenWords) { // ms to delay between scrambles
        if (!Number.isInteger(delayBetweenWords) && !/^\d+$/.test(delayBetweenWords))
            throw new Error('Delay betweeen words (3nd arg) must be an integer (ms)');
        delayBetweenWords = parseInt(delayBetweenWords, 10);
    }

    // Scramble text
    const textToScramble = new Scramble(destination);
    textToScramble.setText(text[textIdx])
        .then(() => { if (delayBetweenWords && visibilityMap['cover-main']) {
            scrambleText.timeoutID = setTimeout(() => {
                scrambleText(text, destination, delayBetweenWords, (textIdx + 1) % text.length); },
            delayBetweenWords);
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

// Add listeners to language selector
const languageMenu = document.getElementById('language-menu'),
      languageSelector = document.getElementById('language-selector');
languageMenu.style.display = 'none'; // hide on page load
let hideTimeout; // to account for gap between button & menu
languageSelector.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout); languageMenu.style.display = 'block'; });
languageSelector.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => { languageMenu.style.display = 'none'; }, 55); });
languageMenu.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout); languageMenu.style.display = 'block'; });
languageMenu.addEventListener('mouseleave', () => {
    clearTimeout(hideTimeout); hideTimeout = setTimeout(() => {
        languageMenu.style.display = 'none'; }, 55);
});
document.querySelectorAll('#language-selector a').forEach((link) => { // add listener to hide tooltips
    link.addEventListener('mouseenter', () => { link.removeAttribute('title'); });});
document.querySelectorAll('.dropdown-link').forEach((link) => { // add listener to dismisss menu
    link.addEventListener('click', () => { languageMenu.style.display = 'none'; });});

// Observe for load + re-connect on nav to new hash
onLoadObserver.observe(document.body, { childList: true, subtree: true });
let fromUnhashedURL = window.location.href.includes('#');
window.addEventListener('hashchange', () => {
    if (!fromUnhashedURL) fromUnhashedURL = true;
    else if (fromUnhashedURL)
        onLoadObserver.observe(document.body, { childList: true, subtree: true });
});
