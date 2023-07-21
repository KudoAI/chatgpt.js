<div id="repo-cover" align="center">

<div align="center">

###### Español | <a href="../..#readme">English</a> | <a href="../zh-cn#readme">简体中文</a> | <a href="../zh-tw#readme">繁體中文</a> | <a href="../ja#readme">日本</a> | <a href="../ko#readme">한국인</a> | <a href="../hi#readme">हिंदी</a> | <a href="../de#readme">Deutsch</a> | <a href="../fr#readme">Français</a> | <a href="../it#readme">Italiano</a> | <a href="../nl#readme">Nederlands</a> | <a href="../pt#readme">Português</a> | <a href="../vi#readme">Việt</a>

</div>

<br>

<h3>

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
    <img width=700 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
</picture>
<br><br>

🤖 Una poderosa biblioteca de JavaScript del lado del cliente para ChatGPT
<br><br>

</div>
</h3>

<div align="center">

[![](https://img.shields.io/badge/Licencia-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/kudoai/chatgpt.js?label=Confirmaciones&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/kudoai/chatgpt.js/commits/main)
![](https://img.shields.io/github/size/kudoai/chatgpt.js/dist/chatgpt-2.0.1.min.js?label=Tamaño+Minificado&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge)
[![](https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=Calidad+del+Código&logo=codefactor&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.codefactor.io/repository/github/kudoai/chatgpt.js)
[![](https://img.shields.io/badge/Mencionado_en-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/sindresorhus/awesome-chatgpt#javascript)
[![](https://img.shields.io/badge/Presentado_en-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.producthunt.com/posts/chatgpt-js)
![](https://img.shields.io/jsdelivr/gh/hw/kudoai/chatgpt.js?label=jsDelivr+Golpes&logo=jsdelivr&logoColor=white&labelColor=464646&color=gold&style=for-the-badge)

</div>

## Acerca de

**chatgpt.js** es una poderosa biblioteca de JavaScript que permite una interacción súper fácil con ChatGPT DOM.

- Rico en funciones
- Orientado a objetos
- Fácil de usar
- Ligero (pero con un rendimiento óptimo)

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## ⚡ Importación de la biblioteca

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
// @require https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@b9b8ac236a8795b56691bf3dc10a8a1a928d2e8f/dist/chatgpt-2.0.1.min.js
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

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 💻 Uso

**chatgpt.js** fue escrito con ultra flexibilidad en mente.

Por ejemplo:

```js
chatgpt.getLastResponse();
chatgpt.getLastReply();
chatgpt.response.getLast();
chatgpt.get('reply', 'last');
```

Cada llamada obtiene igualmente la última respuesta. Si crees que funciona, probablemente lo hará... ¡así que escríbelo! (¿Quién tiene tiempo para los documentos?)

Si no fue así, simplemente envíe un [problema](https://github.com/kudoai/chatgpt.js/issues) o [PR](https://github.com/kudoai/chatgpt.js/pulls) y se integrará, pan comido!

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 🤖 Hecho con chatgpt.js

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [Borrar Historial de ChatGPT](https://chatgptevo.com/autoclear) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

Borre automáticamente su historial de consultas de ChatGPT para obtener la máxima privacidad.
<br>[Instalar](https://github.com/adamlui/autoclear-chatgpt-history#installation) /
[Léame](https://github.com/adamlui/autoclear-chatgpt-history#readme) /
[Conversar](https://github.com/adamlui/autoclear-chatgpt-history/discussions)

### <img width=16 src="https://i.imgur.com/1yjmK3W.png"> [Automatic ChatGPT DAN](https://github.com/madkarmaa/automatic-chatgpt-dan)

Envía automáticamente avisos de DAN a ChatGPT.
<br>[Instalar](https://github.com/madkarmaa/automatic-chatgpt-dan#%EF%B8%8F-installation) /
[Léame](https://github.com/madkarmaa/automatic-chatgpt-dan#readme) /
[Conversar](https://github.com/madkarmaa/automatic-chatgpt-dan/issues)

### <img src="https://media.bravegpt.com/images/bravegpt-icon48.png" width=18> [BraveGPT](https://bravegpt.com) <a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Muestre las respuestas de ChatGPT en la barra lateral de Brave Search (¡con tecnología de GPT-4!)
<br>[Instalar](https://github.bravegpt.com/#installation) /
[Léame](https://github.bravegpt.com/#readme) /
[Conversar](https://github.bravegpt.com/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT Auto-Continuar ⏩](https://chatgptevo.com/autocontinue/github) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -3px 3px"></a>

Continúa generando automáticamente múltiples respuestas de ChatGPT.<br>
[Instalar](https://github.com/adamlui/chatgpt-auto-continue#installation) /
[Léame](https://github.com/adamlui/chatgpt-auto-continue#readme) /
[Conversar](https://chatgptevo.com/autocontinue/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ChatGPT Actualización Automática ↻](https://chatgptevo.com/autorefresh) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

Mantiene las sesiones de ChatGPT actualizadas para eliminar errores de red + verificaciones de Cloudflare.
<br>[Instalar](https://github.com/adamlui/chatgpt-auto-refresh#installation) /
[Léame](https://github.com/adamlui/chatgpt-auto-refresh#readme) /
[Conversar](https://github.com/adamlui/chatgpt-auto-refresh/discussions)

### <img src="https://media.duckduckgpt.com/images/ddgpt-icon48.png" width=17> [DuckDuckGPT](https://duckduckgpt.com) <a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Muestre las respuestas de ChatGPT en la barra lateral de DuckDuckGo (¡con tecnología de GPT-4!)
<br>[Instalar](https://github.duckduckgpt.com/#installation) /
[Léame](https://github.duckduckgpt.com/#readme) /
[Conversar](https://github.duckduckgpt.com/discussions)

<br>

<a href="https://chatgptinfinity.com" target="_blank"><img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-infinity/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png"></a>

<br>

<a href="https://chatgptwidescreen.com" target="_blank"><img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png"></a>

<br>

¡Si ha creado algo con chatgpt.js que desea compartir, envíe un correo electrónico a [showcase@chatgptjs.org](mailto:showcase@chatgptjs.org) o simplemente abra una [solicitud de extracción](https://github.com/kudoai/chatgpt.js/pulls)!

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 🧠 Colaboradores

Esta biblioteca existe gracias al código, las traducciones, los problemas y las ideas de los siguientes colaboradores:

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

<br>_¡Considera darle a este repositorio un ⭐ si te ayudó!_

</div>

#

<a href="https://github.com/kudoai/chatgpt.js/tree/main/dist">**Lanzamientos**</a> /
<a href="https://github.com/kudoai/chatgpt.js/discussions">Conversar</a> /
<a href="#">Volver arriba ↑</a>
