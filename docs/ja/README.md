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
        日本 |
        <a href="../..#readme">English</a> |
        <a href="../zh-cn#readme">简体中文</a> |
        <a href="../zh-tw#readme">繁體中文</a> |
        <a href="../ko#readme">한국인</a> |
        <a href="../hi#readme">हिंदी</a> |
        <a href="../ne#readme">नेपाली</a> |
        <a href="../vi#readme">Việt</a>
    </h6>
</div>

<br>

<a href="https://chatgpt.js.org/?utm_source=chatgpt.js-github&utm_medium=referral&utm_content=cover-logo">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/logos/chatgpt.js/with-reflection/darkmode/logo-6014x1334.png?v=8169c77">
        <img width=800 src="https://assets.chatgptjs.org/images/logos/chatgpt.js/with-reflection/lightmode/logo-6014x1334.png?v=8169c77">
    </picture>
</a>

</div>

<br>

<div id="shields" align="center">

<a href="LICENSE.md" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9-MIT-f99b27.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@kudoai/chatgpt.js/v/latest" target="_blank" rel="noopener">
    <img src="https://img.shields.io/npm/v/%40kudoai%2Fchatgpt.js?logo=npm&logoColor=white&labelColor=464646&color=32fcee&style=for-the-badge&label=%E6%9C%80%E6%96%B0%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"></a>
<a href="https://www.codefactor.io/repository/github/kudoai/chatgpt.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E5%93%81%E8%B3%AA&logo=codefactor&logoColor=white&labelColor=464646&color=a0fc55&style=for-the-badge"></a>
<a href="https://sonarcloud.io/component_measures?metric=vulnerabilities&id=kudoai_chatgpt.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dkudoai_chatgpt.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonar&logoColor=white&labelColor=464646&label=%E8%84%86%E5%BC%B1%E6%80%A7&color=ffef00"></a>
<a href="https://github.com/sindresorhus/awesome-chatgpt#javascript" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/%E3%81%A7%E8%A8%80%E5%8F%8A-Awesome-ff69b4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="#">
    <img src="https://img.shields.io/badge/jsDelivr_%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88-2,000,000+-2bbbd8.svg?logo=jsdelivr&logoColor=white&labelColor=464646&style=for-the-badge"></a>

</div>

<br>

<hr>

## ⚡ インストール

### 図書館

#### <a href="#-nodejs"><img height=14 width="auto" src="https://cdn.jsdelivr.net/gh//adamlui/js-utils@dbdea4b/assets/images/icons/runtimes/node.js/icon25x28.png"></a> Node.js:

プロジェクトのルートディレクトリから：

```bash
npm install @kudoai/chatgpt.js
```

#### [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/chrome/icon16.png" title="Chrome">][web-usage][<img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/edge/icon16.png" title="Edge">][web-usage][<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/firefox/icon16.png" title="Firefox">][web-usage][<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/safari/icon16.png" title="Safari">][web-usage][<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/qq/3d/icon-32x33.png" title="QQ Browser">][web-usage] Web:

[web-usage]: #-web

```js
<script src="https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@4/dist/chatgpt.min.js"></script>
```

#### [<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/tampermonkey/icon28.png" title="Tampermonkey">][greasemonkey-usage][<img height="15" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/violentmonkey/icon25.png" title="Violentmonkey">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/scriptcat/icon32.png" title="ScriptCat">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/orangemonkey/icon16.png" title="OrangeMonkey">][greasemonkey-usage][<img height="14" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/stay/icon32.png" title="Stay">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/userscripts/icon32.png" title="Userscripts">][greasemonkey-usage] Greasemonkey:

[greasemonkey-usage]: #-greasemonkey

> **注** _スターターテンプレートを使用するには： [KudoAI/chatgpt.js-greasemonkey-starter](https://github.com/KudoAI/chatgpt.js-greasemonkey-starter)_

```js
// @require https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@4/dist/chatgpt.min.js
// ==/UserScript==
```

#### [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/chrome/icon16.png" title="Chrome">](#-chrome) Chrome:

> **注** _スターターテンプレートを使用するには： [KudoAI/chatgpt.js-chrome-starter](https://github.com/KudoAI/chatgpt.js-chrome-starter)_

1. https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@4/dist/chatgpt.min.js を `lib` に保存します。

2. プロジェクト（V3）の`manifest.json`に、`lib/chatgpt.min.js`をWebアクセス可能なリソースとして追加します。

```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.min.js"]
    }],
```

#

### CLIアプリ

#### <a href="#-nodejs-1"><img height=14 width="auto" src="https://cdn.jsdelivr.net/gh//adamlui/js-utils@dbdea4b/assets/images/icons/runtimes/node.js/icon25x28.png"></a> Node.js:

```bash
npm install -g @kudoai/chatgpt.js
```

#

### APIキー

対応プロバイダー：

<!-- OPENROUTER -->

<details>

<summary>
    <img width=15 src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js/assets/images/icons/providers/openrouter/icon32.png"> <b>OpenRouter</b> — 300種類以上のモデル、そのうち数十種類は無料
</summary>

<br>

**1. APIキーを作成: https://openrouter.ai/settings/keys**

<img height=135 src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e188cf7/assets/images/screenshots/api-provider-dashes/openrouter.png">

**2. 環境にキーを追加:**

##### Windows:

```bash
setx OPENROUTER_API_KEY "sk-or-v1-8a69..."
```

##### Mac/Linux:

```bash
export OPENROUTER_API_KEY="sk-or-v1-8a69..."
```

</details>

<!-- GOOGLE AI -->

<details>

<summary>
    <img width=15 src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e188cf7/assets/images/icons/providers/googleai/icon32.png"> <b>Google AI</b> — Gemini + Gemma モデル
</summary>

<br>

**1. APIキーを作成: https://aistudio.google.com/api-keys**

<img height=135 src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e188cf7/assets/images/screenshots/api-provider-dashes/google-ai-studio.png">

**2. 環境にキーを追加:**

##### Windows:

```bash
setx GOOGLE_API_KEY "AIzaSyB..."
```

##### Mac/Linux:

```bash
export GOOGLE_API_KEY="AIzaSyB..."
```

</details>

<hr>

## 💻 使用法

#### <a href="#-es-modules-esm"><img height=13 width="auto" src="https://cdn.jsdelivr.net/gh/adamlui/js-utils@dbdea4b/assets/images/icons/module-systems/esm/icon32.png"></a> ES Modules (ESM):

```js
import chatgpt from '@kudoai/chatgpt.js'

console.log(await chatgpt.send('sup'))
// e.g. => Hey! Not much—just here and ready to help. What's up with you?
```

#### <a href="#-commonjs-cjs"><img height=13 width="auto" src="https://cdn.jsdelivr.net/gh/adamlui/js-utils@dbdea4b/assets/images/icons/module-systems/cjs/icon32.png"></a> CommonJS (CJS):

```js
(async () => {
    const chatgpt = require('@kudoai/chatgpt.js')

    console.log(await chatgpt.send('sup'))
    // e.g. => Hey! What's up?
})()
```

#### [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/chrome/icon16.png" title="Chrome">](#-chrome) Chrome:

```js
(async () => {
    await import(chrome.runtime.getURL('lib/chatgpt.min.js'))

    await chatgpt.isLoaded()
    console.log('ChatGPT is ready!') 
})()
```

#### <a href="#-terminal"><img width=16 height="auto" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@b30a348/assets/images/icons/terminal/black/icon32.png"></a> Terminal:

```bash
chatgpt --query "sup"  # or cjs -q sup
# e.g. => Hey there! What's up?
```

その他のオプションや例については、詳細ユーザーガイドをご覧ください。

<https://github.com/KudoAI/chatgpt.js/blob/v4.1.1/docs/USERGUIDE.md>

<br><a href="https://github.com/sponsors/KudoAI"><img src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@e53b001/assets/images/banners/sponsor/$10/banner1660x260.png"></a>

<hr>

<div id="showcase">

## 🚀 chatgpt.js で作成

</div>

<!-- AMAZONGPT -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/KudoAI/amazongpt@579eef3/assets/images/icons/app/white/icon48.png"><img width=18 src="https://cdn.jsdelivr.net/gh/KudoAI/amazongpt@579eef3/assets/images/icons/app/black-gold-teal/icon48.png"></picture>][amazongpt-readme] [AmazonGPT][amazongpt-readme] &nbsp;[<img height=20 src="https://cdn.jsdelivr.net/gh/KudoAI/amazongpt@579eef3/assets/images/badges/wolfram-award/gold-badge.png">](https://cdn.jsdelivr.net/gh/KudoAI/amazongpt@579eef3/assets/wolfram-award/letter.pdf)

<details>
    <summary>
        最新のLLMを活用し、AmazonでのショッピングにAIチャットや商品・カテゴリの要約機能を追加します！
    </summary>
    <br>
    <blockquote>
        <a href="https://github.com/adamlui/ai-web-extensions/tree/main/amazongpt/#readme">
            <img width=511 src="https://cdn.jsdelivr.net/gh/KudoAI/amazongpt@579eef3/assets/images/screenshots/desktop/mice-md-reply-darkmode.png?v=80bceab"></a>
    </blockquote>
</details>

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][amazongpt-install]
> [Greasemonkey][amazongpt-install] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][amazongpt-readme]
> [ドキュメンテーション][amazongpt-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [話し合う][aiweb-discuss]

[amazongpt-install]: https://github.com/adamlui/ai-web-extensions/tree/main/amazongpt/#-installation
[amazongpt-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/amazongpt/#readme

<!-- AUTOCLEAR CHATGPT HISTORY -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/autoclear-chatgpt-history@83f1921/assets/images/icons/openai/white/icon32.png"><img width=19 src="https://cdn.jsdelivr.net/gh/adamlui/autoclear-chatgpt-history@83f1921/assets/images/icons/openai/black/icon32.png"></picture>][ach-readme] [ChatGPTの履歴を自動消去][ach-readme] &nbsp;[<img src="https://assets.autoclearchatgpt.com/images/badges/awesome/badge.svg">](https://github.com/awesome-scripts/awesome-userscripts#privacy)

<details>
    <summary>
        プライバシーを最大限に保護するため、ChatGPTのクエリ履歴を自動的に消去します。
    </summary>
    <br>
    <blockquote>
        <a href="https://github.com/adamlui/ai-web-extensions/tree/main/autoclear-chatgpt-history/#readme">
            <img width=511 height=222 src="https://cdn.jsdelivr.net/gh/adamlui/autoclear-chatgpt-history@83f1921/assets/images/screenshots/demo.png"></a>
    </blockquote>
</details>

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][ach-install]
> [Greasemonkey][ach-install] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][ach-readme]
> [ドキュメンテーション][ach-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [話し合う][aiweb-discuss]

[ach-install]: https://github.com/adamlui/ai-web-extensions/tree/main/autoclear-chatgpt-history/#-installation
[ach-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/autoclear-chatgpt-history/#readme


<!-- BRAVEGPT -->

### [<img width=21 src="https://assets.bravegpt.com/images/icons/app/icon48.png">][bravegpt-readme] [BraveGPT][bravegpt-readme] &nbsp;[<img width=112 height="auto" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light">](https://www.producthunt.com/posts/bravegpt)

<details>
    <summary>
        最新のLLMを活用した、AIチャットと検索サマリーをBrave Searchに追加！
    </summary>
    <br>
    <blockquote>
        <a href="https://github.com/adamlui/ai-web-extensions/tree/main/bravegpt/#readme">
            <img width=511 src="https://assets.bravegpt.com/images/screenshots/desktop/bitcoin-query/darkmode.png?v=a0dd1de"></a>
    </blockquote>
</details>

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][bravegpt-install]
> [Greasemonkey][bravegpt-install] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][bravegpt-readme]
> [ドキュメンテーション][bravegpt-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [話し合う][aiweb-discuss]

[bravegpt-install]: https://github.com/adamlui/ai-web-extensions/tree/main/bravegpt/#-installation
[bravegpt-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/bravegpt/#readme

<!-- CHATGPT AUTO-CONTINUE -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-continue@7e2c739/assets/images/icons/app/white/icon32.png"><img height=20 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-continue@7e2c739/assets/images/icons/app/black/icon32.png"></picture>][cac-readme] [ChatGPT 自動継続][cac-readme] &nbsp;[<img src="https://assets.chatgptautocontinue.com/images/badges/awesome/badge.svg">][awesome-chatgpt-userscripts]

<details>
    <summary>
        ChatGPTの回答が途中で途切れた際、自動的に生成を再開します。
    </summary>
    <br>
    <blockquote>
        <a href="https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-continue/#readme">
            <img width=600 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-continue@7e2c739/assets/images/tiles/marquee/tile625x250.png"></a>
    </blockquote>
</details>

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/browsers/chrome/icon16.png">][cac-chrome]
> [Chrome][cac-chrome] /
> [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/browsers/firefox/icon16.png">][cac-ff]
> [Firefox][cac-ff] /
> [<img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/browsers/edge/icon16.png">][cac-edge]
> [Edge][cac-edge] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][cac-readme]
> [ドキュメンテーション][cac-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [話し合う][aiweb-discuss]

[cac-chrome]: https://chromewebstore.google.com/detail/chatgpt-auto-continue/lbojnhaafilddefkdgmbplkafnckaoga?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[cac-ff]: https://addons.mozilla.org/firefox/addon/chatgpt-auto-continue/?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[cac-edge]: https://microsoftedge.microsoft.com/addons/detail/chatgpt-auto-continue/kaicnimcjamamnlbaeaneofmdjibgepl
[cac-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-continue/#readme

<!-- IDEA CTA -->

<hr>

### 図書館に関するアイデアやご要望はございますか？

新しいディスカッションを作成: https://github.com/KudoAI/chatgpt.js/discussions/new?category=ideas

<hr>

<!-- CHATGPT AUTO REFRESH -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautorefresh.com/images/icons/openai/white/icon32.png"><img width=19 src="https://assets.chatgptautorefresh.com/images/icons/openai/black/icon32.png"></picture>][car-readme] [ChatGPT 自動更新 ↻][car-readme] &nbsp;[<img src="https://assets.chatgptautorefresh.com/images/badges/awesome/badge.svg">][awesome-chatgpt-userscripts]

ChatGPT のセッションを常に最新の状態に保ち、チャットの時間制限、ネットワークエラー、Cloudflare によるチェックを排除します。

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][car-install]
> [Greasemonkey][car-install] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][car-readme]
> [ドキュメンテーション][car-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [話し合う][aiweb-discuss]

[car-install]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-refresh/#-installation
[car-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-refresh/#readme

<!-- CHATGPT AUTO-TALK -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautotalk.com/images/icons/openai/white/icon32.png"><img width=19 src="https://assets.chatgptautotalk.com/images/icons/openai/black/icon32.png"></picture>][cat-readme] [ChatGPT オートトーク 📣][cat-readme] &nbsp;[<img src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@2f5a19c/assets/images/badges/awesome/badge.svg">][awesome-chatgpt-userscripts]

ChatGPTの応答を自動再生。

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][cat-install]
> [Greasemonkey][cat-install] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][cat-readme]
> [ドキュメンテーション][cat-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [話し合う][aiweb-discuss]

[cat-install]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-talk/#-installation
[cat-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-talk/#readme

<!-- CHATGPT INFINITY -->

### [<img width=20 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@c587927/assets/images/icons/infinity-symbol/circled/icon32.png">][ci-readme] [ChatGPT Infinity][ci-readme] &nbsp;[<img height=20 src="https://assets.chatgptinfinity.com/images/badges/chrome-web-store/featured-by-google/badge500x91.png">][ci-chrome]

<details>
    <summary>
        全知の ChatGPT から、あらゆるトピックについて無限の回答を引き出そう！
    </summary>
    <br>
    <blockquote>
        <a href="https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-infinity/#readme">
            <img width=600 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@4a7bac9/assets/images/tiles/marquee/tile-625x250.png"></a>
    </blockquote>
</details>

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/browsers/chrome/icon16.png">][ci-chrome]
> [Chrome][ci-chrome] /
> [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/browsers/firefox/icon16.png">][ci-ff]
> [Firefox][ci-ff] /
> [<img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/browsers/edge/icon16.png">][ci-edge]
> [Edge][ci-edge] /
> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][ci-greasemonkey]
> [Greasemonkey][ci-greasemonkey] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][ci-readme]
> [ドキュメンテーション][ci-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [話し合う][aiweb-discuss]

[ci-chrome]: https://chromewebstore.google.com/detail/chatgpt-infinity/amikeononomkhphopbflomhnmdijjpmb?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[ci-ff]: https://addons.mozilla.org/firefox/addon/chatgpt-infinity/?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[ci-edge]: https://microsoftedge.microsoft.com/addons/detail/chatgpt-infinity/jgonecnbmehicpdpjkdekamhmlebfagb
[ci-greasemonkey]: https://gm.chatgptinfinity.com
[ci-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-infinity/#readme

<!-- CHATGPT WIDESCREEN -->

### [<img width=19 src="https://assets.chatgptwidescreen.com/images/icons/widescreen-robot-emoji/icon32.png">][cwm-readme] [ChatGPT ワイドスクリーン][cwm-readme] &nbsp;[<img height=20 src="https://assets.chatgptwidescreen.com/images/badges/chrome-web-store/featured-by-google/badge500x91.png">][cwm-readme]

<details>
    <summary>
        ChatGPTを、ワイド／フル／トールスクリーン表示やスパムブロック機能で強化します。poe.comでも動作します！
    </summary>
    <br>
    <blockquote>
        <a href="https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-widescreen/#readme">
            <img width=600 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-widescreen@91656d3/assets/images/tiles/marquee/tile-625x250.png"></a>
    </blockquote>
</details>

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/browsers/chrome/icon16.png">][cwm-chrome]
> [Chrome][cwm-chrome] /
> [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/browsers/firefox/icon16.png">][cwm-ff]
> [Firefox][cwm-ff] /
> [<img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/browsers/edge/icon16.png">][cwm-edge]
> [Edge][cwm-edge] /
> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][cwm-greasemonkey]
> [Greasemonkey][cwm-greasemonkey] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][cwm-readme]
> [ドキュメンテーション][cwm-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [話し合う][aiweb-discuss]

[cwm-chrome]: https://chromewebstore.google.com/detail/chatgpt-widescreen/jgnjpnmofkalfliddjelaciggjgnphgm?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[cwm-ff]: https://addons.mozilla.org/firefox/addon/chatgpt-widescreen/?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[cwm-edge]: https://microsoftedge.microsoft.com/addons/detail/chatgpt-widescreen-mode/obnaaalnokmchdoagnhmllakaclaaooa
[cwm-greasemonkey]: https://gm.chatgptwidescreen.com
[cwm-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-widescreen/#readme

<!-- DUCKDUCKGPT -->

### [<img width=20 src="https://assets.ddgpt.com/images/icons/app/icon48.png">][ddgpt-readme] [DuckDuckGPT][ddgpt-readme] &nbsp;[<img width="112" height="auto" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light">](https://www.producthunt.com/posts/duckduckgpt)

<details>
    <summary>
        最新のLLMを活用した、AIチャットと検索サマリーをDuckDuckGoに追加しましょう！ 
    </summary>
    <br>
    <blockquote>
        <a href="https://github.com/adamlui/ai-web-extensions/tree/main/duckduckgpt/#readme">
            <img width=511 src="https://assets.ddgpt.com/images/screenshots/desktop/how-to-becum-rich-query/lightmode.png"></a>
    </blockquote>
</details>

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][ddgpt-install]
> [Greasemonkey][ddgpt-install] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][ddgpt-readme]
> [ドキュメンテーション][ddgpt-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [話し合う][aiweb-discuss]

[ddgpt-install]: https://github.com/adamlui/ai-web-extensions/tree/main/duckduckgpt/#-installation
[ddgpt-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/duckduckgpt/#readme

<!-- GOOGLEGPT -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/icons/app/white/icon32.png"><img width=19 src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/icons/app/black/icon32.png"></picture>][googlegpt-readme] [GoogleGPT][googlegpt-readme] &nbsp;[<img src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/badges/awesome/badge.svg">][awesome-chatgpt-userscripts]

<details>
    <summary>
        最新のLLMを活用したAIチャットと検索サマリーを、Google検索に追加しましょう！
    </summary>
    <br>
    <blockquote>
        <a href="https://github.com/adamlui/ai-web-extensions/tree/main/googlegpt/#readme">
            <img width=511 src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt@a363ecf/assets/images/screenshots/desktop/javascript-arrays-query/darkmode.png"></a>
    </blockquote>
</details>

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][googlegpt-install]
> [Greasemonkey][googlegpt-install] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][googlegpt-readme]
> [ドキュメンテーション][googlegpt-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [話し合う][aiweb-discuss]

[googlegpt-install]: https://github.com/adamlui/ai-web-extensions/tree/main/googlegpt/#-installation
[googlegpt-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/googlegpt/#readme

### <img width=23 src="https://assets.chatgptjs.org/images/icons/platforms/thunderbird/icon32.png?v=e638eac"> <a href="https://micz.it/thunderdbird-addon-thunderai/?utm_source=chatgpt.js-github&utm_medium=referral&utm_content=showcase-link" target="_blank" rel="noopener">ThunderAI</a> &nbsp;<a href="https://addons.thunderbird.net/thunderbird/addon/thunderai/reviews" target="_blank" rel="noopener"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/badges/5-star/blue-stars.png?v=e638eac"><img width=92 alt="[5 つ星評価]" src="https://assets.chatgptjs.org/images/badges/5-star/yellow-stars-in-white-pill.png?v=e638eac"></picture></a>

> Thunderbird で ChatGPT を使用すると、無料アカウントでもメールの機能を強化できます!
<br>[インストール](https://addons.thunderbird.net/thunderbird/addon/thunderai/) /
[お読みください](https://github.com/micz/ThunderAI#readme) /
[サポート](https://github.com/micz/ThunderAI/issues)

<hr>

## 🧠 貢献者

<a href="https://github.com/KudoAI/chatgpt.js/graphs/contributors">
    <img height=111 width="auto" src="https://contrib.rocks/image?repo=KudoAI/chatgpt.js&anon=1&columns=16" /></a>
<br><br>

皆様からのご意見・ご感想を心よりお待ちしております！

<hr>

## 🏛️ ライセンス

### MITライセンス

**Copyright © 2023–2026 [KudoAI](https://github.com/KudoAI) & 貢献者**

本ソフトウェアおよび関連文書ファイル（以下「本ソフトウェア」）の複製を入手したすべての人に対し、本ソフトウェアを無制限に扱う権利を無償で許諾します。これには、本ソフトウェアを使用、複製、変更、結合、公表、配布、再許諾、および／または販売する権利、ならびに本ソフトウェアの提供を受けた者がそうすることを許可する権利が、制限なく含まれます。ただし、以下の条件に従うものとします。

上記の著作権表示および本許諾表示は、本ソフトウェアのすべての複製、または本ソフトウェアの重要な部分に含めるものとします。

本ソフトウェアは「現状有姿」で提供され、商品性、特定目的への適合性、および第三者の権利の非侵害に関する保証を含め、明示または黙示を問わず、いかなる種類の保証も行われません。いかなる場合も、本ソフトウェアまたはその使用、あるいは本ソフトウェアに関するその他の取引に起因し、または関連して生じた、契約責任、不法行為責任、あるいはその他の責任論に基づく請求、損害、またはその他の義務について、著作者または著作権者は一切の責任を負わないものとします。

<img height=10px width="100%" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e638eac/assets/images/separators/gradient-aqua.png">

<div align="center">

<picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/js-utils@6b0d399/assets/images/icons/tag/white/icon16.svg"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/js-utils@6b0d399/assets/images/icons/tag/dark-gray/icon16.svg"></picture>
**[最新リリース](https://github.com/KudoAI/chatgpt.js/releases)** /
[ユーザーガイド](https://github.com/KudoAI/chatgpt.js/blob/v4.1.1/docs/USERGUIDE.md) /
[サポートを受ける](https://github.com/KudoAI/chatgpt.js/issues) / 
[議論](https://github.com/KudoAI/chatgpt.js/discussions) / 
<a href="#top">トップに戻る ↑</a>

</div>

<!-- REF LINKS -->

[aiweb-discuss]: https://github.com/adamlui/ai-web-extensions/discussions
[awesome-chatgpt-userscripts]: https://github.com/awesome-scripts/awesome-userscripts#-chatgpt
