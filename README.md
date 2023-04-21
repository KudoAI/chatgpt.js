<h3>
<div align="center">
<br />

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/chatgptjs/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
    <img width=546 alt="chatgpt.js" src="https://raw.githubusercontent.com/chatgptjs/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
</picture>
<br /><br />

🤖 A powerful client-side JavaScript library for ChatGPT 

</div>
</h3>

## About

**chatgpt.js** is a powerful JavaScript library that allows for super easy interaction w/ the [ChatGPT DOM](https://chat.openai.com).

- Feature-rich
- Object-oriented
- Easy-to-use
- Lightweight (yet optimally performant)

## Importing the library

### ES6:

```js
import('https://code.chatgptjs.org/chatgpt-latest.min.js')
    .then(module => { yourCode() })

function yourCode() {
    // Your code starts here
}
```

### ES5:

```js
var xhr = new XMLHttpRequest()
xhr.open('GET', 'https://code.chatgptjs.org/chatgpt-latest.min.js')
xhr.onload = function() {
    if (xhr.status === 200) {
        var chatgptJS = document.createElement('script')
        chatgptJS.textContent = xhr.responseText
        document.head.appendChild(chatgptJS)
        yourCode() // runs your code
    }
}
xhr.send()

function yourCode() {
    // Your code starts here
}
```

### Greasemonkey:

Userscript repositories like Greasy Fork maintain a whitelist of pre-approved CDNs (such as commit-specific references from `cdn.jsdelivr.net`) so the import URL is substantially lengthier to preserve publishability to these sites:

```js
...
// @require https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@25d3b75b45a09687caa47c741b2718187927fee0/dist/chatgpt-1.2.3.min.js
// ==/UserScript==

// Your code starts here
```

If you don't plan on publishing to these repos, the simpler `https://code.chatgptjs.org/chatgpt-latest.min.js` can be used instead to import the latest minified release.

## Usage

**chatgpt.js** was written w/ ultra flexibility in mind.

For example:

```js
chatgpt.getLastResponse()
chatgpt.getLastReply()
chatgpt.get('reply', 'last')
```

Each call equally fetches the last response. If you think it works, it probabily will... so just type it! (Who has time for docs?)

If it didn't, simply submit an [issue](https://github.com/chatgptjs/chatgpt.js/issues) or [PR](https://github.com/chatgptjs/chatgpt.js/pulls) and it will be integrated, ezpz!

## Showcase

The following apps rely on code from chatgpt.js:

### <img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"> [Autoclear ChatGPT History](https://chatgptevo.com/autoclear) <a href="https://github.com/awesome-scripts/awesome-userscripts#privacy"><img src="https://awesome.re/mentioned-badge.svg" alt="Mentioned in Awesome Userscripts" style="margin:0 0 -2px 5px"></a>

Auto-clear your ChatGPT query history for maximum privacy.
<br>[Install](https://greasyfork.org/en/scripts/460805-auto-clear-chatgpt-history) / 
[Readme](https://github.com/adamlui/autoclear-chatgpt-history/README.md) / 
[Discuss](https://github.com/adamlui/autoclear-chatgpt-history/discussions)

### <img src="https://media.bravegpt.com/images/bravegpt-icon48.png" width=18> [BraveGPT](https://bravegpt.com) <a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" alt="BraveGPT - Bring&#0032;the&#0032;magic&#0032;of&#0032;ChatGPT&#0032;to&#0032;Brave&#0032;Search&#0033; | Product Hunt" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Display ChatGPT answers in Brave Search sidebar.
<br>[Install](https://greasyfork.org/en/scripts/462440-bravegpt) / 
[Readme](https://github.bravegpt.com/tree/main/README.md) / 
[Discuss](https://github.bravegpt.com/discussions)

### <img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"> [ChatGPT Auto Refresh ↻](https://chatgptevo.com/autorefresh) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" alt="Mentioned in Awesome Userscripts" style="margin:0 0 -2px 5px"></a>

Keeps ChatGPT sessions fresh to eliminate network errors + Cloudflare checks.
<br>[Install](https://greasyfork.org/en/scripts/462422-chatgpt-auto-refresh) / 
[Readme](https://github.com/adamlui/chatgpt-auto-refresh/README.md) / 
[Discuss](https://github.com/adamlui/chatgpt-auto-refresh/discussions)

### <img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"> [ChatGPT Widescreen Mode 🖥️](https://chatgptevo.com/widescreen) <a href="https://www.producthunt.com/posts/chatgpt-widescreen-mode?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chatgpt&#0045;widescreen&#0045;mode" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=389746&theme=light" alt="ChatGPT&#0032;Widescreen&#0032;Mode - Add&#0032;widescreen&#0032;&#0043;&#0032;full&#0032;window&#0032;modes&#0032;to&#0032;ChatGPT | Product Hunt" style="width: 112px; height: 24px; margin:0 0 -4px 3px;" width="112" height="24" /></a>

Adds Widescreen + Full-Window modes to ChatGPT for reduced scrolling.
<br>[Install](https://github.com/adamlui/chatgpt-widescreen#installation) / 
[Readme](https://github.com/adamlui/chatgpt-widescreen/README.md) / 
[Discuss](https://github.com/adamlui/chatgpt-widescreen/discussions)

### <img src="https://media.duckduckgpt.com/images/ddgpt-icon48.png" width=17> [DuckDuckGPT](https://duckduckgpt.com) <a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" alt="DuckDuckGPT - Bring&#0032;the&#0032;magic&#0032;of&#0032;ChatGPT&#0032;to&#0032;DuckDuckGo | Product Hunt" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Display ChatGPT answers in DuckDuckGo sidebar.
<br>[Install](https://greasyfork.org/en/scripts/459849-duckduckgpt) / 
[Readme](https://github.duckduckgpt.com/tree/main/README.md) / 
[Discuss](https://github.duckduckgpt.com/discussions)

## Contributing

Whether w/ translations or code, contributions of any kind are encouraged & accepted via [PR](https://github.com/chatgptjs/chatgpt.js/pulls)!

<br>

<a href="https://github.com/chatgptjs/chatgpt.js/tree/main/dist">**Releases**</a> / 
<a href="https://github.com/chatgptjs/chatgpt.js/discussions">Discuss</a> / 
<a href="#---------a-powerful-client-side-javascript-library-for-chatgpt">Back to top ↑</a>
