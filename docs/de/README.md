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
        <a href="../ru#readme">Английский</a> |
        <a href="../vi#readme">Việt</a>
    </h6>
</div>

<br>

<a href="https://chatgpt.js.org">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/logos/chatgpt.js/with-reflection/darkmode.png?v=e638eac">
        <img width=800 src="https://assets.chatgptjs.org/images/logos/chatgpt.js/with-reflection/lightmode.png?v=e638eac">
    </picture>
</a>

### 🤖 Eine leistungsstarke clientseitige JavaScript-Bibliothek für ChatGPT

</div>

<br>

<div id="shields" align="center">

<a href="https://github.com/KudoAI/chatgpt.js/stargazers">
    <img src="https://img.shields.io/github/stars/KudoAI/chatgpt.js?label=Sterne&color=af68ff&logo=github&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="LICENSE.md">
    <img src="https://img.shields.io/badge/Lizenz-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://github.com/KudoAI/chatgpt.js/tree/v3.5.0/dist/chatgpt.min.js">
    <img src="https://img.shields.io/github/size/KudoAI/chatgpt.js/dist/chatgpt.min.js?branch=v3.5.0&label=Minified%20Size&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge"></a>
<a href="https://www.codefactor.io/repository/github/kudoai/chatgpt.js">
    <img src="https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=Codequalität&logo=codefactor&logoColor=white&labelColor=464646&color=1acc6c&style=for-the-badge"></a>
<a href="https://sonarcloud.io/component_measures?metric=new_vulnerabilities&id=kudoai_chatgpt.js">
    <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dkudoai_chatgpt.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=464646&label=Schwachstellen&color=gold"></a>
<a href="https://github.com/sindresorhus/awesome-chatgpt#javascript">
    <img src="https://img.shields.io/badge/Erwähnt_in-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.producthunt.com/posts/chatgpt-js">
    <img src="https://img.shields.io/badge/Vorgestellt_auf-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="#">
    <img src="https://img.shields.io/badge/jsDelivr--Anfragen-2,000,000+-2bbbd8.svg?logo=jsdelivr&logoColor=white&labelColor=464646&style=for-the-badge"></a>

</div>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="intro">

## 💡 Um

</div>

<span style="color: white"><b>chatgpt.js</b></span> ist eine <span style="color: white">leistungsstarke</span> JavaScript-Bibliothek, die eine <span style="color: white">supereinfache</span> Interaktion mit dem ChatGPT-DOM ermöglicht.

- Reich an Funktionen
- Objektorientierte
- Einfach zu verwenden
- Leicht (und dennoch optimal leistungsfähig)

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="importing">

> **Hinweis** _Um immer die neueste version zu importieren (nicht in der produktion empfohlen!), ersetzen sie die versionierte jsDelivr-URL durch: `https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js/chatgpt.min.js`_

## ⚡ Importieren der Bibliothek

</div>

### ES11 (2020):

```js
(async () => {
    await import('https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.5.0/dist/chatgpt.min.js');
    // Ihr Code hier...
})();
```

### ES5 (2009):

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.5.0/dist/chatgpt.min.js');
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

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://assets.chatgptjs.org/images/icons/platforms/tampermonkey/icon28.png?v=e638eac"><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://assets.chatgptjs.org/images/icons/platforms/violentmonkey/icon25.png?v=e638eac"> Greasemonkey:

> **Hinweis** _Um eine Starter-Vorlage zu verwenden: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/KudoAI/chatgpt.js-greasemonkey-starter)_

```js
...
// @require https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.5.0/dist/chatgpt.min.js
// ==/UserScript==

// Ihr Code hier...
```

### <img style="margin: 0 2px -1px 0" height=16 src="https://assets.chatgptjs.org/images/icons/platforms/chrome/icon16.png?v=e638eac"> Chrome:

> **Hinweis** _Um eine Starter-Vorlage zu verwenden: [kudoai/chatgpt.js-chrome-starter](https://github.com/KudoAI/chatgpt.js-chrome-starter)_

Da Google keinen Remote-Code zulässt, ist der lokale Import von chatgpt.js erforderlich:

1. Speichern Sie https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/chatgpt.js in einem Unterverzeichnis (in diesem Beispiel `lib`).

2. Fügen Sie in `manifest.json` des Projekts (V3) `lib/chatgpt.js` als über das Internet zugängliche Ressource hinzu
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.js"]
    }],
```

3. In Skripten, die `chatgpt.js` benötigen (Vordergrund/Hintergrund gleichermaßen), importieren Sie es wie folgt:
```js
(async () => {
    await import(chrome.runtime.getURL('lib/chatgpt.js'));
    // Ihr Code hier...
})();
```

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="npm">

## 💾 Herunterladen über npm:

</div>

Um **chatgpt.js** zur lokalen anpassung herunterzuladen, führen sie den folgenden befehl im stammverzeichnis ihres projekts aus:

```bash
npm install @kudoai/chatgpt.js
```

Navigieren sie nach der installation zu `node_modules/@kudoai/chatgpt.js`, um die bibliotheksquelle zu finden.

</div>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

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

Wenn dies nicht der Fall ist, schauen Sie sich den erweiterten [benutzerleitfaden](https://github.com/KudoAI/chatgpt.js/blob/v3.5.0/docs/USERGUIDE.md) an oder reichen Sie einfach ein [Problem](https://github.com/KudoAI/chatgpt.js/issues) ein oder [PR](https://github.com/KudoAI/chatgpt.js/pulls) und es wird integriert, ganz einfach!

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="showcase">

## 🤖 Erstellt mit chatgpt.js

</div>

https://github.com/KudoAI/chatgpt.js/assets/10906554/f53c740f-d5e0-49b6-ae02-3b3140b0f8a4

#

### <img src="https://amazongpt.kudoai.com/assets/images/icons/amazongpt/black-gold-teal/icon48.png" width=20> [AmazonGPT](https://amazongpt.kudoai.com)  &nbsp;<a href="https://devpost.com/software/amazongpt" target="_blank" rel="noopener"><img height=20 src="https://amazongpt.kudoai.com/assets/images/badges/wolfram-award/gold-badge.png" style="margin:0 0 -2px 5px"></a>

> Fügen Sie dem Amazon-Einkauf KI hinzu.
<br>[Install](https://greasyfork.org/scripts/500663-amazongpt) /
[Readme](https://amazongpt.kudoai.com/#readme) /
[Discuss](https://amazongpt.kudoai.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.autoclearchatgpt.com/images/icons/openai/white/icon48.png?cece513"><img width=21 src="https://assets.autoclearchatgpt.com/images/icons/openai/black/icon48.png?cece513"></picture> [ChatGPT-Verlauf löschen](https://autoclearchatgpt.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://assets.autoclearchatgpt.com/images/badges/awesome/badge.svg?2c0d9fc" style="margin:0 0 -2px 5px"></a>

> Löschen Sie Ihren ChatGPT-Abfrageverlauf automatisch, um maximalen Datenschutz zu gewährleisten.
<br>[Installieren](https://docs.autoclearchatgpt.com/#-installation) /
[Liesmich](https://docs.autoclearchatgpt.com/#readme) /
[Diskutieren](https://github.autoclearchatgpt.com/discussions)

### <img width=24 src="https://assets.bravegpt.com/images/icons/bravegpt/icon48.png?0a9e287"> [BraveGPT](https://bravegpt.com) &nbsp;<a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> Fügt KI-Antworten zu Brave Search hinzu (unterstützt von GPT-4o!)
<br>[Installieren](https://docs.bravegpt.com/#-installation) /
[Liesmich](https://docs.bravegpt.com/#readme) /
[Diskutieren](https://github.bravegpt.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautocontinue.com/images/icons/openai/white/icon48.png?7bbd222"><img width=21 src="https://assets.chatgptautocontinue.com/images/icons/openai/black/icon48.png?7bbd222"></picture> [ChatGPT Automatisches Fortfahren ⏩](https://chatgptautocontinue.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://assets.chatgptautocontinue.com/images/badges/awesome/badge.svg?3c80c0c" style="margin:0 0 -3px 3px"></a>

> Generieren Sie automatisch mehrere ChatGPT-Antworten weiterhin.
<br>[Installieren](https://docs.chatgptautocontinue.com/#-installation) /
[Liesmich](https://docs.chatgptautocontinue.com/#readme) /
[Diskutieren](https://github.chatgptautocontinue.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/white/icon64.png"><img width=21 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/black/icon64.png"></picture> [ChatGPT Auto-Sprechen 📣](https://github.com/adamlui/chatgpt-auto-talk)

> ChatGPT-Antworten automatisch abspielen.
<br>[Install](https://greasyfork.org/scripts/500940-chatgpt-auto-talk) /
[Readme](https://github.com/adamlui/chatgpt-auto-talk#readme) /
[Discuss](https://github.com/adamlui/chatgpt-auto-talk/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautorefresh.com/images/icons/openai/white/icon48.png?a45cf1e"><img width=21 src="https://assets.chatgptautorefresh.com/images/icons/openai/black/icon48.png?a45cf1e"></picture> [ChatGPT Automatisches Aktualisieren ↻](https://chatgptautorefresh.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://assets.chatgptautorefresh.com/images/badges/awesome/badge.svg?1080f44" style="margin:0 0 -2px 5px"></a>

> Hält ChatGPT-Sitzungen aktuell und eliminiert Chat-Zeitlimits, Netzwerkfehler und Cloudflare-Prüfungen.
<br>[Installieren](https://docs.chatgptautorefresh.com/#-installation) /
[Liesmich](https://docs.chatgptautorefresh.com/#readme) /
[Diskutieren](https://github.chatgptautorefresh.com/discussions)

### <img width=23 src="https://assets.ddgpt.com/images/icons/duckduckgpt/icon48.png?af89302"> [DuckDuckGPT](https://duckduckgpt.com) &nbsp;<a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> Fügt KI-Antworten zu DuckDuckGo hinzu (unterstützt von GPT-4o!)
<br>[Installieren](https://docs.ddgpt.com/#-installation) /
[Liesmich](https://docs.ddgpt.com/#readme) /
[Diskutieren](https://github.ddgpt.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.googlegpt.io/images/icons/googlegpt/white/icon32.png?8652a6e"><img width=21 src="https://assets.googlegpt.io/images/icons/googlegpt/black/icon32.png?8652a6e"></picture> [GoogleGPT](https://googlegpt.io) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://assets.googlegpt.io/images/badges/awesome/badge.svg?699c63d" style="margin:0 0 -2px 5px"></a>

> Fügt KI-Antworten zu Google Search hinzu (unterstützt von Google Gemma + GPT-4o!)
<br>[Installieren](https://greasyfork.googlegpt.io) /
[Liesmich](https://docs.googlegpt.io/#readme) /
[Diskutieren](https://github.googlegpt.io/discussions)

### <img width=23 src="https://assets.chatgptjs.org/images/icons/platforms/thunderbird/icon32.png?v=313a9c5"> [ThunderAI](https://micz.it/thunderdbird-addon-thunderai/) &nbsp;<a href="https://addons.thunderbird.net/thunderbird/addon/thunderai/reviews" target="_blank" rel="noopener"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/badges/5-star/blue-stars.png?v=0943672"><img width=92 alt="[Bewertet mit 5 Sternen]" src="https://assets.chatgptjs.org/images/badges/5-star/yellow-stars-in-white-pill.png?v=0943672"></picture></a>

> Verwenden Sie ChatGPT in Thunderbird, um Ihre E-Mails zu verbessern, sogar mit einem kostenlosen Konto!
<br>[Installieren](https://addons.thunderbird.net/thunderbird/addon/thunderai/) /
[Liesmich](https://micz.it/thunderdbird-addon-thunderai/) /
[Unterstützung](https://github.com/micz/ThunderAI/issues)

<p><br>

<a href="https://chatgptinfinity.com" target="_blank" rel="noopener">
    <img width=555 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@0f48c4e/chrome/images/tiles/marquee-promo-tile-1400x560.png">
</a>

<p><br>

<a href="https://chatgptwidescreen.com" target="_blank" rel="noopener">
    <img width=555 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-widescreen@3ed0950/chrome/images/tiles/marquee-promo-tile-1400x560.png">
</a>

<p><br>

<p id="showcase-cta">
Wenn Sie etwas mit chatgpt.js erstellt haben, das Sie teilen möchten, senden Sie eine E-Mail an <a href="mailto:showcase@chatgptjs.org">showcase@chatgptjs.org</a> oder öffnen Sie einfach eine <a href="https://github.com/KudoAI/chatgpt.js/pulls" target="_blank" rel="noopener">Pull-Anfrage</a>!
</p>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="contributors">

## 🧠 Mitwirkende

</div>

Diese Bibliothek existiert dank Code, Übersetzungen, Problemen und Ideen der folgenden Mitwirkenden:

<div align="center"><br>

<a href="https://github.com/adamlui">
    <img title="@adamlui" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/10906554?first-contrib=2023.03.15&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/mefengl">
    <img title="@mefengl" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/71683364?first-contrib=2023.03.16-get-functions&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/Zin6969">
    <img title="@Zin6969" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/131989355?first-contrib=2023.04.30-doc-translations&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/madruga8">
    <img title="@madruga8" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/30551844?first-contrib=2023.05.02-getlastresponse-bug-report&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/XiaoYingYo">
    <img title="@XiaoYingYo" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/54934866?first-contrib=2023.05.01-clearchats-discard-fix&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/AliAlSarre">
    <img title="@AliAlSarre" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/129722778?first-contrib=2023.05.24-css-readability&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/madkarmaa">
    <img title="@madkarmaa" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/100418457?first-contrib=2023.06.02-send-function-bug-report&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/wamoyo">
    <img title="@wamoyo" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/1170326?first-contrib=2023.06.10-html-parser-idea&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/meiraleal">
    <img title="@meiraleal" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/33952?first-contrib=2023.06.10-html-parser-idea&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/eltociear">
    <img title="@eltociear" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/22633385?first-contrib=2023.07.11-fix-ja-doc-md&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/Rojojun">
    <img title="@Rojojun" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/72805486?first-contrib=2023.07.14-enhance-ko-docs&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/iamnishantgaharwar">
    <img title="@iamnishantgaharwar" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/62183023?first-contrib=2023.07.24-fix-hi-doc&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/hakimel">
    <img title="@hakimel" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/629429?first-contrib=2023.07.31-homepage-starry-bg&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/omahs">
    <img title="@omahs" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/73983677?first-contrib=2023.08.23-fix-readme-typos&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://www.linkedin.com/in/najam-ul-arfeen-khan/">
    <img title="Najam Ul Arfeen" src="https://images.weserv.nl/?url=https://i.imgur.com/DQVC7vj.jpg?first-contrib=2023.09.19-add-dmarc-policy&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/iambijayd">
    <img title="@iambijayd" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/110587589?first-contrib=2023.10.13-translate-docs-to-nepali&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/abhinavm24">
    <img title="@abhinavm24" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/4698976?first-contrib=2023.10.29-remove-outdated-mv2-preface-from-docs&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/deyvisml">
    <img title="@deyvisml" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/77867745?first-contrib=2023.11.4-getchatdetails-bug-report&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/philly88r">
    <img title="@philly88r" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/150537240?first-contrib=2023.11.15-regenerate-btn-changed-bug-email&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/thomasgauthier">
    <img title="@thomasgauthier" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/9730392?first-contrib=2023.12.18-get-response-from-dom-request&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/pranav-bhatt">
    <img title="@pranav-bhatt" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/42911524?first-contrib=2024.1.17-add-custom-gpt-support&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/gadelkareem">
    <img title="@gadelkareem" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/1441127?first-contrib=2024.1.20-chat-id-structure-updated-alert&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/hopana">
    <img title="@hopana" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/13976824?first-contrib=2024.01.31-aria-labels-unreliable-bug-report&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/emtry">
    <img title="@emtry" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/26219737?first-contrib=2024.2.2-data-key-message-bug-fix&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/thedayofcondor">
    <img title="@thedayofcondor" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/44357327?first-contrib=2024.2.14-msg-fetching-for-localization-fails-report&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/Luwa-Tech">
    <img title="@Luwa-Tech" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/111466842?first-contrib=2024.2.15-add-en-gb-locale&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/micz">
    <img title="@micz" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/61795?first-contrib=2024.5.9-update-css-selector-for-getregeneratebutton&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/imranaalam">
    <img title="@imranaalam" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/17583722?first-contrib=2024.5.17-chrome-starter-manifest-matches-outdated-alert&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/grayfallstown">
    <img title="@grayfallstown" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/50076933?first-contrib=2024.6.22-code.isidle-request&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/svan-b">
    <img title="@svan-b" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/155944537?first-contrib=2024.8.27-sidebar-update-testing&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/Jeff-Zzh">
    <img title="@Jeff-Zzh" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/74002352?first-contrib=2024.8.28-sidebar-update-testing&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/ae3e">
    <img title="@ae3e" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/12472719?first-contrib=2024.10.2-getchatinput-stopped-working-report&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/FarukhS52">
    <img title="@FarukhS52" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/129654632?first-contrib=2024.10.10-userguide-typo-correction&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/Innovatorcloudy">
    <img title="@Innovatorcloudy" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/183274513?first-contrib=2024.10.10-create-ru-readme&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/barbarian360">
    <img title="@barbarian360" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/94866865?first-contrib=2024.10.11-fix-readme-back-to-top-link&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/adityadeshpande09">
    <img title="@adityadeshpande09" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/98452243?first-contrib=2024.10.26-fix-nepali-doc-link&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/twlite">
    <img title="@twlite" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/46562212?first-contrib=2024.10.27-added-callout-notation-to-en-readme&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/sulav7">
    <img title="@sulav7" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/100464898?first-contrib=2024.10.27-fix-nepali-grammar&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/samir-byte">
    <img title="@samir-byte" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/75193555?first-contrib=2024.10.28-fix-nepali-typo&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/ghimirebibek">
    <img title="@ghimirebibek" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/54546340?first-contrib=2024.10.28-fix-nepali-grammar&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/JanumalaAkhilendra">
    <img title="@JanumalaAkhilendra" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/82641474?first-contrib=2024.10.30-improve-hindi-readme&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/AliasUruz">
    <img title="@AliasUruz" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/130197125?first-contrib=2024.12.1-new-chat-selector-outdated-report&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://github.com/dependabot">
    <img title="Dependabot" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/in/29110&h=47&w=47&mask=circle&maxage=7d"></a>
<a href="https://chatgpt.com">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://images.weserv.nl/?url=https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@main/media/images/icons/platforms/chatgpt/black-on-white/icon189.png?h=46&w=46&mask=circle&maxage=7d">
        <img title="ChatGPT" src="https://images.weserv.nl/?url=https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@main/media/images/icons/platforms/chatgpt/white-on-black/icon189.png?h=46&w=46&mask=circle&maxage=7d">
    </picture></a>
<a href="https://poe.com">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://images.weserv.nl/?url=https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@main/media/images/icons/platforms/poe/w-purple-blue-stripes/black-on-white/icon175.png?h=46&w=46&mask=circle&maxage=7d"><img src="https://images.weserv.nl/?url=https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@main/media/images/icons/platforms/poe/w-purple-blue-stripes/white-on-black/icon175.png?h=46&w=46&mask=circle&maxage=7d" title="Poe">
    </picture></a>
<a href="https://github.com/ImgBotApp">
    <img title="@ImgBotApp" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/31427850?h=51&w=51&mask=circle&maxage=7d"></a>

</div><br>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div align="center">

<br>

**chatgpt.js** wird teilweise finanziert von:

<a href="https://microsoft.com">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/logos/partners/microsoft/white.png?v=e638eac">
        <img width=300 src="https://assets.chatgptjs.org/images/logos/partners/microsoft/colored.png?v=e638eac">
    </picture>
</a>

</div>

<br>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div align="center">

**[Veröffentlichungen](https://github.com/KudoAI/chatgpt.js/releases)** /
[Benutzerhandbuch](https://github.com/KudoAI/chatgpt.js/blob/v3.5.0/docs/USERGUIDE.md) /
[Diskutieren](https://github.com/KudoAI/chatgpt.js/discussions) /
<a href="#top">Zurück nach oben ↑</a>

</div>
