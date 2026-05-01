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
        हिंदी |
        <a href="../..#readme">English</a> |
        <a href="../zh-cn#readme">简体中文</a> |
        <a href="../zh-tw#readme">繁體中文</a> |
        <a href="../ja#readme">日本</a> |
        <a href="../ko#readme">한국인</a> |
        <a href="../ne#readme">नेपाली</a> |
        <a href="../vi#readme">Việt</a>
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

<a href="LICENSE.md" target="_blank" rel="noopener">
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

## ⚡ इंस्टालेशन

### पुस्तकालय

#### <a href="#-nodejs"><img height=14 width="auto" src="https://cdn.jsdelivr.net/gh//adamlui/js-utils@dbdea4b/assets/images/icons/runtimes/node.js/icon25x28.png"></a> Node.js:

आपके प्रोजेक्ट रूट से:

```bash
npm install @kudoai/chatgpt.js
```

#### [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/chrome/icon16.png" title="Chrome">][web-usage][<img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/edge/icon16.png" title="Edge">][web-usage][<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/firefox/icon16.png" title="Firefox">][web-usage][<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/safari/icon16.png" title="Safari">][web-usage][<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/qq/3d/icon-32x33.png" title="QQ Browser">][web-usage] Web:

[web-usage]: #-web

```js
<script src="https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@4/dist/chatgpt.min.js"></script>
```

#### [<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/tampermonkey/icon28.png" title="Tampermonkey">][greasemonkey-usage][<img height="15" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/violentmonkey/icon25.png" title="Violentmonkey">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/scriptcat/icon32.png" title="ScriptCat">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/orangemonkey/icon16.png" title="OrangeMonkey">][greasemonkey-usage][<img height="14" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/stay/icon32.png" title="Stay">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/userscripts/icon32.png" title="Userscripts">][greasemonkey-usage] Greasemonkey:

[greasemonkey-usage]: #-greasemonkey

> **नोट** _स्टार्टर टेम्पलेट इस्तेमाल करने के लिए: [KudoAI/chatgpt.js-greasemonkey-starter](https://github.com/KudoAI/chatgpt.js-greasemonkey-starter)_

```js
// @require https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@4/dist/chatgpt.min.js
// ==/UserScript==
```

#### [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/chrome/icon16.png" title="Chrome">](#-chrome) Chrome:

> **नोट** _स्टार्टर टेम्पलेट इस्तेमाल करने के लिए: [KudoAI/chatgpt.js-chrome-starter](https://github.com/KudoAI/chatgpt.js-chrome-starter)_

1. https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@4/dist/chatgpt.min.js को `lib` में सेव करें

2. प्रोजेक्ट (V3) के `manifest.json` में, `lib/chatgpt.min.js` को वेब एक्सेसिबल रिसोर्स के तौर पर जोड़ें

```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.min.js"]
    }],
```

#

### सीएलआई ऐप

#### <a href="#-nodejs-1"><img height=14 width="auto" src="https://cdn.jsdelivr.net/gh//adamlui/js-utils@dbdea4b/assets/images/icons/runtimes/node.js/icon25x28.png"></a> Node.js:

```bash
npm install -g @kudoai/chatgpt.js
```

#

### एपीआई कुंजियाँ

समर्थित प्रदाता:

<!-- OPENROUTER -->

<details>

<summary>
    <img width=15 src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js/assets/images/icons/providers/openrouter/icon32.png"> <b>OpenRouter</b> — 300+ मॉडल, दर्जनों मुफ़्त
</summary>

<br>

**1. API कुंजी बनाएँ: https://openrouter.ai/settings/keys**

<img height=135 src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e188cf7/assets/images/screenshots/api-provider-dashes/openrouter.png">

**2. एनवायरनमेंट में कुंजी जोड़ें:**

##### Windows:

```bash
setx OPENROUTER_API_KEY "sk-or-v1-8a69..."
```

##### Mac/Linux:

```bash
export OPENROUTER_API_KEY="sk-or-v1-8a69..."
```

</details>

<!-- GOOGLE AI -->

<details>

<summary>
    <img width=15 src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e188cf7/assets/images/icons/providers/googleai/icon32.png"> <b>Google AI</b> — Gemini + Gemma मॉडल
</summary>

<br>

**1. API कुंजी बनाएँ: https://aistudio.google.com/api-keys**

<img height=135 src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e188cf7/assets/images/screenshots/api-provider-dashes/google-ai-studio.png">

**2. एनवायरनमेंट में कुंजी जोड़ें:**

##### Windows:

```bash
setx GOOGLE_API_KEY "AIzaSyB..."
```

##### Mac/Linux:

```bash
export GOOGLE_API_KEY="AIzaSyB..."
```

</details>

<hr>

## 💻 प्रयोग

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

    await chatgpt.isLoaded()
    console.log('ChatGPT is ready!') 
})()
```

#### <a href="#-terminal"><img width=16 height="auto" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@b30a348/assets/images/icons/terminal/black/icon32.png"></a> Terminal:

```bash
chatgpt --query "sup"  # or cjs -q sup
# e.g. => Hey there! What's up?
```

अधिक विकल्पों और उदाहरणों के लिए, विस्तृत उपयोगकर्ता मार्गदर्शिका देखें:

<https://github.com/KudoAI/chatgpt.js/blob/v4.1.0/docs/USERGUIDE.md>

<br><a href="https://github.com/sponsors/KudoAI"><img src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@e53b001/assets/images/banners/sponsor/$10/banner1660x260.png"></a>

<hr>

<div id="showcase">

## 🚀 chatgpt.js के साथ बनाया गया

</div>

<!-- AMAZONGPT -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/KudoAI/amazongpt@579eef3/assets/images/icons/app/white/icon48.png"><img width=18 src="https://cdn.jsdelivr.net/gh/KudoAI/amazongpt@579eef3/assets/images/icons/app/black-gold-teal/icon48.png"></picture>][amazongpt-readme] [AmazonGPT][amazongpt-readme] &nbsp;[<img height=20 src="https://cdn.jsdelivr.net/gh/KudoAI/amazongpt@579eef3/assets/images/badges/wolfram-award/gold-badge.png">](https://cdn.jsdelivr.net/gh/KudoAI/amazongpt@579eef3/assets/wolfram-award/letter.pdf)

<details>
    <summary>
        Amazon शॉपिंग में AI चैट और प्रोडक्ट/कैटेगरी की समरी जोड़ें — जो लेटेस्ट LLMs पर आधारित हैं!
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
> [रीडमी][amazongpt-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [चर्चा करना][aiweb-discuss]

[amazongpt-install]: https://github.com/adamlui/ai-web-extensions/tree/main/amazongpt/#-installation
[amazongpt-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/amazongpt/#readme

<!-- AUTOCLEAR CHATGPT HISTORY -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/autoclear-chatgpt-history@83f1921/assets/images/icons/openai/white/icon32.png"><img width=19 src="https://cdn.jsdelivr.net/gh/adamlui/autoclear-chatgpt-history@83f1921/assets/images/icons/openai/black/icon32.png"></picture>][ach-readme] [ChatGPT इतिहास स्वतः साफ़ करें][ach-readme] &nbsp;[<img src="https://assets.autoclearchatgpt.com/images/badges/awesome/badge.svg">](https://github.com/awesome-scripts/awesome-userscripts#privacy)

<details>
    <summary>
        अधिकतम गोपनीयता के लिए अपनी ChatGPT क्वेरी हिस्ट्री को अपने-आप साफ़ करें।
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
> [रीडमी][ach-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [चर्चा करना][aiweb-discuss]

[ach-install]: https://github.com/adamlui/ai-web-extensions/tree/main/autoclear-chatgpt-history/#-installation
[ach-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/autoclear-chatgpt-history/#readme


<!-- BRAVEGPT -->

### [<img width=21 src="https://assets.bravegpt.com/images/icons/app/icon48.png">][bravegpt-readme] [BraveGPT][bravegpt-readme] &nbsp;[<img width=112 height="auto" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light">](https://www.producthunt.com/posts/bravegpt)

<details>
    <summary>
        Brave Search में AI चैट और सर्च समरी जोड़ें — जो नवीनतम LLMs द्वारा संचालित हैं!
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
> [रीडमी][bravegpt-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [चर्चा करना][aiweb-discuss]

[bravegpt-install]: https://github.com/adamlui/ai-web-extensions/tree/main/bravegpt/#-installation
[bravegpt-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/bravegpt/#readme

<!-- CHATGPT AUTO-CONTINUE -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-continue@7e2c739/assets/images/icons/app/white/icon32.png"><img height=20 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-continue@7e2c739/assets/images/icons/app/black/icon32.png"></picture>][cac-readme] [ChatGPT स्वतः-जारी रखें][cac-readme] &nbsp;[<img src="https://assets.chatgptautocontinue.com/images/badges/awesome/badge.svg">][awesome-chatgpt-userscripts]

<details>
    <summary>
        जब ChatGPT के जवाब बीच में ही कट जाएं, तो अपने-आप जवाब बनाना जारी रखें।
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
> [रीडमी][cac-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [चर्चा करना][aiweb-discuss]

[cac-chrome]: https://chromewebstore.google.com/detail/chatgpt-auto-continue/lbojnhaafilddefkdgmbplkafnckaoga?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[cac-ff]: https://addons.mozilla.org/firefox/addon/chatgpt-auto-continue/?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[cac-edge]: https://microsoftedge.microsoft.com/addons/detail/chatgpt-auto-continue/kaicnimcjamamnlbaeaneofmdjibgepl
[cac-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-continue/#readme

<!-- IDEA CTA -->

<hr>

### क्या आपके पास लाइब्रेरी से जुड़ा कोई विचार या अनुरोध है?

नई चर्चा शुरू करें: https://github.com/KudoAI/chatgpt.js/discussions/new?category=ideas

<hr>

<!-- CHATGPT AUTO REFRESH -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautorefresh.com/images/icons/openai/white/icon32.png"><img width=19 src="https://assets.chatgptautorefresh.com/images/icons/openai/black/icon32.png"></picture>][car-readme] [ChatGPT ऑटो रिफ्रेश ↻][car-readme] &nbsp;[<img src="https://assets.chatgptautorefresh.com/images/badges/awesome/badge.svg">][awesome-chatgpt-userscripts]

ChatGPT सेशन को ताज़ा रखता है, जिससे चैट की समय सीमा, नेटवर्क एरर और Cloudflare चेक की समस्याएँ खत्म हो जाती हैं।

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][car-install]
> [Greasemonkey][car-install] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][car-readme]
> [रीडमी][car-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [चर्चा करना][aiweb-discuss]

[car-install]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-refresh/#-installation
[car-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-refresh/#readme

<!-- CHATGPT AUTO-TALK -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautotalk.com/images/icons/openai/white/icon32.png"><img width=19 src="https://assets.chatgptautotalk.com/images/icons/openai/black/icon32.png"></picture>][cat-readme] [ChatGPT ऑटो-टॉक 📣][cat-readme] &nbsp;[<img src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@2f5a19c/assets/images/badges/awesome/badge.svg">][awesome-chatgpt-userscripts]

ChatGPT जवाबों को अपने-आप चलाएँ।

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][cat-install]
> [Greasemonkey][cat-install] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][cat-readme]
> [रीडमी][cat-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [चर्चा करना][aiweb-discuss]

[cat-install]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-talk/#-installation
[cat-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-talk/#readme

<!-- CHATGPT INFINITY -->

### [<img width=20 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@c587927/assets/images/icons/infinity-symbol/circled/icon32.png">][ci-readme] [ ][ci-readme] &nbsp;[<img height=20 src="https://assets.chatgptinfinity.com/images/badges/chrome-web-store/featured-by-google/badge500x91.png">][ci-chrome]

<details>
    <summary>
        सर्वज्ञ ChatGPT से (किसी भी विषय पर!) अनगिनत जवाब पाएँ।
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
> [रीडमी][ci-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [चर्चा करना][aiweb-discuss]

[ci-chrome]: https://chromewebstore.google.com/detail/chatgpt-infinity/amikeononomkhphopbflomhnmdijjpmb?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[ci-ff]: https://addons.mozilla.org/firefox/addon/chatgpt-infinity/?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[ci-edge]: https://microsoftedge.microsoft.com/addons/detail/chatgpt-infinity/jgonecnbmehicpdpjkdekamhmlebfagb
[ci-greasemonkey]: https://gm.chatgptinfinity.com
[ci-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-infinity/#readme

<!-- CHATGPT WIDESCREEN -->

### [<img width=19 src="https://assets.chatgptwidescreen.com/images/icons/widescreen-robot-emoji/icon32.png">][cwm-readme] [ChatGPT वाइडस्क्रीन][cwm-readme] &nbsp;[<img height=20 src="https://assets.chatgptwidescreen.com/images/badges/chrome-web-store/featured-by-google/badge500x91.png">][cwm-readme]

<details>
    <summary>
        ChatGPT को Wide/Full/Tall-screen + Spam-block Modes के साथ बेहतर बनाता है। यह poe.com पर भी काम करता है!
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
> [रीडमी][cwm-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [चर्चा करना][aiweb-discuss]

[cwm-chrome]: https://chromewebstore.google.com/detail/chatgpt-widescreen/jgnjpnmofkalfliddjelaciggjgnphgm?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[cwm-ff]: https://addons.mozilla.org/firefox/addon/chatgpt-widescreen/?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[cwm-edge]: https://microsoftedge.microsoft.com/addons/detail/chatgpt-widescreen-mode/obnaaalnokmchdoagnhmllakaclaaooa
[cwm-greasemonkey]: https://gm.chatgptwidescreen.com
[cwm-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-widescreen/#readme

<!-- DUCKDUCKGPT -->

### [<img width=20 src="https://assets.ddgpt.com/images/icons/app/icon48.png">][ddgpt-readme] [DuckDuckGPT][ddgpt-readme] &nbsp;[<img width="112" height="auto" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light">](https://www.producthunt.com/posts/duckduckgpt)

<details>
    <summary>
        DuckDuckGo में AI चैट और सर्च समरीज़ जोड़ें — जो नवीनतम LLMs द्वारा संचालित हैं! 
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
> [रीडमी][ddgpt-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [चर्चा करना][aiweb-discuss]

[ddgpt-install]: https://github.com/adamlui/ai-web-extensions/tree/main/duckduckgpt/#-installation
[ddgpt-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/duckduckgpt/#readme

<!-- GOOGLEGPT -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/icons/app/white/icon32.png"><img width=19 src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/icons/app/black/icon32.png"></picture>][googlegpt-readme] [GoogleGPT][googlegpt-readme] &nbsp;[<img src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/badges/awesome/badge.svg">][awesome-chatgpt-userscripts]

<details>
    <summary>
        Google Search में AI चैट और सर्च समरी जोड़ें — जो नवीनतम LLMs द्वारा संचालित हैं!
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
> [रीडमी][googlegpt-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [चर्चा करना][aiweb-discuss]

[googlegpt-install]: https://github.com/adamlui/ai-web-extensions/tree/main/googlegpt/#-installation
[googlegpt-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/googlegpt/#readme

### <img width=23 src="https://assets.chatgptjs.org/images/icons/platforms/thunderbird/icon32.png?v=e638eac"> <a href="https://micz.it/thunderdbird-addon-thunderai/?utm_source=chatgpt.js-github&utm_medium=referral&utm_content=showcase-link" target="_blank" rel="noopener">ThunderAI</a> &nbsp;<a href="https://addons.thunderbird.net/thunderbird/addon/thunderai/reviews" target="_blank" rel="noopener"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/badges/5-star/blue-stars.png?v=e638eac"><img width=92 alt="[5-सितारा रेटिंग]" src="https://assets.chatgptjs.org/images/badges/5-star/yellow-stars-in-white-pill.png?v=e638eac"></picture></a>

> अपने ईमेल को बेहतर बनाने के लिए थंडरबर्ड में चैटजीपीटी का उपयोग करें, यहां तक कि मुफ़्त खाते के साथ भी!
<br>[इंस्टॉल](https://addons.thunderbird.net/thunderbird/addon/thunderai/) /
[रीडमी](https://github.com/micz/ThunderAI#readme) /
[सहायता](https://github.com/micz/ThunderAI/issues)

<hr>

## 🧠 योगदानकर्ता

<a href="https://github.com/KudoAI/chatgpt.js/graphs/contributors">
    <img height=111 width="auto" src="https://contrib.rocks/image?repo=KudoAI/chatgpt.js&anon=1&columns=16" /></a>
<br><br>

सभी योगदान का बहुत स्वागत है!

<hr>

## 🏛️ लाइसेंस

### MIT लाइसेंस

**कॉपीराइट © 2023–2026 [KudoAI](https://github.com/KudoAI) और योगदानकर्ता**

इसके द्वारा, किसी भी ऐसे व्यक्ति को, जिसे इस सॉफ़्टवेयर और संबंधित दस्तावेज़ फ़ाइलों ("सॉफ़्टवेयर") की एक प्रति प्राप्त होती है, बिना किसी शुल्क के यह अनुमति दी जाती है कि वह सॉफ़्टवेयर के साथ बिना किसी प्रतिबंध के व्यवहार करे; इसमें सॉफ़्टवेयर का उपयोग करने, उसकी प्रतिलिपि बनाने, उसे संशोधित करने, उसे मिलाने (merge), उसे प्रकाशित करने, उसे वितरित करने, उसका सब-लाइसेंस देने, और/या उसकी प्रतियां बेचने के अधिकार शामिल हैं (लेकिन इन्हीं तक सीमित नहीं हैं), और साथ ही उन व्यक्तियों को भी ऐसा करने की अनुमति देने का अधिकार शामिल है जिन्हें यह सॉफ़्टवेयर प्रदान किया गया है, बशर्ते कि निम्नलिखित शर्तें पूरी हों:

उपरोक्त कॉपीराइट सूचना और यह अनुमति सूचना, सॉफ़्टवेयर की सभी प्रतियों या उसके महत्वपूर्ण हिस्सों में शामिल होनी चाहिए।

यह सॉफ़्टवेयर "जैसा है" (AS IS) आधार पर प्रदान किया जाता है, बिना किसी भी प्रकार की वारंटी के, चाहे वह स्पष्ट हो या निहित; इसमें व्यापारिकता (merchantability), किसी विशेष उद्देश्य के लिए उपयुक्तता, और गैर-उल्लंघन (non-infringement) की वारंटियां शामिल हैं, लेकिन इन्हीं तक सीमित नहीं हैं। किसी भी स्थिति में, सॉफ़्टवेयर या उसके उपयोग या उसके साथ किए गए अन्य व्यवहारों से उत्पन्न होने वाले किसी भी दावे, क्षति, या अन्य दायित्व के लिए, चाहे वह अनुबंध (contract) के तहत हो, अपकृत्य (tort) के तहत हो, या अन्यथा हो, लेखक या कॉपीराइट धारक उत्तरदायी नहीं होंगे।

<img height=10px width="100%" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e638eac/assets/images/separators/gradient-aqua.png">

<div align="center">

<picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/js-utils@6b0d399/assets/images/icons/tag/white/icon16.svg"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/js-utils@6b0d399/assets/images/icons/tag/dark-gray/icon16.svg"></picture>
**[हाल की रिलीज़](https://github.com/KudoAI/chatgpt.js/releases)** /
[यूजरगाइड](https://github.com/KudoAI/chatgpt.js/blob/v4.1.0/docs/USERGUIDE.md) /
[सहायता प्राप्त करें](https://github.com/KudoAI/chatgpt.js/issues) /
[चर्चा करना](https://github.com/KudoAI/chatgpt.js/discussions) /
<a href="#top">वापस शीर्ष पर ↑</a>

</div>

<!-- REF LINKS -->

[aiweb-discuss]: https://github.com/adamlui/ai-web-extensions/discussions
[awesome-chatgpt-userscripts]: https://github.com/awesome-scripts/awesome-userscripts#-chatgpt
