(function() {

    var chatGPTauthURL = 'https://chat.openai.com/api/auth/session';
    var autoRefreshTimer = 60; // secs between session auto-refreshes

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

    var navLinkLabels = {
        clearChats: 'Clear conversations',
        confirmClearChats: 'Confirm clear conversations',
        newChat: 'New chat'
    };

    var chatgpt = {

        activateAutoRefresh: function(secInterval='') {
            if (!this.activateAutoRefresh.intervalId) {
                console.info('Auto refresh activated');
                this.activateAutoRefresh.intervalId = setInterval(function() {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', chatGPTauthURL);
                    xhr.send(); console.info('ChatGPT session refreshed');
                }, (secInterval ? +secInterval : autoRefreshTimer) * 1000).bind(this);
            } else { console.info('Auto refresh already active!'); }
        },

        activateDarkMode: function() {
            for (var navLink of document.querySelectorAll('nav > a')) {
                if (navLink.text.toLowerCase().includes('dark mode')) {
                    navLink.click(); return;
        }}},

        activateLightMode: function() {
            for (var navLink of document.querySelectorAll('nav > a')) {
                if (navLink.text.toLowerCase().includes('light mode')) {
                    navLink.click(); return;
        }}},

        clearChats: function() {
            if (!this.clearChats.cnt) this.clearChats.cnt = 0;
            for (var navLink of document.querySelectorAll('nav > a')) {
                if (navLink.text.includes(navLinkLabels[(
                        this.clearChats.cnt > 0 ? 'confirmC' : 'c') + 'learChats'])) {
                    navLink.click(); this.clearChats.cnt++;
                    if (this.clearChats.cnt < 2) { // repeat to confirm
                        setTimeout(this.clearChats.bind(this), 500);
                    } else { this.clearChats.cnt = 0; }
                    return; // break navLink loop
        }}},

        deactivateAutoRefresh: function() {
            console.info(this.activateAutoRefresh.intervalId ?
                'Auto refresh de-activated' : 'Refresher is not running!');
            clearInterval(this.activateAutoRefresh.intervalId);
            this.activateAutoRefresh.intervalId = null;
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
            var responseDivs = document.querySelectorAll('main div[class*=group]');
            if (responseDivs.length < 2) return ''; // if no responses, return empty string
            return responseDivs[responseDivs.length - 1].textContent;
        },

        getLastResponseDiv: function() {
            var responseDivs = document.querySelectorAll('main div[class*=group]');
            return responseDivs[responseDivs.length - 1];
        },

        getNewChatLink: function() {
            for (var navLink of document.querySelectorAll('nav > a')) {
                if (navLink.text.includes(navLinkLabels.newChat)) {
                    return navLink;
        }}},

        getRegenerateButton: function() {
            for (var formButton of document.querySelectorAll('form button')) {
                if (formButton.textContent.toLowerCase().includes('regenerate')) {
                    return formButton;
        }}},

        getResponse: function(pos) {
            var responseDivSelector = 'main div[class*=group]';
            var strPos = pos.toString().toLowerCase();
            if (/last|final/.test(strPos)) { // get last response
                var responseDivs = document.querySelectorAll(responseDivSelector);
                if (responseDivs.length < 2) return ''; // if no responses, return empty string
                return responseDivs[responseDivs.length - 1].textContent;
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

                ) * 2; // factor for own msg's

                var responseDiv = document.querySelector(`${responseDivSelector}:nth-of-type(${nthOfResponse})`);
                return responseDiv ? responseDiv.textContent : '';
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

        notify: function(msg, position = '', notifDuration = '') {
            notifDuration = notifDuration ? +notifDuration : 1.75; // sec duration to maintain notification visibility
            var fadeDuration = 0.6; // sec duration of fade-out
            var vpYoffset = 13, vpXoffset = 27; // px offset from viewport border

            // Make/stylize/insert div
            var notificationDiv = document.createElement('div'); // make div
            notificationDiv.style.cssText = ( // stylize it
                '/* Box style */   background-color: black ; padding: 10px ; border-radius: 8px ; '
                + '/* Visibility */  opacity: 0 ; position: fixed ; z-index: 9999 ; font-size: 1.8rem ; color: white');
            document.body.appendChild(notificationDiv); // insert into DOM

            // Determine div position/quadrant
            notificationDiv.isTop = !/low|bottom/i.test(position) ? true : false;
            notificationDiv.isRight = !/left/i.test(position) ? true : false;
            notificationDiv.quadrant = (notificationDiv.isTop ? 'top' : 'bottom')
                                     + (notificationDiv.isRight ? 'Right' : 'Left');

            // Store div in memory
            for (var quadrant of ['topRight', 'bottomRight', 'bottomLeft', 'topLeft']) {
                if (!this.notify[quadrant]) this.notify[quadrant] = []; } // initialize storage arrays
            var thisQuadrantDivs = this.notify[notificationDiv.quadrant];
            thisQuadrantDivs.push(notificationDiv); // store div

            // Position notification (defaults to top-right)
            notificationDiv.style.top = notificationDiv.isTop ? `${vpYoffset}px` : '';
            notificationDiv.style.bottom = !notificationDiv.isTop ? `${vpYoffset}px` : '';
            notificationDiv.style.right = notificationDiv.isRight ? `${vpXoffset}px` : '';
            notificationDiv.style.left = !notificationDiv.isRight ? `${vpXoffset}px` : '';

            // Reposition old notifications
            if (thisQuadrantDivs.length > 1) {
                var divsToMove = thisQuadrantDivs.slice(0, -1); // exclude new div
                for (var oldDiv of divsToMove) {
                    var offsetProp = oldDiv.style.top ? 'top' : 'bottom'; // pick property to change
                    var vOffset = +oldDiv.style[offsetProp].match(/\d+/)[0] + 5 + oldDiv.getBoundingClientRect().height;
                    oldDiv.style[offsetProp] = `${vOffset}px`; // change prop
            }}

            // Show notification
            notificationDiv.innerHTML = msg; // insert msg
            notificationDiv.style.transition = 'none'; // remove fade effect
            notificationDiv.style.opacity = 1; // show msg

            // Hide notification
            var hideDelay = ( // set delay before fading
                fadeDuration > notifDuration ? 0 // don't delay if fade exceeds notification duration
                : notifDuration - fadeDuration); // otherwise delay for difference
            notificationDiv.hideTimer = setTimeout(function hideNotif() { // maintain notification visibility, then fade out
                notificationDiv.style.transition = `opacity ${fadeDuration}s`; // add fade effect
                notificationDiv.style.opacity = 0; // hide notification
                notificationDiv.hideTimer = null; // prevent memory leaks
            }, hideDelay * 1000); // ...after pre-set duration

            // Destroy notification
            notificationDiv.destroyTimer = setTimeout(function destroyNotif() {
                notificationDiv.remove(); thisQuadrantDivs.shift(); // remove from DOM + memory
                notificationDiv.destroyTimer = null; // prevent memory leaks
            }, Math.max(fadeDuration, notifDuration) * 1000); // ...after notification hid
        },

        printAllFunctions: function() {
            var functionNames = [];
            for (var prop in this) {
                if (typeof this[prop] === 'function') {
                    functionNames.push(prop);
            }}
            functionNames.sort(); // alphabetize functions
            for (var functionName of functionNames) {
                console.info(functionName + ': ['
                    + ( functionName === this[functionName].name ? 'Function' : 'Alias of' )
                    + ': ' + this[functionName].name + ']' );
            }
        },

        refreshSession: function() {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', chatGPTauthURL);
            xhr.send(); console.info('ChatGPT session refreshed');
        },

        regenerate: function() {
            for (var formButton of document.querySelectorAll('form button')) {
                if (formButton.textContent.toLowerCase().includes('regenerate')) {
                    formButton.click; return;
        }}},

        scrollToBottom: function() {
            document.querySelector('button[class*="cursor"]').click();
        },

        send: function(msg) {
            document.querySelector('form textarea').value = msg;
            document.querySelector('form button[class*="bottom"]').click();
        },

        sendInNewChat: function(msg) {
            for (var navLink of document.querySelectorAll('nav > a')) {
                if (navLink.text.includes(navLinkLabels.newChat)) {
                    navLink.click(); break;
            }}
            setTimeout(function() {
                document.querySelector('form textarea').value = msg;
                document.querySelector('form button[class*="bottom"]').click();
            }, 500);
        },

        startNewChat: function() {
            for (var navLink of document.querySelectorAll('nav > a')) {
                if (navLink.text.includes(navLinkLabels.newChat)) {
                    navLink.click(); return;
        }}},

        stop: function() {
            for (var formButton of document.querySelectorAll('form button')) {
                if (formButton.textContent.toLowerCase().includes('stop')) {
                    formButton.click(); return;
        }}},

        toggleAutoRefresh: function(secInterval='') {
            if (!this.activateAutoRefresh.intervalId) {
                console.info('Auto refresh activated');
                this.activateAutoRefresh.intervalId = setInterval(function() {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', chatGPTauthURL);
                    xhr.send(); console.info('ChatGPT session refreshed');
                }, (secInterval ? +secInterval : autoRefreshTimer) * 1000).bind(this);
            } else {
                clearInterval(this.activateAutoRefresh.intervalId);
                this.activateAutoRefresh.intervalId = null;
                console.info('Auto refresh deactivated');
            }
        },

        toggleScheme: function() {
            for (var navLink of document.querySelectorAll('nav > a')) {
                if (navLink.text.toLowerCase().includes('mode')) {
                    navLink.click(); return;
        }}}

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
                    for (var navLink of document.querySelectorAll('nav > a')) { // try nav links if no button
                        if (navLink.textContent.toLowerCase().includes(buttonIdentifier.toLowerCase())) {
                            return navLink; }}})();
            if (buttonAction === 'click') { button.click(); } else { return button; }
        };
    }

    // Create alias functions
    for (var prop in chatgpt) {
        if (typeof chatgpt[prop] === 'function') {

            // Create new function for each alias
            for (var subAliases of functionAliases) {
                if (subAliases.includes(prop)) {
                    for (var alias of subAliases) {
                        if (alias !== prop) { // don't alias og function
                            chatgpt[alias] = chatgpt[prop]; // make new function, reference og one
            }}}}

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
    }

    // Export chatgpt object
    try { window.chatgpt = chatgpt; } catch (error) { /* for Greasemonkey */ }
    try { module.exports = chatgpt; } catch (error) { /* for CommonJS */ }

})();
