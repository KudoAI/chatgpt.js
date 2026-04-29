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
        Nederlands |
        <a href="../..#readme">English</a> |
        <a href="../zh-cn#readme">简体中文</a> |
        <a href="../zh-tw#readme">繁體中文</a> |
        <a href="../ja#readme">日本</a> |
        <a href="../ko#readme">한국인</a> |
        <a href="../hi#readme">हिंदी</a> |
        <a href="../ne#readme">नेपाली</a> |
        <a href="../de#readme">Deutsch</a> |
        <a href="../es#readme">Español</a> |
        <a href="../fr#readme">Français</a> |
        <a href="../it#readme">Italiano</a> |
        <a href="../pt#readme">Português</a> |
        <a href="../ru#readme">Английский</a> |
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

### 🤖 Een krachtige client-side JavaScript-bibliotheek voor ChatGPT

</div>

<br>

<div id="shields" align="center">

<a href="LICENSE.md" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/Licentie-MIT-orange.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@kudoai/chatgpt.js/v/latest" target="_blank" rel="noopener">
    <img src="https://img.shields.io/npm/v/%40kudoai%2Fchatgpt.js?logo=npm&logoColor=white&labelColor=464646&color=blue&style=for-the-badge&label=Laatste+Release"></a>
<a href="https://github.com/KudoAI/chatgpt.js/tree/v3.9.0/dist/chatgpt.min.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/github/size/KudoAI/chatgpt.js/dist/chatgpt.min.js?branch=v3.9.0&label=Geminimaliseerde%20grootte&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge"></a>
<a href="https://www.codefactor.io/repository/github/kudoai/chatgpt.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=Codekwaliteit&logo=codefactor&logoColor=white&labelColor=464646&color=1acc6c&style=for-the-badge"></a>
<a href="https://sonarcloud.io/component_measures?metric=vulnerabilities&id=kudoai_chatgpt.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dkudoai_chatgpt.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonar&logoColor=white&labelColor=464646&label=Kwetsbaarheden&color=gold"></a>
<a href="https://github.com/sindresorhus/awesome-chatgpt#javascript" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/Vermeld_in-Awesome-af68ff?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="#">
    <img src="https://img.shields.io/badge/jsDelivr--verzoeken-2,000,000+-2bbbd8.svg?logo=jsdelivr&logoColor=white&labelColor=464646&style=for-the-badge"></a>

</div>

<br>

<hr>

## ⚡ De bibliotheek importeren

</div>

#### [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/chrome/icon16.png" title="Chrome">][web-usage][<img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/edge/icon16.png" title="Edge">][web-usage][<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/firefox/icon16.png" title="Firefox">][web-usage][<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/safari/icon16.png" title="Safari">][web-usage][<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/qq/3d/icon-32x33.png" title="QQ Browser">][web-usage] Web:

[web-usage]: #-web

```js
<script src="https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3/dist/chatgpt.min.js"></script>
```

#### [<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/tampermonkey/icon28.png" title="Tampermonkey">][greasemonkey-usage][<img height="15" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/violentmonkey/icon25.png" title="Violentmonkey">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/scriptcat/icon32.png" title="ScriptCat">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/orangemonkey/icon16.png" title="OrangeMonkey">][greasemonkey-usage][<img height="14" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/stay/icon32.png" title="Stay">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/userscripts/icon32.png" title="Userscripts">][greasemonkey-usage] Greasemonkey:

[greasemonkey-usage]: #-greasemonkey

> **Nota** _Een startsjabloon gebruiken: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/KudoAI/chatgpt.js-greasemonkey-starter)_

```js
...
// @require https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3/dist/chatgpt.min.js
// ==/UserScript==

// Uw code hier...
```

### <img style="margin: 0 2px -1px 0" height=16 src="https://assets.chatgptjs.org/images/icons/platforms/chrome/icon16.png?v=e638eac"> Chrome:

> **Nota** _Een startsjabloon gebruiken: [kudoai/chatgpt.js-chrome-starter](https://github.com/KudoAI/chatgpt.js-chrome-starter)_

Omdat Google geen externe code toestaat, is het lokaal importeren van chatgpt.js vereist:

1. Sla https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3/dist/chatgpt.min.js op in een subdirectory (`lib` in dit voorbeeld)

2. Voeg in project's (V3) `manifest.json` `lib/chatgpt.min.js` toe als een webtoegankelijke bron
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.min.js"]
    }],
```

3. In scripts die `chatgpt.js` nodig hebben (zowel voorgrond als achtergrond), importeer je het als volgt:
```js
(async () => {
    await import(chrome.runtime.getURL('lib/chatgpt.min.js'))
    // Uw code hier...
})()
```

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="npm">

## 💾 Downloaden via npm:

</div>

Om **chatgpt.js** te downloaden voor lokale aanpassingen, voert u de volgende opdracht uit in de hoofdmap van uw project:

```bash
npm install @kudoai/chatgpt.js
```

Na de installatie navigeert u naar `node_modules/@kudoai/chatgpt.js` om de bibliotheekbron te vinden.

</div>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="usage">

## 💻 Gebruik

</div>

**chatgpt.js** is geschreven met ultraflexibiliteit in het achterhoofd.

Bijvoorbeeld:

```js
chatgpt.getLastResponse()
chatgpt.getLastReply()
chatgpt.response.getLast()
chatgpt.get('reply', 'last')
```

Elke oproep haalt gelijkelijk het laatste antwoord op. Als je denkt dat het werkt, zal het waarschijnlijk... dus typ het gewoon!

Als dit niet het geval is, bekijk dan de uitgebreide [gebruikershandleiding](https://github.com/KudoAI/chatgpt.js/blob/v3.9.0/docs/USERGUIDE.md), of dien gewoon een [probleem](https://github.com/KudoAI/chatgpt.js/issues) in of [PR](https://github.com/KudoAI/chatgpt.js/pulls) en het wordt geïntegreerd, makkelijk!

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="showcase">

## 🤖 Gemaakt met chatgpt.js

</div>

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://amazongpt.kudoai.com/assets/images/icons/app/white/icon48.png"><img width=20 src="https://amazongpt.kudoai.com/assets/images/icons/app/black-gold-teal/icon48.png"></picture> [AmazonGPT](https://amazongpt.kudoai.com)  &nbsp;<a href="https://amazongpt.kudoai.com/assets/wolfram-award/letter.pdf" target="_blank" rel="noopener"><img height=20 src="https://amazongpt.kudoai.com/assets/images/badges/wolfram-award/gold-badge.png" style="margin:0 0 -2px 5px"></a>

> Voeg AI-chat en product-/categoriesamenvattingen toe aan Amazon Shopping, mogelijk gemaakt door de nieuwste LLM's!
<br>[Install](https://raw.githubusercontent.com/KudoAI/amazongpt/main/greasemonkey/amazongpt.user.js) /
[Readme](https://amazongpt.kudoai.com/#readme) /
[Discuss](https://github.com/KudoAI/amazongpt/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.autoclearchatgpt.com/images/icons/openai/white/icon48.png?cece513"><img width=21 src="https://assets.autoclearchatgpt.com/images/icons/openai/black/icon48.png?cece513"></picture> [Wis ChatGPT Geschiedenis](https://autoclearchatgpt.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://assets.autoclearchatgpt.com/images/badges/awesome/badge.svg?2c0d9fc" style="margin:0 0 -2px 5px"></a>

> Wis automatisch uw ChatGPT-querygeschiedenis voor maximale privacy.
<br>[Installeren](https://docs.autoclearchatgpt.com/#-installation) /
[Leesmij](https://docs.autoclearchatgpt.com/#readme) /
[Bespreken](https://github.com/adamlui/autoclear-chatgpt-history/discussions)

### <img width=24 src="https://assets.bravegpt.com/images/icons/app/icon48.png"> [BraveGPT](https://bravegpt.com) &nbsp;<a href="https://www.producthunt.com/posts/bravegpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="auto" /></a>

> Voeg AI-chat en zoeksamenvattingen toe aan Brave Search, mogelijk gemaakt door de nieuwste LLM's!
<br>[Installeren](https://docs.bravegpt.com/#-installation) /
[Leesmij](https://docs.bravegpt.com/#readme) /
[Bespreken](https://github.com/KudoAI/bravegpt/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautocontinue.com/images/icons/continue-symbol/white/icon48.png?v=61c4f16"><img width=21 src="https://assets.chatgptautocontinue.com/images/icons/continue-symbol/black/icon48.png?v=61c4f16"></picture> [ChatGPT Auto-Doorgaan ⏩](https://chatgptautocontinue.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://assets.chatgptautocontinue.com/images/badges/awesome/badge.svg?3c80c0c" style="margin:0 0 -3px 3px"></a>

> Blijf automatisch antwoorden genereren wanneer ChatGPT-reacties worden afgebroken.
<br>[Installeren](https://docs.chatgptautocontinue.com/#-installation) /
[Leesmij](https://docs.chatgptautocontinue.com/#readme) /
[Bespreken](https://github.com/adamlui/chatgpt-auto-continue/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/white/icon64.png"><img width=21 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/black/icon64.png"></picture> [ChatGPT Auto-Praten 📣](https://github.com/adamlui/chatgpt-auto-talk)

> Automatisch afspelen van ChatGPT-reacties.
<br>[Install](https://gm.chatgptautotalk.com) /
[Readme](https://github.com/adamlui/chatgpt-auto-talk#readme) /
[Discuss](https://github.com/adamlui/chatgpt-auto-talk/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautorefresh.com/images/icons/openai/white/icon48.png?a45cf1e"><img width=21 src="https://assets.chatgptautorefresh.com/images/icons/openai/black/icon48.png?a45cf1e"></picture> [ChatGPT Automatische Vernieuwing ↻](https://chatgptautorefresh.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://assets.chatgptautorefresh.com/images/badges/awesome/badge.svg?1080f44" style="margin:0 0 -2px 5px"></a>

> Houdt ChatGPT-sessies actueel en elimineert chattijdlimieten + netwerkfouten + Cloudflare-controles.
<br>[Installeren](https://docs.chatgptautorefresh.com/#-installation) /
[Leesmij](https://docs.chatgptautorefresh.com/#readme) /
[Bespreken](https://github.com/adamlui/chatgpt-auto-refresh/discussions)

### <img width=23 src="https://assets.ddgpt.com/images/icons/app/icon48.png"> [DuckDuckGPT](https://duckduckgpt.com) &nbsp;<a href="https://www.producthunt.com/posts/duckduckgpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> Voeg AI-chat en zoeksamenvattingen toe aan DuckDuckGo, mogelijk gemaakt door de nieuwste LLM's!
<br>[Installeren](https://docs.ddgpt.com/#-installation) /
[Leesmij](https://docs.ddgpt.com/#readme) /
[Bespreken](https://github.com/KudoAI/duckduckgpt/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/icons/app/white/icon48.png"><img width=21 src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/icons/app/black/icon48.png"></picture> [GoogleGPT](https://github.com/KudoAI/googlegpt/#readme) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt@e442863/assets/images/badges/awesome/badge.svg" style="margin:0 0 -2px 5px"></a>

> Voeg AI-chat en zoeksamenvattingen toe aan Google Zoeken, mogelijk gemaakt door de nieuwste LLM's!
<br>[Installeren](https://raw.githubusercontent.com/KudoAI/googlegpt/refs/heads/main/greasemonkey/googlegpt.user.js) /
[Leesmij](https://github.com/KudoAI/googlegpt/#readme) /
[Bespreken](https://github.com/KudoAI/googlegpt/discussions)

### <img width=23 src="https://assets.chatgptjs.org/images/icons/platforms/thunderbird/icon32.png?v=e638eac"> <a href="https://micz.it/thunderdbird-addon-thunderai/?utm_source=chatgpt.js-github&utm_medium=referral&utm_content=showcase-link" target="_blank" rel="noopener">ThunderAI</a> &nbsp;<a href="https://addons.thunderbird.net/thunderbird/addon/thunderai/reviews" target="_blank" rel="noopener"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/badges/5-star/blue-stars.png?v=e638eac"><img width=92 alt="[Beoordeeld met 5 sterren]" src="https://assets.chatgptjs.org/images/badges/5-star/yellow-stars-in-white-pill.png?v=e638eac"></picture></a>

> Gebruik ChatGPT in Thunderbird om uw e-mails te verbeteren, zelfs met een gratis account!
<br>[Installeren](https://addons.thunderbird.net/thunderbird/addon/thunderai/) /
[Leesmij](https://github.com/micz/ThunderAI#readme) /
[Steun](https://github.com/micz/ThunderAI/issues)

<p><br>

<a href="https://chatgptinfinity.com" target="_blank" rel="noopener">
    <img width=555 src="https://assets.chatgptinfinity.com/images/tiles/marquee/tile-1400x560.png?v=34b428b">
</a>

<p><br>

<a href="https://chatgptwidescreen.com/?utm_source=chatgpt.js-github&utm_medium=referral&utm_content=showcase-tile" target="_blank" rel="noopener">
    <img width=555 src="https://assets.chatgptwidescreen.com/images/tiles/marquee/tile-1400x560.png?v=4c5d018">
</a>

<p><br>

<p id="showcase-cta">
Als je iets hebt gemaakt met chatgpt.js dat je wilt delen, stuur dan een e-mail naar <a href="mailto:showcase@chatgptjs.org">showcase@chatgptjs.org</a> of open gewoon een <a href="https://github.com/KudoAI/chatgpt.js/pulls" target="_blank" rel="noopener">pull request</a>!
</p>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

## 🧠 Bijdragers

<a href="https://github.com/KudoAI/chatgpt.js/graphs/contributors">
    <img height=111 width="auto" src="https://contrib.rocks/image?repo=KudoAI/chatgpt.js&anon=1&columns=16" /></a>
<br><br>

Alle bijdragen zijn van harte welkom!

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div align="center">

**[Uitgaven](https://github.com/KudoAI/chatgpt.js/releases)** /
[gebruikershandleiding](https://github.com/KudoAI/chatgpt.js/blob/v3.9.0/docs/USERGUIDE.md) /
[Bespreken](https://github.com/KudoAI/chatgpt.js/discussions) /
<a href="#top">Terug naar boven ↑</a>

</div>
