<h3>
<div align="center">
<br />

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/chatgptjs/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
    <img width=546 alt="chatgpt.js" src="https://raw.githubusercontent.com/chatgptjs/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
</picture>
<br /><br />

🤖 ChatGPT 的强大客户端 JavaScript 库 
<br><br>

[![执照](https://img.shields.io/badge/执照-MIT-green.svg)](../../LICENSE)
[![提交](https://img.shields.io/github/commit-activity/m/chatgptjs/chatgpt.js?label=提交)](https://github.com/chatgptjs/chatgpt.js/commits/main)
[![代码质量](https://img.shields.io/codefactor/grade/github/chatgptjs/chatgpt.js?label=代码质量)](https://www.codefactor.io/repository/github/chatgptjs/chatgpt.js)
![jsdelivr](https://img.shields.io/jsdelivr/gh/hm/chatgptjs/chatgpt.js?color=ff6427&label=jsDelivr+要求)

</div>
</h3>

## 关于

chatgpt.js 是一个功能强大的 JavaScript 库，可轻松与 [ChatGPT DOM](https://chat.openai.com) 进行交互。

- 功能丰富
- 面向对象
- 易于使用
- 轻量级（但性能最优）

## 导入库

### ES6:

```js
(async () => {
    await import('https://code.chatgptjs.org/chatgpt-latest.min.js');    
    // 这里是您的代码
})();
```

### ES5:

```js
var xhr = new XMLHttpRequest()
xhr.open('GET', 'https://code.chatgptjs.org/chatgpt-latest.min.js')
xhr.onload = function() {
    if (xhr.status === 200) {
        var chatgptJS = document.createElement('script')
        chatgptJS.textContent = xhr.responseText
        document.head.appendChild(chatgptJS)
        yourCode() // 运行您的代码
    }
}
xhr.send()

function yourCode() {
    // 这里是您的代码
}
```

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://i.imgur.com/SATGr8j.png"></picture><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://i.imgur.com/wcCg3al.png"> Greasemonkey:

诸如 Greasy Fork 之类的用户脚本存储库维护着预先批准的 CDN 的白名单（例如来自 `cdn.jsdelivr.net` 的特定于提交的引用），因此导入 URL 相当长以保持对这些站点的可发布性：

```js
...
// @require https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@ef94dc315d2f73dc5b9f213d4dc16df7236c020a/dist/chatgpt-1.7.3.min.js
// ==/UserScript==

// 这里是您的代码
```

如果您不打算发布到这些存储库，则可以使用更简单的 `https://code.chatgptjs.org/chatgpt-latest.min.js` 来导入最新的缩小版本。

### <img style="margin: 0 2px -1px 0" height=16 src="https://www.google.com/chrome/static/images/favicons/apple-icon-60x60.png"> Chrome:

由于谷歌很可能在[下个月](https://developer.chrome.com/docs/extensions/migrating/mv2-sunset/)逐步淘汰 Manifest V2，远程代码将不再被允许，因此在本地导入 chatgpt.js 是理想的:

1. 将 https://raw.githubusercontent.com/chatgptjs/chatgpt.js/main/chatgpt.js 保存到子目录 (本例中为 `lib`)

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

## 用法

**chatgpt.js** 的编写考虑到了超级灵活性。

例如:

```js
chatgpt.getLastResponse()
chatgpt.getLastReply()
chatgpt.get('reply', 'last')
```

每个调用都会同样获取最后一个回应。如果您认为它有效，那么它可能就是有效的……所以只需输入它！（谁有时间看文档？）

如果它不起作用，只需提交 [issue](https://github.com/chatgptjs/chatgpt.js/issues) 或 [PR](https://github.com/chatgptjs/chatgpt.js/pulls)，它将被集成，简单易行！

## 用 chatgpt.js 制作

以下应用依赖于来自 chatgpt.js 的代码：

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [自动清除 ChatGPT 历史记录](https://chatgptevo.com/autoclear) <a href="https://github.com/awesome-scripts/awesome-userscripts#privacy"><img src="https://awesome.re/mentioned-badge.svg" alt="Mentioned in Awesome Userscripts" style="margin:0 0 -2px 5px"></a>

自动清除您的 ChatGPT 查询历史记录以获得最大的隐私。
<br>[安装](https://greasyfork.org/scripts/460805-auto-clear-chatgpt-history) / 
[自述文件](https://github.com/adamlui/autoclear-chatgpt-history#readme) / 
[讨论](https://github.com/adamlui/autoclear-chatgpt-history/discussions)

### <img src="https://media.bravegpt.com/images/bravegpt-icon48.png" width=18> [BraveGPT](https://bravegpt.com) <a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" alt="BraveGPT - Bring&#0032;the&#0032;magic&#0032;of&#0032;ChatGPT&#0032;to&#0032;Brave&#0032;Search&#0033; | Product Hunt" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

在 Brave Search 侧边栏中显示 ChatGPT 答案 (由 GPT-4 驱动!)
<br>[安装](https://greasyfork.org/scripts/462440-bravegpt) / 
[自述文件](https://github.bravegpt.com/#readme) / 
[讨论](https://github.bravegpt.com/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT 自动继续 ⏩](https://chatgptevo.com/autocontinue/github) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" alt="提到 Awesome Userscripts" style="margin:0 0 -3px 3px"></a>

自动继续生成多个 ChatGPT 响应。<br>
[安装](https://greasyfork.org/scripts/466789-chatgpt-auto-continue) / 
[自述文件](https://github.com/adamlui/chatgpt-auto-continue#readme) / 
[讨论](https://chatgptevo.com/autocontinue/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ChatGPT 自动刷新 ↻](https://chatgptevo.com/autorefresh) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" alt="Mentioned in Awesome Userscripts" style="margin:0 0 -2px 5px"></a>

保持 ChatGPT 会话新鲜以消除网络错误 + Cloudflare 检查。
<br>[安装](https://greasyfork.org/scripts/462422-chatgpt-auto-refresh) / 
[自述文件](https://github.com/adamlui/chatgpt-auto-refresh/blob/main/docs/zh-cn#readme) / 
[讨论](https://github.com/adamlui/chatgpt-auto-refresh/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT无限 ∞](https://chatgptevo.com/infinity) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" alt="在 Awesome Userscripts 中提到" style="margin:0 0 -2px 4px"></a>

从无所不知的 ChatGPT 生成无穷无尽的答案 (用任何语言!)
<br>[安装](https://greasyfork.org/scripts/465051-chatgpt-infinity) / 
[自述文件](https://github.com/adamlui/chatgpt-infinity/blob/main/docs/zh-cn#readme) / 
[讨论](https://chatgptevo.com/infinity/discussions)

### <img width=17 style="margin-bottom:-1px" src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/media/images/icons/widescreen-robot-emoji/icon32.png"> [ChatGPT 宽屏模式](https://chatgptevo.com/widescreen) <img src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/media/images/badges/product-hunt/product-of-the-week-2-larger-centered-rounded-light.svg" alt="ChatGPT&#0032;Widescreen&#0032;Mode - Add&#0032;widescreen&#0032;&#0043;&#0032;full&#0032;window&#0032;modes&#0032;to&#0032;ChatGPT | Product Hunt" style="width: auto; height: 24px; margin:0 0 -4px 5px;" width="auto" height="24" />

向 ChatGPT 添加宽屏 + 全窗口模式以增强查看效果 + 减少滚动。
<br>[安装](https://github.com/adamlui/chatgpt-widescreen#installation) / 
[自述文件](https://github.com/adamlui/chatgpt-widescreen#readme) / 
[讨论](https://github.com/adamlui/chatgpt-widescreen/discussions)

### <img src="https://media.duckduckgpt.com/images/ddgpt-icon48.png" width=17> [DuckDuckGPT](https://duckduckgpt.com) <a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" alt="DuckDuckGPT - Bring&#0032;the&#0032;magic&#0032;of&#0032;ChatGPT&#0032;to&#0032;DuckDuckGo | Product Hunt" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

在 DuckDuckGo 侧边栏中显示 ChatGPT 答案 (由 GPT-4 驱动!)
<br>[安装](https://greasyfork.org/scripts/459849-duckduckgpt) / 
[自述文件](https://github.duckduckgpt.com/#readme) / 
[讨论](https://github.duckduckgpt.com/discussions)

## 贡献

无论是翻译还是代码，都鼓励并通过 [PR](https://github.com/chatgptjs/chatgpt.js/pulls) 接受任何类型的贡献！

<br>

<a href="https://github.com/chatgptjs/chatgpt.js/tree/main/dist">**版本发布**</a> / 
<a href="https://github.com/chatgptjs/chatgpt.js/discussions">讨论</a> / 
<a href="#---------chatgpt-的强大客户端-javascript-库">返回顶部 ↑</a>
