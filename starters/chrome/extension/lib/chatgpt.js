// (c) 2023 KudoAI & contributors under the MIT license
// Source: https://github.com/kudoai/chatgpt.js
// Latest minified release: https://code.chatgptjs.org/chatgpt-latest-min.js

// Init endpoints
const endpoints = {
    assets: 'https://raw.githubusercontent.com/KudoAI/chatgpt.js/main',
    openAI: {
        session: 'https://chat.openai.com/api/auth/session',
        chats: 'https://chat.openai.com/backend-api/conversations',
        chat: 'https://chat.openai.com/backend-api/conversation',
        share_create: 'https://chat.openai.com/backend-api/share/create',
        share: 'https://chat.openai.com/backend-api/share',
        instructions: 'https://chat.openai.com/backend-api/user_system_messages'
    }
};

// Init feedback properties
localStorage.alertQueue = JSON.stringify([]);
localStorage.notifyProps = JSON.stringify({
    queue: { topRight: [], bottomRight: [], bottomLeft: [], topLeft: [] },
    lastNthAudio: 0 // to prevent immediate repetition of base sound
});

// Init environment flags & functions
const isChromeUserScript = navigator.userAgent.includes('Chrome') && typeof unsafeWindow != 'undefined',
      isFFuserScript = navigator.userAgent.includes('Firefox') && typeof unsafeWindow != 'undefined',
      isFFtmScript = isFFuserScript && GM_info.scriptHandler == 'Tampermonkey';

// Define messages
let cjsMessages;
if (!isChromeUserScript && !(isFFuserScript && !isFFtmScript)) { (async () => {
    const cjsMsgsLoaded = new Promise(resolve => {
        const userLanguage = navigator.languages[0] || navigator.language || navigator.browserLanguage ||
                             navigator.systemLanguage || navigator.userLanguage || '',
              msgHostDir = endpoints.assets + '/data/_locales/',
              msgLocaleDir = ( userLanguage ? userLanguage.replace('-', '_') : 'en' ) + '/';
        let msgHref = msgHostDir + msgLocaleDir + 'messages.json', msgXHRtries = 0;
        (function loadMsgs() {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', msgHref); xhr.send();
            xhr.onload = () => {
                try { // to return localized messages.json
                    const messages = new Proxy(JSON.parse(xhr.responseText), {
                        get(target, prop) { // remove need to ref nested keys
                            if (typeof target[prop] == 'object' && target[prop] !== null && 'message' in target[prop]) {
                                return target[prop].message;
                    }}}); resolve(messages);
                } catch (err) {
                    msgXHRtries++; if (msgXHRtries === 3) resolve({}); // try up to 3X (original/region-stripped/EN) only
                    msgHref = userLanguage.includes('-') && msgXHRtries === 1 ? // if regional lang on 1st try...
                        msgHref.replace(/(.*)_.*(\/.*)/, '$1$2') // ...strip region before retrying
                            : ( msgHostDir + 'en/messages.json' ); // else use default English messages
                    loadMsgs();
                }
            };
            xhr.onerror = () => { resolve({}); };
        })();
    }); cjsMessages = await cjsMsgsLoaded;
})();}

// Define chatgpt.methods
const chatgpt = {
    openAIaccessToken: {},

    actAs: function(persona) {
    // Prompts ChatGPT to act as a persona from https://github.com/KudoAI/chat-prompts/blob/main/personas.json

        const promptsUrl = 'https://raw.githubusercontent.com/KudoAI/chat-prompts/main/dist/personas.min.json';
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', promptsUrl, true); xhr.send();
            xhr.onload = () => {
                if (xhr.status !== 200) return reject('🤖 chatgpt.js >> Request failed. Cannot retrieve prompts data.');
                const data = JSON.parse(xhr.responseText).personas;
                if (!persona) {
                    console.log('\n%c🤖 chatgpt.js personas\n',
                        'font-family: sans-serif ; font-size: xxx-large ; font-weight: bold');
                    for (const prompt of data) // list personas
                        console.log(`%c${ prompt.title }`, 'font-family: monospace ; font-size: larger ;');
                    return resolve();
                }
                const selectedPrompt = data.find(obj => obj.title.toLowerCase() == persona.toLowerCase());
                if (!selectedPrompt)
                    return reject(`🤖 chatgpt.js >> Persona '${ persona }' was not found!`);
                chatgpt.send(selectedPrompt.prompt, 'click');
                console.info(`Loading ${ persona } persona...`);
                chatgpt.isIdle().then(() => { console.info('Persona activated!'); });
                return resolve();
            };
        });
    },

    activateDarkMode: function() {
        document.documentElement.classList.replace('light', 'dark');
        document.documentElement.style.colorScheme = 'dark';
        localStorage.setItem('theme', 'dark');
    },

    activateLightMode: function() {
        document.documentElement.classList.replace('dark', 'light');
        document.documentElement.style.colorScheme = 'light';
        localStorage.setItem('theme', 'light');
    },

    alert: function(title, msg, btns, checkbox, width) {
    // [ title/msg = strings, btns = [named functions], checkbox = named function, width (px) = int ] = optional
    // * Spaces are inserted into button labels by parsing function names in camel/kebab/snake case

        const scheme = chatgpt.isDarkMode() ? 'dark' : 'light',
              isMobile = chatgpt.browser.isMobile();

        // Create modal parent/children elements
        const modalContainer = document.createElement('div');
        modalContainer.id = Math.floor(chatgpt.randomFloat() * 1000000) + Date.now();
        modalContainer.classList.add('chatgpt-modal'); // add class to main div
        const modal = document.createElement('div'),
              modalTitle = document.createElement('h2'),
              modalMessage = document.createElement('p');

        // Create/append/update modal style (if missing or outdated)
        const thisUpdated = 20231203; // datestamp of last edit for this file's `modalStyle` 
        let modalStyle = document.querySelector('#chatgpt-modal-style'); // try to select existing style
        if (!modalStyle || parseInt(modalStyle.getAttribute('last-updated'), 10) < thisUpdated) { // if missing or outdated
            if (!modalStyle) { // outright missing, create/id/attr/append it first
                modalStyle = document.createElement('style'); modalStyle.id = 'chatgpt-modal-style';
                modalStyle.setAttribute('last-updated', thisUpdated.toString());
                document.head.append(modalStyle);
            }
            modalStyle.innerText = ( // update prev/new style contents

                // Background styles
                '.chatgpt-modal {' 
                    + 'position: fixed ; top: 0 ; left: 0 ; width: 100% ; height: 100% ;' // expand to full view-port
                    + 'background-color: rgba(67, 70, 72, 0) ;' // init dim bg but no opacity
                    + 'transition: background-color 0.05s ease ;' // speed to transition in show alert routine
                    + 'display: flex ; justify-content: center ; align-items: center ; z-index: 9999 }' // align

                // Alert styles
                + '.chatgpt-modal > div {'
                    + 'opacity: 0 ; transform: translateX(-2px) translateY(5px) ; max-width: 75vw ; word-wrap: break-word ;'
                    + 'transition: opacity 0.1s cubic-bezier(.165,.84,.44,1), transform 0.2s cubic-bezier(.165,.84,.44,1) ;'
                    + `background-color: ${ scheme == 'dark' ? 'black' : 'white' } ;`
                    + ( scheme != 'dark' ? 'border: 1px solid rgba(0, 0, 0, 0.3) ;' : '' )
                    + 'padding: 20px ; margin: 12px 23px ; border-radius: 15px ; box-shadow: 0 30px 60px rgba(0, 0, 0, .12) ;'
                    + ' -webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none ; }'
                + '.chatgpt-modal h2 { margin-bottom: 9px }'
                + `.chatgpt-modal a { color: ${ scheme == 'dark' ? '#00cfff' : '#1e9ebb' }}`
                + '.chatgpt-modal.animated > div { opacity: 1 ; transform: translateX(0) translateY(0) }'
                + '@keyframes alert-zoom-fade-out { 0% { opacity: 1 ; transform: scale(1) }'
                    + '50% { opacity: 0.25 ; transform: scale(1.05) }'
                    + '100% { opacity: 0 ; transform: scale(1.35) }}'

                // Button styles
                + '.modal-buttons { display: flex ; justify-content: flex-end ; margin: 20px -5px -3px 0 ;'
                    + ( isMobile ? 'flex-direction: column-reverse' : '' ) + '}'
                + '.chatgpt-modal button {'
                    + `margin-left: ${ isMobile ? 0 : 10}px ; padding: ${ isMobile ? 15 : 4}px 18px ; border-radius: 15px ;`
                    + ( isMobile ? 'margin-top: 5px ; margin-bottom: 3px ;' : '')
                    + `border: 1px solid ${ scheme == 'dark' ? 'white' : 'black' }}`
                + '.primary-modal-btn {'
                    + `border: 1px solid ${ scheme == 'dark' ? 'white' : 'black' } ;`
                    + `background: ${ scheme == 'dark' ? 'white' : 'black' } ;`
                    + `color: ${ scheme == 'dark' ? 'black' : 'white' }}`
                + '.chatgpt-modal button:hover { color: #3d5d71 ; border-color: #6d9cb9 ;'
                    + 'background-color: ' + ( scheme == 'dark' ? '#00cfff' : '#9cdaff' ) + ';'
                    + 'box-shadow: 2px 1px ' + ( scheme == 'dark' ? '54px #00cfff' : '30px #9cdaff' ) + '}'
                + '.modal-close-btn {'
                    + 'cursor: pointer ; width: 20px ; height: 20px ; float: right ; position: relative ; right: -2px }'
                + '.modal-close-btn svg { margin: 5px 5px }' // center SVG for hover overlay
                + `.modal-close-btn:hover { background-color: #f2f2f2${ scheme == 'dark' ? '00' : '' }}`

                // Checkbox styles
                + '.chatgpt-modal .checkbox-group { display: flex ; margin-top: -18px }'
                + '.chatgpt-modal .checkbox-group label {'
                    + 'font-size: .7rem ; margin: -.04rem 0 0px .3rem ;'
                    + `color: ${ scheme == 'dark' ? '#e1e1e1' : '#1e1e1e' }}`
                + '.chatgpt-modal input[type="checkbox"] { transform: scale(0.7) ;'
                    + `border: 1px solid ${ scheme == 'dark' ? 'white' : 'black' }}`
                + '.chatgpt-modal input[type="checkbox"]:checked {'
                    + `border: 1px solid ${ scheme == 'dark' ? 'white' : 'black' } ;`
                    + 'background-color: black ; position: inherit }'
                + '.chatgpt-modal input[type="checkbox"]:focus { outline: none ; box-shadow: none }'
            );            
        }

        // Insert text into elements
        modalTitle.innerText = title || '';
        modalMessage.innerText = msg || ''; this.renderHTML(modalMessage);

        // Create/append buttons (if provided) to buttons div
        const modalButtons = document.createElement('div');
        modalButtons.classList.add('modal-buttons');
        if (btns) { // are supplied
            if (!Array.isArray(btns)) btns = [btns]; // convert single button to array if necessary
            btns.forEach((buttonFn) => { // create title-cased labels + attach listeners
                const button = document.createElement('button');
                button.textContent = buttonFn.name
                    .replace(/[_-]\w/g, match => match.slice(1).toUpperCase()) // convert snake/kebab to camel case
                    .replace(/([A-Z])/g, ' $1') // insert spaces
                    .replace(/^\w/, firstChar => firstChar.toUpperCase()); // capitalize first letter
                button.addEventListener('click', () => { dismissAlert(); buttonFn(); });
                modalButtons.insertBefore(button, modalButtons.firstChild); // insert button to left
            });
        }

        // Create/append OK/dismiss button to buttons div
        const dismissBtn = document.createElement('button');
        dismissBtn.textContent = btns ? 'Dismiss' : 'OK';
        modalButtons.insertBefore(dismissBtn, modalButtons.firstChild);

        // Highlight primary button
        modalButtons.lastChild.classList.add('primary-modal-btn');

        // Create/append checkbox (if provided) to checkbox group div
        const checkboxDiv = document.createElement('div');
        if (checkbox) { // is supplied
            checkboxDiv.classList.add('checkbox-group');
            const checkboxFn = checkbox, // assign the named function to checkboxFn
                  checkboxInput = document.createElement('input');
            checkboxInput.type = 'checkbox';
            checkboxInput.addEventListener('change', checkboxFn);

            // Create/show label
            const checkboxLabel = document.createElement('label');
            checkboxLabel.addEventListener('click', () => {
                checkboxInput.checked = !checkboxInput.checked; checkboxFn(); });
            checkboxLabel.textContent = checkboxFn.name.charAt(0).toUpperCase() // capitalize first char
                + checkboxFn.name.slice(1) // format remaining chars
                    .replace(/([A-Z])/g, (match, letter) => ' ' + letter.toLowerCase()) // insert spaces, convert to lowercase
                    .replace(/\b(\w+)nt\b/gi, '$1n\'t') // insert apostrophe in 'nt' suffixes
                    .trim(); // trim leading/trailing spaces

            checkboxDiv.append(checkboxInput); checkboxDiv.append(checkboxLabel);
        }

        // Create close button
        const closeBtn = document.createElement('div');
        closeBtn.title = cjsMessages?.tooltip_close || 'Close'; closeBtn.classList.add('modal-close-btn');
        const closeSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        closeSVG.setAttribute('height', '10px');
        closeSVG.setAttribute('viewBox', '0 0 14 14');
        closeSVG.setAttribute('fill', 'none');
        const closeSVGpath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        closeSVGpath.setAttribute('fill-rule', 'evenodd');
        closeSVGpath.setAttribute('clip-rule', 'evenodd');
        closeSVGpath.setAttribute('fill', chatgpt.isDarkMode() ? 'white' : 'black');
        closeSVGpath.setAttribute('d', 'M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976312 12.6834 -0.0976312 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976312 0.683417 -0.0976312 0.292893 0.292893C-0.0976312 0.683417 -0.0976312 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976312 12.6834 -0.0976312 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z');
        closeSVG.append(closeSVGpath); closeBtn.append(closeSVG);

        // Assemble/append div
        const modalElems = [closeBtn, modalTitle, modalMessage, modalButtons, checkboxDiv];
        modalElems.forEach((elem) => { modal.append(elem); });
        modal.style.width = `${ width || 458 }px`;
        modalContainer.append(modal); document.body.append(modalContainer); 

        // Enqueue alert
        let alertQueue = JSON.parse(localStorage.alertQueue);
        alertQueue.push(modalContainer.id);
        localStorage.alertQueue = JSON.stringify(alertQueue);

        // Show alert if none active
        modalContainer.style.display = 'none';
        if (alertQueue.length === 1) {
            modalContainer.style.display = '';
            setTimeout(() => { // delay non-0 opacity's for transition fx
                modalContainer.style.backgroundColor = ( 
                    `rgba(67, 70, 72, ${ scheme === 'dark' ? 0.62 : 0 })`);
                modalContainer.classList.add('animated'); }, 100);
        }

        // Define click/key handlers
        const clickHandler = event => { // explicitly defined to support removal post-dismissal
            if (event.target == event.currentTarget || event.target instanceof SVGPathElement) dismissAlert(); };
        const keyHandler = event => { // to dismiss active alert
            const dismissKeys = [13, 27]; // enter/esc
            if (dismissKeys.includes(event.keyCode)) {
                for (const alertId of alertQueue) { // look to handle only if triggering alert is active
                    const alert = document.getElementById(alertId);
                    if (alert && alert.style.display !== 'none') { // active alert found
                        if (event.keyCode === 27) dismissAlert(); // if esc pressed, dismiss alert & do nothing
                        else if (event.keyCode === 13) { // else if enter pressed
                            const mainButton = alert.querySelector('.modal-buttons').lastChild; // look for main button
                            if (mainButton) { mainButton.click(); event.preventDefault(); } // click if found
                        } return;
        }}}};

        // Add listeners to dismiss alert
        const dismissElems = [modalContainer, closeBtn, closeSVG, dismissBtn];
        dismissElems.forEach(elem => {
            elem.addEventListener('click', clickHandler); });
        document.addEventListener('keydown', keyHandler);

        // Define alert dismisser
        const dismissAlert = () => {
            modalContainer.style.backgroundColor = 'transparent';
            modal.style.animation = 'alert-zoom-fade-out 0.075s ease-out';
            setTimeout(() => { // delay removal for fade-out

                // Remove alert
                modalContainer.remove(); // ...from DOM
                alertQueue = JSON.parse(localStorage.alertQueue);
                alertQueue.shift(); // + memory
                localStorage.alertQueue = JSON.stringify(alertQueue); // + storage

                // Remove all listeners to prevent memory leaks
                dismissElems.forEach(elem => { elem.removeEventListener('click', clickHandler); });
                document.removeEventListener('keydown', keyHandler);

                // Check for pending alerts in queue
                if (alertQueue.length > 0) {
                    const nextAlert = document.getElementById(alertQueue[0]);
                    setTimeout(() => {
                        nextAlert.style.display = '';
                        setTimeout(() => { nextAlert.classList.add('animated'); }, 100);
                    }, 500);
                }

            }, 50);
        };

        return modalContainer.id; // if assignment used
    },

    askAndGetReply: async function(query) {
        chatgpt.send(query); await chatgpt.isIdle();
        return chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest');
    },

    autoRefresh: {
        activate: function(interval) {
            if (this.isActive) { // already running, do nothing
                console.log('↻ ChatGPT >> [' + chatgpt.autoRefresh.nowTimeStamp() + '] Auto refresh already active!'); return; }

            const autoRefresh = this;

            // Run main activate routine
            this.toggle.refreshFrame();
            const scheduleRefreshes = interval => {
                const randomDelay = Math.max(2, Math.floor(chatgpt.randomFloat() * 21 - 10)); // set random delay up to ±10 secs
                autoRefresh.isActive = setTimeout(() => {
                    const manifestScript = document.querySelector('script[src*="_ssgManifest.js"]');
                    document.querySelector('#refresh-frame').src = manifestScript.src + '?' + Date.now();
                    console.log('↻ ChatGPT >> [' + autoRefresh.nowTimeStamp() + '] ChatGPT session refreshed');
                    scheduleRefreshes(interval);
                }, (interval + randomDelay) * 1000);
            };
            scheduleRefreshes( interval ? parseInt(interval, 10) : 30 );
            console.log('↻ ChatGPT >> [' + chatgpt.autoRefresh.nowTimeStamp() + '] Auto refresh activated');

            // Add listener to send beacons in Chromium to thwart auto-discards if Page Visibility API supported
            if (navigator.userAgent.includes('Chrome') && typeof document.hidden !== 'undefined') {
                document.addEventListener('visibilitychange', this.toggle.beacons); }
        },

        deactivate: function() {
            if (this.isActive) {
                this.toggle.refreshFrame();
                document.removeEventListener('visibilitychange', this.toggle.beacons);
                clearTimeout(this.isActive); this.isActive = null;
                console.log('↻ ChatGPT >> [' + chatgpt.autoRefresh.nowTimeStamp() + '] Auto refresh de-activated');
            } else { console.log('↻ ChatGPT >> [' + chatgpt.autoRefresh.nowTimeStamp() + '] Auto refresh already inactive!'); }
        },

        nowTimeStamp: function() {
            const now = new Date();
            const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
            let minutes = now.getMinutes(), seconds = now.getSeconds();
            if (minutes < 10) minutes = '0' + minutes; if (seconds < 10) seconds = '0' + seconds;
            const meridiem = now.getHours() < 12 ? 'AM' : 'PM';
            return hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
        },

        toggle: {

            beacons: function() {
                if (chatgpt.autoRefresh.beaconID) {
                    clearInterval(chatgpt.autoRefresh.beaconID); chatgpt.autoRefresh.beaconID = null;
                    console.log('↻ ChatGPT >> [' + chatgpt.autoRefresh.nowTimeStamp() + '] Beacons de-activated');
                } else {
                    chatgpt.autoRefresh.beaconID = setInterval(() => {
                        navigator.sendBeacon('https://httpbin.org/post', new Uint8Array());
                        console.log('↻ ChatGPT >> [' + chatgpt.autoRefresh.nowTimeStamp() + '] Beacon sent');
                    }, 90000);
                    console.log('↻ ChatGPT >> [' + chatgpt.autoRefresh.nowTimeStamp() + '] Beacons activated');
                }
            },

            refreshFrame: function() {
                let refreshFrame = document.querySelector('#refresh-frame');
                if (refreshFrame) refreshFrame.remove();
                else {
                    refreshFrame = Object.assign(document.createElement('iframe'),
                        { id: 'refresh-frame', style: 'display: none' });
                    document.head.prepend(refreshFrame);
                }
            }
        }
    },

    browser: {

        isLightMode: function() { return window.matchMedia?.('(prefers-color-scheme: light)')?.matches; },
        isDarkMode: function() { return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches; },
        isChromium: function() { return navigator.userAgent.includes('Chrome'); },
        isFirefox: function() { return navigator.userAgent.includes('Firefox'); },

        isFullScreen: function() {
            const userAgentStr = navigator.userAgent;
            return userAgentStr.includes('Chrome') ? window.matchMedia('(display-mode: fullscreen)').matches
                 : userAgentStr.includes('Firefox') ? window.fullScreen
                 : /MSIE|rv:/.test(userAgentStr) ? document.msFullscreenElement : document.webkitIsFullScreen;
        },

        isMobile: function() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); }
    },

    clearChats: async function(method) {

        // Validate method arg
        const validMethods = ['api', 'dom'];
        method = (method || 'dom').trim().toLowerCase(); // set to 'dom' by default
        if (method && !validMethods.includes(method))
            return console.log(`Method argument must be one of: [${ validMethods }]`);

        if (method == 'dom') {
            try { await chatgpt.getChatData(); } catch { return; } // check if chat history exists
            chatgpt.menu.open();
            setTimeout(() => {
                const menuItems = document.querySelectorAll('a[role="menuitem"]') || [];
                for (const menuItem of menuItems)
                    if (/settings/i.test(menuItem.text)) { menuItem.click(); break; }
                setTimeout(() => { // clear chats
                    const settingsBtns = document.querySelectorAll('[id*=radix] button');
                    for (const settingsBtn of settingsBtns)
                        if (/^clear/i.test(settingsBtn.textContent)) { settingsBtn.click(); break; }
                    setTimeout(() => { // confirm clear
                        document.querySelector('[id*=radix] button').click();
                        setTimeout(() => {
                            exitMenu();
                            try { document.querySelector('#prompt-textarea').focus(); } catch (err) {}
                        }, 10);
            }, 10); }, 333); }, 10);
            const exitMenu = () => { document.querySelector('div[id*=radix] button').click(); };

        } else { // API method
        // NOTE: DOM is not updated to reflect new empty chat list (until session refresh)

            return new Promise((resolve, reject) => {
                chatgpt.getAccessToken().then(token => {
                    const xhr = new XMLHttpRequest();
                    xhr.open('PATCH', endpoints.openAI.chats, true);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                    xhr.onload = () => {
                        if (xhr.status !== 200) return reject('🤖 chatgpt.js >> Request failed. Cannot clear chats.');
                        console.info('Chats successfully cleared'); resolve();
                    };
                    xhr.send(JSON.stringify({ is_visible: false }));
                }).catch(reject);
            });
        }
    },

    code: {
    // Tip: Use template literals for easier passing of code arguments. Ensure backticks and `$`s are escaped (using `\`)

        execute: async function(code) {
            if (!code) return console.error('Code argument not supplied. Pass some code!');
            if (typeof code !== 'string') return console.error('Code argument must be a string!');
            chatgpt.send('Display the output as if you were terminal:\n\n' + code);
            console.info('Executing code...');
            await chatgpt.isIdle();
            return chatgpt.code.extract(await chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest'));
        },

        extract: function(msg) { // extract pure code from response (targets last block)
            const codeBlocks = msg.match(/(?<=```.*\n)[\s\S]*?(?=```)/g);
            return codeBlocks ? codeBlocks[codeBlocks.length - 1] : msg;
        },

        minify: async function(code) {
            if (!code) return console.error('Code argument not supplied. Pass some code!');
            if (typeof code !== 'string') return console.error('Code argument must be a string!');
            chatgpt.send('Minify the following code:\n\n' + code);
            console.info('Minifying code...');
            await chatgpt.isIdle();
            return chatgpt.code.extract(await chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest'));
        },

        obfuscate: async function(code) {
            if (!code) return console.error('Code argument not supplied. Pass some code!');
            if (typeof code !== 'string') return console.error('Code argument must be a string!');
            chatgpt.send('Obfuscate the following code:\n\n' + code);
            console.info('Obfuscating code...');
            await chatgpt.isIdle();
            return chatgpt.code.extract(await chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest'));
        },

        refactor: async function(code, objective) {
            if (!code) return console.error('Code (1st) argument not supplied. Pass some code!');
            for (let i = 0; i < arguments.length; i++) if (typeof arguments[i] !== 'string')
                return console.error(`Argument ${ i + 1 } must be a string.`);
            chatgpt.send('Refactor the following code for ' + (objective || 'brevity') + ':\n\n' + code);
            console.info('Refactoring code...');
            await chatgpt.isIdle();
            return chatgpt.code.extract(await chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest'));
        },

        review: async function(code) {
            if (!code) return console.error('Code argument not supplied. Pass some code!');
            if (typeof code !== 'string') return console.error('Code argument must be a string!');
            chatgpt.send('Review the following code for me:\n\n' + code);
            console.info('Reviewing code...');
            await chatgpt.isIdle();
            return chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest');
        },

        unminify: async function(code) {
            if (!code) return console.error('Code argument not supplied. Pass some code!');
            if (typeof code !== 'string') return console.error('Code argument must be a string!');
            chatgpt.send('Unminify the following code.:\n\n' + code);
            console.info('Unminifying code...');
            await chatgpt.isIdle();
            return chatgpt.code.extract(await chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest'));
        },

        write: async function(prompt, outputLang) {
            if (!prompt) return console.error('Prompt (1st) argument not supplied. Pass a prompt!');
            if (!outputLang) return console.error('outputLang (2nd) argument not supplied. Pass a language!');
            for (let i = 0; i < arguments.length; i++) if (typeof arguments[i] !== 'string')
                return console.error(`Argument ${ i + 1 } must be a string.`);
            chatgpt.send(prompt + '\n\nWrite this as code in ' + outputLang);
            console.info('Writing code...');
            await chatgpt.isIdle();
            return chatgpt.code.extract(await chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest'));
        }
    },

    detectLanguage: async function(text) {
        if (!text) return console.error('Text argument not supplied. Pass some text!');
        if (typeof text !== 'string') return console.error('Text argument must be a string!');
        chatgpt.send('Detect the language of the following text:\n\n' + text
            + '\n\nOnly respond with the name of the language');
        console.info('Reviewing text...');
        await chatgpt.isIdle();
        return chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest');
    },

    executeCode: function() { chatgpt.code.execute(); },

    exportChat: async function(chatToGet, format) {
    // chatToGet = 'active' (default) | 'latest' | index|title|id of chat to get
    // format = 'html' (default) | 'md' | 'pdf' | 'text'

        // Init args
        chatToGet = !chatToGet ? 'active' // default to 'active' if unpassed
                  : Number.isInteger(chatToGet) || /^\d+$/.test(chatToGet) ? // else if string/int num passed
                      parseInt(chatToGet, 10) // parse as integer
                  : chatToGet; // else preserve non-num string as 'active', 'latest' or title/id of chat to get
        format = format.toLowerCase() || 'html'; // default to 'html' if unpassed

        // Create transcript + filename
        console.info('Generating transcript...');
        let transcript = '', filename;
        if (/te?xt/.test(format)) { // generate plain transcript + filename for TXT export

            // Format filename using date/time
            const now = new Date(),
                  day = now.getDate().toString().padStart(2, '0'),
                  month = (now.getMonth() + 1).toString().padStart(2, '0'),
                  year = now.getFullYear(),
                  hour = now.getHours().toString().padStart(2, '0'),
                  minute = now.getMinutes().toString().padStart(2, '0');
            filename = `ChatGPT_${ day }-${ month }-${ year }_${ hour }-${ minute }.txt`;

            // Create transcript from active chat
            if (chatToGet == 'active' && /\/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/.test(window.location.href)) {
                const chatDivs = document.querySelectorAll('main > div > div > div > div > div > div[class*=group]');
                if (chatDivs.length === 0) return console.error('Chat is empty!');
                const msgs = []; let isUserMsg = true;
                chatDivs.forEach((div) => {
                    const sender = isUserMsg ? 'USER' : 'CHATGPT'; isUserMsg = !isUserMsg;
                    let msg = Array.from(div.childNodes).map(node => node.innerText)
                        .join('\n\n') // insert double line breaks between paragraphs
                        .replace('Copy code', '');
                    msgs.push(sender + ': ' + msg);
                });
                transcript = msgs.join('\n\n');                     

            // ...or from getChatData(chatToGet)
            } else {
                for (const entry of await chatgpt.getChatData(chatToGet, 'msg', 'both', 'all')) {
                    transcript += `USER: ${ entry.user }\n\n`;
                    transcript += `CHATGPT: ${ entry.chatgpt }\n\n`;
            }}

        } else { // generate rich transcript + filename for HTML/MD/PDF export

            // Fetch HTML transcript from OpenAI
            const response = await fetch(await chatgpt.shareChat(chatToGet)),
                  htmlContent = await response.text();

            // Format filename after <title>
            const parser = new DOMParser(),
                  parsedHtml = parser.parseFromString(htmlContent, 'text/html');
            filename = parsedHtml.querySelector('title').textContent + '.html';

            // Convert relative CSS paths to absolute ones
            const cssLinks = parsedHtml.querySelectorAll('link[rel="stylesheet"]');
            cssLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href?.startsWith('/')) link.setAttribute('href', 'https://chat.openai.com' + href);
            });

            // Serialize updated HTML to string
            transcript = new XMLSerializer().serializeToString(parsedHtml);
        }

        // Export transcript
        console.info(`Exporting transcript as ${ format.toUpperCase() }...`);
        if (format == 'pdf') { // convert SVGs + launch PDF printer

            // Convert SVG icons to data URLs for proper PDF rendering
            transcript = transcript.replace(/<svg.*?<\/svg>/g, (match) => {
                const dataURL = 'data:image/svg+xml,' + encodeURIComponent(match);
                return `<img src="${ dataURL }">`;
            });

            // Launch PDF printer
            const transcriptPopup = window.open('', '', 'toolbar=0, location=0, menubar=0, height=600, width=800');
            transcriptPopup.document.write(transcript);
            setTimeout(() => { transcriptPopup.print({ toPDF: true }); }, 100);

        } else { // auto-save to file

            if (format == 'md') { // remove extraneous HTML + fix file extension
                const mdMatch = /<!?.*(<h1(.|\n)*?href=".*?continue.*?".*?\/a>.*?)<[^/]/.exec(transcript)[1];
                transcript = mdMatch || transcript; filename = filename.replace('.html', '.md');
            }
            const blob = new Blob([transcript],
                { type: 'text/' + ( format == 'html' ? 'html' : format == 'md' ? 'markdown' : 'plain' )});
            const link = document.createElement('a'), blobURL = URL.createObjectURL(blob);
            link.href = blobURL; link.download = filename; document.body.append(link);
            link.click(); document.body.removeChild(link); URL.revokeObjectURL(blobURL);
        }
    },

    extractCode: function() { chatgpt.code.extract(); },

    generateRandomIP: function() {
        const ip = Array.from({length: 4}, () => Math.floor(chatgpt.randomFloat() * 256)).join('.');
        console.info('IP generated: ' + ip);
        return ip;
    },

    get: function(targetType, targetName = '') {
    // targetType = 'button'|'link'|'div'|'response'
    // targetName = from get[targetName][targetType] methods, e.g. 'send'

        // Validate argument types to be string only
        if (typeof targetType !== 'string' || typeof targetName !== 'string') {
            throw new TypeError('Invalid arguments. Both arguments must be strings.'); }

        // Validate targetType
        if (!targetTypes.includes(targetType.toLowerCase())) {
            throw new Error('Invalid targetType: ' + targetType
                + '. Valid values are: ' + JSON.stringify(targetTypes)); }

        // Validate targetName scoped to pre-validated targetType
        const targetNames = [], reTargetName = new RegExp('^get(.*)' + targetType + '$', 'i');
        for (const prop in chatgpt) {
            if (typeof chatgpt[prop] == 'function' && reTargetName.test(prop)) {
                targetNames.push( // add found targetName to valid array
                    prop.replace(reTargetName, '$1').toLowerCase());
        }}
        if (!targetNames.includes(targetName.toLowerCase())) {
            throw new Error('Invalid targetName: ' + targetName + '. '
                + (targetNames.length > 0 ? 'Valid values are: ' + JSON.stringify(targetNames)
                    : 'targetType ' + targetType.toLowerCase() + ' does not require additional options.'));
        }

        // Call target function using pre-validated name components
        const targetFuncNameLower = ('get' + targetName + targetType).toLowerCase();
        const targetFuncName = Object.keys(this).find( // find originally cased target function name
            (name) => { return name.toLowerCase() == targetFuncNameLower; }); // test for match
        return this[targetFuncName](); // call found function
    },

    getAccessToken: function() {
        return new Promise((resolve, reject) => {
            if (Object.keys(chatgpt.openAIaccessToken).length > 0 && // populated
                    (Date.parse(chatgpt.openAIaccessToken.expireDate) - Date.parse(new Date()) >= 0)) // not expired
                return resolve(chatgpt.openAIaccessToken.token);
            const xhr = new XMLHttpRequest();
            xhr.open('GET', endpoints.openAI.session, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = () => {
                if (xhr.status !== 200) return reject('🤖 chatgpt.js >> Request failed. Cannot retrieve access token.');
                console.info('Token expiration: ' + new Date(JSON.parse(xhr.responseText).expires).toLocaleString().replace(',', ' at'));
                chatgpt.openAIaccessToken = {
                    token: JSON.parse(xhr.responseText).accessToken,
                    expireDate: JSON.parse(xhr.responseText).expires
                };
                return resolve(chatgpt.openAIaccessToken.token);
            };
            xhr.send();
        });
    },

    getAccountDetails: function(...details) {
    // details = [email|id|image|name|picture] = optional

        // Build details array
        const validDetails = [ 'email', 'id', 'image', 'name', 'picture' ];
        details = ( !arguments[0] ? validDetails // no details passed, populate w/ all valid ones
                : Array.isArray(arguments[0]) ? arguments[0] // details array passed, do nothing
                : Array.from(arguments) ); // details arg(s) passed, convert to array

        // Validate detail args
        for (const detail of details) {
            if (!validDetails.includes(detail)) { return console.error(
                'Invalid detail arg \'' + detail + '\' supplied. Valid details are:\n'
              + '                    [' + validDetails + ']'); }}

        // Return account details
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', endpoints.openAI.session, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = () => {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText).user, detailsToReturn = {};
                    for (const detail of details) detailsToReturn[detail] = data[detail];
                    return resolve(detailsToReturn);
                } else return reject('🤖 chatgpt.js >> Request failed. Cannot retrieve account details.');
            };
            xhr.send();
        });
    },

    getChatBox: function() { return document.getElementById('prompt-textarea'); },

    getChatData: function(chatToGet = 1, detailsToGet = 'all', sender = 'all', msgToGet = 'all') {
    // chatToGet = 'active' | 'latest' | index|title|id of chat to get (defaults to active OpenAI chat > latest chat)
    // detailsToGet = 'all' | [ 'id' | 'title' | 'create_time' | 'update_time' | 'msg' ] (defaults to 'all', excludes msg's)
    // sender = ( 'all' | 'both' ) | 'user' | 'chatgpt' (defaults to 'all', requires 2nd param = 'msg')
    // msgToGet = 'all' | 'latest' | index of msg to get (defaults to 'all', requires 2nd param = 'msg')

        // Init args
        const validDetails = [ 'all', 'id', 'title', 'create_time', 'update_time', 'msg' ];
        const validSenders = [ 'all', 'both', 'user', 'chatgpt' ];
        chatToGet = !chatToGet ? 'active' // if '' passed, set to active
                  : Number.isInteger(chatToGet) || /^\d+$/.test(chatToGet) ? // else if string/int num passed
                      ( parseInt(chatToGet, 10) === 0 ? 0 : parseInt(chatToGet, 10) - 1 ) // ...offset -1 or keep as 0
                  : chatToGet; // else preserve non-num string as 'active', 'latest' or title/id of chat to get
        detailsToGet = ['all', ''].includes(detailsToGet) ? // if '' or 'all' passed
                         validDetails.filter(detail => /^(?!all$|msg$).*/.test(detail)) // populate w/ [validDetails] except 'all' & 'msg'
                     : Array.isArray(detailsToGet) ? detailsToGet : [detailsToGet]; // else convert to array if needed
        sender = !sender ? 'all' // if '' or unpassed, set to 'all'
               : validSenders.includes(sender) ? sender : 'invalid'; // else set to validSenders or 'invalid'
        msgToGet = Number.isInteger(msgToGet) || /^\d+$/.test(msgToGet) ? // if string/int num passed
                     ( parseInt(msgToGet, 10) === 0 ? 0 : parseInt(msgToGet, 10) - 1 ) // ...offset -1 or keep as 0
                 : ['all', 'latest'].includes(msgToGet.toLowerCase()) ? // else if 'all' or 'latest' passed
                     msgToGet.toLowerCase() // ...preserve it
                 : !msgToGet ? 'all' // else if '', set to 'all'
                 : 'invalid'; // else set 'invalid' for validation step

        // Validate args
        for (const detail of detailsToGet) {
            if (!validDetails.includes(detail)) { return console.error(
                'Invalid detail arg \'' + detail + '\' passed. Valid details are:\n'
              + '                    [' + validDetails + ']'); }}
        if (sender == 'invalid') { return console.error(
            'Invalid sender arg passed. Valid senders are:\n'
          + '                    [' + validSenders + ']'); }
        if (msgToGet == 'invalid') { return console.error(
            'Invalid msgToGet arg passed. Valid msg\'s to get are:\n'
          + '                    [ \'all\' | \'latest\' | index of msg to get ]'); }

        const getChatDetails = (token, detailsToGet) => {
            const re_chatID = /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/;
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', endpoints.openAI.chats, true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                xhr.onload = () => {
                    if (xhr.status !== 200) return reject('🤖 chatgpt.js >> Request failed. Cannot retrieve chat details.');
                    const data = JSON.parse(xhr.responseText).items;
                    if (data.length <= 0) return reject('🤖 chatgpt.js >> Chat list is empty.');
                    const detailsToReturn = {};

                    // Return by index if num, 'latest', or 'active' passed but not truly active
                    if (Number.isInteger(chatToGet) || chatToGet == 'latest' ||
                            (chatToGet == 'active' && !new RegExp('\/' + re_chatID.source + '$').test(window.location.href))) {
                        chatToGet = Number.isInteger(chatToGet) ? chatToGet : 0; // preserve index, otherwise get latest
                        if (chatToGet > data.length) { // reject if index out-of-bounds
                            return reject('🤖 chatgpt.js >> Chat with index ' + ( chatToGet + 1 )
                                + ' is out of bounds. Only ' + data.length + ' chats exist!'); }
                        for (const detail of detailsToGet) detailsToReturn[detail] = data[chatToGet][detail];
                        return resolve(detailsToReturn);
                    }

                    // Return by title, ID or active chat
                    const chatIdentifier = ( // determine to check by ID or title
                        chatToGet == 'active' || new RegExp('^' + re_chatID.source + '$').test(chatToGet) ? 'id' : 'title' );
                    if (chatToGet == 'active') // replace chatToGet w/ actual ID
                        chatToGet = re_chatID.exec(window.location.href)[0];
                    let idx, chatFound; // index of potentially found chat, flag if found
                    for (idx = 0; idx < data.length; idx++) { // search for id/title to set chatFound flag
                        if (data[idx][chatIdentifier] == chatToGet) { chatFound = true; break; }}
                    if (!chatFound) // exit
                        return reject('🤖 chatgpt.js >> No chat with ' + chatIdentifier + ' = ' + chatToGet + ' found.');
                    for (const detail of detailsToGet) detailsToReturn[detail] = data[idx][detail];
                    return resolve(detailsToReturn);
                };
                xhr.send();
        });};

        const getChatMsgs = token => {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                getChatDetails(token, ['id']).then(chat => {
                    xhr.open('GET', `${endpoints.openAI.chat}/${chat.id}`, true);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                    xhr.onload = () => {
                        if (xhr.status !== 200) return reject('🤖 chatgpt.js >> Request failed. Cannot retrieve chat messages.');

                        // Init const's
                        const data = JSON.parse(xhr.responseText).mapping; // Get chat messages
                        const userMessages = [], chatGPTMessages = [], msgsToReturn = [];

                        // Fill [userMessages]
                        for (const key in data)
                            if ('message' in data[key] && data[key].message.author.role == 'user')
                                userMessages.push({ id: data[key].id, msg: data[key].message });
                        userMessages.sort((a, b) => a.msg.create_time - b.msg.create_time); // sort in chronological order

                        if (parseInt(msgToGet, 10) + 1 > userMessages.length) // reject if index out of bounds
                            return reject('🤖 chatgpt.js >> Message/response with index ' + ( msgToGet + 1)
                                + ' is out of bounds. Only ' + userMessages.length + ' messages/responses exist!');

                        // Fill [chatGPTMessages]
                        for (const userMessage of userMessages) {
                            let sub = [];
                            for (const key in data) {
                                if ('message' in data[key] && data[key].message.author.role == 'assistant' && data[key].parent == userMessage.id) {
                                    sub.push(data[key].message);
                                }
                            }
                            sub.sort((a, b) => a.create_time - b.create_time); // sort in chronological order
                            sub = sub.map((x) => x.content.parts[0]); // pull out the messages after sorting
                            sub = sub.length === 1 ? sub[0] : sub; // convert not regenerated responses to strings
                            chatGPTMessages.push(sub); // array of arrays (length > 1 = regenerated responses)
                        }

                        if (sender == 'user') // Fill [msgsToReturn] with user messages
                            for (const userMessage in userMessages)
                                msgsToReturn.push(userMessages[userMessage].msg.content.parts[0]);
                        else if (sender == 'chatgpt') // Fill [msgsToReturn] with ChatGPT responses
                            for (const chatGPTMessage of chatGPTMessages)
                                msgsToReturn.push(msgToGet == 'latest' ? chatGPTMessages[chatGPTMessages.length - 1] : chatGPTMessage );
                        else { // Fill [msgsToReturn] with objects of user messages and chatgpt response(s)
                            let i = 0;
                            for (const message in userMessages) {
                                msgsToReturn.push({
                                    user: userMessages[message].msg.content.parts[0],
                                    chatgpt: msgToGet == 'latest' ? chatGPTMessages[i][chatGPTMessages[i].length - 1] : chatGPTMessages[i]
                                });
                                i++;
                            }
                        }
                        return resolve(msgToGet == 'all' ? msgsToReturn // if 'all' passed, return array
                                     : msgToGet == 'latest' ? msgsToReturn[msgsToReturn.length - 1] // else if 'latest' passed, return latest
                                     : msgsToReturn[msgToGet] ); // else return element of array
                    };
                    xhr.send();
        });});};

        // Return chat data
        return new Promise((resolve) => { chatgpt.getAccessToken().then(token => {
            if (!detailsToGet.includes('msg')) getChatDetails(token, detailsToGet).then(data => {
                return resolve(data); // get just the chat details
            });
            else getChatMsgs(token).then(messages => { return resolve(messages); }); // otherwise get specific msg's
        });});
    },

    getChatInput: function() { return chatgpt.getChatBox().value; },

    getContinueGeneratingButton: function() {
        for (const formButton of document.querySelectorAll('form button')) {
            if (formButton.textContent.toLowerCase().includes('continue')) {
                return formButton;
    }}},

    getLastPrompt: function() { return chatgpt.getChatData('active', 'msg', 'user', 'latest'); },
    getLastResponse: function() { return chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest'); },

    getNewChatLink: function() {
        for (const navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) {
            if (/(new|clear) chat/i.test(navLink.text)) {
                return navLink;
    }}},

    getRegenerateButton: function() {   
        for (const mainSVG of document.querySelectorAll('main svg')) {
            if (mainSVG.querySelector('path[d*="M4.5 2.5C5.05228"]')) // regen icon found
                return mainSVG.parentNode.parentNode;
    }},

    getResponse: function() {
    // * Returns response via DOM by index arg if OpenAI chat page is active, otherwise uses API w/ following args:        
    // chatToGet = index|title|id of chat to get (defaults to latest if '' unpassed)
    // responseToGet = index of response to get (defaults to latest if '' unpassed)
    // regenResponseToGet = index of regenerated response to get (defaults to latest if '' unpassed)

        if (window.location.href.startsWith('https://chat.openai.com/c/'))
            return chatgpt.getResponseFromDOM.apply(null, arguments);
        else return chatgpt.getResponseFromAPI.apply(null, arguments);
    },

    getResponseFromAPI: function(chatToGet, responseToGet) { return chatgpt.response.getFromAPI(chatToGet, responseToGet); },
    getResponseFromDOM: function(pos) { return chatgpt.response.getFromDOM(pos); },
    getSendButton: function() { return document.querySelector('form button[class*="bottom"]'); },

    getStopGeneratingButton: function() {
        for (const formButton of document.querySelectorAll('form button')) {
            if (formButton.textContent.toLowerCase().includes('stop')) {
                return formButton;
    }}},

    getUserLanguage: function() {
        return navigator.languages[0] || navigator.language || navigator.browserLanguage ||
            navigator.systemLanguage || navigator.userLanguage || ''; },

    history: {
        isLoaded: function() {
            return new Promise(resolve => {
                const checkChatHistory = () => {
                    if (document.querySelector('nav[aria-label="Chat history"]')) resolve();
                    else setTimeout(checkChatHistory, 100);
                };
                checkChatHistory();
        });},

        activate: function() { this.isOff() ? this.toggle() : console.info('Chat history is already enabled!'); },
        deactivate: function() { this.isOn() ? this.toggle() : console.info('Chat history is already disabled!'); },

        isOn: function() {
            const navDivs = document.querySelectorAll('nav[aria-label="Chat history"] div'),
                  offDiv = [...navDivs].find(div => div.textContent.includes('Chat History is off')) || {};
            return offDiv.classList.toString().includes('invisible');
        },

        isOff: function() { return !this.isOn(); },

        toggle: function() {
            for (const navBtn of document.querySelectorAll('nav[aria-label="Chat history"] button')) {
                if (/chat history/i.test(navBtn.textContent)) {
                    navBtn.click(); return;
        }}}
    },

    instructions: {
    // NOTE: DOM is not updated to reflect new instructions added/removed or toggle state (until session refresh)

        add: function(instruction, target) {
            if (!instruction) return console.error('Please provide an instruction');
            if (typeof instruction !== 'string') return console.error('Instruction must be a string');
            const validTargets = ['user', 'chatgpt']; // valid targets
            if (!target) return console.error('Please provide a valid target!');
            if (typeof target !== 'string') return console.error('Target must be a string');
            target = target.toLowerCase(); // lowercase target
            if (!validTargets.includes(target))
                return console.error(`Invalid target ${target}. Valid targets are [${validTargets}]`);

            instruction = `\n\n${instruction}`; // add 2 newlines to the new instruction

            return new Promise((resolve) => {
                chatgpt.getAccessToken().then(async token => {
                    const instructionsData = await this.fetchData();

                    // Concatenate old instructions with new instruction
                    if (target == 'user') instructionsData.about_user_message += instruction;
                    else if (target == 'chatgpt') instructionsData.about_model_message += instruction;

                    await this.sendRequest('POST', token, instructionsData);
                    return resolve();
                });
            });
        },

        clear: function(target) {
            const validTargets = ['user', 'chatgpt']; // valid targets
            if (!target) return console.error('Please provide a valid target!');
            if (typeof target !== 'string') return console.error('Target must be a string');
            target = target.toLowerCase(); // lowercase target
            if (!validTargets.includes(target))
                return console.error(`Invalid target ${target}. Valid targets are [${validTargets}]`);

            return new Promise((resolve) => {
                chatgpt.getAccessToken().then(async token => {
                    const instructionsData = await this.fetchData();

                    // Clear target's instructions
                    if (target == 'user') instructionsData.about_user_message = '';
                    else if (target == 'chatgpt') instructionsData.about_model_message = '';

                    await this.sendRequest('POST', token, instructionsData);
                    return resolve();
                });});
        },

        fetchData: function() {
        // INTERNAL METHOD
            return new Promise((resolve) => {
                chatgpt.getAccessToken().then(async token => {
                    return resolve(await this.sendRequest('GET', token)); // Return API data
                });});
        },

        sendRequest: function(method, token, body) {
        // INTERNAL METHOD
            // Validate args
            for (let i = 0; i < arguments.length - 1; i++) if (typeof arguments[i] !== 'string')
                return console.error(`Argument ${ i + 1 } must be a string`);
            const validMethods = ['POST', 'GET'];
            method = (method || '').trim().toUpperCase();
            if (!method || !validMethods.includes(method)) // reject if not valid method
                return console.error(`Valid methods are ${ validMethods }`);
            if (!token) return console.error('Please provide a valid access token!');
            if (body && typeof body !== 'object') // reject if body is passed but not an object
                return console.error(`Invalid body data type. Got ${ typeof body }, expected object`);

            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open(method, endpoints.openAI.instructions, true);
                // Set headers
                xhr.setRequestHeader('Accept-Language', 'en-US');
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                if (method == 'POST') xhr.setRequestHeader('Content-Type', 'application/json');

                xhr.onload = () => {
                    const responseData = JSON.parse(xhr.responseText);
                    if (xhr.status === 422)
                        return reject('🤖 chatgpt.js >> Character limit exceeded. Custom instructions can have a maximum length of 1500 characters.');
                    else if (xhr.status === 403 && responseData.detail.reason == 'content_policy')
                        return reject('🤖 chatgpt.js >> ' + responseData.detail.description);
                    else if (xhr.status !== 200)
                        return reject('🤖 chatgpt.js >> Request failed. Cannot contact custom instructions endpoint.');
                    console.info(`Custom instructions successfully contacted with method ${ method }`);
                    return resolve(responseData || {}); // return response data no matter what the method is
                };
                xhr.send(JSON.stringify(body) || ''); // if body is passed send it, else just send the request
            });
        },

        turnOff: function() {
            return new Promise((resolve) => {
                chatgpt.getAccessToken().then(async token => {
                    const instructionsData = await this.fetchData();
                    instructionsData.enabled = false;
                    await this.sendRequest('POST', token, instructionsData);
                    return resolve();
                });
            });
        },

        turnOn: function() {
            return new Promise((resolve) => {
                chatgpt.getAccessToken().then(async token => {
                    const instructionsData = await this.fetchData();
                    instructionsData.enabled = true;
                    await this.sendRequest('POST', token, instructionsData);
                    return resolve();
                });
            });
        },

        toggle: function() {
            return new Promise((resolve) => {
                this.fetchData().then(async instructionsData => {
                    await (instructionsData.enabled ? this.turnOff() : this.turnOn());
                    return resolve();
                });});
        }
    },

    isChromium: function() { return chatgpt.browser.isChromium(); },
    isDarkMode: function() { return document.documentElement.classList.toString().includes('dark'); },
    isFirefox: function() { return chatgpt.browser.isFirefox(); },
    isFullScreen: function() { return chatgpt.browser.isFullScreen(); },

    isIdle: function() {
        return new Promise(resolve => {
            const intervalId = setInterval(() => {
                if (chatgpt.getRegenerateButton()) {
                    clearInterval(intervalId); resolve();
    }}, 100);});},

    isLoaded: function() {
        return new Promise(resolve => {
            const intervalId = setInterval(() => {
                if (document.querySelector('nav button[id*="menu"]')) {
                    clearInterval(intervalId); setTimeout(() => { resolve(); }, 500);
    }}, 100);});},

    isLightMode: function() { return document.documentElement.classList.toString().includes('light'); },
    isMobileDevice: function() { return chatgpt.browser.isMobile(); },

    logout: function() { window.location.href = 'https://chat.openai.com/auth/logout'; },

    menu: {
        elements: [],
        addedEvent: false,

        append: function(element, attrs = {}) {
        // element = 'button' | 'dropdown' REQUIRED (no default value)
        // attrs = { ... }
        // attrs for 'button': 'icon' = src string, 'label' = string, 'onclick' = function
        // attrs for 'dropdown': 'items' = [ { text: string, value: string }, ... ] array of objects
        // where 'text' is the displayed text of the option and 'value' is the value of the option

            const validElements = ['button', 'dropdown'];
            if (!element || typeof element !== 'string') // element not passed or invalid type
                return console.error('🤖 chatgpt.js >> Please supply a valid string element name!');
            element = element.toLowerCase();
            if (!validElements.includes(element)) // element not in list
                return console.error(`🤖 chatgpt.js >> Invalid element! Valid elements are [${validElements}]`);

            const newElement = document.createElement(
                element == 'dropdown' ? 'select' :
                element == 'button' ? 'a' : element
            );
            newElement.id = Math.floor(chatgpt.randomFloat() * 1000000) + Date.now(); // add random id to the element

            if (element == 'button') {
                newElement.textContent = attrs?.label && typeof attrs.label == 'string'
                    ? attrs.label
                    : 'chatgpt.js button';

                const icon = document.createElement('img');
                icon.src = attrs?.icon && typeof attrs.icon == 'string' // can also be base64 encoded image string
                    ? attrs.icon // add icon to button element if given, else default one
                    : ( endpoints.assets + '/starters/chrome/extension/icons/icon128.png' );
                icon.width = 18;
                newElement.insertBefore(icon, newElement.firstChild);

                newElement.onclick = attrs?.onclick && typeof attrs.onclick == 'function'
                    ? attrs.onclick
                    : function() {};
            }

            else if (element == 'dropdown') {
                if (!attrs?.items || // there no are options to add 
                    !Array.isArray(attrs.items) || // it's not an array
                    !attrs.items.length) // the array is empty
                        attrs.items = [{ text: '🤖 chatgpt.js option', value: 'chatgpt.js option value' }]; // set default dropdown entry

                if (!attrs.items.every(el => typeof el == 'object')) // the entries of the array are not objects
                    return console.error('\'items\' must be an array of objects!');

                newElement.style = 'background-color: #000; width: 100%; border: none;';

                attrs.items.forEach(item => {
                    const optionElement = document.createElement('option');
                    optionElement.textContent = item?.text;
                    optionElement.value = item?.value;
                    newElement.add(optionElement);
                });
            }

            const addElementsToMenu = () => {
                const optionButtons = document.querySelectorAll('a[role="menuitem"]');
                let cssClasses;
        
                for (let navLink of optionButtons)
                    if (navLink.textContent == 'Settings') {
                        cssClasses = navLink.classList;
                        break; }

                const headlessNav = optionButtons[0].parentNode;

                chatgpt.menu.elements.forEach(element => {
                    element.setAttribute('class', cssClasses);
                    if (!headlessNav.contains(element))
                        try { headlessNav.insertBefore(element, headlessNav.firstChild); }
                        catch (err) { console.error(err); }
                });
            };

            this.elements.push(newElement);
            const menuBtn = document.querySelector('nav button[id*="headless"]');
            if (!this.addedEvent) { // to prevent adding more than one event
                menuBtn.addEventListener('click', () => { setTimeout(addElementsToMenu, 25); });
                this.addedEvent = true; }

            return newElement.id; // Return the element id
        },

        close: function() {
            const menuBtn = document.querySelector('nav [id*="menu-button"][aria-expanded="true"]');
            if (menuBtn)
                try { menuBtn.click(); } catch (err) { console.error('Error while closing the menu'); throw new Error(err); }
            else { console.error('Menu already hidden!'); throw new Error(); }
        },

        open: function() {
            const menuBtn = document.querySelector('nav [id*="menu-button"][aria-expanded="false"]');
            if (menuBtn)
                try { menuBtn.click(); } catch (err) { console.error('Error while closing the menu'); throw new Error(err); }
            else { console.error('Menu already hidden!'); throw new Error(); }
        }
    },

    minify: function() { chatgpt.code.minify(); },

    notify: async function(msg, position, notifDuration, shadow) {
        notifDuration = notifDuration ? +notifDuration : 1.75; // sec duration to maintain notification visibility
        const fadeDuration = 0.3, // sec duration of fade-out
              vpYoffset = 23, vpXoffset = 27; // px offset from viewport border

        // Create/append notification div
        const notificationDiv = document.createElement('div'); // make div
        notificationDiv.id = Math.floor(chatgpt.randomFloat() * 1000000) + Date.now();
        notificationDiv.classList.add('chatgpt-notif');
        notificationDiv.innerText = msg; // insert msg
        document.body.append(notificationDiv); // insert into DOM

        // Create/append close button
        const closeBtn = document.createElement('div');
        closeBtn.title = cjsMessages?.tooltip_dismiss || 'Dismiss'; closeBtn.classList.add('notif-close-btn');
        const closeSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        closeSVG.setAttribute('height', '8px');
        closeSVG.setAttribute('viewBox', '0 0 14 14');
        closeSVG.setAttribute('fill', 'none');
        closeSVG.style.height = closeSVG.style.width = '8px'; // override SVG styles on non-OpenAI sites
        const closeSVGpath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        closeSVGpath.setAttribute('fill-rule', 'evenodd');
        closeSVGpath.setAttribute('clip-rule', 'evenodd');
        closeSVGpath.setAttribute('fill', 'white');
        closeSVGpath.setAttribute('d', 'M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976312 12.6834 -0.0976312 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976312 0.683417 -0.0976312 0.292893 0.292893C-0.0976312 0.683417 -0.0976312 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976312 12.6834 -0.0976312 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z');
        closeSVG.append(closeSVGpath); closeBtn.append(closeSVG); notificationDiv.append(closeBtn);

        // Determine div position/quadrant
        notificationDiv.isTop = !position || !/low|bottom/i.test(position);
        notificationDiv.isRight = !position || !/left/i.test(position);
        notificationDiv.quadrant = (notificationDiv.isTop ? 'top' : 'bottom')
                                 + (notificationDiv.isRight ? 'Right' : 'Left');

        // Create/append/update notification style (if missing or outdated)
        const thisUpdated = 20231110; // datestamp of last edit for this file's `notifStyle` 
        let notifStyle = document.querySelector('#chatgpt-notif-style'); // try to select existing style
        if (!notifStyle || parseInt(notifStyle.getAttribute('last-updated'), 10) < thisUpdated) { // if missing or outdated
            if (!notifStyle) { // outright missing, create/id/attr/append it first
                notifStyle = document.createElement('style'); notifStyle.id = 'chatgpt-notif-style';
                notifStyle.setAttribute('last-updated', thisUpdated.toString());
                document.head.append(notifStyle);
            }
            notifStyle.innerText = ( // update prev/new style contents
                '.chatgpt-notif {'
                    + 'background-color: black ; padding: 10px 13px 10px 18px ; border-radius: 11px ; border: 1px solid #f5f5f7 ;' // bubble style
                    + 'opacity: 0 ; position: fixed ; z-index: 9999 ; font-size: 1.8rem ; color: white ;' // visibility
                    + '-webkit-user-select: none ; -moz-user-select: none ; -ms-user-select: none ; user-select: none ;'
                    + `transform: translateX(${ !notificationDiv.isRight ? '-' : '' }35px) ;` // init off-screen for transition fx
                    + ( shadow ? ( 'box-shadow: -8px 13px 25px 0 ' + ( /\b(shadow|on)\b/gi.test(shadow) ? 'gray' : shadow )) : '' ) + '}'
                + '.notif-close-btn { cursor: pointer ; float: right ; position: relative ; right: -4px ; margin-left: -3px ;'
                    + 'display: grid }' // top-align for non-OpenAI sites
                + '@keyframes notif-zoom-fade-out { 0% { opacity: 1 ; transform: scale(1) }' // transition out keyframes
                    + '15% { opacity: 0.35 ; transform: rotateX(-27deg) scale(1.05) }'
                    + '45% { opacity: 0.05 ; transform: rotateX(-81deg) }'
                    + '100% { opacity: 0 ; transform: rotateX(-180deg) scale(1.15) }}'
            );
        } 

        // Enqueue notification
        let notifyProps = JSON.parse(localStorage.notifyProps);
        notifyProps.queue[notificationDiv.quadrant].push(notificationDiv.id);
        localStorage.notifyProps = JSON.stringify(notifyProps);

        // Position notification (defaults to top-right)
        notificationDiv.style.top = notificationDiv.isTop ? vpYoffset.toString() + 'px' : '';
        notificationDiv.style.bottom = !notificationDiv.isTop ? vpYoffset.toString() + 'px' : '';
        notificationDiv.style.right = notificationDiv.isRight ? vpXoffset.toString() + 'px' : '';
        notificationDiv.style.left = !notificationDiv.isRight ? vpXoffset.toString() + 'px' : '';

        // Reposition old notifications
        const thisQuadrantQueue = notifyProps.queue[notificationDiv.quadrant];
        if (thisQuadrantQueue.length > 1) {
            try { // to move old notifications
                for (const divId of thisQuadrantQueue.slice(0, -1)) { // exclude new div
                    const oldDiv = document.getElementById(divId),
                          offsetProp = oldDiv.style.top ? 'top' : 'bottom', // pick property to change
                          vOffset = +/\d+/.exec(oldDiv.style[offsetProp])[0] + 5 + oldDiv.getBoundingClientRect().height;
                    oldDiv.style[offsetProp] = `${ vOffset }px`; // change prop
                }
            } catch (err) {}
        }

        // Show notification
        setTimeout(() => {
            notificationDiv.style.opacity = chatgpt.isDarkMode() ? 0.8 : 0.67; // show msg
            notificationDiv.style.transform = 'translateX(0)'; // bring from off-screen
            notificationDiv.style.transition = 'transform 0.15s ease, opacity 0.15s ease';
        }, 10);

        // Init delay before hiding        
        const hideDelay = fadeDuration > notifDuration ? 0 // don't delay if fade exceeds notification duration
                        : notifDuration - fadeDuration; // otherwise delay for difference

        // Init/schedule audio feedback
        let dismissAudio, dismissAudioTID; // be accessible to `dismissNotif()`
        if (isFFtmScript) {
            // Init base audio index
            let nthAudio; do nthAudio = Math.floor(Math.random() * 3) + 1; // randomize  between 1-3...
            while (nthAudio === notifyProps.lastNthAudio); // ...until distinct from prev index (for variety)
            notifyProps.lastNthAudio = nthAudio; localStorage.notifyProps = JSON.stringify(notifyProps);

            // Build audio element + src URL
            dismissAudio = new Audio();
            dismissAudio.src = endpoints.assets + '/media/audio/notifications/bubble-pop/'
                             + `${ nthAudio }-${ notificationDiv.isRight ? 'right' : 'left' }.mp3`;

            // Schedule playback
            dismissAudioTID = setTimeout(() => dismissAudio.play().catch(() => {}), hideDelay * 1000);
        }

        // Add notification dismissal to timeout schedule + button clicks
        const dismissNotif = () => {
            notificationDiv.style.animation = `notif-zoom-fade-out ${ fadeDuration }s ease-out`;
            if (isFFtmScript) dismissAudio?.play().catch(() => {});
            clearTimeout(dismissFuncTID); clearTimeout(dismissAudioTID);
        };
        const dismissFuncTID = setTimeout(dismissNotif, hideDelay * 1000); // maintain visibility for `hideDelay` secs, then dismiss     
        closeSVG.addEventListener('click', dismissNotif, { once: true }); // add to close button clicks

        // Destroy notification
        notificationDiv.addEventListener('animationend', () => {
            notificationDiv.remove(); // remove from DOM
            notifyProps = JSON.parse(localStorage.notifyProps);
            notifyProps.queue[notificationDiv.quadrant].shift(); // + memory
            localStorage.notifyProps = JSON.stringify(notifyProps); // + storage
        }, { once: true });
    },

    obfuscate: function() { chatgpt.code.obfuscate(); },

    printAllFunctions: function() {

        // Define colors
        const colors = { // element: [light, dark]
            cmdPrompt: ['#ff00ff', '#00ff00'], // pink, green
            objName: ['#0611e9', '#f9ee16'], // blue, yellow
            methodName: ['#005aff', '#ffa500'], // blue, orange
            entryType: ['#467e06', '#b981f9'], // green, purple
            srcMethod: ['#ff0000', '#00ffff'] // red, cyan
        };
        Object.keys(colors).forEach(element => { // populate dark scheme colors if missing
            colors[element][1] = colors[element][1] ||
                '#' + (Number(`0x1${ colors[element][0].replace(/^#/, '') }`) ^ 0xFFFFFF)
                    .toString(16).substring(1).toUpperCase(); // convert to hex
        });

        // Create [functionNames]
        const functionNames = [];
        for (const prop in this) {
            if (typeof this[prop] == 'function') {
                const chatgptIsParent = !Object.keys(this).find(obj => Object.keys(this[obj]).includes(this[prop].name)),
                      functionParent = chatgptIsParent ? 'chatgpt' : 'other';
                functionNames.push([functionParent, prop]);
            } else if (typeof this[prop] == 'object') {
                for (const nestedProp in this[prop]) {
                    if (typeof this[prop][nestedProp] == 'function') {
                        functionNames.push([prop, nestedProp]);
        }}}}
        functionNames.sort((a, b) => { return a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]); });

        // Print methods
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches,
              baseFontStyles = 'font-family: monospace ; font-size: larger ; ';
        console.log('\n%c🤖 chatgpt.js methods\n', 'font-family: sans-serif ; font-size: xxx-large ; font-weight: bold');
        for (const functionName of functionNames) {
            const isChatGptObjParent = /chatgpt|other/.test(functionName[0]),
                  rootFunction = ( functionName[0] == 'chatgpt' ? this[functionName[1]].name
                    : functionName[0] !== 'other' ? functionName[0] + '.' + functionName[1]
                    : (( Object.keys(this).find(obj => Object.keys(this[obj]).includes(this[functionName[1]].name)) + '.' )
                        + this[functionName[1]].name )),
                  isAsync = this[functionName[1]]?.constructor.name == 'AsyncFunction';
            console.log('%c>> %c' + ( isChatGptObjParent ? '' : `${ functionName[0] }.%c`) + functionName[1]
                    + ' - https://chatgptjs.org/userguide/' + /(?:.*\.)?(.*)/.exec(rootFunction)[1].toLowerCase() + ( isAsync ? '-async' : '' ) + '\n%c[%c'
                + ((( functionName[0] == 'chatgpt' && functionName[1] == this[functionName[1]].name ) || // parent is chatgpt + names match or
                    !isChatGptObjParent) // parent is chatgpt.obj
                        ? 'Function' : 'Alias of' ) + '%c: %c'
                + rootFunction + '%c]',

                // Styles
                baseFontStyles + 'font-weight: bold ; color:' + colors.cmdPrompt[+isDarkMode],
                baseFontStyles + 'font-weight: bold ;'
                    + 'color:' + colors[isChatGptObjParent ? 'methodName' : 'objName'][+isDarkMode],
                baseFontStyles + 'font-weight: ' + ( isChatGptObjParent ? 'initial' : 'bold' ) + ';'
                    + 'color:' + ( isChatGptObjParent ? 'initial' : colors.methodName[+isDarkMode] ),
                baseFontStyles + 'font-weight: ' + ( isChatGptObjParent ? 'bold' : 'initial' ) + ';'
                    + 'color:' + ( isChatGptObjParent ? colors.entryType[+isDarkMode] : 'initial' ),
                baseFontStyles + 'font-weight: ' + ( isChatGptObjParent ? 'initial' : 'bold' ) + ';'
                    + 'color:' + ( isChatGptObjParent ? 'initial' : colors.entryType[+isDarkMode] ),
                baseFontStyles + ( isChatGptObjParent ? 'font-style: italic' : 'font-weight: initial' ) + ';'
                    + 'color:' + ( isChatGptObjParent ? colors.srcMethod[+isDarkMode] : 'initial' ),
                baseFontStyles + ( isChatGptObjParent ? 'font-weight: initial' : 'font-style: italic' ) + ';'
                    + 'color:' + ( isChatGptObjParent ? 'initial' : colors.srcMethod[+isDarkMode] ),
                isChatGptObjParent ? '' : ( baseFontStyles + 'color: initial ; font-weight: initial' ));
        }
    },

    randomFloat: function() {
    // * Generates a random, cryptographically secure value between 0 (inclusive) & 1 (exclusive)
        const crypto = window.crypto || window.msCrypto;
        return crypto.getRandomValues(new Uint32Array(1))[0] / 0xFFFFFFFF;
    },

    refactor: function() { chatgpt.code.refactor(); },

    regenerate: function() {
        for (const formButton of document.querySelectorAll('form button')) {
            if (formButton.textContent.toLowerCase().includes('regenerate')) {
                formButton.click(); return;
    }}},

    renderHTML: function(node) {
        const reTags = /<([a-z\d]+)\b([^>]*)>([\s\S]*?)<\/\1>/g,
              reAttributes = /(\S+)=['"]?((?:.(?!['"]?\s+(?:\S+)=|[>']))+.)['"]?/g,
              nodeContent = node.childNodes;

        // Preserve consecutive spaces + line breaks
        if (!this.renderHTML.preWrapSet) {
            node.style.whiteSpace = 'pre-wrap'; this.renderHTML.preWrapSet = true;
            setTimeout(() => { this.renderHTML.preWrapSet = false; }, 100);
        }

        // Process child nodes
        for (const childNode of nodeContent) {

            // Process text node
            if (childNode.nodeType == Node.TEXT_NODE) {
                const text = childNode.nodeValue,
                      elems = Array.from(text.matchAll(reTags));

                // Process 1st element to render
                if (elems.length > 0) {
                    const elem = elems[0],
                          [tagContent, tagName, tagAttributes, tagText] = elem.slice(0, 4),
                          tagNode = document.createElement(tagName); tagNode.textContent = tagText;

                    // Extract/set attributes
                    const attributes = Array.from(tagAttributes.matchAll(reAttributes));
                    attributes.forEach(attribute => {
                        const name = attribute[1], value = attribute[2].replace(/['"]/g, '');
                        tagNode.setAttribute(name, value);
                    });

                    const renderedNode = this.renderHTML(tagNode); // render child elements of newly created node

                    // Insert newly rendered node
                    const beforeTextNode = document.createTextNode(text.substring(0, elem.index)),
                          afterTextNode = document.createTextNode(text.substring(elem.index + tagContent.length));

                    // Replace text node with processed nodes
                    node.replaceChild(beforeTextNode, childNode);
                    node.insertBefore(renderedNode, beforeTextNode.nextSibling);
                    node.insertBefore(afterTextNode, renderedNode.nextSibling);
                }

            // Process element nodes recursively
            } else if (childNode.nodeType == Node.ELEMENT_NODE) this.renderHTML(childNode);
        }

        return node; // if assignment used
    },

    resend: async function() { chatgpt.send(await chatgpt.getChatData('latest', 'msg', 'user', 'latest')); },

    response: {
        get: function() {
            // * Returns response via DOM by index arg if OpenAI chat page is active, otherwise uses API w/ following args:        
            // chatToGet = index|title|id of chat to get (defaults to latest if '' unpassed)
            // responseToGet = index of response to get (defaults to latest if '' unpassed)
            // regenResponseToGet = index of regenerated response to get (defaults to latest if '' unpassed)

                if (window.location.href.startsWith('https://chat.openai.com/c/'))
                    return this.getFromDOM.apply(null, arguments);
                else return this.getFromAPI.apply(null, arguments);
        },

        getFromAPI: function(chatToGet, responseToGet) {
        // chatToGet = index|title|id of chat to get (defaults to latest if '' or unpassed)
        // responseToGet = index of response to get (defaults to latest if '' or unpassed)

            chatToGet = chatToGet || 'latest'; responseToGet = responseToGet || 'latest';
            return chatgpt.getChatData(chatToGet, 'msg', 'chatgpt', responseToGet);
        },

        getFromDOM: function(pos) {
            const responseDivs = document.querySelectorAll('div[data-testid*="conversation-turn"]:nth-child(odd)'),
                  strPos = pos.toString().toLowerCase();
            let response = '';
            if (responseDivs.length) {
                if (/last|final/.test(strPos)) // get last response
                    response = responseDivs[responseDivs.length - 1].textContent;
                else { // get nth response
                    const nthOfResponse = (

                        // Calculate base number
                        Number.isInteger(pos) ? pos : // do nothing for integers
                        /^\d+/.test(strPos) ? /^\d+/.exec(strPos)[0] : // extract first digits for strings w/ them
                        ( // convert words to integers for digitless strings
                            /^(?:1|one|fir)(?:st)?$/.test(strPos) ? 1
                            : /^(?:2|tw(?:o|en|el(?:ve|f))|seco)(?:nd|t[yi])?(?:e?th)?$/.test(strPos) ? 2
                            : /^(?:3|th(?:ree|ir?))(?:rd|teen|t[yi])?(?:e?th)?$/.test(strPos) ? 3
                            : /^(?:4|fou?r)(?:teen|t[yi])?(?:e?th)?$/.test(strPos) ? 4
                            : /^(?:5|fi(?:ve|f))(?:teen|t[yi])?(?:e?th)?$/.test(strPos) ? 5
                            : /^(?:6|six)(?:teen|t[yi])?(?:e?th)?$/.test(strPos) ? 6
                            : /^(?:7|seven)(?:teen|t[yi])?(?:e?th)?$/.test(strPos) ? 7
                            : /^(?:8|eight?)(?:teen|t[yi])?(?:e?th)?$/.test(strPos) ? 8
                            : /^(?:9|nine?)(?:teen|t[yi])?(?:e?th)?$/.test(strPos) ? 9
                            : /^(?:10|ten)(?:th)?$/.test(strPos) ? 10 : 1 )

                        // Transform base number if suffixed
                        * ( /(ty|ieth)$/.test(strPos) ? 10 : 1 ) // x 10 if -ty/ieth
                        + ( /teen(th)?$/.test(strPos) ? 10 : 0 ) // + 10 if -teen/teenth

                    );
                    response = responseDivs[nthOfResponse - 1].textContent;
                }
                response = response.replace(/^ChatGPTChatGPT/, ''); // strip sender name
            }
            return response;
        },

        getLast: function() { return chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest'); },

        regenerate: function() {
            for (const formButton of document.querySelectorAll('form button')) {
                if (formButton.textContent.toLowerCase().includes('regenerate')) {
                    formButton.click(); return;
        }}},

        stopGenerating: function() {
            for (const formButton of document.querySelectorAll('form button')) {
                if (formButton.textContent.toLowerCase().includes('stop')) {
                    formButton.click(); return;
        }}}
    },

    reviewCode: function() { chatgpt.code.review(); },

    scrollToBottom: function() {
        try { document.querySelector('button[class*="cursor"][class*="bottom"]').click(); }
        catch (err) { console.error('', err); }
    },

    send: function(msg, method='') {
        for (let i = 0; i < arguments.length; i++) if (typeof arguments[i] !== 'string')
            return console.error(`Argument ${ i + 1 } must be a string!`);
        const textArea = document.querySelector('form textarea'),
              sendButton = document.querySelector('form button[class*="bottom"]');
        textArea.value = msg;
        textArea.dispatchEvent(new Event('input', { bubbles: true })); // enable send button
        const delaySend = setInterval(() => {
            if (!sendButton?.hasAttribute('disabled')) { // send msg
                method.toLowerCase() == 'click' || chatgpt.browser.isMobile() ? sendButton.click()
                    : textArea.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 13, bubbles: true }));
                clearInterval(delaySend);
            }
        }, 25);
    },

    sendInNewChat: function(msg) {
        if (typeof msg !== 'string') return console.error('Message must be a string!');
        for (const navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) {
            if (/(new|clear) chat/i.test(navLink.text)) {
                navLink.click(); break;
        }} setTimeout(() => { chatgpt.send(msg); }, 500);
    },

    settings: {
        scheme: {
            isDark: function() { return document.documentElement.classList.contains('dark'); },
            isLight: function() { return document.documentElement.classList.contains('light'); },
            set: function(value) {

                // Validate value
                const validValues = ['dark', 'light', 'system'];
                if (!value) return console.error('Please specify a scheme value!');
                if (!validValues.includes(value)) return console.error(`Invalid scheme value. Valid values are [${ validValues }]`);

                // Determine scheme to set
                let schemeToSet = value;
                if (value == 'system') schemeToSet = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                localStorage.setItem('theme', value);
                console.info(`Scheme set to ${ value.toUpperCase() }.`);

                // Toggle scheme if necessary
                if (!document.documentElement.classList.contains(schemeToSet)) this.toggle();
            },
            toggle: function() {
                const [schemeToRemove, schemeToAdd] = this.isDark() ? ['dark', 'light'] : ['light', 'dark'];
                document.documentElement.classList.replace(schemeToRemove, schemeToAdd);
                document.documentElement.style.colorScheme = schemeToAdd;
                localStorage.setItem('theme', schemeToAdd);
            }
        }
    },

    sentiment: async function(text, entity) {
        for (let i = 0; i < arguments.length; i++) if (typeof arguments[i] !== 'string')
            return console.error(`Argument ${ i + 1 } must be a string.`);
        chatgpt.send('What is the sentiment of the following text'
            + ( entity ? ` towards the entity ${ entity },` : '')
            + ' from strongly negative to strongly positive?\n\n' + text );
        console.info('Analyzing sentiment...');
        await chatgpt.isIdle();
        return chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest');
    },

    setScheme: function(value) { chatgpt.settings.scheme.set(value); },

    shareChat: function(chatToGet, method = 'clipboard') {
    // chatToGet = index|title|id of chat to get (defaults to latest if '' or unpassed)
    // method = [ 'alert'|'clipboard' ] (defaults to 'clipboard' if '' or unpassed)

        const validMethods = ['alert', 'notify', 'notification', 'clipboard', 'copy'];
        if (!validMethods.includes(method)) return console.error(
            'Invalid method \'' + method + '\' passed. Valid methods are [' + validMethods + '].');

        const getChatNode = token => {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                chatgpt.getChatData(chatToGet).then(chat => {
                    xhr.open('GET', `${ endpoints.openAI.chat }/${ chat.id }`, true);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                    xhr.onload = () => {
                        if (xhr.status !== 200)
                            return reject('🤖 chatgpt.js >> Request failed. Cannot retrieve chat node.');
                        return resolve(JSON.parse(xhr.responseText).current_node); // chat messages until now
                    };
                    xhr.send();
        });});};

        const makeChatToShare = (token, node) => {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                chatgpt.getChatData(chatToGet).then(chat => {
                    xhr.open('POST', endpoints.openAI.share_create, true);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                    xhr.onload = () => {
                        if (xhr.status !== 200)
                            return reject('🤖 chatgpt.js >> Request failed. Cannot initialize share chat.');
                        return resolve(JSON.parse(xhr.responseText)); // return untouched data
                    };
                    xhr.send(JSON.stringify({ // request body
                        current_node_id: node, // by getChatNode
                        conversation_id: chat.id, // current chat id
                        is_anonymous: true // show user name in the conversation or not
                    }));
        });});};

        const confirmShareChat = (token, data) => {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('PATCH', `${ endpoints.openAI.share }/${ data.share_id }`, true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.setRequestHeader('Authorization', 'Bearer ' + token);
                xhr.onload = () => {
                    if (xhr.status !== 200)
                        return reject('🤖 chatgpt.js >> Request failed. Cannot share chat.');
                    console.info(`Chat shared at '${ data.share_url }'`);
                    return resolve(); // the response has nothing useful
                };
                xhr.send(JSON.stringify({ // request body
                    share_id: data.share_id,
                    highlighted_message_id: data.highlighted_message_id,
                    title: data.title,
                    is_public: true, // must be true or it'll cause a 404 error
                    is_visible: data.is_visible,
                    is_anonymous: data.is_anonymous
                }));
        });};

        return new Promise((resolve) => {
            chatgpt.getAccessToken().then(token => { // get access token
                getChatNode(token).then(node => { // get chat node
                    makeChatToShare(token, node).then(data => {
                        confirmShareChat(token, data).then(() => {
                            if (['copy', 'clipboard'].includes(method)) navigator.clipboard.writeText(data.share_url);
                            else chatgpt.alert('🚀 Share link created!',
                                '"' + data.title + '" is available at: <a target="blank" rel="noopener" href="'
                                    + data.share_url + '" >' + data.share_url + '</a>',
                                [ function openLink() { window.open(data.share_url, '_blank', 'noopener'); },
                                    function copyLink() { navigator.clipboard.writeText(data.share_url); }]);
                            resolve(data.share_url);
        });});});});});
    },

    sidebar: {
        elements: [], observer: {},

        activateObserver: function() {
            const chatHistoryNav = document.querySelector('nav[aria-label="Chat history"]'),
                firstButton = chatHistoryNav.querySelector('a');
            if (chatgpt.history.isOff()) // Hide enable history spam div
                try { firstButton.parentNode.nextElementSibling.style.display = 'none'; } catch (err) {}

            // Stop the previous observer to preserve resources
            if (this.observer instanceof MutationObserver)
                try { this.observer.disconnect(); } catch (e) {}

            if (!this.elements.length) return console.error('🤖 chatgpt.js >> No elements to append!');

            let cssClasses;
            // Grab CSS from original website elements
            for (let navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) {
                if (/.*chat/.exec(navLink.text)[0]) {
                    cssClasses = navLink.classList;
                    navLink.parentNode.style.margin = '2px 0'; // add v-margins to ensure consistency across all inserted buttons
                    break;
                }
            }
    
            // Apply CSS to make the added elements look like they belong to the website
            this.elements.forEach(element => {
                element.setAttribute('class', cssClasses);
                element.style.maxHeight = element.style.minHeight = '44px'; // Fix the height of the element
                element.style.margin = '2px 0';
            });
    
            const navBar = document.querySelector('nav[aria-label="Chat history"]');
            // Create MutationObserver instance
            this.observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    if ((mutation.type == 'childList' && mutation.addedNodes.length) ||
                        (mutation.type == 'attributes' && mutation.attributeName == 'data-chatgptjs')) // check for trigger
                        // Try to insert each element...
                        this.elements.forEach(element => {
                            // ...if it's not already present...
                            if (!navBar.contains(element))
                                try {
                                    // ...at the top of the sidebar
                                    navBar.insertBefore(element, navBar.querySelector('a').parentNode);
                                } catch (err) { console.error(err); }
                            });
                });
            });

            this.observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true });
        },

        append: function(element, attrs = {}) {
        // element = 'button' | 'dropdown' REQUIRED (no default value)
        // attrs = { ... }
        // attrs for 'button': 'icon' = src string, 'label' = string, 'onclick' = function
        // attrs for 'dropdown': 'items' = [ { text: string, value: string }, ... ] array of objects
        // where 'text' is the displayed text of the option and 'value' is the value of the option
            const validElements = ['button', 'dropdown'];
            if (!element || typeof element !== 'string') // Element not passed or invalid type
                return console.error('🤖 chatgpt.js >> Please supply a valid string element name!');
            element = element.toLowerCase();
            if (!validElements.includes(element)) // Element not in list
                return console.error(`🤖 chatgpt.js >> Invalid element! Valid elements are [${validElements}]`);

            const newElement = document.createElement(element == 'dropdown' ? 'select' : element);
            newElement.id = Math.floor(chatgpt.randomFloat() * 1000000) + Date.now(); // Add random id to the element

            if (element == 'button') {
                newElement.textContent = attrs?.label && typeof attrs.label == 'string'
                    ? attrs.label
                    : 'chatgpt.js button';

                const icon = document.createElement('img');
                icon.src = attrs?.icon && typeof attrs.icon == 'string' // Can also be base64 encoded image string
                    ? attrs.icon // Add icon to button element if given, else default one
                    : ( endpoints.assets + '/starters/chrome/extension/icons/icon128.png' );
                icon.width = 18;
                newElement.insertBefore(icon, newElement.firstChild);

                newElement.onclick = attrs?.onclick && typeof attrs.onclick == 'function'
                    ? attrs.onclick
                    : function() {};
            }

            else if (element == 'dropdown') {
                if (!attrs?.items || // There no are options to add 
                    !Array.isArray(attrs.items) || // It's not an array
                    !attrs.items.length) // The array is empty
                        attrs.items = [{ text: '🤖 chatgpt.js option', value: 'chatgpt.js option value' }]; // Set default dropdown entry

                if (!attrs.items.every(el => typeof el == 'object')) // The entries of the array are not objects
                    return console.error('\'items\' must be an array of objects!');

                attrs.items.forEach(item => {
                    const optionElement = document.createElement('option');
                    optionElement.textContent = item?.text;
                    optionElement.value = item?.value;
                    newElement.add(optionElement);
                });
            }
                        

            // Fix for blank background on dropdown elements
            if (element == 'dropdown') newElement.style.backgroundColor = 'var(--gray-900, rgb(32, 33, 35))';

            this.elements.push(newElement);
            this.activateObserver();
            document.body.setAttribute('data-chatgptjs', 'observer-trigger'); // add attribute to trigger the observer

            return newElement.id; // Return the element id
        },

        hide: function() { this.isOn() ? this.toggle() : console.info('Sidebar already hidden!'); },
        show: function() { this.isOff() ? this.toggle() : console.info('Sidebar already shown!'); },
        isOff: function() { return !this.isOn(); },
        isOn: function() {
            return chatgpt.browser.isMobile() ?
                document.documentElement.style.overflow == 'hidden'
              : document.querySelector('#__next > div > div').style.visibility != 'hidden';
        },

        toggle: function() {
            const isMobileDevice = chatgpt.browser.isMobile(),
                  navBtnSelector = isMobileDevice ? '#__next button' : 'main button' ,
                  isToggleBtn = isMobileDevice ? () => true // since 1st one is toggle
                              : btn => Array.from(btn.querySelectorAll('*'))
                                            .some(child => child.style.transform.includes('translateY'));
            for (const btn of document.querySelectorAll(navBtnSelector))
                if (isToggleBtn(btn)) { btn.click(); return; }
        }
    },

    startNewChat: function() {
        for (const navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) {
            if (/(new|clear) chat/i.test(navLink.text)) {
                navLink.click(); return;
    }}},

    stop: function() {
        for (const formButton of document.querySelectorAll('form button')) {
            if (formButton.textContent.toLowerCase().includes('stop')) {
                formButton.click(); return;
    }}},

    suggest: async function(ideaType, details) {
        if (!ideaType) return console.error('ideaType (1st argument) not supplied'
            + '(e.g. \'gifts\', \'names\', \'recipes\', etc.)');
        for (let i = 0; i < arguments.length; i++) if (typeof arguments[i] !== 'string')
            return console.error(`Argument ${ i + 1 } must be a string.`);
        chatgpt.send('Suggest some names. ' + ( details || '' ));
        console.info(`Creating ${ ideaType }...`);
        await chatgpt.isIdle();
        return chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest');
    },

    speak: function(msg, options = {}) {
    // Usage example: chatgpt.speak(await chatgpt.getLastResponse(), { voice: 1, pitch: 2, speed: 3 })
    // options.voice = index of voices available on user device
    // options.pitch = float for pitch of speech from 0 to 2
    // options.speed = float for rate of speech from 0.1 to 10

        const { voice = 2, pitch = 2, speed = 1.1 } = options;

        // Validate args
        if (typeof msg !== 'string') return console.error('Message must be a string!');
        for (let key in options) {
            const value = options[key];
            if (typeof value !== 'number' && !/^\d+$/.test(value))
                return console.error(`Invalid ${ key } index '${ value }'. Must be a number!`);
        }

        try { // to speak msg using {options}
            const voices = speechSynthesis.getVoices(),
                  utterance = new SpeechSynthesisUtterance();
            utterance.text = msg;
            utterance.voice = voices[voice];
            utterance.pitch = pitch;
            utterance.rate = speed;
            speechSynthesis.speak(utterance);
        } catch (err) { console.error( err); }
    },

    summarize: async function(text) {
        if (!text) return console.error('Text (1st) argument not supplied. Pass some text!');
        if (typeof text !== 'string') return console.error('Text argument must be a string!');
        chatgpt.send('Summarize the following text:\n\n' + text);
        console.info('Summarizing text...');
        await chatgpt.isIdle();
        return chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest');
    },

    toggleScheme: function() { chatgpt.settings.scheme.toggle(); },

    translate: async function(text, outputLang) {
        if (!text) return console.error('Text (1st) argument not supplied. Pass some text!');
        if (!outputLang) return console.error('outputLang (2nd) argument not supplied. Pass a language!');
        for (let i = 0; i < arguments.length; i++) if (typeof arguments[i] !== 'string')
            return console.error(`Argument ${ i + 1 } must be a string!`);
        chatgpt.send('Translate the following text to ' + outputLang 
            + '. Only reply with the translation.\n\n' + text);
        console.info('Translating text...');
        await chatgpt.isIdle();
        return chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest');
    },

    unminify: function() { chatgpt.code.unminify(); },

    uuidv4: function() {
        let d = new Date().getTime(); // get current timestamp in ms (to ensure UUID uniqueness)
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = ( // generate random nibble
                ( d + (window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1))*16)%16 | 0 );
            d = Math.floor(d/16); // correspond each UUID digit to unique 4-bit chunks of timestamp
            return ( c == 'x' ? r : (r&0x3|0x8) ).toString(16); // generate random hexadecimal digit
        });
        return uuid;
    },

    writeCode: function() { chatgpt.code.write(); }
};

chatgpt.scheme = { ...chatgpt.settings.scheme }; // copy `chatgpt.settings.scheme` methods into `chatgpt.scheme`

// Create chatgpt.[actions]Button(identifier) functions
const buttonActions = ['click', 'get'], targetTypes = [ 'button', 'link', 'div', 'response' ];
for (const buttonAction of buttonActions) {
    chatgpt[buttonAction + 'Button'] = function handleButton(buttonIdentifier) {
        const button = /^[.#]/.test(buttonIdentifier) ? document.querySelector(buttonIdentifier)
            : /send/i.test(buttonIdentifier) ? document.querySelector('form button[class*="bottom"]')
            : /scroll/i.test(buttonIdentifier) ? document.querySelector('button[class*="cursor"]')
            : (function() { // get via text content
                for (const button of document.querySelectorAll('button')) { // try buttons
                    if (button.textContent.toLowerCase().includes(buttonIdentifier.toLowerCase())) {
                        return button; }}
                for (const navLink of document.querySelectorAll('nav a')) { // try nav links if no button
                    if (navLink.textContent.toLowerCase().includes(buttonIdentifier.toLowerCase())) {
                        return navLink; }}})();
        if (buttonAction == 'click') { button.click(); } else { return button; }
    };
}

// Create alias functions
const functionAliases = [
    ['actAs', 'actas', 'act', 'become', 'persona', 'premadePrompt', 'preMadePrompt', 'prePrompt', 'preprompt', 'roleplay', 'rolePlay', 'rp'],
    ['activateAutoRefresh', 'activateAutoRefresher', 'activateRefresher', 'activateSessionRefresher',
        'autoRefresh', 'autoRefresher', 'autoRefreshSession', 'refresher', 'sessionRefresher'],
    ['deactivateAutoRefresh', 'deactivateAutoRefresher', 'deactivateRefresher', 'deactivateSessionRefresher'],
    ['detectLanguage', 'getLanguage'],
    ['executeCode', 'codeExecute'],
    ['exportChat', 'chatExport', 'export'],
    ['getLastPrompt', 'getLastQuery', 'getMyLastMsg', 'getMyLastQuery'],
    ['getTextarea', 'getTextArea', 'getChatbox', 'getChatBox'],
    ['isFullScreen', 'isFullscreen'],
    ['logOut', 'logout', 'logOff', 'logoff', 'signOut', 'signout', 'signOff', 'signoff'],
    ['minify', 'codeMinify', 'minifyCode'],
    ['new', 'newChat', 'startNewChat'],
    ['obfuscate', 'codeObfuscate', 'obfuscateCode'],
    ['printAllFunctions', 'showAllFunctions'],
    ['refactor', 'codeRefactor', 'refactorCode'],
    ['refreshReply', 'regenerate', 'regenerateReply'],
    ['refreshSession', 'sessionRefresh'],
    ['renderHTML', 'renderHtml', 'renderLinks', 'renderTags'],
    ['reviewCode', 'codeReview'],
    ['send', 'sendChat', 'sendMsg'],
    ['sendInNewChat', 'sendNewChat'],
    ['sentiment', 'analyzeSentiment', 'sentimentAnalysis'],
    ['stop', 'stopGenerating'],
    ['suggest', 'suggestion', 'recommend'],
    ['toggleAutoRefresh', 'toggleAutoRefresher', 'toggleRefresher', 'toggleSessionRefresher'],
    ['toggleScheme', 'toggleMode'],
    ['translate', 'translation', 'translator'],
    ['unminify', 'unminifyCode', 'codeUnminify'],
    ['writeCode', 'codeWrite']
];
const synonyms = [
    ['account', 'acct'],
    ['activate', 'turnOn'],
    ['analyze', 'check', 'evaluate', 'review'],
    ['ask', 'send', 'submit'],
    ['chat', 'conversation', 'convo'],
    ['data', 'details'],
    ['deactivate', 'deActivate', 'turnOff'],
    ['execute', 'interpret', 'interpreter', 'run'],
    ['generating', 'generation'],
    ['minify', 'uglify'],
    ['refactor', 'rewrite'],
    ['regenerate', 'regen'],
    ['render', 'parse'],
    ['reply', 'response'],
    ['sentiment', 'attitude', 'emotion', 'feeling', 'opinion', 'perception'],
    ['speak', 'say', 'speech', 'talk', 'tts'],
    ['summarize', 'tldr'],
    ['unminify', 'beautify', 'prettify', 'prettyPrint']
];
const camelCaser = (words) => {
    return words.map((word, index) => index === 0 || word == 's' ? word : word.charAt(0).toUpperCase() + word.slice(1)).join(''); };
for (const prop in chatgpt) {

    // Create new function for each alias
    for (const subAliases of functionAliases) {
        if (subAliases.includes(prop)) {
            if (subAliases.some(element => element.includes('.'))) {
                const nestedFunction = subAliases.find(element => element.includes('.')).split('.')[1];
                for (const nestAlias of subAliases) {
                    if (/^(\w+)/.exec(nestAlias)[1] !== prop) { // don't alias og function
                        chatgpt[nestAlias] = chatgpt[prop][nestedFunction]; // make new function, reference og one
            }}} else { // alias direct functions
                for (const dirAlias of subAliases) {
                    if (dirAlias !== prop) { // don't alias og function
                        chatgpt[dirAlias] = chatgpt[prop]; // make new function, reference og one
            }}}
    }}

    do { // create new function per synonym per word per function
        var newFunctionsCreated = false;
        for (const funcName in chatgpt) {
            if (typeof chatgpt[funcName] == 'function') {
                const funcWords = funcName.split(/(?=[A-Zs])/); // split function name into constituent words
                for (const funcWord of funcWords) {
                    const synonymValues = [].concat(...synonyms // flatten into single array w/ word's synonyms
                        .filter(arr => arr.includes(funcWord.toLowerCase())) // filter in relevant synonym sub-arrays
                        .map(arr => arr.filter(synonym => synonym !== funcWord.toLowerCase()))); // filter out matching word
                    for (const synonym of synonymValues) { // create function per synonym
                        const newFuncName = camelCaser(funcWords.map(word => (word == funcWord ? synonym : word)));
                        if (!chatgpt[newFuncName]) { // don't alias existing functions
                            chatgpt[newFuncName] = chatgpt[funcName]; // make new function, reference og one
                            newFunctionsCreated = true;
    }}}}}} while (newFunctionsCreated); // loop over new functions to encompass all variations
}

// Prefix console logs w/ '🤖 chatgpt.js >> '
const consolePrefix = '🤖 chatgpt.js >> ', ogError = console.error, ogInfo = console.info;
console.error = (...args) => {
    if (!args[0].startsWith(consolePrefix)) ogError(consolePrefix + args[0], ...args.slice(1)); 
    else ogError(...args);
};
console.info = (msg) => {
    if (!msg.startsWith(consolePrefix)) ogInfo(consolePrefix + msg);
    else ogInfo(msg);
};

// Export chatgpt object
try { window.chatgpt = chatgpt; } catch (err) {} // for Greasemonkey
try { module.exports = chatgpt; } catch (err) {} // for CommonJS
export { chatgpt };
