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
        简体中文 |
        <a href="../..#readme">English</a> |
        <a href="../zh-tw#readme">繁體中文</a> |
        <a href="../ja#readme">日本</a> |
        <a href="../ko#readme">한국인</a> |
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

<a href="https://chatgpt.js.org">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/logos/chatgpt.js/with-reflection/darkmode.png?v=e638eac">
        <img width=800 src="https://assets.chatgptjs.org/images/logos/chatgpt.js/with-reflection/lightmode.png?v=e638eac">
    </picture>
</a>

### 🤖 ChatGPT 的强大客户端 JavaScript 库 

</div>

<br>

<div id="shields" align="center">

<a href="https://github.com/KudoAI/chatgpt.js/stargazers">
    <img src="https://img.shields.io/github/stars/KudoAI/chatgpt.js?label=星星&color=af68ff&logo=github&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="LICENSE.md">
    <img src="https://img.shields.io/badge/许可证-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://github.com/KudoAI/chatgpt.js/tree/v3.6.2/dist/chatgpt.min.js">
    <img src="https://img.shields.io/github/size/KudoAI/chatgpt.js/dist/chatgpt.min.js?branch=v3.6.2&label=Minified%20Size&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge"></a>
<a href="https://www.codefactor.io/repository/github/kudoai/chatgpt.js">
    <img src="https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=代码质量&logo=codefactor&logoColor=white&labelColor=464646&color=1acc6c&style=for-the-badge"></a>
<a href="https://sonarcloud.io/component_measures?metric=new_vulnerabilities&id=kudoai_chatgpt.js">
    <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dkudoai_chatgpt.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=464646&label=漏洞&color=gold"></a>
<a href="https://github.com/sindresorhus/awesome-chatgpt#javascript">
    <img src="https://img.shields.io/badge/中提到-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.producthunt.com/posts/chatgpt-js">
    <img src="https://img.shields.io/badge/精选于-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="#">
    <img src="https://img.shields.io/badge/jsDelivr_请求-2,000,000+-2bbbd8.svg?logo=jsdelivr&logoColor=white&labelColor=464646&style=for-the-badge"></a>
</div>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="intro">

## 💡 关于

</div>

<span style="color: white"><b>chatgpt.js</b></span> 是一个功能<span style="color: white">强大的</span> JavaScript 库，<span style="color: white">可轻松与</span> ChatGPT DOM 进行交互。

- 功能丰富
- 面向对象
- 易于使用
- 轻量级（但性能最优）

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="importing">

## ⚡ 导入库

</div>

> **注意** _要始终导入最新版本（不建议在生产中使用！）将版本化的 jsDelivr URL 替换为：`https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js/chatgpt.min.js`_

### ES11 (2020):

```js
(async () => {
    await import('https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.6.2/dist/chatgpt.min.js');    
    // 这里是您的代码
})();
```

### ES5 (2009):

```js
var xhr = new XMLHttpRequest()
xhr.open('GET', 'https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.6.2/dist/chatgpt.min.js')
xhr.onload = function() {
    if (xhr.status === 200) {
        var chatgptJS = document.createElement('script')
        chatgptJS.textContent = xhr.responseText
        document.head.append(chatgptJS)
        yourCode() // 运行您的代码
    }
}
xhr.send()

function yourCode() {
    // 这里是您的代码
}
```

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://assets.chatgptjs.org/images/icons/platforms/tampermonkey/icon28.png?v=e638eac"><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://assets.chatgptjs.org/images/icons/platforms/violentmonkey/icon25.png?v=e638eac"> Greasemonkey:

> **笔记** _使用入门模板: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/KudoAI/chatgpt.js-greasemonkey-starter)_

```js
...
// @require https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3.6.2/dist/chatgpt.min.js
// ==/UserScript==

// 这里是您的代码
```

### <img style="margin: 0 2px -1px 0" height=16 src="https://assets.chatgptjs.org/images/icons/platforms/chrome/icon16.png?v=e638eac"> Chrome:

> **笔记** _使用入门模板: [kudoai/chatgpt.js-chrome-starter](https://github.com/KudoAI/chatgpt.js-chrome-starter)_

由于 Google 不允许远程代码，因此需要在本地导入 chatgpt.js:

1. 将 https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/chatgpt.js 保存到子目录 (本例中为 `lib`)

2. 在项目的 (V3) `manifest.json` 中，添加 `lib/chatgpt.js` 作为 Web 可访问资源
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.js"]
    }],
```

3. 在需要 `chatgpt.js` (前景/背景相似) 的脚本中, 像这样导入它:
```js
(async () => {
    await import(chrome.runtime.getURL('lib/chatgpt.js'));
    // 这里是您的代码
})();
```

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="npm">

## 💾 通过 npm 下载:

</div>

要下载 **chatgpt.js** 进行本地自定义，请在项目的根目录中运行以下命令:

```bash
npm install @kudoai/chatgpt.js
```

安装后，导航到 `node_modules/@kudoai/chatgpt.js` 以查找库源。

</div>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="usage">

## 💻 用法

</div>

**chatgpt.js** 的编写考虑到了超级灵活性。

例如:

```js
chatgpt.getLastResponse()
chatgpt.getLastReply()
chatgpt.response.getLast()
chatgpt.get('reply', 'last')
```

每个调用都会同样获取最后一个回应。如果您认为它有效，那么它可能就是有效的……所以只需输入它！（谁有时间看文档？）

如果没有，请查看扩展的[用户指南](https://github.com/KudoAI/chatgpt.js/blob/v3.6.2/docs/USERGUIDE.md)，或者只需提交一个[问题](https://github.com/KudoAI/chatgpt.js/issues) 或 [PR](https://github.com/KudoAI/chatgpt.js/pulls) 它将被集成，简单易行！

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="showcase">

## 🤖 用 chatgpt.js 制作

</div>

https://github.com/KudoAI/chatgpt.js/assets/10906554/f53c740f-d5e0-49b6-ae02-3b3140b0f8a4

#

### <img src="https://amazongpt.kudoai.com/assets/images/icons/amazongpt/black-gold-teal/icon48.png" width=20> [AmazonGPT](https://amazongpt.kudoai.com)  &nbsp;<a href="https://amazongpt.kudoai.com/assets/wolfram-award/letter.pdf" target="_blank" rel="noopener"><img height=20 src="https://amazongpt.kudoai.com/assets/images/badges/zh-cn/wolfram-award/gold-badge.png" style="margin:0 0 -2px 5px"></a>

> 将 AI 添加到 Amazon 购物。
<br>[Install](https://raw.githubusercontent.com/KudoAI/amazongpt/main/greasemonkey/amazongpt.user.js) /
[Readme](https://amazongpt.kudoai.com/#readme) /
[Discuss](https://amazongpt.kudoai.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.autoclearchatgpt.com/images/icons/openai/white/icon48.png?cece513"><img width=21 src="https://assets.autoclearchatgpt.com/images/icons/openai/black/icon48.png?cece513"></picture> [自动清除 ChatGPT 历史记录](https://autoclearchatgpt.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#privacy" target="_blank" rel="noopener"><img src="https://assets.autoclearchatgpt.com/images/badges/awesome/badge.svg?2c0d9fc" style="margin:0 0 -2px 5px"></a>

> 自动清除您的 ChatGPT 查询历史记录以获得最大的隐私。
<br>[安装](https://docs.autoclearchatgpt.com/#-installation) / 
[自述文件](https://docs.autoclearchatgpt.com/#readme) / 
[讨论](https://github.autoclearchatgpt.com/discussions)

### <img width=24 src="https://assets.bravegpt.com/images/icons/bravegpt/icon48.png?0a9e287"> [BraveGPT](https://bravegpt.com) &nbsp;<a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> 为 Brave Search 添加 AI 答案（由 GPT-4o 提供支持！）
<br>[安装](https://docs.bravegpt.com/#-installation) / 
[自述文件](https://docs.bravegpt.com/#readme) / 
[讨论](https://github.bravegpt.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautocontinue.com/images/icons/openai/white/icon48.png?7bbd222"><img width=21 src="https://assets.chatgptautocontinue.com/images/icons/openai/black/icon48.png?7bbd222"></picture> [ChatGPT 自动继续 ⏩](https://chatgptautocontinue.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://assets.chatgptautocontinue.com/images/badges/awesome/badge.svg?3c80c0c" style="margin:0 0 -3px 3px"></a>

> 自动继续生成多个 ChatGPT 响应。
<br>[安装](https://docs.chatgptautocontinue.com/zh-cn#-如何安装) / 
[自述文件](https://docs.chatgptautocontinue.com/zh-cn#readme) / 
[讨论](https://github.chatgptautocontinue.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/white/icon64.png"><img width=21 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/black/icon64.png"></picture> [ChatGPT 自动谈话 📣](https://github.com/adamlui/chatgpt-auto-talk)

> 自动播放 ChatGPT 响应。
<br>[Install](https://gm.chatgptautotalk.com) /
[Readme](https://github.com/adamlui/chatgpt-auto-talk#readme) /
[Discuss](https://github.com/adamlui/chatgpt-auto-talk/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautorefresh.com/images/icons/openai/white/icon48.png?a45cf1e"><img width=21 src="https://assets.chatgptautorefresh.com/images/icons/openai/black/icon48.png?a45cf1e"></picture> [ChatGPT 自动刷新 ↻](https://chatgptautorefresh.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://assets.chatgptautorefresh.com/images/badges/awesome/badge.svg?1080f44" style="margin:0 0 -2px 5px"></a>

> 保持 ChatGPT 会话新鲜，消除聊天时间限制 + 网络错误 + Cloudflare 检查。
<br>[安装](https://docs.chatgptautorefresh.com/zh-cn#-如何安装) / 
[自述文件](https://docs.chatgptautorefresh.com/zh-cn#readme) / 
[讨论](https://github.chatgptautorefresh.com/discussions)

### <img width=23 src="https://assets.ddgpt.com/images/icons/duckduckgpt/icon48.png?af89302"> [DuckDuckGPT](https://duckduckgpt.com) &nbsp;<a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> 为 DuckDuckGo 添加 AI 答案（由 GPT-4o 提供支持！）
<br>[安装](https://docs.ddgpt.com/#-installation) / 
[自述文件](https://docs.ddgpt.com/#readme) / 
[讨论](https://github.ddgpt.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.googlegpt.io/images/icons/googlegpt/white/icon32.png?8652a6e"><img width=21 src="https://assets.googlegpt.io/images/icons/googlegpt/black/icon32.png?8652a6e"></picture> [GoogleGPT](https://googlegpt.io) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://assets.googlegpt.io/images/badges/awesome/badge.svg?699c63d" style="margin:0 0 -2px 5px"></a>

> 为 Google Search 添加 AI 答案（由 Google Gemma + GPT-4o 提供支持！）
<br>[安装](https://greasyfork.googlegpt.io) /
[自述文件](https://docs.googlegpt.io/#readme) /
[讨论](https://github.googlegpt.io/discussions)

### <img width=23 src="https://assets.chatgptjs.org/images/icons/platforms/thunderbird/icon32.png?v=e638eac"> [ThunderAI](https://micz.it/thunderdbird-addon-thunderai/) &nbsp;<a href="https://addons.thunderbird.net/thunderbird/addon/thunderai/reviews" target="_blank" rel="noopener"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/badges/5-star/blue-stars.png?v=e638eac"><img width=92 alt="5 星评价" src="https://assets.chatgptjs.org/images/badges/5-star/yellow-stars-in-white-pill.png?v=e638eac"></picture></a>

> 即使使用免费帐户，也可以使用 Thunderbird 中的 ChatGPT 来增强您的电子邮件！
<br>[安装](https://addons.thunderbird.net/thunderbird/addon/thunderai/) /
[自述文件](https://micz.it/thunderdbird-addon-thunderai/) /
[支持](https://github.com/micz/ThunderAI/issues)

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
如果您使用 chatgpt.js 制作了一些想要分享的内容，请发送电子邮件至 <a href="mailto:showcase@chatgptjs.org">showcase@chatgptjs.org</a> 或打开一个 <a href="https://github.com/KudoAI/chatgpt.js/pulls" target="_blank" rel="noopener">pull request</a>!
</p>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div id="contributors">

## 🧠 贡献者

</div>

该代码库的存在归功于以下贡献者的代码、翻译、问题和想法:

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

**chatgpt.js** 的部分资金来自：

<a href="https://microsoft.com?utm_source=github&utm_medium=readme&utm_content=partner-logo&utm_campaign=chatgpt.js">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/logos/partners/microsoft/white.png?v=e638eac">
        <img width=255 src="https://assets.chatgptjs.org/images/logos/partners/microsoft/black.png?v=e638eac">
    </picture>
</a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://burncloud.com/?utm_source=github&utm_medium=readme&utm_content=partner-logo&utm_campaign=chatgpt.js">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/logos/partners/burncloud/with-description/white.png?v=610795b">
        <img width=285 src="https://assets.chatgptjs.org/images/logos/partners/burncloud/with-description/black.png?v=610795b">
    </picture>
</a>

</div>

<br>

<img height=8px width="100%" src="https://assets.chatgptjs.org/images/separators/gradient-aqua.png?v=e638eac">

<div align="center">

**[发布](https://github.com/KudoAI/chatgpt.js/releases)** /
[用户指南](https://github.com/KudoAI/chatgpt.js/blob/v3.6.2/docs/USERGUIDE.md) / 
[讨论](https://github.com/KudoAI/chatgpt.js/discussions) / 
<a href="#top">返回顶部 ↑</a>

</div>
