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
    - [isFullScreen](#isfullscreen)
    - [isLoaded `async`](#isloaded-async)
    - [printAllFunctions](#printallfunctions)
    - [renderHTML](#renderhtml)
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
    - [clearChats](#clearchats)
    - [exportChat](#exportchat)
    - [getChatInput](#getchatinput)
    - [getChatDetails `async`](#getchatdetails-async)
    - [getLastResponse](#getlastresponse)
    - [getResponse](#getresponse)
    - [isIdle `async`](#isidle-async)
    - [regenerate](#regenerate)
    - [scrollToBottom](#scrolltobottom)
    - [send](#send)
    - [sendInNewChat](#sendinnewchat)
    - [startNewChat](#startnewchat)
    - [stop](#stop)
  - [DOM related](#dom-related)
    - [getChatBox](#getchatbox)
    - [getContinueGeneratingButton](#getcontinuegeneratingbutton)
    - [getLastResponseDiv](#getlastresponsediv)
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
  - [history `obj`](#history-obj)
    - [isOn](#ison)
    - [isOff](#isoff)
    - [activate](#activate-1)
    - [deactivate](#deactivate-1)
    - [toggle](#toggle)
  - [response `obj`](#response-obj)
    - [getLast](#getlast)
    - [getLastDiv](#getlastdiv)
    - [getWithIndex](#getwithindex)
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
// @require https://cdn.jsdelivr.net/gh/kudoai/chatgpt.js@8483b553675c3444db5c6b40a8686531c11b2a35/dist/chatgpt-1.12.0.min.js
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

### renderHTML

Example code:

```js
document.body.appendChild(
    chatgpt.renderHTML('<div>Hello World!</div>');
);
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

`detail`: A string representing the account detail that will be returned. Defaults to `email`.

Can be one of the following: `email`, `image`, `name`, `picture`. If it isn't, it will remain the default value.

### logout

Logs out the user from the website.

Example code:

```js
chatgpt.logout();
```

## Chats

### clearChats

Clears the user's chat history.

Example code:

```js
chatgpt.clearChats();
```

### exportChat

Exports the current chat as a text file.

Example code:

```js
chatgpt.exportChat(); // Downloads a file called 'ChatGPT_{day}-{month}-{year}_{hour}-{minute}.txt'
```

### getChatInput

Returns the value of the chat input field as a string.

Example code:

```js
const chatInput = chatgpt.getChatInput();
console.log(chatInput); // Example output: 'Hello from chatgpt.js!'
```

### getChatDetails `async`

Returns a given chat detail as a string.

**Parameters**:

`chat`: A string or number representing the chat. Defaults to `0` (latest chat).

If `chat` is a number, that number will represent the chat index in the list. Defaults to the latest chat.
If `chat` is a string, that string can be either the chat ID or the chat title.

The chat ID is located in the URL. Example: `https://chat.openai.com/c/[chat id]`

`detail`: A string representing the chat detail that will be returned. Defaults to `id`.

Can be one of the following: `id`, `title`, `create_time`, `update_time`. If it isn't, it will remain the default value.

```js
async function doSomething() {
  const chatTitle = await chatgpt.getChatDetails(5, 'title');
  console.log(chatTitle); // Example output: '5th chat title!'
}
```

### getLastResponse

Returns the last response ChatGPT has written as a string.

Example code:

```js
const response = chatgpt.getLastResponse();
console.log(response); // Example output: 'I am ChatGPT, how can I help you?'
```

### getResponse

Returns the Nth response ChatGPT has written as a string.

**Parameters**:

`pos`: A string or integer representing the position of the wanted response.

Example code:

```js
var fifthResp;

fifthResp = chatgpt.getResponse(5); // Returns the 5th response
fifthResp = chatgpt.getResponse('fifth'); // Also returns the 5th response
fifthResp = chatgpt.getResponse('five'); // Returns the 5th response too
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

### getLastResponseDiv

Returns the last response's container HTML element.

Example code:

```js
const container = chatgpt.getLastResponseDiv();
container.style.display = 'none';
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

### getLast

Read [chatgpt.getLastResponse](#getlastresponse)

### getLastDiv

Read [chatgpt.getLastResponseDiv](#getlastresponsediv)

### getWithIndex

Read [chatgpt.getResponse](#getresponse)

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
