<div id="repo-cover" align="center">

<div align="center">

###### 한국어 | <a href="../..#readme">English</a> | <a href="../zh-cn#readme">简体中文</a> | <a href="../ja#readme">日本</a> | <a href="../hi#readme">हिंदी</a> | <a href="../de#readme">Deutsch</a> | <a href="../es#readme">Español</a> | <a href="../fr#readme">Français</a> | <a href="../it#readme">Italiano</a> | <a href="../nl#readme">Nederlands</a> | <a href="../pt#readme">Português</a>

</div>

<br>

<h3>

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
    <img width=700 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
</picture>
<br><br>

🤖 ChatGPT를 위한 강력한 클라이언트 사이드 자바스크립트 라이브러리

<br><br>

</div>
</h3>

<div align="center">

[![](https://img.shields.io/badge/라이센스-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/kudoai/chatgpt.js?label=커밋&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/kudoai/chatgpt.js/commits/main)
![](https://img.shields.io/github/size/kudoai/chatgpt.js/dist/chatgpt-2.0.1.min.js?label=압축된%20크기&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge)
[![](https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=코드+품질&logo=codefactor&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.codefactor.io/repository/github/kudoai/chatgpt.js)
[![](https://img.shields.io/badge/언급됨-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/sindresorhus/awesome-chatgpt#javascript)
[![](https://img.shields.io/badge/특집_소개-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.producthunt.com/posts/chatgpt-js)
![](https://img.shields.io/jsdelivr/gh/hw/kudoai/chatgpt.js?label=jsDelivr+Hits&logo=jsdelivr&logoColor=white&labelColor=464646&color=gold&style=for-the-badge)

</div>

## 개요

**chatgpt.js** 는 Chat GPT DOM과 매우 간편한 상호작용을 가능하게 하는 강력한 자바스크립트 라이브러리입니다.

- 풍부한 기능
- 객체지향
- 손쉬운 사용
- 경량화 (최적의 성능 제공)

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## ⚡ 라이브러리 호출


### ES6:

```js
(async () => {
  await import('https://code.chatgptjs.org/chatgpt-latest.min.js');
  // 코드를 여기에 작성해 주세요...

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
    yourCode(); // 당신의 코드를 작성해주세요 

  }
};
xhr.send();

function yourCode() {
  // 코드를 여기에 작성해 주세요...

}
```

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://i.imgur.com/SATGr8j.png"></picture><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://i.imgur.com/wcCg3al.png"> Greasemonkey:

> **참고** _스타터 템플릿을 사용하시려면: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/kudoai/chatgpt.js-greasemonkey-starter)_

Greasy Fork와 같은 사용자 스크립트 저장소는 미리 승인된 CDN(예: cdn.jsdelivr.net에서의 커밋별 참조)의 화이트리스트를 유지합니다. 따라서, 삽입된(import) URL은 길이가 상당히 길어지게 되는데, 이는 이러한 사이트의 게시를 보존하기 위함입니다.

```js
...
// @require https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@b9b8ac236a8795b56691bf3dc10a8a1a928d2e8f/dist/chatgpt-2.0.1.min.js
// ==/UserScript==

// 코드를 여기에 작성해 주세요...
```

만약 이러한 저장소(repo)에 게시하지 않으신다면, 더 간단한 `https://code.chatgptjs.org/chatgpt-latest.min.js` 를 대신 사용하여 가장 최근에 압축된 버전을 가져 올 수 있습니다.

### <img style="margin: 0 2px -1px 0" height=16 src="https://www.google.com/chrome/static/images/favicons/apple-icon-60x60.png"> Chrome:

> **참고** _스타터 템플릿을 사용하시려면: [kudoai/chatgpt.js-chrome-starter](https://github.com/kudoai/chatgpt.js-chrome-starter)_

Google은 Manifest V2에 대해 [점차적으로 폐지](https://developer.chrome.com/docs/extensions/migrating/mv2-sunset/)를 진행할 예정이기 떄문에, Manifest V2에서는 원격코드를 더 이상 허용하지 않을 것입니다. 따라서 chatgpt.js를 로컬에서 가져오는 것이 이상적입니다.

1. https://raw.githubusercontent.com/kudoai/chatgpt.js/main/chatgpt.js 를 하위 디렉토리에 저장합니다. (`lib` 이라고 가정)

2. `lib/chatgpt.js` 의 끝에 ES6 export 문을 추가합니다.

```js
...
export { chatgpt }
```

3. 프로젝트(V3)의 `manifest.json` 파일에, `lib/chatgpt.js`를 웹에서 접근가능한 리소스로 추가합니다.
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.js"]
    }],
```

4. `chatgpt.js` 를 필요로하는 스크립트 (전경/배경 같은) 에서는 다음과 같이 가져옵니다.
```js
(async () => {
  const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'));
  // 코드를 여기에 작성해 주세요...
})();
```

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 💻 사용법

**chatgpt.js** 는 유연성을 상당히 고려하여 작성되었습니다.

예시:

```js
chatgpt.getLastResponse();
chatgpt.getLastReply();
chatgpt.response.getLast();
chatgpt.get('reply', 'last');
```

각 호출은 동일한 방식으로 최신 응답을 가져옵니다. 만약 잘 작동한다고 생각하신다면, 그렇게 하시면 될겁니다... 그러니 그냥 입력하세요!

만약 동작이 잘 안되신다면, 간단하게 [이슈](https://github.com/kudoai/chatgpt.js/issues)를 열거나 [PR](https://github.com/kudoai/chatgpt.js/pulls)을 주시면 통합될 것 입니다, 참 쉽죠!

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 🤖 chatgpt.js로 만들어진 프로젝트

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ChatGPT 히스토리 자동삭제](https://chatgptevo.com/autoclear) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

최대 개인정보를 위해 ChatGPT 쿼리 히스토리를 자동으로 지는 기능입니다.
<br>[설치](https://github.com/adamlui/autoclear-chatgpt-history#installation) /
[리드미](https://github.com/adamlui/autoclear-chatgpt-history#readme) /
[토론](https://github.com/adamlui/autoclear-chatgpt-history/discussions)

### <img width=16 src="https://i.imgur.com/1yjmK3W.png"> [ChatGPT DAN 자동화](https://github.com/madkarmaa/automatic-chatgpt-dan)

ChatGPT에 자동으로 DAN 프롬프트를 전송하는 기능입니다.
<br>[설치](https://github.com/madkarmaa/automatic-chatgpt-dan#%EF%B8%8F-installation) /
[리드미](https://github.com/madkarmaa/automatic-chatgpt-dan#readme) /
[토론](https://github.com/madkarmaa/automatic-chatgpt-dan/issues)

### <img src="https://media.bravegpt.com/images/bravegpt-icon48.png" width=18> [BraveGPT](https://bravegpt.com) <a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Brave Search 사이드바에 ChatGPT의 답변을 표시해주는 기능입니다. (GPT-4 기반)
<br>[설치](https://github.bravegpt.com/#installation) /
[리드미](https://github.bravegpt.com/#readme) /
[토론](https://github.bravegpt.com/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT 자동 진행 ⏩](https://chatgptevo.com/autocontinue/github) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -3px 3px"></a>

자동으로 여러 개의 ChatGPT 응답을 계속해서 생성하는 기능입니다.<br>
[설치](https://github.com/adamlui/chatgpt-auto-continue#installation) /
[리드미](https://github.com/adamlui/chatgpt-auto-continue#readme) /
[토론](https://chatgptevo.com/autocontinue/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ChatGPT 자동 새로고침 ↻](https://chatgptevo.com/autorefresh) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

Cloudflare확인과 네트워크 오류를 제거 하기 위해 ChatGPT세션을 유지하는 기능입니다.
<br>[설치](https://github.com/adamlui/chatgpt-auto-refresh#installation) /
[리드미](https://github.com/adamlui/chatgpt-auto-refresh#readme) /
[토론](https://github.com/adamlui/chatgpt-auto-refresh/discussions)

### <img src="https://media.duckduckgpt.com/images/ddgpt-icon48.png" width=17> [DuckDuckGPT](https://duckduckgpt.com) <a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

DuckDuckGo 사이드바에 ChatGPT의 답변을 표시해주는 기능입니다. (GPT-4 기반)
<br>[설치](https://github.duckduckgpt.com/#installation) /
[리드미](https://github.duckduckgpt.com/#readme) /
[토론](https://github.duckduckgpt.com/discussions)


<br>

<a href="https://chatgptinfinity.com" target="_blank"><img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-infinity/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png"></a>

<br>

<a href="https://chatgptwidescreen.com" target="_blank"><img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png"></a>

<br>

chatgpt.js 를 사용해 공유하고 싶은 프로젝트가 있다면, [showcase@chatgptjs.org](mailto:showcase@chatgptjs.org) 로 이메일을 보내시거나 [pull request](https://github.com/kudoai/chatgpt.js/pulls)를 열어주세요!


<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 🧠 기여자

이 라이브러리는 다음 기여자들의 코드, 번역, 이슈 및 아이디어 덕분에 존재합니다.


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

<br>_도움이 되셨다면 이 저장소(Repo)에 ⭐을 주세요_


</div>

#

<a href="https://github.com/kudoai/chatgpt.js/tree/main/dist">**릴리즈**</a> /
<a href="https://github.com/kudoai/chatgpt.js/discussions">토론</a> /
<a href="#">상단으로 ↑</a>
