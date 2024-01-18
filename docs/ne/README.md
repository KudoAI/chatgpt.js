<div id="repo-cover" align="center">

<div align="center">
    <h6>
        <a href="https://github.com/kudoai/chatgpt.js/tree/main/docs">
            <picture>
                <source type="image/svg+xml" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/media/images/icons/earth-americas-white-padded-icon17x15.svg">
                <img src="https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/media/images/icons/earth-americas-padded-icon17x15.svg">
            </picture>
        </a>
        नेपाली |
        <a href="../..#readme">English</a> |
        <a href="../hi#readme"> हिंदी</a> |
        <a href="../zh-cn#readme">简体中文</a> |
        <a href="../zh-tw#readme">繁體中文</a> |
        <a href="../ja#readme">日本</a> |
        <a href="../ko#readme">한국인</a> |
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

<picture>
    <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/logos/chatgpt.js/with-reflection/darkmode.png">
    <img width=800 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/logos/chatgpt.js/with-reflection/lightmode.png">
</picture>

### 🤖 ChatGPT को लागि एक शक्तिशाली क्लाइन्ट-साइड जावास्क्रिप्ट लाइब्रेरी

</div>

<br>

<div id="shields" align="center">

[![](https://img.shields.io/github/stars/KudoAI/chatgpt.js?label=Stars&color=gold&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/KudoAI/chatgpt.js/stargazers)
[![](https://img.shields.io/badge/License-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/kudoai/chatgpt.js?label=Commits&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/kudoai/chatgpt.js/commits/main)
![](https://img.shields.io/github/size/kudoai/chatgpt.js/dist/chatgpt-2.6.3.min.js?label=Minified%20Size&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge)
[![](https://img.shields.io/codacy/grade/696917c8e5a949c49edb89ed2f43d5ba?label=Code+Quality&logo=codacy&logoColor=white&labelColor=464646&color=1acc6c&style=for-the-badge)](https://app.codacy.com/gh/KudoAI/chatgpt.js/commits?utm_source=chatgpt%2Ejs&utm_content=github_shield)
[![](https://img.shields.io/badge/Mentioned_in-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/sindresorhus/awesome-chatgpt#javascript)
[![](https://img.shields.io/badge/Featured_on-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.producthunt.com/posts/chatgpt-js)
![](https://img.shields.io/jsdelivr/gh/hm/kudoai/chatgpt.js?label=jsDelivr+Hits&logo=jsdelivr&logoColor=white&labelColor=464646&color=9146ff&style=for-the-badge)

</div>

<img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/docs/assets/separators/aqua.png">

<div id="intro">

## 💡 अभाउट

</div>

<span style="color: white">chatgpt.js</span> एक <span style="color: white">शक्तिशाली</span> जावास्क्रिप्ट लाइब्रेरी हो जसले ChatGPT DOM सँग<span style="color: white"> धेरै सजीलो</span> अन्तरक्रियाको लागि अनुमति दिन्छ।

- सुविधा संपन्न
- ऑब्जेक्ट-ओरिएन्टेड
- प्रयोग गर्न सजिलो
- लाइटवेट (तरपनी राम्रो प्रदर्शन गर्ने)

<img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/docs/assets/separators/aqua.png">

<div id="importing">

## ⚡ लाइब्रेरी इम्पोर्ट गर्ने तरिकाहरू

</div>

### ES6:

```js
(async () => {
    await import('https://code.chatgptjs.org/chatgpt-latest.min.js');    
    // आफ्नो कोड यहाँ लेख्नुहोस्...
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
        document.head.append(chatgptJS)
        yourCode() // तपाईंको कोड यो फंक्शनले चलाउनेछ
    }
}
xhr.send()

function yourCode() {
    // आफ्नो कोड यहाँ लेख्नुहोस्...
}
```

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/starters/media/images/icons/tampermonkey-icon28.png"></picture><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/starters/media/images/icons/violentmonkey-icon100.png"> Greasemonkey:

> **टिप्पणी** _स्टार्टर टेम्प्लेट प्रयोग गर्न: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/kudoai/chatgpt.js-greasemonkey-starter)_

यूजरस्क्रिप्ट जस्तै ग्रेसी फोर्क रिपोजिटरीहरूले पूर्व-अनुमोदित CDN हरू (जस्तै `cdn.jsdelivr.net` बाट कमिट स्पेसिफिक रेफरेंस) को श्वेतसूची कायम राख्छन् त्यसैले यी साइटहरूमा प्रकाशनयोग्यता जोगाउन इम्पोर्ट URL पर्याप्त रूपमा लामो हुन्छ:

```js
...
// @require https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@3ff1d910a62b989e02da86c8c4dd3ce14232216e/dist/chatgpt-2.6.3.min.js
// ==/UserScript==

// आफ्नो कोड यहाँ लेख्नुहोस्...
```

यदि तपाइँ यी रिपोहरूमा प्रकाशन गर्ने योजना बनाउनुहुन्न भने, सबैभन्दा सरल लेटेस्‍ट मिनिफाइड रिलिज आयात गर्नको लागि `https://code.chatgptjs.org/chatgpt-latest.min.js` प्रयोग गर्न सकिन्छ।

### <img style="margin: 0 2px -1px 0" height=16 src="https://www.google.com/chrome/static/images/favicons/apple-icon-60x60.png"> Chrome:

> **टिप्पणी** _स्टार्टर टेम्प्लेट प्रयोग गर्न: [kudoai/chatgpt.js-chrome-starter](https://github.com/kudoai/chatgpt.js-chrome-starter)_

गुगलले रिमोट कोडलाई अनुमति नदिने भएकोले, स्थानीय रूपमा chatgpt.js आयात गर्न आवश्यक छ:

1. https://raw.githubusercontent.com/kudoai/chatgpt.js/main/chatgpt.js यो लिङ्क तपाईंको आफ्‍नो सब डायरेक्टरी मा सेव गर्नुहोस् (यो उदाहरण मा `lib` हो)

2. ES6 को एक्सपोर्ट स्टेटमेंट `lib/chatgpt.js` को अन्‍त्‍यमा राख्‍नुहोस् |

```js
...
export { chatgpt }
```

3. प्रोजेक्ट(V3) `manifest.json` मा, `lib/chatgpt.js` लाई वेब एक्सेसिबल रिसोर्स को रूप मा जोडनुहोस्‌ |
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.js"]
    }],
```

4. स्क्रिप्टहरूमा जसलाई `chatgpt.js` (फॉरेग्राउंड बैकग्राउंड समान) चाहिन्छ, यसलाई यसरी इम्पोर्ट गर्नुहोस्:
```js
(async () => {
    const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'));
    // आफ्नो कोड यहाँ लेख्नुहोस्...
})();
```

<img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/docs/assets/separators/aqua.png">

<div id="usage">

## 💻 प्रयोग

</div>

**chatgpt.js** अति लचिलोपनलाई ध्यानमा राखेर लेखिएको छ।

उदाहरणका लागि:

```js
chatgpt.getLastResponse()
chatgpt.getLastReply()
chatgpt.response.getLast()
chatgpt.get('reply', 'last')
```

माथिको प्रत्येक कलले समान रूपमा अन्तिम प्रतिक्रिया ल्याउँछ। यदि तपाइँले सोच्नुहुन्छ कि तपाइँले लेखेको काम गर्छ वा गर्दैन..., संभावना छ कि त्‍यो काम गर्नेछ, त्यसैले त्‍यसलाई लेख्नुहोस् र हेर्नुहोस्।

यदि त्यसो भएन भने, यो विस्तारित [यूजरगाइड](https://github.com/kudoai/chatgpt.js/blob/main/docs/USERGUIDE.md) हेर्नुहोस्, अथवा एउटा [इश्यू](https://github.com/kudoai/chatgpt.js/issues) सबमिट गर्नुहोस् अथवा [PR](https://github.com/kudoai/chatgpt.js/pulls) अनि यस्‍लाई समावेश गरिनेछ, निकै सजिलो!

<img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/docs/assets/separators/aqua.png">

<div id="showcase">

## 🤖 chatgpt.js सँग बनाइएको

</div>

https://github.com/KudoAI/chatgpt.js/assets/10906554/f53c740f-d5e0-49b6-ae02-3b3140b0f8a4

#

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ऑटोक्लियर ChatGPT हिस्ट्री](https://autoclearchatgpt.com) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

> यो ऑटो क्लियर एक्सटेंशनले अधिकतम गोपनीयताको लागि तपाईँको ChatGPT हिस्ट्री स्वतः मेटाउनेछ।
<br>[इंस्टॉल](https://github.com/adamlui/autoclear-chatgpt-history#-installation) / 
[रीडमी](https://github.com/adamlui/autoclear-chatgpt-history#readme) / 
[चर्चा](https://autoclearchatgpt.com/discuss)

### <img width=16 src="https://i.imgur.com/1yjmK3W.png"> [ऑटोमैटिक ChatGPT DAN](https://github.com/madkarmaa/automatic-chatgpt-dan)

> ChatGPTलाई ऑटोमैटिक रूपमा DAN संकेत पठाउनुहोस्।
<br>[इंस्टॉल](https://github.com/madkarmaa/automatic-chatgpt-dan#%EF%B8%8F-installation) / 
[रीडमी](https://github.com/madkarmaa/automatic-chatgpt-dan#readme) / 
[चर्चा](https://github.com/madkarmaa/automatic-chatgpt-dan/issues)

### <img src="https://media.bravegpt.com/images/icons/bravegpt/icon48.png" width=18> [BraveGPT](https://bravegpt.com) <a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> Brave सर्च साइडबार मा ChatGPT जवाफहरू प्रदर्शन गर्नुहोस् (GPT-4 द्वारा संचालित!)
<br>[इंस्टॉल](https://greasyfork.org/scripts/462440-bravegpt) / 
[रीडमी](https://github.bravegpt.com/#-installation) / 
[चर्चा](https://github.bravegpt.com/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT ऑटो-कंटिन्यू ⏩](https://chatgptautocontinue.com) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -3px 3px"></a>

> ऑटोमैटिक रूपमा ChatGPT प्रतिक्रियाहरू उत्पन्न गर्न जारी राख्नुहोस् ।
<br>[इंस्टॉल](https://github.com/adamlui/chatgpt-auto-continue#-installation) / 
[रीडमी](https://github.com/adamlui/chatgpt-auto-continue#readme) / 
[चर्चा](https://chatgptautocontinue.com/discuss)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ChatGPT ऑटो रिफ्रेश ↻](https://chatgptautorefresh.com) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

> Cloudflare जाँचहरू नेटवर्क त्रुटिहरू हटाउन ChatGPT सत्रहरू ताजा राख्नुहोस्।
<br>[इंस्टॉल](https://github.com/adamlui/chatgpt-auto-refresh#-installation) / 
[रीडमी](https://github.com/adamlui/chatgpt-auto-refresh#readme) / 
[चर्चा](https://chatgptautorefresh.com/discuss)

### <img src="https://media.ddgpt.com/images/icons/duckduckgpt/icon48.png" width=17> [DuckDuckGPT](https://duckduckgpt.com) <a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

> DuckDuckGo साइडबार मा ChatGPT जवाफहरू प्रदर्शन गर्नुहोस् (GPT-4 द्वारा संचालित!)
<br>[इंस्टॉल](https://github.duckduckgpt.com/#-installation) / 
[रीडमी](https://github.duckduckgpt.com/#readme) / 
[चर्चा](https://github.duckduckgpt.com/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://media.googlegpt.io/images/icons/googlegpt/white/icon32.png"><img width=17 src="https://media.googlegpt.io/images/icons/googlegpt/black/icon32.png"></picture> [GoogleGPT](https://googlegpt.kudoai.com)

> Google Search साइडबार मा ChatGPT जवाफहरू प्रदर्शन गर्नुहोस् (GPT-4 द्वारा संचालित!)
<br>[इंस्टॉल](https://greasyfork.org/scripts/478597-googlegpt) /
[रीडमी](https://github.com/KudoAI/googlegpt#readme) /
[चर्चा](https://github.com/KudoAI/googlegpt/discussions)

<p><br>

<a href="https://chatgptinfinity.com" target="_blank" rel="noopener">
    <img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-infinity/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png">
</a>

<p><br>

<a href="https://chatgptwidescreen.com" target="_blank" rel="noopener">
    <img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png">
</a>

<p><br>

<p id="showcase-cta">
यदि तपाईंले साझा गर्न चाहनुभएको chatgpt.js सँग केही बनाउनु भएको छ भने, इमेल गर्नुहोस्<a href="mailto:showcase@chatgptjs.org">showcase@chatgptjs.org</a> या एक <a href="https://github.com/kudoai/chatgpt.js/pulls" target="_blank" rel="noopener">पुल अनुरोध</a>!
</p>

<img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/docs/assets/separators/aqua.png">

<div id="contributors">

## 🧠 योगदानकर्ता

</div>

यो लाइब्रेरी निम्नलिखित योगदानकर्ताको कोड, अनुवाद, मुद्दा र विचार को कारणले अवस्थित छ:

<div align="center"><br>

[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/10906554?first-contrib=2023.03.15&h=51&w=51&mask=circle&maxage=7d '@adamlui')](https://github.com/adamlui)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/71683364?first-contrib=2023.03.16-get-functions&h=51&w=51&mask=circle&maxage=7d '@mefengl')](https://github.com/mefengl)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/131989355?first-contrib=2023.04.30-doc-translations&h=51&w=51&mask=circle&maxage=7d '@Zin6969')](https://github.com/Zin6969)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/30551844?first-contrib=2023.05.02-getlastresponse-bug-report&h=51&w=51&mask=circle&maxage=7d '@madruga8')](https://github.com/madruga8)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/54934866?first-contrib=2023.05.01-clearchats-discard-fix&h=51&w=51&mask=circle&maxage=7d '@XiaoYingYo')](https://github.com/XiaoYingYo)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/129722778?first-contrib=2023.05.24-css-readability&h=51&w=51&mask=circle&maxage=7d '@AliAlSarre')](https://github.com/AliAlSarre)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/100418457?first-contrib=2023.06.02-send-function-bug-report&h=51&w=51&mask=circle&maxage=7d '@madkarmaa')](https://github.com/madkarmaa)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/1170326?first-contrib=2023.06.10-html-parser-idea&h=51&w=51&mask=circle&maxage=7d '@wamoyo')](https://github.com/wamoyo)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/33952?first-contrib=2023.06.10-html-parser-idea&h=51&w=51&mask=circle&maxage=7d '@meiraleal')](https://github.com/meiraleal)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/22633385?first-contrib=2023.07.11-fix-ja-doc-md&h=51&w=51&mask=circle&maxage=7d '@eltociear')](https://github.com/eltociear)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/72805486?first-contrib=2023.07.14-enhance-ko-docs&h=51&w=51&mask=circle&maxage=7d '@Rojojun')](https://github.com/Rojojun)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/62183023?first-contrib=2023.07.24-fix-hi-doc&h=51&w=51&mask=circle&maxage=7d '@iamnishantgaharwar')](https://github.com/iamnishantgaharwar)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/629429?first-contrib=2023.07.31-homepage-starry-bg&h=51&w=51&mask=circle&maxage=7d '@hakimel')](https://github.com/hakimel)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/73983677?first-contrib=2023.08.23-fix-readme-typos&h=51&w=51&mask=circle&maxage=7d '@omahs')](https://github.com/omahs)
[![](https://images.weserv.nl/?url=https://i.imgur.com/DQVC7vj.jpg?first-contrib=2023.09.19-add-dmarc-policy&h=51&w=51&mask=circle&maxage=7d 'Najam Ul Arfeen')](https://www.linkedin.com/in/najam-ul-arfeen-khan/)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/110587589?first-contrib=2023.10.13-translate-docs-to-nepali&h=51&w=51&mask=circle&maxage=7d '@iambijayd')](https://github.com/iambijayd)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/4698976?first-contrib=2023.10.29-remove-outdated-mv2-preface-from-docs&h=51&w=51&mask=circle&maxage=7d '@abhinavm24')](https://github.com/abhinavm24)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/77867745?first-contrib=2023.11.4-getchatdetails-bug-report&h=51&w=51&mask=circle&maxage=7d '@deyvisml')](https://github.com/deyvisml)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/150537240?first-contrib=2023.11.15-regenerate-btn-changed-bug-email&h=51&w=51&mask=circle&maxage=7d '@philly88r')](https://github.com/philly88r)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/9730392?first-contrib=2023.12.18-get-response-from-dom-request&h=51&w=51&mask=circle&maxage=7d '@thomasgauthier')](https://github.com/thomasgauthier)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/42911524?first-contrib=2024.1.17-add-custom-gpt-support&h=51&w=51&mask=circle&maxage=7d '@pranav-bhatt')](https://github.com/pranav-bhatt)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/in/29110&h=51&w=51&mask=circle&maxage=7d 'Dependabot')](https://github.com/dependabot)
[![](https://images.weserv.nl/?url=https://i.imgur.com/tNyIPmG.jpg?h=51&w=51&mask=circle&maxage=7d 'ChatGPT')](https://chat.openai.com)
[![](https://images.weserv.nl/?url=https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/icons/poe-icon128.svg?first-contrib=2023.07.27-getandshowreply-method&h=51&w=51&mask=circle&maxage=7d 'Poe')](https://poe.com)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/31427850?h=51&w=51&mask=circle&maxage=7d "@ImgBotApp")](https://github.com/ImgBotApp)

</div><br>

<img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/docs/assets/separators/aqua.png">

<div id="partners">

## 🤝 साझेदारहरू

</div>

**chatgpt.js** लाई आंशिक रूपमा वित्त पोषित गरिएको छ:

<div id="partners-collage" align="center">

<picture>
    <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/logos/partners/collage/white.png">
    <img width=888 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/logos/partners/collage/black.png">
</picture>

</div>

<br>

<img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/docs/assets/separators/aqua.png">

<div align="center">

**[विज्ञप्ति](https://github.com/kudoai/chatgpt.js/tree/main/dist)** /
[यूजरगाइड](https://github.com/kudoai/chatgpt.js/blob/main/docs/USERGUIDE.md) / 
[चर्चा](https://github.com/kudoai/chatgpt.js/discussions) / 
<a href="#">शीर्षमा जाऔं ↑</a>

</div>
