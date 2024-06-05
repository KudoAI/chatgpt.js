<div id="repo-cover" align="center">

<div align="center">
    <h6>
        <a href="https://github.com/KudoAI/chatgpt.js/tree/main/docs">
            <picture>
                <source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptjs.org/images/icons/earth-americas-white-padded-icon17x15.svg?714b6a1">
                <img src="https://media.chatgptjs.org/images/icons/earth-americas-padded-icon17x15.svg?714b6a1">
            </picture>
        </a>
        हिंदी |
        <a href="../..#readme">English</a> |
        <a href="../zh-cn#readme">简体中文</a> |
        <a href="../zh-tw#readme">繁體中文</a> |
        <a href="../ja#readme">日本</a> |
        <a href="../ko#readme">한국인</a> |
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

### 🤖 चैटजीपीटी के लिए एक शक्तिशाली क्लाइंट-साइड जावास्क्रिप्ट लाइब्रेरी

</div>

<br>

<div id="shields" align="center">

[![](https://img.shields.io/github/stars/KudoAI/chatgpt.js?label=Stars&color=af68ff&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/KudoAI/chatgpt.js/stargazers)
[![](https://img.shields.io/badge/License-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/KudoAI/chatgpt.js?label=Commits&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/KudoAI/chatgpt.js/commits/main)
![](https://img.shields.io/badge/Clones-2K/month-869da0?logo=github&logoColor=white&labelColor=464646&style=for-the-badge)
[![](https://img.shields.io/github/size/KudoAI/chatgpt.js/dist/chatgpt.min.js?branch=v2.9.3&label=Minified%20Size&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge)](https://github.com/KudoAI/chatgpt.js/tree/v2.9.3/dist/chatgpt.min.js)
[![](https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=Code+Quality&logo=codefactor&logoColor=white&labelColor=464646&color=1acc6c&style=for-the-badge)](https://www.codefactor.io/repository/github/kudoai/chatgpt.js)
[![](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dkudoai_chatgpt.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonarcloud&logoColor=white&labelColor=464646&label=Vulnerabilities&color=gold)](https://sonarcloud.io/component_measures?metric=new_vulnerabilities&id=kudoai_chatgpt.js)
[![](https://img.shields.io/badge/Mentioned_in-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/sindresorhus/awesome-chatgpt#javascript)
[![](https://img.shields.io/badge/Featured_on-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.producthunt.com/posts/chatgpt-js)
![](https://img.shields.io/badge/jsDelivr_Requests-1,500,000+-2bbbd8.svg?logo=jsdelivr&logoColor=white&labelColor=464646&style=for-the-badge)

</div>

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="intro">

## 💡 अभाउट

</div>

<span style="color: white">chatgpt.js</span> एक <span style="color: white">शक्तिशाली</span> जावास्क्रिप्ट लाइब्रेरी है जो ChatGPT DOM के साथ <span style="color: white">बेहद आसान</span> इंटरैक्शन की अनुमति देती है।

- सुविधा संपन्न
- ऑब्जेक्ट-ओरिएन्टेड
- प्रयोग करने में आसान
- लाइटवेट (फिर भी सर्वोत्तम प्रदर्शन करने वाला)

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="importing">

## ⚡ लाइब्रेरी इम्पोर्ट करने के तरीके

</div>

> **ध्यान दें** _हमेशा नवीनतम संस्करण आयात करने के लिए (उत्पादन में अनुशंसित नहीं!) संस्करण वाले jsDelivr URL को इसके साथ बदलें: `https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js/chatgpt.min.js`_

### ES6:

```js
(async () => {
    await import('https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@2.9.3/dist/chatgpt.min.js');    
    // आपका कोड यहां लिखें...
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
        yourCode() // आपका कोड ये फंक्शन चलाएगा
    }
}
xhr.send()

function yourCode() {
    // आपका कोड यहां लिखें...
}
```

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://media.chatgptjs.org/images/icons/platforms/tampermonkey/icon28.png?a3e53bf7"><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://media.chatgptjs.org/images/icons/platforms/violentmonkey/icon25.png?a3e53bf7"> Greasemonkey:

> **टिप्पणी** _स्टार्टर टेम्पलेट का उपयोग करने के लिए: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/KudoAI/chatgpt.js-greasemonkey-starter)_

```js
...
// @require https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@2.9.3/dist/chatgpt.min.js
// ==/UserScript==

// आपका कोड यहां लिखें...
```

### <img style="margin: 0 2px -1px 0" height=16 src="https://media.chatgptjs.org/images/icons/platforms/chrome/icon16.png?8c852fa5"> Chrome:

> **टिप्पणी** _स्टार्टर टेम्पलेट का उपयोग करने के लिए: [kudoai/chatgpt.js-chrome-starter](https://github.com/KudoAI/chatgpt.js-chrome-starter)_

चूँकि Google रिमोट कोड की अनुमति नहीं देता है, इसलिए Chatgpt.js को स्थानीय रूप से आयात करना आवश्यक है:

1. https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/chatgpt.js ये लिंक को अपने सब डायरेक्टरी में सेव करे (इस उदाहरण में यह `lib` है)

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

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="npm">

## 💾 npm के माध्यम से डाउनलोड करना:

</div>

स्थानीय अनुकूलन के लिए **chatgpt.js** डाउनलोड करने के लिए, अपने प्रोजेक्ट के रूट में निम्नलिखित कमांड चलाएँ:

```bash
npm install @kudoai/chatgpt.js
```

इंस्टालेशन के बाद, लाइब्रेरी स्रोत खोजने के लिए `node_modules/@kudoai/chatgpt.js` पर नेविगेट करें।

</div>

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="usage">

## 💻 प्रयोग

</div>

**chatgpt.js** को लिखते समय उसके फ्लेक्सिबिलिटी को ध्यान में रखकर लिखा गया है।

उदाहरण के लिए:

```js
chatgpt.getLastResponse()
chatgpt.getLastReply()
chatgpt.response.getLast()
chatgpt.get('reply', 'last')
```

यह सभी समान रिजल्ट देते है, जैसे की लास्ट रिस्पॉन्स। अगर आपको लगता है कि जो आप लिख रहे है वो काम करेगा..., तो यह संभव है की वो काम करेगा तो बस लिख के देखें।

यदि ऐसा नहीं हुआ, तो विस्तारित [यूजरगाइड](https://github.com/KudoAI/chatgpt.js/blob/v2.9.3/docs/USERGUIDE.md) देखें, या बस एक [इश्यू](https://github.com/KudoAI/chatgpt.js/issues) सबमिट करें या [PR](https://github.com/KudoAI/chatgpt.js/pulls) और इसे एकीकृत किया जाएगा, आसान!

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="showcase">

## 🤖 chatgpt.js के साथ बनाया गया

</div>

https://github.com/KudoAI/chatgpt.js/assets/10906554/f53c740f-d5e0-49b6-ae02-3b3140b0f8a4

#

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.autoclearchatgpt.com/images/icons/openai/white/icon48.png?cece513"><img width=21 src="https://media.autoclearchatgpt.com/images/icons/openai/black/icon48.png?cece513"></picture> [ऑटोक्लियर चैटजीपीटी हिस्ट्री](https://autoclearchatgpt.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://media.autoclearchatgpt.com/images/badges/awesome/badge.svg?2c0d9fc" style="margin:0 0 -2px 5px"></a>

> यह ऑटो क्लियर एक्सटेंशन आपकी हिस्ट्री को मिटाता है अधिकतम प्राइवेसी के लिए।
<br>[इंस्टॉल](https://docs.autoclearchatgpt.com/#-installation) / 
[रीडमी](https://docs.autoclearchatgpt.com/#readme) / 
[चर्चा करना](https://github.autoclearchatgpt.com/discussions)

### <img width=24 src="https://media.bravegpt.com/images/icons/bravegpt/icon48.png?0a9e287"> [BraveGPT](https://bravegpt.com) &nbsp;<a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> ब्रेव सर्च साइडबार में चैटजीपीटी उत्तर प्रदर्शित करें (GPT-4o द्वारा संचालित!)
<br>[इंस्टॉल](https://docs.bravegpt.com/#-installation) / 
[रीडमी](https://docs.bravegpt.com/#readme) / 
[चर्चा करना](https://github.bravegpt.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptautocontinue.com/images/icons/openai/white/icon48.png?7bbd222"><img width=21 src="https://media.chatgptautocontinue.com/images/icons/openai/black/icon48.png?7bbd222"></picture> [चैटजीपीटी ऑटो-कंटिन्यू ⏩](https://chatgptautocontinue.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://media.chatgptautocontinue.com/images/badges/awesome/badge.svg?3c80c0c" style="margin:0 0 -3px 3px"></a>

> ऑटोमैटिक रूप से एकाधिक चैटजीपीटी प्रतिक्रियाएँ उत्पन्न करना जारी रखें।
<br>[इंस्टॉल](https://docs.chatgptautocontinue.com/#-installation) / 
[रीडमी](https://docs.chatgptautocontinue.com/#readme) / 
[चर्चा करना](https://github.chatgptautocontinue.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptautorefresh.com/images/icons/openai/white/icon48.png?a45cf1e"><img width=21 src="https://media.chatgptautorefresh.com/images/icons/openai/black/icon48.png?a45cf1e"></picture> [चैटजीपीटी ऑटो रिफ्रेश ↻](https://chatgptautorefresh.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://media.chatgptautorefresh.com/images/badges/awesome/badge.svg?1080f44" style="margin:0 0 -2px 5px"></a>

> चैटजीपीटी सत्रों को ताज़ा रखता है, चैट समय सीमा + नेटवर्क त्रुटियों + क्लाउडफ्लेयर जांच को समाप्त करता है।
<br>[इंस्टॉल](https://docs.chatgptautorefresh.com/#-installation) / 
[रीडमी](https://docs.chatgptautorefresh.com/#readme) / 
[चर्चा करना](https://github.chatgptautorefresh.com/discussions)

### <img width=23 src="https://media.ddgpt.com/images/icons/duckduckgpt/icon48.png?af89302"> [DuckDuckGPT](https://duckduckgpt.com) &nbsp;<a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> DuckDuckGo साइडबार में ChatGPT उत्तर प्रदर्शित करें (GPT-4o द्वारा संचालित!)
<br>[इंस्टॉल](https://docs.ddgpt.com/#-installation) / 
[रीडमी](https://docs.ddgpt.com/#readme) / 
[चर्चा करना](https://github.ddgpt.com/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.googlegpt.io/images/icons/googlegpt/white/icon32.png?8652a6e"><img width=21 src="https://media.googlegpt.io/images/icons/googlegpt/black/icon32.png?8652a6e"></picture> [GoogleGPT](https://googlegpt.io) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://media.googlegpt.io/images/badges/awesome/badge.svg?699c63d" style="margin:0 0 -2px 5px"></a>

> Google खोज साइडबार में ChatGPT उत्तर प्रदर्शित करें (GPT-4o + Google Gemma द्वारा संचालित!)
<br>[इंस्टॉल](https://greasyfork.googlegpt.io) /
[रीडमी](https://docs.googlegpt.io/#readme) /
[चर्चा करना](https://github.googlegpt.io/discussions)

### <img width=23 src="https://media.chatgptjs.org/images/icons/platforms/thunderbird/icon32.png?313a9c5"> [ThunderAI](https://micz.it/thunderdbird-addon-thunderai/)

> अपने ईमेल को बेहतर बनाने के लिए थंडरबर्ड में चैटजीपीटी का उपयोग करें, यहां तक कि मुफ़्त खाते के साथ भी!
<br>[इंस्टॉल](https://addons.thunderbird.net/thunderbird/addon/thunderai/) /
[रीडमी](https://micz.it/thunderdbird-addon-thunderai/) /
[सहायता](https://github.com/micz/ThunderAI/issues)

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
यदि आपने chatgpt.js के साथ कुछ बनाया है जिसे आप साझा करना चाहते हैं, तो ईमेल करें <a href="mailto:showcase@chatgptjs.org">showcase@chatgptjs.org</a> या बस एक <a href="https://github.com/KudoAI/chatgpt.js/pulls" target="_blank" rel="noopener">पुल अनुरोध</a>!
</p>

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div id="contributors">

## 🧠 योगदानकर्ता

</div>

यह लाइब्रेरी निम्नलिखित योगदानकर्ताओं के कोड, अनुवाद, मुद्दों और विचारों की बदौलत मौजूद है:

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

## 🤝 भागीदारों

</div>

**chatgpt.js** को आंशिक रूप से वित्त पोषित किया जाता है:

<div id="partners-collage" align="center">

<picture>
    <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://media.chatgptjs.org/images/logos/partners/collage/white.png?3109608">
    <img width=888 src="https://media.chatgptjs.org/images/logos/partners/collage/black.png?3109608">
</picture>

</div>

<br>

<img height=8px width="100%" src="https://media.chatgptjs.org/images/separators/gradient-aqua.png?78210a7">

<div align="center">

**[विज्ञप्ति](https://github.com/KudoAI/chatgpt.js/releases)** /
[यूजरगाइड](https://github.com/KudoAI/chatgpt.js/blob/v2.9.3/docs/USERGUIDE.md) / 
[चर्चा करना](https://github.com/KudoAI/chatgpt.js/discussions) / 
<a href="#">वापस शीर्ष पर ↑</a>

</div>
