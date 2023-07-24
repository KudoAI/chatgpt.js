<div id="repo-cover" align="center">

<div align="center">

###### <a href="https://github.com/kudoai/chatgpt.js/tree/main/docs"><img height="16" style="margin: 0 3px -2px" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/icons/language.png"></a> Deutsch | <a href="../..#readme">English</a> | <a href="../zh-cn#readme">简体中文</a> | <a href="../zh-tw#readme">繁體中文</a> | <a href="../ja#readme">日本</a> | <a href="../ko#readme">한국인</a> | <a href="../hi#readme">हिंदी</a> | <a href="../es#readme">Español</a> | <a href="../fr#readme">Français</a> | <a href="../it#readme">Italiano</a> | <a href="../nl#readme">Nederlands</a> | <a href="../pt#readme">Português</a> | <a href="../vi#readme">Việt</a>

</div>

<br>

<h3>

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
    <img width=700 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
</picture>
<br><br>

🤖 Eine leistungsstarke clientseitige JavaScript-Bibliothek für ChatGPT
<br><br>

</div>
</h3>

<div id="shields" align="center">

[![](https://img.shields.io/badge/Lizenz-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/kudoai/chatgpt.js?label=Commits&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/kudoai/chatgpt.js/commits/main)
![](https://img.shields.io/github/size/kudoai/chatgpt.js/dist/chatgpt-2.0.1.min.js?label=Minimierte+Größe&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge)
[![](https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=Codequalität&logo=codefactor&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.codefactor.io/repository/github/kudoai/chatgpt.js)
[![](https://img.shields.io/badge/Erwähnt_in-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/sindresorhus/awesome-chatgpt#javascript)
[![](https://img.shields.io/badge/Vorgestellt_auf-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.producthunt.com/posts/chatgpt-js)
![](https://img.shields.io/jsdelivr/gh/hw/kudoai/chatgpt.js?label=jsDelivr+Treffer&logo=jsdelivr&logoColor=white&labelColor=464646&color=gold&style=for-the-badge)

</div>

## Um

**chatgpt.js** ist eine leistungsstarke JavaScript-Bibliothek, die eine supereinfache Interaktion mit dem ChatGPT-DOM ermöglicht.

- Reich an Funktionen
- Objektorientierte
- Einfach zu verwenden
- Leicht (und dennoch optimal leistungsfähig)

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## ⚡ Importieren der Bibliothek

### ES6:

```js
(async () => {
  await import('https://code.chatgptjs.org/chatgpt-latest.min.js');
  // Ihr Code hier...
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
    yourCode(); // führt Ihren Code aus
  }
};
xhr.send();

function yourCode() {
  // Ihr Code hier...
}
```

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/starters/media/images/icons/tampermonkey-icon28.png"></picture><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/starters/media/images/icons/violentmonkey-icon100.png"> Greasemonkey:

> **Hinweis** _Um eine Starter-Vorlage zu verwenden: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/kudoai/chatgpt.js-greasemonkey-starter)_

Userscript-Repositories wie Greasy Fork führen eine Whitelist vorab genehmigter CDNs (z. B. commitspezifische Referenzen von `cdn.jsdelivr.net`), sodass die Import-URL wesentlich länger ist, um die Veröffentlichung auf diesen Websites zu gewährleisten:

```js
...
// @require https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@b9b8ac236a8795b56691bf3dc10a8a1a928d2e8f/dist/chatgpt-2.0.1.min.js
// ==/UserScript==

// Ihr Code hier...
```

Wenn Sie nicht vorhaben, in diesen Repos zu veröffentlichen, kann stattdessen das einfachere `https://code.chatgptjs.org/chatgpt-latest.min.js` verwendet werden, um die neueste minimierte Version zu importieren.

### <img style="margin: 0 2px -1px 0" height=16 src="https://www.google.com/chrome/static/images/favicons/apple-icon-60x60.png"> Chrome:

> **Hinweis** _Um eine Starter-Vorlage zu verwenden: [kudoai/chatgpt.js-chrome-starter](https://github.com/kudoai/chatgpt.js-chrome-starter)_

Da Google Manifest V2 [irgendwann auslaufen lässt](https://developer.chrome.com/docs/extensions/migrating/mv2-sunset/), ist Remote-Code nicht mehr zulässig, daher ist der lokale Import von chatgpt.js ideal:

1. Speichern Sie https://raw.githubusercontent.com/kudoai/chatgpt.js/main/chatgpt.js in einem Unterverzeichnis (in diesem Beispiel `lib`).

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

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 💻 Verwendung

**chatgpt.js** wurde mit Blick auf höchste Flexibilität geschrieben.

Zum Beispiel:

```js
chatgpt.getLastResponse();
chatgpt.getLastReply();
chatgpt.response.getLast();
chatgpt.get('reply', 'last');
```

Jeder Aufruf ruft gleichermaßen die letzte Antwort ab. Wenn Sie glauben, dass es funktioniert, wird es wahrscheinlich auch funktionieren ... also geben Sie es einfach ein! (Wer hat Zeit für Dokumente?)

Wenn dies nicht der Fall ist, reichen Sie einfach ein [Issue](https://github.com/kudoai/chatgpt.js/issues) oder eine [PR](https://github.com/kudoai/chatgpt.js/pulls) ein. und es wird integriert, kinderleicht!

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 🤖 Erstellt mit chatgpt.js

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ChatGPT-Verlauf löschen](https://chatgptevo.com/autoclear) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

Löschen Sie Ihren ChatGPT-Abfrageverlauf automatisch, um maximalen Datenschutz zu gewährleisten.
<br>[Installieren](https://github.com/adamlui/autoclear-chatgpt-history#installation) /
[Liesmich](https://github.com/adamlui/autoclear-chatgpt-history#readme) /
[Diskutieren](https://github.com/adamlui/autoclear-chatgpt-history/discussions)

### <img width=16 src="https://i.imgur.com/1yjmK3W.png"> [Automatic ChatGPT DAN](https://github.com/madkarmaa/automatic-chatgpt-dan)

Automatically send DAN prompts to ChatGPT.
<br>[Installieren](https://github.com/madkarmaa/automatic-chatgpt-dan#%EF%B8%8F-installation) /
[Liesmich](https://github.com/madkarmaa/automatic-chatgpt-dan#readme) /
[Diskutieren](https://github.com/madkarmaa/automatic-chatgpt-dan/issues)

### <img src="https://media.bravegpt.com/images/bravegpt-icon48.png" width=18> [BraveGPT](https://bravegpt.com) <a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

ChatGPT-Antworten in der Brave Search-Seitenleiste anzeigen (unterstützt von GPT-4!)
<br>[Installieren](https://github.bravegpt.com/#installation) /
[Liesmich](https://github.bravegpt.com/#readme) /
[Diskutieren](https://github.bravegpt.com/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT Automatisches Fortfahren ⏩](https://chatgptevo.com/autocontinue/github) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -3px 3px"></a>

Generieren Sie automatisch mehrere ChatGPT-Antworten weiterhin.<br>
[Installieren](https://github.com/adamlui/chatgpt-auto-continue#installation) /
[Liesmich](https://github.com/adamlui/chatgpt-auto-continue#readme) /
[Diskutieren](https://chatgptevo.com/autocontinue/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ChatGPT Automatisches Aktualisieren ↻](https://chatgptevo.com/autorefresh) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

Hält ChatGPT-Sitzungen aktuell, um Netzwerkfehler zu vermeiden + Cloudflare-Prüfungen.
<br>[Installieren](https://github.com/adamlui/chatgpt-auto-refresh#installation) /
[Liesmich](https://github.com/adamlui/chatgpt-auto-refresh#readme) /
[Diskutieren](https://github.com/adamlui/chatgpt-auto-refresh/discussions)

### <img src="https://media.duckduckgpt.com/images/ddgpt-icon48.png" width=17> [DuckDuckGPT](https://duckduckgpt.com) <a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

ChatGPT-Antworten in der DuckDuckGo-Seitenleiste anzeigen (unterstützt von GPT-4!)
<br>[Installieren](https://github.duckduckgpt.com/#installation) /
[Liesmich](https://github.duckduckgpt.com/#readme) /
[Diskutieren](https://github.duckduckgpt.com/discussions)

<br>

<a href="https://chatgptinfinity.com" target="_blank"><img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-infinity/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png"></a>

<br>

<a href="https://chatgptwidescreen.com" target="_blank"><img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png"></a>

<br>

Wenn Sie etwas mit chatgpt.js erstellt haben, das Sie teilen möchten, senden Sie eine E-Mail an [showcase@chatgptjs.org](mailto:showcase@chatgptjs.org) oder öffnen Sie einfach eine [Pull-Anfrage](https://github.com/kudoai/chatgpt.js/pulls)!

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 🧠 Mitwirkende

Diese Bibliothek existiert dank Code, Übersetzungen, Problemen und Ideen der folgenden Mitwirkenden:

[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/10906554?first-contrib=2023.03.15&h=50&w=50&mask=circle&maxage=7d '@adamlui')](https://github.com/adamlui)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/71683364?first-contrib=2023.03.16-get-functions&h=50&w=50&mask=circle&maxage=7d '@mefengl')](https://github.com/mefengl)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/131989355?first-contrib=2023.04.30-doc-translations&h=50&w=50&mask=circle&maxage=7d '@Zin6969')](https://github.com/Zin6969)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/30551844?first-contrib=2023.05.02-getlastresponse-bug-report&h=50&w=50&mask=circle&maxage=7d '@madruga8')](https://github.com/madruga8)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/54934866?first-contrib=2023.05.01-clearchats-discard-fix&h=50&w=50&mask=circle&maxage=7d '@XiaoYingYo')](https://github.com/XiaoYingYo)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/129722778?first-contrib=2023.05.24-css-readability&h=50&w=50&mask=circle&maxage=7d '@AliAlSarre')](https://github.com/AliAlSarre)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/100418457?first-contrib=2023.06.02-send-function-bug-report&h=50&w=50&mask=circle&maxage=7d '@madkarmaa')](https://github.com/madkarmaa)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/1170326?first-contrib=2023.06.10-html-parser-idea&h=50&w=50&mask=circle&maxage=7d '@wamoyo')](https://github.com/wamoyo)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/33952?first-contrib=2023.06.10-html-parser-idea&h=50&w=50&mask=circle&maxage=7d '@meiraleal')](https://github.com/meiraleal)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/22633385?first-contrib=2023.07.11-fix-ja-doc-md&h=50&w=50&mask=circle&maxage=7d '@eltociear')](https://github.com/eltociear)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/72805486?first-contrib=2023.07.14-enhance-ko-docs&h=50&w=50&mask=circle&maxage=7d '@Rojojun')](https://github.com/Rojojun)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/62183023?first-contrib=2023.07.24-fix-hi-doc&h=50&w=50&mask=circle&maxage=7d '@iamnishantgaharwar')](https://github.com/iamnishantgaharwar)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/in/29110&h=50&w=50&mask=circle&maxage=7d 'Dependabot')](https://github.com/dependabot)
[![](https://images.weserv.nl/?url=https://i.imgur.com/tNyIPmG.jpg?h=50&w=50&mask=circle&maxage=7d 'ChatGPT')](https://chat.openai.com)

<br>

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

<div id="star-history" align="center">

<br>

<a href="https://star-history.com/#kudoai/chatgpt.js&Timeline">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=kudoai/chatgpt.js&type=Timeline&theme=dark" />
    <img width=665 src="https://api.star-history.com/svg?repos=kudoai/chatgpt.js&type=Timeline" />
  </picture>
</a>

<br>_Erwägen Sie, diesem Repo ein ⭐ zu geben, wenn es Ihnen geholfen hat!_

</div>

#

<a href="https://github.com/kudoai/chatgpt.js/tree/main/dist">**Veröffentlichungen**</a> /
<a href="https://github.com/kudoai/chatgpt.js/discussions">Diskutieren</a> /
<a href="#">Zurück nach oben ↑</a>
