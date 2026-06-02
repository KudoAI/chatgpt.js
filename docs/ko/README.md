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
        한국어 |
        <a href="../..#readme">English</a> |
        <a href="../zh-cn#readme">简体中文</a> |
        <a href="../zh-tw#readme">繁體中文</a> |
        <a href="../ja#readme">日本</a> |
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
    <img src="https://img.shields.io/badge/%EB%9D%BC%EC%9D%B4%EC%84%BC%EC%8A%A4-MIT-f99b27.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@kudoai/chatgpt.js/v/latest" target="_blank" rel="noopener">
    <img src="https://img.shields.io/npm/v/%40kudoai%2Fchatgpt.js?logo=npm&logoColor=white&labelColor=464646&color=32fcee&style=for-the-badge&label=%EC%B5%9C%EC%8B%A0%20%EB%A6%B4%EB%A6%AC%EC%8A%A4"></a>
<a href="https://www.codefactor.io/repository/github/kudoai/chatgpt.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=%EC%BD%94%EB%93%9C+%ED%92%88%EC%A7%88&logo=codefactor&logoColor=white&labelColor=464646&color=a0fc55&style=for-the-badge"></a>
<a href="https://sonarcloud.io/component_measures?metric=vulnerabilities&id=kudoai_chatgpt.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dkudoai_chatgpt.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonar&logoColor=white&labelColor=464646&label=%EC%B7%A8%EC%95%BD%EC%A0%90&color=ffef00"></a>
<a href="https://github.com/sindresorhus/awesome-chatgpt#javascript" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/%EC%96%B8%EA%B8%89%EB%90%A8-Awesome-ff69b4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="#">
    <img src="https://img.shields.io/badge/jsDelivr_%EC%9A%94%EC%B2%AD%EC%82%AC%ED%95%AD-4,000,000+-2bbbd8.svg?logo=jsdelivr&logoColor=white&labelColor=464646&style=for-the-badge"></a>

</div>

<br>

<hr>

## ⚡ 설치

### 도서관

#### <a href="#-nodejs"><img height=14 width="auto" src="https://cdn.jsdelivr.net/gh/adamlui/js-utils@dbdea4b/assets/images/icons/runtimes/node.js/icon25x28.png"></a> Node.js:

프로젝트 루트 디렉토리에서:

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

> **메모** _시작 템플릿을 사용하려면 다음 단계를 따르세요: [KudoAI/chatgpt.js-greasemonkey-starter](https://github.com/KudoAI/chatgpt.js-greasemonkey-starter)_

```js
...
// @require https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@4/dist/chatgpt.min.js
// ==/UserScript==
```

#### [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/chrome/icon16.png" title="Chrome">](#-chrome) Chrome:

> **메모** _시작 템플릿을 사용하려면 다음 단계를 따르세요: [KudoAI/chatgpt.js-chrome-starter](https://github.com/KudoAI/chatgpt.js-chrome-starter)_

1. https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@4/dist/chatgpt.min.js 파일을 `lib` 폴더에 저장하세요.

2. 프로젝트(V3)의 `manifest.json` 파일에 `lib/chatgpt.min.js`를 웹에서 접근 가능한 리소스로 추가하세요.

```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.min.js"]
    }],
```

#

### CLI 앱

#### <a href="#-nodejs-1"><img height=14 width="auto" src="https://cdn.jsdelivr.net/gh/adamlui/js-utils@dbdea4b/assets/images/icons/runtimes/node.js/icon25x28.png"></a> Node.js:

```bash
npm install -g @kudoai/chatgpt.js
```

#

### API 키

지원 제공업체:

<!-- OPENROUTER -->

<details>

<summary>
    <img width=15 src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js/assets/images/icons/providers/openrouter/icon32.png"> <b>OpenRouter</b> — 300개 이상의 모델, 수십 개 무료
</summary>

<br>

**1. API 키 생성: https://openrouter.ai/settings/keys**

<img height=135 src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e188cf7/assets/images/screenshots/api-provider-dashes/openrouter.png">

**2. 환경에 키 추가:**

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
    <img width=15 src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e188cf7/assets/images/icons/providers/googleai/icon32.png"> <b>Google AI</b> — Gemini + Gemma 모델
</summary>

<br>

**1. API 키 생성: https://aistudio.google.com/api-keys**

<img height=135 src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e188cf7/assets/images/screenshots/api-provider-dashes/google-ai-studio.png">

**2. 환경에 키 추가:**

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

## 💻 용법

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

API 키를 설정한 후, 터미널에서 요청하십시오:

```bash
chatgpt --query "sup"  # 또는 cjs -q sup
# e.g. => Hey there! What's up?
```

기본 OpenRouter 제공자 대신 Google AI를 사용하려면 `--provider google`을 사용하세요.

```bash
chatgpt --provider google --query "한 줄짜리 Git 커밋 메시지를 작성해 주세요."
```

모든 CLI 옵션을 확인하거나 로컬 설정 파일을 생성하려면:

```bash
chatgpt --help
chatgpt --init
```

더 많은 옵션과 예시는 확장 사용자 가이드를 참조하십시오.

<https://github.com/KudoAI/chatgpt.js/blob/v4.7.0/docs/USERGUIDE.md>

<br><a href="https://github.com/sponsors/KudoAI"><img src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@e53b001/assets/images/banners/sponsor/$10/banner1660x260.png"></a>

<hr>

<div id="showcase">

## 🚀 chatgpt.js로 만들어진 프로젝트

</div>

<!-- AMAZONGPT -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/KudoAI/amazongpt@579eef3/assets/images/icons/app/white/icon48.png"><img width=18 src="https://cdn.jsdelivr.net/gh/KudoAI/amazongpt@579eef3/assets/images/icons/app/black-gold-teal/icon48.png"></picture>][amazongpt-readme] [AmazonGPT][amazongpt-readme] &nbsp;[<img height=20 src="https://cdn.jsdelivr.net/gh/KudoAI/amazongpt@579eef3/assets/images/badges/wolfram-award/gold-badge.png">](https://cdn.jsdelivr.net/gh/KudoAI/amazongpt@579eef3/assets/wolfram-award/letter.pdf)

<details>
    <summary>
        최신 LLM 기술로 구동되는 AI 챗봇 및 상품/카테고리 요약 기능을 Amazon 쇼핑에 추가하세요!
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
> [읽어보기][amazongpt-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [논의하다][aiweb-discuss]

[amazongpt-install]: https://github.com/adamlui/ai-web-extensions/tree/main/amazongpt/#-installation
[amazongpt-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/amazongpt/#readme

<!-- AUTOCLEAR CHATGPT HISTORY -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/autoclear-chatgpt-history@83f1921/assets/images/icons/openai/white/icon32.png"><img width=19 src="https://cdn.jsdelivr.net/gh/adamlui/autoclear-chatgpt-history@83f1921/assets/images/icons/openai/black/icon32.png"></picture>][ach-readme] [ChatGPT 기록 자동 삭제][ach-readme] &nbsp;[<img src="https://cdn.jsdelivr.net/gh/adamlui/autoclear-chatgpt-history@13b6a5d/assets/images/badges/awesome/badge.svg">](https://github.com/awesome-scripts/awesome-userscripts#privacy)

<details>
    <summary>
        최상의 개인정보 보호를 위해 ChatGPT 쿼리 기록을 자동으로 삭제하세요.
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
> [읽어보기][ach-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [논의하다][aiweb-discuss]

[ach-install]: https://github.com/adamlui/ai-web-extensions/tree/main/autoclear-chatgpt-history/#-installation
[ach-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/autoclear-chatgpt-history/#readme


<!-- BRAVEGPT -->

### [<img width=21 src="https://assets.bravegpt.com/images/icons/app/icon48.png">][bravegpt-readme] [BraveGPT][bravegpt-readme] &nbsp;[<img width=112 height="auto" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light">](https://www.producthunt.com/posts/bravegpt)

<details>
    <summary>
        최신 LLM으로 구동되는 AI 채팅 및 검색 요약 기능을 Brave Search에 추가하세요!
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
> [읽어보기][bravegpt-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [논의하다][aiweb-discuss]

[bravegpt-install]: https://github.com/adamlui/ai-web-extensions/tree/main/bravegpt/#-installation
[bravegpt-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/bravegpt/#readme

<!-- CHATGPT AUTO-CONTINUE -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-continue@7e2c739/assets/images/icons/app/white/icon32.png"><img height=20 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-continue@7e2c739/assets/images/icons/app/black/icon32.png"></picture>][cac-readme] [ChatGPT 자동 이어쓰기][cac-readme] &nbsp;[<img src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-continue@dc6aae7/assets/images/badges/awesome/badge.svg">][awesome-chatgpt-userscripts]

<details>
    <summary>
        ChatGPT의 응답이 도중에 끊길 때, 자동으로 답변 생성을 이어갑니다.
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
> [읽어보기][cac-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [논의하다][aiweb-discuss]

[cac-chrome]: https://chromewebstore.google.com/detail/chatgpt-auto-continue/lbojnhaafilddefkdgmbplkafnckaoga?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[cac-ff]: https://addons.mozilla.org/firefox/addon/chatgpt-auto-continue/?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[cac-edge]: https://microsoftedge.microsoft.com/addons/detail/chatgpt-auto-continue/kaicnimcjamamnlbaeaneofmdjibgepl
[cac-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-continue/#readme

<!-- IDEA CTA -->

<hr>

### 도서관 관련 아이디어나 요청 사항이 있으신가요?

새 이슈 생성: https://github.com/KudoAI/chatgpt.js/issues/new

<hr>

<!-- CHATGPT AUTO REFRESH -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-refresh@2514e1c/assets/images/icons/openai/white/icon32.png"><img width=19 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-refresh@2514e1c/assets/images/icons/openai/black/icon32.png"></picture>][car-readme] [ChatGPT 자동 새로고침 ↻][car-readme] &nbsp;[<img src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-refresh@2514e1c/assets/images/badges/awesome/badge.svg">][awesome-chatgpt-userscripts]

ChatGPT 세션을 항상 최신 상태로 유지하여, 채팅 시간 제한 및 네트워크 오류, Cloudflare 확인 절차를 제거합니다.

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][car-install]
> [Greasemonkey][car-install] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][car-readme]
> [읽어보기][car-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [논의하다][aiweb-discuss]

[car-install]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-refresh/#-installation
[car-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-refresh/#readme

<!-- CHATGPT AUTO-TALK -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@13d5f7b/assets/images/icons/openai/white/icon32.png"><img width=19 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@13d5f7b/assets/images/icons/openai/black/icon32.png"></picture>][cat-readme] [ChatGPT 자동 대화 📣][cat-readme] &nbsp;[<img src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@2f5a19c/assets/images/badges/awesome/badge.svg">][awesome-chatgpt-userscripts]

ChatGPT 응답 자동 재생.

> [<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/tampermonkey/icon28.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/violentmonkey/icon25.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/scriptcat/icon16.png"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/orangemonkey/icon16.png"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/stay/icon16.png"><img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/userscript-managers/userscripts/icon16.png">][cat-install]
> [Greasemonkey][cat-install] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/white.svg"><img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/paper-sheet/black.svg"></picture>][cat-readme]
> [읽어보기][cat-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [논의하다][aiweb-discuss]

[cat-install]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-talk/#-installation
[cat-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-auto-talk/#readme

<!-- CHATGPT INFINITY -->

### [<img width=20 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@c587927/assets/images/icons/infinity-symbol/circled/icon32.png">][ci-readme] [ChatGPT 인피니티][ci-readme] &nbsp;[<img height=20 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@7bc796d/assets/images/badges/chrome-web-store/featured-by-google/badge500x91.png">][ci-chrome]

<details>
    <summary>
        모든 것을 아는 ChatGPT로부터 끝없는 답변을 생성해 보세요 (어떤 주제든 가능합니다!)
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
> [읽어보기][ci-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [논의하다][aiweb-discuss]

[ci-chrome]: https://chromewebstore.google.com/detail/chatgpt-infinity/amikeononomkhphopbflomhnmdijjpmb?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[ci-ff]: https://addons.mozilla.org/firefox/addon/chatgpt-infinity/?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[ci-edge]: https://microsoftedge.microsoft.com/addons/detail/chatgpt-infinity/jgonecnbmehicpdpjkdekamhmlebfagb
[ci-greasemonkey]: https://raw.githubusercontent.com/adamlui/chatgpt-infinity/refs/heads/main/greasemonkey/chatgpt-infinity.user.js
[ci-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-infinity/#readme

<!-- CHATGPT WIDESCREEN -->

### [<img width=19 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-widescreen@82ef9ab/assets/images/icons/widescreen-robot-emoji/icon32.png">][cwm-readme] [ChatGPT 와이드스크린][cwm-readme] &nbsp;[<img height=20 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-widescreen@82ef9ab/assets/images/badges/chrome-web-store/featured-by-google/badge500x91.png">][cwm-readme]

<details>
    <summary>
        ChatGPT에 와이드/전체/세로 화면 및 스팸 차단 모드를 추가하여 기능을 강화합니다. poe.com에서도 작동합니다!
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
> [읽어보기][cwm-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [논의하다][aiweb-discuss]

[cwm-chrome]: https://chromewebstore.google.com/detail/chatgpt-widescreen/jgnjpnmofkalfliddjelaciggjgnphgm?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[cwm-ff]: https://addons.mozilla.org/firefox/addon/chatgpt-widescreen/?utm_source=github&utm_medium=referral&utm_content=ai-web-extensions-readme
[cwm-edge]: https://microsoftedge.microsoft.com/addons/detail/chatgpt-widescreen-mode/obnaaalnokmchdoagnhmllakaclaaooa
[cwm-greasemonkey]: https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/refs/heads/main/greasemonkey/chatgpt-widescreen.user.js
[cwm-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/chatgpt-widescreen/#readme

<!-- DUCKDUCKGPT -->

### [<img width=20 src="https://assets.ddgpt.com/images/icons/app/icon48.png">][ddgpt-readme] [DuckDuckGPT][ddgpt-readme] &nbsp;[<img width="112" height="auto" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light">](https://www.producthunt.com/posts/duckduckgpt)

<details>
    <summary>
        최신 LLM으로 구동되는 AI 채팅 및 검색 요약 기능을 DuckDuckGo에 추가하세요! 
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
> [읽어보기][ddgpt-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [논의하다][aiweb-discuss]

[ddgpt-install]: https://github.com/adamlui/ai-web-extensions/tree/main/duckduckgpt/#-installation
[ddgpt-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/duckduckgpt/#readme

<!-- GOOGLEGPT -->

### [<picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/icons/app/white/icon32.png"><img width=19 src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/icons/app/black/icon32.png"></picture>][googlegpt-readme] [GoogleGPT][googlegpt-readme] &nbsp;[<img src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/badges/awesome/badge.svg">][awesome-chatgpt-userscripts]

<details>
    <summary>
        최신 LLM으로 구동되는 AI 채팅 및 검색 요약 기능을 Google 검색에 추가하세요!
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
> [읽어보기][googlegpt-readme] /
> [<picture><source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/white.svg"><img height=12 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@d11d2ee/assets/images/icons/speech-bubble-square/black.svg"></picture>][aiweb-discuss]
> [논의하다][aiweb-discuss]

[googlegpt-install]: https://github.com/adamlui/ai-web-extensions/tree/main/googlegpt/#-installation
[googlegpt-readme]: https://github.com/adamlui/ai-web-extensions/tree/main/googlegpt/#readme

### <img width=23 src="https://assets.chatgptjs.org/images/icons/platforms/thunderbird/icon32.png?v=e638eac"> <a href="https://micz.it/thunderdbird-addon-thunderai/?utm_source=chatgpt.js-github&utm_medium=referral&utm_content=showcase-link" target="_blank" rel="noopener">ThunderAI</a> &nbsp;<a href="https://addons.thunderbird.net/thunderbird/addon/thunderai/reviews" target="_blank" rel="noopener"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/badges/5-star/blue-stars.png?v=e638eac"><img width=92 alt="[별점 5 개]" src="https://assets.chatgptjs.org/images/badges/5-star/yellow-stars-in-white-pill.png?v=e638eac"></picture></a>

> Thunderbird 에서 ChatGPT 를 사용하면 무료 계정으로도 이메일 기능을 향상할 수 있습니다!
<br>[설치](https://addons.thunderbird.net/thunderbird/addon/thunderai/) /
[리드미](https://github.com/micz/ThunderAI#readme) /
[지원하다](https://github.com/micz/ThunderAI/issues)

<hr>

## 🧠 기여자

<a href="https://github.com/KudoAI/chatgpt.js/graphs/contributors">
    <img height=111 width="auto" src="https://contrib.rocks/image?repo=KudoAI/chatgpt.js&anon=1&columns=16" /></a>
<br><br>

모든 기고를 환영합니다!

<hr>

## 🏛️ 라이선스

### MIT 라이선스

**Copyright © 2023–2026 [KudoAI](https://github.com/KudoAI) & 기여자들**

이 소프트웨어 및 관련 문서 파일(이하 "소프트웨어")의 사본을 입수한 모든 사람에게, 무료로 소프트웨어를 취급할 수 있는 권한이 부여됩니다. 이 권한에는 소프트웨어의 사용, 복사, 수정, 병합, 게시, 배포, 재라이선스 부여 및/또는 판매에 대한 권리를 포함하되 이에 국한되지 않으며, 소프트웨어를 제공받은 자가 그렇게 할 수 있도록 허용하는 권리 또한 포함됩니다. 단, 다음의 조건이 적용됩니다.

위의 저작권 표시와 이 허가 표시는 소프트웨어의 모든 사본 또는 소프트웨어의 실질적인 부분에 포함되어야 합니다.

소프트웨어는 어떠한 종류의 보증도 없이 "있는 그대로(AS IS)" 제공됩니다. 여기에는 상품성, 특정 목적에의 적합성, 그리고 비침해에 대한 보증이 포함되나 이에 국한되지 않습니다. 어떠한 경우에도 저작자나 저작권 보유자는 소프트웨어 또는 소프트웨어의 사용 및 기타 취급과 관련하여 발생하는 청구, 손해 또는 기타 책임에 대해 책임을 지지 않습니다. 이러한 책임은 계약, 불법 행위 또는 기타 법적 근거에 따른 소송 여부와 관계없이 적용됩니다.

<img height=10px width="100%" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e638eac/assets/images/separators/gradient-aqua.png">

<div align="center">

<picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/js-utils@6b0d399/assets/images/icons/tag/white/icon16.svg"><img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/js-utils@6b0d399/assets/images/icons/tag/dark-gray/icon16.svg"></picture>
**[최신 릴리스](https://github.com/KudoAI/chatgpt.js/releases)** /
[사용자 가이드](https://github.com/KudoAI/chatgpt.js/blob/v4.7.0/docs/USERGUIDE.md) /
[지원 받기](https://github.com/KudoAI/chatgpt.js/issues) /
[토론](https://github.com/KudoAI/chatgpt.js/discussions) /
<a href="#top">상단으로 ↑</a>

</div>

<!-- REF LINKS -->

[aiweb-discuss]: https://github.com/adamlui/ai-web-extensions/discussions
[awesome-chatgpt-userscripts]: https://github.com/awesome-scripts/awesome-userscripts#-chatgpt
