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

### 🤖 चैटजीपीटी के लिए एक शक्तिशाली क्लाइंट-साइड जावास्क्रिप्ट लाइब्रेरी

</div>

<br>

<div id="shields" align="center">

<a href="LICENSE.md" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/License-MIT-orange.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="https://www.npmjs.com/package/@kudoai/chatgpt.js/v/latest" target="_blank" rel="noopener">
    <img src="https://img.shields.io/npm/v/%40kudoai%2Fchatgpt.js?logo=npm&logoColor=white&labelColor=464646&color=blue&style=for-the-badge&label=Latest+Release"></a>
<a href="https://github.com/KudoAI/chatgpt.js/tree/v3.9.0/dist/chatgpt.min.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/github/size/KudoAI/chatgpt.js/dist/chatgpt.min.js?branch=v3.9.0&label=Minified%20Size&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge"></a>
<a href="https://www.codefactor.io/repository/github/kudoai/chatgpt.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=Code+Quality&logo=codefactor&logoColor=white&labelColor=464646&color=1acc6c&style=for-the-badge"></a>
<a href="https://sonarcloud.io/component_measures?metric=vulnerabilities&id=kudoai_chatgpt.js" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fsonarcloud.io%2Fapi%2Fmeasures%2Fcomponent%3Fcomponent%3Dkudoai_chatgpt.js%26metricKeys%3Dvulnerabilities&query=%24.component.measures.0.value&style=for-the-badge&logo=sonar&logoColor=white&labelColor=464646&label=Vulnerabilities&color=gold"></a>
<a href="https://github.com/sindresorhus/awesome-chatgpt#javascript" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/Mentioned_in-Awesome-af68ff?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge"></a>
<a href="#">
    <img src="https://img.shields.io/badge/jsDelivr_Requests-2,000,000+-2bbbd8.svg?logo=jsdelivr&logoColor=white&labelColor=464646&style=for-the-badge"></a>

</div>

<br>

<hr>

## ⚡ लाइब्रेरी इम्पोर्ट करने के तरीके

</div>

#### [<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/chrome/icon16.png" title="Chrome">][web-usage][<img height=13.5 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/edge/icon16.png" title="Edge">][web-usage][<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/firefox/icon16.png" title="Firefox">][web-usage][<img height=14 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/safari/icon16.png" title="Safari">][web-usage][<img height=13 src="https://cdn.jsdelivr.net/gh/adamlui/ai-web-extensions@c226de5/assets/images/icons/browsers/qq/3d/icon-32x33.png" title="QQ Browser">][web-usage] Web:

[web-usage]: #-web

```js
<script src="https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3/dist/chatgpt.min.js"></script>
```

#### [<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/tampermonkey/icon28.png" title="Tampermonkey">][greasemonkey-usage][<img height="15" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/violentmonkey/icon25.png" title="Violentmonkey">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/scriptcat/icon32.png" title="ScriptCat">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/orangemonkey/icon16.png" title="OrangeMonkey">][greasemonkey-usage][<img height="14" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/stay/icon32.png" title="Stay">][greasemonkey-usage][<img height="13" src="https://cdn.jsdelivr.net/gh/adamlui/userscripts@2793398/assets/images/icons/userscript-managers/userscripts/icon32.png" title="Userscripts">][greasemonkey-usage] Greasemonkey:

[greasemonkey-usage]: #-greasemonkey

> **टिप्पणी** _स्टार्टर टेम्पलेट का उपयोग करने के लिए: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/KudoAI/chatgpt.js-greasemonkey-starter)_

```js
...
// @require https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3/dist/chatgpt.min.js
// ==/UserScript==

// आपका कोड यहां लिखें...
```

### <img style="margin: 0 2px -1px 0" height=16 src="https://assets.chatgptjs.org/images/icons/platforms/chrome/icon16.png?v=e638eac"> Chrome:

> **टिप्पणी** _स्टार्टर टेम्पलेट का उपयोग करने के लिए: [kudoai/chatgpt.js-chrome-starter](https://github.com/KudoAI/chatgpt.js-chrome-starter)_

चूँकि गूगल रिमोट कोड की अनुमति नहीं देता है, इसलिए चैटजीपीटी.जे.एस को स्थानीय रूप से इम्पोर्ट करना आवश्यक है:

1. https://cdn.jsdelivr.net/npm/@kudoai/chatgpt.js@3/dist/chatgpt.min.js ये लिंक को अपने सब डायरेक्टरी में सेव करे (इस उदाहरण में यह `lib` है)

2. प्रोजेक्ट(V3) `manifest.json` में, `lib/chatgpt.min.js` को वेब एक्सेसिबल रिसोर्स के रूप में जोड़ें
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.min.js"]
    }],
```

3. उन स्क्रिप्ट्स में जिन्हें `chatgpt.js` (फॉरेग्राउंड बैकग्राउंड जैसे) की आवश्यकता है, इसे इस प्रकार इम्पोर्ट करें:
```js
(async () => {
    await import(chrome.runtime.getURL('lib/chatgpt.min.js'))
    // आपका कोड यहां लिखें...
})()
```

<img height=10px width="100%" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e638eac/assets/images/separators/gradient-aqua.png">

<div id="npm">

## 💾 npm के माध्यम से डाउनलोड करना:

</div>

स्थानीय अनुकूलन के लिए **chatgpt.js** डाउनलोड करने के लिए, अपने प्रोजेक्ट के रूट में निम्नलिखित कमांड चलाएँ:

```bash
npm install @kudoai/chatgpt.js
```

इंस्टालेशन के बाद, लाइब्रेरी स्रोत खोजने के लिए `node_modules/@kudoai/chatgpt.js` पर नेविगेट करें।

</div>

<img height=10px width="100%" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e638eac/assets/images/separators/gradient-aqua.png">

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

यदि ऐसा नहीं हुआ, तो विस्तारित [यूजरगाइड](https://github.com/KudoAI/chatgpt.js/blob/v3.9.0/docs/USERGUIDE.md) देखें, या बस एक [इश्यू](https://github.com/KudoAI/chatgpt.js/issues) सबमिट करें या [PR](https://github.com/KudoAI/chatgpt.js/pulls) और इसे एकीकृत किया जाएगा, आसान!

<img height=10px width="100%" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e638eac/assets/images/separators/gradient-aqua.png">

<div id="showcase">

## 🤖 chatgpt.js के साथ बनाया गया

</div>

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://amazongpt.kudoai.com/assets/images/icons/app/white/icon48.png"><img width=20 src="https://amazongpt.kudoai.com/assets/images/icons/app/black-gold-teal/icon48.png"></picture> [AmazonGPT](https://amazongpt.kudoai.com)  &nbsp;<a href="https://amazongpt.kudoai.com/assets/wolfram-award/letter.pdf" target="_blank" rel="noopener"><img height=20 src="https://amazongpt.kudoai.com/assets/images/badges/wolfram-award/gold-badge.png" style="margin:0 0 -2px 5px"></a>

> नवीनतम LLM द्वारा संचालित Amazon शॉपिंग में AI चैट और उत्पाद/श्रेणी सारांश जोड़ें!
<br>[Install](https://raw.githubusercontent.com/KudoAI/amazongpt/main/greasemonkey/amazongpt.user.js) /
[Readme](https://amazongpt.kudoai.com/#readme) /
[Discuss](https://github.com/KudoAI/amazongpt/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.autoclearchatgpt.com/images/icons/openai/white/icon48.png?cece513"><img width=21 src="https://assets.autoclearchatgpt.com/images/icons/openai/black/icon48.png?cece513"></picture> [ऑटोक्लियर चैटजीपीटी हिस्ट्री](https://autoclearchatgpt.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://assets.autoclearchatgpt.com/images/badges/awesome/badge.svg?2c0d9fc" style="margin:0 0 -2px 5px"></a>

> यह ऑटो क्लियर एक्सटेंशन आपकी हिस्ट्री को मिटाता है अधिकतम प्राइवेसी के लिए।
<br>[इंस्टॉल](https://docs.autoclearchatgpt.com/#-installation) / 
[रीडमी](https://docs.autoclearchatgpt.com/#readme) / 
[चर्चा करना](https://github.com/adamlui/autoclear-chatgpt-history/discussions)

### <img width=24 src="https://assets.bravegpt.com/images/icons/app/icon48.png"> [BraveGPT](https://bravegpt.com) &nbsp;<a href="https://www.producthunt.com/posts/bravegpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="auto" /></a>

> नवीनतम LLM द्वारा संचालित Brave Search में AI चैट और खोज सारांश जोड़ें!
<br>[इंस्टॉल](https://docs.bravegpt.com/#-installation) / 
[रीडमी](https://docs.bravegpt.com/#readme) / 
[चर्चा करना](https://github.com/KudoAI/bravegpt/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautocontinue.com/images/icons/continue-symbol/white/icon48.png?v=61c4f16"><img width=21 src="https://assets.chatgptautocontinue.com/images/icons/continue-symbol/black/icon48.png?v=61c4f16"></picture> [चैटजीपीटी ऑटो-कंटिन्यू ⏩](https://chatgptautocontinue.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://assets.chatgptautocontinue.com/images/badges/awesome/badge.svg?3c80c0c" style="margin:0 0 -3px 3px"></a>

> जब ChatGPT प्रत्युत्तर कट-ऑफ हो जाएं तो स्वचालित रूप से उत्तर उत्पन्न करना जारी रखें।
<br>[इंस्टॉल](https://docs.chatgptautocontinue.com/#-installation) / 
[रीडमी](https://docs.chatgptautocontinue.com/#readme) / 
[चर्चा करना](https://github.com/adamlui/chatgpt-auto-continue/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/white/icon64.png"><img width=21 src="https://cdn.jsdelivr.net/gh/adamlui/chatgpt-auto-talk@eb7f285/assets/images/icons/openai/black/icon64.png"></picture> [चैटजीपीटी ऑटो-टॉक 📣](https://github.com/adamlui/chatgpt-auto-talk)

> ऑटो-प्ले चैटजीपीटी प्रतिक्रियाएं।
<br>[Install](https://gm.chatgptautotalk.com) /
[Readme](https://github.com/adamlui/chatgpt-auto-talk#readme) /
[Discuss](https://github.com/adamlui/chatgpt-auto-talk/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptautorefresh.com/images/icons/openai/white/icon48.png?a45cf1e"><img width=21 src="https://assets.chatgptautorefresh.com/images/icons/openai/black/icon48.png?a45cf1e"></picture> [चैटजीपीटी ऑटो रिफ्रेश ↻](https://chatgptautorefresh.com) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://assets.chatgptautorefresh.com/images/badges/awesome/badge.svg?1080f44" style="margin:0 0 -2px 5px"></a>

> चैटजीपीटी सत्रों को ताज़ा रखता है, चैट समय सीमा + नेटवर्क त्रुटियों + क्लाउडफ्लेयर जांच को समाप्त करता है।
<br>[इंस्टॉल](https://docs.chatgptautorefresh.com/#-installation) / 
[रीडमी](https://docs.chatgptautorefresh.com/#readme) / 
[चर्चा करना](https://github.com/adamlui/chatgpt-auto-refresh/discussions)

### <img width=23 src="https://assets.ddgpt.com/images/icons/app/icon48.png"> [DuckDuckGPT](https://duckduckgpt.com) &nbsp;<a href="https://www.producthunt.com/posts/duckduckgpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> नवीनतम LLM द्वारा संचालित DuckDuckGo में AI चैट और खोज सारांश जोड़ें!
<br>[इंस्टॉल](https://docs.ddgpt.com/#-installation) / 
[रीडमी](https://docs.ddgpt.com/#readme) / 
[चर्चा करना](https://github.com/KudoAI/duckduckgpt/discussions)

### <picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/icons/app/white/icon48.png"><img width=21 src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt/assets/images/icons/app/black/icon48.png"></picture> [GoogleGPT](https://github.com/KudoAI/googlegpt/#readme) &nbsp;<a href="https://github.com/awesome-scripts/awesome-userscripts#-chatgpt" target="_blank" rel="noopener"><img src="https://cdn.jsdelivr.net/gh/KudoAI/googlegpt@e442863/assets/images/badges/awesome/badge.svg" style="margin:0 0 -2px 5px"></a>

> नवीनतम LLM द्वारा संचालित Google खोज में AI चैट और खोज सारांश जोड़ें!
<br>[इंस्टॉल](https://raw.githubusercontent.com/KudoAI/googlegpt/refs/heads/main/greasemonkey/googlegpt.user.js) /
[रीडमी](https://github.com/KudoAI/googlegpt/#readme) /
[चर्चा करना](https://github.com/KudoAI/googlegpt/discussions)

### <img width=23 src="https://assets.chatgptjs.org/images/icons/platforms/thunderbird/icon32.png?v=e638eac"> <a href="https://micz.it/thunderdbird-addon-thunderai/?utm_source=chatgpt.js-github&utm_medium=referral&utm_content=showcase-link" target="_blank" rel="noopener">ThunderAI</a> &nbsp;<a href="https://addons.thunderbird.net/thunderbird/addon/thunderai/reviews" target="_blank" rel="noopener"><picture><source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://assets.chatgptjs.org/images/badges/5-star/blue-stars.png?v=e638eac"><img width=92 alt="[5-सितारा रेटिंग]" src="https://assets.chatgptjs.org/images/badges/5-star/yellow-stars-in-white-pill.png?v=e638eac"></picture></a>

> अपने ईमेल को बेहतर बनाने के लिए थंडरबर्ड में चैटजीपीटी का उपयोग करें, यहां तक कि मुफ़्त खाते के साथ भी!
<br>[इंस्टॉल](https://addons.thunderbird.net/thunderbird/addon/thunderai/) /
[रीडमी](https://github.com/micz/ThunderAI#readme) /
[सहायता](https://github.com/micz/ThunderAI/issues)

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
यदि आपने chatgpt.js के साथ कुछ बनाया है जिसे आप साझा करना चाहते हैं, तो ईमेल करें <a href="mailto:showcase@chatgptjs.org">showcase@chatgptjs.org</a> या बस एक <a href="https://github.com/KudoAI/chatgpt.js/pulls" target="_blank" rel="noopener">पुल अनुरोध</a>!
</p>

<img height=10px width="100%" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e638eac/assets/images/separators/gradient-aqua.png">

## 🧠 योगदानकर्ता

<a href="https://github.com/KudoAI/chatgpt.js/graphs/contributors">
    <img height=111 width="auto" src="https://contrib.rocks/image?repo=KudoAI/chatgpt.js&anon=1&columns=16" /></a>
<br><br>

सभी योगदान का बहुत स्वागत है!

<img height=10px width="100%" src="https://cdn.jsdelivr.net/gh/KudoAI/chatgpt.js@e638eac/assets/images/separators/gradient-aqua.png">

<div align="center">

**[विज्ञप्ति](https://github.com/KudoAI/chatgpt.js/releases)** /
[यूजरगाइड](https://github.com/KudoAI/chatgpt.js/blob/v3.9.0/docs/USERGUIDE.md) / 
[चर्चा करना](https://github.com/KudoAI/chatgpt.js/discussions) / 
<a href="#top">वापस शीर्ष पर ↑</a>

</div>
