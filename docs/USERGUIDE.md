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
    - [detectLanguage `async`](#detectlanguage-async)
    - [generateRandomIP](#generaterandomip)
    - [get](#get)
    - [getUserLanguage](#getuserlanguage)
    - [isFullScreen](#isfullscreen)
    - [isLoaded `async`](#isloaded-async)
    - [printAllFunctions](#printallfunctions)
    - [randomFloat](#randomfloat)
    - [renderHTML](#renderhtml)
    - [sentiment `async`](#sentiment-async)
    - [suggest `async`](#suggest-async)
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
  - [autoRefresh `api`](#autorefresh-api)
      - [activate](#activate)
      - [deactivate](#deactivate)
      - [nowTimeStamp](#nowtimestamp)
  - [code `api`](#code-api)
    - [minify `async`](#minify-async)
    - [execute](#execute)
    - [extract](#extract)
    - [obfuscate `async`](#obfuscate-async)
    - [refactor `async`](#refactor-async)
    - [review `async`](#review-async)
    - [unminify `async`](#unminify-async)
    - [write `async`](#write-async)
  - [history `api`](#history-api)
    - [isOn](#ison)
    - [isOff](#isoff)
    - [activate](#activate-1)
    - [deactivate](#deactivate-1)
    - [toggle](#toggle)
  - [instructions `api`](#instructions-api)
    - [add `async`](#add-async)
    - [clear `async`](#clear-async)
    - [turnOff `async`](#turnoff-async)
    - [turnOn `async`](#turnon-async)
    - [toggle `async`](#toggle-async)
  - [menu `api`](#menu-api)
    - [open](#open)
    - [close](#close)
  - [response `api`](#response-api)
    - [get](#get-1)
    - [getFromAPI `async`](#getfromapi-async)
    - [getFromDOM](#getfromdom)
    - [getLast `async`](#getlast-async)
    - [regenerate](#regenerate-1)
    - [stopGenerating](#stopgenerating)
  - [settings `api`](#settings-api)
    - [scheme `api subset`](#scheme-api-subset)
      - [isDark](#isdark)
      - [isLight](#islight)
      - [set](#set)
      - [toggle](#toggle-1)
  - [sidebar `api`](#sidebar-api)
    - [append](#append)
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
        document.head.append(chatgptJS);
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
// @require https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@3ff1d910a62b989e02da86c8c4dd3ce14232216e/dist/chatgpt-2.6.3.min.js
// ==/UserScript==

// Your code here...
```

If you don't plan on publishing to these repos, the simpler `https://code.chatgptjs.org/chatgpt-latest.min.js` can be used instead to import the latest minified release.

## Chrome

> **Note** _To use a starter template: [kudoai/chatgpt.js-chrome-starter](https://github.com/kudoai/chatgpt.js-chrome-starter)_

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

### detectLanguage `async`

Asks ChatGPT to detect the language of given text.

**Parameters**:

`text`: A string being the text to detect the language of.

Example code:

```js
(async () => {
    const language = await chatgpt.detectLanguage('我是一個大男孩');
    console.log(language);
    /* Logs:
    Chinese (Traditional) */
})();
```

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
const userLanguage = chatgpt.getUserLanguage();
console.log(userLanguage); // Example output: 'en-US'
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
(async () => {
    if (await chatgpt.isLoaded()) {
        // Do something
    }
})();
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
const randomNumber = chatgpt.randomFloat();
console.log(randomNumber); // Example output: 0.9472113021060851
```

### renderHTML

Cleans and renders given HTML code.

**Parameters**:

`node`: A string representing the HTML to be rendered.

Example code:

```js
document.body.append(
    chatgpt.renderHTML('<div>Hello World!</div>');
);
```

### sentiment `async`

Asks ChatGPT to analyze sentiment from a given text.

**Parameters**:

`text`: A string being the text to be analyzed.

`entity` (optional): A string being the entity to analyze sentiment towards.

Example code:

```js
(async () => {
    const text = 'Are you an #OSS supporter? Do you love JavaScript? Then why not contribute to the future of #AI app development? https://chatgpt.js.org (a #100Builders project) is seeking collabs for exactly this! @withBackdrop';
    const sentiment = await chatgpt.sentiment(text, '100 Builders');
    console.log(sentiment);

    /* Example output:
    The sentiment of the text towards the entity "100 Builders" is strongly positive. The text encourages
    individuals who support open-source software (OSS) and have an affinity for JavaScript to get involved with
    the project. Phrases like "contribute to the future," "seeking collabs," and the inclusion of the hashtag
    #100Builders project indicate a positive and enthusiastic tone, promoting engagement and collaboration
    with the project. */
})();
```

### suggest `async`

Asks ChatGPT to suggest ideas.

**Parameters**:

`ideaType`: A string being the type of idea to suggest.

`details` (optional): A string being details to fine-tune the suggestion.

Example code:

```js
(async () => {
    const suggestions = await chatgpt.suggest('names', 'baby boy');
    console.log(suggestions);

    /* Example output:
    1. Liam
    2. Noah
    3. Ethan
    4. Oliver
    5. Jackson
    6. Aiden
    7. Lucas
    8. Benjamin
    9. Henry
    10. Leo
    11. Samuel
    12. Caleb
    13. Owen
    14. Daniel
    15. Elijah
    16. Matthew
    17. Alexander
    18. James
    19. Nathan
    20. Gabriel */
})();
```

### summarize `async`

Asks ChatGPT to summarize given text.

**Parameters**:

`text`: A string being the text to be summarized.

Example code:

```js
(async () => {
    const summary = await chatgpt.summarize('A very long text...');
    console.log(summary); // Example output: 'A very short text...'
})();
```

### translate `async`

Asks ChatGPT to translate given text to a given language.

**Parameters**:

`text`: A string being the text to translate.

`outputLang`: A string representing the output language of the translation.

Example code:

```js
(async () => {
    const translation = await chatgpt.translate('Hello, how are you?', 'spanish');
    console.log(translation); // Logs: 'Hola, ¿cómo estás?'
})();
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
console.log(chatgpt.settings.scheme.isDark()); // logs `true` or `false`
```

### isLightMode

Returns a boolean value. `true` if the theme is light mode, `false` otherwise.

Example code:

```js
console.log(chatgpt.settings.scheme.isDark()); // logs `true` or `false`
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

`title` (optional): A string which is the title of the alert.

`msg` (optional): A string which is the message to be displayed.

`btns` (optional): An array of functions which will be rendered as clickable buttons.

`checkbox` (optional): A function which will be rendered as a checkbox.

`width` (optional): An integer representing the width of the alert box in `px`.

Example code:

```js
function doSomething() { /* Your code */ }

function doSomethingElse() { /* Your code */ }

function sayHello() { console.log('Hello!'); }

const alertID = chatgpt.alert('Hello, world!', 'The sky is blue.', [doSomething, doSomethingElse], sayHello, 200);
console.log(alertID); // Example output: '1693237957878'
```

### notify

Displays a temporary notification at a specified position in the website.

**Parameters**:

`msg`: A string which is the message to be displayed.

`position` (optional): A string specifying the position of the notification.

`notifDuration` (optional): A float specifying the duration of the notification before it fades out.

`shadow` (optional): A string specifying if the `box-shadow` CSS property should be used.

Example code:

```js
chatgpt.notify('Hello, world!', 'top left', 3, 'on');
```

## User session

### getAccessToken `async`

Returns an account access token as a string.

```js
(async () => {
    const token = await chatgpt.getAccessToken();
    console.log(token); // Example output: 'abcdef[...]'
})();
```

### getAccountDetails `async`

Returns a given account detail as a string.

**Parameters**:

`detail`: A string representing the account detail(s) that will be returned.

Can be the following: `email`, `id`, `image`, `name`, `picture`. If a single detail is passed, it will be returned as a string, if multiple are passed instead, the function will return an object with the requested details. If no details are passed, the function will return an object with all the available details.

```js
(async () => {
    const accountName = await chatgpt.getAccountDetails('name');
    console.log(accountName); // Example output: 'chatgpt.js'

    const accountData = await chatgpt.getAccountDetails('name', 'email');
    console.log(accountData);
    /* Example output:
    {
        name: 'chatgpt.js',
        email: 'showcase@chatgptjs.org'
    }
    */
})();
```

### logout

Logs out the user from the website.

Example code:

```js
chatgpt.logout();
```

## Chats

### askAndGetReply `async`

Sends a given message to ChatGPT and returns the response as a string.

Example code:

```js
(async () => {
    const response = await chatgpt.askAndGetReply('Hello, ChatGPT');
    console.log(response); // Example output: 'Hello user, I'm ChatGPT!'
})();
```

### clearChats `async`

`method` (optional): The string `'api'` or `'dom'` representing the method to use.

> **Note** _The API method does not update DOM chat list (until session refresh)_

### exportChat `async`

Exports a given chat as a file.

**Parameters**:

`chatToGet` (optional): A string representing the chat to get the data from.

Can be the following: `active`, the current chat, `latest`, the latest chat in the list, else the `index`, `title` or `id` of the chat to get. Default is `active` if in a chat, else `latest`.

`format` (optional): A string representing the format of the export file.

Can be the following: `html`, `md`, `pdf` or `text`. Defaults to `html`.

Example code:

```js
(async () => {
    await chatgpt.exportChat('latest', 'html'); // Downloads a '.html' file
})();
```

### getChatData `async`

Returns the requested chat data as a string (if single detail requested) or object of key-value pairs (if multiple details requested).

**Parameters**:

`chatToGet` (optional): A string representing the chat to get the data from.

Can be the following: `active`, the current chat, `latest`, the latest chat in the list, else the `index`, `title` or `id` of the chat to get. Default is `active` if in a chat, else `latest`.

`detailsToGet` (optional): A string or array of strings representing the chat data to retrieve.

Can be the following: `all` to get all details, `id`, `title`, `create_time`, `update_time` or `msg`. To get a single detail, just use a string, to get multiple use an array of strings instead. Default is `all`.

_**If `msg` is the requested detail, the following parameters can be used**_:

`sender` (optional): A string representing the chat member to get the message(s) from.

Can be the following: `user` to get the user message(s), `chatgpt` to get ChatGPT's response(s), `all`/`both` to get both of them. Default is `all`.

`msgToGet` (optional): A string/number representing the chat message to retrieve.

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
  [
    "Certainly! Here are some more specific details...",
    "Certainly! Here are some specific..."
  ]
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
  "chatgpt": [
    "Certainly! Here are some more specific...",
    "Certainly! Here are some specific..."
  ]
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
(async () => {
    const message = await chatgpt.getLastPrompt();
    console.log(message); // Example output: 'Hello from chatgpt.js!'
})();
```

### getLastResponse `async`

Returns the last ChatGPT response as a string.

```js
(async () => {
    const response = await chatgpt.getLastResponse();
    console.log(response); // Example output: 'I am ChatGPT!'
})();
```

### getResponse

If it's a previously created chat, read [chatgpt.getResponseFromDOM](#getresponsefromdom)

If it's a new chat, read [chatgpt.getResponseFromAPI](#getresponsefromapi-async)

### getResponseFromAPI `async`

Returns the Nth response ChatGPT has written in a Nth chat as a string.

**Parameters**:

`chatToGet` (optional): A number representing the index of the chat to get the response from. Defaults to `latest`.

`responseToGet` (optional): A number representing the index of the response to get. Defaults to `latest`.

Example code:

```js
(async () => {
    const response = chatgpt.getResponseFromAPI();
    console.log(response); // Example output: 'Hello from ChatGPT!'
})();
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

console.log(fifthResp); // Example output: 'Hello from ChatGPT!'
```

### isIdle `async`

Returns a boolean value. `true` if ChatGPT has finished generating a response, `false` otherwise.

Example code:

```js
(async () => {
    if (await chatgpt.isIdle()) {
        // Do something
    }
})();
```

### regenerate

Regenerates ChatGPT's response.

Example code:

```js
chatgpt.regenerate();
```

### resend `async`

Re-sends the last user message.

```js
(async () => {
    await chatgpt.resend();
})();
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

`method` (optional): A string representing the method to send the message with, can only be `click`. Usually needed for mobile devices compatibility.

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

`chatToGet` (optional): A number or string representing the `index`, `title` or `id` of the chat to share.

`method` (optional): A string representing the method to share the chat with. Defaults to `clipboard`.

Can be the following: `copy` or `clipboard` to copy the chat URL to clipboard, `alert`, `notify` or `notification` to create an [alert message](#alert) with the details about the shared chat in the website.

```js
(async () => {
    await chatgpt.shareChat(1, 'copy'); // copy/clipboard
})();
```

### speak

Text To Speech (TTS) conversion of a given message.

**Parameters**:

`msg`: A string representing the message to TTS.

`options` (optional): An object containing the options for the vocal synthesizer.

Available options:

 - `voice`: A number representing the index of voices available on the user device.
 - `pitch`: A float representing the pitch of the speech. From `0` to `2`.
 - `speed`: A float representing the speed of the speech. From `0.1` to `10`.

Example code:

```js
(async () => {
    chatgpt.speak(await chatgpt.getLastResponse(), { voice: 1, pitch: 2, speed: 3 });
})();
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
const newChatLink = chatgpt.getNewChatLink();
newChatLink.click();
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

## autoRefresh `api`

API related to keeping the user's session alive and fresh.

#### activate

Activates the auto-refresh functionality.

**Parameters**:

`interval` (optional): A number representing the interval in seconds between sessions refreshes. Defaults to `30`.

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

## code `api`

### minify `async`

Asks ChatGPT to minify the given code.

**Parameters**:

`code`: A string being the code to be minified.

Example code:

```js
(async () => {
    const minifiedCode = await chatgpt.code.minify(`
        function autosizeBox() {
            const newLength = replyBox.value.length
            if (newLength < prevLength) { // if deleting txt
                replyBox.style.height = 'auto' // ...auto-fit height
                if (parseInt(getComputedStyle(replyBox).height) < 55) { // if down to one line
                    replyBox.style.height = '2.15rem' } // ...reset to original height
            }
            replyBox.style.height = replyBox.scrollHeight + 'px'
            prevLength = newLength
        }`);
    console.log(minifiedCode);

    /* Logs:
    'function autosizeBox(){const n=replyBox.value.length;if(n<prevLength){replyBox.style.height='auto';if(parseInt(getComputedStyle(replyBox).height)<55){replyBox.style.height='2.15rem'}}replyBox.style.height=replyBox.scrollHeight+'px';prevLength=n}' */
})();
```

### execute

Asks ChatGPT to execute the given code.

**Parameters**:

`code`: A string being the code to execute.

Example code:

```js
(async () => {
    console.log(await chatgpt.code.execute('return 6 + 5')); // logs '11'
})();
```

### extract

Extracts pure code from response.

**Parameters**:

`msg`: A string being the response to extract code from.

Example code:

```js
(async () => {
    chatgpt.send('What is a short script to delete files?');
    await chatgpt.isIdle();
    const response = await chatgpt.getChatData('active', 'msg', 'chatgpt', 'latest'),
          scriptCode = chatgpt.code.extract(response);
    console.log(scriptCode);

    /* Logs:    
    const fs = require('fs');

    // Specify the path of the file(s) you want to delete
    const filePath = 'path/to/your/file.txt';

    // Delete the file
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting file:', err);
        } else {
            console.log('File deleted successfully');
        }
    }); */
})();
```

### obfuscate `async`

Asks ChatGPT to obfuscate the given code.

**Parameters**:

`code`: A string being the code to obfuscate.

Example code:

```js
(async () => {
    const code = `window[elem].addEventListener('mouseover', toggleTooltip)`
    const obfuscatedCode = await chatgpt.code.obfuscate(code);
    console.log(obfuscatedCode);

    /* Logs:
    '(window[elem])[btoa('YWxlcnRWaWV3')](btoa('bW91c2VyYm94ZXJOYW1l'), btoa('dG9nZ2VkT3V0d2FsbA==')); */
})();
```

### refactor `async`

Asks ChatGPT to refactor the given code.

**Parameters**:

`code`: A string being the code to refactor.

`objective` (optional): A string reprenting the objective of the refactoring. Defaults to `brevity`.

Example code:

```js
(async () => {
    const code =  `
        if (6 > 5) {
            return true;
        } else {
            return false;
        }`;
    const refactoredCode = await chatgpt.code.refactor(code, 'brevity');
    console.log(refactoredCode);

    /* Logs:
    return 6 > 5; */
})();
```

### review `async`

Asks ChatGPT to review given code.

**Parameters**:

`code`: A string being the code to review.

Example code:

```js
(async () => {
    console.log(await chatgpt.code.review('btoa("Hello World")'));

    /* Example output:
    The code appears to be correct. It uses the `btoa` function to encode the string "Hello World" in base64. */
})();
```

### unminify `async`

Asks ChatGPT to unminify the given code.

**Parameters**:

`code`: A string being the code to unminify.

Example code:

```js
(async () => {
    const code = `function autosizeBox(){const n=replyBox.value.length;if(n<prevLength){replyBox.style.height='auto';if(parseInt(getComputedStyle(replyBox).height)<55){replyBox.style.height='2.15rem'}}replyBox.style.height=replyBox.scrollHeight+'px';prevLength=n}`;

    const minifiedCode = await chatgpt.code.unminify(code);
    console.log(minifiedCode);

    /* Logs:
    function autosizeBox() {
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

`prompt`: A string describing the code to generate.

`outputLang`: A string representing the code language to generate the prompt with.

Example code:

```js
(async () => {
    const code = await chatgpt.code.write('Repeat a task every 10 seconds', 'javascript');
    console.log(code);

    /* Logs:
    setInterval(function() {
        // Your task code here
    }, 10000); */
})();
```

## history `api`

API related to the chat history.

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

## instructions `api`

### add `async`

Adds a custom instruction for either the user or ChatGPT.

**Parameters**:

`instruction`: A string being the instruction to be added.

`target`: A string representing the target of the instruction. Can be either `user` or `chatgpt`.

Example code:

```js
(async () => {
    await chatgpt.instructions.add('Detailed and well-explained answers', 'chatgpt');
})();
```

### clear `async`

Clears the custom instructions of either the user or ChatGPT.

**Parameters**:

`target`: A string representing the target of the instruction. Can be either `user` or `chatgpt`.

Example code:

```js
(async () => {
    await chatgpt.instructions.clear('user');
})();
```

### turnOff `async`

Turns off custom instructions.

Example code:

```js
(async () => {
    await chatgpt.instructions.turnOff();
})();
```

### turnOn `async`

Turns on custom instructions.

Example code:

```js
(async () => {
    await chatgpt.instructions.turnOn();
})();
```

### toggle `async`

Toggles on/off custom instructions.

Example code:

```js
(async () => {
    await chatgpt.instructions.toggle();
})();
```

## menu `api`

The small menu that shows up when clicking on the account button.

### open

Opens the menu.

Example code:

```js
chatgpt.menu.open();
```

### close

Closes the menu.

Example code:

```js
chatgpt.menu.close();
```

## response `api`

API related to ChatGPT's responses.

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

## settings `api`

API for interfacing with ChatGPT user settings.

### scheme `api subset`

#### isDark

Returns a boolean value. `true` if the theme is dark mode, `false` otherwise.

Example code:

```js
console.log(chatgpt.settings.scheme.isDark()); // logs `true` or `false`
````

#### isLight

Returns a boolean value. `true` if the theme is light mode, `false` otherwise.

Example code:

```js
console.log(chatgpt.settings.scheme.isLight()); // logs `true` or `false`
````

#### set

Sets the theme to `light`, `dark` or `system`.

**Paremeters**:

`value`: A string being the value to set the theme to.

Example code:

```js
chatgpt.settings.scheme.set('dark');
```

#### toggle

Toggles the theme between light and dark mode.

Example code:

```js
chatgpt.settings.scheme.toggle();
```

## sidebar `api`

API related to the sidebar's behavior.

### append

Appends a new element to the sidebar. Returns the `id` property of the element.

**Parameters**:

`element`: A string being the name of the element to append.

Currently supported elements are [`button`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) and [`dropdown`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select).

`attrs`: An object which contains the attributes of the element to append.

_**Attributes for `button`**_

`label`: A string being the label (displayed text) of the button. Defaults to `chatgpt.js button`.

`icon`: A string being either a url to an image or a base64 encoded string of the image data. Defaults to [this icon](https://raw.githubusercontent.com/KudoAI/chatgpt.js/main/starters/chrome/extension/icons/icon128.png).

`onclick`: A function which is called when the button is clicked. Defaults to `function() {}`.

_**Attributes for `dropdown`**_

`items`: An array of objects where the `text` key is the displayed text of the option, and the `value` key is the value of the option.

Example item object:

```js
{
    text: 'The text to display in the option',
    value: 'The value of the option'
}
```

Example code:

```js
const buttonId = chatgpt.sidebar.append('button', {
    label: 'I am a button!',
    icon: 'https://chat.openai.com/favicon-32x32.png',
    onclick: function() {
        console.log('Clicked!');
    }
});
console.log(buttonId); // Example output: 1693295258727

const dropdownId = chatgpt.sidebar.append('dropdown', {
    items: [
        { text: 'Hello world', value: 'helloworld' },
        { text: 'Hello there', value: 'hellothere' }
    ]
});
console.log(dropdownId); // Example output: 1693294795240
```

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
