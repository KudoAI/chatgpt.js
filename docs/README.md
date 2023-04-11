## About

**chatgpt.js** is a powerful JavaScript library that allows for super easy interaction w/ the [ChatGPT DOM](https://chat.openai.com).

- Feature-rich
- Object-oriented
- Easy-to-use
- Lightweight (yet optimally performant)

## Importing the library

### ES6:

```js
import('https://code.chatgptjs.org/chatgpt-latest.min.js')
    .then(module => { yourCode() })

function yourCode() {
    // Your code starts here
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
        yourCode() // runs your code
    }
}
xhr.send()

function yourCode() {
    // Your code starts here
}
```

### Greasemonkey:

```js
...
// @require https://code.chatgptjs.org/chatgpt-latest.min.js
// ==/UserScript==

// Your code starts here
```

## Usage

**chatgpt.js** was written w/ ultra flexibility in mind.

For example:

```js
chatgpt.getLastResponse()
chatgpt.getLastReply()
chatgpt.get('reply', 'last')
```

Each call equally fetches the last response. If you think it works, it probabily will... so just type it! (Who has time for docs?)

If it didn't, simply submit an [issue](https://github.com/chatgptjs/chatgpt.js/issues) or [PR](https://github.com/chatgptjs/chatgpt.js/pulls) and it will be integrated, ezpz!

#

<a href="https://github.com/chatgptjs/chatgpt.js/tree/main/dist">**Releases**</a> / 
<a href="https://github.com/chatgptjs/chatgpt.js/discussions">Discuss</a> / 
<a href="#">Back to top ↑</a>
