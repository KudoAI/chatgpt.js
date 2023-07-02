<div align="center">

<div align="right">

###### English | <a href="zh-cn#readme">简体中文</a>
    
</div>

<h3>

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
    <img width=700 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
</picture>
<br><br>

🤖 A powerful client-side JavaScript library for ChatGPT 
<br><br>

</div>
</h3>

<div align="center">

[![](https://img.shields.io/badge/License-MIT-green.svg?labelColor=464646&style=flat-square)](https://github.com/kudoai/chatgpt.js/blob/main/LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/kudoai/chatgpt.js?label=Commits&labelColor=464646&style=flat-square)](https://github.com/kudoai/chatgpt.js/commits/main)
![](https://img.shields.io/github/size/kudoai/chatgpt.js/dist/chatgpt-1.10.6.min.js?label=Minified%20Size&labelColor=464646&color=ff69b4&style=flat-square)
[![](https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?labelColor=464646&label=Code+Quality&style=flat-square)](https://www.codefactor.io/repository/github/kudoai/chatgpt.js)
![](https://img.shields.io/jsdelivr/gh/hm/chatgptjs/chatgpt.js?labelColor=464646&color=ff6427&label=jsDelivr+Hits&style=flat-square)

</div>

## About

**chatgpt.js** is a powerful JavaScript library that allows for super easy interaction w/ the ChatGPT DOM.

- Feature-rich
- Object-oriented
- Easy-to-use
- Lightweight (yet optimally performant)

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"></p>

## Importing the library

### ES6:

```js
(async () => {
    await import('https://code.chatgptjs.org/chatgpt-latest.min.js');    
    // Your code here...
})();
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
    // Your code here...
}
```

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://i.imgur.com/SATGr8j.png"></picture><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://i.imgur.com/wcCg3al.png"> Greasemonkey:

Userscript repositories like Greasy Fork maintain a whitelist of pre-approved CDNs (such as commit-specific references from `cdn.jsdelivr.net`) so the import URL is substantially lengthier to preserve publishability to these sites:

```js
...
// @require https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@4fdaa0ede3dd0847e20722568ddce38b7a00f49a/dist/chatgpt-1.10.6.min.js
// ==/UserScript==

// Your code here...
```

If you don't plan on publishing to these repos, the simpler `https://code.chatgptjs.org/chatgpt-latest.min.js` can be used instead to import the latest minified release.

### <img style="margin: 0 2px -1px 0" height=16 src="https://www.google.com/chrome/static/images/favicons/apple-icon-60x60.png"> Chrome:

Since Google will [eventually phase out](https://developer.chrome.com/docs/extensions/migrating/mv2-sunset/) Manifest V2, remote code will no longer be allowed, so importing chatgpt.js locally is ideal:

1. Save https://raw.githubusercontent.com/kudoai/chatgpt.js/main/chatgpt.js to a subdirectory (`lib` in this example)

2. Add ES6 export statement to end of `lib/chatgpt.js`
```js
...
export { chatgpt }
```

3. In project's (V3) `manifest.json`, add `lib/chatgpt.js` as a web accessible resource
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.js"]
    }],
```

4.    In scripts that need `chatgpt.js` (foreground/background alike), import it like so:
```js
(async () => {
    const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'));
    // Your code here...
})();
```

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"></p>

## Usage

**chatgpt.js** was written w/ ultra flexibility in mind.

For example:

```js
chatgpt.getLastResponse()
chatgpt.getLastReply()
chatgpt.response.getLast()
chatgpt.get('reply', 'last')
```

Each call equally fetches the last response. If you think it works, it probabily will... so just type it! (Who has time for docs?)

If it didn't, simply submit an [issue](https://github.com/kudoai/chatgpt.js/issues) or [PR](https://github.com/kudoai/chatgpt.js/pulls) and it will be integrated, ezpz!

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"></p>

## Made with chatgpt.js

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [Autoclear ChatGPT History](https://chatgptevo.com/autoclear) <a href="https://github.com/awesome-scripts/awesome-userscripts#privacy"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

Auto-clear your ChatGPT query history for maximum privacy.
<br>[Install](https://greasyfork.org/scripts/460805-auto-clear-chatgpt-history) / 
[Readme](https://github.com/adamlui/autoclear-chatgpt-history#readme) / 
[Discuss](https://github.com/adamlui/autoclear-chatgpt-history/discussions)

### <img width=16 src="https://i.imgur.com/1yjmK3W.png"> [Automatic ChatGPT DAN](https://github.com/madkarmaa/automatic-chatgpt-dan)

Automatically send DAN prompts to ChatGPT.
<br>[Install](https://github.com/madkarmaa/automatic-chatgpt-dan#%EF%B8%8F-installation) / 
[Readme](https://github.com/madkarmaa/automatic-chatgpt-dan#readme)

### <img src="https://media.bravegpt.com/images/bravegpt-icon48.png" width=18> [BraveGPT](https://bravegpt.com) <a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Display ChatGPT answers in Brave Search sidebar (powered by GPT-4!)
<br>[Install](https://greasyfork.org/scripts/462440-bravegpt) / 
[Readme](https://github.bravegpt.com/#readme) / 
[Discuss](https://github.bravegpt.com/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT Auto-Continue ⏩](https://chatgptevo.com/autocontinue/github) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -3px 3px"></a>

Automatically continue generating multiple ChatGPT responses.<br>
[Install](https://greasyfork.org/scripts/466789-chatgpt-auto-continue) / 
[Readme](https://github.com/adamlui/chatgpt-auto-continue#readme) / 
[Discuss](https://chatgptevo.com/autocontinue/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ChatGPT Auto Refresh ↻](https://chatgptevo.com/autorefresh) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

Keeps ChatGPT sessions fresh to eliminate network errors + Cloudflare checks.
<br>[Install](https://greasyfork.org/scripts/462422-chatgpt-auto-refresh) / 
[Readme](https://github.com/adamlui/chatgpt-auto-refresh#readme) / 
[Discuss](https://github.com/adamlui/chatgpt-auto-refresh/discussions)

### <img src="https://media.duckduckgpt.com/images/ddgpt-icon48.png" width=17> [DuckDuckGPT](https://duckduckgpt.com) <a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Display ChatGPT answers in DuckDuckGo sidebar (powered by GPT-4!)
<br>[Install](https://greasyfork.org/scripts/459849-duckduckgpt) / 
[Readme](https://github.duckduckgpt.com/#readme) / 
[Discuss](https://github.duckduckgpt.com/discussions)

<br>

<a href="https://chatgptinfinity.com" target="_blank"><img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-infinity/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png"></a>

<br>

<a href="https://chatgptwidescreen.com" target="_blank"><img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png"></a>

<br>

If you've made something w/ chatgpt.js you want to share, email [showcase@chatgptjs.org](mailto:showcase@chatgptjs.org) or just open a [pull request](https://github.com/kudoai/chatgpt.js/pulls)!

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"></p>

## Contributors

This library exists thanks to code, translations, issues & ideas from the following contributors:

[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/10906554?first-contrib=2023.03.15&h=50&w=50&mask=circle&maxage=7d "@adamlui")](https://github.com/adamlui)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/71683364?first-contrib=2023.03.16-get-functions&h=50&w=50&mask=circle&maxage=7d "@mefengl")](https://github.com/mefengl)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/131989355?first-contrib=2023.04.30-doc-translations&h=50&w=50&mask=circle&maxage=7d "@Zin6969")](https://github.com/Zin6969)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/30551844?first-contrib=2023.05.02-getlastresponse-bug-report&h=50&w=50&mask=circle&maxage=7d "@madruga8")](https://github.com/madruga8)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/54934866?first-contrib=2023.05.01-clearchats-discard-fix&h=50&w=50&mask=circle&maxage=7d "@XiaoYingYo")](https://github.com/XiaoYingYo)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/129722778?first-contrib=2023.05.24-css-readability&h=50&w=50&mask=circle&maxage=7d "@AliAlSarre")](https://github.com/AliAlSarre)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/100418457?first-contrib=2023.06.02-send-function-bug-report&h=50&w=50&mask=circle&maxage=7d "@madkarmaa")](https://github.com/madkarmaa)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/1170326?first-contrib=2023.06.10-html-parser-idea&h=50&w=50&mask=circle&maxage=7d "@wamoyo")](https://github.com/wamoyo)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/33952?first-contrib=2023.06.10-html-parser-idea&h=50&w=50&mask=circle&maxage=7d "@meiraleal")](https://github.com/meiraleal)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/in/29110&h=50&w=50&mask=circle&maxage=7d "Dependabot")](https://github.com/dependabot)
[![](https://images.weserv.nl/?url=https://i.imgur.com/tNyIPmG.jpg?h=50&w=50&mask=circle&maxage=7d "ChatGPT")](https://chat.openai.com)

<br>

<a href="https://github.com/kudoai/chatgpt.js/tree/main/dist">**Releases**</a> / 
<a href="https://github.com/kudoai/chatgpt.js/discussions">Discuss</a> / 
<a href="#---------a-powerful-client-side-javascript-library-for-chatgpt">Back to top ↑</a>
