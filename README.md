<div id="repo-cover" align="center">

<a id="top"></a>

<div align="center">
    <h6>
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs">
            <picture>
                <source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/icons/earth/white/icon32.svg?v=e638eac">
               <img height=14 src="https://assets.chatgptjs.org/images/icons/earth/black/icon32.svg?v=e638eac">
            </picture>
        </a>
        English |
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs/zh-cn#readme">简体中文</a> |
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs/zh-tw#readme">繁體中文</a> |
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs/ja#readme">日本</a> |
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs/ko#readme">한국인</a> |
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs/hi#readme">हिंदी</a> |
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs/ne#readme">नेपाली</a> |
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs/vi#readme">Việt</a>
    </h6>
</div>

<br>

<a href="https://chatgpt.js.org/?utm_source=chatgpt.js-github&utm_medium=referral&utm_content=cover-logo">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/logos/chatgpt.js/with-reflection/darkmode/logo-6014x1334.png?v=8169c77">
        <img width=800 src="https://assets.chatgptjs.org/images/logos/chatgpt.js/with-reflection/lightmode/logo-6014x1334.png?v=8169c77">
    </picture>
</a>

</div>

<br>

<div id="shields" align="center">

<a href="https://github.com/KudoAI/chatgpt.js/blob/main/docs/LICENSE.md" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/License-MIT-f99b27.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@kudoai/chatgpt.js/v/latest" target="_blank" rel="noopener">
    <img src="https://img.shields.io/npm/v/%40kudoai%2Fchatgpt.js?logo=npm&logoColor=white&labelColor=464646&color=32fcee&style=for-the-badge&label=Latest+Release"></a>
<a href="https://www.codefactor.io/repository/github/kudoai/chatgpt.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=Code+Quality&logo=codefactor&logoColor=white&labelColor=464646&color=a0fc55&style=for-the-badge"></a>
<a href="https://sonarcloud.io/component_measures?metric=vulnerabilities&id=kudoai_chatgpt.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dkudoai_chatgpt.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonar&logoColor=white&labelColor=464646&label=Vulnerabilities&color=ffef00"></a>
<a href="https://github.com/sindresorhus/awesome-chatgpt#javascript" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/Mentioned_in-Awesome-ff69b4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="#">
    <img src="https://img.shields.io/badge/jsDelivr_Requests-2,000,000+-2bbbd8.svg?logo=jsdelivr&logoColor=white&labelColor=464646&style=for-the-badge"></a>

</div>

<br>

<hr>

## ⚡ Installation

### Library

#### <a href="#-nodejs"><img height=14 width="auto" src="https://cdn.jsdelivr.net/gh//adamlui/js-utils@dbdea4b/assets/images/icons/runtimes/node.js/icon25x28.png"></a> Node.js:

From your project root:

```bash
npm install @kudoai/chatgpt.js
```

#### [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/chrome/icon16.png" title="Chrome">][web-usage][<img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/edge/icon16.png" title="Edge">][web-usage][<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/firefox/icon16.png" title="Firefox">][web-usage][<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/safari/icon16.png" title="Safari">][web-usage][<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/qq/3d/icon-32x33.png" title="QQ Browser">][web-usage] Web:

[web-usage]: #-web

```js
<script src="https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3/dist/chatgpt.min.js"></script>
```

#### [<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/tampermonkey/icon28.png" title="Tampermonkey">][greasemonkey-usage][<img height="15" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/violentmonkey/icon25.png" title="Violentmonkey">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/scriptcat/icon32.png" title="ScriptCat">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/orangemonkey/icon16.png" title="OrangeMonkey">][greasemonkey-usage][<img height="14" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/stay/icon32.png" title="Stay">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/userscripts/icon32.png" title="Userscripts">][greasemonkey-usage] Greasemonkey:

[greasemonkey-usage]: #-greasemonkey

> **Note** _To use a starter template: [KudoAI/chatgpt.js-greasemonkey-starter](https://github.com/KudoAI/chatgpt.js-greasemonkey-starter)_

```js
// @require https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3/dist/chatgpt.min.js
// ==/UserScript==
```

#### [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/chrome/icon16.png" title="Chrome">](#-chrome) Chrome:

> **Note** _To use a starter template: [KudoAI/chatgpt.js-chrome-starter](https://github.com/KudoAI/chatgpt.js-chrome-starter)_

1. Save https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3/dist/chatgpt.min.js to `lib`

2. In project's (V3) `manifest.json`, add `lib/chatgpt.min.js` as a web accessible resource

```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.min.js"]
    }],
```

#

### CLI app

#### <a href="#-nodejs-1"><img height=14 width="auto" src="https://cdn.jsdelivr.net/gh//adamlui/js-utils@dbdea4b/assets/images/icons/runtimes/node.js/icon25x28.png"></a> Node.js:

```bash
npm install -g @kudoai/chatgpt.js
```

#

### API keys

#### <img width=15 height="auto" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@7dc4431/assets/images/icons/providers/openrouter/icon32.png"> OpenRouter:

> **Note** _To get a free OpenRouter API key: <https://openrouter.ai/settings/keys>_

<img height=135 width="auto" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@0049334/assets/images/screenshots/openrouter-api-keys-dash.png">

##### Windows:

```bash
setx OPENROUTER_API_KEY "sk-or-v1-8a69..."
```

##### Mac/Linux:

```bash
export OPENROUTER_API_KEY="sk-or-v1-8a69..."
```

<hr>

## 💻 Usage

#### <a href="#-es-modules-esm"><img height=13 width="auto" src="https://cdn.jsdelivr.net/gh/adamlui/js-utils@dbdea4b/assets/images/icons/module-systems/esm/icon32.png"></a> ES Modules (ESM):

```js
import chatgpt from '@kudoai/chatgpt.js'

console.log(await chatgpt.send('sup'))
// e.g. => Hey! Not much—just here and ready to help. What's up with you?
```

#### <a href="#-commonjs-cjs"><img height=13 width="auto" src="https://cdn.jsdelivr.net/gh/adamlui/js-utils@dbdea4b/assets/images/icons/module-systems/cjs/icon32.png"></a> CommonJS (CJS):

```js
(async () => {
    const chatgpt = require('@kudoai/chatgpt.js')

    console.log(await chatgpt.send('sup'))
    // e.g. => Hey! What's up?
})()
```

#### [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/chrome/icon16.png" title="Chrome">](#-chrome) Chrome:

```js
(async () => {
    await import(chrome.runtime.getURL('lib/chatgpt.min.js'))

    await chatgpt.isIdle()
    console.log('ChatGPT is ready!') 
})()
```

#### <a href="#-terminal"><img width=15 height="auto" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@37edc4d/assets/images/icons/terminal/blue-gradient/icon32.png"></a> Terminal:

```bash
chatgpt --query "sup"  # or cjs -q sup
# e.g. => Hey there! What's up?
```

Extended userguide:

<https://github.com/KudoAI/chatgpt.js/blob/v3.9.0/docs/USERGUIDE.md>

<br><a href="https://github.com/sponsors/KudoAI"><img src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@e53b001/assets/images/banners/sponsor/$10/banner1660x260.png"></a>

<hr>

<div id="showcase">

## 🚀 Made with chatgpt.js

</div>

<!-- AMAZONGPT -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/KudoAI/amazongpt@579eef3/assets/images/icons/app/white/icon48.png"><img width=18 src="https://cdn.jsdelivr.net/gh/KudoAI/amazongpt@579eef3/assets/images/icons/app/black-gold-teal/icon48.png"></picture>][amazongpt-readme] [AmazonGPT][amazongpt-readme] &nbsp;[<img height=20 src="https://cdn.jsdelivr.net/gh/KudoAI/amazongpt@579eef3/assets/images/badges/wolfram-award/gold-badge.png">](https://cdn.jsdelivr.net/gh/KudoAI/amazongpt@579eef3/assets/wolfram-award/letter.pdf)

<details>
    <summary>
        Add AI chat & product/category summaries to Amazon shopping, powered by the latest LLMs!
    </summary>
    <br>
    <blockquote>
        <a href="https://github.com/adamlui/ai-web-extensions/tree/main/amazongpt/#readme">
            <img width=511 src="https://cdn.jsdelivr.net/gh/KudoAI/amazongpt@579eef3/assets/images/screenshots/desktop/mice-md-reply-darkmode.png?v=80bceab"></a>
    </blockquote>
</details>

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][amazongpt-install]
> [Greasemonkey][amazongpt-install] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][amazongpt-readme]
> [Readme][amazongpt-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [Discuss][aiweb-discuss]

[amazongpt-install]: https://github.com/adamlui/ai-web-extensions/tree/main/amazongpt/#-installation
[amazongpt-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/amazongpt/#readme

<!-- AUTOCLEAR CHATGPT HISTORY -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/autoclear-chatgpt-history@83f1921/assets/images/icons/openai/white/icon32.png"><img width=19 src="https://cdn.jsdelivr.net/gh/adamlui/autoclear-chatgpt-history@83f1921/assets/images/icons/openai/black/icon32.png"></picture>][ach-readme] [Autoclear ChatGPT History][ach-readme] &nbsp;[<img src="https://assets.autoclearchatgpt.com/images/badges/awesome/badge.svg">](https://github.com/awesome-scripts/awesome-userscripts#privacy)

<details>
    <summary>
        Auto-clear your ChatGPT query history for maximum privacy.
    </summary>
    <br>
    <blockquote>
        <a href="https://github.com/adamlui/ai-web-extensions/tree/main/autoclear-chatgpt-history/#readme">
            <img width=511 height=222 src="https://cdn.jsdelivr.net/gh/adamlui/autoclear-chatgpt-history@83f1921/assets/images/screenshots/demo.png"></a>
    </blockquote>
</details>

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][ach-install]
> [Greasemonkey][ach-install] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][ach-readme]
> [Readme][ach-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [Discuss][aiweb-discuss]

[ach-install]: https://github.com/adamlui/ai-web-extensions/tree/main/autoclear-chatgpt-history/#-installation
[ach-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/autoclear-chatgpt-history/#readme


<!-- BRAVEGPT -->

### [<img width=21 src="https://assets.bravegpt.com/images/icons/app/icon48.png">][bravegpt-readme] [BraveGPT][bravegpt-readme] &nbsp;[<img width=112 height="auto" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light">](https://www.producthunt.com/posts/bravegpt)

<details>
    <summary>
        Add AI chat & search summaries to Brave Search, powered by the latest LLMs!
    </summary>
    <br>
    <blockquote>
        <a href="https://github.com/adamlui/ai-web-extensions/tree/main/bravegpt/#readme">
            <img width=511 src="https://assets.bravegpt.com/images/screenshots/desktop/bitcoin-query/darkmode.png?v=a0dd1de"></a>
    </blockquote>
</details>

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][bravegpt-install]
> [Greasemonkey][bravegpt-install] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][bravegpt-readme]
> [Readme][bravegpt-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [Discuss][aiweb-discuss]

[bravegpt-install]: https://github.com/adamlui/ai-web-extensions/tree/main/bravegpt/#-installation
[bravegpt-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/bravegpt/#readme

<!-- CHATGPT AUTO-CONTINUE -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-continue@7e2c739/assets/images/icons/app/white/icon32.png"><img height=20 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-continue@7e2c739/assets/images/icons/app/black/icon32.png"></picture>][cac-readme] [ChatGPT Auto-Continue][cac-readme] &nbsp;[<img src="https://assets.chatgptautocontinue.com/images/badges/awesome/badge.svg">][awesome-chatgpt-userscripts]

<details>
    <summary>
        Automatically continue generating answers when ChatGPT responses get cut-off.
    </summary>
    <br>
    <blockquote>
        <a href="https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-continue/#readme">
            <img width=600 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-continue@7e2c739/assets/images/tiles/marquee/tile625x250.png"></a>
    </blockquote>
</details>

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/browsers/chrome/icon16.png">][cac-chrome]
> [Chrome][cac-chrome] /
> [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/browsers/firefox/icon16.png">][cac-ff]
> [Firefox][cac-ff] /
> [<img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/browsers/edge/icon16.png">][cac-edge]
> [Edge][cac-edge] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][cac-readme]
> [Readme][cac-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [Discuss][aiweb-discuss]

[cac-chrome]: https://chromewebstore.google.com/detail/chatgpt-auto-continue/lbojnhaafilddefkdgmbplkafnckaoga?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[cac-ff]: https://addons.mozilla.org/firefox/addon/chatgpt-auto-continue/?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[cac-edge]: https://microsoftedge.microsoft.com/addons/detail/chatgpt-auto-continue/kaicnimcjamamnlbaeaneofmdjibgepl
[cac-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-continue/#readme

<!-- IDEA CTA -->

<hr>

### Have a library idea or request?

Create a new discussion: https://github.com/KudoAI/chatgpt.js/discussions/new?category=ideas

<hr>

<!-- CHATGPT AUTO REFRESH -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautorefresh.com/images/icons/openai/white/icon32.png"><img width=19 src="https://assets.chatgptautorefresh.com/images/icons/openai/black/icon32.png"></picture>][car-readme] [ChatGPT Auto Refresh ↻][car-readme] &nbsp;[<img src="https://assets.chatgptautorefresh.com/images/badges/awesome/badge.svg">][awesome-chatgpt-userscripts]

Keeps ChatGPT sessions fresh, eliminating chat time limits + network errors + Cloudflare checks.

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][car-install]
> [Greasemonkey][car-install] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][car-readme]
> [Readme][car-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [Discuss][aiweb-discuss]

[car-install]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-refresh/#-installation
[car-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-refresh/#readme

<!-- CHATGPT AUTO-TALK -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautotalk.com/images/icons/openai/white/icon32.png"><img width=19 src="https://assets.chatgptautotalk.com/images/icons/openai/black/icon32.png"></picture>][cat-readme] [ChatGPT Auto-Talk 📣][cat-readme] &nbsp;[<img src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@2f5a19c/assets/images/badges/awesome/badge.svg">][awesome-chatgpt-userscripts]

Auto-play ChatGPT responses.

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][cat-install]
> [Greasemonkey][cat-install] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][cat-readme]
> [Readme][cat-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [Discuss][aiweb-discuss]

[cat-install]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-talk/#-installation
[cat-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-talk/#readme

<!-- CHATGPT INFINITY -->

### [<img width=20 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@c587927/assets/images/icons/infinity-symbol/circled/icon32.png">][ci-readme] [ChatGPT Infinity][ci-readme] &nbsp;[<img height=20 src="https://assets.chatgptinfinity.com/images/badges/chrome-web-store/featured-by-google/badge500x91.png">][ci-chrome]

<details>
    <summary>
        Generate endless answers from all-knowing ChatGPT (on any topic!)
    </summary>
    <br>
    <blockquote>
        <a href="https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-infinity/#readme">
            <img width=600 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@4a7bac9/assets/images/tiles/marquee/tile-625x250.png"></a>
    </blockquote>
</details>

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/browsers/chrome/icon16.png">][ci-chrome]
> [Chrome][ci-chrome] /
> [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/browsers/firefox/icon16.png">][ci-ff]
> [Firefox][ci-ff] /
> [<img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/browsers/edge/icon16.png">][ci-edge]
> [Edge][ci-edge] /
> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][ci-greasemonkey]
> [Greasemonkey][ci-greasemonkey] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][ci-readme]
> [Readme][ci-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [Discuss][aiweb-discuss]

[ci-chrome]: https://chromewebstore.google.com/detail/chatgpt-infinity/amikeononomkhphopbflomhnmdijjpmb?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[ci-ff]: https://addons.mozilla.org/firefox/addon/chatgpt-infinity/?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[ci-edge]: https://microsoftedge.microsoft.com/addons/detail/chatgpt-infinity/jgonecnbmehicpdpjkdekamhmlebfagb
[ci-greasemonkey]: https://gm.chatgptinfinity.com
[ci-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-infinity/#readme

<!-- CHATGPT WIDESCREEN -->

### [<img width=19 src="https://assets.chatgptwidescreen.com/images/icons/widescreen-robot-emoji/icon32.png">][cwm-readme] [ChatGPT Widescreen][cwm-readme] &nbsp;[<img height=20 src="https://assets.chatgptwidescreen.com/images/badges/chrome-web-store/featured-by-google/badge500x91.png">][cwm-readme]

<details>
    <summary>
        Enhances ChatGPT with wide/full/tall-screen + spamblock modes. Also works on poe.com!
    </summary>
    <br>
    <blockquote>
        <a href="https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-widescreen/#readme">
            <img width=600 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-widescreen@91656d3/assets/images/tiles/marquee/tile-625x250.png"></a>
    </blockquote>
</details>

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/browsers/chrome/icon16.png">][cwm-chrome]
> [Chrome][cwm-chrome] /
> [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/browsers/firefox/icon16.png">][cwm-ff]
> [Firefox][cwm-ff] /
> [<img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/browsers/edge/icon16.png">][cwm-edge]
> [Edge][cwm-edge] /
> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][cwm-greasemonkey]
> [Greasemonkey][cwm-greasemonkey] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][cwm-readme]
> [Readme][cwm-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [Discuss][aiweb-discuss]

[cwm-chrome]: https://chromewebstore.google.com/detail/chatgpt-widescreen/jgnjpnmofkalfliddjelaciggjgnphgm?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[cwm-ff]: https://addons.mozilla.org/firefox/addon/chatgpt-widescreen/?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[cwm-edge]: https://microsoftedge.microsoft.com/addons/detail/chatgpt-widescreen-mode/obnaaalnokmchdoagnhmllakaclaaooa
[cwm-greasemonkey]: https://gm.chatgptwidescreen.com
[cwm-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-widescreen/#readme

<!-- DUCKDUCKGPT -->

### [<img width=20 src="https://assets.ddgpt.com/images/icons/app/icon48.png">][ddgpt-readme] [DuckDuckGPT][ddgpt-readme] &nbsp;[<img width="112" height="auto" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light">](https://www.producthunt.com/posts/duckduckgpt)

<details>
    <summary>
        Add AI chat & search summaries to DuckDuckGo, powered by the latest LLMs!
    </summary>
    <br>
    <blockquote>
        <a href="https://github.com/adamlui/ai-web-extensions/tree/main/duckduckgpt/#readme">
            <img width=511 src="https://assets.ddgpt.com/images/screenshots/desktop/how-to-becum-rich-query/lightmode.png"></a>
    </blockquote>
</details>

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][ddgpt-install]
> [Greasemonkey][ddgpt-install] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][ddgpt-readme]
> [Readme][ddgpt-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [Discuss][aiweb-discuss]

[ddgpt-install]: https://github.com/adamlui/ai-web-extensions/tree/main/duckduckgpt/#-installation
[ddgpt-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/duckduckgpt/#readme

<!-- GOOGLEGPT -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/icons/app/white/icon32.png"><img width=19 src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/icons/app/black/icon32.png"></picture>][googlegpt-readme] [GoogleGPT][googlegpt-readme] &nbsp;[<img src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/badges/awesome/badge.svg">][awesome-chatgpt-userscripts]

<details>
    <summary>
        Add AI chat & search summaries to Google Search, powered by the latest LLMs!
    </summary>
    <br>
    <blockquote>
        <a href="https://github.com/adamlui/ai-web-extensions/tree/main/googlegpt/#readme">
            <img width=511 src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt@a363ecf/assets/images/screenshots/desktop/javascript-arrays-query/darkmode.png"></a>
    </blockquote>
</details>

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][googlegpt-install]
> [Greasemonkey][googlegpt-install] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][googlegpt-readme]
> [Readme][googlegpt-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [Discuss][aiweb-discuss]

[googlegpt-install]: https://github.com/adamlui/ai-web-extensions/tree/main/googlegpt/#-installation
[googlegpt-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/googlegpt/#readme

### <img width=23 src="https://assets.chatgptjs.org/images/icons/platforms/thunderbird/icon32.png?v=e638eac"> <a href="https://micz.it/thunderdbird-addon-thunderai/?utm_source=chatgpt.js-github&utm_medium=referral&utm_content=showcase-link" target="_blank" rel="noopener">ThunderAI</a> &nbsp;<a href="https://addons.thunderbird.net/thunderbird/addon/thunderai/reviews" target="_blank" rel="noopener"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/badges/5-star/blue-stars.png?v=e638eac"><img width=92 alt="[Rated 5-stars]" src="https://assets.chatgptjs.org/images/badges/5-star/yellow-stars-in-white-pill.png?v=e638eac"></picture></a>

> Use ChatGPT in Thunderbird to enhance you emails, even with a free account!
<br>[Install](https://addons.thunderbird.net/thunderbird/addon/thunderai/) /
[Readme](https://github.com/micz/ThunderAI#readme) /
[Support](https://github.com/micz/ThunderAI/issues)

<hr>

## 🧠 Contributors

<a href="https://github.com/KudoAI/chatgpt.js/graphs/contributors">
    <img height=111 width="auto" src="https://contrib.rocks/image?repo=KudoAI/chatgpt.js&anon=1&columns=16" /></a>
<br><br>

All contributions are very welcome!

<img height=10px width="100%" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e638eac/assets/images/separators/gradient-aqua.png">

<div align="center">

**[Latest releases](https://github.com/KudoAI/chatgpt.js/releases)** /
[Userguide](https://github.com/KudoAI/chatgpt.js/blob/v3.9.0/docs/USERGUIDE.md) /
[Get support](https://github.com/KudoAI/chatgpt.js/issues) /
[Discuss](https://github.com/KudoAI/chatgpt.js/discussions) /
[Back to top ↑](#top)

</div>

<!-- REF LINKS -->

[aiweb-discuss]: https://github.com/adamlui/ai-web-extensions/discussions
[awesome-chatgpt-userscripts]: https://github.com/awesome-scripts/awesome-userscripts#-chatgpt
