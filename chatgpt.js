// (c) 2023 KudoAI & contributors under the MIT license
// Source: https://github.com/chatgptjs/chatgpt.js

var alertProps = { queue: [] };
var notifyProps = { quadrants: { topRight: [], bottomRight: [], bottomLeft: [], topLeft: [] }};
localStorage.alertProps = JSON.stringify(alertProps);
localStorage.notifyProps = JSON.stringify(notifyProps);

var functionAliases = [ // whole function names to cross-alias
    ['activateAutoRefresh', 'activateAutoRefresher', 'activateRefresher', 'activateSessionRefresher',
        'autoRefresh', 'autoRefresher', 'autoRefreshSession', 'refresher', 'sessionRefresher'],
    ['deactivateAutoRefresh', 'deactivateAutoRefresher', 'deactivateRefresher', 'deactivateSessionRefresher'],
    ['new', 'newChat', 'startNewChat'],
    ['printAllFunctions', 'showAllFunctions'],
    ['refreshSession', 'sessionRefresh'],
    ['refreshReply', 'regenerate', 'regenerateReply'],
    ['send', 'sendChat', 'sendMsg'],
    ['sendInNewChat', 'sendNewChat'],
    ['stop', 'stopGenerating'],
    ['toggleScheme', 'toggleMode'],
    ['toggleAutoRefresh', 'toggleAutoRefresher', 'toggleRefresher', 'toggleSessionRefresher']
];

var synonyms = [ // constituent synonyms within function names
    ['activate', 'turnOn'],
    ['chat', 'conversation', 'convo'],
    ['generating', 'generation'],
    ['reply', 'response'],
    ['send', 'submit']
];

var targetTypes = [ // for abstracted methods like get, insert
    'button', 'link', 'div', 'response'
];

var chatgpt = {

    activateDarkMode: function() {
        if (chatgpt.isLightMode()) {
            var menuBtn = document.querySelector('nav button[id*="headless"]') || {};
            try { menuBtn.click(); } catch (error) { console.error('🤖 chatgpt.js >> Headless menu not found'); return; }
            setTimeout(() => { // open settings
                var menuItems = document.querySelectorAll('a[role="menuitem"]') || [];
                for (var menuItem of menuItems) {
                    if (menuItem.text.match(/settings/i)) { menuItem.click(); break; }
                } setTimeout(() => { // activate dark mode
                    var themeSelector = document.querySelector('div[id*="radix"] select') || {};
                    try { themeSelector.value = 'dark'; themeSelector.dispatchEvent(new Event('change', { bubbles: true })); }
                    catch (error) { console.error('🤖 chatgpt.js >> Theme selector not found'); return; } 
                    document.querySelector('div[id*="radix"] button').click(); // close settings
                }, 10);
            }, 10);
        } else console.info('🤖 chatgpt.js >> ChatGPT is already in dark mode!');
    },

    activateLightMode: function() {
        if (chatgpt.isDarkMode()) {
            var menuBtn = document.querySelector('nav button[id*="headless"]') || {};
            try { menuBtn.click(); } catch (error) { console.error('🤖 chatgpt.js >> Headless menu not found'); return; }
            setTimeout(() => { // open settings
                var menuItems = document.querySelectorAll('a[role="menuitem"]') || [];
                for (var menuItem of menuItems) {
                    if (menuItem.text.match(/settings/i)) { menuItem.click(); break; }
                } setTimeout(() => { // activate light mode
                    var themeSelector = document.querySelector('div[id*="radix"] select') || {};
                    try { themeSelector.value = 'light'; themeSelector.dispatchEvent(new Event('change', { bubbles: true })); }
                    catch (error) { console.error('🤖 chatgpt.js >> Theme selector not found'); return; } 
                    document.querySelector('div[id*="radix"] button').click(); // close settings
                }, 10);
            }, 10);
        } else console.info('🤖 chatgpt.js >> ChatGPT is already in light mode!');
    },

    alert: function(title, msg, btns, checkbox, width) {
    // [ title/msg = strings, btns = [named functions], checkbox = named function, width (px) = int ] = optional

        // Create modal parent/children elements
        var modalContainer = document.createElement('div');
        modalContainer.id = Math.floor(Math.random() * 1000000) + Date.now();
        modalContainer.classList.add('chatgpt-modal'); // add class to main div
        var modal = document.createElement('div');
        var modalTitle = document.createElement('h2');
        var modalMessage = document.createElement('p');

        // Create/append style if necessary
        if (!document.querySelector('#chatgpt-alert-style')) {
            var scheme = chatgpt.isDarkMode() ? 'dark' : 'light';
            var modalStyle = document.createElement('style');
            modalStyle.id = 'chatgpt-alert-style';
            modalStyle.innerHTML = (

                // Background styles
                '.chatgpt-modal {' 
                    + 'position: fixed ; top: 0 ; left: 0 ; width: 100% ; height: 100% ;' // expand to full view-port
                    + 'background-color: rgba(67, 70, 72, 0.75) ;' // dim bg
                    + 'display: flex ; justify-content: center ; align-items: center ; z-index: 9999 }' // align

                // Alert styles
                + '.chatgpt-modal > div {'
                    + `background-color: ${ scheme == 'dark' ? 'black' : 'white' } ;`
                    + `max-width: ${ width ? width : 454 }px ;`
                    + 'padding: 20px ; margin: 12px 23px ; border-radius: 5px ; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3) }'
                + '.chatgpt-modal h2 { margin-bottom: 9px }'
                + `.chatgpt-modal p > a { color: ${ scheme == 'dark' ? '#00cfff' : '#1e9ebb' }}`

                // Button styles
                + '.modal-buttons { display: flex ; justify-content: flex-end ; margin: 20px -5px -3px 0 }'
                + '.chatgpt-modal button {'
                    + 'margin-left: 10px ; padding: 4px 18px ; border-radius: 15px ;'
                    + `border: 1px solid ${ scheme == 'dark' ? 'white' : 'black' }}`
                + '.primary-modal-btn {'
                    + `border: 1px solid ${ scheme == 'dark' ? 'white' : 'black' } ;`
                    + `background: ${ scheme == 'dark' ? 'white' : 'black' } ;`
                    + `color: ${ scheme == 'dark' ? 'black' : 'white' }}`
                + '.chatgpt-modal button:hover { background-color: #42B4BF ; border-color: #42B4BF ; color: black }'

                /* Checkbox styles */
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
            document.head.appendChild(modalStyle);
        }

        // Insert text into elements
        modalTitle.innerHTML = title ? title : ''; modalMessage.innerHTML = msg ? msg : '';

        // Create/append buttons (if provided) to buttons div
        var modalButtons = document.createElement('div');
        modalButtons.classList.add('modal-buttons');
        if (btns) { // are supplied
            if (!Array.isArray(btns)) btns = [btns]; // convert single button to array if necessary
            btns.forEach(function(buttonFn) { // create title-cased labels + attach listeners
                var button = document.createElement('button');
                button.textContent = buttonFn.name.charAt(0).toUpperCase() // cap 1st char
                                   + buttonFn.name.slice(1).replace(/([A-Z])/g, ' $1').trim(); // insert spaces
                button.addEventListener('click', function() { destroyAlert(); buttonFn(); });
                modalButtons.insertBefore(button, modalButtons.firstChild); // insert button to left
            });
        }

        // Create/append OK/dismiss button to buttons div
        var dismissBtn = document.createElement('button');
        dismissBtn.textContent = btns ? 'Dismiss' : 'OK';
        dismissBtn.addEventListener('click', destroyAlert);
        modalButtons.insertBefore(dismissBtn, modalButtons.firstChild);

        // Highlight primary button
        modalButtons.lastChild.classList.add('primary-modal-btn');

        // Create/append checkbox (if provided) to checkbox group div
        var checkboxDiv = document.createElement('div');
        if (checkbox) { // is supplied
            checkboxDiv.classList.add('checkbox-group');
            var checkboxFn = checkbox; // assign the named function to checkboxFn
            var checkboxInput = document.createElement('input');
            checkboxInput.type = 'checkbox';
            checkboxInput.addEventListener('change', checkboxFn);

            // Create/show label
            var checkboxLabel = document.createElement('label');
            checkboxLabel.addEventListener('click', function() {
                checkboxInput.checked = !checkboxInput.checked; checkboxFn(); });
            checkboxLabel.textContent = checkboxFn.name.charAt(0).toUpperCase() // capitalize first char
                + checkboxFn.name.slice(1) // format remaining chars
                    .replace(/([A-Z])/g, (match, letter) => ' ' + letter.toLowerCase()) // insert spaces, convert to lowercase
                    .replace(/\b(\w+)nt\b/gi, '$1n\'t') // insert apostrophe in 'nt' suffixes
                    .trim(); // trim leading/trailing spaces

            checkboxDiv.appendChild(checkboxInput); checkboxDiv.appendChild(checkboxLabel);
        }

        // Assemble/append div
        var elements = [modalTitle, modalMessage, modalButtons, checkboxDiv];
        elements.forEach(function(element) { modal.appendChild(element); });
        modalContainer.appendChild(modal); document.body.appendChild(modalContainer); 

        // Enqueue alert
        alertProps = JSON.parse(localStorage.alertProps);
        alertProps.queue.push(modalContainer.id);
        localStorage.alertProps = JSON.stringify(alertProps);

        // Add listeners
        document.addEventListener('keydown', keyHandler);
        modalContainer.addEventListener('click', function(event) {
            if (event.target === modalContainer) destroyAlert(); });

        // Show alert if none active
        modalContainer.style.display = (alertProps.queue.length === 1) ? '' : 'none';

        function destroyAlert() {
            modalContainer.remove(); // remove from DOM
            var alertProps = JSON.parse(localStorage.alertProps);
            alertProps.queue.shift(); // + memory
            localStorage.alertProps = JSON.stringify(alertProps); // + storage

            // Prevent memory leaks
            modalContainer.removeEventListener('click', destroyAlert);
            document.removeEventListener('keydown', keyHandler);
            dismissBtn.removeEventListener('click', destroyAlert);

            // Check for pending alerts in queue
            if (alertProps.queue.length > 0) {
                var nextAlert = document.getElementById(alertProps.queue[0]);
                setTimeout(() => { nextAlert.style.display = 'flex'; }, 500 );
            }
        }

        function keyHandler(event) {
            var dismissKeys = [13, 27, 32]; // enter/esc/space
            if (dismissKeys.includes(event.keyCode)) {
                for (var i = 0; i < alertProps.queue.length; i++) { // look to handle only if triggering alert is active
                    var alert = document.getElementById(alertProps.queue[i]);
                    if (alert && alert.style.display != 'none') { // active alert found
                        if (event.keyCode === 27) destroyAlert(); // if esc pressed, dismiss alert & do nothing
                        else if (event.keyCode === 32 || event.keyCode === 13) { // else if space/enter pressed
                            var mainButton = alert.querySelector('.modal-buttons').lastChild; // look for main button
                            if (mainButton) { mainButton.click(); event.preventDefault(); } // click if found
                        } return;
        }}}}

        return modalContainer.id;
    },

    autoRefresh: {
        activate: function(interval) {
            if (this.isActive) { // already running, do nothing
                console.info('↻ ChatGPT >> [' + chatgpt.autoRefresh.nowTimeStamp() + '] Auto refresh already active!'); return; }

            var autoRefresh = this;

            // Run main activate routine
            this.toggle.refreshFrame();
            scheduleRefreshes( interval ? parseInt(interval) : 30 );
            console.info('↻ ChatGPT >> [' + chatgpt.autoRefresh.nowTimeStamp() + '] Auto refresh activated');

            // Add listener to send beacons in Chromium to thwart auto-discards if Page Visibility API supported
            if (navigator.userAgent.includes('Chrome') && typeof document.hidden !== 'undefined') {
                document.addEventListener('visibilitychange', this.toggle.beacons); }

            function scheduleRefreshes(interval) {
                var randomDelay = Math.max(2, Math.floor(Math.random() * 21 - 10)); // set random delay up to ±10 secs
                autoRefresh.isActive = setTimeout(() => {
                    var refreshFrame = document.querySelector('#refresh-frame');
                    var manifestScript = document.querySelector('script[src*="_ssgManifest.js"]');
                    refreshFrame.src = manifestScript.src + '?' + Date.now();
                    console.info('↻ ChatGPT >> [' + autoRefresh.nowTimeStamp() + '] ChatGPT session refreshed');
                    scheduleRefreshes(interval);
                }, (interval + randomDelay) * 1000);
            }
        },

        deactivate: function() {
            if (this.isActive) {
                this.toggle.refreshFrame();
                document.removeEventListener('visibilitychange', this.toggle.beacons);
                clearTimeout(this.isActive); this.isActive = null;
                console.info('↻ ChatGPT >> [' + chatgpt.autoRefresh.nowTimeStamp() + '] Auto refresh de-activated');
            } else { console.info('↻ ChatGPT >> [' + chatgpt.autoRefresh.nowTimeStamp() + '] Auto refresh already inactive!'); }
        },

        nowTimeStamp: function() {
            var now = new Date();
            var hours = now.getHours() % 12 || 12; // Convert to 12-hour format
            var minutes = now.getMinutes(); var seconds = now.getSeconds();
            if (minutes < 10) minutes = '0' + minutes; if (seconds < 10) seconds = '0' + seconds;
            var meridiem = now.getHours() < 12 ? 'AM' : 'PM';
            return hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
        },

        toggle: {

            beacons: function() {
                if (chatgpt.autoRefresh.beaconID) {
                    clearInterval(chatgpt.autoRefresh.beaconID); chatgpt.autoRefresh.beaconID = null;
                    console.info('↻ ChatGPT >> [' + chatgpt.autoRefresh.nowTimeStamp() + '] Beacons de-activated');
                } else {
                    chatgpt.autoRefresh.beaconID = setInterval(function() {
                        navigator.sendBeacon('https://httpbin.org/post', new Uint8Array());
                        console.info('↻ ChatGPT >> [' + chatgpt.autoRefresh.nowTimeStamp() + '] Beacon sent');
                    }, 90000);
                    console.info('↻ ChatGPT >> [' + chatgpt.autoRefresh.nowTimeStamp() + '] Beacons activated');
                }
            },

            refreshFrame: function() {
                var refreshFrame = document.querySelector('#refresh-frame');
                if (refreshFrame) refreshFrame.remove();
                else {
                    refreshFrame = Object.assign(document.createElement('iframe'),
                        { id: 'refresh-frame', style: 'display: none' });
                    document.head.prepend(refreshFrame);
                }
            }
        }
    },

    clearChats: function() {
        let menuButton = document.querySelector('nav button[id*="headless"]');
        if (menuButton == null) return;
        menuButton.click();
        setTimeout(async function() {
            let menuItems = document.querySelectorAll('a[role="menuitem"]');
            let discard = false;
            if (menuItems.length < 4) {
                await new Promise((resolve) => {
                    let timer = setInterval(function() {
                        if (menuItems.length < 4) return;
                        clearInterval(timer); resolve();
                    }, 10);
                    setTimeout(() => { discard = true; clearInterval(timer); }, 10000);
            });}
            if (discard) { menuButton.click(); return; }
            let clearConversations = menuItems[1];
            clearConversations.click();
            setTimeout(() => { clearConversations.click(); }, 10);
        }, 10);
    },

    get: function(targetType, targetName = '') {

        // Validate argument types to be string only
        if (typeof targetType !== 'string' || typeof targetName !== 'string') {
            throw new TypeError('Invalid arguments. Both arguments must be strings.'); }

        // Validate targetType
        if (!targetTypes.includes(targetType.toLowerCase())) {
            throw new Error('Invalid targetType: ' + targetType
                + '. Valid values are: ' + JSON.stringify(targetTypes)); }

        // Validate targetName scoped to pre-validated targetType
        var targetNames = [], reTargetName = new RegExp('^get(.*)' + targetType + '$', 'i');
        for (var prop in this) {
            if (typeof this[prop] === 'function' && prop.match(reTargetName)) {
                targetNames.push( // add found targetName to valid array
                    prop.replace(reTargetName, '$1').toLowerCase());
        }}
        if (!targetNames.includes(targetName.toLowerCase())) {
            throw new Error('Invalid targetName: ' + targetName + '. '
                + (targetNames.length > 0 ? 'Valid values are: ' + JSON.stringify(targetNames)
                    : 'targetType ' + targetType.toLowerCase() + ' does not require additional options.'));
        }

        // Call target function using pre-validated name components
        var targetFuncNameLower = ('get' + targetName + targetType).toLowerCase();
        var targetFuncName = Object.keys(this).find( // find originally cased target function name
            function(name) { return name.toLowerCase() === targetFuncNameLower; }); // test for match
        return this[targetFuncName](); // call found function
    },

    getChatInput: function() {
        return document.querySelector('form textarea').value;
    },

    getLastResponse: function() {
        var lastResponseDiv = chatgpt.getLastResponseDiv();
        return lastResponseDiv ? lastResponseDiv.textContent : '';
    },

    getLastResponseDiv: function() {
        var responseDivs = document.querySelectorAll('main > div > div > div > div > div[class*=group] p');
        return responseDivs.length ? responseDivs[responseDivs.length - 1] : '';
    },

    getNewChatLink: function() {
        for (var navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) {
            if (navLink.text.match(/(new|clear) chat/i)) {
                return navLink;
    }}},

    getRegenerateButton: function() {
        for (var formButton of document.querySelectorAll('form button')) {
            if (formButton.textContent.toLowerCase().includes('regenerate')) {
                return formButton;
    }}},

    getResponse: function(pos) {
        var responseDivs = document.querySelectorAll('main > div > div > div > div > div[class*=group] p');
        var strPos = pos.toString().toLowerCase();
        if (/last|final/.test(strPos)) { // get last response
            return responseDivs.length ? responseDivs[responseDivs.length - 1].textContent : '';
        } else { // get nth response
            var nthOfResponse = (

                // Calculate base number
                Number.isInteger(pos) ? pos : // do nothing for integers
                strPos.match(/^\d+/) ? strPos.match(/^\d+/)[0] : // extract first digits for strings w/ them
                ( // convert words to integers for digitless strings
                    /^(1|one|fir)(st)?$/.test(strPos) ? 1
                    : /^(2|tw(o|en|el(ve|f))|seco)(nd|t[yi])?(e?th)?$/.test(strPos) ? 2
                    : /^(3|th(ree|ir?))(rd|teen|t[yi])?(e?th)?$/.test(strPos) ? 3
                    : /^(4|fou?r)(teen|t[yi])?(e?th)?$/.test(strPos) ? 4
                    : /^(5|fi(ve|f))(teen|t[yi])?(e?th)?$/.test(strPos) ? 5
                    : /^(6|six)(teen|t[yi])?(e?th)?$/.test(strPos) ? 6
                    : /^(7|seven)(teen|t[yi])?(e?th)?$/.test(strPos) ? 7
                    : /^(8|eight?)(teen|t[yi])?(e?th)?$/.test(strPos) ? 8
                    : /^(9|nine?)(teen|t[yi])?(e?th)?$/.test(strPos) ? 9
                    : /^(10|ten)(th)?$/.test(strPos) ? 10 : 1 )

                // Transform base number if suffixed
                * ( /ty|ieth$/.test(strPos) ? 10 : 1 ) // x 10 if -ty/ieth
                + ( /teen(th)?$/.test(strPos) ? 10 : 0 ) // + 10 if -teen/teenth

            );
            return responseDivs.length ? responseDivs[nthOfResponse - 1].textContent : '';
        }
    },

    getSendButton: function() {
        return document.querySelector('form button[class*="bottom"]');
    },

    getStopGeneratingButton: function() {
        for (var formButton of document.querySelectorAll('form button')) {
            if (formButton.textContent.toLowerCase().includes('stop')) {
                return formButton;
    }}},

    getTextarea: function() {
        return document.querySelector('form textarea');
    },

    history: {
        isOn: function() {
            for (var navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) {
                if (navLink.text.match(/new chat/i)) return true;
            } return false;
        },

        isOff: function() {
            for (var navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) {
                if (navLink.text.match(/new chat/i)) return false;
            } return true;
        },

        activate: function() { this.isOff() ? this.toggle() : console.info('🤖 chatgpt.js >> Chat history is already enabled!'); },
        deactivate: function() { this.isOn() ? this.toggle() : console.info('🤖 chatgpt.js >> Chat history is already disabled!'); },

        toggle: function() {                
            for (var navBtn of document.querySelectorAll('nav[aria-label="Chat history"] button')) {
                if (navBtn.textContent.match(/chat history/i))
                    navBtn.click(); return;
        }}
    },

    isDarkMode: function() { return document.documentElement.classList.contains('dark'); },

    isFullScreen: function() {
        var userAgentStr = navigator.userAgent;
        var browser = userAgentStr.includes('Chrome') ? 'chromium'
                    : userAgentStr.includes('Firefox') ? 'firefox'
                    : userAgentStr.match(/MSIE|rv:/) ? 'ie' : 'webkit';
        return browser === 'chromium' ? window.matchMedia('(display-mode: fullscreen)').matches
             : browser === 'firefox' ? window.fullScreen
             : browser === 'ie' ? document.msFullscreenElement : document.webkitIsFullScreen;
    },

    isIdle: function() {
        return new Promise(resolve => {
            var intervalId = setInterval(() => {
                if (chatgpt.getRegenerateButton()) {
                    clearInterval(intervalId); resolve();
    }}, 100);});},

    isLoaded: function() {
        return new Promise(resolve => {
            var intervalId = setInterval(() => {
                if (document.querySelector('form button[class*="bottom"]')) {
                    clearInterval(intervalId); resolve();
    }}, 100);});},

    isLightMode: function() { return document.documentElement.classList.contains('light'); },

    notify: function(msg, position, notifDuration, shadow) {
        notifDuration = notifDuration ? +notifDuration : 1.75; // sec duration to maintain notification visibility
        var fadeDuration = 0.6; // sec duration of fade-out
        var vpYoffset = 23, vpXoffset = 27; // px offset from viewport border

        // Make/stylize/insert div
        var notificationDiv = document.createElement('div'); // make div
        notificationDiv.id = Math.floor(Math.random() * 1000000) + Date.now();
        notificationDiv.style.cssText = ( // stylize it
            '/* Box style */   background-color: black ; padding: 10px ; border-radius: 8px ; '
            + '/* Visibility */  opacity: 0 ; position: fixed ; z-index: 9999 ; font-size: 1.8rem ; color: white ; '
            + ( shadow ? ( 'box-shadow: -8px 13px 25px 0 ' + ( /\b(shadow|on)\b/gi.test(shadow) ? 'gray' : shadow )) : '' ));
        document.body.appendChild(notificationDiv); // insert into DOM

        // Determine div position/quadrant
        notificationDiv.isTop = !position || !/low|bottom/i.test(position) ? true : false;
        notificationDiv.isRight = !position || !/left/i.test(position) ? true : false;
        notificationDiv.quadrant = (notificationDiv.isTop ? 'top' : 'bottom')
            + (notificationDiv.isRight ? 'Right' : 'Left');

        // Store div
        notifyProps = JSON.parse(localStorage.notifyProps);
        notifyProps.quadrants[notificationDiv.quadrant].push(notificationDiv.id);
        localStorage.notifyProps = JSON.stringify(notifyProps);

        // Position notification (defaults to top-right)
        notificationDiv.style.top = notificationDiv.isTop ? vpYoffset.toString() + 'px' : '';
        notificationDiv.style.bottom = !notificationDiv.isTop ? vpYoffset.toString() + 'px' : '';
        notificationDiv.style.right = notificationDiv.isRight ? vpXoffset.toString() + 'px' : '';
        notificationDiv.style.left = !notificationDiv.isRight ? vpXoffset.toString() + 'px' : '';

        // Reposition old notifications
        var thisQuadrantDivIDs = notifyProps.quadrants[notificationDiv.quadrant];
        if (thisQuadrantDivIDs.length > 1) {
            try { // to move old notifications
                var divsToMove = thisQuadrantDivIDs.slice(0, -1); // exclude new div
                for (var j = 0; j < divsToMove.length; j++) {
                    var oldDiv = document.getElementById(divsToMove[j]);
                    var offsetProp = oldDiv.style.top ? 'top' : 'bottom'; // pick property to change
                    var vOffset = +oldDiv.style[offsetProp].match(/\d+/)[0] + 5 + oldDiv.getBoundingClientRect().height;
                    oldDiv.style[offsetProp] = `${vOffset}px`; // change prop
                }
            } catch (error) {}
        }

        // Show notification
        notificationDiv.innerHTML = msg; // insert msg
        notificationDiv.style.transition = 'none'; // remove fade effect
        notificationDiv.style.opacity = 1; // show msg

        // Hide notification
        var hideDelay = ( // set delay before fading
            fadeDuration > notifDuration ? 0 // don't delay if fade exceeds notification duration
            : notifDuration - fadeDuration); // otherwise delay for difference
        notificationDiv.hideTimer = setTimeout(function hideNotif() { // maintain notification visibility, then fade out
            notificationDiv.style.transition = 'opacity ' + fadeDuration.toString() + 's'; // add fade effect
            notificationDiv.style.opacity = 0; // hide notification
            notificationDiv.hideTimer = null; // prevent memory leaks
        }, hideDelay * 1000); // ...after pre-set duration

        // Destroy notification
        notificationDiv.destroyTimer = setTimeout(function destroyNotif() {
            notificationDiv.remove(); // remove from DOM
            notifyProps = JSON.parse(localStorage.notifyProps);
            notifyProps.quadrants[notificationDiv.quadrant].shift(); // + memory
            localStorage.notifyProps = JSON.stringify(notifyProps); // + storage
            notificationDiv.destroyTimer = null; // prevent memory leaks
        }, Math.max(fadeDuration, notifDuration) * 1000); // ...after notification hid
    },

    printAllFunctions: function() {
        var functionNames = [];
        for (var prop in this) {
            if (typeof this[prop] === 'function') {
                var chatgptIsParent = !Object.keys(this).find(obj => Object.keys(this[obj]).includes(this[prop].name));
                var functionParent = chatgptIsParent ? 'chatgpt' : 'other';
                functionNames.push([functionParent, prop]);
            } else if (typeof this[prop] === 'object') {
                for (var nestedProp in this[prop]) {
                    if (typeof this[prop][nestedProp] === 'function') {
                        functionNames.push([prop, nestedProp]);
        }}}}
        functionNames.sort(function(a, b) { return a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]); });
        for (var functionName of functionNames) {
            console.info( '🤖 chatgpt.js >> ' + ( /chatgpt|other/.test(functionName[0]) ? '' : ( functionName[0] + '.' )) + functionName[1] + ': ['
                + ((( functionName[0] === 'chatgpt' && functionName[1] === this[functionName[1]].name ) || // parent is chatgpt + names match or
                    ( !/chatgpt|other/.test(functionName[0]) )) // parent is chatgpt.obj
                        ? 'Function' : 'Alias of' ) + ': '
                + ( functionName[0] === 'chatgpt' ? this[functionName[1]].name
                    : functionName[0] !== 'other' ? functionName[0] + '.' + functionName[1]
                    : (( Object.keys(this).find(obj => Object.keys(this[obj]).includes(this[functionName[1]].name)) + '.' )
                        + this[functionName[1]].name )) + ']' );
        }
    },

    regenerate: function() {
        for (var formButton of document.querySelectorAll('form button')) {
            if (formButton.textContent.toLowerCase().includes('regenerate')) {
                formButton.click; return;
    }}},

    scrollToBottom: function() {
        try { document.querySelector('button[class*="cursor"]').click(); } catch (error) {}
    },

    send: function(msg, method='') {
        var textArea = document.querySelector('form textarea');
        var sendButton = document.querySelector('form button[class*="bottom"]');
        textArea.value = msg;
        textArea.dispatchEvent(new Event('input', { bubbles: true })); // enable send button
        var delaySend = setInterval(function() {
            if (!sendButton.hasAttribute('disabled')) { // send msg
                method.toLowerCase() == 'click' ? sendButton.click()
                    : textArea.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 13, bubbles: true }));
                clearInterval(delaySend);
            }
        }, 25);
    },

    sendInNewChat: function(msg) {
        for (var navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) {
            if (navLink.text.match(/(new|clear) chat/i)) {
                navLink.click(); break;
        }} setTimeout(() => { chatgpt.send(msg); }, 500);
    },

    sidebar: {
        isOn: function() { return !document.querySelector('button[aria-label*="Show sidebar"]'); },
        isOff: function() { return document.querySelector('button[aria-label*="Show sidebar"]'); },
        hide: function() { this.isOn() ? this.toggle() : console.info( '🤖 chatgpt.js >> Sidebar already hidden!'); },
        show: function() { this.isOff() ? this.toggle() : console.info( '🤖 chatgpt.js >> Sidebar already shown!'); },

        toggle: function() {
            for (var navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) {
                if (navLink.text.match(/hide sidebar/i)) {
                    navLink.click(); return;                
        }}}
    },

    startNewChat: function() {
        for (var navLink of document.querySelectorAll('nav[aria-label="Chat history"] a')) {
            if (navLink.text.match(/(new|clear) chat/i)) {
                navLink.click(); return;
    }}},

    stop: function() {
        for (var formButton of document.querySelectorAll('form button')) {
            if (formButton.textContent.toLowerCase().includes('stop')) {
                formButton.click(); return;
    }}},

    toggleScheme: function() { chatgpt.isLightMode() ? chatgpt.activateDarkMode() : chatgpt.activateLightMode(); }

};

// Create chatgpt.[actions]Button(identifier) functions
var buttonActions = ['click', 'get'];
for (var buttonAction of buttonActions) {
    chatgpt[buttonAction + 'Button'] = function handleButton(buttonIdentifier) {
        var button = buttonIdentifier.match(
            /^[.#]/) ? document.querySelector(buttonIdentifier) // get via class or id selector
            : /send/i.test(buttonIdentifier) ? document.querySelector('form button[class*="bottom"]')
            : /scroll/i.test(buttonIdentifier) ? document.querySelector('button[class*="cursor"]')
            : (function() { // get via text content
                for (var button of document.querySelectorAll('button')) { // try buttons
                    if (button.textContent.toLowerCase().includes(buttonIdentifier.toLowerCase())) {
                        return button; }}
                for (var navLink of document.querySelectorAll('nav a')) { // try nav links if no button
                    if (navLink.textContent.toLowerCase().includes(buttonIdentifier.toLowerCase())) {
                        return navLink; }}})();
        if (buttonAction === 'click') { button.click(); } else { return button; }
    };
}

// Create alias functions
for (var prop in chatgpt) {

    // Create new function for each alias
    for (var subAliases of functionAliases) {
        if (subAliases.some(subAlias => subAlias.includes(prop))) {
            if (subAliases.some(element => element.includes('.'))) {
                var nestedFunction = subAliases.find(element => element.includes('.')).split('.')[1];
                for (var nestAlias of subAliases) {
                    if (nestAlias.match(/^(\w+)/)[1] !== prop) { // don't alias og function
                        chatgpt[nestAlias] = chatgpt[prop][nestedFunction]; // make new function, reference og one
            }}} else { // alias direct functions
                for (var dirAlias of subAliases) {
                    if (dirAlias !== prop) { // don't alias og function
                        chatgpt[dirAlias] = chatgpt[prop]; // make new function, reference og one
            }}}
    }}

    do { // create new function per synonym per word per function
        var newFunctionsCreated = false;
        for (var funcName in chatgpt) {
            if (typeof chatgpt[funcName] === 'function') {
                var funcWords = funcName.split(/(?=[A-Zs])/); // split function name into constituent words
                for (var funcWord of funcWords) {
                    var synonymValues = [].concat(...synonyms // flatten into single array w/ word's synonyms
                        .filter(arr => arr.includes(funcWord.toLowerCase())) // filter in relevant synonym sub-arrays
                        .map(arr => arr.filter(synonym => synonym !== funcWord.toLowerCase()))); // filter out matching word
                    for (var synonym of synonymValues) { // create function per synonym
                        var newWords = [...funcWords]; // shallow copy funcWords
                        newWords[newWords.indexOf(funcWord)] = synonym; // replace funcWord w/ synonym
                        var newFuncName = newWords.map((newWord, index) => // transform new words to create new name
                            index === 0 || newWord === 's' ? newWord : newWord.charAt(0).toUpperCase() + newWord.slice(1) // case each word to form camel
                        ).join(''); // concatenate transformed words
                        if (!chatgpt[newFuncName]) { // don't alias existing functions
                            chatgpt[newFuncName] = chatgpt[funcName]; // make new function, reference og one
                            newFunctionsCreated = true;
    }}}}}} while (newFunctionsCreated); // loop over new functions to encompass all variations
}

// Export chatgpt object
try { window.chatgpt = chatgpt; } catch (error) {} // for Greasemonkey
try { module.exports = chatgpt; } catch (error) {} // for CommonJS
