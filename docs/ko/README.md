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
        <a href="../de#readme">Deutsch</a> |
        <a href="../es#readme">Español</a> |
        <a href="../fr#readme">Français</a> |
        <a href="../it#readme">Italiano</a> |
        <a href="../nl#readme">Nederlands</a> |
        <a href="../pt#readme">Português</a> |
        <a href="../ru#readme">Английский</a> |
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

### 🤖 ChatGPT를 위한 강력한 클라이언트 사이드 자바스크립트 라이브러리


</div>

<br>

<div id="shields" align="center">

<a href="LICENSE.md" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/%EB%9D%BC%EC%9D%B4%EC%84%BC%EC%8A%A4-MIT-orange.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@kudoai/chatgpt.js/v/latest" target="_blank" rel="noopener">
    <img src="https://img.shields.io/npm/v/%40kudoai%2Fchatgpt.js?logo=npm&logoColor=white&labelColor=464646&color=blue&style=for-the-badge&label=%EC%B5%9C%EC%8B%A0%20%EB%A6%B4%EB%A6%AC%EC%8A%A4"></a>
<a href="https://github.com/KudoAI/chatgpt.js/tree/v3.9.0/dist/chatgpt.min.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/github/size/KudoAI/chatgpt.js/dist/chatgpt.min.js?branch=v3.9.0&label=%EC%B6%95%EC%86%8C%EB%90%9C%20%ED%81%AC%EA%B8%B0&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge"></a>
<a href="https://www.codefactor.io/repository/github/kudoai/chatgpt.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=%EC%BD%94%EB%93%9C+%ED%92%88%EC%A7%88&logo=codefactor&logoColor=white&labelColor=464646&color=1acc6c&style=for-the-badge"></a>
<a href="https://sonarcloud.io/component_measures?metric=vulnerabilities&id=kudoai_chatgpt.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dkudoai_chatgpt.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonar&logoColor=white&labelColor=464646&label=%EC%B7%A8%EC%95%BD%EC%A0%90&color=gold"></a>
<a href="https://github.com/sindresorhus/awesome-chatgpt#javascript" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/%EC%96%B8%EA%B8%89%EB%90%A8-Awesome-af68ff?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="#">
    <img src="https://img.shields.io/badge/jsDelivr_%EC%9A%94%EC%B2%AD%EC%82%AC%ED%95%AD-2,000,000+-2bbbd8.svg?logo=jsdelivr&logoColor=white&labelColor=464646&style=for-the-badge"></a>

</div>

<br>

<hr>

## ⚡ 라이브러리 호출

</div>

#### [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/chrome/icon16.png" title="Chrome">][web-usage][<img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/edge/icon16.png" title="Edge">][web-usage][<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/firefox/icon16.png" title="Firefox">][web-usage][<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/safari/icon16.png" title="Safari">][web-usage][<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/qq/3d/icon-32x33.png" title="QQ Browser">][web-usage] Web:

[web-usage]: #-web

```js
<script src="https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3/dist/chatgpt.min.js"></script>
```

#### [<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/tampermonkey/icon28.png" title="Tampermonkey">][greasemonkey-usage][<img height="15" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/violentmonkey/icon25.png" title="Violentmonkey">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/scriptcat/icon32.png" title="ScriptCat">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/orangemonkey/icon16.png" title="OrangeMonkey">][greasemonkey-usage][<img height="14" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/stay/icon32.png" title="Stay">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/userscripts/icon32.png" title="Userscripts">][greasemonkey-usage] Greasemonkey:

[greasemonkey-usage]: #-greasemonkey

> **참고** _스타터 템플릿을 사용하시려면: [KudoAI/chatgpt.js-greasemonkey-starter](https://github.com/KudoAI/chatgpt.js-greasemonkey-starter)_

```js
...
// @require https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3/dist/chatgpt.min.js
// ==/UserScript==

// 코드를 여기에 작성해 주세요...
```

#### [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/chrome/icon16.png" title="Chrome">](#-chrome) Chrome:

> **참고** _스타터 템플릿을 사용하시려면: [KudoAI/chatgpt.js-chrome-starter](https://github.com/KudoAI/chatgpt.js-chrome-starter)_

Google은 원격 코드를 허용하지 않으므로 chatgpt.js를 로컬로 가져와야 합니다:

1. https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3/dist/chatgpt.min.js 를 하위 디렉토리에 저장합니다. (`lib` 이라고 가정)

2. 프로젝트(V3)의 `manifest.json` 파일에, `lib/chatgpt.min.js`를 웹에서 접근가능한 리소스로 추가합니다.
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.min.js"]
    }],
```

3. `chatgpt.js` 를 필요로하는 스크립트 (전경/배경 같은) 에서는 다음과 같이 가져옵니다.
```js
(async () => {
    await import(chrome.runtime.getURL('lib/chatgpt.min.js'))
    // 코드를 여기에 작성해 주세요...
})()
```

<hr>

<div id="npm">

## 💾 npm 을 통해 다운로드:

</div>

로컬 사용자 지정을 위해 **chatgpt.js** 를 다운로드하려면 프로젝트 루트에서 다음 명령을 실행하세요:

```bash
npm install @kudoai/chatgpt.js
```

설치 후 `node_modules/@kudoai/chatgpt.js` 로 이동하여 라이브러리 소스를 찾으세요.

</div>

<hr>

<div id="usage">

## 💻 사용법

</div>

**chatgpt.js** 는 유연성을 상당히 고려하여 작성되었습니다.

예시:

```js
chatgpt.getLastResponse()
chatgpt.getLastReply()
chatgpt.response.getLast()
chatgpt.get('reply', 'last')
```

각 호출은 동일한 방식으로 최신 응답을 가져옵니다. 만약 잘 작동한다고 생각하신다면, 그렇게 하시면 될겁니다... 그러니 그냥 입력하세요!

그렇지 않은 경우 확장된 [사용자 가이드](https://github.com/KudoAI/chatgpt.js/blob/v3.9.0/docs/USERGUIDE.md)를 확인하거나 간단히 [문제](https://github.com/KudoAI/chatgpt.js/issues) 또는 [PR](https://github.com/KudoAI/chatgpt.js/pulls)을 주시면 통합될 것 입니다, 참 쉽죠!

<hr>

<div id="showcase">

## 🤖 chatgpt.js로 만들어진 프로젝트

</div>

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://amazongpt.kudoai.com/assets/images/icons/app/white/icon48.png"><img width=20 src="https://amazongpt.kudoai.com/assets/images/icons/app/black-gold-teal/icon48.png"></picture> [AmazonGPT](https://amazongpt.kudoai.com)  &nbsp;<a href="https://amazongpt.kudoai.com/assets/wolfram-award/letter.pdf" target="_blank" rel="noopener"><img height=20 src="https://amazongpt.kudoai.com/assets/images/badges/wolfram-award/gold-badge.png" style="margin:0 0 -2px 5px"></a>

> 최신 LLM 을 기반으로 Amazon 쇼핑에 AI 채팅 및 제품/카테고리 요약 기능을 추가하세요!
<br>[Install](https://raw.githubusercontent.com/KudoAI/amazongpt/main/greasemonkey/amazongpt.user.js) /
[Readme](https://amazongpt.kudoai.com/#readme) /
[Discuss](https://github.com/KudoAI/amazongpt/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.autoclearchatgpt.com/images/icons/openai/white/icon48.png?cece513"><img width=21 src="https://assets.autoclearchatgpt.com/images/icons/openai/black/icon48.png?cece513"></picture> [ChatGPT 히스토리 자동삭제](https://autoclearchatgpt.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://assets.autoclearchatgpt.com/images/badges/awesome/badge.svg?2c0d9fc" style="margin:0 0 -2px 5px"></a>

> 최대 개인정보를 위해 ChatGPT 쿼리 히스토리를 자동으로 지는 기능입니다.
<br>[설치](https://docs.autoclearchatgpt.com/#-installation) /
[리드미](https://docs.autoclearchatgpt.com/#readme) /
[토론](https://github.com/adamlui/autoclear-chatgpt-history/discussions)

### <img width=24 src="https://assets.bravegpt.com/images/icons/app/icon48.png"> [BraveGPT](https://bravegpt.com) &nbsp;<a href="https://www.producthunt.com/posts/bravegpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="auto" /></a>

> 최신 LLM 을 기반으로 Brave Search 에 AI 채팅 및 검색 요약 기능을 추가하세요!
<br>[설치](https://docs.bravegpt.com/#-installation) /
[리드미](https://docs.bravegpt.com/#readme) /
[토론](https://github.com/KudoAI/bravegpt/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautocontinue.com/images/icons/continue-symbol/white/icon48.png?v=61c4f16"><img width=21 src="https://assets.chatgptautocontinue.com/images/icons/continue-symbol/black/icon48.png?v=61c4f16"></picture> [ChatGPT 자동 진행 ⏩](https://chatgptautocontinue.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://assets.chatgptautocontinue.com/images/badges/awesome/badge.svg?3c80c0c" style="margin:0 0 -3px 3px"></a>

> ChatGPT 응답이 중단되면 자동으로 답변 생성을 계속합니다.
<br>[설치](https://docs.chatgptautocontinue.com/#-installation) /
[리드미](https://docs.chatgptautocontinue.com/#readme) /
[토론](https://github.com/adamlui/chatgpt-auto-continue/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/white/icon64.png"><img width=21 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/black/icon64.png"></picture> [ChatGPT 자동-토크 📣](https://github.com/adamlui/chatgpt-auto-talk)

> ChatGPT 응답을 자동 재생합니다.
<br>[Install](https://gm.chatgptautotalk.com) /
[Readme](https://github.com/adamlui/chatgpt-auto-talk#readme) /
[Discuss](https://github.com/adamlui/chatgpt-auto-talk/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautorefresh.com/images/icons/openai/white/icon48.png?a45cf1e"><img width=21 src="https://assets.chatgptautorefresh.com/images/icons/openai/black/icon48.png?a45cf1e"></picture> [ChatGPT 자동 새로고침 ↻](https://chatgptautorefresh.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://assets.chatgptautorefresh.com/images/badges/awesome/badge.svg?1080f44" style="margin:0 0 -2px 5px"></a>

> ChatGPT 세션을 최신 상태로 유지하여 채팅 시간 제한 + 네트워크 오류 + Cloudflare 검사를 제거합니다..
<br>[설치](https://docs.chatgptautorefresh.com/#-installation) /
[리드미](https://docs.chatgptautorefresh.com/#readme) /
[토론](https://github.com/adamlui/chatgpt-auto-refresh/discussions)

### <img width=23 src="https://assets.ddgpt.com/images/icons/app/icon48.png"> [DuckDuckGPT](https://duckduckgpt.com) &nbsp;<a href="https://www.producthunt.com/posts/duckduckgpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> D최신 LLM 을 기반으로 DuckDuckGo 에 AI 채팅 및 검색 요약 기능을 추가하세요!
<br>[설치](https://docs.ddgpt.com/#-installation) /
[리드미](https://docs.ddgpt.com/#readme) /
[토론](https://github.com/KudoAI/duckduckgpt/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/icons/app/white/icon48.png"><img width=21 src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/icons/app/black/icon48.png"></picture> [GoogleGPT](https://github.com/KudoAI/googlegpt/#readme) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt@e442863/assets/images/badges/awesome/badge.svg" style="margin:0 0 -2px 5px"></a>

> 최신 LLM 을 기반으로 Google Search 에 AI 채팅 및 검색 요약 기능을 추가하세요!
<br>[설치](https://raw.githubusercontent.com/KudoAI/googlegpt/refs/heads/main/greasemonkey/googlegpt.user.js) /
[리드미](https://github.com/KudoAI/googlegpt/#readme) /
[토론](https://github.com/KudoAI/googlegpt/discussions)

### <img width=23 src="https://assets.chatgptjs.org/images/icons/platforms/thunderbird/icon32.png?v=e638eac"> <a href="https://micz.it/thunderdbird-addon-thunderai/?utm_source=chatgpt.js-github&utm_medium=referral&utm_content=showcase-link" target="_blank" rel="noopener">ThunderAI</a> &nbsp;<a href="https://addons.thunderbird.net/thunderbird/addon/thunderai/reviews" target="_blank" rel="noopener"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/badges/5-star/blue-stars.png?v=e638eac"><img width=92 alt="[별점 5 개]" src="https://assets.chatgptjs.org/images/badges/5-star/yellow-stars-in-white-pill.png?v=e638eac"></picture></a>

> Thunderbird 에서 ChatGPT 를 사용하면 무료 계정으로도 이메일 기능을 향상할 수 있습니다!
<br>[설치](https://addons.thunderbird.net/thunderbird/addon/thunderai/) /
[리드미](https://github.com/micz/ThunderAI#readme) /
[지원하다](https://github.com/micz/ThunderAI/issues)

<p><br>

<a href="https://chatgptinfinity.com" target="_blank" rel="noopener">
    <img width=555 src="https://assets.chatgptinfinity.com/images/tiles/marquee/tile-1400x560.png?v=34b428b">
</a>

<p><br>

<a href="https://chatgptwidescreen.com/?utm_source=chatgpt.js-github&utm_medium=referral&utm_content=showcase-tile" target="_blank" rel="noopener">
    <img width=555 src="https://assets.chatgptwidescreen.com/images/tiles/marquee/tile-1400x560.png?v=4c5d018">
</a>

<p><br>

<p id="showcase-cta">
chatgpt.js 를 사용해 공유하고 싶은 프로젝트가 있다면, <a href="mailto:showcase@chatgptjs.org">showcase@chatgptjs.org</a> 로 이메일을 보내시거나 <a href="https://github.com/KudoAI/chatgpt.js/pulls" target="_blank" rel="noopener">pull request</a>를 열어주세요!
</p>

<hr>

## 🧠 기여자

<a href="https://github.com/KudoAI/chatgpt.js/graphs/contributors">
    <img height=111 width="auto" src="https://contrib.rocks/image?repo=KudoAI/chatgpt.js&anon=1&columns=16" /></a>
<br><br>

모든 기고를 환영합니다!

<img height=10px width="100%" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e638eac/assets/images/separators/gradient-aqua.png">

<div align="center">

**[릴리스](https://github.com/KudoAI/chatgpt.js/releases)** /
[사용자 가이드](https://github.com/KudoAI/chatgpt.js/blob/v3.9.0/docs/USERGUIDE.md) /
[토론](https://github.com/KudoAI/chatgpt.js/discussions) /
<a href="#top">상단으로 ↑</a>

</div>
