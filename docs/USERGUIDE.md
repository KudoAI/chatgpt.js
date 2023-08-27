<div align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-dark-mode-5995x619.png">
        <img width=700 src="https://raw.githubusercontent.com/kudoai/chatgpt.js/main/media/images/chatgpt.js-logo-light-mode-5995x619.png">
    </picture>

**chatgpt.js** is a powerful JavaScript library that allows for super easy interaction w/ the ChatGPT DOM.

</div>

## Table of contents

- [Importing the library](#importing-the-library)
  - [ES6](#es6)
  - [ES5](#es5)
  - [Greasemonkey](#greasemonkey)
  - [Chrome](#chrome)
- [Library methods](#library-methods)
  - [General](#general)
    - [generateRandomIP](#generaterandomip)
    - [get](#get)
    - [getUserLanguage](#getuserlanguage)
    - [isFullScreen](#isfullscreen)
    - [isLoaded `async`](#isloaded-async)
    - [printAllFunctions](#printallfunctions)
    - [randomFloat](#randomfloat)
    - [renderHTML](#renderhtml)
    - [summarize `async`](#summarize-async)
    - [translate `async`](#translate-async)
    - [uuidv4](#uuidv4)
  - [Page theme](#page-theme)
    - [activateDarkMode](#activatedarkmode)
    - [activateLightMode](#activatelightmode)
    - [isDarkMode](#isdarkmode)
    - [isLightMode](#islightmode)
    - [toggleScheme](#togglescheme)
  - [In-site notifications](#in-site-notifications)
    - [alert](#alert)
    - [notify](#notify)
  - [User session](#user-session)
    - [getAccessToken `async`](#getaccesstoken-async)
    - [getAccountDetails `async`](#getaccountdetails-async)
    - [logout](#logout)
  - [Chats](#chats)
    - [actAs `async`](#actas-async)
    - [askAndGetReply `async`](#askandgetreply-async)
    - [clearChats `async`](#clearchats-async)
    - [exportChat `async`](#exportchat-async)
    - [getChatData `async`](#getchatdata-async)
    - [getChatInput](#getchatinput)
    - [getLastPrompt `async`](#getlastprompt-async)
    - [getLastResponse `async`](#getlastresponse-async)
    - [getResponse](#getresponse)
    - [getResponseFromAPI `async`](#getresponsefromapi-async)
    - [getResponseFromDOM](#getresponsefromdom)
    - [isIdle `async`](#isidle-async)
    - [regenerate](#regenerate)
    - [resend `async`](#resend-async)
    - [scrollToBottom](#scrolltobottom)
    - [send](#send)
    - [sendInNewChat](#sendinnewchat)
    - [shareChat `async`](#sharechat-async)
    - [speak](#speak)
    - [startNewChat](#startnewchat)
    - [stop](#stop)
  - [DOM related](#dom-related)
    - [getChatBox](#getchatbox)
    - [getContinueGeneratingButton](#getcontinuegeneratingbutton)
    - [getNewChatLink](#getnewchatlink)
    - [getRegenerateButton](#getregeneratebutton)
    - [getSendButton](#getsendbutton)
    - [getStopGeneratingButton](#getstopgeneratingbutton)
- [Library objects](#library-objects)
  - [autoRefresh `obj`](#autorefresh-obj)
      - [activate](#activate)
      - [deactivate](#deactivate)
      - [nowTimeStamp](#nowtimestamp)
    - [toggle `obj`](#toggle-obj)
      - [beacons](#beacons)
      - [refreshFrame](#refreshframe)
  - [code `obj`](#code-obj)
    - [minify `async`](#minify-async)
    - [obfuscate `async`](#obfuscate-async)
    - [refactor `async`](#refactor-async)
    - [review `async`](#review-async)
    - [unminify `async`](#unminify-async)
    - [write `async`](#write-async)
  - [history `obj`](#history-obj)
    - [isOn](#ison)
    - [isOff](#isoff)
    - [activate](#activate-1)
    - [deactivate](#deactivate-1)
    - [toggle](#toggle)
  - [response `obj`](#response-obj)
    - [get](#get-1)
    - [getFromAPI `async`](#getfromapi-async)
    - [getFromDOM](#getfromdom)
    - [getLast `async`](#getlast-async)
    - [regenerate](#regenerate-1)
    - [stopGenerating](#stopgenerating)
  - [scheme `obj`](#scheme-obj)
    - [isDark](#isdark)
    - [isLight](#islight)
    - [toggle](#toggle-1)
  - [sidebar `obj`](#sidebar-obj)
    - [isOn](#ison-1)
    - [isOff](#isoff-1)
    - [hide](#hide)
    - [show](#show)
    - [toggle](#toggle-2)

# Importing the library

## ES6

```js
(async () => {
    await import('https://code.chatgptjs.org/chatgpt-latest.min.js');
    // Your code here...
})();
```

## ES5

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://code.chatgptjs.org/chatgpt-latest.min.js');
xhr.onload = function () {
    if (xhr.status === 200) {
        var chatgptJS = document.createElement('script');
        chatgptJS.textContent = xhr.responseText;
        document.head.appendChild(chatgptJS);
        yourCode(); // runs your code
    }
};
xhr.send();

function yourCode() {
    // Your code here...
}
```

## Greasemonkey

> **Note** _To use a starter template: [kudoai/chatgpt.js-greasemonkey-starter](https://github.com/kudoai/chatgpt.js-greasemonkey-starter)_

Userscript repositories like Greasy Fork maintain a whitelist of pre-approved CDNs (such as commit-specific references from `cdn.jsdelivr.net`) so the import URL is substantially lengthier to preserve publishability to these sites:

```js
...
// @require https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@a73c962d8ea7a48d81e8fd260c91b23175753b59/dist/chatgpt-2.1.1.min.js
// ==/UserScript==

// Your code here...
```

If you don't plan on publishing to these repos, the simpler `https://code.chatgptjs.org/chatgpt-latest.min.js` can be used instead to import the latest minified release.

## Chrome

> **Note** _To use a starter template: [kudoai/chatgpt.js-chrome-starter](https://github.com/kudoai/chatgpt.js-chrome-starter)_

Since Google will [eventually phase out](https://developer.chrome.com/docs/extensions/migrating/mv2-sunset/) Manifest V2, remote code will no longer be allowed, so importing chatgpt.js locally is ideal:

1. Save https://raw.githubusercontent.com/kudoai/chatgpt.js/main/chatgpt.js to a subdirectory (`lib` in this example)

2. Add ES6 export statement to end of `lib/chatgpt.js`

```js
...
export { chatgpt }
```

3. In project's (V3) `manifest.json`, add `lib/chatgpt.js` as a web accessible resource

```json
    "web_accessible_resources": [{
        "matches": ["<all_urls>"],
        "resources": ["lib/chatgpt.js"]
    }],
```

4. In scripts that need `chatgpt.js` (foreground/background alike), import it like so:

```js
(async () => {
    const { chatgpt } = await import(chrome.runtime.getURL('lib/chatgpt.js'));
    // Your code here...
})();
```

# Library methods

Unless noted otherwise, methods are **synchronous**: they wait for the operation to finish, instead of returning immediately. If you need to know the result of calling **asynchronous** methods, use the returned promise or pass a callback function into the method.

## General

### generateRandomIP

Returns a random IP address as a string.

Example code:

```js
const randomIP = chatgpt.generateRandomIP();
console.log(randomIP); // Example output: '161.192.110.125'
```

### get

Example code:

```js
var response;

response = chatgpt.get('reply', 'last');
// Equivalent of
response = chatgpt.getLastResponse();
```

### getUserLanguage

Returns the user language as a string.

Example code:

```js
const lang = chatgpt.getUserLanguage();
console.log(lang); // Example output: 'en-US'
```

### isFullScreen

Returns a boolean value. `true` if the website is fullscreen and `false` otherwise.

Example code:

```js
if (chatgpt.isFullScreen()) {
    // Do something
}
```

### isLoaded `async`

Returns a boolean value. `true` if the website has finished loading, `false` otherwise.

Example code:

```js
async function doSomething() {
    if (await chatgpt.isLoaded()) {
        // Do something
    }
}
```

### printAllFunctions

Prints all the library functions to the console.

Example code:

```js
chatgpt.printAllFunctions();
```

### randomFloat

Returns a random, cryptographically secure float number between 0 (inclusive) and 1 (exclusive).

Example code:

```js
const number = chatgpt.randomFloat();
console.log(number); // Example output: 0.9472113021060851
```

### renderHTML

Cleans and renders given HTML code.

**Parameters**:

`node`: A string representing the HTML to be rendered.

Example code:

```js
document.body.appendChild(
    chatgpt.renderHTML('<div>Hello World!</div>');
);
```

### summarize `async`

Asks ChatGPT to summarize given text.

**Parameters**:

`text`: A string being the text to be summarized.

Example code:

```js
async function doSomething() {
    await chatgpt.summarize('A very long text...'); // Example output: 'A very short text...'
}
```

### translate `async`

Asks ChatGPT to translate given text to a given language.

**Parameters**:

`text`: A string being the text to translate.

`outputLang`: A string representing the output language of the translation.

Example code:

```js
async function doSomething() {
    await chatgpt.translate('Hello, how are you?', 'spanish'); // Example output: 'Hola, ¿cómo estás?'
}
```

### uuidv4

Example code:

```js
const randomID = chatgpt.uuidv4();
console.log(randomID); // Example output: '239067d1-bcb8-4fd7-91eb-9ab94619b7b3'
```

## Page theme

### activateDarkMode

Changes the website theme to dark mode.

Example code:

```js
chatgpt.activateDarkMode();
```

### activateLightMode

Changes the website theme to light mode.

Example code:

```js
chatgpt.activateLightMode();
```

### isDarkMode

Returns a boolean value. `true` if the theme is dark mode, `false` otherwise.

Example code:

```js
if (chatgpt.isDarkMode()) {
    // Do something
}
```

### isLightMode

Returns a boolean value. `true` if the theme is light mode, `false` otherwise.

Example code:

```js
if (chatgpt.isLightMode()) {
    // Do something
}
```

### toggleScheme

Toggles the theme between light and dark mode.

Example code:

```js
chatgpt.toggleScheme();
```

## In-site notifications

### alert

Creates a static alert box which displays a message. Only a user interaction can close it. Returns the HTML `id` property of the alert box as a string.

**Parameters**:

`title`: A string which is the title of the alert.

`msg`: A string which is the message to be displayed.

`btns`: An array of functions which will be rendered as clickable buttons.

`checkbox`: A function which will be rendered as a checkbox.

`width`: An integer representing the width of the alert box in `px`.

Example code:

```js
function doSomething() { ... }

function doSomethingElse() { ... }

function sayHello() { console.log('Hello!'); }

chatgpt.alert('Hello, world!', 'The sky is blue.', [doSomething, doSomethingElse], sayHello, 200);
```

### notify

Displays a temporary notification at a specified position in the website.

**Parameters**:

`msg`: A string which is the message to be displayed.

`position`: A string specifying the position of the notification.

`notifDuration`: A float specifying the duration of the notification before it fades out.

`shadow`: A string specifying if the `box-shadow` CSS property should be used.

Example code:

```js
chatgpt.notify('Hello, world!', 'top left', 3, 'on');
```

## User session

### getAccessToken `async`

Returns an account access token as a string.

```js
async function doSomething() {
    const token = await chatgpt.getAccessToken();
    console.log(token); // Example output: 'abcdef[...]'
}
```

### getAccountDetails `async`

Returns a given account detail as a string.

**Parameters**:

`detail`: A string representing the account detail(s) that will be returned.

Can be the following: `email`, `id`, `image`, `name`, `picture`. If a single detail is passed, it will be returned as a string, if multiple are passed instead, the function will return an object with the requested details. If no details are passed, the function will return an object with all the available details.

```js
async function doSomething() {
    const name = await chatgpt.getAccountDetails('name');
    console.log(name); // Example output: 'chatgpt.js'

    const data = await chatgpt.getAccountDetails('name', 'email');
    console.log(data);
    /* Example output:
  {
    name: 'chatgpt.js',
    email: 'showcase@chatgptjs.org'
  }
  */
}
```

### logout

Logs out the user from the website.

Example code:

```js
chatgpt.logout();
```

## Chats

### actAs `async`

Sends a pre-made prompt to ChatGPT.

> **Note**: Find prompts at [https://github.com/KudoAI/chat-prompts](https://github.com/KudoAI/chat-prompts/blob/main/personas.json)

**Parameters**:

`persona`: A string representing the title (or _persona_) of the prompt to send in the chat. If none is provided, the avaiable prompts will be listed in the console.

Example code:

```js
async function doSomething() {
    await chatgpt.actAs('Linux Terminal');
}
```

### askAndGetReply `async`

Sends a given message to ChatGPT and returns the response as a string.

Example code:

```js
async function doSomething() {
    const response = await chatgpt.askAndGetReply('Hello, ChatGPT');
    console.log(response); // Example output: 'Hello user, I'm ChatGPT!'
}
```

### clearChats `async`

Clears the user's chat history.

Example code:

```js
async function doSomething() {
    await chatgpt.clearChats();
}
```

### exportChat `async`

Exports a given chat as a file.

**Parameters**:

`chatToGet`: A string representing the chat to get the data from.

Can be the following: `active`, the current chat, `latest`, the latest chat in the list, else the `index`, `title` or `id` of the chat to get. Default is `active` if in a chat, else `latest`.

`format`: A string representing the format of the export file.

Can be the following: `html`, `md`, `pdf` or `text`. Defaults to `html`.

Example code:

```js
async function doSomething() {
    await chatgpt.exportChat('latest', 'html'); // Downloads a '.html' file
}
```

### getChatData `async`

Returns the requested chat data.

**Parameters**:

`chatToGet`: A string representing the chat to get the data from.

Can be the following: `active`, the current chat, `latest`, the latest chat in the list, else the `index`, `title` or `id` of the chat to get. Default is `active` if in a chat, else `latest`.

`detailsToGet`: A string representing the chat data to retrieve.

Can be the following: `all` to get all details, `id`, `title`, `create_time`, `update_time` or `msg`. To get a single detail, just use a string, to get multiple use an array of strings instead. Default is `all`.

_**If `msg` is the requested detail, the following parameters can be used**_:

`sender`: A string representing the chat member to get the message(s) from.

Can be the following: `user` to get the user message(s), `chatgpt` to get ChatGPT's response(s), `all`/`both` to get both of them. Default is `all`.

`msgToGet`: A string/number representing the chat message to retrieve.

Can be the following: `all` to get all the messages in the chat, `latest` to get the latest message/response, or the `index` of the message. Default is `all`.

> **Note** _If any **user** messages were edited, they are added to the index as newly sent messages_

Example code **for all return types**:

_**All details from specified chat**_

```js
await chatgpt.getChatData();
// or
await chatgpt.getChatData('latest'); // can also be 'active', 'title of the chat' or 'id of the chat'
// or
await chatgpt.getChatData('latest', 'all');
```

_Returns a JSON object_

```json
{
    "create_time": "2023-07-19T13:24:05.618539+00:00",
    "id": "e193a219-2311-4232-95f5-8e3a0e466652",
    "title": "Lemons: Citrus Fruit Overview.",
    "update_time": "2023-07-19T13:24:18+00:00"
}
```

_**Specific detail(s) from specified chat**_

```js
await chatgpt.getChatData('latest', ['id', 'title']);
```

_Returns a JSON object_

```json
{
    "id": "e193a219-2311-4232-95f5-8e3a0e466652",
    "title": "Lemons: Citrus Fruit Overview."
}
```

_**All messages from both participants in a specified chat**_

```js
await chatgpt.getChatData('latest', 'msg');
// or
await chatgpt.getChatData('latest', 'msg', 'all'); // all/both
// or
await chatgpt.getChatData('latest', 'msg', 'all', 'all');
```

_Returns an array of JSON objects_

In case of a response being regenerated, the `chatgpt` object key will be converted to an array containing all the responses.

```json
[
    {
        "user": "what are lemons",
        "chatgpt": "Lemons are a type of citrus fruit that belongs..."
    },
    {
        "user": "be more specific",
        "chatgpt": [
            "Certainly! Here are some more specific...",
            "Certainly! Here are some specific..." // regenerated responses!
        ]
    }
]
```

_**All messages from a specific participant in a specified chat**_

```js
await chatgpt.getChatData('latest', 'msg');
// or
await chatgpt.getChatData('latest', 'msg', 'chatgpt'); // user/chatgpt
// or
await chatgpt.getChatData('latest', 'msg', 'chatgpt', 'all');
```

_Returns an array of strings/arrays_

In case of a response being regenerated and the requested participant being `chatgpt`, it'll be converted to an array containing all the responses.

```json
[
    "Lemons are a type of citrus fruit that belongs...",
    ["Certainly! Here are some more specific details...", "Certainly! Here are some specific..."]
]
```

_**One/latest message from both participants in a specified chat**_

```js
await chatgpt.getChatData('latest', 'msg', 'all', 2); // can also be 'latest' message
```

_Returns a JSON object_

In case of a response being regenerated, the `chatgpt` object key will be converted to an array containing all the responses.

```json
{
    "user": "be more specific",
    "chatgpt": ["Certainly! Here are some more specific...", "Certainly! Here are some specific..."]
}
```

_**One/latest message from a specific participant in a specified chat**_

```js
await chatgpt.getChatData('latest', 'msg', 'chatgpt', 2);
```

_Returns a string or an array of strings_

In case of a response being regenerated, the `chatgpt` object key will be converted to an array containing all the responses.

```json
"Certainly! Here are some more specific..."
// or
[
    "Certainly! Here are some more specific...",
    "Certainly! Here are some specific..."
]
```

### getChatInput

Returns the value of the chat input field as a string.

Example code:

```js
const chatInput = chatgpt.getChatInput();
console.log(chatInput); // Example output: 'Hello from chatgpt.js!'
```

### getLastPrompt `async`

Returns the last message sent by the user as a string.

```js
async function doSomething() {
    const message = await chatgpt.getLastPrompt();
    console.log(message); // Example output: 'Hello from chatgpt.js!'
}
```

### getLastResponse `async`

Returns the last ChatGPT response as a string.

```js
async function doSomething() {
    const response = await chatgpt.getLastResponse();
    console.log(response); // Example output: 'I am ChatGPT!'
}
```

### getResponse

If it's a previously created chat, read [chatgpt.getResponseFromDOM](#getresponsefromdom)

If it's a new chat, read [chatgpt.getResponseFromAPI](#getresponsefromapi-async)

### getResponseFromAPI `async`

Returns the Nth response ChatGPT has written in a Nth chat as a string.

**Parameters**:

`chatToGet`: A number representing the index of the chat to get the response from. Defaults to `latest`.

`responseToGet`: A number representing the index of the response to get. Defaults to `latest`.

Example code:

```js
async function doSomething() {
    const response = chatgpt.getResponseFromAPI();
    console.log(response);
}
```

### getResponseFromDOM

Returns the Nth response ChatGPT has written as a string.

**Parameters**:

`pos`: A string or integer representing the position of the wanted response.

Example code:

```js
var fifthResp;

fifthResp = chatgpt.getResponseFromDOM(5); // Returns the 5th response
fifthResp = chatgpt.getResponseFromDOM('fifth'); // Also returns the 5th response
fifthResp = chatgpt.getResponseFromDOM('five'); // Returns the 5th response too
```

### isIdle `async`

Returns a boolean value. `true` if ChatGPT has finished generating a response, `false` otherwise.

Example code:

```js
async function doSomething() {
    if (await chatgpt.isIdle()) {
        // Do something
    }
}
```

### regenerate

Regenerates ChatGPT's response.

Example code:

```js
chagpt.regenerate();
```

### resend `async`

Re-sends the last user message.

```js
async function doSomething() {
    await chatgpt.resend();
}
```

### scrollToBottom

Scrolls to the bottom of the chat.

Example code:

```js
chatgpt.scrollToBottom();
```

### send

Sends a message into the chat.

**Parameters**:

`msg`: A string representing the message to send.

`method`: A string representing the method to send the message with, can only be `click`. Usually needed for mobile devices compatibility.

Example code:

```js
// Clicks the send button instead of triggering the 'Enter' key press.
chatgpt.send('Hello, world!', 'click');
```

### sendInNewChat

Creates a new chat and sends a message.

**Parameters**:

`msg`: A string representing the message to send.

Example code:

```js
chatgpt.sendInNewChat('Hello, world!');
```

### shareChat `async`

Makes the selected chat available to others. Returns the URL of the chat as a string.

**Parameters**:

`chatToGet`: A number or string representing the `index`, `title` or `id` of the chat to share.

`method`: A string representing the method to share the chat with. Defaults to `clipboard`.

Can be the following: `copy` or `clipboard` to copy the chat URL to clipboard, `alert`, `notify` or `notification` to create an [alert message](#alert) with the details about the shared chat in the website.

```js
async function doSomething() {
    await chatgpt.shareChat(1, 'copy'); // copy/clipboard
}
```

### speak

Text To Speech (TTS) conversion of a given message.

**Parameters**:

`msg`: A string representing the message to TTS.

`options`: An object containing the options for the vocal synthesizer.

Available options:

-   `voice`: A number representing the index of voices available on the user device.
-   `pitch`: A float representing the pitch of the speech. From `0` to `2`.
-   `speed`: A float representing the speed of the speech. From `0.1` to `10`.

Example code:

```js
async function doSomething() {
    chatgpt.speak(await chatgpt.getLastResponse(), { voice: 1, pitch: 2, speed: 3 });
}
```

### startNewChat

Creates a new chat.

Example code:

```js
chatgpt.startNewChat();
```

### stop

Stops the generation of ChatGPT's response.

Example code:

```js
chatgpt.stop();
```

## DOM related

### getChatBox

Returns the chat input as an HTML element.

Example code:

```js
const chatbox = chatgpt.getChatBox();
console.log(chatbox.value); // Example output: 'Hello from chatgpt.js!'
```

### getContinueGeneratingButton

Returns the 'Continue generating' button as an HTML element.

Example code:

```js
const continueButton = chatgpt.getContinueGeneratingButton();
continueButton.click();
```

### getNewChatLink

Returns the button which creates a new chat as an HTML element.

Example code:

```js
const link = chatgpt.getNewChatLink();
link.click();
```

### getRegenerateButton

Returns the button which regenerates ChatGPT's response as an HTML element.

Example code:

```js
const regenButton = chatgpt.getRegenerateButton();
regenButton.click();
```

### getSendButton

Returns the button which sends the message as an HTML element.

Example code:

```js
const sendButton = chatgpt.getSendButton();
sendButton.click();
```

### getStopGeneratingButton

Returns the button which stops the generation of ChatGPT's response as an HTML element.

Example code:

```js
const stopButton = chatgpt.getStopGeneratingButton();
stopButton.click();
```

# Library objects

## autoRefresh `obj`

Object related to keeping the user's session alive and fresh.

#### activate

Activates the auto-refresh functionality.

**Parameters**:

`interval`: A number representing the interval in seconds between sessions refreshes. Defaults to `30`.

Example code:

```js
chatgpt.autoRefresh.activate();
```

#### deactivate

Deactivates the auto-refresh functionality.

Example code:

```js
chatgpt.autoRefresh.deactivate();
```

#### nowTimeStamp

Returns the current timestamp as a string (12-hour format).

Example code:

```js
const timeStamp = chatgpt.autoRefresh.nowTimeStamp();
console.log(timeStamp); // Example output: '1:56:25 PM'
```

### toggle `obj`

#### beacons

Example code:

```js
chatgpt.autoRefresh.toggle.beacons();
```

#### refreshFrame

Example code:

```js
chatgpt.autoRefresh.toggle.refreshFrame();
```

## code `obj`

### minify `async`

Asks ChatGPT to minify the given code.

**Parameters**:

`code`: A string being the code to be minified.

Example code:

```js
(async () => {
    const minifiedCode = await chatgpt.code.minify(
        `function autosizeBox() {
             const newLength = replyBox.value.length
             if (newLength < prevLength) { // if deleting txt
                 replyBox.style.height = 'auto' // ...auto-fit height
                 if (parseInt(getComputedStyle(replyBox).height) < 55) { // if down to one line
                     replyBox.style.height = '2.15rem' } // ...reset to original height
             }
             replyBox.style.height = replyBox.scrollHeight + 'px'
             prevLength = newLength
        }`
    );
    console.log(minifiedCode); // logs 'function autosizeBox(){const n=replyBox.value.length;if(n<prevLength){replyBox.style.height='auto';if(parseInt(getComputedStyle(replyBox).height)<55){replyBox.style.height='2.15rem'}}replyBox.style.height=replyBox.scrollHeight+'px';prevLength=n}'
})();
```

### obfuscate `async`

Asks ChatGPT to obfuscate the given code.

**Parameters**:

`code`: A string being the code to be refactored.

Example code:

```js
(async () => {
    const obfuscatedCode = await chatgpt.code.obfuscate(`window[elem].addEventListener('mouseover', toggleTooltip)`);
    console.log(obfuscatedCode); // logs '(window[elem])[btoa('YWxlcnRWaWV3')](btoa('bW91c2VyYm94ZXJOYW1l'), btoa('dG9nZ2VkT3V0d2FsbA=='));'
})();
```

### refactor `async`

Asks ChatGPT to refactor the given code.

**Parameters**:

`code`: A string being the code to be refactored.

`objective`: A string reprenting the objective of the refactoring. Defaults to `brevity`.

Example code:

```js
async function doSomething() {
    const code = `
  if (6 > 5) {
    return true;
  } else {
    return false;
  }
  `;
    await chatgpt.code.refactor(code, 'brevity'); // Example output: 'return 6 > 5;'
}
```

### review `async`

Asks ChatGPT to review given code.

**Parameters**:

`code`: A string being the code to be reviewed.

Example code:

```js
async function doSomething() {
    await chatgpt.code.review('btoa("Hello World")');
    /* Example output:
  The code appears to be correct. It uses the `btoa` function to encode the string "Hello World" in base64. */
}
```

### unminify `async`

Asks ChatGPT to unminify the given code.

**Parameters**:

`code`: A string being the code to be unminify.

Example code:

```js
(async () => {
    const minifiedCode = await chatgpt.code.unminify(
        `function autosizeBox(){const n=replyBox.value.length;if(n<prevLength){replyBox.style.height='auto';if(parseInt(getComputedStyle(replyBox).height)<55){replyBox.style.height='2.15rem'}}replyBox.style.height=replyBox.scrollHeight+'px';prevLength=n}`
    );
    console.log(minifiedCode);
    /* logs `function autosizeBox() {
             const newLength = replyBox.value.length
             if (newLength < prevLength) { // if deleting txt
                 replyBox.style.height = 'auto' // ...auto-fit height
                 if (parseInt(getComputedStyle(replyBox).height) < 55) { // if down to one line
                     replyBox.style.height = '2.15rem' } // ...reset to original height
             }
             replyBox.style.height = replyBox.scrollHeight + 'px'
             prevLength = newLength
        }` */
})();
```

### write `async`

Asks ChatGPT to write code given a prompt.

**Parameters**:

`prompt`: A string describing the code to be generated.

`outputLang`: A string representing the code language to generate the prompt with.

Example code:

```js
async function doSomething() {
    await chatgpt.code.write('Repeat a task every 10 seconds', 'javascript');
    /* Example output:
  setInterval(function() {
    // Your task code here
  }, 10000); */
}
```

## history `obj`

Object related to the chat history.

### isOn

Returns a boolean value. `true` if the chat history is enabled, `false` otherwise.

Example code:

```js
if (chatgpt.history.isOn()) {
    // Do something
}
```

### isOff

Returns a boolean value. `true` if the chat history is disabled, `false` otherwise.

Example code:

```js
if (chatgpt.history.isOff()) {
    // Do something
}
```

### activate

Activates the chat history.

Example code:

```js
chatgpt.history.activate();
```

### deactivate

Deactivates the chat history.

Example code:

```js
chatgpt.history.deactivate();
```

### toggle

Toggles the chat history.

Example code:

```js
chatgpt.history.toggle();
```

## response `obj`

Object related to ChatGPT's responses.

### get

If it's a previously created chat, read [chatgpt.getResponseFromDOM](#getresponsefromdom)

If it's a new chat, read [chatgpt.getResponseFromAPI](#getresponsefromapi-async)

### getFromAPI `async`

Read [chatgpt.getResponseFromAPI](#getresponsefromapi-async)

### getFromDOM

Read [chatgpt.getResponseFromDOM](#getresponsefromdom)

### getLast `async`

Read [chatgpt.getLastResponse](#getlastresponse-async)

### regenerate

Read [chatgpt.regenerate](#regenerate)

### stopGenerating

Read [chatgpt.stop](#stop)

## scheme `obj`

Object related to the website's theme.

### isDark

Read [chatgpt.isDarkMode](#isdarkmode)

### isLight

Read [chatgpt.isLightMode](#islightmode)

### toggle

Read [chatgpt.toggleScheme](#togglescheme)

## sidebar `obj`

Object related to the sidebar's behavior.

### isOn

Returns a boolean value. `true` if the sidebar is open, `false` otherwise.

Example code:

```js
if (chatgpt.sidebar.isOn()) {
    // Do something
}
```

### isOff

Returns a boolean value. `true` if the sidebar is closed, `false` otherwise.

Example code:

```js
if (chatgpt.sidebar.isOff()) {
    // Do something
}
```

### hide

Hides the sidebar.

Example code:

```js
chatgpt.sidebar.hide();
```

### show

Shows the sidebar.

Example code:

```js
chatgpt.sidebar.show();
```

### toggle

Toggles the visibility of the sidebar.

Example code:

```js
chatgpt.sidebar.toggle();
```

<br>
<br>

[Discuss](https://github.com/kudoai/chatgpt.js/discussions) /
<a href="#">Back to top ↑</a>
