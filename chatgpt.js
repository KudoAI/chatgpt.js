(function() {

    var functionAliases = [ // whole function names to cross-alias
        ['new', 'newChat', 'startNewChat'],
        ['regenerate', 'regenerateReply'],
        ['send', 'sendChat', 'sendMsg'],
        ['sendInNewChat', 'sendNewChat']
    ];

    var synonyms = [ // constituent synonyms within function names
        ['chat', 'conversation', 'convo'],
        ['reply', 'response'],
        ['send', 'submit']
    ];

    var navLinkLabels = {
        clearChats: 'Clear conversations',
        confirmClearChats: 'Confirm clear conversations',
        newChat: 'New chat'
    };

    var chatgpt = {

        clearChats: function() {
            if (!this.clearChats.cnt) this.clearChats.cnt = 0;
            if (this.clearChats.cnt >= 2) return; // exit if already confirmed
            for (var navLink of document.querySelectorAll('nav > a')) {
                if (navLink.text.includes(navLinkLabels[(
                        this.clearChats.cnt > 0 ? 'confirmC' : 'c') + 'learChats'])) {
                    navLink.click(); this.clearChats.cnt++;
                    setTimeout(this.clearChats.bind(this), 500); return; // repeat to confirm
                }
            }
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
                }
            }
        },

        getRegenerateButton: function() {
            for (var formButton of document.querySelectorAll('form button')) {
                if (formButton.textContent.toLowerCase().includes('regenerate')) {
                    return formButton;
                }
            }
        },

        getSendButton: function() {
            return document.querySelector('form button[class*="bottom"]');
        },

        getStopGeneratingButton: function() {
            for (var formButton of document.querySelectorAll('form button')) {
                if (formButton.textContent.toLowerCase().includes('stop')) {
                    return formButton;
                }
            }
        },

        getTextarea: function() {
            return document.querySelector('form textarea');
        },

        notify: function(msg, position = '') {
            var vOffset = 13, hOffset = 27; // px offset from viewport border
            var notificationDuration = 1.75; // sec duration to maintain notification visibility
            var fadeDuration = 0.6; // sec duration of fade-out

            // Find or make div
            var notificationDiv = document.querySelector('#notification-alert');
            if (!notificationDiv) { // if missing
                notificationDiv = document.createElement('div'); // make div
                notificationDiv.id = 'notification-alert';
                notificationDiv.style.cssText = ( // stylize it
                    '/* Box style */   background-color: black ; padding: 10px ; border-radius: 8px ; '
                    + '/* Visibility */  opacity: 0 ; position: fixed ; z-index: 9999 ; font-size: 1.8rem ; color: white');
                document.body.appendChild(notificationDiv); // insert into DOM
            }

            // Position notification (defaults to top-right)
            notificationDiv.style.top = !/low|bottom/i.test(position) ? `${vOffset}px` : '';
            notificationDiv.style.bottom = /low|bottom/i.test(position) ? `${vOffset}px` : '';
            notificationDiv.style.right = !/left/i.test(position) ? `${hOffset}px` : '';
            notificationDiv.style.left = /left/i.test(position) ? `${hOffset}px` : '';

            // Show notification
            if (this.notify.isDisplaying) clearTimeout(this.notify.hideTimer); // clear previous hide
            notificationDiv.innerHTML = msg; // insert msg
            notificationDiv.style.transition = 'none'; // remove fade effect
            notificationDiv.style.opacity = 1; // show msg
            this.notify.isDisplaying = true;

            // Hide notification
            var hideDelay = ( // set delay before fading
                fadeDuration > notificationDuration ? 0 // don't delay if fade exceeds notification duration
                : notificationDuration - fadeDuration); // otherwise delay for difference
            this.notify.hideTimer = setTimeout(function hideNotif() { // maintain notification visibility, then fade out
                notificationDiv.style.transition = `opacity ${fadeDuration}s`; // add fade effect
                notificationDiv.style.opacity = 0; // hide notification...
                this.notify.isDisplaying = false;
            }, hideDelay * 1000); // ...after pre-set duration
        },

        regenerate: function() {
            for (var formButton of document.querySelectorAll('form button')) {
                if (formButton.textContent.toLowerCase().includes('regenerate')) {
                    formButton.click; return;
                }
            }
        },

        send: function(msg) {
            document.querySelector('form textarea').value = msg;
            document.querySelector('form button[class*="bottom"]').click();
        },

        sendInNewChat: function(msg) {
            for (var navLink of document.getElementsByTagName('nav > a')) {
                if (navLink.text.includes(navLinkLabels.newChat)) {
                    navLink.click(); break;
                }
            }
            setTimeout(function() {
                document.querySelector('form textarea').value = msg;
                document.querySelector('form button[class*="bottom"]').click();
            }, 500);
        },

        startNewChat: function() {
            for (var navLink of document.getElementsByTagName('nav > a')) {
                if (navLink.text.includes(navLinkLabels.newChat)) {
                    navLink.click(); return;
                }
            }
        },

        stop: function() {
            for (var formButton of document.querySelectorAll('form button')) {
                if (formButton.textContent.toLowerCase().includes('stop')) {
                    formButton.click(); return;
                }
            }
        },

        isIdle: true,
        isGenerating: false,
        status: 'idle',
        prevStatus: 'idle',

        toggleStatus: function() {
            this.prevStatus = this.status;
            if (this.status === 'idle') {
                this.eventEmitter.emit('onIdle');
            } else if (this.status === 'generating') {
                this.eventEmitter.emit('onGenerating');
            }
        },

        updateStatus: function() {
            var stopGeneratingButton = this.getStopGeneratingButton();

            if (stopGeneratingButton) {
                this.isIdle = false;
                this.isGenerating = true;
                this.status = 'generating';
            } else if (!stopGeneratingButton) {
                this.isIdle = true;
                this.isGenerating = false;
                this.status = 'idle';
            }
            if (this.status !== this.prevStatus) {
                this.toggleStatus();
            }
        },

        eventEmitter: {
            events: {},

            on: function(eventName, callback) {
                if (!this.events[eventName]) {
                    this.events[eventName] = [];
                }
                this.events[eventName].push(callback);
            },

            once: function(eventName, callback) {
                var self = this;
                function oneTimeCallback() {
                    callback.apply(null, arguments);
                    self.removeListener(eventName, oneTimeCallback);
                }
                this.on(eventName, oneTimeCallback);
            },

            removeListener: function(eventName, callback) {
                if (this.events[eventName]) {
                    this.events[eventName] = this.events[eventName].filter(function(cb) {
                        return cb !== callback;
                    });
                }
            },

            emit: function(eventName) {
                if (this.events[eventName]) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    this.events[eventName].forEach(function(callback) {
                        callback.apply(null, args);
                    });
                }
            }
        }
    };

    // Create alias functions

    for (var prop in chatgpt) {
        if (typeof chatgpt[prop] === 'function') {

            // Create new function for each alias
            for (var subAliases of functionAliases) {
                if (subAliases.includes(prop)) {
                    for (var alias of subAliases) {
                        if (alias !== prop) { // don't alias og function
                            chatgpt[alias] = chatgpt[prop]; // make new function, reference og one
                        }
                    }
                }
            }

            // Create new functions for each synonym
            for (var funcName in chatgpt) {
                var funcWords = funcName.split(/(?=[A-Z])/); // split function name into constituent words
                for (var funcWord of funcWords) {
                    var synonymValues = [].concat(...synonyms // flatten into single array w/ word's synonyms
                        .filter(arr => arr.includes(funcWord.toLowerCase())) // filter in relevant synonym sub-arrays
                        .map(arr => arr.filter(synonym => synonym !== funcWord.toLowerCase()))); // filter out matching word
                    for (var synonym of synonymValues) { // create function per synonym
                        var newWords = [...funcWords]; // shallow copy funcWords
                        newWords[newWords.indexOf(funcWord)] = synonym; // replace funcWord w/ synonym
                        var newFuncName = newWords.map((newWord, index) => // transform new words to create new name
                            index === 0 ? newWord : newWord.charAt(0).toUpperCase() + newWord.slice(1) // case each word to form camel case
                        ).join(''); // concatenate transformed words
                        if (!chatgpt[newFuncName]) { // don't alias existing functions
                            chatgpt[newFuncName] = chatgpt[funcName]; // make new function, reference og one
                        }
                    }
                }
            }
        }
    }

    // Export chatgpt object

    try { window.chatgpt = chatgpt; } catch (error) { /* for Greasemonkey */ }
    try { module.exports = chatgpt; } catch (error) { /* for CommonJS */ }

    // Check the status

    setInterval(function() { chatgpt.updateStatus(); }, 1000);    
    var sendButton = document.querySelector('form button[class*="bottom"]');
    sendButton.addEventListener('click', function() { chatgpt.updateStatus(); });

    // Listener examples

    chatgpt.eventEmitter.on('onIdle', function() {
        console.log('Chat is idle');
    });
    chatgpt.eventEmitter.on('onGenerating', function() {
        console.log('Chat is generating');
    });

})();
