<div id="repo-cover" align="center">

<div align="center">

###### <a href="https://github.com/kudoai/chatgpt.js/tree/main/docs"><img height="16" style="margin: 0 3px -2px" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/icons/language.png"></a> हिंदी | <a href="../..#readme">English</a> | <a href="../zh-cn#readme">简体中文</a> | <a href="../zh-tw#readme">繁體中文</a> | <a href="../ja#readme">日本</a> | <a href="../ko#readme">한국인</a> | <a href="../de#readme">Deutsch</a> | <a href="../es#readme">Español</a> | <a href="../fr#readme">Français</a> | <a href="../it#readme">Italiano</a> | <a href="../nl#readme">Nederlands</a> | <a href="../pt#readme">Português</a> | <a href="../vi#readme">Việt</a>
    
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

<div id="shields" align="center">

[![](https://img.shields.io/badge/License-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/kudoai/chatgpt.js?label=Commits&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/kudoai/chatgpt.js/commits/main)
![](https://img.shields.io/github/size/kudoai/chatgpt.js/dist/chatgpt-2.0.1.min.js?label=Minified%20Size&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge)
[![](https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=Code+Quality&logo=codefactor&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.codefactor.io/repository/github/kudoai/chatgpt.js)
[![](https://img.shields.io/badge/Mentioned_in-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/sindresorhus/awesome-chatgpt#javascript)
[![](https://img.shields.io/badge/Featured_on-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.producthunt.com/posts/chatgpt-js)
![](https://img.shields.io/jsdelivr/gh/hm/kudoai/chatgpt.js?label=jsDelivr+Hits&logo=jsdelivr&logoColor=white&labelColor=464646&color=gold&style=for-the-badge)

</div>

## अभाउट

**chatgpt.js** एक शक्तिशाली जावास्क्रिप्ट लाइब्रेरी है जो ChatGPT DOM के साथ बेहद आसान इंटरैक्शन की अनुमति देती है।

- सुविधा संपन्न
- ऑब्जेक्ट-ओरिएन्टेड
- प्रयोग करने में आसान
- लाइटवेट (फिर भी सर्वोत्तम प्रदर्शन करने वाला)

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## ⚡ लाइब्रेरी इम्पोर्ट करने के तरीके

### ES6:

```js
(async () => {
    await import('https://code.chatgptjs.org/chatgpt-latest.min.js');    
    // आपका कोड यहां लिखें...
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
        yourCode() // आपका कोड ये फंक्शन चलाएगा
    }
}
xhr.send()

function yourCode() {
    // आपका कोड यहां लिखें...
}
```

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/starters/media/images/icons/tampermonkey-icon28.png"></picture><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/starters/media/images/icons/violentmonkey-icon100.png"> Greasemonkey:

> **टिप्पणी** _स्टार्टर टेम्पलेट का उपयोग करने के लिए: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/kudoai/chatgpt.js-greasemonkey-starter)_

यूजरस्क्रिप्ट जैसे ग्रेसी फोर्क मेंटेन करते है व्हाइटलिस्ट प्री-अप्रूव्ड CDN (जैसे `cdn.jsdelivr.net` मेसे कमिट स्पेसिफिक रेफरेंस) की एक श्वेतसूची बनाए रखते हैं, इसलिए इन साइटों पर पब्लिश करने की क्षमता बनाए रखने के लिए इम्पोर्ट URL काफी लंबा है:

```js
...
// @require https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@b9b8ac236a8795b56691bf3dc10a8a1a928d2e8f/dist/chatgpt-2.0.1.min.js
// ==/UserScript==

// आपका कोड यहां लिखें...
```

यदि आप इन रिपोजिटरी पर पब्लिश करने की योजना नहीं बनाते हैं, इसी कितरा ये  `https://code.chatgptjs.org/chatgpt-latest.min.js` यूज़ करसकते है।

### <img style="margin: 0 2px -1px 0" height=16 src="https://www.google.com/chrome/static/images/favicons/apple-icon-60x60.png"> Chrome:

चूंकि Google [अंततः चरणबद्ध तरीके से समाप्त](https://developer.chrome.com/docs/extensions/migrate/mv2-sunset/) मेनिफेस्ट V2, रिमोट कोड की अनुमति नहीं दी जाएगी, इसलिए स्थानीय रूप से चैटजीपीटी.जेएस इम्पोर्ट करना सहिहै है:

> **टिप्पणी** _स्टार्टर टेम्पलेट का उपयोग करने के लिए: [kudoai/chatgpt.js-chrome-starter](https://github.com/kudoai/chatgpt.js-chrome-starter)_

1. https://raw.githubusercontent.com/kudoai/chatgpt.js/main/chatgpt.js ये लिंक को अपने सब डायरेक्टरी में सेव करे (इस उदाहरण में यह `lib` है)

2. ES6 का एक्सपोर्ट स्टेटमेंट `lib/chatgpt.js` के अंत में रखे

```js
...
export { chatgpt }
```

3. प्रोजेक्ट(V3) `manifest.json` में, `lib/chatgpt.js` को वेब एक्सेसिबल रिसोर्स के रूप में जोड़ें
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.js"]
    }],
```

4. उन स्क्रिप्ट्स में जिन्हें `chatgpt.js` (फॉरेग्राउंड बैकग्राउंड जैसे) की आवश्यकता है, इसे इस प्रकार इम्पोर्ट करें:
```js
(async () => {
    const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'));
    // आपका कोड यहां लिखें...
})();
```

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 💻 प्रयोग

**chatgpt.js** को लिखते समय उसके फ्लेक्सिबिलिटी को ध्यान में रखकर लिखा गया है।

उदाहरण के लिए:

```js
chatgpt.getLastResponse()
chatgpt.getLastReply()
chatgpt.response.getLast()
chatgpt.get('reply', 'last')
```

यह सभी समान रिजल्ट देते है, जैसे की लास्ट रिस्पॉन्स। अगर आपको लगता है कि जो आप लिख रहे है वो काम करेगा..., तो यह संभव है की वो काम करेगा तो बस लिख के देखें।


यदि ऐसा नहीं हुआ, तो बस एक [इशू](https://github.com/kudoai/chatgpt.js/issues) या [PR](https://github.com/kudoai/chatgpt.js/pulls) सबमिट करें और हम न्यू अपडेट में ऐड कराएंगे, बहुत आसान!

<p><img type="separator" height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png"></p>

## 🤖 chatgpt.js के साथ बनाया गया

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ऑटोक्लियर चैटजीपीटी हिस्ट्री](https://chatgptevo.com/autoclear) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

यह ऑटो क्लियर एक्सटेंशन आपकी हिस्ट्री को मिटाता है अधिकतम प्राइवेसी के लिए।
<br>[इंस्टॉल](https://github.com/adamlui/autoclear-chatgpt-history#installation) / 
[रीडमी](https://github.com/adamlui/autoclear-chatgpt-history#readme) / 
[चर्चा करना](https://github.com/adamlui/autoclear-chatgpt-history/discussions)

### <img width=16 src="https://i.imgur.com/1yjmK3W.png"> [Automatic ChatGPT DAN](https://github.com/madkarmaa/automatic-chatgpt-dan)

चैटजीपीटी को ऑटोमैटिक रूप से DAN संकेत भेजें।
<br>[इंस्टॉल](https://github.com/madkarmaa/automatic-chatgpt-dan#%EF%B8%8F-installation) / 
[रीडमी](https://github.com/madkarmaa/automatic-chatgpt-dan#readme) / 
[चर्चा करना](https://github.com/madkarmaa/automatic-chatgpt-dan/issues)

### <img src="https://media.bravegpt.com/images/bravegpt-icon48.png" width=18> [BraveGPT](https://bravegpt.com) <a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

ब्रेव सर्च साइडबार में चैटजीपीटी उत्तर प्रदर्शित करें (GPT-4 द्वारा संचालित!)
<br>[इंस्टॉल](https://greasyfork.org/scripts/462440-bravegpt) / 
[रीडमी](https://github.bravegpt.com/#installation) / 
[चर्चा करना](https://github.bravegpt.com/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [चैटजीपीटी ऑटो-कंटिन्यू ⏩](https://chatgptevo.com/autocontinue/github) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -3px 3px"></a>

ऑटोमैटिक रूप से एकाधिक चैटजीपीटी प्रतिक्रियाएँ उत्पन्न करना जारी रखें।<br>
[इंस्टॉल](https://github.com/adamlui/chatgpt-auto-continue#installation) / 
[रीडमी](https://github.com/adamlui/chatgpt-auto-continue#readme) / 
[चर्चा करना](https://chatgptevo.com/autocontinue/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [चैटजीपीटी ऑटो रिफ्रेश ↻](https://chatgptevo.com/autorefresh) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

नेटवर्क त्रुटियों + क्लाउडफ्लेयर जांच को खत्म करने के लिए चैटजीपीटी सेशन को ताज़ा रखता है।
<br>[इंस्टॉल](https://github.com/adamlui/chatgpt-auto-refresh#installation) / 
[रीडमी](https://github.com/adamlui/chatgpt-auto-refresh#readme) / 
[चर्चा करना](https://github.com/adamlui/chatgpt-auto-refresh/discussions)

### <img src="https://media.duckduckgpt.com/images/ddgpt-icon48.png" width=17> [DuckDuckGPT](https://duckduckgpt.com) <a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

डकडकगो साइडबार में चैटजीपीटी उत्तर प्रदर्शित करें (GPT-4 द्वारा संचालित!)
<br>[इंस्टॉल](https://github.duckduckgpt.com/#installation) / 
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
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/62183023?first-contrib=2023.07.24-fix-hi-doc&h=50&w=50&mask=circle&maxage=7d '@iamnishantgaharwar')](https://github.com/iamnishantgaharwar)
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
