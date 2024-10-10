<div id="repo-cover" align="center">

<div align="center">
    <h6>
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs">
            <picture>
                <source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptjs.org/images/icons/earth-americas-white-padded-icon17x15.svg?714b6a1">
                <img src="https://media.chatgptjs.org/images/icons/earth-americas-padded-icon17x15.svg?714b6a1">
            </picture>
        </a>
        Английский |
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs/zh-cn#readme">简体中文</a> |
        <a href="zh-tw#readme">繁體中文</a> |
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs/ja#readme">日本</a> |
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs/ko#readme">한국인</a> |
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs/hi#readme">हिंदी</a> |
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs/np#readme">नेपाली</a> |
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs/de#readme">Deutsch</a> |
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs/es#readme">Español</a> |
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs/fr#readme">Français</a> |
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs/it#readme">Italiano</a> |
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs/nl#readme">Nederlands</a> |
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs/pt#readme">Português</a> |
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs/vi#readme">Việt</a>
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

[![](https://img.shields.io/github/stars/KudoAI/chatgpt.js?label=Stars&color=af68ff&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/KudoAI/chatgpt.js/stargazers)
[![](https://img.shields.io/badge/License-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/KudoAI/chatgpt.js/blob/main/LICENSE.md)
[![](https://img.shields.io/github/size/KudoAI/chatgpt.js/dist/chatgpt.min.js?branch=v3.3.4&label=Minified%20Size&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge)](https://github.com/KudoAI/chatgpt.js/tree/v3.3.4/dist/chatgpt.min.js)
[![](https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=Code+Quality&logo=codefactor&logoColor=white&labelColor=464646&color=1acc6c&style=for-the-badge)](https://www.codefactor.io/repository/github/kudoai/chatgpt.js)
[![](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dkudoai_chatgpt.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=464646&label=Vulnerabilities&color=gold)](https://sonarcloud.io/component_measures?metric=new_vulnerabilities&id=kudoai_chatgpt.js)
[![](https://img.shields.io/badge/Mentioned_in-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/sindresorhus/awesome-chatgpt#javascript)
[![](https://img.shields.io/badge/Featured_on-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.producthunt.com/posts/chatgpt-js)
![](https://img.shields.io/badge/jsDelivr_Requests-2,000,000+-2bbbd8.svg?logo=jsdelivr&logoColor=white&labelColor=464646&style=for-the-badge)

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
    await import('https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.3.4/dist/chatgpt.min.js');
    // Ваш код здесь...
})();

```
### ES5 (2009):
```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.3.4/dist/chatgpt.min.js');
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
// @require https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.3.4/dist/chatgpt.min.js
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

Если нет, ознакомьтесь с расширенным [руководством пользователя](https://github.com/KudoAI/chatgpt.js/blob/v3.3.4/docs/USERGUIDE.md), или просто отправьте [проблему](https://github.com/KudoAI/chatgpt.js/issues) или [PR](https://github.com/KudoAI/chatgpt.js/pulls), и это будет интегрировано, без проблем!

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

[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/10906554?first-contrib=2023.03.15&h=47&w=47&fit=crop&mask=circle&output=format:webp)](https://github.com/JoeSoderlund) 
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/49628936?first-contrib=2023.05.09&h=47&w=47&fit=crop&mask=circle&output=format:webp)](https://github.com/Abhi2905) 
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/50336817?first-contrib=2023.05.09&h=47&w=47&fit=crop&mask=circle&output=format:webp)](https://github.com/alexnguyen93) 
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/93998410?first-contrib=2023.06.30&h=47&w=47&fit=crop&mask=circle&output=format:webp)](https://github.com/wanlinin) 
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/94313881?first-contrib=2023.08.23&h=47&w=47&fit=crop&mask=circle&output=format:webp)](https://github.com/hatanos) 

</div>

---

