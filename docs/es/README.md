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
        Español |
        <a href="../..#readme">English</a> |
        <a href="../zh-cn#readme">简体中文</a> |
        <a href="../zh-tw#readme">繁體中文</a> |
        <a href="../ja#readme">日本</a> |
        <a href="../ko#readme">한국인</a> |
        <a href="../hi#readme">हिंदी</a> |
        <a href="../ne#readme">नेपाली</a> |
        <a href="../de#readme">Deutsch</a> |
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

### 🤖 Una poderosa biblioteca de JavaScript del lado del cliente para ChatGPT

</div>

<br>

<div id="shields" align="center">

<a href="https://github.com/KudoAI/chatgpt.js/stargazers">
    <img src="https://img.shields.io/github/stars/KudoAI/chatgpt.js?label=Estrellas&color=af68ff&logo=github&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="LICENSE.md">
    <img src="https://img.shields.io/badge/Licencia-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://github.com/KudoAI/chatgpt.js/tree/v3.7.1/dist/chatgpt.min.js">
    <img src="https://img.shields.io/github/size/KudoAI/chatgpt.js/dist/chatgpt.min.js?branch=v3.7.1&label=Minified%20Size&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge"></a>
<a href="https://www.codefactor.io/repository/github/kudoai/chatgpt.js">
    <img src="https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=Calidad+del+Código&logo=codefactor&logoColor=white&labelColor=464646&color=1acc6c&style=for-the-badge"></a>
<a href="https://sonarcloud.io/component_measures?metric=new_vulnerabilities&id=kudoai_chatgpt.js">
    <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dkudoai_chatgpt.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=464646&label=Vulnerabilidades&color=gold"></a>
<a href="https://github.com/sindresorhus/awesome-chatgpt#javascript">
    <img src="https://img.shields.io/badge/Mencionado_en-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.producthunt.com/posts/chatgpt-js">
    <img src="https://img.shields.io/badge/Presentado_en-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="#">
    <img src="https://img.shields.io/badge/Solicitudes_jsDelivr-2,000,000+-2bbbd8.svg?logo=jsdelivr&logoColor=white&labelColor=464646&style=for-the-badge"></a>

</div>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="intro">

## 💡 Acerca de

</div>

<span style="color: white"><b>chatgpt.js</b></span> es una <span style="color: white">poderosa</span> biblioteca de JavaScript que permite una interacción <span style="color: white">súper fácil</span> con ChatGPT DOM.

- Rico en funciones
- Orientado a objetos
- Fácil de usar
- Ligero (pero con un rendimiento óptimo)

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="golden-sponsors" align="center">
<br>

### Golden Sponsor:

<a href="https://www.burncloud.com/893.html">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/logos/partners/burncloud/with-description/white.png?v=610795b">
        <img width=685 src="https://assets.chatgptjs.org/images/logos/partners/burncloud/with-description/black.png?v=610795b">
    </picture>
</a>
<br><br><br>

</div>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="importing">

## ⚡ Importación de la biblioteca

</div>

> **Nota** _Para importar siempre la última versión (¡no se recomienda en producción!), reemplace la URL de jsDelivr versionada con: `https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js/chatgpt.min.js`_

### ES11 (2020):

```js
(async () => {
    await import('https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.7.1/dist/chatgpt.min.js');
    // Tu código aquí...
})();
```

### ES5 (2009):

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.7.1/dist/chatgpt.min.js');
xhr.onload = function () {
    if (xhr.status === 200) {
        var chatgptJS = document.createElement('script');
        chatgptJS.textContent = xhr.responseText;
        document.head.append(chatgptJS);
        yourCode(); // ejecuta tu código
    }
};
xhr.send();

function yourCode() {
    // Tu código aquí...
}
```

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://assets.chatgptjs.org/images/icons/platforms/tampermonkey/icon28.png?v=e638eac"><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://assets.chatgptjs.org/images/icons/platforms/violentmonkey/icon25.png?v=e638eac"> Greasemonkey:

> **Nota** _Para utilizar una plantilla de inicio: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/KudoAI/chatgpt.js-greasemonkey-starter)_

```js
...
// @require https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.7.1/dist/chatgpt.min.js
// ==/UserScript==

// Tu código aquí...
```

### <img style="margin: 0 2px -1px 0" height=16 src="https://assets.chatgptjs.org/images/icons/platforms/chrome/icon16.png?v=e638eac"> Chrome:

> **Nota** _Para utilizar una plantilla de inicio: [kudoai/chatgpt.js-chrome-starter](https://github.com/KudoAI/chatgpt.js-chrome-starter)_

Dado que Google no permite el código remoto, es necesario importar chatgpt.js localmente:

1. Guarde https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/chatgpt.js en un subdirectorio (`lib` en este ejemplo)

2. En el `manifest.json` del proyecto (V3), agregue `lib/chatgpt.js` como un recurso accesible desde la web
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.js"]
    }],
```

3. En los scripts que necesitan `chatgpt.js` (primer plano/fondo por igual), impórtelo así:
```js
(async () => {
    await import(chrome.runtime.getURL('lib/chatgpt.js'));
    // Tu código aquí...
})();
```

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="npm">

## 💾 Descargando a través de npm:

</div>

Para descargar **chatgpt.js** para personalización local, ejecute el siguiente comando en la raíz de su proyecto:

```bash
npm install @kudoai/chatgpt.js
```

Después de la instalación, navegue hasta `node_modules/@kudoai/chatgpt.js` para encontrar la fuente de la biblioteca.

</div>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="usage">

## 💻 Uso

</div>

**chatgpt.js** fue escrito con ultra flexibilidad en mente.

Por ejemplo:

```js
chatgpt.getLastResponse();
chatgpt.getLastReply();
chatgpt.response.getLast();
chatgpt.get('reply', 'last');
```

Cada llamada obtiene igualmente la última respuesta. Si crees que funciona, probablemente lo hará... ¡así que escríbelo! (¿Quién tiene tiempo para los documentos?)

Si no fue así, consulte la [guía del usuario](https://github.com/KudoAI/chatgpt.js/blob/v3.7.1/docs/USERGUIDE.md) extendida, o simplemente envíe un [problema] (https:/ /github.com/KudoAI/chatgpt.js/issues) o [PR](https://github.com/KudoAI/chatgpt.js/pulls) y se integrará, ¡pan comido!

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="showcase">

## 🤖 Hecho con chatgpt.js

</div>

https://github.com/KudoAI/chatgpt.js/assets/10906554/f53c740f-d5e0-49b6-ae02-3b3140b0f8a4

#

### <img src="https://amazongpt.kudoai.com/assets/images/icons/amazongpt/black-gold-teal/icon48.png" width=20> [AmazonGPT](https://amazongpt.kudoai.com)  &nbsp;<a href="https://amazongpt.kudoai.com/assets/wolfram-award/letter.pdf" target="_blank" rel="noopener"><img height=20 src="https://amazongpt.kudoai.com/assets/images/badges/wolfram-award/gold-badge.png" style="margin:0 0 -2px 5px"></a>

> Agregue IA a las compras en Amazon.
<br>[Install](https://raw.githubusercontent.com/KudoAI/amazongpt/main/greasemonkey/amazongpt.user.js) /
[Readme](https://amazongpt.kudoai.com/#readme) /
[Discuss](https://amazongpt.kudoai.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.autoclearchatgpt.com/images/icons/openai/white/icon48.png?cece513"><img width=21 src="https://assets.autoclearchatgpt.com/images/icons/openai/black/icon48.png?cece513"></picture> [Borrar Historial de ChatGPT](https://autoclearchatgpt.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://assets.autoclearchatgpt.com/images/badges/awesome/badge.svg?2c0d9fc" style="margin:0 0 -2px 5px"></a>

> Borre automáticamente su historial de consultas de ChatGPT para obtener la máxima privacidad.
<br>[Instalar](https://docs.autoclearchatgpt.com/#-installation) /
[Léame](https://docs.autoclearchatgpt.com/#readme) /
[Conversar](https://github.autoclearchatgpt.com/discussions)

### <img width=24 src="https://assets.bravegpt.com/images/icons/bravegpt/icon48.png?0a9e287"> [BraveGPT](https://bravegpt.com) &nbsp;<a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> Agrega respuestas de IA a Brave Search (¡con tecnología GPT-4o!)
<br>[Instalar](https://docs.bravegpt.com/#-installation) /
[Léame](https://docs.bravegpt.com/#readme) /
[Conversar](https://github.bravegpt.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautocontinue.com/images/icons/openai/white/icon48.png?7bbd222"><img width=21 src="https://assets.chatgptautocontinue.com/images/icons/openai/black/icon48.png?7bbd222"></picture> [ChatGPT Auto-Continuar ⏩](https://chatgptautocontinue.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://assets.chatgptautocontinue.com/images/badges/awesome/badge.svg?3c80c0c" style="margin:0 0 -3px 3px"></a>

> Continúa generando automáticamente múltiples respuestas de ChatGPT.
<br>[Instalar](https://docs.chatgptautocontinue.com/#-installation) /
[Léame](https://docs.chatgptautocontinue.com/#readme) /
[Conversar](https://github.chatgptautocontinue.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/white/icon64.png"><img width=21 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/black/icon64.png"></picture> [ChatGPT Auto-Hablar 📣](https://github.com/adamlui/chatgpt-auto-talk)

> Reproducción automática de respuestas de ChatGPT.
<br>[Install](https://gm.chatgptautotalk.com) /
[Readme](https://github.com/adamlui/chatgpt-auto-talk#readme) /
[Discuss](https://github.com/adamlui/chatgpt-auto-talk/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautorefresh.com/images/icons/openai/white/icon48.png?a45cf1e"><img width=21 src="https://assets.chatgptautorefresh.com/images/icons/openai/black/icon48.png?a45cf1e"></picture> [ChatGPT Actualización Automática ↻](https://chatgptautorefresh.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://assets.chatgptautorefresh.com/images/badges/awesome/badge.svg?1080f44" style="margin:0 0 -2px 5px"></a>

> Mantiene actualizadas las sesiones de ChatGPT, eliminando límites de tiempo de chat + errores de red + comprobaciones de Cloudflare.
<br>[Instalar](https://docs.chatgptautorefresh.com/#-installation) /
[Léame](https://docs.chatgptautorefresh.com/#readme) /
[Conversar](https://github.chatgptautorefresh.com/discussions)

### <img width=23 src="https://assets.ddgpt.com/images/icons/duckduckgpt/icon48.png?af89302"> [DuckDuckGPT](https://duckduckgpt.com) &nbsp;<a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> Agrega respuestas de IA a DuckDuckGo (¡con tecnología GPT-4o!)
<br>[Instalar](https://docs.ddgpt.com/#-installation) /
[Léame](https://docs.ddgpt.com/#readme) /
[Conversar](https://github.ddgpt.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.googlegpt.io/images/icons/googlegpt/white/icon32.png?8652a6e"><img width=21 src="https://assets.googlegpt.io/images/icons/googlegpt/black/icon32.png?8652a6e"></picture> [GoogleGPT](https://googlegpt.io) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://assets.googlegpt.io/images/badges/awesome/badge.svg?699c63d" style="margin:0 0 -2px 5px"></a>

> Agrega respuestas de IA a Google Search (¡con tecnología Google Gemma + GPT-4o!)
<br>[Instalar](https://greasyfork.googlegpt.io) /
[Léame](https://docs.googlegpt.io/#readme) /
[Conversar](https://github.googlegpt.io/discussions)

### <img width=23 src="https://assets.chatgptjs.org/images/icons/platforms/thunderbird/icon32.png?v=e638eac"> [ThunderAI](https://micz.it/thunderdbird-addon-thunderai/) &nbsp;<a href="https://addons.thunderbird.net/thunderbird/addon/thunderai/reviews" target="_blank" rel="noopener"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/badges/5-star/blue-stars.png?v=e638eac"><img width=92 alt="[Clasificado con 5 estrellas]" src="https://assets.chatgptjs.org/images/badges/5-star/yellow-stars-in-white-pill.png?v=e638eac"></picture></a>

> Utilice ChatGPT en Thunderbird para mejorar sus correos electrónicos, ¡incluso con una cuenta gratuita!
<br>[Instalar](https://addons.thunderbird.net/thunderbird/addon/thunderai/) /
[Léame](https://micz.it/thunderdbird-addon-thunderai/) /
[Apoyo](https://github.com/micz/ThunderAI/issues)

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
¡Si ha creado algo con chatgpt.js que desea compartir, envíe un correo electrónico a <a href="mailto:showcase@chatgptjs.org">showcase@chatgptjs.org</a> o simplemente abra una <a href="https://github.com/KudoAI/chatgpt.js/pulls" target="_blank" rel="noopener">solicitud de extracción</a>!
</p>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="contributors">

## 🧠 Colaboradores

</div>

Esta biblioteca existe gracias al código, las traducciones, los problemas y las ideas de los siguientes colaboradores:

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

**chatgpt.js** está financiado en parte por:

<a href="https://microsoft.com?utm_source=github&utm_medium=readme&utm_content=partner-logo&utm_campaign=chatgpt.js">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/logos/partners/microsoft/white.png?v=e638eac">
        <img width=255 src="https://assets.chatgptjs.org/images/logos/partners/microsoft/black.png?v=e638eac">
    </picture>
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.burncloud.com/893.html">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/logos/partners/burncloud/with-description/white.png?v=610795b">
        <img width=285 src="https://assets.chatgptjs.org/images/logos/partners/burncloud/with-description/black.png?v=610795b">
    </picture>
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://www.burncloud.com/893.html">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/logos/partners/burncloud/with-description/white.png?v=610795b">
        <img width=285 src="https://assets.chatgptjs.org/images/logos/partners/burncloud/with-description/black.png?v=610795b">
    </picture>
</a>

</div>

<br>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div align="center">

**[Lanzamientos](https://github.com/KudoAI/chatgpt.js/releases)** /
[Guía del usuario](https://github.com/KudoAI/chatgpt.js/blob/v3.7.1/docs/USERGUIDE.md) /
[Conversar](https://github.com/KudoAI/chatgpt.js/discussions) /
<a href="#top">Volver arriba ↑</a>

</div>
