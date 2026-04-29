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

### 🤖 ChatGPT 用の強力なクライアント側 JavaScript ライブラリ

</div>

<br>

<div id="shields" align="center">

<a href="LICENSE.md" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9-MIT-orange.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@kudoai/chatgpt.js/v/latest" target="_blank" rel="noopener">
    <img src="https://img.shields.io/npm/v/%40kudoai%2Fchatgpt.js?logo=npm&logoColor=white&labelColor=464646&color=blue&style=for-the-badge&label=%E6%9C%80%E6%96%B0%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9"></a>
<a href="https://github.com/KudoAI/chatgpt.js/tree/v3.9.0/dist/chatgpt.min.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/github/size/KudoAI/chatgpt.js/dist/chatgpt.min.js?branch=v3.9.0&label=%E7%B8%AE%E5%B0%8F%E3%82%B5%E3%82%A4%E3%82%BA&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge"></a>
<a href="https://www.codefactor.io/repository/github/kudoai/chatgpt.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E5%93%81%E8%B3%AA&logo=codefactor&logoColor=white&labelColor=464646&color=1acc6c&style=for-the-badge"></a>
<a href="https://sonarcloud.io/component_measures?metric=vulnerabilities&id=kudoai_chatgpt.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dkudoai_chatgpt.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonar&logoColor=white&labelColor=464646&label=%E8%84%86%E5%BC%B1%E6%80%A7&color=gold"></a>
<a href="https://github.com/sindresorhus/awesome-chatgpt#javascript" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/%E3%81%A7%E8%A8%80%E5%8F%8A-Awesome-af68ff?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="#">
    <img src="https://img.shields.io/badge/jsDelivr_%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88-2,000,000+-2bbbd8.svg?logo=jsdelivr&logoColor=white&labelColor=464646&style=for-the-badge"></a>

</div>

<br>

<hr>

## ⚡ ライブラリのインポート

</div>

#### [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/chrome/icon16.png" title="Chrome">][web-usage][<img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/edge/icon16.png" title="Edge">][web-usage][<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/firefox/icon16.png" title="Firefox">][web-usage][<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/safari/icon16.png" title="Safari">][web-usage][<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/qq/3d/icon-32x33.png" title="QQ Browser">][web-usage] Web:

[web-usage]: #-web

```js
<script src="https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3/dist/chatgpt.min.js"></script>
```

#### [<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/tampermonkey/icon28.png" title="Tampermonkey">][greasemonkey-usage][<img height="15" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/violentmonkey/icon25.png" title="Violentmonkey">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/scriptcat/icon32.png" title="ScriptCat">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/orangemonkey/icon16.png" title="OrangeMonkey">][greasemonkey-usage][<img height="14" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/stay/icon32.png" title="Stay">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/userscripts/icon32.png" title="Userscripts">][greasemonkey-usage] Greasemonkey:

[greasemonkey-usage]: #-greasemonkey

> **ノート** _スターター テンプレートを使用するには: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/KudoAI/chatgpt.js-greasemonkey-starter)_

```js
...
// @require https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3/dist/chatgpt.min.js
// ==/UserScript==

// コードはここにあります...
```

### <img style="margin: 0 2px -1px 0" height=16 src="https://assets.chatgptjs.org/images/icons/platforms/chrome/icon16.png?v=e638eac"> Chrome:

> **ノート** _スターター テンプレートを使用するには: [kudoai/chatgpt.js-chrome-starter](https://github.com/KudoAI/chatgpt.js-chrome-starter)_

Google ではリモート コードが許可されていないため、chatgpt.js をローカルにインポートする必要があります:

1. https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3/dist/chatgpt.min.js をサブディレクトリ (この例では `lib`) に保存します

2. プロジェクト (V3) の `manifest.json` に、Web アクセス可能なリソースとして `lib/chatgpt.min.js` を追加します
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.min.js"]
    }],
```

3. `chatgpt.js` (フォアグラウンド/バックグラウンド同様) を必要とするスクリプトでは、次のようにインポートします:
```js
(async () => {
    await import(chrome.runtime.getURL('lib/chatgpt.min.js'))
    // コードはここにあります...
})()
```

<img height=10px width="100%" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e638eac/assets/images/separators/gradient-aqua.png">

<div id="npm">

## 💾 npm 経由でダウンロード:

</div>

ローカルカスタマイズ用に **chatgpt.js** をダウンロードするには、プロジェクトのルートで次のコマンドを実行します:

```bash
npm install @kudoai/chatgpt.js
```

インストール後、 `node_modules/@kudoai/chatgpt.js` に移動してライブラリ ソースを見つけます。

</div>

<img height=10px width="100%" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e638eac/assets/images/separators/gradient-aqua.png">

<div id="usage">

## 💻 使用法

</div>

**chatgpt.js** は、超柔軟性を念頭に置いて作成されました。

例えば：

```js
chatgpt.getLastResponse()
chatgpt.getLastReply()
chatgpt.response.getLast()
chatgpt.get('reply', 'last')
```

各呼び出しは同様に最後の応答を取得します。 うまくいくと思うなら、おそらくうまくいきます...だから、それを入力してください! (資料を読む時間が誰にありますか?)

そうでない場合は、拡張された [ユーザーガイド](https://github.com/KudoAI/chatgpt.js/blob/v3.9.0/docs/USERGUIDE.md) を確認するか、単に [問題](https://github.com/KudoAI/chatgpt.js/issues) または [PR](https://github.com/KudoAI/chatgpt.js/pulls) と統合されるので、簡単です!

<img height=10px width="100%" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e638eac/assets/images/separators/gradient-aqua.png">

<div id="showcase">

## 🤖 chatgpt.js で作成

</div>

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://amazongpt.kudoai.com/assets/images/icons/app/white/icon48.png"><img width=20 src="https://amazongpt.kudoai.com/assets/images/icons/app/black-gold-teal/icon48.png"></picture> [AmazonGPT](https://amazongpt.kudoai.com)  &nbsp;<a href="https://amazongpt.kudoai.com/assets/wolfram-award/letter.pdf" target="_blank" rel="noopener"><img height=20 src="https://amazongpt.kudoai.com/assets/images/badges/wolfram-award/gold-badge.png" style="margin:0 0 -2px 5px"></a>

> 最新の LLM を活用し、Amazon ショッピングにAIチャットと商品/カテゴリー概要を追加しましょう！
<br>[Install](https://raw.githubusercontent.com/KudoAI/amazongpt/main/greasemonkey/amazongpt.user.js) /
[Readme](https://amazongpt.kudoai.com/#readme) /
[Discuss](https://github.com/KudoAI/amazongpt/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.autoclearchatgpt.com/images/icons/openai/white/icon48.png?cece513"><img width=21 src="https://assets.autoclearchatgpt.com/images/icons/openai/black/icon48.png?cece513"></picture> [ChatGPT の履歴を削除する](https://autoclearchatgpt.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://assets.autoclearchatgpt.com/images/badges/awesome/badge.svg?2c0d9fc" style="margin:0 0 -2px 5px"></a>

> プライバシーを最大限に高めるために、ChatGPT クエリ履歴を自動消去します。
<br>[インストール](https://docs.autoclearchatgpt.com/#-installation) / 
[お読みください](https://docs.autoclearchatgpt.com/#readme) / 
[議論](https://github.com/adamlui/autoclear-chatgpt-history/discussions)

### <img width=24 src="https://assets.bravegpt.com/images/icons/app/icon48.png"> [BraveGPT](https://bravegpt.com) &nbsp;<a href="https://www.producthunt.com/posts/bravegpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="auto" /></a>

> 最新の LLM を活用し、Brave 検索にAIチャットと検索概要を追加しましょう！
<br>[インストール](https://docs.bravegpt.com/#-installation) / 
[お読みください](https://docs.bravegpt.com/#readme) / 
[議論](https://github.com/KudoAI/bravegpt/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautocontinue.com/images/icons/continue-symbol/white/icon48.png?v=61c4f16"><img width=21 src="https://assets.chatgptautocontinue.com/images/icons/continue-symbol/black/icon48.png?v=61c4f16"></picture> [ChatGPT 自動継続 ⏩](https://chatgptautocontinue.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://assets.chatgptautocontinue.com/images/badges/awesome/badge.svg?3c80c0c" style="margin:0 0 -3px 3px"></a>

> ChatGPT の応答が中断されたときに、自動的に回答の生成を継続します。
<br>[インストール](https://docs.chatgptautocontinue.com/#-installation) / 
[お読みください](https://docs.chatgptautocontinue.com/#readme) / 
[議論](https://github.com/adamlui/chatgpt-auto-continue/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/white/icon64.png"><img width=21 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/black/icon64.png"></picture> [ChatGPT オートトーク 📣](https://github.com/adamlui/chatgpt-auto-talk)

> ChatGPT 応答を自動再生します。
<br>[Install](https://gm.chatgptautotalk.com) /
[Readme](https://github.com/adamlui/chatgpt-auto-talk#readme) /
[Discuss](https://github.com/adamlui/chatgpt-auto-talk/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautorefresh.com/images/icons/openai/white/icon48.png?a45cf1e"><img width=21 src="https://assets.chatgptautorefresh.com/images/icons/openai/black/icon48.png?a45cf1e"></picture> [ChatGPT 自動更新 ↻](https://chatgptautorefresh.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://assets.chatgptautorefresh.com/images/badges/awesome/badge.svg?1080f44" style="margin:0 0 -2px 5px"></a>

> ChatGPTセッションを最新の状態に保ち、チャット時間制限、ネットワークエラー、Cloudflareチェックを排除します。
<br>[インストール](https://docs.chatgptautorefresh.com/#-installation) / 
[お読みください](https://docs.chatgptautorefresh.com/#readme) / 
[議論](https://github.com/adamlui/chatgpt-auto-refresh/discussions)

### <img width=23 src="https://assets.ddgpt.com/images/icons/app/icon48.png"> [DuckDuckGPT](https://duckduckgpt.com) &nbsp;<a href="https://www.producthunt.com/posts/duckduckgpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> 最新の LLM を活用し、DuckDuckGo にAIチャットと検索概要を追加しましょう！
<br>[インストール](https://docs.ddgpt.com/#-installation) / 
[お読みください](https://docs.ddgpt.com/#readme) / 
[議論](https://github.com/KudoAI/duckduckgpt/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/icons/app/white/icon48.png"><img width=21 src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/icons/app/black/icon48.png"></picture> [GoogleGPT](https://github.com/KudoAI/googlegpt/#readme) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt@e442863/assets/images/badges/awesome/badge.svg" style="margin:0 0 -2px 5px"></a>

> 最新の LLM を活用し、Google 検索にAIチャットと検索概要を追加しましょう！
<br>[インストール](https://raw.githubusercontent.com/KudoAI/googlegpt/refs/heads/main/greasemonkey/googlegpt.user.js) /
[お読みください](https://github.com/KudoAI/googlegpt/#readme) /
[議論](https://github.com/KudoAI/googlegpt/discussions)

### <img width=23 src="https://assets.chatgptjs.org/images/icons/platforms/thunderbird/icon32.png?v=e638eac"> <a href="https://micz.it/thunderdbird-addon-thunderai/?utm_source=chatgpt.js-github&utm_medium=referral&utm_content=showcase-link" target="_blank" rel="noopener">ThunderAI</a> &nbsp;<a href="https://addons.thunderbird.net/thunderbird/addon/thunderai/reviews" target="_blank" rel="noopener"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/badges/5-star/blue-stars.png?v=e638eac"><img width=92 alt="[5 つ星評価]" src="https://assets.chatgptjs.org/images/badges/5-star/yellow-stars-in-white-pill.png?v=e638eac"></picture></a>

> Thunderbird で ChatGPT を使用すると、無料アカウントでもメールの機能を強化できます!
<br>[インストール](https://addons.thunderbird.net/thunderbird/addon/thunderai/) /
[お読みください](https://github.com/micz/ThunderAI#readme) /
[サポート](https://github.com/micz/ThunderAI/issues)

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
chatgpt.js で何かを作成して共有したい場合は、<a href="mailto:showcase@chatgptjs.org">showcase@chatgptjs.org</a> にメールするか、<a href="https://github.com/KudoAI/chatgpt.js/pulls" target="_blank" rel="noopener">プル リクエスト</a>!
</p>

<img height=10px width="100%" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e638eac/assets/images/separators/gradient-aqua.png">

## 🧠 貢献者

<a href="https://github.com/KudoAI/chatgpt.js/graphs/contributors">
    <img height=111 width="auto" src="https://contrib.rocks/image?repo=KudoAI/chatgpt.js&anon=1&columns=16" /></a>
<br><br>

皆様からのご意見・ご感想を心よりお待ちしております！

<img height=10px width="100%" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e638eac/assets/images/separators/gradient-aqua.png">

<div align="center">

**[リリース](https://github.com/KudoAI/chatgpt.js/releases)** /
[ユーザーガイド](https://github.com/KudoAI/chatgpt.js/blob/v3.9.0/docs/USERGUIDE.md) / 
[議論](https://github.com/KudoAI/chatgpt.js/discussions) / 
<a href="#top">トップに戻る ↑</a>

</div>
