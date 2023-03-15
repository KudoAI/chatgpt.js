var chatgpt = {

    clearConversations: function() {
        var labels = ['Clear conversations', 'Confirm clear conversations']
        if (!this.clearConversations.cnt) this.clearConversations.cnt = 0
        if (this.clearConversations.cnt >= labels.length) return // exit if already confirmed
        for (var link of document.querySelectorAll('a')) {
            if (link.textContent.includes(labels[this.clearConversations.cnt])) {
                link.click() ; this.clearConversations.cnt++
                setTimeout(this.clearConversations.bind(this), 500) ; return // repeat to confirm
    }}},

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
            this.notify.isDisplaying = false
        }, hideDelay * 1000) // ...after pre-set duration
    }    

}

module.exports = chatgpt