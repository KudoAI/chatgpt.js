<div id="repo-cover" align="center">

<div align="center">
    <h6>
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs">
            <picture>
                <source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptjs.org/images/icons/earth-americas-white-padded-icon17x15.svg?714b6a1">
                <img src="https://media.chatgptjs.org/images/icons/earth-americas-padded-icon17x15.svg?714b6a1">
            </picture>
        </a>
        Deutsch |
        <a href="../..#readme">English</a> |
        <a href="../zh-cn#readme">简体中文</a> |
        <a href="../zh-tw#readme">繁體中文</a> |
        <a href="../ja#readme">日本</a> |
        <a href="../ko#readme">한국인</a> |
        <a href="../hi#readme">हिंदी</a> |
        <a href="../ne#readme">नेपाली</a> |
        <a href="../es#readme">Español</a> |
        <a href="../fr#readme">Français</a> |
        <a href="../it#readme">Italiano</a> |
        <a href="../nl#readme">Nederlands</a> |
        <a href="../pt#readme">Português</a> |
        <a href="../vi#readme">Việt</a>
    </h6>
</div>

<br>

<a href="https://chatgpt.js.org">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptjs.org/images/logos/chatgpt.js/with-reflection/darkmode.png?bc68d0c">
        <img width=800 src="https://media.chatgptjs.org/images/logos/chatgpt.js/with-reflection/lightmode.png?bc68d0c">
    </picture>
</a>

### 🤖 Eine leistungsstarke clientseitige JavaScript-Bibliothek für ChatGPT

</div>

<br>

<div id="shields" align="center">

[![](https://img.shields.io/github/stars/KudoAI/chatgpt.js?label=Sterne&color=af68ff&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/KudoAI/chatgpt.js/stargazers)
[![](https://img.shields.io/badge/Lizenz-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/KudoAI/chatgpt.js?label=Commits&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/KudoAI/chatgpt.js/commits/main)
[![](https://img.shields.io/github/size/KudoAI/chatgpt.js/dist/chatgpt.min.js?branch=v2.9.2&label=Minified%20Size&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge)](https://github.com/KudoAI/chatgpt.js/tree/v2.9.2/dist/chatgpt.min.js)
[![](https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=Codequalität&logo=codefactor&logoColor=white&labelColor=464646&color=1acc6c&style=for-the-badge)](https://www.codefactor.io/repository/github/kudoai/chatgpt.js)
[![](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dkudoai_chatgpt.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=464646&label=Schwachstellen&color=gold)](https://sonarcloud.io/component_measures?metric=new_vulnerabilities&id=kudoai_chatgpt.js)
[![](https://img.shields.io/badge/Erwähnt_in-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/sindresorhus/awesome-chatgpt#javascript)
[![](https://img.shields.io/badge/Vorgestellt_auf-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.producthunt.com/posts/chatgpt-js)
![](https://img.shields.io/badge/jsDelivr--Anfragen-1,500,000+-2bbbd8.svg?logo=jsdelivr&logoColor=white&labelColor=464646&style=for-the-badge)

</div>

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="intro">

## 💡 Um

</div>

<span style="color: white">chatgpt.js</span> ist eine <span style="color: white">leistungsstarke</span> JavaScript-Bibliothek, die eine <span style="color: white">supereinfache</span> Interaktion mit dem ChatGPT-DOM ermöglicht.

- Reich an Funktionen
- Objektorientierte
- Einfach zu verwenden
- Leicht (und dennoch optimal leistungsfähig)

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="importing">

> **Hinweis** _Um immer die neueste version zu importieren (nicht in der produktion empfohlen!), ersetzen sie die versionierte jsDelivr-URL durch: `https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js/chatgpt.min.js`_

## ⚡ Importieren der Bibliothek

</div>

### ES6:

```js
(async () => {
    await import('https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@2.9.2/dist/chatgpt.min.js');
    // Ihr Code hier...
})();
```

### ES5:

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@2.9.2/dist/chatgpt.min.js');
xhr.onload = function () {
    if (xhr.status === 200) {
        var chatgptJS = document.createElement('script');
        chatgptJS.textContent = xhr.responseText;
        document.head.append(chatgptJS);
        yourCode(); // führt Ihren Code aus
    }
};
xhr.send();

function yourCode() {
    // Ihr Code hier...
}
```

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://media.chatgptjs.org/images/icons/platforms/tampermonkey/icon28.png?a3e53bf7"><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://media.chatgptjs.org/images/icons/platforms/violentmonkey/icon25.png?a3e53bf7"> Greasemonkey:

> **Hinweis** _Um eine Starter-Vorlage zu verwenden: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/KudoAI/chatgpt.js-greasemonkey-starter)_

```js
...
// @require https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@2.9.2/dist/chatgpt.min.js
// ==/UserScript==

// Ihr Code hier...
```

### <img style="margin: 0 2px -1px 0" height=16 src="https://media.chatgptjs.org/images/icons/platforms/chrome/icon16.png?8c852fa5"> Chrome:

> **Hinweis** _Um eine Starter-Vorlage zu verwenden: [kudoai/chatgpt.js-chrome-starter](https://github.com/KudoAI/chatgpt.js-chrome-starter)_

Da Google keinen Remote-Code zulässt, ist der lokale Import von chatgpt.js erforderlich:

1. Speichern Sie https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/chatgpt.js in einem Unterverzeichnis (in diesem Beispiel `lib`).

2. Fügen Sie die ES6-Exportanweisung am Ende von `lib/chatgpt.js` hinzu
```js
...
export { chatgpt }
```

3. Fügen Sie in `manifest.json` des Projekts (V3) `lib/chatgpt.js` als über das Internet zugängliche Ressource hinzu
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.js"]
    }],
```

4. In Skripten, die `chatgpt.js` benötigen (Vordergrund/Hintergrund gleichermaßen), importieren Sie es wie folgt:
```js
(async () => {
    const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'));
    // Ihr Code hier...
})();
```

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="npm">

## 💾 Herunterladen über npm:

</div>

Um **chatgpt.js** zur lokalen anpassung herunterzuladen, führen sie den folgenden befehl im stammverzeichnis ihres projekts aus:

```bash
npm install @kudoai/chatgpt.js
```

Navigieren sie nach der installation zu `node_modules/@kudoai/chatgpt.js`, um die bibliotheksquelle zu finden.

</div>

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="usage">

## 💻 Verwendung

</div>

**chatgpt.js** wurde mit Blick auf höchste Flexibilität geschrieben.

Zum Beispiel:

```js
chatgpt.getLastResponse();
chatgpt.getLastReply();
chatgpt.response.getLast();
chatgpt.get('reply', 'last');
```

Jeder Aufruf ruft gleichermaßen die letzte Antwort ab. Wenn Sie glauben, dass es funktioniert, wird es wahrscheinlich auch funktionieren ... also geben Sie es einfach ein! (Wer hat Zeit für Dokumente?)

Wenn dies nicht der Fall ist, schauen Sie sich den erweiterten [benutzerleitfaden](https://github.com/KudoAI/chatgpt.js/blob/v2.9.2/docs/USERGUIDE.md) an oder reichen Sie einfach ein [Problem](https://github.com/KudoAI/chatgpt.js/issues) ein oder [PR](https://github.com/KudoAI/chatgpt.js/pulls) und es wird integriert, ganz einfach!

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="showcase">

## 🤖 Erstellt mit chatgpt.js

</div>

https://github.com/KudoAI/chatgpt.js/assets/10906554/f53c740f-d5e0-49b6-ae02-3b3140b0f8a4

#

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.autoclearchatgpt.com/images/icons/openai/white/icon48.png?cece513"><img width=21 src="https://media.autoclearchatgpt.com/images/icons/openai/black/icon48.png?cece513"></picture> [ChatGPT-Verlauf löschen](https://autoclearchatgpt.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://media.autoclearchatgpt.com/images/badges/awesome/badge.svg?2c0d9fc" style="margin:0 0 -2px 5px"></a>

> Löschen Sie Ihren ChatGPT-Abfrageverlauf automatisch, um maximalen Datenschutz zu gewährleisten.
<br>[Installieren](https://docs.autoclearchatgpt.com/#-installation) /
[Liesmich](https://docs.autoclearchatgpt.com/#readme) /
[Diskutieren](https://github.autoclearchatgpt.com/discussions)

### <img width=24 src="https://media.bravegpt.com/images/icons/bravegpt/icon48.png?0a9e287"> [BraveGPT](https://bravegpt.com) &nbsp;<a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> ChatGPT-Antworten in der Brave Search-Seitenleiste anzeigen (unterstützt von GPT-4!)
<br>[Installieren](https://docs.bravegpt.com/#-installation) /
[Liesmich](https://docs.bravegpt.com/#readme) /
[Diskutieren](https://github.bravegpt.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptautocontinue.com/images/icons/openai/white/icon48.png?7bbd222"><img width=21 src="https://media.chatgptautocontinue.com/images/icons/openai/black/icon48.png?7bbd222"></picture> [ChatGPT Automatisches Fortfahren ⏩](https://chatgptautocontinue.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://media.chatgptautocontinue.com/images/badges/awesome/badge.svg?3c80c0c" style="margin:0 0 -3px 3px"></a>

> Generieren Sie automatisch mehrere ChatGPT-Antworten weiterhin.
<br>[Installieren](https://docs.chatgptautocontinue.com/#-installation) /
[Liesmich](https://docs.chatgptautocontinue.com/#readme) /
[Diskutieren](https://github.chatgptautocontinue.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptautorefresh.com/images/icons/openai/white/icon48.png?a45cf1e"><img width=21 src="https://media.chatgptautorefresh.com/images/icons/openai/black/icon48.png?a45cf1e"></picture> [ChatGPT Automatisches Aktualisieren ↻](https://chatgptautorefresh.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://media.chatgptautorefresh.com/images/badges/awesome/badge.svg?1080f44" style="margin:0 0 -2px 5px"></a>

> Hält ChatGPT-Sitzungen aktuell und eliminiert Chat-Zeitlimits, Netzwerkfehler und Cloudflare-Prüfungen.
<br>[Installieren](https://docs.chatgptautorefresh.com/#-installation) /
[Liesmich](https://docs.chatgptautorefresh.com/#readme) /
[Diskutieren](https://github.chatgptautorefresh.com/discussions)

### <img width=23 src="https://media.ddgpt.com/images/icons/duckduckgpt/icon48.png?af89302"> [DuckDuckGPT](https://duckduckgpt.com) &nbsp;<a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> ChatGPT-Antworten in der DuckDuckGo-Seitenleiste anzeigen (unterstützt von GPT-4!)
<br>[Installieren](https://docs.ddgpt.com/#-installation) /
[Liesmich](https://docs.ddgpt.com/#readme) /
[Diskutieren](https://github.ddgpt.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.googlegpt.io/images/icons/googlegpt/white/icon32.png?8652a6e"><img width=21 src="https://media.googlegpt.io/images/icons/googlegpt/black/icon32.png?8652a6e"></picture> [GoogleGPT](https://googlegpt.io) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://media.googlegpt.io/images/badges/awesome/badge.svg?699c63d" style="margin:0 0 -2px 5px"></a>

> ChatGPT-Antworten in der Google Search-Seitenleiste anzeigen (unterstützt von GPT-4!)
<br>[Installieren](https://greasyfork.org/scripts/478597-googlegpt) /
[Liesmich](https://docs.googlegpt.io/#readme) /
[Diskutieren](https://github.googlegpt.io/discussions)

<p><br>

<a href="https://chatgptinfinity.com" target="_blank" rel="noopener">
    <img width=555 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@0f48c4e/chrome/media/images/tiles/marquee-promo-tile-1400x560.png">
</a>

<p><br>

<a href="https://chatgptwidescreen.com" target="_blank" rel="noopener">
    <img width=555 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-widescreen@3ed0950/chrome/media/images/tiles/marquee-promo-tile-1400x560.png">
</a>

<p><br>

<p id="showcase-cta">
Wenn Sie etwas mit chatgpt.js erstellt haben, das Sie teilen möchten, senden Sie eine E-Mail an <a href="mailto:showcase@chatgptjs.org">showcase@chatgptjs.org</a> oder öffnen Sie einfach eine <a href="https://github.com/KudoAI/chatgpt.js/pulls" target="_blank" rel="noopener">Pull-Anfrage</a>!
</p>

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="contributors">

## 🧠 Mitwirkende

</div>

Diese Bibliothek existiert dank Code, Übersetzungen, Problemen und Ideen der folgenden Mitwirkenden:

<div align="center"><br>

[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/10906554?first-contrib=2023.03.15&h=47&w=47&mask=circle&maxage=7d "@adamlui")](https://github.com/adamlui)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/71683364?first-contrib=2023.03.16-get-functions&h=47&w=47&mask=circle&maxage=7d "@mefengl")](https://github.com/mefengl)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/131989355?first-contrib=2023.04.30-doc-translations&h=47&w=47&mask=circle&maxage=7d "@Zin6969")](https://github.com/Zin6969)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/30551844?first-contrib=2023.05.02-getlastresponse-bug-report&h=47&w=47&mask=circle&maxage=7d "@madruga8")](https://github.com/madruga8)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/54934866?first-contrib=2023.05.01-clearchats-discard-fix&h=47&w=47&mask=circle&maxage=7d "@XiaoYingYo")](https://github.com/XiaoYingYo)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/129722778?first-contrib=2023.05.24-css-readability&h=47&w=47&mask=circle&maxage=7d "@AliAlSarre")](https://github.com/AliAlSarre)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/100418457?first-contrib=2023.06.02-send-function-bug-report&h=47&w=47&mask=circle&maxage=7d "@madkarmaa")](https://github.com/madkarmaa)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/1170326?first-contrib=2023.06.10-html-parser-idea&h=47&w=47&mask=circle&maxage=7d "@wamoyo")](https://github.com/wamoyo)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/33952?first-contrib=2023.06.10-html-parser-idea&h=47&w=47&mask=circle&maxage=7d "@meiraleal")](https://github.com/meiraleal)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/22633385?first-contrib=2023.07.11-fix-ja-doc-md&h=47&w=47&mask=circle&maxage=7d "@eltociear")](https://github.com/eltociear)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/72805486?first-contrib=2023.07.14-enhance-ko-docs&h=47&w=47&mask=circle&maxage=7d "@Rojojun")](https://github.com/Rojojun)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/62183023?first-contrib=2023.07.24-fix-hi-doc&h=47&w=47&mask=circle&maxage=7d "@iamnishantgaharwar")](https://github.com/iamnishantgaharwar)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/629429?first-contrib=2023.07.31-homepage-starry-bg&h=47&w=47&mask=circle&maxage=7d "@hakimel")](https://github.com/hakimel)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/73983677?first-contrib=2023.08.23-fix-readme-typos&h=47&w=47&mask=circle&maxage=7d "@omahs")](https://github.com/omahs)
[![](https://images.weserv.nl/?url=https://i.imgur.com/DQVC7vj.jpg?first-contrib=2023.09.19-add-dmarc-policy&h=47&w=47&mask=circle&maxage=7d "Najam Ul Arfeen")](https://www.linkedin.com/in/najam-ul-arfeen-khan/)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/110587589?first-contrib=2023.10.13-translate-docs-to-nepali&h=47&w=47&mask=circle&maxage=7d "@iambijayd")](https://github.com/iambijayd)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/4698976?first-contrib=2023.10.29-remove-outdated-mv2-preface-from-docs&h=47&w=47&mask=circle&maxage=7d "@abhinavm24")](https://github.com/abhinavm24)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/77867745?first-contrib=2023.11.4-getchatdetails-bug-report&h=47&w=47&mask=circle&maxage=7d "@deyvisml")](https://github.com/deyvisml)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/150537240?first-contrib=2023.11.15-regenerate-btn-changed-bug-email&h=47&w=47&mask=circle&maxage=7d "@philly88r")](https://github.com/philly88r)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/9730392?first-contrib=2023.12.18-get-response-from-dom-request&h=47&w=47&mask=circle&maxage=7d "@thomasgauthier")](https://github.com/thomasgauthier)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/42911524?first-contrib=2024.1.17-add-custom-gpt-support&h=47&w=47&mask=circle&maxage=7d "@pranav-bhatt")](https://github.com/pranav-bhatt)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/13976824?first-contrib=2024.01.31-aria-labels-unreliable-bug-report&h=47&w=47&mask=circle&maxage=7d "@hopana")](https://github.com/hopana)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/26219737?first-contrib=2024.2.2-data-key-message-bug-fix&h=47&w=47&mask=circle&maxage=7d "@emtry")](https://github.com/emtry)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/44357327?first-contrib=2024.2.14-msg-fetching-for-localization-fails-report&h=47&w=47&mask=circle&maxage=7d "@thedayofcondor")](https://github.com/thedayofcondor)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/111466842?first-contrib=2024.2.15-add-en-gb-locale&h=47&w=47&mask=circle&maxage=7d "@Luwa-Tech")](https://github.com/Luwa-Tech)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/61795?first-contrib=2024.5.9-update-css-selector-for-getregeneratebutton&h=47&w=47&mask=circle&maxage=7d "@micz")](https://github.com/micz)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/17583722?first-contrib=2024.5.17-chrome-starter-manifest-matches-outdated-alert&h=47&w=47&mask=circle&maxage=7d "@imranaalam")](https://github.com/imranaalam)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/in/29110&h=47&w=47&mask=circle&maxage=7d "Dependabot")](https://github.com/dependabot)
<a href="https://chatgpt.com"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://images.weserv.nl/?url=https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@main/media/images/icons/platforms/chatgpt/black-on-white/icon189.png?h=46&w=46&mask=circle&maxage=7d"><img src="https://images.weserv.nl/?url=https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@main/media/images/icons/platforms/chatgpt/white-on-black/icon189.png?h=46&w=46&mask=circle&maxage=7d" title="ChatGPT"></picture></a>
<a href="https://poe.com"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://images.weserv.nl/?url=https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@main/media/images/icons/platforms/poe/w-purple-blue-stripes/black-on-white/icon175.png?h=46&w=46&mask=circle&maxage=7d"><img src="https://images.weserv.nl/?url=https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@main/media/images/icons/platforms/poe/w-purple-blue-stripes/white-on-black/icon175.png?h=46&w=46&mask=circle&maxage=7d" title="Poe"></picture></a>
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/31427850?h=51&w=51&mask=circle&maxage=7d "@ImgBotApp")](https://github.com/ImgBotApp)

</div><br>

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="partners">

## 🤝 Partners

</div>

**chatgpt.js** wird teilweise finanziert durch:

<div id="partners-collage" align="center">

<picture>
    <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptjs.org/images/logos/partners/collage/white.png?3109608">
    <img width=888 src="https://media.chatgptjs.org/images/logos/partners/collage/black.png?3109608">
</picture>

</div>

<br>

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div align="center">

**[Veröffentlichungen](https://github.com/KudoAI/chatgpt.js/releases)** /
[Benutzerhandbuch](https://github.com/KudoAI/chatgpt.js/blob/v2.9.2/docs/USERGUIDE.md) /
[Diskutieren](https://github.com/KudoAI/chatgpt.js/discussions) /
<a href="#">Zurück nach oben ↑</a>

</div>
