<div id="repo-cover" align="center">

<div align="center">

###### <a href="https://github.com/kudoai/chatgpt.js/tree/main/docs"><img height=15 style="margin: 0 3px -2px" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/0fc3060273fcff77d3e2ff968d5c74acdab62beb/media/images/icons/earth-americas-icon32.svg"></a> Việt | <a href="../..#readme">English</a> | <a href="../zh-cn#readme">简体中文</a> | <a href="../zh-tw#readme">繁體中文</a> | <a href="../ja#readme">日本</a> | <a href="../ko#readme">한국인</a> | <a href="../hi#readme">हिंदी</a> | <a href="../de#readme">Deutsch</a> | <a href="../es#readme">Español</a> | <a href="../fr#readme">Français</a> | <a href="../it#readme">Italiano</a> | <a href="../nl#readme">Nederlands</a> | <a href="../pt#readme">Português</a>

</div>

<br>

<h3>

<picture>
    <source type="image/webp" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.webp">
    <source type="image/webp" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
    <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
    <img width=700 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
</picture>
<br><br>

🤖 Thư viện JavaScript phía máy khách mạnh mẽ cho ChatGPT
<br><br>

</div>
</h3>

<div id="shields" align="center">

[![](https://img.shields.io/badge/Giấy_phép-MIT-green.svg?logo=internetarchive&logoColor=white&labelColor=464646&style=for-the-badge)](LICENSE.md)
[![](https://img.shields.io/github/commit-activity/m/kudoai/chatgpt.js?label=Cam+Kết&logo=github&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/kudoai/chatgpt.js/commits/main)
![](https://img.shields.io/github/size/kudoai/chatgpt.js/dist/chatgpt-2.1.0.min.js?label=Kích+Thước+Tối+thiểu&logo=databricks&logoColor=white&labelColor=464646&color=ff69b4&style=for-the-badge)
[![](https://img.shields.io/codefactor/grade/github/kudoai/chatgpt.js?label=Chất+Lượng+Mã&logo=codefactor&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.codefactor.io/repository/github/kudoai/chatgpt.js)
[![](https://img.shields.io/badge/Đề_cập_trong-Awesome-cca8c4?logo=awesomelists&logoColor=white&labelColor=464646&style=for-the-badge)](https://github.com/sindresorhus/awesome-chatgpt#javascript)
[![](https://img.shields.io/badge/Đặc_trưng_trên-Product_Hunt-ff6154?logo=producthunt&logoColor=white&labelColor=464646&style=for-the-badge)](https://www.producthunt.com/posts/chatgpt-js)
![](https://img.shields.io/jsdelivr/gh/hm/kudoai/chatgpt.js?label=jsDelivr+Yêu+Cầu&logo=jsdelivr&logoColor=white&labelColor=464646&color=gold&style=for-the-badge)

</div>

<div id="intro">

## Về

</div>

**chatgpt.js** là một thư viện JavaScript mạnh mẽ cho phép tương tác siêu dễ dàng với ChatGPT DOM.

- Tính năng phong phú
- Hướng đối tượng
- Dễ sử dụng
- Nhẹ (chưa tối ưu hiệu suất)

<picture>
    <source type="image/webp" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.webp">
    <img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png">
</picture>

## ⚡ Nhập thư viện

### ES6:

```js
(async () => {
    await import('https://code.chatgptjs.org/chatgpt-latest.min.js');
    // Mã của bạn ở đây ...
})();
```

### ES5:

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://code.chatgptjs.org/chatgpt-latest.min.js');
xhr.onload = function () {
    if (xhr.status === 200) {
        var chatgptJS = document.createElement('script');
        chatgptJS.textContent = xhr.responseText;
        document.head.appendChild(chatgptJS);
        yourCode(); // chạy mã của bạn
    }
};
xhr.send();

function yourCode() {
    // Mã của bạn ở đây ...
}
```

### <img style="margin: 0 2px -0.065rem 0" height=17 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/starters/media/images/icons/tampermonkey-icon28.png"></picture><img style="margin: 0 2px -0.035rem 1px" height=17.5 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/starters/media/images/icons/violentmonkey-icon100.png"> Greasemonkey:

> **Ghi** _Để sử dụng một mẫu bắt đầu: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/kudoai/chatgpt.js-greasemonkey-starter)_

Userscript repositories like Greasy Fork maintain a whitelist of pre-approved CDNs (such as commit-specific references from `cdn.jsdelivr.net`) so the import URL is substantially lengthier to preserve publishability to these sites:

```js
...
// @require https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@315fc8e62d4d3e82276fbb641128774a0d1c5219/dist/chatgpt-2.1.0.min.js
// ==/UserScript==

// Mã của bạn ở đây ...
```

Nếu bạn không có kế hoạch xuất bản lên các kho lưu trữ này, thì có thể sử dụng `https://code.chatgptjs.org/chatgpt-latest.min.js` đơn giản hơn để nhập bản phát hành rút gọn mới nhất.

### <img style="margin: 0 2px -1px 0" height=16 src="https://www.google.com/chrome/static/images/favicons/apple-icon-60x60.png"> Chrome:

> **Ghi** _Để sử dụng một mẫu bắt đầu: [kudoai/chatgpt.js-chrome-starter](https://github.com/kudoai/chatgpt.js-chrome-starter)_

Vì Google sẽ [cuối cùng loại bỏ](https://developer.chrome.com/docs/extensions/migrating/mv2-sunset/) Manifest V2, mã từ xa sẽ không còn được phép, vì vậy, lý tưởng nhất là nhập chatgpt.js cục bộ:

1. Lưu https://raw.githubusercontent.com/kudoai/chatgpt.js/main/chatgpt.js vào thư mục con (`lib` trong ví dụ này)

2. Thêm câu lệnh xuất ES6 vào cuối `lib/chatgpt.js`
```js
...
export { chatgpt }
```

3. Trong `manifest.json` của dự án (V3), hãy thêm `lib/chatgpt.js` làm tài nguyên có thể truy cập web
```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.js"]
    }],
```

4. Trong các tập lệnh cần `chatgpt.js` (tiền cảnh/nền giống nhau), hãy nhập nó như sau:
```js
(async () => {
    const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'));
    // Mã của bạn ở đây ...
})();
```

<picture>
    <source type="image/webp" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.webp">
    <img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png">
</picture>

<div id="usage">

## 💻 Cách sử dụng

</div>

**chatgpt.js** được viết với tính linh hoạt cực cao.

Ví dụ:

```js
chatgpt.getLastResponse();
chatgpt.getLastReply();
chatgpt.response.getLast();
chatgpt.get('reply', 'last');
```

Mỗi cuộc gọi đều tìm nạp phản hồi cuối cùng. Nếu bạn nghĩ rằng nó hoạt động, nó có thể sẽ... vì vậy hãy gõ nó!

Nếu không, hãy xem [hướng dẫn sử dụng](https://github.com/kudoai/chatgpt.js/blob/main/docs/USERGUIDE.md) mở rộng hoặc chỉ cần gửi [vấn đề](https://github.com/kudoai/chatgpt.js/issues) hoặc [PR](https://github.com/kudoai/chatgpt.js/pulls) và nó sẽ được tích hợp, thật dễ dàng!

<picture>
    <source type="image/webp" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.webp">
    <img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png">
</picture>

<div id="showcase">

## 🤖 Được tạo bằng chatgpt.js

</div>

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [Xóa Lịch Sử ChatGPT](https://autoclearchatgpt.com) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

Tự động xóa lịch sử truy vấn ChatGPT của bạn để có quyền riêng tư tối đa.
<br>[Cài đặt](https://github.com/adamlui/autoclear-chatgpt-history#installation) /
[Đọc tôi](https://github.com/adamlui/autoclear-chatgpt-history#readme) /
[Bàn luận](https://autoclearchatgpt.com/discuss)

### <img width=16 src="https://i.imgur.com/1yjmK3W.png"> [Automatic ChatGPT DAN](https://github.com/madkarmaa/automatic-chatgpt-dan)

Tự động gửi lời nhắc DAN tới ChatGPT.
<br>[Cài đặt](https://github.com/madkarmaa/automatic-chatgpt-dan#%EF%B8%8F-installation) /
[Đọc tôi](https://github.com/madkarmaa/automatic-chatgpt-dan#readme) /
[Bàn luận](https://github.com/madkarmaa/automatic-chatgpt-dan/issues)

### <img src="https://media.bravegpt.com/images/bravegpt-icon48.png" width=18> [BraveGPT](https://bravegpt.com) <a href="https://www.producthunt.com/posts/bravegpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bravegpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385630&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Hiển thị câu trả lời ChatGPT trong thanh bên Brave Search (được cung cấp bởi GPT-4!)
<br>[Cài đặt](https://github.bravegpt.com/#installation) /
[Đọc tôi](https://github.bravegpt.com/#readme) /
[Bàn luận](https://github.bravegpt.com/discussions)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-userscripts/main/media/icons/openai-favicon64.png"></picture> [ChatGPT Tự Động Tiếp Tục ⏩](https://chatgptautocontinue.com) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -3px 3px"></a>

Tiếp tục tạo ra nhiều câu trả lời ChatGPT một cách tự động.<br>
[Cài đặt](https://github.com/adamlui/chatgpt-auto-continue#installation) /
[Đọc tôi](https://github.com/adamlui/chatgpt-auto-continue#readme) /
[Bàn luận](https://chatgptautocontinue.com/discuss)

### <picture><source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/RduASbD.png"><img width=16 src="https://raw.githubusercontent.com/adamlui/chatgpt-addons/main/media/icons/openai-favicon64.png"></picture> [ChatGPT Tự động Cập nhật ↻](https://chatgptautorefresh.com) <a href="https://github.com/awesome-scripts/awesome-userscripts#chatgpt" target="_blank" rel="noopener"><img src="https://awesome.re/mentioned-badge.svg" style="margin:0 0 -2px 5px"></a>

Giữ cho các phiên ChatGPT luôn mới để loại bỏ lỗi mạng + kiểm tra Cloudflare.
<br>[Cài đặt](https://github.com/adamlui/chatgpt-auto-refresh#installation) /
[Đọc tôi](https://github.com/adamlui/chatgpt-auto-refresh#readme) /
[Bàn luận](https://chatgptautorefresh.com/discuss)

### <img src="https://media.duckduckgpt.com/images/ddgpt-icon48.png" width=17> [DuckDuckGPT](https://duckduckgpt.com) <a href="https://www.producthunt.com/posts/duckduckgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-duckduckgpt" target="_blank" rel="noopener"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=379261&theme=light" style="width: 112px; height: 24px; margin:0 0 -4px 5px;" width="112" height="24" /></a>

Hiển thị câu trả lời ChatGPT trong thanh bên DuckDuckGo (do GPT-4 cung cấp!)
<br>[Cài đặt](https://github.duckduckgpt.com/#installation) /
[Đọc tôi](https://github.duckduckgpt.com/#readme) /
[Bàn luận](https://github.duckduckgpt.com/discussions)

<p><br>

<a href="https://chatgptinfinity.com" target="_blank" rel="noopener">
    <picture>
        <source type="image/webp" srcset="https://raw.githubusercontent.com/adamlui/chatgpt-infinity/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.webp">
        <img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-infinity/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png">
    </picture>
</a>

<p><br>

<a href="https://chatgptwidescreen.com" target="_blank" rel="noopener">
    <picture>
        <source type="iage/webp" srcset="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.webp">
        <img width=555 src="https://raw.githubusercontent.com/adamlui/chatgpt-widescreen/main/chrome/media/images/tiles/marquee-promo-tile-1400x560.png">
    </picture>
</a>

<p><br>

<p id="showcase-cta">
Nếu bạn đã tạo nội dung nào đó với chatgpt.js mà bạn muốn chia sẻ, hãy gửi email đến <a href="mailto:showcase@chatgptjs.org">showcase@chatgptjs.org</a> hoặc chỉ cần mở một <a href="https://github.com/kudoai/chatgpt.js/pulls" target="_blank" rel="noopener">pull request</a>!
</p>

<picture>
    <source type="image/webp" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.webp">
    <img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png">
</picture>

<div id="contributors">

## 🧠 Người đóng góp

</div>

Thư viện này tồn tại nhờ mã, bản dịch, vấn đề & ý tưởng từ những người đóng góp sau:

[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/10906554?first-contrib=2023.03.15&h=44&w=44&mask=circle&maxage=7d '@adamlui')](https://github.com/adamlui)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/71683364?first-contrib=2023.03.16-get-functions&h=44&w=44&mask=circle&maxage=7d '@mefengl')](https://github.com/mefengl)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/131989355?first-contrib=2023.04.30-doc-translations&h=44&w=44&mask=circle&maxage=7d '@Zin6969')](https://github.com/Zin6969)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/30551844?first-contrib=2023.05.02-getlastresponse-bug-report&h=44&w=44&mask=circle&maxage=7d '@madruga8')](https://github.com/madruga8)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/54934866?first-contrib=2023.05.01-clearchats-discard-fix&h=44&w=44&mask=circle&maxage=7d '@XiaoYingYo')](https://github.com/XiaoYingYo)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/129722778?first-contrib=2023.05.24-css-readability&h=44&w=44&mask=circle&maxage=7d '@AliAlSarre')](https://github.com/AliAlSarre)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/100418457?first-contrib=2023.06.02-send-function-bug-report&h=44&w=44&mask=circle&maxage=7d '@madkarmaa')](https://github.com/madkarmaa)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/1170326?first-contrib=2023.06.10-html-parser-idea&h=44&w=44&mask=circle&maxage=7d '@wamoyo')](https://github.com/wamoyo)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/33952?first-contrib=2023.06.10-html-parser-idea&h=44&w=44&mask=circle&maxage=7d '@meiraleal')](https://github.com/meiraleal)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/22633385?first-contrib=2023.07.11-fix-ja-doc-md&h=44&w=44&mask=circle&maxage=7d '@eltociear')](https://github.com/eltociear)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/72805486?first-contrib=2023.07.14-enhance-ko-docs&h=44&w=44&mask=circle&maxage=7d '@Rojojun')](https://github.com/Rojojun)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/62183023?first-contrib=2023.07.24-fix-hi-doc&h=44&w=44&mask=circle&maxage=7d '@iamnishantgaharwar')](https://github.com/iamnishantgaharwar)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/629429?first-contrib=2023.07.31-homepage-starry-bg&h=44&w=44&mask=circle&maxage=7d '@hakimel')](https://github.com/hakimel)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/in/29110&h=44&w=44&mask=circle&maxage=7d 'Dependabot')](https://github.com/dependabot)
[![](https://images.weserv.nl/?url=https://i.imgur.com/tNyIPmG.jpg?h=44&w=44&mask=circle&maxage=7d 'ChatGPT')](https://chat.openai.com)
[![](https://images.weserv.nl/?url=https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/icons/poe-icon128.svg?first-contrib=2023.07.27-getandshowreply-method&h=44&w=44&mask=circle&maxage=7d 'Poe')](https://poe.com)
[![](https://images.weserv.nl/?url=https://avatars.githubusercontent.com/u/31427850?h=44&w=44&mask=circle&maxage=7d "@ImgBotApp")](https://github.com/ImgBotApp)

<div id="partners">

## 🤝 Các đối tác

</div>

**chatgpt.js** là một phần của [100.builders](https://100.builders), một vườn ươm AI được tài trợ bởi:

<div id="partners-collage" align="center">

<picture>
    <source type="image/webp" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/logos/partners/collage/chatgpt.js-partners-white.webp">
    <source type="image/webp" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/logos/partners/collage/chatgpt.js-partners-black.webp">
    <source type="image/png" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/logos/partners/collage/chatgpt.js-partners-white.png">
    <img src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/logos/partners/collage/chatgpt.js-partners-black.png">
</picture>

</div>

<br>

<picture>
    <source type="image/webp" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.webp">
    <img height=8px width="100%" src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/separators/aqua.png">
</picture>

<div id="star-history" align="center">

<br>

<a href="https://star-history.com/#kudoai/chatgpt.js&Timeline" target="_blank" rel="noopener">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=kudoai/chatgpt.js&type=Timeline&theme=dark" />
    <img width=665 src="https://api.star-history.com/svg?repos=kudoai/chatgpt.js&type=Timeline" />
  </picture>
</a>

<br>_Hãy cân nhắc cho repo này ⭐ nếu nó giúp ích cho bạn!_

</div>

#

<div align="center">

**[Phát hành](https://github.com/kudoai/chatgpt.js/tree/main/dist)** /
[Hướng dẫn sử dụng](https://github.com/kudoai/chatgpt.js/blob/main/docs/USERGUIDE.md) /
[Bàn luận](https://github.com/kudoai/chatgpt.js/discussions) /
<a href="#">Trở lại đầu trang ↑</a>

</div>
