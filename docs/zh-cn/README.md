<div id="repo-cover" align="center">

<div align="center">
    <h6>
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs">
            <picture>
                <source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptjs.org/images/icons/earth-americas-white-padded-icon17x15.svg?714b6a1">
                <img src="https://media.chatgptjs.org/images/icons/earth-americas-padded-icon17x15.svg?714b6a1">
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
        <a href="../vi#readme">Việt</a>
    </h6>
</div>

<br>

<a href="https://chatgpt.js.org">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptjs.org/images/logos/chatgpt.js/with-reflection/darkmode.png?bc68d0c">
        <img width=800 src="https://media.chatgptjs.org/images/logos/chatgpt.js/with-reflection/lightmode.png?bc68d0c">
    </picture>
</a>

### 🤖 ChatGPT 的强大客户端 JavaScript 库 

</div>

<br>

<div id="shields" align="center">

[![](https://img.shields.io/github/stars/KudoAI/chatgpt.js?label=星星&color=af68ff&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/KudoAI/chatgpt.js/stargazers)
[![](https://img.shields.io/badge/许可证-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/KudoAI/chatgpt.js?label=提交&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/KudoAI/chatgpt.js/commits/main)
![](https://img.shields.io/badge/克隆-2K/月-869da0?logo=github&logoColor=white&labelColor=464646&style=for-the-badge)
[![](https://img.shields.io/github/size/KudoAI/chatgpt.js/dist/chatgpt.min.js?branch=v2.9.3&label=Minified%20Size&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge)](https://github.com/KudoAI/chatgpt.js/tree/v2.9.3/dist/chatgpt.min.js)
[![](https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=代码质量&logo=codefactor&logoColor=white&labelColor=464646&color=1acc6c&style=for-the-badge)](https://www.codefactor.io/repository/github/kudoai/chatgpt.js)
[![](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dkudoai_chatgpt.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=464646&label=漏洞&color=gold)](https://sonarcloud.io/component_measures?metric=new_vulnerabilities&id=kudoai_chatgpt.js)
[![](https://img.shields.io/badge/中提到-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/sindresorhus/awesome-chatgpt#javascript)
[![](https://img.shields.io/badge/精选于-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.producthunt.com/posts/chatgpt-js)
![](https://img.shields.io/badge/jsDelivr_请求-1,500,000+-2bbbd8.svg?logo=jsdelivr&logoColor=white&labelColor=464646&style=for-the-badge)
</div>

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="intro">

## 💡 关于

</div>

<span style="color: white">chatgpt.js</span> 是一个功能<span style="color: white">强大的</span> JavaScript 库，<span style="color: white">可轻松与</span> ChatGPT DOM 进行交互。

- 功能丰富
- 面向对象
- 易于使用
- 轻量级（但性能最优）

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="importing">

## ⚡ 导入库

</div>

> **注意** _要始终导入最新版本（不建议在生产中使用！）将版本化的 jsDelivr URL 替换为：`https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js/chatgpt.min.js`_

### ES6:

```js
(async () => {
    await import('https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@2.9.3/dist/chatgpt.min.js');    
    // 这里是您的代码
})();
```

### ES5:

```js
var xhr = new XMLHttpRequest()
xhr.open('GET', 'https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@2.9.3/dist/chatgpt.min.js')
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

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://media.chatgptjs.org/images/icons/platforms/tampermonkey/icon28.png?a3e53bf7"><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://media.chatgptjs.org/images/icons/platforms/violentmonkey/icon25.png?a3e53bf7"> Greasemonkey:

> **笔记** _使用入门模板: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/KudoAI/chatgpt.js-greasemonkey-starter)_

```js
...
// @require https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@2.9.3/dist/chatgpt.min.js
// ==/UserScript==

// 这里是您的代码
```

### <img style="margin: 0 2px -1px 0" height=16 src="https://media.chatgptjs.org/images/icons/platforms/chrome/icon16.png?8c852fa5"> Chrome:

> **笔记** _使用入门模板: [kudoai/chatgpt.js-chrome-starter](https://github.com/KudoAI/chatgpt.js-chrome-starter)_

由于 Google 不允许远程代码，因此需要在本地导入 chatgpt.js:

1. 将 https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/chatgpt.js 保存到子目录 (本例中为 `lib`)

2. 将 ES6 导出语句添加到 `lib/chatgpt.js` 的末尾
```js
...
export { chatgpt }
```

3. 在项目的 (V3) `manifest.json` 中，添加 `lib/chatgpt.js` 作为 Web 可访问资源
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.js"]
    }],
```

4. 在需要 `chatgpt.js` (前景/背景相似) 的脚本中, 像这样导入它:
```js
(async () => {
    const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'));
    // 这里是您的代码
})();
```

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="npm">

## 💾 通过 npm 下载:

</div>

要下载 **chatgpt.js** 进行本地自定义，请在项目的根目录中运行以下命令:

```bash
npm install @kudoai/chatgpt.js
```

安装后，导航到 `node_modules/@kudoai/chatgpt.js` 以查找库源。

</div>

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

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

如果没有，请查看扩展的[用户指南](https://github.com/KudoAI/chatgpt.js/blob/v2.9.3/docs/USERGUIDE.md)，或者只需提交一个[问题](https://github.com/KudoAI/chatgpt.js/issues) 或 [PR](https://github.com/KudoAI/chatgpt.js/pulls) 它将被集成，简单易行！

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="showcase">

## 🤖 用 chatgpt.js 制作

</div>

https://github.com/KudoAI/chatgpt.js/assets/10906554/f53c740f-d5e0-49b6-ae02-3b3140b0f8a4

#

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.autoclearchatgpt.com/images/icons/openai/white/icon48.png?cece513"><img width=21 src="https://media.autoclearchatgpt.com/images/icons/openai/black/icon48.png?cece513"></picture> [自动清除 ChatGPT 历史记录](https://autoclearchatgpt.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#privacy" target="_blank" rel="noopener"><img src="https://media.autoclearchatgpt.com/images/badges/awesome/badge.svg?2c0d9fc" style="margin:0 0 -2px 5px"></a>

> 自动清除您的 ChatGPT 查询历史记录以获得最大的隐私。
<br>[安装](https://docs.autoclearchatgpt.com/#-installation) / 
[自述文件](https://docs.autoclearchatgpt.com/#readme) / 
[讨论](https://github.autoclearchatgpt.com/discussions)

### <img width=24 src="https://media.bravegpt.com/images/icons/bravegpt/icon48.png?0a9e287"> [BraveGPT](https://bravegpt.com) &nbsp;<a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> 在 Brave Search 侧边栏中显示 ChatGPT 答案 (由 GPT-4o 驱动!)
<br>[安装](https://docs.bravegpt.com/#-installation) / 
[自述文件](https://docs.bravegpt.com/#readme) / 
[讨论](https://github.bravegpt.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptautocontinue.com/images/icons/openai/white/icon48.png?7bbd222"><img width=21 src="https://media.chatgptautocontinue.com/images/icons/openai/black/icon48.png?7bbd222"></picture> [ChatGPT 自动继续 ⏩](https://chatgptautocontinue.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://media.chatgptautocontinue.com/images/badges/awesome/badge.svg?3c80c0c" style="margin:0 0 -3px 3px"></a>

> 自动继续生成多个 ChatGPT 响应。
<br>[安装](https://docs.chatgptautocontinue.com/zh-cn#-如何安装) / 
[自述文件](https://docs.chatgptautocontinue.com/zh-cn#readme) / 
[讨论](https://github.chatgptautocontinue.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptautorefresh.com/images/icons/openai/white/icon48.png?a45cf1e"><img width=21 src="https://media.chatgptautorefresh.com/images/icons/openai/black/icon48.png?a45cf1e"></picture> [ChatGPT 自动刷新 ↻](https://chatgptautorefresh.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://media.chatgptautorefresh.com/images/badges/awesome/badge.svg?1080f44" style="margin:0 0 -2px 5px"></a>

> 保持 ChatGPT 会话新鲜，消除聊天时间限制 + 网络错误 + Cloudflare 检查。
<br>[安装](https://docs.chatgptautorefresh.com/zh-cn#-如何安装) / 
[自述文件](https://docs.chatgptautorefresh.com/zh-cn#readme) / 
[讨论](https://github.chatgptautorefresh.com/discussions)

### <img width=23 src="https://media.ddgpt.com/images/icons/duckduckgpt/icon48.png?af89302"> [DuckDuckGPT](https://duckduckgpt.com) &nbsp;<a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> 在 DuckDuckGo 侧边栏中显示 ChatGPT 答案 (由 GPT-4o 驱动!)
<br>[安装](https://docs.ddgpt.com/#-installation) / 
[自述文件](https://docs.ddgpt.com/#readme) / 
[讨论](https://github.ddgpt.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.googlegpt.io/images/icons/googlegpt/white/icon32.png?8652a6e"><img width=21 src="https://media.googlegpt.io/images/icons/googlegpt/black/icon32.png?8652a6e"></picture> [GoogleGPT](https://googlegpt.io) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://media.googlegpt.io/images/badges/awesome/badge.svg?699c63d" style="margin:0 0 -2px 5px"></a>

> 在 Google Search 侧边栏中显示 ChatGPT 答案 (由 GPT-4o + Google Gemma 驱动!)
<br>[安装](https://greasyfork.org/scripts/478597-googlegpt) /
[自述文件](https://docs.googlegpt.io/#readme) /
[讨论](https://github.googlegpt.io/discussions)

### <img width=23 src="https://media.chatgptjs.org/images/icons/platforms/thunderbird/icon32.png?313a9c5"> [ThunderAI](https://micz.it/thunderdbird-addon-thunderai/)

> 即使使用免费帐户，也可以使用 Thunderbird 中的 ChatGPT 来增强您的电子邮件！
<br>[安装](https://addons.thunderbird.net/thunderbird/addon/thunderai/) /
[自述文件](https://micz.it/thunderdbird-addon-thunderai/) /
[支持](https://github.com/micz/ThunderAI/issues)

<p><br>

<a href="https://chatgptinfinity.com" target="_blank" rel="noopener">
    <img width=555 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-infinity@0f48c4e/chrome/media/images/tiles/marquee-promo-tile-1400x560.png">
</a>

<p><br>

<a href="https://chatgptwidescreen.com" target="_blank" rel="noopener">
    <img width=555 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-widescreen@3ed0950/chrome/media/images/tiles/marquee-promo-tile-1400x560.png">
</a>

<p><br>

<p id="showcase-cta">
如果您使用 chatgpt.js 制作了一些想要分享的内容，请发送电子邮件至 <a href="mailto:showcase@chatgptjs.org">showcase@chatgptjs.org</a> 或打开一个 <a href="https://github.com/KudoAI/chatgpt.js/pulls" target="_blank" rel="noopener">pull request</a>!
</p>

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="contributors">

## 🧠 贡献者

</div>

该代码库的存在归功于以下贡献者的代码、翻译、问题和想法:

<div align="center"><br>

[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/10906554?first-contrib=2023.03.15&h=47&w=47&mask=circle&maxage=7d "@adamlui")](https://github.com/adamlui)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/71683364?first-contrib=2023.03.16-get-functions&h=47&w=47&mask=circle&maxage=7d "@mefengl")](https://github.com/mefengl)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/131989355?first-contrib=2023.04.30-doc-translations&h=47&w=47&mask=circle&maxage=7d "@Zin6969")](https://github.com/Zin6969)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/30551844?first-contrib=2023.05.02-getlastresponse-bug-report&h=47&w=47&mask=circle&maxage=7d "@madruga8")](https://github.com/madruga8)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/54934866?first-contrib=2023.05.01-clearchats-discard-fix&h=47&w=47&mask=circle&maxage=7d "@XiaoYingYo")](https://github.com/XiaoYingYo)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/129722778?first-contrib=2023.05.24-css-readability&h=47&w=47&mask=circle&maxage=7d "@AliAlSarre")](https://github.com/AliAlSarre)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/100418457?first-contrib=2023.06.02-send-function-bug-report&h=47&w=47&mask=circle&maxage=7d "@madkarmaa")](https://github.com/madkarmaa)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/1170326?first-contrib=2023.06.10-html-parser-idea&h=47&w=47&mask=circle&maxage=7d "@wamoyo")](https://github.com/wamoyo)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/33952?first-contrib=2023.06.10-html-parser-idea&h=47&w=47&mask=circle&maxage=7d "@meiraleal")](https://github.com/meiraleal)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/22633385?first-contrib=2023.07.11-fix-ja-doc-md&h=47&w=47&mask=circle&maxage=7d "@eltociear")](https://github.com/eltociear)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/72805486?first-contrib=2023.07.14-enhance-ko-docs&h=47&w=47&mask=circle&maxage=7d "@Rojojun")](https://github.com/Rojojun)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/62183023?first-contrib=2023.07.24-fix-hi-doc&h=47&w=47&mask=circle&maxage=7d "@iamnishantgaharwar")](https://github.com/iamnishantgaharwar)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/629429?first-contrib=2023.07.31-homepage-starry-bg&h=47&w=47&mask=circle&maxage=7d "@hakimel")](https://github.com/hakimel)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/73983677?first-contrib=2023.08.23-fix-readme-typos&h=47&w=47&mask=circle&maxage=7d "@omahs")](https://github.com/omahs)
[![](https://images.weserv.nl/?url=https://i.imgur.com/DQVC7vj.jpg?first-contrib=2023.09.19-add-dmarc-policy&h=47&w=47&mask=circle&maxage=7d "Najam Ul Arfeen")](https://www.linkedin.com/in/najam-ul-arfeen-khan/)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/110587589?first-contrib=2023.10.13-translate-docs-to-nepali&h=47&w=47&mask=circle&maxage=7d "@iambijayd")](https://github.com/iambijayd)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/4698976?first-contrib=2023.10.29-remove-outdated-mv2-preface-from-docs&h=47&w=47&mask=circle&maxage=7d "@abhinavm24")](https://github.com/abhinavm24)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/77867745?first-contrib=2023.11.4-getchatdetails-bug-report&h=47&w=47&mask=circle&maxage=7d "@deyvisml")](https://github.com/deyvisml)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/150537240?first-contrib=2023.11.15-regenerate-btn-changed-bug-email&h=47&w=47&mask=circle&maxage=7d "@philly88r")](https://github.com/philly88r)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/9730392?first-contrib=2023.12.18-get-response-from-dom-request&h=47&w=47&mask=circle&maxage=7d "@thomasgauthier")](https://github.com/thomasgauthier)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/42911524?first-contrib=2024.1.17-add-custom-gpt-support&h=47&w=47&mask=circle&maxage=7d "@pranav-bhatt")](https://github.com/pranav-bhatt)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/13976824?first-contrib=2024.01.31-aria-labels-unreliable-bug-report&h=47&w=47&mask=circle&maxage=7d "@hopana")](https://github.com/hopana)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/26219737?first-contrib=2024.2.2-data-key-message-bug-fix&h=47&w=47&mask=circle&maxage=7d "@emtry")](https://github.com/emtry)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/44357327?first-contrib=2024.2.14-msg-fetching-for-localization-fails-report&h=47&w=47&mask=circle&maxage=7d "@thedayofcondor")](https://github.com/thedayofcondor)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/111466842?first-contrib=2024.2.15-add-en-gb-locale&h=47&w=47&mask=circle&maxage=7d "@Luwa-Tech")](https://github.com/Luwa-Tech)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/61795?first-contrib=2024.5.9-update-css-selector-for-getregeneratebutton&h=47&w=47&mask=circle&maxage=7d "@micz")](https://github.com/micz)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/17583722?first-contrib=2024.5.17-chrome-starter-manifest-matches-outdated-alert&h=47&w=47&mask=circle&maxage=7d "@imranaalam")](https://github.com/imranaalam)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/in/29110&h=47&w=47&mask=circle&maxage=7d "Dependabot")](https://github.com/dependabot)
<a href="https://chatgpt.com"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://images.weserv.nl/?url=https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@main/media/images/icons/platforms/chatgpt/black-on-white/icon189.png?h=46&w=46&mask=circle&maxage=7d"><img src="https://images.weserv.nl/?url=https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@main/media/images/icons/platforms/chatgpt/white-on-black/icon189.png?h=46&w=46&mask=circle&maxage=7d" title="ChatGPT"></picture></a>
<a href="https://poe.com"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://images.weserv.nl/?url=https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@main/media/images/icons/platforms/poe/w-purple-blue-stripes/black-on-white/icon175.png?h=46&w=46&mask=circle&maxage=7d"><img src="https://images.weserv.nl/?url=https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@main/media/images/icons/platforms/poe/w-purple-blue-stripes/white-on-black/icon175.png?h=46&w=46&mask=circle&maxage=7d" title="Poe"></picture></a>
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/31427850?h=51&w=51&mask=circle&maxage=7d "@ImgBotApp")](https://github.com/ImgBotApp)

</div><br>

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="partners">

## 🤝 伙伴

</div>

**chatgpt.js** 的部分资金来自:

<div id="partners-collage" align="center">

<picture>
    <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptjs.org/images/logos/partners/collage/white.png?3109608">
    <img width=888 src="https://media.chatgptjs.org/images/logos/partners/collage/black.png?3109608">
</picture>

</div>

<br>

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div align="center">

**[发布](https://github.com/KudoAI/chatgpt.js/releases)** /
[用户指南](https://github.com/KudoAI/chatgpt.js/blob/v2.9.3/docs/USERGUIDE.md) / 
[讨论](https://github.com/KudoAI/chatgpt.js/discussions) / 
<a href="#">返回顶部 ↑</a>

</div>
