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
         Italiano |
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

### 🤖 Una potente libreria JavaScript lato client per ChatGPT

</div>

<br>

<div id="shields" align="center">

<a href="https://github.com/KudoAI/chatgpt.js/stargazers">
    <img src="https://img.shields.io/github/stars/KudoAI/chatgpt.js?label=Stelle&color=af68ff&logo=github&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="LICENSE.md">
    <img src="https://img.shields.io/badge/Licenza-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://github.com/KudoAI/chatgpt.js/tree/v3.6.1/dist/chatgpt.min.js">
    <img src="https://img.shields.io/github/size/KudoAI/chatgpt.js/dist/chatgpt.min.js?branch=v3.6.1&label=Minified%20Size&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge"></a>
<a href="https://www.codefactor.io/repository/github/kudoai/chatgpt.js">
    <img src="https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=Qualità+del+Codice&logo=codefactor&logoColor=white&labelColor=464646&color=1acc6c&style=for-the-badge"></a>
<a href="https://sonarcloud.io/component_measures?metric=new_vulnerabilities&id=kudoai_chatgpt.js">
    <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dkudoai_chatgpt.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=464646&label=Vulnerabilità&color=gold"></a>
<a href="https://github.com/sindresorhus/awesome-chatgpt#javascript">
    <img src="https://img.shields.io/badge/Menzionato_in-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.producthunt.com/posts/chatgpt-js">
    <img src="https://img.shields.io/badge/In_Evidenza-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="#">
    <img src="https://img.shields.io/badge/jsDelivr_Richieste-2,000,000+-2bbbd8.svg?logo=jsdelivr&logoColor=white&labelColor=464646&style=for-the-badge"></a>

</div>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="intro">

## 💡 Informazioni

</div>

<span style="color: white"><b>chatgpt.js</b></span> è una <span style="color: white">potente</span> libreria JavaScript che consente un'interazione <span style="color: white">semplicissima</span> con il DOM di ChatGPT.

- Ricco di funzionalità
- Orientamento ad oggetti
- Facile da usare
- Leggero (ma molto performante)

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="importing">

## ⚡ Importazione della libreria

</div>

> **Nota** _Per importare sempre la versione più recente (non consigliato in produzione!) sostituisci l'URL jsDelivr con versione con: `https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js/chatgpt.min.js`_

### ES11 (2020):

```js
(async () => {
    await import('https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.6.1/dist/chatgpt.min.js');
    // Il tuo codice qui...
})();
```

### ES5 (2009):

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.6.1/dist/chatgpt.min.js');
xhr.onload = function () {
    if (xhr.status === 200) {
        var chatgptJS = document.createElement('script');
        chatgptJS.textContent = xhr.responseText;
        document.head.append(chatgptJS);
        yourCode(); // esegue il tuo codice
    }
};
xhr.send();

function yourCode() {
    // Il tuo codice qui...
}
```

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://assets.chatgptjs.org/images/icons/platforms/tampermonkey/icon28.png?v=e638eac"><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://assets.chatgptjs.org/images/icons/platforms/violentmonkey/icon25.png?v=e638eac"> Greasemonkey:

> **Nota** _Per utilizzare un modello iniziale: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/KudoAI/chatgpt.js-greasemonkey-starter)_

```js
...
// @require https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.6.1/dist/chatgpt.min.js
// ==/UserScript==

// Il tuo codice qui...
```

### <img style="margin: 0 2px -1px 0" height=16 src="https://assets.chatgptjs.org/images/icons/platforms/chrome/icon16.png?v=e638eac"> Chrome:

> **Nota** _Per utilizzare un modello iniziale: [kudoai/chatgpt.js-chrome-starter](https://github.com/KudoAI/chatgpt.js-chrome-starter)_

Poiché Google non consente il codice remoto, è richiesta l'importazione di chatgpt.js localmente:

1. Salva https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/chatgpt.js in una sottocartella (`lib` in questo esempio)

2. In `manifest.json` del progetto (V3), aggiungi `lib/chatgpt.js` come risorsa accessibile dal web
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.js"]
    }],
```

3. Negli script che richiedono `chatgpt.js` (in primo piano/background), importalo in questo modo:
```js
(async () => {
    await import(chrome.runtime.getURL('lib/chatgpt.js'));
    // Il tuo codice qui...
})();
```

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="npm">

## 💾 Scaricare tramite npm:

</div>

Per scaricare **chatgpt.js** per la personalizzazione locale, esegui il seguente comando nella root del tuo progetto:

```bash
npm install @kudoai/chatgpt.js
```

Dopo l'installazione, vai a `node_modules/@kudoai/chatgpt.js` per trovare il sorgente della libreria.

</div>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="usage">

## 💻 Utilizzo

</div>

**chatgpt.js** è stato scritto pensando all'estrema flessibilità.

Per esempio:

```js
chatgpt.getLastResponse();
chatgpt.getLastReply();
chatgpt.response.getLast();
chatgpt.get('reply', 'last');
```

Ogni chiamata ritorna ugualmente l'ultima risposta di ChatGPT. Se pensi che funzioni, probabilmente lo farà... quindi scrivilo!

In caso contrario, consulta la [guida per l'utente](https://github.com/KudoAI/chatgpt.js/blob/v3.6.1/docs/USERGUIDE.md) estesa o invia semplicemente un [problema](https://github.com/KudoAI/chatgpt.js/issues) o [PR](https://github.com/KudoAI/chatgpt.js/pulls) e sarà integrato, facile!

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="showcase">

## 🤖 Realizzato con chatgpt.js

</div>

https://github.com/KudoAI/chatgpt.js/assets/10906554/f53c740f-d5e0-49b6-ae02-3b3140b0f8a4

#

### <img src="https://amazongpt.kudoai.com/assets/images/icons/amazongpt/black-gold-teal/icon48.png" width=20> [AmazonGPT](https://amazongpt.kudoai.com)  &nbsp;<a href="https://amazongpt.kudoai.com/assets/wolfram-award/letter.pdf" target="_blank" rel="noopener"><img height=20 src="https://amazongpt.kudoai.com/assets/images/badges/wolfram-award/gold-badge.png" style="margin:0 0 -2px 5px"></a>

> Aggiungi l'intelligenza artificiale agli acquisti su Amazon.
<br>[Install](https://raw.githubusercontent.com/KudoAI/amazongpt/main/greasemonkey/amazongpt.user.js) /
[Readme](https://amazongpt.kudoai.com/#readme) /
[Discuss](https://amazongpt.kudoai.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.autoclearchatgpt.com/images/icons/openai/white/icon48.png?cece513"><img width=21 src="https://assets.autoclearchatgpt.com/images/icons/openai/black/icon48.png?cece513"></picture> [Cancella Cronologia ChatGPT](https://autoclearchatgpt.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://assets.autoclearchatgpt.com/images/badges/awesome/badge.svg?2c0d9fc" style="margin:0 0 -2px 5px"></a>

> Cancella automaticamente la cronologia delle chat di ChatGPT per la massima privacy.
<br>[Installazione](https://docs.autoclearchatgpt.com/#-installation) /
[Leggimi](https://docs.autoclearchatgpt.com/#readme) /
[Discussione](https://github.autoclearchatgpt.com/discussions)

### <img width=24 src="https://assets.bravegpt.com/images/icons/bravegpt/icon48.png?0a9e287"> [BraveGPT](https://bravegpt.com) &nbsp;<a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> Aggiunge risposte AI a Brave Search (con tecnologia GPT-4o!)
<br>[Installazione](https://docs.bravegpt.com/#-installation) /
[Leggimi](https://docs.bravegpt.com/#readme) /
[Discussione](https://github.bravegpt.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautocontinue.com/images/icons/openai/white/icon48.png?7bbd222"><img width=21 src="https://assets.chatgptautocontinue.com/images/icons/openai/black/icon48.png?7bbd222"></picture> [ChatGPT Auto-Continua ⏩](https://chatgptautocontinue.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://assets.chatgptautocontinue.com/images/badges/awesome/badge.svg?3c80c0c" style="margin:0 0 -3px 3px"></a>

> Continua automaticamente a generare più risposte di ChatGPT.
<br>[Installazione](https://docs.chatgptautocontinue.com/#-installation) /
[Leggimi](https://docs.chatgptautocontinue.com/#readme) /
[Discussione](https://github.chatgptautocontinue.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/white/icon64.png"><img width=21 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/black/icon64.png"></picture> [ChatGPT Auto-Parlare 📣](https://github.com/adamlui/chatgpt-auto-talk)

> Riproduci automaticamente le risposte ChatGPT.
<br>[Install](https://gm.chatgptautotalk.com) /
[Readme](https://github.com/adamlui/chatgpt-auto-talk#readme) /
[Discuss](https://github.com/adamlui/chatgpt-auto-talk/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautorefresh.com/images/icons/openai/white/icon48.png?a45cf1e"><img width=21 src="https://assets.chatgptautorefresh.com/images/icons/openai/black/icon48.png?a45cf1e"></picture> [ChatGPT Aggiornamento Automatico ↻](https://chatgptautorefresh.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://assets.chatgptautorefresh.com/images/badges/awesome/badge.svg?1080f44" style="margin:0 0 -2px 5px"></a>

> Mantiene aggiornate le sessioni ChatGPT, eliminando limiti di tempo di chat + errori di rete + controlli Cloudflare.
<br>[Installazione](https://docs.chatgptautorefresh.com/#-installation) /
[Leggimi](https://docs.chatgptautorefresh.com/#readme) /
[Discussione](https://github.chatgptautorefresh.com/discussions)

### <img width=23 src="https://assets.ddgpt.com/images/icons/duckduckgpt/icon48.png?af89302"> [DuckDuckGPT](https://duckduckgpt.com) &nbsp;<a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> Aggiunge risposte AI a DuckDuckGo (con tecnologia GPT-4o!)
<br>[Installazione](https://docs.ddgpt.com/#-installation) /
[Leggimi](https://docs.ddgpt.com/#readme) /
[Discussione](https://github.ddgpt.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.googlegpt.io/images/icons/googlegpt/white/icon32.png?8652a6e"><img width=21 src="https://assets.googlegpt.io/images/icons/googlegpt/black/icon32.png?8652a6e"></picture> [GoogleGPT](https://googlegpt.io) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://assets.googlegpt.io/images/badges/awesome/badge.svg?699c63d" style="margin:0 0 -2px 5px"></a>

> Aggiunge risposte AI a Google Search (con tecnologia Google Gemma + GPT-4o!)
<br>[Installazione](https://greasyfork.googlegpt.io) /
[Leggimi](https://docs.googlegpt.io/#readme) /
[Discussione](https://github.googlegpt.io/discussions)

### <img width=23 src="https://assets.chatgptjs.org/images/icons/platforms/thunderbird/icon32.png?v=e638eac"> [ThunderAI](https://micz.it/thunderdbird-addon-thunderai/) &nbsp;<a href="https://addons.thunderbird.net/thunderbird/addon/thunderai/reviews" target="_blank" rel="noopener"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/badges/5-star/blue-stars.png?v=e638eac"><img width=92 alt="[Voto 5 stelle]" src="https://assets.chatgptjs.org/images/badges/5-star/yellow-stars-in-white-pill.png?v=e638eac"></picture></a>

> Usa ChatGPT in Thunderbird per migliorare le tue email, anche con un account gratuito!
<br>[Installazione](https://addons.thunderbird.net/thunderbird/addon/thunderai/) /
[Leggimi](https://micz.it/thunderdbird-addon-thunderai/) /
[Supporto](https://github.com/micz/ThunderAI/issues)

<p><br>

<a href="https://chatgptinfinity.com" target="_blank" rel="noopener">
    <img width=555 src="https://assets.chatgptinfinity.com/images/tiles/marquee/tile-1400x560.png?v=34b428b">
</a>

<p><br>

<a href="https://chatgptwidescreen.com" target="_blank" rel="noopener">
    <img width=555 src="https://assets.chatgptwidescreen.com/images/tiles/marquee/tile-1400x560.png?v=4c5d018">
</a>

<p><br>

<p id="showcase-cta">
Se hai creato qualcosa con chatgpt.js che desideri condividere, invia un'email a <a href="mailto:showcase@chatgptjs.org">showcase@chatgptjs.org</a> o semplicemente apri una <a href="https://github.com/KudoAI/chatgpt.js/pulls" target="_blank" rel="noopener">pull request</a>!
</p>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="contributors">

## 🧠 Contributori

</div>

Questa libreria esiste grazie al codice, alle traduzioni, alle issues e alle idee dei seguenti contributori:

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
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://images.weserv.nl/?url=https://assets.chatgptjs.org/images/icons/platforms/chatgpt/black-on-white/icon189.png?h=46&w=46&mask=circle&maxage=7d">
        <img title="ChatGPT" src="https://images.weserv.nl/?url=https://assets.chatgptjs.org/images/icons/platforms/chatgpt/white-on-black/icon189.png?h=46&w=46&mask=circle&maxage=7d">
    </picture></a>
<a href="https://poe.com">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://images.weserv.nl/?url=https://assets.chatgptjs.org/images/icons/platforms/poe/w-purple-blue-stripes/black-on-white/icon175.png?h=46&w=46&mask=circle&maxage=7d"><img src="https://images.weserv.nl/?url=https://assets.chatgptjs.org/images/icons/platforms/poe/w-purple-blue-stripes/white-on-black/icon175.png?h=46&w=46&mask=circle&maxage=7d" title="Poe">
    </picture></a>
<a href="https://github.com/ImgBotApp">
    <img title="@ImgBotApp" src="https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/31427850?h=51&w=51&mask=circle&maxage=7d"></a>

</div><br>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div align="center">

<br>

**chatgpt.js** è finanziato in parte da:

<a href="https://microsoft.com?utm_source=github&utm_medium=readme&utm_content=partner-logo&utm_campaign=chatgpt.js">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/logos/partners/microsoft/white.png?v=e638eac">
        <img width=255 src="https://assets.chatgptjs.org/images/logos/partners/microsoft/black.png?v=e638eac">
    </picture>
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://burncloud.com/?utm_source=github&utm_medium=readme&utm_content=partner-logo&utm_campaign=chatgpt.js">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/logos/partners/burncloud/with-description/white.png?v=610795b">
        <img width=285 src="https://assets.chatgptjs.org/images/logos/partners/burncloud/with-description/black.png?v=610795b">
    </picture>
</a>

</div>

<br>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div align="center">

**[Versioni](https://github.com/KudoAI/chatgpt.js/releases)** /
[Guida per l'utente](https://github.com/KudoAI/chatgpt.js/blob/v3.6.1/docs/USERGUIDE.md) /
[Discutere](https://github.com/KudoAI/chatgpt.js/discussions) /
<a href="#top">Torna all'inizio ↑</a>

</div>
