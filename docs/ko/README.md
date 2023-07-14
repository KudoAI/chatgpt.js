<div id="repo-cover" align="center">

<div align="right">

###### 한국인 | <a href="../..#readme">English</a> | <a href="../zh-cn#readme">简体中文</a> | <a href="../ja#readme">日本</a> | <a href="../hi#readme">हिंदी</a> | <a href="../de#readme">Deutsch</a> | <a href="../es#readme">Español</a> | <a href="../fr#readme">Français</a> | <a href="../it#readme">Italiano</a> | <a href="../pt#readme">Português</a>

</div>

<br>

<h3>

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
    <img width=700 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
</picture>
<br><br>

🤖 ChatGPT 를 위한 강력한 클라이언트 측 JavaScript 라이브러리
<br><br>

</div>
</h3>

<div align="center">

[![](https://img.shields.io/badge/특허-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/kudoai/chatgpt.js?label=커밋&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/kudoai/chatgpt.js/commits/main)
![](https://img.shields.io/github/size/kudoai/chatgpt.js/dist/chatgpt-1.12.0.min.js?label=축소된+크기&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge)
[![](https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=코드+품질&logo=codefactor&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.codefactor.io/repository/github/kudoai/chatgpt.js)
[![](https://img.shields.io/badge/에서_언급-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/sindresorhus/awesome-chatgpt#javascript)
[![](https://img.shields.io/badge/특집-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.producthunt.com/posts/chatgpt-js)
![](https://img.shields.io/jsdelivr/gh/hw/kudoai/chatgpt.js?label=jsDelivr+조회수&logo=jsdelivr&logoColor=white&labelColor=464646&color=gold&style=for-the-badge)

</div>

## 에 대한

**chatgpt.js**는 ChatGPT DOM과 매우 쉽게 상호 작용할 수 있는 강력한 JavaScript 라이브러리입니다.

- 풍부한 기능
- 객체 지향
- 사용하기 쉬운
- 경량(최적의 성능)

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## ⚡ 라이브러리 가져오기

### ES6:

```js
(async () => {
  await import('https://code.chatgptjs.org/chatgpt-latest.min.js');
  // 여기 코드...
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
    yourCode(); // 코드 실행
  }
};
xhr.send();

function yourCode() {
  // 여기 코드...
}
```

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://i.imgur.com/SATGr8j.png"></picture><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://i.imgur.com/wcCg3al.png"> Greasemonkey:

> **참고** _스타터 템플릿을 사용하려면: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/kudoai/chatgpt.js-greasemonkey-starter)_

Greasy Fork 와 같은 사용자 스크립트 리포지토리는 사전 승인된 CDN 의 화이트리스트(예: `cdn.jsdelivr.net`의 커밋 관련 참조)를 유지하므로 가져오기 URL 이 다음 사이트에 게시 가능성을 유지하기 위해 훨씬 더 깁니다:

```js
...
// @require https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@24a755998291094d0cd3b2bd395dff7c6756bbf9/dist/chatgpt-1.12.0.min.js
// ==/UserScript==

// 여기 코드...
```

이러한 리포지토리에 게시할 계획이 없다면 더 간단한 `https://code.chatgptjs.org/chatgpt-latest.min.js` 를 대신 사용하여 최신 축소 릴리스를 가져올 수 있습니다.

### <img style="margin: 0 2px -1px 0" height=16 src="https://www.google.com/chrome/static/images/favicons/apple-icon-60x60.png"> Chrome:

> **참고** _스타터 템플릿을 사용하려면: [kudoai/chatgpt.js-chrome-starter](https://github.com/kudoai/chatgpt.js-chrome-starter)_

Google 이 [결국 단계적으로 중단](https://developer.chrome.com/docs/extensions/migrating/mv2-sunset/) Manifest V2 하므로 원격 코드가 더 이상 허용되지 않으므로 chatgpt.js 를 로컬로 가져오는 것이 이상적입니다:

1. https://raw.githubusercontent.com/kudoai/chatgpt.js/main/chatgpt.js 하위 디렉토리(이 예에서는 `lib`)에 저장합니다

2. `lib/chatgpt.js` 끝에 ES6 내보내기 문 추가
```js
...
export { chatgpt }
```

3. 프로젝트 (V3) `manifest.json` 에서 `lib/chatgpt.js` 를 웹 액세스 가능 리소스로 추가합니다
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.js"]
    }],
```

4. `chatgpt.js` (포그라운드/백그라운드 유사) 가 필요한 스크립트에서 다음과 같이 가져옵니다:
```js
(async () => {
  const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'));
  // 여기 코드...
})();
```

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 💻 용법

**chatgpt.js**는 극도의 유연성을 염두에 두고 작성되었습니다.

예를 들어:

```js
chatgpt.getLastResponse();
chatgpt.getLastReply();
chatgpt.response.getLast();
chatgpt.get('reply', 'last');
```

각 호출은 동일하게 마지막 응답을 가져옵니다. 작동한다고 생각되면 아마 작동할 것입니다... 그러니 그냥 입력하세요!

그렇지 않은 경우 [이슈](https://github.com/kudoai/chatgpt.js/issues) 또는 [PR](https://github.com/kudoai/chatgpt.js/pulls) 을 제출하세요. 그리고 그것은 통합될 것입니다, 쉬워요!

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 🤖 chatgpt.js 로 제작

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ChatGPT 기록 지우기](https://chatgptevo.com/autoclear) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

최대한의 개인 정보 보호를 위해 ChatGPT 쿼리 기록을 자동으로 지웁니다.
<br>[설치하다](https://github.com/adamlui/autoclear-chatgpt-history#installation) /
[읽어보기](https://github.com/adamlui/autoclear-chatgpt-history#readme) /
[논의하다](https://github.com/adamlui/autoclear-chatgpt-history/discussions)

### <img width=16 src="https://i.imgur.com/1yjmK3W.png"> [Automatic ChatGPT DAN](https://github.com/madkarmaa/automatic-chatgpt-dan)

ChatGPT 에 DAN 프롬프트를 자동으로 보냅니다.
<br>[설치하다](https://github.com/madkarmaa/automatic-chatgpt-dan#%EF%B8%8F-installation) /
[읽어보기](https://github.com/madkarmaa/automatic-chatgpt-dan#readme) /
[논의하다](https://github.com/madkarmaa/automatic-chatgpt-dan/issues)

### <img src="https://media.bravegpt.com/images/bravegpt-icon48.png" width=18> [BraveGPT](https://bravegpt.com) <a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Brave Search 사이드바에 ChatGPT 답변 표시 (GPT-4 제공!)
<br>[설치하다](https://github.bravegpt.com/#installation) /
[읽어보기](https://github.bravegpt.com/#readme) /
[논의하다](https://github.bravegpt.com/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT 자동 계속 ⏩](https://chatgptevo.com/autocontinue/github) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -3px 3px"></a>

ChatGPT 응답을 자동으로 계속 생성하세요.<br>
[설치하다](https://github.com/adamlui/chatgpt-auto-continue#installation) /
[읽어보기](https://github.com/adamlui/chatgpt-auto-continue#readme) /
[논의하다](https://chatgptevo.com/autocontinue/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ChatGPT 자동 새로 고침 ↻](https://chatgptevo.com/autorefresh) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

네트워크 오류 + Cloudflare 검사를 제거하기 위해 ChatGPT 세션을 최신 상태로 유지합니다.
<br>[설치하다](https://github.com/adamlui/chatgpt-auto-refresh#installation) /
[읽어보기](https://github.com/adamlui/chatgpt-auto-refresh#readme) /
[논의하다](https://github.com/adamlui/chatgpt-auto-refresh/discussions)

### <img src="https://media.duckduckgpt.com/images/ddgpt-icon48.png" width=17> [DuckDuckGPT](https://duckduckgpt.com) <a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

DuckDuckGo 사이드바에 ChatGPT 답변 표시(GPT-4 제공!)
<br>[설치하다](https://github.duckduckgpt.com/#installation) /
[읽어보기](https://github.duckduckgpt.com/#readme) /
[논의하다](https://github.duckduckgpt.com/discussions)

<br>

<a href="https://chatgptinfinity.com" target="_blank"><img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-infinity/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png"></a>

<br>

<a href="https://chatgptwidescreen.com" target="_blank"><img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png"></a>

<br>

공유하고 싶은 것을 chatgpt.js 로 만들었다면 [showcase@chatgptjs.org](mailto:showcase@chatgptjs.org) 로 이메일을 보내거나 [풀 요청](https://github.com/kudoai/chatgpt.js/pulls)!

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 🧠 기여자

이 라이브러리는 다음 기여자의 코드, 번역, 문제 및 아이디어 덕분에 존재합니다:

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

<br>_도움이 되었다면 이 리포지토리에 ⭐를 주는 것을 고려해보세요!_

</div>

#

<a href="https://github.com/kudoai/chatgpt.js/tree/main/dist">**릴리스**</a> /
<a href="https://github.com/kudoai/chatgpt.js/discussions">논의하다</a> /
<a href="#">맨 위로 ↑</a>
