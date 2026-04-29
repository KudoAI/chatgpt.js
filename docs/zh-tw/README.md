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
        繁體中文 |
        <a href="../..#readme">English</a> |
        <a href="../zh-cn#readme">简体中文</a> |
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

<a href="https://chatgpt.js.org/?utm_source=chatgpt.js-github&utm_medium=referral&utm_content=cover-logo">
    <picture>
        <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/logos/chatgpt.js/with-reflection/darkmode/logo-6014x1334.png?v=8169c77">
        <img width=800 src="https://assets.chatgptjs.org/images/logos/chatgpt.js/with-reflection/lightmode/logo-6014x1334.png?v=8169c77">
    </picture>
</a>

### 🤖 適用於 ChatGPT 的強大客戶端 JavaScript 庫

</div>

<br>

<div id="shields" align="center">

<a href="LICENSE.md" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/%E8%AE%B8%E5%8F%AF%E8%AF%81-MIT-orange.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@kudoai/chatgpt.js/v/latest" target="_blank" rel="noopener">
    <img src="https://img.shields.io/npm/v/%40kudoai%2Fchatgpt.js?logo=npm&logoColor=white&labelColor=464646&color=blue&style=for-the-badge&label=%E6%9C%80%E6%96%B0%E7%89%88%E6%9C%AC"></a>
<a href="https://github.com/KudoAI/chatgpt.js/tree/v3.9.0/dist/chatgpt.min.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/github/size/KudoAI/chatgpt.js/dist/chatgpt.min.js?branch=v3.9.0&label=%E6%9C%80%E5%B0%8F%E5%8C%96%E5%B0%BA%E5%AF%B8&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge"></a>
<a href="https://www.codefactor.io/repository/github/kudoai/chatgpt.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=%E4%BB%A3%E7%A2%BC%E8%B3%AA%E9%87%8F&logo=codefactor&logoColor=white&labelColor=464646&color=1acc6c&style=for-the-badge"></a>
<a href="https://sonarcloud.io/component_measures?metric=vulnerabilities&id=kudoai_chatgpt.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dkudoai_chatgpt.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonar&logoColor=white&labelColor=464646&label=%E6%BC%8F%E6%B4%9E&color=gold"></a>
<a href="https://github.com/sindresorhus/awesome-chatgpt#javascript" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/%E4%B8%AD%E6%8F%90%E5%88%B0-Awesome-af68ff?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="#">
    <img src="https://img.shields.io/badge/jsDelivr_請求-2,000,000+-2bbbd8.svg?logo=jsdelivr&logoColor=white&labelColor=464646&style=for-the-badge"></a>
</div>

<br>

<hr>

## ⚡ 導入庫

</div>

#### [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/chrome/icon16.png" title="Chrome">][web-usage][<img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/edge/icon16.png" title="Edge">][web-usage][<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/firefox/icon16.png" title="Firefox">][web-usage][<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/safari/icon16.png" title="Safari">][web-usage][<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/qq/3d/icon-32x33.png" title="QQ Browser">][web-usage] Web:

[web-usage]: #-web

```js
<script src="https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3/dist/chatgpt.min.js"></script>
```

#### [<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/tampermonkey/icon28.png" title="Tampermonkey">][greasemonkey-usage][<img height="15" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/violentmonkey/icon25.png" title="Violentmonkey">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/scriptcat/icon32.png" title="ScriptCat">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/orangemonkey/icon16.png" title="OrangeMonkey">][greasemonkey-usage][<img height="14" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/stay/icon32.png" title="Stay">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/userscripts/icon32.png" title="Userscripts">][greasemonkey-usage] Greasemonkey:

[greasemonkey-usage]: #-greasemonkey

> **筆記** _使用入門模板: [KudoAI/chatgpt.js-greasemonkey-starter](https://github.com/KudoAI/chatgpt.js-greasemonkey-starter)_

```js
...
// @require https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3/dist/chatgpt.min.js
// ==/UserScript==

// 你的代碼在這裡...
```

#### [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/chrome/icon16.png" title="Chrome">](#-chrome) Chrome:

> **筆記** _使用入門模板: [KudoAI/chatgpt.js-chrome-starter](https://github.com/KudoAI/chatgpt.js-chrome-starter)_

由於 Google 不允許遠端程式碼，因此需要在本地導入 chatgpt.js:

1. 將 https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3/dist/chatgpt.min.js 保存到子目錄（本例中為 `lib`）

2. 在項目 (V3) `manifest.json` 中，添加 `lib/chatgpt.min.js` 作為 Web 可訪問資源
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.min.js"]
    }],
```

3. 在需要 `chatgpt.js` （前台/後台類似）的腳本中，像這樣導入它：
```js
(async () => {
    await import(chrome.runtime.getURL('lib/chatgpt.min.js'))
    // 你的代碼在這裡...
})()
```

<hr>

<div id="npm">

## 💾 透過 npm 下載:

</div>

若要下載 **chatgpt.js** 進行本機自訂，請在專案的根目錄中執行以下命令:

```bash
npm install @kudoai/chatgpt.js
```

安裝後，導覽至 `node_modules/@kudoai/chatgpt.js` 以尋找庫來源。

</div>

<hr>

<div id="usage">

## 💻 用法

</div>

**chatgpt.js** 的編寫考慮到了超級靈活性。

例如：

```js
chatgpt.getLastResponse()
chatgpt.getLastReply()
chatgpt.response.getLast()
chatgpt.get('reply', 'last')
```

每個調用都會同等地獲取最後一個響應。 如果您認為它有效，它可能會......所以只需輸入它即可！

如果沒有，請查看擴展的[用戶指南](https://github.com/KudoAI/chatgpt.js/blob/v3.9.0/docs/USERGUIDE.md)，或者只需提交一個[問題](https://github.com/KudoAI/chatgpt.js/issues) 或 [PR](https://github.com/KudoAI/chatgpt.js/pulls) 它將被集成，簡單易行！

<hr>

<div id="showcase">

## 🤖 用 chatgpt.js 製作

</div>

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://amazongpt.kudoai.com/assets/images/icons/app/white/icon48.png"><img width=20 src="https://amazongpt.kudoai.com/assets/images/icons/app/black-gold-teal/icon48.png"></picture> [AmazonGPT](https://amazongpt.kudoai.com)  &nbsp;<a href="https://amazongpt.kudoai.com/assets/wolfram-award/letter.pdf" target="_blank" rel="noopener"><img height=20 src="https://amazongpt.kudoai.com/assets/images/badges/wolfram-award/gold-badge.png" style="margin:0 0 -2px 5px"></a>

> 在亞馬遜購物中新增 AI 聊天和產品/類別摘要，由最新的 LLM 提供支援！
<br>[Install](https://raw.githubusercontent.com/KudoAI/amazongpt/main/greasemonkey/amazongpt.user.js) /
[Readme](https://amazongpt.kudoai.com/#readme) /
[Discuss](https://github.com/KudoAI/amazongpt/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.autoclearchatgpt.com/images/icons/openai/white/icon48.png?cece513"><img width=21 src="https://assets.autoclearchatgpt.com/images/icons/openai/black/icon48.png?cece513"></picture> [自動清除 ChatGPT 歷史記錄](https://autoclearchatgpt.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://assets.autoclearchatgpt.com/images/badges/awesome/badge.svg?2c0d9fc" style="margin:0 0 -2px 5px"></a>

> 自動清除您的 ChatGPT 查詢歷史記錄，以獲得最大程度的隱私。
<br>[安裝](https://docs.autoclearchatgpt.com/#-installation) /
[自述文件](https://docs.autoclearchatgpt.com/#readme) /
[討論](https://github.com/adamlui/autoclear-chatgpt-history/discussions)

### <img width=24 src="https://assets.bravegpt.com/images/icons/app/icon48.png"> [BraveGPT](https://bravegpt.com) &nbsp;<a href="https://www.producthunt.com/posts/bravegpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="auto" /></a>

> 將 AI 聊天和搜尋摘要新增到 Brave Search，由最新的 LLM 提供支援！
<br>[安裝](https://docs.bravegpt.com/#-installation) /
[自述文件](https://docs.bravegpt.com/#readme) /
[討論](https://github.com/KudoAI/bravegpt/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautocontinue.com/images/icons/continue-symbol/white/icon48.png?v=61c4f16"><img width=21 src="https://assets.chatgptautocontinue.com/images/icons/continue-symbol/black/icon48.png?v=61c4f16"></picture> [ChatGPT 自動繼續 ⏩](https://chatgptautocontinue.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://assets.chatgptautocontinue.com/images/badges/awesome/badge.svg?3c80c0c" style="margin:0 0 -3px 3px"></a>

> 當 ChatGPT 回應被切斷時自動繼續產生答案。
<br>[安裝](https://docs.chatgptautocontinue.com/#-installation) /
[自述文件](https://docs.chatgptautocontinue.com/#readme) /
[討論](https://github.com/adamlui/chatgpt-auto-continue/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/white/icon64.png"><img width=21 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/black/icon64.png"></picture> [ChatGPT 自動談話 📣](https://github.com/adamlui/chatgpt-auto-talk)

> 自動播放 ChatGPT 回應。
<br>[Install](https://gm.chatgptautotalk.com) /
[Readme](https://github.com/adamlui/chatgpt-auto-talk#readme) /
[Discuss](https://github.com/adamlui/chatgpt-auto-talk/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautorefresh.com/images/icons/openai/white/icon48.png?a45cf1e"><img width=21 src="https://assets.chatgptautorefresh.com/images/icons/openai/black/icon48.png?a45cf1e"></picture> [ChatGPT 自動刷新 ↻](https://chatgptautorefresh.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://assets.chatgptautorefresh.com/images/badges/awesome/badge.svg?1080f44" style="margin:0 0 -2px 5px"></a>

> 保持 ChatGPT 會話新鮮，消除聊天時間限制 + 網路錯誤 + Cloudflare 檢查。
<br>[安裝](https://docs.chatgptautorefresh.com/#-installation) /
[自述文件](https://docs.chatgptautorefresh.com/#readme) /
[討論](https://github.com/adamlui/chatgpt-auto-refresh/discussions)

### <img width=23 src="https://assets.ddgpt.com/images/icons/app/icon48.png"> [DuckDuckGPT](https://duckduckgpt.com) &nbsp;<a href="https://www.producthunt.com/posts/duckduckgpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> 向 DuckDuckGo 添加 AI 聊天和搜尋摘要，由最新的 LLM 提供支援！
<br>[安裝](https://docs.ddgpt.com/#-installation) /
[自述文件](https://docs.ddgpt.com/#readme) /
[討論](https://github.com/KudoAI/duckduckgpt/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/icons/app/white/icon48.png"><img width=21 src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/icons/app/black/icon48.png"></picture> [GoogleGPT](https://github.com/KudoAI/googlegpt/#readme) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt@e442863/assets/images/badges/awesome/badge.svg" style="margin:0 0 -2px 5px"></a>

> 將 AI 聊天和搜尋摘要添加到 Google 搜索，由最新的 LLM 提供支援！
<br>[安装](https://raw.githubusercontent.com/KudoAI/googlegpt/refs/heads/main/greasemonkey/googlegpt.user.js) /
[自述文件](https://github.com/KudoAI/googlegpt/#readme) /
[讨论](https://github.com/KudoAI/googlegpt/discussions)

### <img width=23 src="https://assets.chatgptjs.org/images/icons/platforms/thunderbird/icon32.png?v=e638eac"> <a href="https://micz.it/thunderdbird-addon-thunderai/?utm_source=chatgpt.js-github&utm_medium=referral&utm_content=showcase-link" target="_blank" rel="noopener">ThunderAI</a> &nbsp;<a href="https://addons.thunderbird.net/thunderbird/addon/thunderai/reviews" target="_blank" rel="noopener"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/badges/5-star/blue-stars.png?v=e638eac"><img width=92 alt="[評級為 5 星]" src="https://assets.chatgptjs.org/images/badges/5-star/yellow-stars-in-white-pill.png?v=e638eac"></picture></a>

> 即使使用免費帳戶，也可以使用 Thunderbird 中的 ChatGPT 來增強您的電子郵件！
<br>[安装](https://addons.thunderbird.net/thunderbird/addon/thunderai/) /
[自述文件](https://github.com/micz/ThunderAI#readme) /
[支援](https://github.com/micz/ThunderAI/issues)

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
如果您使用 chatgpt.js 製作了一些想要分享的內容，請發送電子郵件至 <a href="mailto:showcase@chatgptjs.org">showcase@chatgptjs.org</a> 或打開一個 <a href="https://github.com/KudoAI/chatgpt.js/pulls" target="_blank" rel="noopener">pull 請求</a>！
</p>

<hr>

## 🧠 貢獻者

<a href="https://github.com/KudoAI/chatgpt.js/graphs/contributors">
    <img height=111 width="auto" src="https://contrib.rocks/image?repo=KudoAI/chatgpt.js&anon=1&columns=16" /></a>
<br><br>

歡迎大家踴躍投稿！

<img height=10px width="100%" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e638eac/assets/images/separators/gradient-aqua.png">

<div align="center">

**[發布](https://github.com/KudoAI/chatgpt.js/releases)** /
[用戶指南](https://github.com/KudoAI/chatgpt.js/blob/v3.9.0/docs/USERGUIDE.md) /
[討論](https://github.com/KudoAI/chatgpt.js/discussions) /
<a href="#top">回到頂部 ↑</a>

</div>
