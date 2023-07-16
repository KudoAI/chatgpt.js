<div id="repo-cover" align="center">

<div align="center">

###### Français | <a href="../..#readme">English</a> | <a href="../zh-cn#readme">简体中文</a> | <a href="../ja#readme">日本</a> | <a href="../ko#readme">한국인</a> | <a href="../hi#readme">हिंदी</a> | <a href="../de#readme">Deutsch</a> | <a href="../es#readme">Español</a> | <a href="../it#readme">Italiano</a> | <a href="../pt#readme">Português</a>

</div>

<br>

<h3>

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
    <img width=700 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
</picture>
<br><br>

🤖 Une puissante bibliothèque JavaScript côté client pour ChatGPT
<br><br>

</div>
</h3>

<div align="center">

[![](https://img.shields.io/badge/Licence-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/kudoai/chatgpt.js?label=Commits&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/kudoai/chatgpt.js/commits/main)
![](https://img.shields.io/github/size/kudoai/chatgpt.js/dist/chatgpt-2.0.1.min.js?label=Taille+Minimisée&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge)
[![](https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=Qualité+du+Code&logo=codefactor&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.codefactor.io/repository/github/kudoai/chatgpt.js)
[![](https://img.shields.io/badge/Mentionné_dans-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/sindresorhus/awesome-chatgpt#javascript)
[![](https://img.shields.io/badge/Présenté_sur-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.producthunt.com/posts/chatgpt-js)
![](https://img.shields.io/jsdelivr/gh/hw/kudoai/chatgpt.js?label=jsDelivr+Demandes&logo=jsdelivr&logoColor=white&labelColor=464646&color=gold&style=for-the-badge)

</div>

## À propos

**chatgpt.js** est une puissante bibliothèque JavaScript qui permet une interaction super facile avec le DOM ChatGPT.

- Riche en fonctionnalités
- Orienté objet
- Facile à utiliser
- Léger (mais performant de manière optimale)

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## ⚡ Importation de la bibliothèque

### ES6:

```js
(async () => {
  await import('https://code.chatgptjs.org/chatgpt-latest.min.js');
  // Votre code ici...
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
    yourCode(); // exécute votre code
  }
};
xhr.send();

function yourCode() {
  // Votre code ici...
}
```

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://i.imgur.com/SATGr8j.png"></picture><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://i.imgur.com/wcCg3al.png"> Greasemonkey:

> **Remarque** _Pour utiliser un modèle de démarrage: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/kudoai/chatgpt.js-greasemonkey-starter)_

Les référentiels de scripts utilisateur comme Greasy Fork maintiennent une liste blanche de CDN pré-approuvés (comme les références spécifiques à la validation de `cdn.jsdelivr.net`) de sorte que l'URL d'importation est considérablement plus longue pour préserver la publiabilité sur ces sites:

```js
...
// @require https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@b9b8ac236a8795b56691bf3dc10a8a1a928d2e8f/dist/chatgpt-2.0.1.min.js
// ==/UserScript==

// Votre code ici...
```

Si vous ne prévoyez pas de publier sur ces dépôts, le plus simple `https://code.chatgptjs.org/chatgpt-latest.min.js` peut être utilisé à la place pour importer la dernière version minifiée.

### <img style="margin: 0 2px -1px 0" height=16 src="https://www.google.com/chrome/static/images/favicons/apple-icon-60x60.png"> Chrome:

> **Remarque** _Pour utiliser un modèle de démarrage: [kudoai/chatgpt.js-chrome-starter](https://github.com/kudoai/chatgpt.js-chrome-starter)_

Étant donné que Google va [éventuellement supprimer](https://developer.chrome.com/docs/extensions/migrating/mv2-sunset/) Manifest V2, le code distant ne sera plus autorisé, donc l'idéal est d'importer localement chatgpt.js:

1. Enregistrez https://raw.githubusercontent.com/kudoai/chatgpt.js/main/chatgpt.js dans un sous-répertoire (`lib` dans cet exemple)

2. Ajouter l'instruction d'exportation ES6 à la fin de `lib/chatgpt.js`
```js
...
export { chatgpt }
```

3. Dans le projet (V3) `manifest.json`, ajoutez `lib/chatgpt.js` en tant que ressource accessible sur le Web
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.js"]
    }],
```

4. Dans les scripts qui ont besoin de `chatgpt.js` (avant-plan/arrière-plan), importez-le comme suit:
```js
(async () => {
  const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'));
  // Votre code ici...
})();
```

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 💻 Utilisation

**chatgpt.js** a été écrit avec une extrême flexibilité à l'esprit.

Par exemple:

```js
chatgpt.getLastResponse();
chatgpt.getLastReply();
chatgpt.response.getLast();
chatgpt.get('reply', 'last');
```

Chaque appel récupère également la dernière réponse. Si vous pensez que cela fonctionne, cela fonctionnera probablement... alors tapez-le simplement!

Si ce n'est pas le cas, soumettez simplement un [problème](https://github.com/kudoai/chatgpt.js/issues) ou [PR](https://github.com/kudoai/chatgpt.js/pulls) et il sera intégré, très facile!

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 🤖 Réalisé avec chatgpt.js

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [Effacer l'historique de ChatGPT](https://chatgptevo.com/autoclear) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

Effacez automatiquement l'historique de vos requêtes ChatGPT pour une confidentialité maximale.
<br>[Installer](https://github.com/adamlui/autoclear-chatgpt-history#installation) /
[Lisez-moi](https://github.com/adamlui/autoclear-chatgpt-history#readme) /
[Discuter](https://github.com/adamlui/autoclear-chatgpt-history/discussions)

### <img width=16 src="https://i.imgur.com/1yjmK3W.png"> [Automatic ChatGPT DAN](https://github.com/madkarmaa/automatic-chatgpt-dan)

Envoyez automatiquement des invites DAN à ChatGPT.
<br>[Installer](https://github.com/madkarmaa/automatic-chatgpt-dan#%EF%B8%8F-installation) /
[Lisez-moi](https://github.com/madkarmaa/automatic-chatgpt-dan#readme) /
[Discuter](https://github.com/madkarmaa/automatic-chatgpt-dan/issues)

### <img src="https://media.bravegpt.com/images/bravegpt-icon48.png" width=18> [BraveGPT](https://bravegpt.com) <a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Affichez les réponses ChatGPT dans la barre latérale de Brave Search (propulsé par GPT-4 !)
<br>[Installer](https://github.bravegpt.com/#installation) /
[Lisez-moi](https://github.bravegpt.com/#readme) /
[Discuter](https://github.bravegpt.com/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT Auto-Continuer ⏩](https://chatgptevo.com/autocontinue/github) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -3px 3px"></a>

Continuez automatiquement à générer plusieurs réponses ChatGPT.<br>
[Installer](https://github.com/adamlui/chatgpt-auto-continue#installation) /
[Lisez-moi](https://github.com/adamlui/chatgpt-auto-continue#readme) /
[Discuter](https://chatgptevo.com/autocontinue/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ChatGPT Actualisation Automatique ↻](https://chatgptevo.com/autorefresh) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

Maintient les sessions ChatGPT à jour pour éliminer les erreurs de réseau + vérifications Cloudflare.
<br>[Installer](https://github.com/adamlui/chatgpt-auto-refresh#installation) /
[Lisez-moi](https://github.com/adamlui/chatgpt-auto-refresh#readme) /
[Discuter](https://github.com/adamlui/chatgpt-auto-refresh/discussions)

### <img src="https://media.duckduckgpt.com/images/ddgpt-icon48.png" width=17> [DuckDuckGPT](https://duckduckgpt.com) <a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Affichez les réponses ChatGPT dans la barre latérale DuckDuckGo (propulsé par GPT-4 !)
<br>[Installer](https://github.duckduckgpt.com/#installation) /
[Lisez-moi](https://github.duckduckgpt.com/#readme) /
[Discuter](https://github.duckduckgpt.com/discussions)

<br>

<a href="https://chatgptinfinity.com" target="_blank"><img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-infinity/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png"></a>

<br>

<a href="https://chatgptwidescreen.com" target="_blank"><img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png"></a>

<br>

Si vous avez créé quelque chose avec chatgpt.js que vous souhaitez partager, envoyez un e-mail à [showcase@chatgptjs.org](mailto:showcase@chatgptjs.org) ou ouvrez simplement une [pull request](https://github.com/kudoai/chatgpt.js/pulls)!

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 🧠 Contributeurs

Cette bibliothèque existe grâce au code, aux traductions, aux problèmes et aux idées des contributeurs suivants:

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

<br>_Pensez à donner à ce dépôt un ⭐ s'il vous a aidé!_

</div>

#

<a href="https://github.com/kudoai/chatgpt.js/tree/main/dist">**Communiqués**</a> /
<a href="https://github.com/kudoai/chatgpt.js/discussions">Discuter</a> /
<a href="#">Retour au sommet ↑</a>
