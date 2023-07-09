<div align="center">

<div align="right">

###### 日本 | <a href="../..#readme">English</a> | <a href="../zh-cn#readme">简体中文</a> | <a href="../hi#readme">हिंदी</a>
    
</div>

<h3>

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
    <img width=700 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
</picture>
<br><br>

🤖 ChatGPT 用の強力なクライアント側 JavaScript ライブラリ
<br><br>

</div>
</h3>

<div align="center">

[![](https://img.shields.io/badge/ライセンス-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/kudoai/chatgpt.js?label=コミット&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/kudoai/chatgpt.js/commits/main)
![](https://img.shields.io/github/size/kudoai/chatgpt.js/dist/chatgpt-1.11.0.min.js?label=縮小サイズ&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge)
[![](https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=コードの品質&logo=codefactor&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.codefactor.io/repository/github/kudoai/chatgpt.js)
[![](https://img.shields.io/badge/で言及-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/sindresorhus/awesome-chatgpt#javascript)
[![](https://img.shields.io/badge/で特集されました-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.producthunt.com/posts/chatgpt-js)
![](https://img.shields.io/jsdelivr/gh/hw/kudoai/chatgpt.js?label=jsDelivr+ヒット&logo=jsdelivr&logoColor=white&labelColor=464646&color=gold&style=for-the-badge)

</div>

＃＃ だいたい

**chatgpt.js** は、ChatGPT DOM との非常に簡単な対話を可能にする強力な JavaScript ライブラリです。

- 豊富な機能
- オブジェクト指向
- 使いやすい
- 軽量 (それでも最適なパフォーマンス)

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"></p>

## ライブラリのインポート

### ES6:

```js
(async () => {
    await import('https://code.chatgptjs.org/chatgpt-latest.min.js');    
    // コードはここにあります...
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
        yourCode() // コードを実行する
    }
}
xhr.send()

function yourCode() {
    // コードはここにあります...
}
```

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://i.imgur.com/SATGr8j.png"></picture><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://i.imgur.com/wcCg3al.png"> Greasemonkey:

> **Note** _スターター テンプレートを使用するには: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/kudoai/chatgpt.js-greasemonkey-starter)_

Greasy Fork のようなユーザースクリプト リポジトリは、事前承認された CDN (`cdn.jsdelivr.net` からのコミット固有の参照など) のホワイトリストを維持するため、これらのサイトへの公開可能性を維持するためにインポート URL は大幅に長くなります。

```js
...
// @require https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@8483b553675c3444db5c6b40a8686531c11b2a35/dist/chatgpt-1.11.0.min.js
// ==/UserScript==

// コードはここにあります...
```

これらのリポジトリに公開する予定がない場合は、より単純な `https://code.chatgptjs.org/chatgpt-latest.min.js` を代わりに使用して、最新の縮小リリースをインポートできます。

### <img style="margin: 0 2px -1px 0" height=16 src="https://www.google.com/chrome/static/images/favicons/apple-icon-60x60.png"> Chrome:

Google は [最終的に段階的に廃止](https://developer.chrome.com/docs/extensions/migating/mv2-sunset/) Manifest V2 を行うため、リモート コードは許可されなくなります。そのため、chatgpt.js をローカルにインポートすることが理想的です:

> **Note** _スターター テンプレートを使用するには: [kudoai/chatgpt.js-chrome-starter](https://github.com/kudoai/chatgpt.js-chrome-starter)_

1. https://raw.githubusercontent.com/kudoai/chatgpt.js/main/chatgpt.js をサブディレクトリ (この例では `lib`) に保存します

2. ES6 のエクスポート ステートメントを `lib/chatgpt.js` の末尾に追加します
```js
...
export { chatgpt }
```

3. プロジェクト (V3) の `manifest.json` に、Web アクセス可能なリソースとして `lib/chatgpt.js` を追加します
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.js"]
    }],
```

4. `chatgpt.js` (フォアグラウンド/バックグラウンド同様) を必要とするスクリプトでは、次のようにインポートします:
```js
(async () => {
    const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'));
    // コードはここにあります...
})();
```

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"></p>

## 使用法

**chatgpt.js** は、超柔軟性を念頭に置いて作成されました。

例えば：

```js
chatgpt.getLastResponse()
chatgpt.getLastReply()
chatgpt.response.getLast()
chatgpt.get('reply', 'last')
```

各呼び出しは同様に最後の応答を取得します。 うまくいくと思うなら、おそらくうまくいきます...だから、それを入力してください! (資料を読む時間が誰にありますか?)

そうでない場合は、[問題](https://github.com/kudoai/chatgpt.js/issues) または [PR](https://github.com/kudoai/chatgpt.js/pulls) を送信してください。 そしてそれは統合されます、簡単な!

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"></p>

## chatgpt.js で作成

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ChatGPT の履歴を削除する](https://chatgptevo.com/autoclear) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

プライバシーを最大限に高めるために、ChatGPT クエリ履歴を自動消去します。
<br>[インストール](https://github.com/adamlui/autoclear-chatgpt-history#installation) / 
[お読みください](https://github.com/adamlui/autoclear-chatgpt-history#readme) / 
[議論](https://github.com/adamlui/autoclear-chatgpt-history/discussions)

### <img width=16 src="https://i.imgur.com/1yjmK3W.png"> [Automatic ChatGPT DAN](https://github.com/madkarmaa/automatic-chatgpt-dan)

DAN プロンプトを ChatGPT に自動的に送信します。
<br>[インストール](https://github.com/madkarmaa/automatic-chatgpt-dan#%EF%B8%8F-installation) / 
[お読みください](https://github.com/madkarmaa/automatic-chatgpt-dan#readme) / 
[議論](https://github.com/madkarmaa/automatic-chatgpt-dan/issues)

### <img src="https://media.bravegpt.com/images/bravegpt-icon48.png" width=18> [BraveGPT](https://bravegpt.com) <a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Brave Search サイドバーに ChatGPT の回答を表示 (GPT-4 を搭載!)
<br>[インストール](https://github.bravegpt.com/#installation) / 
[お読みください](https://github.bravegpt.com/#readme) / 
[議論](https://github.bravegpt.com/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT 自動継続 ⏩](https://chatgptevo.com/autocontinue/github) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -3px 3px"></a>

ChatGPTの複数の応答を自動的に継続的に生成し続ける。<br>
[インストール](https://github.com/adamlui/chatgpt-auto-continue#installation) / 
[お読みください](https://github.com/adamlui/chatgpt-auto-continue#readme) / 
[議論](https://chatgptevo.com/autocontinue/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ChatGPT 自動更新 ↻](https://chatgptevo.com/autorefresh) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

ChatGPTセッションを最新の状態に保ち、ネットワークエラーとCloudflareチェックを排除します。
<br>[インストール](https://github.com/adamlui/chatgpt-auto-refresh#installation) / 
[お読みください](https://github.com/adamlui/chatgpt-auto-refresh#readme) / 
[議論](https://github.com/adamlui/chatgpt-auto-refresh/discussions)

### <img src="https://media.duckduckgpt.com/images/ddgpt-icon48.png" width=17> [DuckDuckGPT](https://duckduckgpt.com) <a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

DuckDuckGo サイドバーに ChatGPT の回答を表示 (GPT-4 を搭載!)
<br>[インストール](https://github.duckduckgpt.com/#installation) / 
[お読みください](https://github.duckduckgpt.com/#readme) / 
[議論](https://github.duckduckgpt.com/discussions)

<br>

<a href="https://chatgptinfinity.com" target="_blank"><img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-infinity/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png"></a>

<br>

<a href="https://chatgptwidescreen.com" target="_blank"><img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png"></a>

<br>

chatgpt.js で何かを作成して共有したい場合は、[showcase@chatgptjs.org](mailto:showcase@chatgptjs.org) にメールするか、[プル リクエスト](https://github.com/kudoai/chatgpt.js/pulls)!

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"></p>

## 貢献者

このライブラリは、次の寄稿者によるコード、翻訳、問題、アイデアのおかげで存在します:

[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/10906554?first-contrib=2023.03.15&h=50&w=50&mask=circle&maxage=7d "@adamlui")](https://github.com/adamlui)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/71683364?first-contrib=2023.03.16-get-functions&h=50&w=50&mask=circle&maxage=7d "@mefengl")](https://github.com/mefengl)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/131989355?first-contrib=2023.04.30-doc-translations&h=50&w=50&mask=circle&maxage=7d "@Zin6969")](https://github.com/Zin6969)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/30551844?first-contrib=2023.05.02-getlastresponse-bug-report&h=50&w=50&mask=circle&maxage=7d "@madruga8")](https://github.com/madruga8)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/54934866?first-contrib=2023.05.01-clearchats-discard-fix&h=50&w=50&mask=circle&maxage=7d "@XiaoYingYo")](https://github.com/XiaoYingYo)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/129722778?first-contrib=2023.05.24-css-readability&h=50&w=50&mask=circle&maxage=7d "@AliAlSarre")](https://github.com/AliAlSarre)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/100418457?first-contrib=2023.06.02-send-function-bug-report&h=50&w=50&mask=circle&maxage=7d "@madkarmaa")](https://github.com/madkarmaa)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/1170326?first-contrib=2023.06.10-html-parser-idea&h=50&w=50&mask=circle&maxage=7d "@wamoyo")](https://github.com/wamoyo)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/33952?first-contrib=2023.06.10-html-parser-idea&h=50&w=50&mask=circle&maxage=7d "@meiraleal")](https://github.com/meiraleal)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/in/29110&h=50&w=50&mask=circle&maxage=7d "Dependabot")](https://github.com/dependabot)
[![](https://images.weserv.nl/?url=https://i.imgur.com/tNyIPmG.jpg?h=50&w=50&mask=circle&maxage=7d "ChatGPT")](https://chat.openai.com)

<br>

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"></p>

<div id="star-history" align="center">

<br>

<a href="https://star-history.com/#kudoai/chatgpt.js&Timeline">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=kudoai/chatgpt.js&type=Timeline&theme=dark" />
    <img width=665 src="https://api.star-history.com/svg?repos=kudoai/chatgpt.js&type=Timeline" />
  </picture>
</a>

<br>*お役に立った場合は、このリポジトリに ⭐ を付けることを検討してください!*

</div>

#

<a href="https://github.com/kudoai/chatgpt.js/tree/main/dist">**リリース**</a> / 
<a href="https://github.com/kudoai/chatgpt.js/discussions">議論</a> / 
<a href="#">トップに戻る ↑</a>
