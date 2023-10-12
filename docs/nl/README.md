<div id="repo-cover" align="center">

<div align="center">

###### <a href="https://github.com/kudoai/chatgpt.js/tree/main/docs"><img height=15 style="margin: 0 3px -2px" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/0fc3060273fcff77d3e2ff968d5c74acdab62beb/media/images/icons/earth-americas-icon32.svg"></a> Nederlands | <a href="../..#readme">English</a> | <a href="../zh-cn#readme">简体中文</a> | <a href="../zh-tw#readme">繁體中文</a> | <a href="../ja#readme">日本</a> | <a href="../ko#readme">한국인</a> | <a href="../hi#readme">हिंदी</a> | <a href="../de#readme">Deutsch</a> | <a href="../es#readme">Español</a> | <a href="../fr#readme">Français</a> | <a href="../it#readme">Italiano</a> | <a href="../pt#readme">Português</a> | <a href="../vi#readme">Việt</a>

</div>
<br><br>

<picture>
    <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
    <img width=700 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
</picture>
<br>

### 🤖 Een krachtige client-side JavaScript-bibliotheek voor ChatGPT

</div>
<br><br>

<div id="shields" align="center">

[![](https://img.shields.io/badge/Licentie-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/kudoai/chatgpt.js?label=Begaat&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/kudoai/chatgpt.js/commits/main)
![](https://img.shields.io/github/size/kudoai/chatgpt.js/dist/chatgpt-2.3.7.min.js?label=Minified%20Size&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge)
[![](https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=Codekwaliteit&logo=codefactor&logoColor=white&labelColor=464646&color=29c3c5&style=for-the-badge)](https://www.codefactor.io/repository/github/kudoai/chatgpt.js)
[![](https://img.shields.io/badge/Vermeld_in-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/sindresorhus/awesome-chatgpt#javascript)
[![](https://img.shields.io/badge/Uitgelicht_op-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.producthunt.com/posts/chatgpt-js)
[![](https://img.shields.io/badge/Officiële_Selectie-Artizen_Seizoen_3-1acc6c?logo=image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgZmlsbD0nI2ZmZicgdmlld0JveD0nMCAwIDE2MCAxMjgnPjxwYXRoIGQ9J00xNTkuODk2IDExOC45ODRDMTU5Ljg5NiAxMTYuODgxIDE1OC4wODggMTE1LjA3OCAxNTUuOTc5IDExNS4wNzhDMTQ0LjAyOCAxMTUuMDc4IDEzMi4xNzggMTEzLjU3NiAxMjEuMDMxIDEwOS43NzFDMTE1LjEwNiAxMDcuNzY5IDEwOS4yODEgMTA0Ljc2NSAxMDQuMzYgMTAwLjc1OUMxMTQuNzA0IDkxLjg0NzUgMTIzLjU0MSA4MS4zMzM1IDEyOS43NjggNjkuMTE3MkMxMzIuODgxIDYyLjkwOSAxMzUuMzkyIDU1Ljg5OTcgMTM0LjQ4OCA0OC43OTAyQzEzMy4wODIgMzguNDc2NSAxMjQuNTQ2IDMyLjQ2ODUgMTE0LjUwMyAzMS44Njc3Qzk4LjIzNCAzMC41NjYgODQuMDczOSAzOS45Nzg1IDc3LjE0NDQgNTQuMzk3N0M3My43Mjk5IDYxLjQwNyA3Mi4yMjM1IDY5LjMxNzUgNzIuNzI1NyA3Ny4xMjc5QzczLjEyNzQgODUuNjM5MiA3Ni4xNDAyIDkzLjY0OTkgODAuODYwMiAxMDAuNDU5QzY4LjcwODYgMTA4LjA2OSA1NC44NDk4IDExMi44NzUgNDAuNjg5NyAxMTIuOTc2QzM3LjE3NDcgMTEyLjk3NiAzMy41NTk0IDExMi43NzUgMzAuMTQ0OSAxMTIuMDc0QzI2LjkzMTIgMTExLjM3MyAyMy43MTc2IDExMC4wNzIgMjEuNDA3OCAxMDcuNzY5QzE2LjY4NzcgMTAyLjg2MiAxNy4zOTA3IDk1LjY1MjUgMTguOTk3NiA4OS4xNDM5QzIyLjkxNDIgNzUuMTI1MiAzMS43NTE3IDYyLjYwODYgNDEuNTkzNSA1MS44OTQzQzUxLjAzMzYgNDEuNzgwOSA2NC43OTIgMzAuNDY1OCA3OC45NTIxIDI2Ljk2MTJDODMuMzcwOSAyNS44NTk3IDg2LjU4NDUgMjIuMTU0OCA4Ny4yODc1IDE3LjY0ODhDODcuNDg4NCAxNS45NDY1IDg3LjY4OTIgMTQuMjQ0MiA4Ny42ODkyIDEyLjQ0MTlDODcuNjg5MiAxMC42Mzk1IDg3LjM4NzkgNy42MzU0NiA4Ny4wODY2IDUuNTMyNjZDODYuNDg0MSAyLjEyODEzIDgzLjM3MDkgLTAuMjc1MDY2IDc5Ljg1NTkgMC4wMjUzMzNDNzcuMDQ0IDAuMjI1NiA3NC4yMzIxIDAuNzI2MjY2IDcxLjUyMDYgMS40MjcyQzU0LjQ0ODEgNi4wMzMzMyA0MC4wODcxIDE4LjA0OTMgMjguNzM4OSAzMS4wNjY2QzE0LjM3NzkgNDcuNjg4NyAwLjgyMDM3MyA3MS4yMiAwLjAxNjk2MjMgOTMuNjQ5OUMtMC4zODQ3NDMgMTA4LjI2OSA2LjM0MzgyIDEyMC43ODYgMjAuNzA0OCAxMjUuNTkyQzI1LjcyNjEgMTI3LjI5NSAzMS4wNDg3IDEyNy44OTUgMzYuMjcwOSAxMjcuOTk2QzU1LjY1MzIgMTI4LjE5NiA3NC40MzI5IDEyMS41ODcgOTAuNTAxMSAxMTEuMTczQzkzLjgxNTIgMTEzLjk3NyA5Ny41MzEgMTE2LjM4IDEwMS40NDggMTE4LjI4M0MxMTcuMzE1IDEyNi4zOTMgMTM1LjM5MiAxMjcuOTk2IDE1Mi44NjYgMTI3Ljc5NUMxNTMuNzcgMTI3Ljc5NSAxNTQuODc0IDEyNy43OTUgMTU1Ljk3OSAxMjcuNzk1QzE1OC4xODkgMTI3Ljc5NSAxNjAuMDk3IDEyNS45OTMgMTU5Ljk5NiAxMjMuNzlWMTE4Ljk4NEgxNTkuODk2Wk05Mi4yMDg0IDgyLjEzNDZDODkuMzk2NSA2OS45MTgzIDk1LjYyMjkgNTUuMDk4NiAxMDguMTc2IDUxLjQ5MzhDMTEwLjI4NSA1MC44OTMgMTEyLjU5NSA1MC41OTI2IDExNC44MDQgNTAuNjkyN0MxMTUuMzA2IDUwLjY5MjcgMTE1LjgwOSA1MC43OTI5IDExNi4yMSA1MC44OTNDMTE2LjYxMiA1MC45OTMxIDExNi44MTMgNTEuMDkzMyAxMTcuMTE0IDUxLjM5MzdDMTE3LjgxNyA1Mi4wOTQ2IDExNy41MTYgNTMuNzk2OSAxMTcuNDE1IDU1LjA5ODZDMTE2LjkxMyA1OC41MDMxIDExNS41MDcgNjIuMzA4MiAxMTMuOCA2NS41MTI1QzEwOS4wOCA3NC4yMjQgMTAyLjU1MiA4Mi41MzUxIDk0LjkxOTkgODkuNTQ0NEM5My43MTQ4IDg3LjI0MTQgOTIuODExIDg0LjczOCA5Mi4yMDg0IDgyLjEzNDZaJy8+PC9zdmc+&labelColor=464646&style=for-the-badge)](https://www.artizen.fund/)
![](https://img.shields.io/jsdelivr/gh/hm/kudoai/chatgpt.js?label=jsDelivr+Verzoeken&logo=jsdelivr&logoColor=white&labelColor=464646&color=gold&style=for-the-badge)

</div>

<div id="intro">

## Over

</div>

<span style="color: white">chatgpt.js</span> is een <span style="color: white">krachtige</span> JavaScript-bibliotheek die <span style="color: white">supergemakkelijke</span> interactie mogelijk maakt met de ChatGPT DOM.

- Rijk aan functies
- Objectgericht
- Makkelijk te gebruiken
- Lichtgewicht (maar toch optimaal presterend)

<img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/docs/assets/separators/aqua.png">

<div id="importing">

## ⚡ De bibliotheek importeren

</div>

### ES6:

```js
(async () => {
    await import('https://code.chatgptjs.org/chatgpt-latest.min.js');
    // Uw code hier...
})();
```

### ES5:

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://code.chatgptjs.org/chatgpt-latest.min.js');
xhr.onload = function () {
    if (xhr.status === 200) {
        var chatgptJS = document.createElement('script');
        chatgptJS.textContent = xhr.responseText;
        document.head.appendChild(chatgptJS);
        yourCode(); // voert uw code uit
    }
};
xhr.send();

function yourCode() {
    // Uw code hier...
}
```

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/starters/media/images/icons/tampermonkey-icon28.png"></picture><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/starters/media/images/icons/violentmonkey-icon100.png"> Greasemonkey:

> **Nota** _Een startsjabloon gebruiken: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/kudoai/chatgpt.js-greasemonkey-starter)_

Userscript-repository's zoals Greasy Fork houden een witte lijst bij van vooraf goedgekeurde CDN's (zoals commit-specifieke referenties van `cdn.jsdelivr.net`), dus de import-URL is aanzienlijk langer om de publiceerbaarheid naar deze sites te behouden:

```js
...
// @require https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@9640b2352009d5f04344eb515780414b7b1ec2b2/dist/chatgpt-2.3.7.min.js
// ==/UserScript==

// Uw code hier...
```

Als u niet van plan bent om naar deze repo's te publiceren, kunt u in plaats daarvan de eenvoudigere `https://code.chatgptjs.org/chatgpt-latest.min.js` gebruiken om de nieuwste verkleinde release te importeren.

### <img style="margin: 0 2px -1px 0" height=16 src="https://www.google.com/chrome/static/images/favicons/apple-icon-60x60.png"> Chrome:

> **Nota** _Een startsjabloon gebruiken: [kudoai/chatgpt.js-chrome-starter](https://github.com/kudoai/chatgpt.js-chrome-starter)_

Aangezien Google [uiteindelijk uitfaseert](https://developer.chrome.com/docs/extensions/migrating/mv2-sunset/) Manifest V2, is externe code niet langer toegestaan, dus het lokaal importeren van chatgpt.js is ideaal:

1. Sla https://raw.githubusercontent.com/kudoai/chatgpt.js/main/chatgpt.js op in een subdirectory (`lib` in dit voorbeeld)

2. ES6-exportinstructie toevoegen aan het einde van `lib/chatgpt.js`
```js
...
export { chatgpt }
```

3. Voeg in project's (V3) `manifest.json` `lib/chatgpt.js` toe als een webtoegankelijke bron
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.js"]
    }],
```

4. In scripts die `chatgpt.js` nodig hebben (zowel voorgrond als achtergrond), importeer je het als volgt:
```js
(async () => {
    const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'));
    // Uw code hier...
})();
```

<img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/docs/assets/separators/aqua.png">

<div id="usage">

## 💻 Gebruik

</div>

**chatgpt.js** is geschreven met ultraflexibiliteit in het achterhoofd.

Bijvoorbeeld:

```js
chatgpt.getLastResponse();
chatgpt.getLastReply();
chatgpt.response.getLast();
chatgpt.get('reply', 'last');
```

Elke oproep haalt gelijkelijk het laatste antwoord op. Als je denkt dat het werkt, zal het waarschijnlijk... dus typ het gewoon!

Als dit niet het geval is, bekijk dan de uitgebreide [gebruikershandleiding](https://github.com/kudoai/chatgpt.js/blob/main/docs/USERGUIDE.md), of dien gewoon een [probleem](https://github.com/kudoai/chatgpt.js/issues) in of [PR](https://github.com/kudoai/chatgpt.js/pulls) en het wordt geïntegreerd, makkelijk!

<img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/docs/assets/separators/aqua.png">

<div id="showcase">

## 🤖 Gemaakt met chatgpt.js

</div>

https://github.com/KudoAI/chatgpt.js/assets/10906554/f53c740f-d5e0-49b6-ae02-3b3140b0f8a4

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [Wis ChatGPT Geschiedenis](https://autoclearchatgpt.com) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

Wis automatisch uw ChatGPT-querygeschiedenis voor maximale privacy.
<br>[Installeren](https://github.com/adamlui/autoclear-chatgpt-history#installation) /
[Leesmij](https://github.com/adamlui/autoclear-chatgpt-history#readme) /
[Bespreken](https://autoclearchatgpt.com/discuss)

### <img width=16 src="https://i.imgur.com/1yjmK3W.png"> [Automatic ChatGPT DAN](https://github.com/madkarmaa/automatic-chatgpt-dan)

Stuur automatisch DAN-prompts naar ChatGPT.
<br>[Installeren](https://github.com/madkarmaa/automatic-chatgpt-dan#%EF%B8%8F-installation) /
[Leesmij](https://github.com/madkarmaa/automatic-chatgpt-dan#readme) /
[Bespreken](https://github.com/madkarmaa/automatic-chatgpt-dan/issues)

### <img src="https://media.bravegpt.com/images/bravegpt-icon48.png" width=18> [BraveGPT](https://bravegpt.com) <a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Geef ChatGPT-antwoorden weer in Brave Search-zijbalk (mogelijk gemaakt door GPT-4!)
<br>[Installeren](https://github.bravegpt.com/#installation) /
[Leesmij](https://github.bravegpt.com/#readme) /
[Bespreken](https://github.bravegpt.com/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT Auto-Doorgaan ⏩](https://chatgptautocontinue.com) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -3px 3px"></a>

Ga automatisch door met het genereren van meerdere ChatGPT-reacties.
<br>[Installeren](https://github.com/adamlui/chatgpt-auto-continue#installation) /
[Leesmij](https://github.com/adamlui/chatgpt-auto-continue#readme) /
[Bespreken](https://chatgptautocontinue.com/discuss)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ChatGPT Automatische Vernieuwing ↻](https://chatgptautorefresh.com) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

Houdt ChatGPT-sessies actueel en elimineert chattijdlimieten + netwerkfouten + Cloudflare-controles.
<br>[Installeren](https://github.com/adamlui/chatgpt-auto-refresh#installation) /
[Leesmij](https://github.com/adamlui/chatgpt-auto-refresh#readme) /
[Bespreken](https://chatgptautorefresh.com/discuss)

### <img src="https://media.duckduckgpt.com/images/ddgpt-icon48.png" width=17> [DuckDuckGPT](https://duckduckgpt.com) <a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Geef ChatGPT-antwoorden weer in DuckDuckGo-zijbalk (mogelijk gemaakt door GPT-4!)
<br>[Installeren](https://github.duckduckgpt.com/#installation) /
[Leesmij](https://github.duckduckgpt.com/#readme) /
[Bespreken](https://github.duckduckgpt.com/discussions)

<p><br>

<a href="https://chatgptinfinity.com" target="_blank" rel="noopener">
    <img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-infinity/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png">
</a>

<p><br>

<a href="https://chatgptwidescreen.com" target="_blank" rel="noopener">
    <img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png">
</a>

<p><br>

<p id="showcase-cta">
Als je iets hebt gemaakt met chatgpt.js dat je wilt delen, stuur dan een e-mail naar <a href="mailto:showcase@chatgptjs.org">showcase@chatgptjs.org</a> of open gewoon een <a href="https://github.com/kudoai/chatgpt.js/pulls" target="_blank" rel="noopener">pull request</a>!
</p>

<img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/docs/assets/separators/aqua.png">

<div id="contributors">

## 🧠 Bijdragers

</div>

Deze bibliotheek bestaat dankzij code, vertalingen, problemen en ideeën van de volgende bijdragers:

<div align="center"><br>

[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/10906554?first-contrib=2023.03.15&h=51&w=51&mask=circle&maxage=7d '@adamlui')](https://github.com/adamlui)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/71683364?first-contrib=2023.03.16-get-functions&h=51&w=51&mask=circle&maxage=7d '@mefengl')](https://github.com/mefengl)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/131989355?first-contrib=2023.04.30-doc-translations&h=51&w=51&mask=circle&maxage=7d '@Zin6969')](https://github.com/Zin6969)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/30551844?first-contrib=2023.05.02-getlastresponse-bug-report&h=51&w=51&mask=circle&maxage=7d '@madruga8')](https://github.com/madruga8)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/54934866?first-contrib=2023.05.01-clearchats-discard-fix&h=51&w=51&mask=circle&maxage=7d '@XiaoYingYo')](https://github.com/XiaoYingYo)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/129722778?first-contrib=2023.05.24-css-readability&h=51&w=51&mask=circle&maxage=7d '@AliAlSarre')](https://github.com/AliAlSarre)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/100418457?first-contrib=2023.06.02-send-function-bug-report&h=51&w=51&mask=circle&maxage=7d '@madkarmaa')](https://github.com/madkarmaa)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/1170326?first-contrib=2023.06.10-html-parser-idea&h=51&w=51&mask=circle&maxage=7d '@wamoyo')](https://github.com/wamoyo)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/33952?first-contrib=2023.06.10-html-parser-idea&h=51&w=51&mask=circle&maxage=7d '@meiraleal')](https://github.com/meiraleal)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/22633385?first-contrib=2023.07.11-fix-ja-doc-md&h=51&w=51&mask=circle&maxage=7d '@eltociear')](https://github.com/eltociear)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/72805486?first-contrib=2023.07.14-enhance-ko-docs&h=51&w=51&mask=circle&maxage=7d '@Rojojun')](https://github.com/Rojojun)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/62183023?first-contrib=2023.07.24-fix-hi-doc&h=51&w=51&mask=circle&maxage=7d '@iamnishantgaharwar')](https://github.com/iamnishantgaharwar)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/629429?first-contrib=2023.07.31-homepage-starry-bg&h=51&w=51&mask=circle&maxage=7d '@hakimel')](https://github.com/hakimel)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/73983677?first-contrib=2023.08.23-fix-readme-typos&h=51&w=51&mask=circle&maxage=7d '@omahs')](https://github.com/omahs)
[![](https://images.weserv.nl/?url=https://i.imgur.com/DQVC7vj.jpg?first-contrib=2023.09.19-add-dmarc-policy&h=51&w=51&mask=circle&maxage=7d 'Najam Ul Arfeen')](https://www.linkedin.com/in/najam-ul-arfeen-khan/)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/in/29110&h=51&w=51&mask=circle&maxage=7d 'Dependabot')](https://github.com/dependabot)
[![](https://images.weserv.nl/?url=https://i.imgur.com/tNyIPmG.jpg?h=51&w=51&mask=circle&maxage=7d 'ChatGPT')](https://chat.openai.com)
[![](https://images.weserv.nl/?url=https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/icons/poe-icon128.svg?first-contrib=2023.07.27-getandshowreply-method&h=51&w=51&mask=circle&maxage=7d 'Poe')](https://poe.com)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/31427850?h=51&w=51&mask=circle&maxage=7d "@ImgBotApp")](https://github.com/ImgBotApp)

</div><br>

<img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/docs/assets/separators/aqua.png">

<div id="partners">

## 🤝 Partners

</div>

**chatgpt.js** wordt gedeeltelijk gefinancierd door:

<div id="partners-collage" align="center">

<picture>
    <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/logos/partners/collage/chatgpt.js-partners-white.png">
    <img width=675 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/logos/partners/collage/chatgpt.js-partners-black.png">
</picture>

</div>

<br>

<img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/docs/assets/separators/aqua.png">

<div id="star-history" align="center">

<br>

<a href="https://star-history.com/#kudoai/chatgpt.js&Timeline" target="_blank" rel="noopener">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=kudoai/chatgpt.js&type=Timeline&theme=dark" />
    <img width=665 src="https://api.star-history.com/svg?repos=kudoai/chatgpt.js&type=Timeline" />
  </picture>
</a>

<br>_Overweeg om deze repo een ⭐ te geven als het je heeft geholpen!_

</div>

#

<div align="center">

**[Uitgaven](https://github.com/kudoai/chatgpt.js/tree/main/dist)** /
[gebruikershandleiding](https://github.com/kudoai/chatgpt.js/blob/main/docs/USERGUIDE.md) /
[Bespreken](https://github.com/kudoai/chatgpt.js/discussions) /
<a href="#">Terug naar boven ↑</a>

</div>
