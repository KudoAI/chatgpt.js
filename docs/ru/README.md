<div id="repo-cover" align="center">

<a id="top"></a>

<div align="center">
    <h6>
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs">
            <picture>
                <source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptjs.org/images/icons/earth-americas-white-padded-icon17x15.svg?714b6a1">
                <img src="https://media.chatgptjs.org/images/icons/earth-americas-padded-icon17x15.svg?714b6a1">
            </picture>
        </a>
        Английский |
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

### 🤖 Мощная библиотека JavaScript для ChatGPT на стороне клиента

</div>

<br>

<div id="shields" align="center">

[![](https://img.shields.io/github/stars/KudoAI/chatgpt.js?label=Звезды&color=af68ff&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/KudoAI/chatgpt.js/stargazers)
[![](https://img.shields.io/badge/Лицензия-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/KudoAI/chatgpt.js/blob/main/LICENSE.md)
[![](https://img.shields.io/github/size/KudoAI/chatgpt.js/dist/chatgpt.min.js?branch=v3.3.5&label=Уменьшенный+размер&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge)](https://github.com/KudoAI/chatgpt.js/tree/v3.3.5/dist/chatgpt.min.js)
[![](https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=Качество+кода&logo=codefactor&logoColor=white&labelColor=464646&color=1acc6c&style=for-the-badge)](https://www.codefactor.io/repository/github/kudoai/chatgpt.js)
[![](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dkudoai_chatgpt.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=464646&label=Уязвимости&color=gold)](https://sonarcloud.io/component_measures?metric=new_vulnerabilities&id=kudoai_chatgpt.js)
[![](https://img.shields.io/badge/Упоминается_в-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/sindresorhus/awesome-chatgpt#javascript)
[![](https://img.shields.io/badge/Представлено_на-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.producthunt.com/posts/chatgpt-js)
![](https://img.shields.io/badge/Запросы_jsDelivr-2,000,000+-2bbbd8.svg?logo=jsdelivr&logoColor=white&labelColor=464646&style=for-the-badge)

</div>

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="intro">

## 💡 О проекте

</div>

<span style="color: white"><b>chatgpt.js</b></span> — это <span style="color: white">мощная</span> библиотека JavaScript, которая позволяет <span style="color: white">очень легко</span> взаимодействовать с DOM ChatGPT.

- Богатая функциональность
- Объектно-ориентированная
- Легкость в использовании
- Легковесная (и при этом оптимально производительная)

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="importing">

## ⚡ Импорт библиотеки

</div>

> **Примечание** _Чтобы всегда импортировать последнюю версию (не рекомендуется в производстве!), замените версию в URL jsDelivr на: `https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js/chatgpt.min.js`_

### ES11 (2020):

```js
(async () => {
    await import('https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.3.5/dist/chatgpt.min.js');
    // Ваш код здесь...
})();

```
### ES5 (2009):
```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.3.5/dist/chatgpt.min.js');
xhr.onload = function () {
    if (xhr.status === 200) {
        var chatgptJS = document.createElement('script');
        chatgptJS.textContent = xhr.responseText;
        document.head.append(chatgptJS);
        вашКод(); // запускает ваш код
    }
};
xhr.send();

function вашКод() {
    // Ваш код здесь...
}
```
### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://media.chatgptjs.org/images/icons/platforms/tampermonkey/icon28.png?a3e53bf7"><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://media.chatgptjs.org/images/icons/platforms/violentmonkey/icon25.png?a3e53bf7"> Greasemonkey:
> Примечание Чтобы использовать стартовый шаблон: kudoai/chatgpt.js-greasemonkey-starter

```js
...
// @require https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.3.5/dist/chatgpt.min.js
// ==/UserScript==

// Ваш код здесь...
```
<img style="margin: 0 2px -1px 0" height=16 src="https://media.chatgptjs.org/images/icons/platforms/chrome/icon16.png?8c852fa5"> Chrome:
> Примечание Чтобы использовать стартовый шаблон: kudoai/chatgpt.js-chrome-starter

Поскольку Google не позволяет удаленный код, необходимо импортировать chatgpt.js локально:

1. Сохраните [chatgpt.js](https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/chatgpt.js) в подкаталог (`lib` в этом примере).

2. В `manifest.json` вашего проекта (V3) добавьте `lib/chatgpt.js` в качестве веб-доступного ресурса:
    ```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.js"]
    }],
    ```

3. В скриптах, которые нуждаются в `chatgpt.js` (как в переднем, так и в фоновом режиме), импортируйте его следующим образом:
    ```js
    (async () => {
        await import(chrome.runtime.getURL('lib/chatgpt.js'));
        // Ваш код здесь...
    })();
    ```

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="npm">

## 💾 Загрузка через npm:

</div>

Чтобы загрузить **chatgpt.js** для локальной настройки, выполните следующую команду в корневом каталоге вашего проекта:

```bash
npm install @kudoai/chatgpt.js

После установки перейдите в `node_modules/@kudoai/chatgpt.js`, чтобы найти исходный код библиотеки.

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="usage">
```
## 💻 Использование

</div>

**chatgpt.js** был написан с высокой гибкостью в виду.

Например:

```js
chatgpt.getLastResponse();
chatgpt.getLastReply();
chatgpt.response.getLast();
chatgpt.get('reply', 'last');


```

Каждый вызов одинаково получает последний ответ. Если вы думаете, что это сработает, вероятно, так и будет... просто введите это!

Если нет, ознакомьтесь с расширенным [руководством пользователя](https://github.com/KudoAI/chatgpt.js/blob/v3.3.5/docs/USERGUIDE.md), или просто отправьте [проблему](https://github.com/KudoAI/chatgpt.js/issues) или [PR](https://github.com/KudoAI/chatgpt.js/pulls), и это будет интегрировано, без проблем!

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="showcase">

## 🤖 Сделано с chatgpt.js

</div>


https://github.com/KudoAI/chatgpt.js/assets/10906554/f53c740f-d5e0-49b6-ae02-3b3140b0f8a4

#

### <img src="https://amazongpt.kudoai.com/assets/images/icons/amazongpt/black-gold-teal/icon48.png" width=20> [AmazonGPT](https://amazongpt.kudoai.com) &nbsp;<a href="https://devpost.com/software/amazongpt" target="_blank" rel="noopener"><img height=20 src="https://amazongpt.kudoai.com/assets/images/badges/wolfram-award/gold-badge.png" style="margin:0 0 -2px 5px"></a>

> Добавьте ИИ в покупки на Amazon.
<br>[Установить](https://greasyfork.org/scripts/500663-amazongpt) /
[Читать](https://amazongpt.kudoai.com/#readme) /
[Обсудить](https://amazongpt.kudoai.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.autoclearchatgpt.com/images/icons/openai/white/icon48.png?cece513"><img width=21 src="https://media.autoclearchatgpt.com/images/icons/openai/black/icon48.png?cece513"></picture> [Autoclear ChatGPT History](https://autoclearchatgpt.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://media.autoclearchatgpt.com/images/badges/awesome/badge.svg?2c0d9fc" style="margin:0 0 -2px 5px"></a>

> Автоочистка истории запросов ChatGPT для максимальной конфиденциальности.
<br>[Установить](https://docs.autoclearchatgpt.com/#-installation) /
[Читать](https://docs.autoclearchatgpt.com/#readme) /
[Обсудить](https://github.autoclearchatgpt.com/discussions)

### <img width=24 src="https://media.bravegpt.com/images/icons/bravegpt/icon48.png?0a9e287"> [BraveGPT](https://bravegpt.com) &nbsp;<a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> Добавляет AI-ответы в Brave Search (на базе GPT-4o!)
<br>[Установить](https://docs.bravegpt.com/#-installation) /
[Читать](https://docs.bravegpt.com/#readme) /
[Обсуждение](https://github.bravegpt.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptautocontinue.com/images/icons/openai/white/icon48.png?7bbd222"><img width=21 src="https://media.chatgptautocontinue.com/images/icons/openai/black/icon48.png?7bbd222"></picture> [ChatGPT Auto-Continue ⏩](https://chatgptautocontinue.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://media.chatgptautocontinue.com/images/badges/awesome/badge.svg?3c80c0c" style="margin:0 0 -3px 3px"></a>

> Автоматически продолжает генерировать несколько ответов ChatGPT.
<br>[Установить](https://docs.chatgptautocontinue.com/#-installation) /
[Читать](https://docs.chatgptautocontinue.com/#readme) /
[Обсуждение](https://github.chatgptautocontinue.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/white/icon64.png"><img width=21 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/black/icon64.png"></picture> [ChatGPT Auto-Talk 📣](https://github.com/adamlui/chatgpt-auto-talk)

> Автоматическое воспроизведение ответов ChatGPT.
<br>[Установить](https://greasyfork.org/scripts/500940-chatgpt-auto-talk) /
[Читать](https://github.com/adamlui/chatgpt-auto-talk#readme) /
[Обсуждение](https://github.com/adamlui/chatgpt-auto-talk/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptautorefresh.com/images/icons/openai/white/icon48.png?a45cf1e"><img width=21 src="https://media.chatgptautorefresh.com/images/icons/openai/black/icon48.png?a45cf1e"></picture> [ChatGPT Auto Refresh ↻](https://chatgptautorefresh.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://media.chatgptautorefresh.com/images/badges/awesome/badge.svg?1080f44" style="margin:0 0 -2px 5px"></a>

> Поддерживает сессии ChatGPT свежими, чтобы избежать сетевых ошибок + проверок Cloudflare.
<br>[Установить](https://docs.chatgptautorefresh.com/#-installation) /
[Читать](https://docs.chatgptautorefresh.com/#readme) /
[Обсуждение](https://github.chatgptautorefresh.com/discussions)

### <img width=23 src="https://media.ddgpt.com/images/icons/duckduckgpt/icon48.png?af89302"> [DuckDuckGPT](https://duckduckgpt.com) &nbsp;<a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> Добавляет AI-ответы в DuckDuckGo (на базе GPT-4o!)
<br>[Установить](https://docs.ddgpt.com/#-installation) /
[Читать](https://docs.ddgpt.com/#readme) /
[Обсуждение](https://github.ddgpt.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.googlegpt.io/images/icons/googlegpt/white/icon32.png?8652a6e"><img width=21 src="https://media.googlegpt.io/images/icons/googlegpt/black/icon32.png?8652a6e"></picture> [GoogleGPT](https://googlegpt.io) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://media.googlegpt.io/images/badges/awesome/badge.svg?699c63d" style="margin:0 0 -2px 5px"></a>

> Добавляет AI-ответы в поиск Google (на базе Google Gemma + GPT-4o!)
<br>[Установить](https://greasyfork.googlegpt.io) /
[Читать](https://docs.googlegpt.io/#readme) /
[Обсуждение](https://github.googlegpt.io/discussions)

### <img width=23 src="https://media.chatgptjs.org/images/icons/platforms/thunderbird/icon32.png?313a9c5"> [ThunderAI](https://micz.it/thunderdbird-addon-thunderai/) &nbsp;<a href="https://addons.thunderbird.net/thunderbird/addon/thunderai/reviews" target="_blank" rel="noopener"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptjs.org/images/badges/5-star/blue-stars.png?0943672"><img width=92 alt="[Оценка 5 звезд]" src="https://media.chatgptjs.org/images/badges/5-star/yellow-stars-in-white-pill.png?0943672"></picture></a>

> Используйте ChatGPT в Thunderbird для улучшения ваших писем, даже с бесплатным аккаунтом!
<br>[Установить](https://addons.thunderbird.net/thunderbird/addon/thunderai/) /
[Читать](https://micz.it/thunderdbird-addon-thunderai/) /
[Поддержка](https://github.com/micz/ThunderAI/issues)

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
Если вы создали что-то с использованием chatgpt.js и хотите поделиться, напишите на <a href="mailto:showcase@chatgptjs.org">showcase@chatgptjs.org</a> или просто откройте <a href="https://github.com/KudoAI/chatgpt.js/pulls" target="_blank" rel="noopener">запрос на слияние</a>!
</p>

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="contributors">

## 🧠 Участники

</div>

Эта библиотека существует благодаря коду, переводам, проблемам и идеям от следующих участников:

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
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/1441127?first-contrib=2024.1.20-chat-id-structure-updated-alert&h=47&w=47&mask=circle&maxage=7d "@gadelkareem")](https://github.com/gadelkareem)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/13976824?first-contrib=2024.01.31-aria-labels-unreliable-bug-report&h=47&w=47&mask=circle&maxage=7d "@hopana")](https://github.com/hopana)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/26219737?first-contrib=2024.2.2-data-key-message-bug-fix&h=47&w=47&mask=circle&maxage=7d "@emtry")](https://github.com/emtry)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/44357327?first-contrib=2024.2.14-msg-fetching-for-localization-fails-report&h=47&w=47&mask=circle&maxage=7d "@thedayofcondor")](https://github.com/thedayofcondor)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/111466842?first-contrib=2024.2.15-add-en-gb-locale&h=47&w=47&mask=circle&maxage=7d "@Luwa-Tech")](https://github.com/Luwa-Tech)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/61795?first-contrib=2024.5.9-update-css-selector-for-getregeneratebutton&h=47&w=47&mask=circle&maxage=7d "@micz")](https://github.com/micz)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/17583722?first-contrib=2024.5.17-chrome-starter-manifest-matches-outdated-alert&h=47&w=47&mask=circle&maxage=7d "@imranaalam")](https://github.com/imranaalam)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/50076933?first-contrib=2024.6.22-code.isidle-request&h=47&w=47&mask=circle&maxage=7d "@grayfallstown")](https://github.com/grayfallstown)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/155944537?first-contrib=2024.8.27-sidebar-update-testing&h=47&w=47&mask=circle&maxage=7d "@svan-b")](https://github.com/svan-b)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/74002352?first-contrib=2024.8.28-sidebar-update-testing&h=47&w=47&mask=circle&maxage=7d "@Jeff-Zzh")](https://github.com/Jeff-Zzh)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/12472719?first-contrib=2024.10.2-getchatinput-stopped-working-report&h=47&w=47&mask=circle&maxage=7d "@ae3e")](https://github.com/ae3e)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/129654632?first-contrib=2024.10.10-userguide-typo-correction&h=47&w=47&mask=circle&maxage=7d "@FarukhS52")](https://github.com/FarukhS52)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/183274513?first-contrib=2024.10.10-create-ru-readme&h=47&w=47&mask=circle&maxage=7d "@Innovatorcloudy")](https://github.com/Innovatorcloudy)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/94866865?first-contrib=2024.10.11-fix-readme-back-to-top-link&h=47&w=47&mask=circle&maxage=7d "@barbarian360")](https://github.com/barbarian360)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/98452243?first-contrib=2024.10.26-fix-nepali-doc-link&h=47&w=47&mask=circle&maxage=7d "@adityadeshpande09")](https://github.com/adityadeshpande09)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/46562212?first-contrib=2024.10.27-added-callout-notation-to-en-readme&h=47&w=47&mask=circle&maxage=7d "@twlite")](https://github.com/twlite)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/100464898?first-contrib=2024.10.27-fix-nepali-grammar&h=47&w=47&mask=circle&maxage=7d "@sulav7")](https://github.com/sulav7)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/in/29110&h=47&w=47&mask=circle&maxage=7d "Dependabot")](https://github.com/dependabot)
<a href="https://chatgpt.com"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://images.weserv.nl/?url=https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@main/media/images/icons/platforms/chatgpt/black-on-white/icon189.png?h=46&w=46&mask=circle&maxage=7d"><img src="https://images.weserv.nl/?url=https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@main/media/images/icons/platforms/chatgpt/white-on-black/icon189.png?h=46&w=46&mask=circle&maxage=7d" title="ChatGPT"></picture></a>
<a href="https://poe.com"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://images.weserv.nl/?url=https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@main/media/images/icons/platforms/poe/w-purple-blue-stripes/black-on-white/icon175.png?h=46&w=46&mask=circle&maxage=7d"><img src="https://images.weserv.nl/?url=https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@main/media/images/icons/platforms/poe/w-purple-blue-stripes/white-on-black/icon175.png?h=46&w=46&mask=circle&maxage=7d" title="Poe"></picture></a>
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/31427850?h=51&w=51&mask=circle&maxage=7d "@ImgBotApp")](https://github.com/ImgBotApp)

</div><br>

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="partners">

## 🤝 Партнеры

</div>

**chatgpt.js** частично финансируется:

<div id="partners-collage" align="center">

<picture>
    <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptjs.org/images/logos/partners/collage/white.png?3109608">
    <img width=888 src="https://media.chatgptjs.org/images/logos/partners/collage/black.png?3109608">
</picture>

</div>

<br>

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div align="center">

**[Релизы](https://github.com/KudoAI/chatgpt.js/releases)** /
[Руководство пользователя](https://github.com/KudoAI/chatgpt.js/blob/v3.3.5/docs/USERGUIDE.md) /
[Обсуждать](https://github.com/KudoAI/chatgpt.js/discussions) /
<a href="#top">Вернуться наверх ↑</a>

</div>
