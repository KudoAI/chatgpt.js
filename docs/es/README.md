<div id="repo-cover" align="center">

<div align="center">

###### <a href="https://github.com/kudoai/chatgpt.js/tree/main/docs"><img height=15 style="margin: 0 3px -2px" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/0fc3060273fcff77d3e2ff968d5c74acdab62beb/media/images/icons/earth-americas-icon32.svg"></a> Español | <a href="../..#readme">English</a> | <a href="../zh-cn#readme">简体中文</a> | <a href="../zh-tw#readme">繁體中文</a> | <a href="../ja#readme">日本</a> | <a href="../ko#readme">한국인</a> | <a href="../hi#readme">हिंदी</a> | <a href="../de#readme">Deutsch</a> | <a href="../fr#readme">Français</a> | <a href="../it#readme">Italiano</a> | <a href="../nl#readme">Nederlands</a> | <a href="../pt#readme">Português</a> | <a href="../vi#readme">Việt</a>

</div>

<br>

<h3>

<picture>
    <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
    <img width=700 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
</picture>
<br><br>

🤖 Una poderosa biblioteca de JavaScript del lado del cliente para ChatGPT
<br><br>

</div>
</h3>

<div id="shields" align="center">

[![](https://img.shields.io/badge/Licencia-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/kudoai/chatgpt.js?label=Confirmaciones&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/kudoai/chatgpt.js/commits/main)
![](https://img.shields.io/github/size/kudoai/chatgpt.js/dist/chatgpt-2.3.2.min.js?label=Tamaño+Minificado&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge)
[![](https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=Calidad+del+Código&logo=codefactor&logoColor=white&labelColor=464646&color=29c3c5&style=for-the-badge)](https://www.codefactor.io/repository/github/kudoai/chatgpt.js)
[![](https://img.shields.io/badge/Mencionado_en-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/sindresorhus/awesome-chatgpt#javascript)
[![](https://img.shields.io/badge/Presentado_en-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.producthunt.com/posts/chatgpt-js)
[![](https://img.shields.io/badge/Selección_Oficial-Artizen_Temporada_3-1acc6c?logo=image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc2NCcgaGVpZ2h0PSc2NCcgZmlsbD0nI2ZmZicgdmlld0JveD0nMCAwIDE2MCAxMjgnPjxwYXRoIGQ9J00xNTkuODk2IDExOC45ODRDMTU5Ljg5NiAxMTYuODgxIDE1OC4wODggMTE1LjA3OCAxNTUuOTc5IDExNS4wNzhDMTQ0LjAyOCAxMTUuMDc4IDEzMi4xNzggMTEzLjU3NiAxMjEuMDMxIDEwOS43NzFDMTE1LjEwNiAxMDcuNzY5IDEwOS4yODEgMTA0Ljc2NSAxMDQuMzYgMTAwLjc1OUMxMTQuNzA0IDkxLjg0NzUgMTIzLjU0MSA4MS4zMzM1IDEyOS43NjggNjkuMTE3MkMxMzIuODgxIDYyLjkwOSAxMzUuMzkyIDU1Ljg5OTcgMTM0LjQ4OCA0OC43OTAyQzEzMy4wODIgMzguNDc2NSAxMjQuNTQ2IDMyLjQ2ODUgMTE0LjUwMyAzMS44Njc3Qzk4LjIzNCAzMC41NjYgODQuMDczOSAzOS45Nzg1IDc3LjE0NDQgNTQuMzk3N0M3My43Mjk5IDYxLjQwNyA3Mi4yMjM1IDY5LjMxNzUgNzIuNzI1NyA3Ny4xMjc5QzczLjEyNzQgODUuNjM5MiA3Ni4xNDAyIDkzLjY0OTkgODAuODYwMiAxMDAuNDU5QzY4LjcwODYgMTA4LjA2OSA1NC44NDk4IDExMi44NzUgNDAuNjg5NyAxMTIuOTc2QzM3LjE3NDcgMTEyLjk3NiAzMy41NTk0IDExMi43NzUgMzAuMTQ0OSAxMTIuMDc0QzI2LjkzMTIgMTExLjM3MyAyMy43MTc2IDExMC4wNzIgMjEuNDA3OCAxMDcuNzY5QzE2LjY4NzcgMTAyLjg2MiAxNy4zOTA3IDk1LjY1MjUgMTguOTk3NiA4OS4xNDM5QzIyLjkxNDIgNzUuMTI1MiAzMS43NTE3IDYyLjYwODYgNDEuNTkzNSA1MS44OTQzQzUxLjAzMzYgNDEuNzgwOSA2NC43OTIgMzAuNDY1OCA3OC45NTIxIDI2Ljk2MTJDODMuMzcwOSAyNS44NTk3IDg2LjU4NDUgMjIuMTU0OCA4Ny4yODc1IDE3LjY0ODhDODcuNDg4NCAxNS45NDY1IDg3LjY4OTIgMTQuMjQ0MiA4Ny42ODkyIDEyLjQ0MTlDODcuNjg5MiAxMC42Mzk1IDg3LjM4NzkgNy42MzU0NiA4Ny4wODY2IDUuNTMyNjZDODYuNDg0MSAyLjEyODEzIDgzLjM3MDkgLTAuMjc1MDY2IDc5Ljg1NTkgMC4wMjUzMzNDNzcuMDQ0IDAuMjI1NiA3NC4yMzIxIDAuNzI2MjY2IDcxLjUyMDYgMS40MjcyQzU0LjQ0ODEgNi4wMzMzMyA0MC4wODcxIDE4LjA0OTMgMjguNzM4OSAzMS4wNjY2QzE0LjM3NzkgNDcuNjg4NyAwLjgyMDM3MyA3MS4yMiAwLjAxNjk2MjMgOTMuNjQ5OUMtMC4zODQ3NDMgMTA4LjI2OSA2LjM0MzgyIDEyMC43ODYgMjAuNzA0OCAxMjUuNTkyQzI1LjcyNjEgMTI3LjI5NSAzMS4wNDg3IDEyNy44OTUgMzYuMjcwOSAxMjcuOTk2QzU1LjY1MzIgMTI4LjE5NiA3NC40MzI5IDEyMS41ODcgOTAuNTAxMSAxMTEuMTczQzkzLjgxNTIgMTEzLjk3NyA5Ny41MzEgMTE2LjM4IDEwMS40NDggMTE4LjI4M0MxMTcuMzE1IDEyNi4zOTMgMTM1LjM5MiAxMjcuOTk2IDE1Mi44NjYgMTI3Ljc5NUMxNTMuNzcgMTI3Ljc5NSAxNTQuODc0IDEyNy43OTUgMTU1Ljk3OSAxMjcuNzk1QzE1OC4xODkgMTI3Ljc5NSAxNjAuMDk3IDEyNS45OTMgMTU5Ljk5NiAxMjMuNzlWMTE4Ljk4NEgxNTkuODk2Wk05Mi4yMDg0IDgyLjEzNDZDODkuMzk2NSA2OS45MTgzIDk1LjYyMjkgNTUuMDk4NiAxMDguMTc2IDUxLjQ5MzhDMTEwLjI4NSA1MC44OTMgMTEyLjU5NSA1MC41OTI2IDExNC44MDQgNTAuNjkyN0MxMTUuMzA2IDUwLjY5MjcgMTE1LjgwOSA1MC43OTI5IDExNi4yMSA1MC44OTNDMTE2LjYxMiA1MC45OTMxIDExNi44MTMgNTEuMDkzMyAxMTcuMTE0IDUxLjM5MzdDMTE3LjgxNyA1Mi4wOTQ2IDExNy41MTYgNTMuNzk2OSAxMTcuNDE1IDU1LjA5ODZDMTE2LjkxMyA1OC41MDMxIDExNS41MDcgNjIuMzA4MiAxMTMuOCA2NS41MTI1QzEwOS4wOCA3NC4yMjQgMTAyLjU1MiA4Mi41MzUxIDk0LjkxOTkgODkuNTQ0NEM5My43MTQ4IDg3LjI0MTQgOTIuODExIDg0LjczOCA5Mi4yMDg0IDgyLjEzNDZaJy8+PC9zdmc+&labelColor=464646&style=for-the-badge)](https://www.artizen.fund/)
[![](https://img.shields.io/badge/Incubado_por-100.builders-9146ff?logo=gamejolt&logoColor=white&labelColor=464646&style=for-the-badge)](https://100.builders)
![](https://img.shields.io/jsdelivr/gh/hm/kudoai/chatgpt.js?label=jsDelivr+Golpes&logo=jsdelivr&logoColor=white&labelColor=464646&color=gold&style=for-the-badge)

</div>

<div id="intro">

## Acerca de

</div>

<span style="color: white">chatgpt.js</span> es una <span style="color: white">poderosa</span> biblioteca de JavaScript que permite una interacción <span style="color: white">súper fácil</span> con ChatGPT DOM.

- Rico en funciones
- Orientado a objetos
- Fácil de usar
- Ligero (pero con un rendimiento óptimo)

<img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/docs/assets/separators/aqua.png">

<div id="importing">

## ⚡ Importación de la biblioteca

</div>

### ES6:

```js
(async () => {
    await import('https://code.chatgptjs.org/chatgpt-latest.min.js');
    // Tu código aquí...
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
        yourCode(); // ejecuta tu código
    }
};
xhr.send();

function yourCode() {
    // Tu código aquí...
}
```

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/starters/media/images/icons/tampermonkey-icon28.png"></picture><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/starters/media/images/icons/violentmonkey-icon100.png"> Greasemonkey:

> **Nota** _Para utilizar una plantilla de inicio: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/kudoai/chatgpt.js-greasemonkey-starter)_

Los repositorios de scripts de usuario como Greasy Fork mantienen una lista blanca de CDN preaprobados (como referencias específicas de confirmación de `cdn.jsdelivr.net`), por lo que la URL de importación es sustancialmente más larga para preservar la capacidad de publicación en estos sitios:

```js
...
// @require https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@b3192595ebef3c59235eaa238a4a62cf4dd7b6bf/dist/chatgpt-2.3.2.min.js
// ==/UserScript==

// Tu código aquí...
```

Si no planea publicar en estos repositorios, puede usar `https://code.chatgptjs.org/chatgpt-latest.min.js` más simple para importar la última versión minimizada.

### <img style="margin: 0 2px -1px 0" height=16 src="https://www.google.com/chrome/static/images/favicons/apple-icon-60x60.png"> Chrome:

> **Nota** _Para utilizar una plantilla de inicio: [kudoai/chatgpt.js-chrome-starter](https://github.com/kudoai/chatgpt.js-chrome-starter)_

Dado que Google [eventualmente eliminará](https://developer.chrome.com/docs/extensions/migrating/mv2-sunset/) Manifest V2, ya no se permitirá el código remoto, por lo que es ideal importar chatgpt.js localmente:

1. Guarde https://raw.githubusercontent.com/kudoai/chatgpt.js/main/chatgpt.js en un subdirectorio (`lib` en este ejemplo)

2. Agregue la declaración de exportación ES6 al final de `lib/chatgpt.js`
```js
...
export { chatgpt }
```

3. En el `manifest.json` del proyecto (V3), agregue `lib/chatgpt.js` como un recurso accesible desde la web
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.js"]
    }],
```

4. En los scripts que necesitan `chatgpt.js` (primer plano/fondo por igual), impórtelo así:
```js
(async () => {
    const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'));
    // Tu código aquí...
})();
```

<img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/docs/assets/separators/aqua.png">

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

Si no fue así, consulte la [guía del usuario](https://github.com/kudoai/chatgpt.js/blob/main/docs/USERGUIDE.md) extendida, o simplemente envíe un [problema] (https:/ /github.com/kudoai/chatgpt.js/issues) o [PR](https://github.com/kudoai/chatgpt.js/pulls) y se integrará, ¡pan comido!

<img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/docs/assets/separators/aqua.png">

<div id="showcase">

## 🤖 Hecho con chatgpt.js

</div>

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [Borrar Historial de ChatGPT](https://autoclearchatgpt.com) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

Borre automáticamente su historial de consultas de ChatGPT para obtener la máxima privacidad.
<br>[Instalar](https://github.com/adamlui/autoclear-chatgpt-history#installation) /
[Léame](https://github.com/adamlui/autoclear-chatgpt-history#readme) /
[Conversar](https://autoclearchatgpt.com/discuss)

### <img width=16 src="https://i.imgur.com/1yjmK3W.png"> [Automatic ChatGPT DAN](https://github.com/madkarmaa/automatic-chatgpt-dan)

Envía automáticamente avisos de DAN a ChatGPT.
<br>[Instalar](https://github.com/madkarmaa/automatic-chatgpt-dan#%EF%B8%8F-installation) /
[Léame](https://github.com/madkarmaa/automatic-chatgpt-dan#readme) /
[Conversar](https://github.com/madkarmaa/automatic-chatgpt-dan/issues)

### <img src="https://media.bravegpt.com/images/bravegpt-icon48.png" width=18> [BraveGPT](https://bravegpt.com) <a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Muestre las respuestas de ChatGPT en la barra lateral de Brave Search (¡con tecnología de GPT-4!)
<br>[Instalar](https://github.bravegpt.com/#installation) /
[Léame](https://github.bravegpt.com/#readme) /
[Conversar](https://github.bravegpt.com/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT Auto-Continuar ⏩](https://chatgptautocontinue.com) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -3px 3px"></a>

Continúa generando automáticamente múltiples respuestas de ChatGPT.<br>
[Instalar](https://github.com/adamlui/chatgpt-auto-continue#installation) /
[Léame](https://github.com/adamlui/chatgpt-auto-continue#readme) /
[Conversar](https://chatgptautocontinue.com/discuss)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ChatGPT Actualización Automática ↻](https://chatgptautorefresh.com) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

Mantiene las sesiones de ChatGPT actualizadas para eliminar errores de red + verificaciones de Cloudflare.
<br>[Instalar](https://github.com/adamlui/chatgpt-auto-refresh#installation) /
[Léame](https://github.com/adamlui/chatgpt-auto-refresh#readme) /
[Conversar](https://chatgptautorefresh.com/discuss)

### <img src="https://media.duckduckgpt.com/images/ddgpt-icon48.png" width=17> [DuckDuckGPT](https://duckduckgpt.com) <a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Muestre las respuestas de ChatGPT en la barra lateral de DuckDuckGo (¡con tecnología de GPT-4!)
<br>[Instalar](https://github.duckduckgpt.com/#installation) /
[Léame](https://github.duckduckgpt.com/#readme) /
[Conversar](https://github.duckduckgpt.com/discussions)

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
¡Si ha creado algo con chatgpt.js que desea compartir, envíe un correo electrónico a <a href="mailto:showcase@chatgptjs.org">showcase@chatgptjs.org</a> o simplemente abra una <a href="https://github.com/kudoai/chatgpt.js/pulls" target="_blank" rel="noopener">solicitud de extracción</a>!
</p>

<img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/docs/assets/separators/aqua.png">

<div id="contributors">

## 🧠 Colaboradores

</div>

Esta biblioteca existe gracias al código, las traducciones, los problemas y las ideas de los siguientes colaboradores:

[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/10906554?first-contrib=2023.03.15&h=41&w=41&mask=circle&maxage=7d '@adamlui')](https://github.com/adamlui)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/71683364?first-contrib=2023.03.16-get-functions&h=41&w=41&mask=circle&maxage=7d '@mefengl')](https://github.com/mefengl)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/131989355?first-contrib=2023.04.30-doc-translations&h=41&w=41&mask=circle&maxage=7d '@Zin6969')](https://github.com/Zin6969)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/30551844?first-contrib=2023.05.02-getlastresponse-bug-report&h=41&w=41&mask=circle&maxage=7d '@madruga8')](https://github.com/madruga8)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/54934866?first-contrib=2023.05.01-clearchats-discard-fix&h=41&w=41&mask=circle&maxage=7d '@XiaoYingYo')](https://github.com/XiaoYingYo)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/129722778?first-contrib=2023.05.24-css-readability&h=41&w=41&mask=circle&maxage=7d '@AliAlSarre')](https://github.com/AliAlSarre)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/100418457?first-contrib=2023.06.02-send-function-bug-report&h=41&w=41&mask=circle&maxage=7d '@madkarmaa')](https://github.com/madkarmaa)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/1170326?first-contrib=2023.06.10-html-parser-idea&h=41&w=41&mask=circle&maxage=7d '@wamoyo')](https://github.com/wamoyo)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/33952?first-contrib=2023.06.10-html-parser-idea&h=41&w=41&mask=circle&maxage=7d '@meiraleal')](https://github.com/meiraleal)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/22633385?first-contrib=2023.07.11-fix-ja-doc-md&h=41&w=41&mask=circle&maxage=7d '@eltociear')](https://github.com/eltociear)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/72805486?first-contrib=2023.07.14-enhance-ko-docs&h=41&w=41&mask=circle&maxage=7d '@Rojojun')](https://github.com/Rojojun)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/62183023?first-contrib=2023.07.24-fix-hi-doc&h=41&w=41&mask=circle&maxage=7d '@iamnishantgaharwar')](https://github.com/iamnishantgaharwar)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/629429?first-contrib=2023.07.31-homepage-starry-bg&h=41&w=41&mask=circle&maxage=7d '@hakimel')](https://github.com/hakimel)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/73983677?first-contrib=2023.08.23-fix-readme-typos&h=41&w=41&mask=circle&maxage=7d '@omahs')](https://github.com/omahs)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/in/29110&h=41&w=41&mask=circle&maxage=7d 'Dependabot')](https://github.com/dependabot)
[![](https://images.weserv.nl/?url=https://i.imgur.com/tNyIPmG.jpg?h=41&w=41&mask=circle&maxage=7d 'ChatGPT')](https://chat.openai.com)
[![](https://images.weserv.nl/?url=https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/icons/poe-icon128.svg?first-contrib=2023.07.27-getandshowreply-method&h=41&w=41&mask=circle&maxage=7d 'Poe')](https://poe.com)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/31427850?h=41&w=41&mask=circle&maxage=7d "@ImgBotApp")](https://github.com/ImgBotApp)

<img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/docs/assets/separators/aqua.png">

<div id="partners">

## 🤝 Socios

</div>

**chatgpt.js** es parte de [100.builders](https://100.builders), una incubadora de IA financiada por:

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

<br>_¡Considera darle a este repositorio un ⭐ si te ayudó!_

</div>

#

<div align="center">

**[Lanzamientos](https://github.com/kudoai/chatgpt.js/tree/main/dist)** /
[Guía del usuario](https://github.com/kudoai/chatgpt.js/blob/main/docs/USERGUIDE.md) /
[Conversar](https://github.com/kudoai/chatgpt.js/discussions) /
<a href="#">Volver arriba ↑</a>

</div>
