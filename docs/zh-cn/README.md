## 关于

chatgpt.js 是一个功能强大的 JavaScript 库，可轻松与 [ChatGPT DOM](https://chat.openai.com) 进行交互。

- 功能丰富
- 面向对象
- 易于使用
- 轻量级（但性能最优）

## 导入库

### ES6:

```js
import('https://code.chatgptjs.org/chatgpt-latest.min.js')
    .then(module => { yourCode() })

function yourCode() {
    // 这里是您的代码
}
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

### Greasemonkey:

诸如 Greasy Fork 之类的用户脚本存储库维护已批准 CDN 的白名单（例如来自 `cdn.jsdelivr.net` 的特定于提交的引用），因此导入 URL 相当长以保持对这些站点的可发布性：

```js
...
// @require https://cdn.jsdelivr.net/gh/chatgptjs/chatgpt.js@25d3b75b45a09687caa47c741b2718187927fee0/dist/chatgpt-1.2.3.min.js
// ==/UserScript==

// 这里是您的代码
```

如果您不打算发布到这些存储库，则可以使用 `https://code.chatgptjs.org/chatgpt-latest.min.js` 来提供最新的缩小版本。

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

#

<a href="https://github.com/chatgptjs/chatgpt.js/tree/main/dist">**版本发布**</a> / 
<a href="https://github.com/chatgptjs/chatgpt.js/discussions">讨论</a> / 
<a href="#">返回顶部 ↑</a>
