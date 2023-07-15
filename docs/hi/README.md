<div id="repo-cover" align="center">

<div align="center">

###### हिंदी | <a href="../..#readme">English</a> | <a href="../zh-cn#readme">简体中文</a> | <a href="../ja#readme">日本</a> | <a href="../ko#readme">한국인</a> | <a href="../de#readme">Deutsch</a> | <a href="../es#readme">Español</a> | <a href="../fr#readme">Français</a> | <a href="../it#readme">Italiano</a> | <a href="../pt#readme">Português</a>
    
</div>

<br>

<h3>

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
    <img width=700 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
</picture>
<br><br>

🤖 चैटजीपीटी के लिए एक शक्तिशाली क्लाइंट-साइड जावास्क्रिप्ट लाइब्रेरी
<br><br>

</div>
</h3>

<div align="center">

[![](https://img.shields.io/badge/License-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/kudoai/chatgpt.js?label=Commits&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/kudoai/chatgpt.js/commits/main)
![](https://img.shields.io/github/size/kudoai/chatgpt.js/dist/chatgpt-2.0.0.min.js?label=Minified%20Size&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge)
[![](https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=Code+Quality&logo=codefactor&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.codefactor.io/repository/github/kudoai/chatgpt.js)
[![](https://img.shields.io/badge/Mentioned_in-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/sindresorhus/awesome-chatgpt#javascript)
[![](https://img.shields.io/badge/Featured_on-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.producthunt.com/posts/chatgpt-js)
![](https://img.shields.io/jsdelivr/gh/hw/kudoai/chatgpt.js?label=jsDelivr+Hits&logo=jsdelivr&logoColor=white&labelColor=464646&color=gold&style=for-the-badge)

</div>

## के बारे में

**chatgpt.js** एक शक्तिशाली जावास्क्रिप्ट लाइब्रेरी है जो ChatGPT DOM के साथ बेहद आसान इंटरैक्शन की अनुमति देती है।

- सुविधा संपन्न
- वस्तु के उन्मुख
- प्रयोग करने में आसान
- हल्का (फिर भी सर्वोत्तम प्रदर्शन करने वाला)

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## ⚡ लाइब्रेरी आयात करना

### ES6:

```js
(async () => {
    await import('https://code.chatgptjs.org/chatgpt-latest.min.js');    
    // आपका कोड यहां...
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
        yourCode() // आपका कोड चलाता है
    }
}
xhr.send()

function yourCode() {
    // आपका कोड यहां...
}
```

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://i.imgur.com/SATGr8j.png"></picture><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://i.imgur.com/wcCg3al.png"> Greasemonkey:

> **टिप्पणी** _स्टार्टर टेम्पलेट का उपयोग करने के लिए: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/kudoai/chatgpt.js-greasemonkey-starter)_

Greasy Fork जैसे उपयोगकर्तास्क्रिप्ट रिपॉजिटरी पूर्व-अनुमोदित CDN (जैसे `cdn.jsdelivr.net` से प्रतिबद्ध-विशिष्ट संदर्भ) की एक श्वेतसूची बनाए रखते हैं, इसलिए इन साइटों पर प्रकाशन क्षमता बनाए रखने के लिए आयात URL काफी लंबा है:

```js
...
// @require https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@b9b8ac236a8795b56691bf3dc10a8a1a928d2e8f/dist/chatgpt-2.0.0.min.js
// ==/UserScript==

// आपका कोड यहां...
```

यदि आप इन रिपोज़ पर प्रकाशित करने की योजना नहीं बनाते हैं, तो नवीनतम मिनीफ़ाइड रिलीज़ को आयात करने के लिए सरल `https://code.chatgptjs.org/chatgpt-latest.min.js` का उपयोग किया जा सकता है।

### <img style="margin: 0 2px -1px 0" height=16 src="https://www.google.com/chrome/static/images/favicons/apple-icon-60x60.png"> Chrome:

चूंकि Google [अंततः चरणबद्ध तरीके से समाप्त](https://developer.chrome.com/docs/extensions/migrate/mv2-sunset/) मेनिफेस्ट V2, रिमोट कोड की अनुमति नहीं दी जाएगी, इसलिए स्थानीय रूप से चैटजीपीटी.जेएस आयात करना आदर्श है:

> **टिप्पणी** _स्टार्टर टेम्पलेट का उपयोग करने के लिए: [kudoai/chatgpt.js-chrome-starter](https://github.com/kudoai/chatgpt.js-chrome-starter)_

1. https://raw.githubusercontent.com/kudoai/chatgpt.js/main/chatgpt.js को उपनिर्देशिका में सहेजें (इस उदाहरण में `lib`)

2. `lib/chatgpt.js` के अंत में ES6 निर्यात विवरण जोड़ें
```js
...
export { chatgpt }
```

3. प्रोजेक्ट के (V3) `manifest.json` में, `lib/chatgpt.js` को वेब एक्सेसिबल संसाधन के रूप में जोड़ें
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.js"]
    }],
```

4. उन स्क्रिप्ट्स में जिन्हें `chatgpt.js` (अग्रभूमि/पृष्ठभूमि समान) की आवश्यकता है, इसे इस प्रकार आयात करें:
```js
(async () => {
    const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'));
    // आपका कोड यहां...
})();
```

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 💻 प्रयोग

**chatgpt.js** अति लचीलेपन को ध्यान में रखकर लिखा गया था।

उदाहरण के लिए:

```js
chatgpt.getLastResponse()
chatgpt.getLastReply()
chatgpt.response.getLast()
chatgpt.get('reply', 'last')
```

प्रत्येक कॉल समान रूप से अंतिम प्रतिक्रिया लाती है। यदि आपको लगता है कि यह काम करता है, तो संभवतः यह काम करेगा... तो बस इसे टाइप करें! (दस्तावेज़ों के लिए किसके पास समय है?)

यदि ऐसा नहीं हुआ, तो बस एक [मुद्दा](https://github.com/kudoai/chatgpt.js/issues) या [PR](https://github.com/kudoai/chatgpt.js/pulls) सबमिट करें और इसे एकीकृत किया जाएगा, बहुत आसान!

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 🤖 chatgpt.js के साथ बनाया गया

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ChatGPT इतिहास को हटाएं](https://chatgptevo.com/autoclear) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

अधिकतम गोपनीयता के लिए अपने ChatGPT क्वेरी इतिहास को स्वतः साफ़ करें।
<br>[स्थापित करना](https://github.com/adamlui/autoclear-chatgpt-history#installation) / 
[रीडमी](https://github.com/adamlui/autoclear-chatgpt-history#readme) / 
[चर्चा करना](https://github.com/adamlui/autoclear-chatgpt-history/discussions)

### <img width=16 src="https://i.imgur.com/1yjmK3W.png"> [Automatic ChatGPT DAN](https://github.com/madkarmaa/automatic-chatgpt-dan)

चैटजीपीटी को स्वचालित रूप से DAN संकेत भेजें।
<br>[स्थापित करना](https://github.com/madkarmaa/automatic-chatgpt-dan#%EF%B8%8F-installation) / 
[रीडमी](https://github.com/madkarmaa/automatic-chatgpt-dan#readme) / 
[चर्चा करना](https://github.com/madkarmaa/automatic-chatgpt-dan/issues)

### <img src="https://media.bravegpt.com/images/bravegpt-icon48.png" width=18> [BraveGPT](https://bravegpt.com) <a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

ब्रेव सर्च साइडबार में चैटजीपीटी उत्तर प्रदर्शित करें (GPT-4 द्वारा संचालित!)
<br>[स्थापित करना](https://greasyfork.org/scripts/462440-bravegpt) / 
[रीडमी](https://github.bravegpt.com/#installation) / 
[चर्चा करना](https://github.bravegpt.com/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT स्वचालित-प्रचालित रखें ⏩](https://chatgptevo.com/autocontinue/github) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -3px 3px"></a>

स्वचालित रूप से एकाधिक ChatGPT प्रतिक्रियाएँ उत्पन्न करना जारी रखें।<br>
[स्थापित करना](https://github.com/adamlui/chatgpt-auto-continue#installation) / 
[रीडमी](https://github.com/adamlui/chatgpt-auto-continue#readme) / 
[चर्चा करना](https://chatgptevo.com/autocontinue/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ChatGPT स्वचालित रीफ़्रेश ↻](https://chatgptevo.com/autorefresh) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

नेटवर्क त्रुटियों + क्लाउडफ्लेयर जांच को खत्म करने के लिए चैटजीपीटी सत्रों को ताज़ा रखता है।
<br>[स्थापित करना](https://github.com/adamlui/chatgpt-auto-refresh#installation) / 
[रीडमी](https://github.com/adamlui/chatgpt-auto-refresh#readme) / 
[चर्चा करना](https://github.com/adamlui/chatgpt-auto-refresh/discussions)

### <img src="https://media.duckduckgpt.com/images/ddgpt-icon48.png" width=17> [DuckDuckGPT](https://duckduckgpt.com) <a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

DuckDuckGo साइडबार में ChatGPT उत्तर प्रदर्शित करें (GPT-4 द्वारा संचालित!)
<br>[स्थापित करना](https://github.duckduckgpt.com/#installation) / 
[रीडमी](https://github.duckduckgpt.com/#readme) / 
[चर्चा करना](https://github.duckduckgpt.com/discussions)

<br>

<a href="https://chatgptinfinity.com" target="_blank"><img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-infinity/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png"></a>

<br>

<a href="https://chatgptwidescreen.com" target="_blank"><img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png"></a>

<br>

यदि आपने chatgpt.js के साथ कुछ बनाया है जिसे आप साझा करना चाहते हैं, तो ईमेल करें [showcase@chatgptjs.org](mailto:showcase@chatgptjs.org) या बस एक [पुल अनुरोध] खोलें(https://github.com/kudoai/chatgpt.js/pulls)!

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 🧠 योगदानकर्ता

यह लाइब्रेरी निम्नलिखित योगदानकर्ताओं के कोड, अनुवाद, मुद्दों और विचारों की बदौलत मौजूद है:

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

<br>*अगर इससे आपको मदद मिली तो इस रेपो को ⭐ देने पर विचार करें!*

</div>

#

<a href="https://github.com/kudoai/chatgpt.js/tree/main/dist">**विज्ञप्ति**</a> / 
<a href="https://github.com/kudoai/chatgpt.js/discussions">चर्चा करना</a> / 
<a href="#">वापस शीर्ष पर ↑</a>
