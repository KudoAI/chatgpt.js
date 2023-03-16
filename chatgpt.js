var chatgpt = {

    clearChats: function() {
        var clearLabels = ['Clear conversations', 'Confirm clear conversations']
        if (!this.clearChats.cnt) this.clearChats.cnt = 0
        if (this.clearChats.cnt >= clearLabels.length) return // exit if already confirmed
        for (var navLink of document.querySelectorAll('nav > a')) {
            if (navLink.text.includes(clearLabels[this.clearChats.cnt])) {
                navLink.click() ; this.clearChats.cnt++
                setTimeout(this.clearChats.bind(this), 500) ; return // repeat to confirm
    }}},

    getChatInput: function() {
        return document.querySelector('form textarea').value },

    getNewChatButton: function() {
        for (var navLink of document.querySelectorAll('nav > a')) {
            if (navLink.text.includes('New chat')) {
                return navLink ; break
    }}},

    getRegenerateButton: function() {
        var form = document.querySelector('form');
        var buttons = form.querySelectorAll('button');
        var result = Array.from(buttons).find(button => button.textContent.trim().toLowerCase().includes('regenerate'));
        return result;
    },

    getSendButton: function() {
        return document.querySelector('form button[class*="bottom"]') },

    getStopGeneratingButton: function() {
        var form = document.querySelector('form');
        var buttons = form.querySelectorAll('button');
        return Array.from(buttons).find(button => button.textContent.trim().toLowerCase().includes('stop generating'));
    },

    getTextarea: function() {
        var form = document.querySelector('form');
        var textareas = form.querySelectorAll('textarea');
        var result = textareas[0];
        return result;
    },

    notify: function(msg, position='') {
        var vOffset = 13, hOffset = 27 // px offset from viewport border
        var notificationDuration = 1.75 // sec duration to maintain notification visibility
        var fadeDuration = 0.6 // sec duration of fade-out

        // Find or make div
        var notificationDiv = document.querySelector('#notification-alert')
        if (!notificationDiv) { // if missing
            notificationDiv = document.createElement('div') // make div
            notificationDiv.id = 'notification-alert'
            notificationDiv.style.cssText = ( // stylize it
                '/* Box style */   background-color: black ; padding: 10px ; border-radius: 8px ; '
              + '/* Visibility */  opacity: 0 ; position: fixed ; z-index: 9999 ; font-size: 1.8rem ; color: white' )
            document.body.appendChild(notificationDiv) // insert into DOM
        }

        // Position notification (defaults to top-right)
        notificationDiv.style.top = !/low|bottom/i.test(position) ? `${ vOffset }px` : ''
        notificationDiv.style.bottom = /low|bottom/i.test(position) ? `${ vOffset }px` : ''
        notificationDiv.style.right = !/left/i.test(position) ? `${ hOffset }px` : ''
        notificationDiv.style.left = /left/i.test(position) ? `${ hOffset }px` : ''

        // Show notification
        if (this.notify.isDisplaying) clearTimeout(this.notify.hideTimer) // clear previous hide
        notificationDiv.innerHTML = msg // insert msg
        notificationDiv.style.transition = 'none' // remove fade effect
        notificationDiv.style.opacity = 1 // show msg
        this.notify.isDisplaying = true

        // Hide notification
        var hideDelay = ( // set delay before fading
            fadeDuration > notificationDuration ? 0 // don't delay if fade exceeds notification duration
                : notificationDuration - fadeDuration ) // otherwise delay for difference
        this.notify.hideTimer = setTimeout(function hideNotif() { // maintain notification visibility, then fade out
            notificationDiv.style.transition = `opacity ${ fadeDuration }s` // add fade effect
            notificationDiv.style.opacity = 0 // hide notification...
            this.notify.isDisplaying.bind(this) = false
        }, hideDelay * 1000) // ...after pre-set duration
    },    
    
    startNewChat: function () {
        for (var link of document.getElementsByTagName('a')) {
            if (link.text.includes('New chat')) {
                link.click() ; break
    }}},

    isIdle: true,
    isGenerating: false,

    updateStatus: function() {
        var stopGeneratingButton = this.getStopGeneratingButton();
        
        if (stopGeneratingButton) {
            this.isIdle = false;
            this.isGenerating = true;
        } else if (!stopGeneratingButton) {
            this.isIdle = true;
            this.isGenerating = false;
        }
    },

}

try { window.chatgpt = chatgpt } catch {} // for Greasemonkey
try { module.exports = chatgpt } catch {} // for CommonJS

// Use the added functions to get the elements
var submitButton = chatgpt.getSendButton();
var textarea = chatgpt.getTextarea();
var regenerateButton = chatgpt.getRegenerateButton();
var stopGeneratingButton = chatgpt.getStopGeneratingButton();
var newChatButton = chatgpt.getNewChatButton();

// Assign reasonable IDs to the elements
submitButton.id = 'chatgpt-submit-button';
textarea.id = 'chatgpt-textarea';
regenerateButton.id = 'chatgpt-regenerate-button';
stopGeneratingButton.id = 'chatgpt-stop-generating-button';
newChatButton.id = 'chatgpt-new-chat-button';

// Check the status of the chat every second
setInterval(function() {
    chatgpt.updateStatus();
}, 1000);
