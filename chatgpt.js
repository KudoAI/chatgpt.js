(() => {

    var notifyProps = { quadrants: { topRight: [], bottomRight: [], bottomLeft: [], topLeft: [] }};
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
                    autoRefresh.isActive = setTimeout(function() {
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

        activateDarkMode: function() {
            var menuButton = document.querySelector('nav button[id*="headless"]');            
            if (!menuButton) return; menuButton.click();
            setTimeout(function() {
                var menuItems = document.querySelectorAll('a[role="menuitem"]');
                menuItems[menuItems.length - 2].click(); // open settings
                setTimeout(function() {
                    var themeSelector = document.querySelector('div[id*="panel"] select');
                    themeSelector.value = 'dark';
                    themeSelector.dispatchEvent(new Event('change', { bubbles: true }));
                    document.querySelector('div[id*="panel"] button').click(); // close settings
                }, 10);
            }, 10);
        },

        activateLightMode: function() {
            var menuButton = document.querySelector('nav button[id*="headless"]');
            if (!menuButton) return; menuButton.click();
            setTimeout(function() {
                var menuItems = document.querySelectorAll('a[role="menuitem"]');
                menuItems[menuItems.length - 2].click(); // open settings
                setTimeout(function() {
                    var themeSelector = document.querySelector('div[id*="panel"] select');
                    themeSelector.value = 'light';
                    themeSelector.dispatchEvent(new Event('change', { bubbles: true }));
                    document.querySelector('div[id*="panel"] button').click(); // close settings
                }, 10);
            }, 10);
        },

        clearChats: async function() {
            return new Promise((resolve) => {
                let url = '/backend-api/conversations';
                let method = 'PATCH';
                let headers = {
                    'Authorization': 'Bearer ' + globalVariable.get('accessToken'),
                    'Content-Type': 'application/json'
                };
                let body = { is_visible: false };
                (async() => {
                    let response = await globalVariable.get('Fetch')(url, { method, headers, body: JSON.stringify(body) });
                    resolve(response);
                })();
           });
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
            for (var navLink of document.querySelectorAll('nav > a')) {
                if (navLink.text.includes('New chat')) {
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

        isDarkMode: function() { return document.documentElement.classList.contains('dark'); },

        isIdle: function() {
            return new Promise(resolve => {
                var intervalId = setInterval(() => {
                    if (chatgpt.getRegenerateButton()) {
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
                var divsToMove = thisQuadrantDivIDs.slice(0, -1); // exclude new div
                for (var j = 0; j < divsToMove.length; j++) {
                    var oldDiv = document.getElementById(divsToMove[j]);
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
                console.info( 'chatgpt.js >> ' + ( /chatgpt|other/.test(functionName[0]) ? '' : ( functionName[0] + '.' )) + functionName[1] + ': ['
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
            document.querySelector('button[class*="cursor"]').click();
        },

        send: function(msg) {
            var textArea = document.querySelector('form textarea');
            textArea.value = msg;
            textArea.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 13, bubbles: true }));
        },

        sendInNewChat: function(msg) {
            document.querySelector('nav > a').click();
            setTimeout(function() { chatgpt.send(msg); }, 500);
        },

        startNewChat: function() {
            for (var navLink of document.querySelectorAll('nav > a')) {
                if (navLink.text.includes('New chat')) {
                    navLink.click(); return;
        }}},

        stop: function() {
            for (var formButton of document.querySelectorAll('form button')) {
                if (formButton.textContent.toLowerCase().includes('stop')) {
                    formButton.click(); return;
        }}},

        toggleScheme: function() { chatgpt.isLightMode() ? chatgpt.activateDarkMode() : chatgpt.activateLightMode(); }

    };

    var globalVariable = new Map();
    var unsafeWindow = window.unsafeWindow || document.defaultView || window;
    var FetchMapList = new Map();

    function deliveryTask(callbackList, _object, period) {
        let newObject = _object;
        for (let i = 0; i < callbackList.length; i++) {
            let tempObject = null;
            try {
                tempObject = callbackList[i](newObject, period);
            } catch (e) {
                new Error(e);
            }
            if (tempObject == null) {
                continue;
            }
            newObject = tempObject;
        }
        return newObject;
    }

    function hookFetch() {
        const originalFetch = unsafeWindow.fetch;
        globalVariable.set('Fetch', originalFetch);
        unsafeWindow.fetch = (...args) => {
            let U = args[0];
            if (U.indexOf('http') == -1) {
                if (U[0] !== '/') {
                    let pathname = new URL(location.href).pathname;
                    U = pathname + U;
                }
                U = location.origin + U;
            }
            let apply = null;
            (() => {
                let url = new URL(U),
                    pathname = url.pathname,
                    callback = FetchMapList.get(pathname);
                if (callback == null) return;
                if (callback.length == 0) return;
                let newObject = deliveryTask(callback, { args }, 'preRequest');
                if (newObject && newObject.args) {
                    args = newObject.args;
                }
                apply = originalFetch.apply(this, args);
                apply.then((response) => {
                    let text = response.text,
                        json = response.json;
                    response.text = () => {
                        return text.apply(response).then((text) => {
                            let _object = deliveryTask(callback, { text, args }, 'done');
                            if (_object && _object.text) {
                                text = _object.text;
                            }
                            return text;
                        });
                    };
                    response.json = () => {
                        return json.apply(response).then((json) => {
                            let text = JSON.stringify(json);
                            return JSON.parse(deliveryTask(callback, { text, args }, 'done'));
                        });
                    };
                });
            })();
            if (apply == null) {
                apply = originalFetch.apply(this, args);
            }
            return apply;
        };
    }
    
    hookFetch();

    unsafeWindow['chatgpt.js.org'] = {
        FetchCallback: {
            add: (pathname, callback) => {
                let list = FetchMapList.get(pathname) || (FetchMapList.set(pathname, []), FetchMapList.get(pathname));
                list.push(callback);
                let index = list.length;
                return index;
            },
            del: (pathname, index) => {
                let list = FetchMapList.get(pathname);
                if (list == null) return false;
                list.splice(index - 1, 1);
                return true;
            }
        },
        globalVariable: {
            get: (key) => {
                return globalVariable.get(key);
            },
            getAll: () => {
                return globalVariable.entries();
            },
            set: (key, value) => {
                globalVariable.set(key, value);
            },
            getOrDrfault: (key, defaultValue) => {
                return globalVariable.get(key) || defaultValue;
            }
        }
    };

    unsafeWindow['chatgpt.js.org'].FetchCallback.add('/api/auth/session', (_object, period) => {
        if (period !== 'done') { 
            return;
        }
        let json = JSON.parse(_object.text);
        let accessToken = json.accessToken;
        localStorage.setItem('chatgpt.js.org.accessToken', accessToken);
        globalVariable.set('accessToken', accessToken);
    });

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
    try { window.chatgpt = chatgpt; } catch (error) { /* for Greasemonkey */ }
    try { module.exports = chatgpt; } catch (error) { /* for CommonJS */ }

})();
